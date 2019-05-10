using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class UserConfiguration:EntityTypeConfiguration<User>
    {
        public UserConfiguration()
        {
            ToTable("dbo.Users");
        }
    }
}
