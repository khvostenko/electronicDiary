using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;
using System.Data.SqlClient;

namespace Diary.BLL.Services
{
    public class SubjectService:ISubjectService
    {
        private readonly IUnitOfWork _uow;

        public SubjectService(IUnitOfWorkFactory uowFactory)
        {
            _uow = uowFactory.Create();
        }

        public bool AddSubject(SubjectDTO subject)
        {
            using (_uow)
            {
                Subject tempSubject = new Subject();
                tempSubject.Name = subject.Name;
                tempSubject.IsExam = subject.IsExam;
                tempSubject.TutorId = subject.TutorId;
                _uow.SubjectRepository.Insert(tempSubject);
                _uow.Save();
            }
            return true;
        }

        public bool DeleteSubject(long id)
        {
            using (_uow)
            {
                var tempSubject = _uow.SubjectRepository.GetById(id);
                _uow.SubjectRepository.Delete(tempSubject);
                _uow.Save();
            }
            return true;
        }

        public ICollection<SubjectDTO> GetAllExamSubjects(bool isExam)
        {
            using (_uow)
            {
                return _uow.SubjectRepository.Query().Select(s => new SubjectDTO()
                {
                    Id = s.Id,
                    IsExam = s.IsExam,
                    Name = s.Name,
                    TutorId = s.TutorId
                }).Where(s => s.IsExam == isExam).ToList();
            }
        }

        public ICollection<SubjectDTO> GetAllSubjects()
        {
            using (_uow)
            {
                return _uow.SubjectRepository.Query().Select(s => new SubjectDTO()
                {
                    Id = s.Id,
                    IsExam = s.IsExam,
                    Name = s.Name,
                    TutorId = s.TutorId
                }).OrderBy(x => x.Name).ToList();
            }
        }

        public ICollection<SubjectDTO> GetAllSubjectsByTutor(long tutorId)
        {
            using (_uow)
            {
                return _uow.SubjectRepository.Query().Select(s => new SubjectDTO()
                {
                    Id = s.Id,
                    IsExam = s.IsExam,
                    Name = s.Name,
                    TutorId = s.TutorId
                }).Where(s => s.TutorId == tutorId).ToList();
            }
        }

        public SubjectDTO GetSubjectByGroup(long groupId, long tutorId)
        {
            string conString = string.Format(@"Data Source=EPUALVIW0195;Initial Catalog=Test1;Integrated Security=True");
            using (SqlConnection connection = new SqlConnection(conString))
            {
                connection.Open();
                var query = string.Format(@"select [dbo].[Subjects].[Id], [dbo].[Subjects].[IsExam], [dbo].[Subjects].[Name], [dbo].[Subjects].[TutorId] from [dbo].[Subjects] JOIN [dbo].[SubjectGroups] ON [dbo].[Subjects].[Id]=[dbo].[SubjectGroups].[Subject_Id] WHERE [dbo].[SubjectGroups].[Group_Id] = {0} and [dbo].[Subjects].[TutorId] = {1}", groupId, tutorId);

                SqlCommand command = new SqlCommand(query, connection);
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    SubjectDTO usrs = new SubjectDTO();
                    while (reader.Read())
                    {

                        usrs.Id = Convert.ToInt64(reader[0]);
                        usrs.IsExam = Convert.ToBoolean(reader[1]);
                        usrs.Name = reader[2].ToString();
                        usrs.TutorId = Convert.ToInt64(reader[3]);
                       
                    }
                    return usrs;
                }
            }
        }

        public SubjectDTO GetSubjectById(long id)
        {
            using (_uow)
            {
                return _uow.SubjectRepository.Query().Select(s => new SubjectDTO()
                {
                    Id = s.Id,
                    IsExam = s.IsExam,
                    Name = s.Name,
                    TutorId = s.TutorId
                }).FirstOrDefault(s => s.Id == id);
            }
        }

        public bool UpdateSubject(SubjectDTO subject)
        {
            using (_uow)
            {
                var tempSubject = _uow.SubjectRepository.GetById(subject.Id);
                tempSubject.Name = subject.Name;
                tempSubject.IsExam = subject.IsExam;
                tempSubject.TutorId = subject.TutorId;
                _uow.SubjectRepository.Update(tempSubject);
                _uow.Save();
            }
            return true;
        }
    }
}
