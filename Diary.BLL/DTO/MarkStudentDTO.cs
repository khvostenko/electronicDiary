using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diary.BLL.DTO
{
    public class MarkStudentDTO
    {
        public long Id { get; set; }
        public long? StudentId { get; set; }
        public int Rating { get; set; }
        public long? SubjectId { get; set; }
        public string SubjectName { get; set; }
        public long? TutorId { get; set; }
    }
}
