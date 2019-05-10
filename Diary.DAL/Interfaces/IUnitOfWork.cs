using Diary.DAL.Models;

namespace Diary.DAL.Interfaces
{
    public interface IUnitOfWork:System.IDisposable
    {
        IGenericRepository<Administrator> AdministratorRepository { get; }
        IGenericRepository<Faculty> FacultyRepository { get; }
        IGenericRepository<Group> GroupRepository { get; }
        IGenericRepository<Mark> MarkRepository { get; }
        IGenericRepository<Student> StudentRepository { get; }
        IGenericRepository<Subject> SubjectRepository { get; }
        IGenericRepository<Tutor> TutorRepository { get; }
        IGenericRepository<User> UserRepository { get; }
        IGenericRepository<Message> MessageRepository { get; }
        void Save();
    }
}
