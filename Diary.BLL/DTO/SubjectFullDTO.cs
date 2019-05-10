using System.Collections.Generic;

namespace Diary.BLL.DTO
{
    public class SubjectFullDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsExam { get; set; }
        public long? TutorId { get; set; }

        public ICollection<MarkDTO> Marks { get; set; }
        public ICollection<GroupDTO> Groups { get; set; }
    }
}
