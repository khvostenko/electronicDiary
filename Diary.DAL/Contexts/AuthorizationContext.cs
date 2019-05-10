using System.Collections.Generic;
using System.Data.Entity;
using Diary.DAL.Configurations;
using Diary.DAL.Identity;
using Diary.DAL.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Diary.DAL.Contexts
{
    public class AuthorizationContext:IdentityDbContext<User,CustomRole,long,CustomUserLogin,CustomUserRole,CustomUserClaim>
    {
        public AuthorizationContext():base("name=ElectronicDiary")
        {
            Database.SetInitializer<AuthorizationContext>(new CreateDatabaseIfNotExists<AuthorizationContext>());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new FacultyConfiguration());
            modelBuilder.Configurations.Add(new AdministratorConfiguration());
            modelBuilder.Configurations.Add(new TutorConfiguration());
            modelBuilder.Configurations.Add(new StudentConfiguration());
            modelBuilder.Configurations.Add(new UserConfiguration());
            modelBuilder.Configurations.Add(new SubjectConfiguration());
            modelBuilder.Configurations.Add(new GroupConfiguration());
            modelBuilder.Configurations.Add(new MarkConfiguration());
            modelBuilder.Configurations.Add(new MessageConfiguration());
            modelBuilder.Entity<Subject>()
                .HasMany<Group>(s => s.Groups)
                .WithMany(c => c.Subjects)
                .Map(cs =>
                        {
                            cs.MapLeftKey("SubjectRefId");
                            cs.MapRightKey("GroupRefId");
                            cs.ToTable("SubjectGroup");
                        });
            ConfigureIdentityTables(modelBuilder);
        }

        private void ConfigureIdentityTables(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CustomRole>().ToTable("dbo.Roles");
            modelBuilder.Entity<CustomUserRole>().ToTable("dbo.UserRoles");
            modelBuilder.Entity<CustomUserLogin>().ToTable("dbo.UserLogins");
            modelBuilder.Entity<CustomUserClaim>().ToTable("dbo.UserClaims");
        }
    }
}
