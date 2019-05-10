using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Diary.BLL.DTO;

namespace Diary.BLL.Interfaces
{
    public interface IMessageService
    {
        ICollection<MessageDTO> GetAllSentMessageByUserId(long userId);
        ICollection<MessageDTO> GetAllReceiveMessageByUserId(long userId);
        ICollection<MessageDTO> GetAllHistoryMessageByUserId(long currentUserId, long userId);
        bool UpdateMessage(MessageDTO message);
        bool DeleteMessage(long id);
        bool AddMessage(MessageDTO message);
    }
}
