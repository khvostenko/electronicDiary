namespace Diary.DAL.Interfaces
{
    public interface IUnitOfWorkFactory
    {
        IUnitOfWork Create();
    }
}
