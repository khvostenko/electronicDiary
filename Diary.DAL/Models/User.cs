using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Diary.DAL.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Diary.DAL.Models
{
    public abstract class User: IdentityUser<long, CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        public string FullName { get; set; }
        public long? FacultyId { get; set; }
        public virtual Faculty Faculty { get; set; }
        public virtual ICollection<Message> SentMessages { get; set; }
        public virtual ICollection<Message> ReceiveMessages { get; set; }
    }
}
