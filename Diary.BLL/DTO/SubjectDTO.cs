namespace Diary.BLL.DTO
{
    public class SubjectDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsExam { get; set; }
        public long? TutorId { get; set; }
    }
}
