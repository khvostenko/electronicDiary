using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Identity;
using Diary.DAL.Models;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;

namespace Diary.BLL.Identity
{
    public class AuthenticationService : IAuthenticationServicecs
    {
        private readonly IElectronicDiaryIdentityProvider provider;

        public AuthenticationService()
        {
            this.provider = new ElectronicDiaryIdentityProvider();
        }

        public async Task<IdentityResult> CreateAsync(User user)
        {
            using (var context = provider.Context)
            {
                IUserManager userManager = provider.GetUserManager(context);
                var result = await userManager.CreateAsync(user);

                return result;
            }
        }

        public async Task<ClaimsIdentity> CreateIdentity(User user, string authenticationType)
        {
            using (var context = provider.Context)
            {
                IUserManager userManager = provider.GetUserManager(context);
                var userIdentity = await userManager.CreateIdentityAsync(user, authenticationType);

                return userIdentity;
            }
        }

        public async Task<User> Find(string userName, string password)
        {
            using (var context = provider.Context)
            {
                IUserManager userManager = provider.GetUserManager(context);
                User user = await userManager.FindAsync(userName, password);

                return user;
            }
        }

        public async Task<User> FindAsync(UserLoginInfo info)
        {
            using (var context = provider.Context)
            {
                IUserManager userManager = provider.GetUserManager(context);
                User user = await userManager.FindAsync(info);

                return user;
            }
        }

        public ICollection<RoleDTO> GetAllRoles()
        {
            using (var context = provider.Context)
            {
                return context.Roles
                    .Select(r => new RoleDTO()
                    {
                        Id = r.Id,
                        Name = r.Name
                    }).ToList();
            }
        }

        public async Task<string> GetAllRolesJson(long userId)
        {
            using (var context = provider.Context)
            {
                var manager = provider.GetUserManager(context);
                var listRoles = await manager.GetRolesAsync(userId);
                var rolesString = JsonConvert.SerializeObject(listRoles);

                return rolesString;
            }
        }

        public async Task<bool> HasRegistered(UserLoginInfo info)
        {
            var user = await FindAsync(info);

            return user != null;
        }

        public async Task<IdentityResult> RegisterUser(UserRegisterDTO userRegister)
        {
            User usr = null;

            if(userRegister.RoleName=="Student")
            {
                usr = new Student()
                {
                    UserName = userRegister.StudentCardId,
                    FacultyId = userRegister.FacultyId,
                    FullName = userRegister.Name,
                    GroupId = userRegister.GroupId,
                    StudentCardId = userRegister.StudentCardId,
                    PhoneNumber = userRegister.PhoneNumber,
                    Email = userRegister.Email
                };
            }
            else if(userRegister.RoleName=="Tutor")
            {
                usr = new Tutor()
                {
                    UserName = userRegister.Email,
                    FacultyId = userRegister.FacultyId,
                    FullName = userRegister.Name,
                    Email = userRegister.Email,
                    PhoneNumber = userRegister.PhoneNumber
                };
            }
            else
            {
                usr = new Administrator()
                {
                    UserName = userRegister.Email,
                    FacultyId = userRegister.FacultyId,
                    FullName = userRegister.Name,
                    Email = userRegister.Email,
                    PhoneNumber = userRegister.PhoneNumber
                };
            }

            using (var context = provider.Context)
            {
                IUserManager userManager = provider.GetUserManager(context);
                IdentityResult result = null;

                try
                {
                    result = await userManager.CreateAsync(usr, userRegister.Password);
                }
                catch(Exception ex)
                {
                    throw ex;
                }

                if(result.Succeeded)
                {
                    result = await userManager.AddToRolesAsync(usr.Id, userRegister.RoleName);
                }

                return result;
            }
        }

        public string GenerateLocalAccessTokenResponse(User user, OAuthAuthorizationServerOptions options)
        {
            ClaimsIdentity identity = CreateExternalIdentity(user, options.AuthenticationType);
            identity.AddClaim(new Claim(ClaimTypes.Name, user.UserName));
            var props = new AuthenticationProperties()
            {
                IssuedUtc = DateTime.UtcNow,
                ExpiresUtc = DateTime.UtcNow.AddDays(14)
            };

            var ticket = new AuthenticationTicket(identity, props);
            var accessToken = options.AccessTokenFormat.Protect(ticket);

            return accessToken;
        }
            

        private ClaimsIdentity CreateExternalIdentity(User user, string authenticationType)
        {
            using (var context = provider.Context)
            {
                var manager = provider.GetUserManager(context);

                return manager.CreateExternalIdentity(user, authenticationType);
            }
        }
    }
}
