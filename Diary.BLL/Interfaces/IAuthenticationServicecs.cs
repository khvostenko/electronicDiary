using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Diary.BLL.DTO;
using Diary.DAL.Identity;
using Diary.DAL.Models;
using Microsoft.AspNet.Identity;

namespace Diary.BLL.Interfaces
{
    public interface IAuthenticationServicecs
    {
        Task<IdentityResult> CreateAsync(User user);
        Task<IdentityResult> RegisterUser(UserRegisterDTO userRegister);
        Task<User> Find(string userName, string password);
        Task<ClaimsIdentity> CreateIdentity(User user, string authenticationType);
        Task<User> FindAsync(UserLoginInfo info);
        Task<bool> HasRegistered(UserLoginInfo info);
        Task<string> GetAllRolesJson(long userId);
        ICollection<RoleDTO> GetAllRoles();
    }
}
