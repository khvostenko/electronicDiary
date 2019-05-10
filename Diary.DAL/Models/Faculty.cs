using System.Collections.Generic;

namespace Diary.DAL.Models
{
    public class Faculty
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public ICollection<User> Users { get; set; }
        public ICollection<Group> Groups { get; set; }

        public Faculty()
        {
            Users = new HashSet<User>();
            Groups = new HashSet<Group>();
        }
    }
}
