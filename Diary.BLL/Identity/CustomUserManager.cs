using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Diary.BLL.Interfaces;
using Diary.DAL.Identity;
using Diary.DAL.Models;
using Microsoft.AspNet.Identity;

namespace Diary.BLL.Identity
{
    public class CustomUserManager:UserManager<User,long>, IUserManager
    {
        public CustomUserManager(CustomUserStore store):base(store)
        {
            UserValidator = new UserValidator<User, long>(this)
            {
                AllowOnlyAlphanumericUserNames = false
            };
        }

        public ClaimsIdentity CreateExternalIdentity(User user, string authenticationType)
        {
            return this.CreateIdentity(user, authenticationType);
        }

        public Task<IdentityResult> ChangePasswordAsync(long userId, string currentPassword, string newPassword)
        {
            return base.ChangePasswordAsync(userId, currentPassword, newPassword);
        }

    }
}
