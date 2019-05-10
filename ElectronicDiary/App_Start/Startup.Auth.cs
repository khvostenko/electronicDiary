using ElectronicDiary.Providers;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;

namespace ElectronicDiary
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

        public void ConfigureAuth(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);

            OAuthOptions = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/token"),
                Provider = new ElectronicDiaryOAuthProvider(),
                AccessTokenExpireTimeSpan = new TimeSpan(30, 0, 0, 0),
                AllowInsecureHttp = true
            };

            app.UseOAuthBearerTokens(OAuthOptions);

        }
    }
}
