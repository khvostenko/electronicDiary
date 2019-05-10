using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;

namespace Diary.BLL.Services
{
    public class TutorService:ITutorService
    {
        private readonly IUnitOfWork _uow;

        public TutorService(IUnitOfWorkFactory uowFactory)
        {
            _uow = uowFactory.Create();
        }

        public bool AddTutor(TutorDTO tutor)
        {
            using (_uow)
            {
                Tutor tempTutor = new Tutor();
                //tempTutor.FullName = tutor.Name;
                tempTutor.FacultyId = tutor.FacultyId;
                //tempTutor.Email = tutor.Email;
                _uow.TutorRepository.Insert(tempTutor);
                _uow.Save();
            }
            return true;
        }

        public bool DeleteTutor(long id)
        {
            using (_uow)
            {
                var tempTutor = _uow.TutorRepository.GetById(id);
                _uow.TutorRepository.Delete(tempTutor);
                _uow.Save();
            }
            return true;
        }

        public ICollection<TutorDTO> GetAllTutors()
        {
            using (_uow)
            {
                return _uow.TutorRepository.Query().Select(t => new TutorDTO()
                {
                    Id = t.Id,
                    Email = t.Email,
                    FacultyId = t.FacultyId,
                    Name = t.FullName
                }).OrderBy(x => x.Name).ToList();
            }
        }

        public ICollection<TutorDTO> GetAllTutorsByFacultyId(long facultyId)
        {
            using (_uow)
            {
                return _uow.TutorRepository.Query().Select(t => new TutorDTO()
                {
                    Id = t.Id,
                    Email = t.Email,
                    FacultyId = t.FacultyId,
                    Name = t.FullName
                }).Where(t => t.FacultyId == facultyId).ToList();
            }
        }

        public ICollection<TutorDTO> GetAllTutorsByName(string tutorName)
        {
            using (_uow)
            {
                return _uow.TutorRepository.Query().Select(t => new TutorDTO()
                {
                    Id = t.Id,
                    Email = t.Email,
                    FacultyId = t.FacultyId,
                    Name = t.FullName
                }).Where(t => t.Name.Contains(tutorName)).ToList();
            }
        }

        public TutorDTO GetTutorById(long id)
        {
            using (_uow)
            {
                return _uow.TutorRepository.Query().Select(t => new TutorDTO()
                {
                    Id = t.Id,
                    Email = t.Email,
                    FacultyId = t.FacultyId,
                    Name = t.FullName
                }).FirstOrDefault(t => t.Id == id);
            }
        }

        public bool UpdateTutor(TutorDTO tutor)
        {
            using (_uow)
            {
                var tempTutor = _uow.TutorRepository.GetById(tutor.Id);
                tempTutor.Email = tutor.Email;
                tempTutor.FullName = tutor.Name;
                tempTutor.UserName = tutor.Email;
                tempTutor.FacultyId = tutor.FacultyId;
                _uow.TutorRepository.Update(tempTutor);
                _uow.Save();
            }
            return true;
        }
    }
}
