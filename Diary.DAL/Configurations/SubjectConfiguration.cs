using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class SubjectConfiguration: EntityTypeConfiguration<Subject>
    {
        public SubjectConfiguration()
        {
            ToTable("dbo.Subjects");

            HasKey(x => x.Id);

            Property(x => x.Name).IsRequired();
            Property(x => x.IsExam).IsRequired();

            HasMany(x => x.Marks)
                .WithOptional(y => y.Subject)
                .HasForeignKey(x => x.SubjectId);
        }
    }
}
