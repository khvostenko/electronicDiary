using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;
using Diary.DAL.Contexts;
using System;

namespace Diary.BLL.Services
{
    public class GroupService:IGroupService
    {
        private readonly IUnitOfWork _uow;
        

        public GroupService(IUnitOfWorkFactory uowFactory)
        {
            _uow = uowFactory.Create();
        }

        public bool AddGroup(GroupDTO group)
        {
            using (_uow)
            {
                Group tempGroup = new Group();
                tempGroup.Name = group.Name;
                tempGroup.FacultyId = group.FacultyId;
                _uow.GroupRepository.Insert(tempGroup);
                _uow.Save();
            }
            return true;
        }

        public bool DeleteGroup(long id)
        {
            using (_uow)
            {
                var tempGroup = _uow.GroupRepository.GetById(id);
                _uow.GroupRepository.Delete(tempGroup);
                _uow.Save();
            }
            return true;
        }

        public ICollection<GroupDTO> GetAllGrops()
        {
            using (_uow)
            {
                return _uow.GroupRepository.Query().Select(g => new GroupDTO()
                {
                    Id = g.Id,
                    FacultyId = g.FacultyId,
                    Name = g.Name
                }).OrderBy(g => g.Name).ToList();
            }
        }

        public ICollection<GroupDTO> GetAllGroupsBySubject(long subjectId)
        {
            string conString = string.Format(@"Data Source=EPUALVIW0195;Initial Catalog=Test1;Integrated Security=True");
            using (SqlConnection connection = new SqlConnection(conString))
            {
                connection.Open();
                var query = string.Format(@"select [dbo].[Groups].[Id], [dbo].[Groups].[Name], [dbo].[Groups].[FacultyId] from [dbo].[Groups] JOIN [dbo].[SubjectGroups] ON [dbo].[Groups].[Id]=[dbo].[SubjectGroups].[Group_Id] WHERE [dbo].[SubjectGroups].[Subject_Id] = {0}", subjectId);

                SqlCommand command = new SqlCommand(query, connection);
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    IList<GroupDTO> usrs = new List<GroupDTO>();
                    while (reader.Read())
                    {
                        usrs.Add(new GroupDTO()
                        {
                            Id = Convert.ToInt64(reader[0]),
                            Name = reader[1].ToString(),
                            FacultyId = Convert.ToInt64(reader[2])
                        });
                    }
                    return usrs;
                }
            }
                    
        }        

        public GroupDTO GetGropById(long id)
        {
            using (_uow)
            {
                return _uow.GroupRepository.Query().Select(g => new GroupDTO()
                {
                    Id = g.Id,
                    FacultyId = g.FacultyId,
                    Name = g.Name
                }).FirstOrDefault(g => g.Id == id);
            }
        }

        public GroupDTO GetGroupByStudentId(long studentId)
        {
            string conString = string.Format(@"Data Source=EPUALVIW0195;Initial Catalog=Test1;Integrated Security=True");
            using (SqlConnection connection = new SqlConnection(conString))
            {
                connection.Open();
                var query = string.Format(@"select [dbo].[Groups].[Id], [dbo].[Groups].[Name], [dbo].[Groups].[FacultyId] from [dbo].[Students] JOIN [dbo].[Groups] ON [dbo].[Groups].[Id]=[dbo].[Students].[GroupId] WHERE [dbo].[Students].[Id] = {0}", studentId);

                SqlCommand command = new SqlCommand(query, connection);
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    GroupDTO usrs = new GroupDTO();
                    while (reader.Read())
                    {


                        usrs.Id = Convert.ToInt64(reader[0]);
                        usrs.Name = reader[1].ToString();
                        usrs.FacultyId = Convert.ToInt64(reader[2]);
                        
                    }
                    return usrs;
                }
            }
        }

        public bool UpdateGroup(GroupDTO group)
        {
            using (_uow)
            {
                var tempGroup = _uow.GroupRepository.GetById(group.Id);
                tempGroup.Name = group.Name;
                tempGroup.FacultyId = group.FacultyId;
                _uow.GroupRepository.Update(tempGroup);
                _uow.Save();
            }
            return true;
        }
    }
}
