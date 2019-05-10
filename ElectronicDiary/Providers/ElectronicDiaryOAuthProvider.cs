using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using Diary.BLL.Interfaces;
using Diary.DAL.Models;
using Diary.BLL.Identity;

namespace ElectronicDiary.Providers
{
    public class ElectronicDiaryOAuthProvider : OAuthAuthorizationServerProvider
    {
        private readonly IAuthenticationServicecs authenticationServicecs;

        public ElectronicDiaryOAuthProvider()
        {
            this.authenticationServicecs = new AuthenticationService();
        }

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            await Task.Run(() => context.Validated());
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            User user = await authenticationServicecs.Find(context.UserName, context.Password);
            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }

            ClaimsIdentity oAuthIdentity = await authenticationServicecs.CreateIdentity(user, OAuthDefaults.AuthenticationType);
            oAuthIdentity.AddClaim(new Claim(ClaimTypes.Email, user.Email));
            var rolesString = await authenticationServicecs.GetAllRolesJson(user.Id);
            AuthenticationProperties properties = CreateProperties(user.UserName, rolesString, user.Id, user.LockoutEnabled);
            AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, properties);

            context.Validated(ticket);
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        private AuthenticationProperties CreateProperties(string userName, string roles, long id, bool isBlocked)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "userName", userName },
                { "roles", roles },
                { "id", id.ToString() },
                { "isBlocked", isBlocked.ToString() }
            };
            return new AuthenticationProperties(data);
        }
    }
}