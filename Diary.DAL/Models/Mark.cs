namespace Diary.DAL.Models
{
    public class Mark
    {
        public long Id { get; set; }
        public long? StudentId { get; set; }
        public long? SubjectId { get; set; }
        public int Rating { get; set; }

        public Student Student { get; set; }
        public Subject Subject { get; set; }
    }
}
