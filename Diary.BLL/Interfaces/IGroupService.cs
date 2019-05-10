using Diary.BLL.DTO;
using Diary.DAL.Models;
using System.Collections.Generic;

namespace Diary.BLL.Interfaces
{
    public interface IGroupService
    {
        ICollection<GroupDTO> GetAllGrops();
        ICollection<GroupDTO> GetAllGroupsBySubject(long subjectId);
        GroupDTO GetGropById(long id);
        GroupDTO GetGroupByStudentId(long studentId);
        bool UpdateGroup(GroupDTO group);
        bool DeleteGroup(long id);
        bool AddGroup(GroupDTO group);
    }
}
