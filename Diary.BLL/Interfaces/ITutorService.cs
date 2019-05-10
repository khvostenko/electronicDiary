using Diary.BLL.DTO;
using System.Collections.Generic;

namespace Diary.BLL.Interfaces
{
    public interface ITutorService
    {
        ICollection<TutorDTO> GetAllTutors();
        ICollection<TutorDTO> GetAllTutorsByFacultyId(long facultyId);
        ICollection<TutorDTO> GetAllTutorsByName(string tutorName);
        TutorDTO GetTutorById(long id);

        bool UpdateTutor(TutorDTO tutor);
        bool DeleteTutor(long id);
        bool AddTutor(TutorDTO tutor);

    }
}
