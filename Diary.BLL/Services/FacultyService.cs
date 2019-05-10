using System.Collections.Generic;
using System.Linq;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;

namespace Diary.BLL.Services
{
    public class FacultyService:IFacultyService
    {
        private readonly IUnitOfWork _uow;

        public FacultyService(IUnitOfWorkFactory uowFactory)
        {
            _uow = uowFactory.Create();
        }

        public ICollection<FacultyDTO> GetAllFaculties()
        {
            using (_uow)
            {
                return _uow.FacultyRepository.Query().Select(f => new FacultyDTO()
                {
                    Id = f.Id,
                    Name = f.Name
                }).OrderBy(x=>x.Name).ToList();
            }
        }

        public FacultyDTO Get(long id)
        {
            using (_uow)
            {
                return _uow.FacultyRepository.Query().Select(f => new FacultyDTO()
                {
                    Id = f.Id,
                    Name = f.Name
                }).FirstOrDefault(f => f.Id == id);
            }

        }

        public bool UpdateFaculty(FacultyDTO faculty)
        {
            using (_uow)
            {
                var tempFaculty = _uow.FacultyRepository.GetById(faculty.Id);
                tempFaculty.Name = faculty.Name;
                _uow.FacultyRepository.Update(tempFaculty);
                _uow.Save();
            }
            return true;
        }

        public bool DeleteFaculty(long id)
        {
            using (_uow)
            {
                var tempFaculty = _uow.FacultyRepository.GetById(id);
                _uow.GroupRepository.Delete(tempFaculty);
                _uow.Save();
            }
            return true;
        }

        public bool AddFaculty(FacultyDTO faculty)
        {
            using (_uow)
            {
                Faculty tempFaculty = new Faculty();
                tempFaculty.Name = faculty.Name;
                _uow.FacultyRepository.Insert(tempFaculty);
                _uow.Save();
            }
            return true;
        }
    }
}
