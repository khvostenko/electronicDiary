using Diary.BLL.DTO;
using System.Collections.Generic;

namespace Diary.BLL.Interfaces
{
    public interface ISubjectService
    {
        ICollection<SubjectDTO> GetAllSubjects();
        ICollection<SubjectDTO> GetAllExamSubjects(bool isExam);
        ICollection<SubjectDTO> GetAllSubjectsByTutor(long tutorId);

        SubjectDTO GetSubjectByGroup(long groupId, long tutorId);
        SubjectDTO GetSubjectById(long id);
        bool UpdateSubject(SubjectDTO subject);
        bool DeleteSubject(long id);
        bool AddSubject(SubjectDTO subject);
        
    }
}
