using Diary.DAL.Interfaces;

namespace Diary.DAL.Repositories
{
    public class UnitOfWorkFactory:IUnitOfWorkFactory
    {
        public IUnitOfWork Create()
        {
            return new UnitOfWork();
        }
    }
}
