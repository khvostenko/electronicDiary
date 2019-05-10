using System.Data.Entity.ModelConfiguration;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class GroupConfiguration : EntityTypeConfiguration<Group>
    {
        public GroupConfiguration()
        {
            ToTable("dbo.Groups");

            HasKey(x => x.Id);

            Property(x => x.Name).IsRequired();

            HasMany(x => x.Students)
                .WithOptional(y => y.Group)
                .HasForeignKey(x => x.GroupId);

        }
            
    }
}
