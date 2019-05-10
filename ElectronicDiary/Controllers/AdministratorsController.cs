using System.Collections.Generic;
using System.Web.Http;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;

namespace ElectronicDiary.Controllers
{
    public class AdministratorsController : ApiController
    {
        private readonly IAdministratorService _administratorService;

        public AdministratorsController(IAdministratorService administratorService)
        {
            _administratorService = administratorService;
        }

        public ICollection<AdministratorDTO> Get()
        {
            return _administratorService.GetAllAdministrator();
        }
        
        public AdministratorDTO Get(long id)
        {
            return _administratorService.GetAdministratorById(id);
        }

        [HttpPut]
        public void Put([FromBody]AdministratorDTO administrator)
        {
            _administratorService.UpdateAdministrator(administrator);
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _administratorService.DeleteAdministrator(id);
            return true;
        }

        [HttpPost]
        public bool Post([FromBody]AdministratorDTO administrator)
        {
            _administratorService.AddAdministrator(administrator);
            return true;
        }
    }
}
