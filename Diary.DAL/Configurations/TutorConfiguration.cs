using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class TutorConfiguration:EntityTypeConfiguration<Tutor>
    {
        public TutorConfiguration()
        {
            ToTable("dbo.Tutors");

            HasKey(x => x.Id);

            HasMany(x => x.Subjects)
                .WithOptional(y => y.Tutor)
                .HasForeignKey(x => x.TutorId);
        }
    }
}
