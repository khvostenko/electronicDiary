using Diary.BLL.DTO;
using System.Collections.Generic;

namespace Diary.BLL.Interfaces
{
    public interface IFacultyService
    {
        ICollection<FacultyDTO> GetAllFaculties();
        FacultyDTO Get(long id);
        bool UpdateFaculty(FacultyDTO faculty);
        bool DeleteFaculty(long id);
        bool AddFaculty(FacultyDTO faculty);
    }
}
