using Diary.BLL.DTO;
using System.Collections.Generic;

namespace Diary.BLL.Interfaces
{
    public interface IAdministratorService
    {
        ICollection<AdministratorDTO> GetAllAdministrator();
        AdministratorDTO GetAdministratorById(long id);
        bool UpdateAdministrator(AdministratorDTO administrator);
        bool DeleteAdministrator(long id);
        bool AddAdministrator(AdministratorDTO administrator);
    }
}
