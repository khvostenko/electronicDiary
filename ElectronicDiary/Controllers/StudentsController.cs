using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Microsoft.AspNet.Identity;

namespace ElectronicDiary.Controllers
{
    public class StudentsController : ApiController
    {
        private readonly IStudentService _studentService;
        private readonly IAuthenticationServicecs _authenticationServicecs;

        public StudentsController(IAuthenticationServicecs authenticationServicecs, IStudentService studentService)
        {
            _studentService = studentService;
            _authenticationServicecs = authenticationServicecs;
        }

        public ICollection<StudentDTO> Get()
        {
            return _studentService.GetAllStudents();
        }

        [HttpGet]
        [Route("api/students/faculty/{facultyId}")]
        public ICollection<StudentDTO> GetAllStudentsByFaculty(long facultyId)
        {
            return _studentService.GetAllStudentsByFacultyId(facultyId);
        }

        [HttpGet]
        [Route("api/students/group/{groupId}")]
        public ICollection<StudentDTO> GetAllStudentsByGrop(long groupId)
        {
            return _studentService.GetAllStudentsByGroupId(groupId);
        }

        [HttpGet]
        [Route("api/students/search/{studentName}")]
        public ICollection<StudentDTO> Search(string studentName)
        {
            return _studentService.GetAllStudentByName(studentName);
        }

        public StudentFullDTO Get(long id)
        {
            return _studentService.GetStudentById(id);
        }

        [HttpPut]
        public void Put([FromBody]StudentDTO student)
        {
            _studentService.UpdateStudent(student);
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _studentService.DeleteStudent(id);
            return true;
        }

        [HttpPost]
        public async Task<bool> Post([FromBody]StudentDTO student)
        {
            var tempStudent = new UserRegisterDTO()
            {
                Password = "Aa123456",
                ConfirmPassword = "Aa123456",
                RoleName = "Student",
                FacultyId = student.FacultyId,
                Name = student.Name,
                GroupId = student.GroupId,
                StudentCardId = student.StudentCardId
            };

            IdentityResult result = await _authenticationServicecs.RegisterUser(tempStudent);

            if (!result.Succeeded)
            {
                return false;
            }
            else return true;
        }

        [HttpGet]
        [Route("api/students/register")]
        public async Task<IHttpActionResult> Register([FromBody]UserRegisterDTO user)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tempStudent = new UserRegisterDTO()
            {
                Password = "Aa123456",
                ConfirmPassword = "Aa123456",
                RoleName = "Student",
                Email = user.Email,
                Name = user.Name,
                PhoneNumber = user.PhoneNumber,
                FacultyId = user.FacultyId,
                GroupId = user.GroupId,
                StudentCardId = user.StudentCardId
            };

            IdentityResult result = await _authenticationServicecs.RegisterUser(tempStudent);

            if (!result.Succeeded)
            {
                return BadRequest(ModelState);
            }
            else return Ok();
        }
    }
}
