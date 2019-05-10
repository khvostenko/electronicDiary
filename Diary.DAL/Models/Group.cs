using System.Collections.Generic;

namespace Diary.DAL.Models
{
    public class Group
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long? FacultyId { get; set; }

        public virtual Faculty Faculty { get; set; }
        public virtual ICollection<Student> Students { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }

        public Group()
        {
            Students = new HashSet<Student>();
            Subjects = new HashSet<Subject>();
        }
    }
}
