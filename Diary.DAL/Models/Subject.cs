using System.Collections.Generic;

namespace Diary.DAL.Models
{
    public class Subject
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsExam { get; set; }
        public long? TutorId { get; set; }

        public virtual Tutor Tutor { get; set; }
        public virtual ICollection<Mark> Marks { get; set; }
        public virtual ICollection<Group> Groups { get; set; }

        public Subject()
        {
            Marks = new HashSet<Mark>();
            Groups = new HashSet<Group>();
        }
    }
}
