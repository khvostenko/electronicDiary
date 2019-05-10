using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class StudentConfiguration:EntityTypeConfiguration<Student>
    {
        public StudentConfiguration()
        {
            ToTable("dbo.Students");

            HasKey(x => x.Id);

            HasMany(x => x.Marks)
                .WithOptional(y => y.Student)
                .HasForeignKey(x => x.StudentId);
        }
    }
}
