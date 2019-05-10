using System.Collections.Generic;

namespace Diary.DAL.Models
{
    public class Student:User
    {
        public string StudentCardId { get; set; }
        public long? GroupId { get; set; }

        public virtual Group Group { get; set; }
        public virtual ICollection<Mark> Marks { get; set; }

        public Student()
        {
            Marks = new HashSet<Mark>();
        }
    }
}
