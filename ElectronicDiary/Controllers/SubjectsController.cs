using System.Collections.Generic;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using System.Web.Http;

namespace ElectronicDiary.Controllers
{
    public class SubjectsController : ApiController
    {
        private readonly ISubjectService _subjectService;

        public SubjectsController(ISubjectService subjectService)
        {
            _subjectService = subjectService;
        }

        public ICollection<SubjectDTO> Get()
        {
            return _subjectService.GetAllSubjects();
        }

        [HttpGet]
        [Route("api/subjects/tutor/{tutorId}")]
        public ICollection<SubjectDTO> GetAllSubjectsByTutor(long tutorId)
        {
            return _subjectService.GetAllSubjectsByTutor(tutorId);
        }

        [HttpGet]
        [Route("api/subjects/exam/{isExam}")]
        public ICollection<SubjectDTO> GetAllExamSubjects(bool isExam = true)
        {
            return _subjectService.GetAllExamSubjects(isExam);
        }

        [HttpGet]
        [Route("api/subjects/notexam/{isExam}")]
        public ICollection<SubjectDTO> GetAllNotExamSubjects(bool isExam = false)
        {
            return _subjectService.GetAllExamSubjects(isExam);
        }

        [HttpGet]
        [Route("api/subjectbyid/{id}")]
        public SubjectDTO Get(long id)
        {
            return _subjectService.GetSubjectById(id);
        }

        [HttpGet]
        [Route("api/subjectbygroupid/{groupId}/{tutorId}")]
        public SubjectDTO GetByGroup(long groupId,long tutorId)
        {
            return _subjectService.GetSubjectByGroup(groupId, tutorId);
        }

        [HttpPut]
        public void Put([FromBody]SubjectDTO subject)
        {
            _subjectService.UpdateSubject(subject);
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _subjectService.DeleteSubject(id);
            return true;
        }

        [HttpPost]
        public bool Post([FromBody]SubjectDTO subject)
        {
            _subjectService.AddSubject(subject);
            return true;
        }
    }
}
