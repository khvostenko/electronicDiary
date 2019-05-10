using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class FacultyConfiguration:EntityTypeConfiguration<Faculty>
    {
        public FacultyConfiguration()
        {
            ToTable("dbo.Faculties");

            HasKey(x => x.Id);
            Property(x => x.Name);

            HasMany(x => x.Groups)
                .WithRequired(y => y.Faculty)
                .HasForeignKey(y => y.FacultyId);

            HasMany(x => x.Users)
                .WithOptional(y => y.Faculty)
                .HasForeignKey(x => x.FacultyId);

        }
    }
}
