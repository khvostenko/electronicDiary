using Diary.BLL.DTO;
using System.Collections.Generic;

namespace Diary.BLL.Interfaces
{
    public interface IStudentService
    {
        ICollection<StudentDTO> GetAllStudents();
        ICollection<StudentDTO> GetAllStudentsByFacultyId(long facultyId);
        ICollection<StudentDTO> GetAllStudentsByGroupId(long groupId);
        ICollection<StudentDTO> GetAllStudentByName(string studentName);
        StudentFullDTO GetStudentById(long id);
        bool UpdateStudent(StudentDTO student);
        bool DeleteStudent(long id);
        bool AddStudent(StudentDTO student);
    }
}
