using System.Collections.Generic;
using System.Web.Http;
using Diary.BLL.DTO;
using Diary.DAL.Models;
using Diary.BLL.Interfaces;

namespace ElectronicDiary.Controllers
{
    public class GroupsController : ApiController
    {
        private readonly IGroupService _groupService;

        public GroupsController(IGroupService groupService)
        {
            _groupService = groupService;
        }

        public ICollection<GroupDTO> Get()
        {
            return _groupService.GetAllGrops();
        }

        [HttpGet]
        [Route("api/allgroups/{subjectId}")]
        public ICollection<GroupDTO> GetAllGropsBySubject(long subjectId)
        {
            return _groupService.GetAllGroupsBySubject(subjectId);
        }

        [HttpGet]
        [Route("api/groupsbystudent/{studentId}")]
        public GroupDTO GetGropsByStudent(long studentId)
        {
            return _groupService.GetGroupByStudentId(studentId);
        }

        public GroupDTO Get(long id)
        {
            return _groupService.GetGropById(id);
        }

        [HttpPost]
        public bool Post([FromBody]GroupDTO group)
        {
            _groupService.AddGroup(group);
            return true;
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _groupService.DeleteGroup(id);
            return true;
        }

        [HttpPut]
        public void Put([FromBody]GroupDTO group)
        {
            _groupService.UpdateGroup(group);
        }
    }
}
