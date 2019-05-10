using Diary.BLL.Interfaces;
using System.Web.Http;

namespace ElectronicDiary.Controllers
{
    public class RolesController : ApiController
    {
        private readonly IAuthenticationServicecs _authenticationServicecs;

        public RolesController(IAuthenticationServicecs authenticationServicecs)
        {
            _authenticationServicecs = authenticationServicecs;
        }

        public IHttpActionResult Get()
        {
            var roles = _authenticationServicecs.GetAllRoles();
            return Json(roles);
        }
    }
}
