using Diary.DAL.Identity;
using System.Data.Entity.ModelConfiguration;

namespace Diary.DAL.Configurations
{
    internal class CustomUserLoginsConfigurations : EntityTypeConfiguration<CustomUserLogin>
    {
        public CustomUserLoginsConfigurations()
        {
            ToTable("dbo.UserLogins");

            HasKey(x => new { x.ProviderKey, x.LoginProvider, x.UserId });
        }
    }
}
