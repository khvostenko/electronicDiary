using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Interfaces;

namespace Diary.BLL.Services
{
    public class StudentService:IStudentService
    {
        private readonly IUnitOfWork _uow;
        private readonly IAuthenticationServicecs _authService;
        

        public StudentService(IUnitOfWorkFactory uowFactory, IAuthenticationServicecs authService)
        {
            
            _uow = uowFactory.Create();
            _authService = authService;
        }

        public bool AddStudent(StudentDTO student)
        {
            var newStudent = new UserRegisterDTO()
            {
                Password = "Aa123456",
                ConfirmPassword = "Aa123456",
                RoleName = "Student",
                FacultyId = student.FacultyId,
                GroupId = student.GroupId,
                StudentCardId = student.StudentCardId,
                Name = student.Name
                
            };
            var result = _authService.RegisterUser(newStudent).Result;
            return result.Succeeded;
        }

        public bool DeleteStudent(long id)
        {
            using (_uow)
            {
                var tempStudent = _uow.StudentRepository.GetById(id);
                _uow.StudentRepository.Delete(tempStudent);
                _uow.Save();
            }
            return true;
        }

        public ICollection<StudentDTO> GetAllStudentByName(string studentName)
        {
            using (_uow)
            {
                return _uow.StudentRepository.Query().Select(s => new StudentDTO()
                {
                    Id = s.Id,
                    FacultyId = s.FacultyId,
                    GroupId = s.GroupId,
                    Name = s.FullName,
                    StudentCardId = s.StudentCardId
                }).Where(s => s.Name.Contains(studentName)).ToList();
            }
        }

        public ICollection<StudentDTO> GetAllStudents()
        {
            using (_uow)
            {
                return _uow.StudentRepository.Query().Select(s => new StudentDTO()
                {
                    Id = s.Id,
                    FacultyId = s.FacultyId,
                    GroupId = s.GroupId,
                    Name = s.FullName,
                    StudentCardId = s.StudentCardId
                }).OrderBy(x=>x.Name).ToList();
            }
        }

        public ICollection<StudentDTO> GetAllStudentsByFacultyId(long facultyId)
        {
            using (_uow)
            {
                return _uow.StudentRepository.Query().Select(s => new StudentDTO()
                {
                    Id = s.Id,
                    FacultyId = s.FacultyId,
                    GroupId = s.GroupId,
                    Name = s.FullName,
                    StudentCardId = s.StudentCardId
                }).Where(s => s.FacultyId == facultyId).ToList();
            }
        }

        public ICollection<StudentDTO> GetAllStudentsByGroupId(long groupId)
        {
            using (_uow)
            {
                return _uow.StudentRepository.Query().Select(s => new StudentDTO()
                {
                    Id = s.Id,
                    FacultyId = s.FacultyId,
                    GroupId = s.GroupId,
                    Name = s.FullName,
                    StudentCardId = s.StudentCardId
                }).Where(s => s.GroupId == groupId).ToList();
            }
        }

        public StudentFullDTO GetStudentById(long id)
        {
            using (_uow)
            {
                return _uow.StudentRepository.Query().Select(s => new StudentFullDTO()
                {
                    Id = s.Id,
                    FacultyId = s.FacultyId,
                    GroupId = s.GroupId,
                    Name = s.FullName,
                    StudentCardId = s.StudentCardId,
                    Marks = s.Marks.Select(m => new MarkDTO()
                    {
                        Id = m.Id,
                        Rating = m.Rating,
                        StudentId = m.StudentId,
                        SubjectId = m.SubjectId
                    }).ToList()
                }).FirstOrDefault(s => s.Id == id);
            }
        }

        public bool UpdateStudent(StudentDTO student)
        {
            using (_uow)
            {
                var tempStudent = _uow.StudentRepository.GetById(student.Id);
                tempStudent.GroupId = student.GroupId;
                tempStudent.StudentCardId = student.StudentCardId;
                tempStudent.FacultyId = student.FacultyId;
                _uow.StudentRepository.Update(tempStudent);
                _uow.Save();
            }
            return true;
        }
    }
}
