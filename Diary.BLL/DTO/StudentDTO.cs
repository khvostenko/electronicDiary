namespace Diary.BLL.DTO
{
    public class StudentDTO
    {
        public long Id { get; set; }
        public string StudentCardId { get; set; }
        public long? GroupId { get; set; }
        public long? FacultyId { get; set; }
        public string Name { get; set; }
    }
}
