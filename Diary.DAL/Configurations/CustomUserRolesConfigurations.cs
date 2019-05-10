using Diary.DAL.Identity;
using System.Data.Entity.ModelConfiguration;

namespace Diary.DAL.Configurations
{
    internal class CustomUserRolesConfigurations : EntityTypeConfiguration<CustomUserRole>
    {
        public CustomUserRolesConfigurations()
        {
            ToTable("dbo.UserRoles");

            HasKey(x => new { x.UserId, x.RoleId });
        }
    }
}
