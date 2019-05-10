using Diary.DAL.Identity;
using System.Data.Entity.ModelConfiguration;

namespace Diary.DAL.Configurations
{
    internal class CustomUserClaimsConfigurations : EntityTypeConfiguration<CustomUserClaim>
    {
        public CustomUserClaimsConfigurations()
        {
            ToTable("dbo.UserClaims");

            HasKey(x => x.Id);
        }
    }
}
