namespace Diary.BLL.DTO
{
    public class MarkDTO
    {
        public long Id { get; set; }
        public int Rating { get; set; }
        public long? StudentId { get; set; }
        public long? SubjectId { get; set; }
    }
}
