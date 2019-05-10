using Diary.DAL.Contexts;


namespace Diary.BLL.Interfaces
{
    public interface IElectronicDiaryIdentityProvider
    {
        AuthorizationContext Context { get; }
        IUserManager GetUserManager(AuthorizationContext context);
    }
}
