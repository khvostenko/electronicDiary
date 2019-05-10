using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class MarkConfiguration:EntityTypeConfiguration<Mark>
    {
        public MarkConfiguration()
        {
            ToTable("dbo.Marks");
        }
    }
}
