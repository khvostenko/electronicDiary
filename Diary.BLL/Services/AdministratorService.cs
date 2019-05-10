using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;


namespace Diary.BLL.Services
{
    public class AdministratorService:IAdministratorService
    {
        private readonly IUnitOfWork _uow;

        public AdministratorService(IUnitOfWorkFactory uowFactory)
        {
            _uow = uowFactory.Create();
        }

        public bool AddAdministrator(AdministratorDTO administrator)
        {
            using (_uow)
            {
                Administrator tempAdmin = new Administrator();
                tempAdmin.FacultyId = administrator.FacultyId;
                _uow.AdministratorRepository.Insert(tempAdmin);
                _uow.Save();
            }
            return true;
        }

        public bool DeleteAdministrator(long id)
        {
            using (_uow)
            {
                var tempAdmin = _uow.AdministratorRepository.GetById(id);
                _uow.AdministratorRepository.Delete(tempAdmin);
                _uow.Save();
            }
            return true;
        }

        public AdministratorDTO GetAdministratorById(long id)
        {
            using (_uow)
            {
                return _uow.AdministratorRepository.Query().Select(d => new AdministratorDTO()
                {
                    Id = d.Id,
                    Name = d.FullName,
                    Email = d.Email,
                    FacultyId = d.FacultyId
                }).FirstOrDefault(d => d.Id == id);
            }
        }

        public ICollection<AdministratorDTO> GetAllAdministrator()
        {
            var admins = new List<AdministratorDTO>();

            using (_uow)
            {
                admins = _uow.AdministratorRepository.Query().Select(d => new AdministratorDTO()
                {
                    Id = d.Id,
                    FacultyId = d.FacultyId,
                    Email = d.Email,
                    Name = d.FullName
                }).OrderBy(x=>x.Name).ToList();
            }
            return admins;
        }

        public bool UpdateAdministrator(AdministratorDTO administrator)
        {
            using (_uow)
            {
                var tempAdmin = _uow.AdministratorRepository.GetById(administrator.Id);
                tempAdmin.FacultyId = administrator.FacultyId;
                tempAdmin.FullName = administrator.Name;
                tempAdmin.UserName = administrator.Email;
                tempAdmin.Email = administrator.Email;
                _uow.AdministratorRepository.Update(tempAdmin);
                _uow.Save();
            }
            return true;
        }
    }
}
