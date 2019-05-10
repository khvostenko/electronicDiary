using System.Collections.Generic;
using System.Web.Http;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;

namespace ElectronicDiary.Controllers
{
    public class MarksController : ApiController
    {
        private readonly IMarkService _markService;

        public MarksController(IMarkService markService)
        {
            _markService = markService;
        }

        [HttpGet]
        [Route("api/marks/subject/{subjectId}")]
        public ICollection<MarkDTO> GetAllMarksBySubject(long subjectId)
        {
            return _markService.GetAllMarksBySubject(subjectId);
        }

        [HttpGet]
        [Route("api/markbyid/{id}")]
        public MarkDTO GetById(long id)
        {
           return _markService.GetById(id);
        }

        [HttpGet]
        [Route("api/marks/student/{studentId}")]
        public ICollection<MarkStudentDTO> GetAllMarksByStudent(long studentId)
        {
            return _markService.GetAllMarksByStudent(studentId);
        }

        [HttpPut]
        public void Put([FromBody]MarkDTO mark)
        {
            _markService.UpdateMark(mark);
        }

        [HttpPost]
        public bool Post([FromBody]MarkDTO mark)
        {
            _markService.AddMark(mark);
            return true;
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _markService.DeleteMark(id);
            return true;
        }
    }
}
