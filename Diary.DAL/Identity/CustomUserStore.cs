using Diary.DAL.Contexts;
using Diary.DAL.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Diary.DAL.Identity
{
    public class CustomUserStore : UserStore<User, CustomRole, long, CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        public CustomUserStore(AuthorizationContext context):base(context)
        {

        }
    }
}
