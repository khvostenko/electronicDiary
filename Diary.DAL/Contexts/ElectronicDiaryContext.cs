using System.Data.Entity;
using Diary.DAL.Configurations;
using Diary.DAL.Models;

namespace Diary.DAL.Contexts
{
    public class ElectronicDiaryContext:DbContext
    {
        public ElectronicDiaryContext():base("name=ElectronicDiary")
        {
            Database.SetInitializer<AuthorizationContext>(new CreateDatabaseIfNotExists<AuthorizationContext>());
        }

        public virtual DbSet<Administrator> Administrators { get; set; }
        public virtual DbSet<Faculty> Faculties { get; set; }
        public virtual DbSet<Group> Groups { get; set; }
        public virtual DbSet<Mark> Marks { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<Tutor> Tutors { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new CustomRoleConfiguration());
            modelBuilder.Configurations.Add(new CustomUserClaimsConfigurations());
            modelBuilder.Configurations.Add(new CustomUserLoginsConfigurations());
            modelBuilder.Configurations.Add(new CustomUserRolesConfigurations());

            modelBuilder.Configurations.Add(new AdministratorConfiguration());
            modelBuilder.Configurations.Add(new FacultyConfiguration());
            modelBuilder.Configurations.Add(new GroupConfiguration());
            modelBuilder.Configurations.Add(new MarkConfiguration());
            modelBuilder.Configurations.Add(new StudentConfiguration());
            modelBuilder.Configurations.Add(new SubjectConfiguration());
            modelBuilder.Configurations.Add(new TutorConfiguration());
            modelBuilder.Configurations.Add(new UserConfiguration());
            modelBuilder.Configurations.Add(new MessageConfiguration());

        }
    }
}
