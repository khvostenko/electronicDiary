using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Identity;

namespace Diary.DAL.Configurations
{
    internal class CustomRoleConfiguration:EntityTypeConfiguration<CustomRole>
    {
        public CustomRoleConfiguration()
        {
            ToTable("dbo.Roles");

            HasKey(x => x.Id);
        }
    }
}
