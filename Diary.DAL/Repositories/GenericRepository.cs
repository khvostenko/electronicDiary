using System.Linq;
using Diary.DAL.Contexts;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
using System;

namespace Diary.DAL.Repositories
{
    public class GenericRepository<TEntity>:IGenericRepository<TEntity> where TEntity:class
    {
        private readonly ElectronicDiaryContext context;
        private readonly DbSet<TEntity> dbSet;
       // private readonly IDbConnection _dbConnection;

        public GenericRepository(ElectronicDiaryContext context)
        {
            this.context = context;
            dbSet = context.Set<TEntity>();
            //dbConnection = DBAccess.GetDbConnection();
        }

        public void Delete(TEntity entity)
        {
            dbSet.Remove(entity);
        }

        public void Delete(params object[] id)
        {
            TEntity entity = dbSet.Find(id);
            dbSet.Remove(entity);
        }

        public TEntity GetById(params object[] id)
        {
            return dbSet.Find(id);
        }

        public void Insert(TEntity entity)
        {
            dbSet.Add(entity);
        }

        public void Update(TEntity entity)
        {
            context.Entry(entity).State = EntityState.Modified;
        }

        public IQueryable<TEntity> Query()
        {
            return dbSet.AsQueryable();
        }

        public ICollection<TEntity> StoredProcedure(params object[] id)
        {
            //var sub =  _dbConnection.Execute(@"EXEC GetGroupBySubject @subjectId", new { subjectId = id });
            //var query = "EXEC GetGroupBySubject @subjectId";
            //var groups = new List<Group>();
            //using(var reader = _dbConnection.ExecuteReader(query, new { subjectId = id }))
            //{
            //    while(reader.Read())
            //    {
            //        groups.Add(new Group()
            //        {
            //            Id = Convert.ToInt32(reader["Id"]),
            //            Name = reader["Name"].ToString(),
            //            FacultyId = Convert.ToInt32(reader["FacultyId"])
            //        });
            //    }
            //}
            //return groups;
            //return sub.ToList();
            var clientIdParameter = new SqlParameter("@subjectId", id);

            return context.Database.SqlQuery<TEntity>("GetGroupBySubject @subjectId", clientIdParameter).ToList();
        }

        
    }
}
