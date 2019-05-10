using System.Collections.Generic;

namespace Diary.BLL.DTO
{
    public class StudentFullDTO
    {
        public long Id { get; set; }
        public string StudentCardId { get; set; }
        public long? GroupId { get; set; }
        public long? FacultyId { get; set; }
        public string Name { get; set; }
        public ICollection<MarkDTO> Marks { get; set; }
    }
}
