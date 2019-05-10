namespace Diary.BLL.DTO
{
    public class UserRegisterDTO
    {
        public string StudentCardId { get; set; }
        public long? GroupId { get; set; }
        public long? FacultyId { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string RoleName { get; set; }
    }
}
