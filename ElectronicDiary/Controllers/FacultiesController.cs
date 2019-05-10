using System.Collections.Generic;
using System.Web.Http;
using Diary.BLL.Interfaces;
using Diary.BLL.DTO;

namespace ElectronicDiary.Controllers
{
    public class FacultiesController : ApiController
    {
        private readonly IFacultyService _facultyService;

        public FacultiesController(IFacultyService facultyService)
        {
            _facultyService = facultyService;
        }

        public ICollection<FacultyDTO> Get()
        {
            return _facultyService.GetAllFaculties();
        }

        public FacultyDTO Get(long id)
        {
            return _facultyService.Get(id);
        }

        [HttpPost]
        public bool Post([FromBody]FacultyDTO faculty)
        {
            _facultyService.AddFaculty(faculty);
            return true;
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _facultyService.DeleteFaculty(id);
            return true;
        }

        [HttpPut]
        public void Put([FromBody]FacultyDTO faculty)
        {
            _facultyService.UpdateFaculty(faculty);
        }
    }
}
