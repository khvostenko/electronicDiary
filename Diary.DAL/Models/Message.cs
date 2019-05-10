using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diary.DAL.Models
{
    public class Message
    {
        public long Id { get; set; }
        public string Text { get; set; }
        public bool IsRead { get; set; }
        public DateTime TimeSent { get; set; }
        [ForeignKey("SenderUser")]
        public long? SenderUserId { get; set; }
        [ForeignKey("ReceiverUser")]
        public long? ReceiverUserId { get; set; }
        public User SenderUser { get; set; }
        public User ReceiverUser { get; set; }

    }
}
