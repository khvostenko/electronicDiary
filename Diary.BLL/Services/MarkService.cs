using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Linq;
using Diary.BLL.Interfaces;
using Diary.BLL.DTO;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;

namespace Diary.BLL.Services
{
    public class MarkService:IMarkService
    {
        private readonly IUnitOfWork _uow;

        public MarkService(IUnitOfWorkFactory uowFactory)
        {
            _uow = uowFactory.Create();
        }

        public bool AddMark(MarkDTO mark)
        {
            using (_uow)
            {
                Mark tempMark = new Mark();
                tempMark.Rating = mark.Rating;
                tempMark.StudentId = mark.StudentId;
                tempMark.SubjectId = mark.SubjectId;
                _uow.MarkRepository.Insert(tempMark);
                _uow.Save();
            }
            return true;
        }

        public bool DeleteMark(long id)
        {
            using (_uow)
            {
                var tempMark = _uow.MarkRepository.GetById(id);
                _uow.MarkRepository.Delete(tempMark);
                _uow.Save();
            }
            return true;
        }

        public ICollection<MarkStudentDTO> GetAllMarksByStudent(long studentId)
        {
            //using (_uow)
            //{
            //    return _uow.MarkRepository.Query().Select(m => new MarkDTO()
            //    {
            //        Id = m.Id,
            //        Rating = m.Rating,
            //        StudentId = m.StudentId,
            //        SubjectId = m.SubjectId
            //    }).Where(m => m.StudentId == studentId).ToList();
            //}

            string conString = string.Format(@"Data Source=EPUALVIW0195;Initial Catalog=Test1;Integrated Security=True");
            using (SqlConnection connection = new SqlConnection(conString))
            {
                connection.Open();
                var query = string.Format(@"select Marks.Id, Marks.StudentId, Marks.Rating, Marks.SubjectId, Subjects.Name, Tutors.Id from Marks join Subjects on Marks.SubjectId = Subjects.Id join Tutors on Subjects.TutorId = Tutors.Id where Marks.StudentId = {0}", studentId);

                SqlCommand command = new SqlCommand(query, connection);
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    IList<MarkStudentDTO> usrs = new List<MarkStudentDTO>();
                    while (reader.Read())
                    {
                        usrs.Add(new MarkStudentDTO()
                        {
                            Id = Convert.ToInt64(reader[0]),
                            StudentId = Convert.ToInt64(reader[1]),
                            Rating = Convert.ToInt32(reader[2]),
                            SubjectId = Convert.ToInt64(reader[3]),
                            SubjectName = reader[4].ToString(),
                            TutorId = Convert.ToInt64(reader[5])
                        });
                    }
                    return usrs;
                }
            }
        }

        public ICollection<MarkDTO> GetAllMarksBySubject(long subjectId)
        {
            using (_uow)
            {
                return _uow.MarkRepository.Query().Select(m => new MarkDTO()
                {
                    Id = m.Id,
                    Rating = m.Rating,
                    StudentId = m.StudentId,
                    SubjectId = m.SubjectId
                }).Where(m => m.StudentId == subjectId).ToList();
            }
        }

        public MarkDTO GetById(long markId)
        {
            using (_uow)
            {
                return _uow.MarkRepository.Query().Select(m => new MarkDTO()
                {
                    Id = m.Id,
                    Rating = m.Rating,
                    StudentId = m.StudentId,
                    SubjectId = m.SubjectId
                }).FirstOrDefault(x => x.Id == markId);
            }
        }

        public bool UpdateMark(MarkDTO mark)
        {
            using (_uow)
            {
                var tempMark = _uow.MarkRepository.GetById(mark.Id);
                tempMark.Rating = mark.Rating;
                tempMark.StudentId = mark.StudentId;
                tempMark.SubjectId = mark.SubjectId;
                _uow.MarkRepository.Update(tempMark);
                _uow.Save();
            }
            return true;
        }
    }
}
