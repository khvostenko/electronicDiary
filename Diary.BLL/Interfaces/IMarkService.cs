using Diary.BLL.DTO;
using System.Collections.Generic;

namespace Diary.BLL.Interfaces
{
    public interface IMarkService
    {
        ICollection<MarkStudentDTO> GetAllMarksByStudent(long studentId);
        ICollection<MarkDTO> GetAllMarksBySubject(long subjectId);
        MarkDTO GetById(long markId);

        bool UpdateMark(MarkDTO mark);
        bool DeleteMark(long id);
        bool AddMark(MarkDTO mark);
    }
}
