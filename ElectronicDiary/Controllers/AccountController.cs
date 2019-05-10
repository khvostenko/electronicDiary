using System.Threading.Tasks;
using System.Web.Http;
using Diary.BLL.Interfaces;
using Diary.BLL.DTO;
using Microsoft.AspNet.Identity;

namespace ElectronicDiary.Controllers
{
    [Authorize]
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private readonly IAuthenticationServicecs _authService;

        public AccountController(IAuthenticationServicecs authenticationServicecs)
        {
            _authService = authenticationServicecs;
        }

        [AllowAnonymous]
        public async Task<IHttpActionResult> Register(UserRegisterDTO userModel)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result = await _authService.RegisterUser(userModel);

            if(!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result.Errors != null)
            {
                foreach (string error in result.Errors)
                {
                    ModelState.AddModelError("errors", error);
                }
            }

            if (ModelState.IsValid)
            {
                return BadRequest();
            }

            return BadRequest(ModelState);
        }
    }
}
