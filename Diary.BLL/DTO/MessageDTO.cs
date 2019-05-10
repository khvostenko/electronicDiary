using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diary.BLL.DTO
{
    public class MessageDTO
    {
        public long Id { get; set; }
        public string Text { get; set; }
        public bool IsRead { get; set; }
        public DateTime TimeSent { get; set; }
        public long? SenderUserId { get; set; }
        public string SenderUserName { get; set; }
        public long? ReceiverUserId { get; set; }
        public string ReceiverUserName { get; set; }
        public bool IsSent { get; set; }
    }
}
