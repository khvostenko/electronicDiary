using Diary.BLL.Interfaces;
using Diary.DAL.Contexts;
using Diary.DAL.Identity;

namespace Diary.BLL.Identity
{
    public class ElectronicDiaryIdentityProvider : IElectronicDiaryIdentityProvider
    {
        public AuthorizationContext Context => new AuthorizationContext();

        public IUserManager GetUserManager(AuthorizationContext context)
        {
            CustomUserStore store = new CustomUserStore(context);
            IUserManager manager = new CustomUserManager(store);

            return manager;
        }
    }
}
