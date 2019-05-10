using System;
using System.Collections.Generic;
using System.Text;

namespace Diary.BLL.DTO
{
    public class GroupFullDTO
    {
        public long Id { get; set; }
        public long? FacultyId { get; set; }
        public string Name { get; set; }

        public ICollection<StudentDTO> Students { get; set; }
        public ICollection<SubjectDTO> Subjects { get; set; }
    }
}
