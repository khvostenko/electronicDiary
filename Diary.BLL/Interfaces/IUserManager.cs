using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Diary.DAL.Models;
using Microsoft.AspNet.Identity;

namespace Diary.BLL.Interfaces
{
    public interface IUserManager
    {
        Task<IdentityResult> CreateAsync(User user);
        Task<IdentityResult> CreateAsync(User user, string password);
        Task<IdentityResult> AddToRolesAsync(long userId, params string[] rolse);
        Task<User> FindAsync(string userName, string password);
        Task<User> FindAsync(UserLoginInfo info);
        Task<IdentityResult> AddLoginAsync(long userId, UserLoginInfo info);
        Task<ClaimsIdentity> CreateIdentityAsync(User user, string authenticationType);
        ClaimsIdentity CreateExternalIdentity(User user, string authenticationType);
        Task<User> FindByEmailAsync(string email);
        Task<IList<string>> GetRolesAsync(long userId);
        Task<IdentityResult> ChangePasswordAsync(long userId, string currentPassword, string newPassword);
    }
}
