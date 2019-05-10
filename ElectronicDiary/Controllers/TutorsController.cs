using System.Collections.Generic;
using System.Web.Http;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;

namespace ElectronicDiary.Controllers
{
    public class TutorsController : ApiController
    {
        private readonly ITutorService _tutorService;

        public TutorsController(ITutorService tutorService)
        {
            _tutorService = tutorService;
        }

        public ICollection<TutorDTO> Get()
        {
            return _tutorService.GetAllTutors();
        }

        [HttpGet]
        [Route("api/tutors/faculty/{facultyId}")]
        public ICollection<TutorDTO> GetAllTutorsByFaculty(long facultyId)
        {
            return _tutorService.GetAllTutorsByFacultyId(facultyId);
        }

        [HttpGet]
        [Route("api/tutors/search/{tutorName}")]
        public ICollection<TutorDTO> Search(string tutorName)
        {
            return _tutorService.GetAllTutorsByName(tutorName);
        }

        [HttpGet]
        [Route("api/tutorbyid/{id}")]
        public TutorDTO Get(long id)
        {
            return _tutorService.GetTutorById(id);
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _tutorService.DeleteTutor(id);
            return true;
        }

        [HttpPut]
        public void Put([FromBody]TutorDTO tutor)
        {
            _tutorService.UpdateTutor(tutor);
        }

        [HttpPost]
        public bool Post([FromBody]TutorDTO tutor)
        {
            _tutorService.AddTutor(tutor);
            return true;
        }
    }
}
