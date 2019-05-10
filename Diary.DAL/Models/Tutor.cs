using System.Collections.Generic;

namespace Diary.DAL.Models
{
    public class Tutor:User
    {
        public virtual ICollection<Subject> Subjects { get; set; }

        public Tutor()
        {
            Subjects = new HashSet<Subject>();
        }
    }
}
