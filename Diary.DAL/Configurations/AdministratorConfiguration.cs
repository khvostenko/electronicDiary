using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class AdministratorConfiguration:EntityTypeConfiguration<Administrator>
    {
        public AdministratorConfiguration()
        {
            ToTable("dbo.Administrators");
        }
    }
}
