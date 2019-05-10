using Diary.DAL.Interfaces;
using Diary.DAL.Models;
using Diary.DAL.Contexts;

namespace Diary.DAL.Repositories
{
    public class UnitOfWork:IUnitOfWork
    {
        private ElectronicDiaryContext context = new ElectronicDiaryContext();
        private IGenericRepository<Administrator> administratorRepository;
        private IGenericRepository<Faculty> facultyRepository;
        private IGenericRepository<Group> groupRepository;
        private IGenericRepository<Mark> markRepository;
        private IGenericRepository<Student> studentRepository;
        private IGenericRepository<Subject> subjectRepository;
        private IGenericRepository<Tutor> tutorRepository;
        private IGenericRepository<User> userRepository;
        private IGenericRepository<Message> messageRepository;

        public IGenericRepository<Administrator> AdministratorRepository
        {
            get
            {
                if (administratorRepository == null) 
                {
                    administratorRepository = new GenericRepository<Administrator>(context);
                }
                return administratorRepository;
            }
        }

        public IGenericRepository<Faculty> FacultyRepository
        {
            get
            {
                if (facultyRepository == null)
                {
                    facultyRepository = new GenericRepository<Faculty>(context);
                }
                return facultyRepository;
            }
        }

        public IGenericRepository<Group> GroupRepository
        {
            get
            {
                if (groupRepository == null)
                {
                    groupRepository = new GenericRepository<Group>(context);
                }
                return groupRepository;
            }
        }

        public IGenericRepository<Mark> MarkRepository
        {
            get
            {
                if (markRepository == null)
                {
                    markRepository = new GenericRepository<Mark>(context);
                }
                return markRepository;
            }
        }
        public IGenericRepository<Student> StudentRepository
        {
            get
            {
                if (studentRepository == null)
                {
                    studentRepository = new GenericRepository<Student>(context);
                }
                return studentRepository;
            }
        }

        public IGenericRepository<Subject> SubjectRepository
        {
            get
            {
                if (subjectRepository == null)
                {
                    subjectRepository = new GenericRepository<Subject>(context);
                }
                return subjectRepository;
            }
        }

        public IGenericRepository<Tutor> TutorRepository
        {
            get
            {
                if (tutorRepository == null)
                {
                    tutorRepository = new GenericRepository<Tutor>(context);
                }
                return tutorRepository;
            }
        }

        public IGenericRepository<User> UserRepository
        {
            get
            {
                if (userRepository == null)
                {
                    userRepository = new GenericRepository<User>(context);
                }
                return userRepository;
            }
        }

        public IGenericRepository<Message> MessageRepository
        {
            get
            {
                if (messageRepository == null)
                {
                    messageRepository = new GenericRepository<Message>(context);
                }
                return messageRepository;
            }
        }

        public void Dispose()
        {
            context.Dispose();
            System.GC.SuppressFinalize(this);

        }

        public void Save()
        {
            context.SaveChanges();
        }
    }
}
