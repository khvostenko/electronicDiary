using Diary.BLL.DTO;
using Diary.BLL.Interfaces;
using Diary.DAL.Interfaces;
using Diary.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Diary.BLL.Services
{
    public class MessageService: IMessageService
    {
        private readonly IUnitOfWork _uow;

        public MessageService(IUnitOfWorkFactory uowFactory)
        {
            _uow = uowFactory.Create();
        }
        public ICollection<MessageDTO> GetAllSentMessageByUserId(long userId)
        {
            using (_uow)
            {
                var temp = _uow.MessageRepository.Query().Select(s => new MessageDTO()
                {
                    Id = s.Id,
                    Text = s.Text,
                    IsRead = s.IsRead,
                    TimeSent = s.TimeSent,
                    SenderUserId = s.SenderUserId,
                    SenderUserName = s.SenderUser.FullName,
                    ReceiverUserId = s.ReceiverUserId,
                    ReceiverUserName = s.ReceiverUser.FullName
                }).Where(x => x.SenderUserId == userId).OrderBy(x => x.TimeSent).ToList();

                return temp;
            }
        }

        public ICollection<MessageDTO> GetAllReceiveMessageByUserId(long userId)
        {
            using (_uow)
            {
                var temp = _uow.MessageRepository.Query().Select(s => new MessageDTO()
                {
                    Id = s.Id,
                    Text = s.Text,
                    IsRead = s.IsRead,
                    TimeSent = s.TimeSent,
                    SenderUserId = s.SenderUserId,
                    SenderUserName = s.SenderUser.FullName,
                    ReceiverUserId = s.ReceiverUserId,
                    ReceiverUserName = s.ReceiverUser.FullName
                }).Where(x => x.ReceiverUserId == userId).OrderBy(x => x.TimeSent).ToList();
                return temp;
            }
        }

        public ICollection<MessageDTO> GetAllHistoryMessageByUserId(long currentUserId, long userId)
        {
            using (_uow)
            {
                var temp = _uow.MessageRepository.Query().Select(s => new MessageDTO()
                {
                    Id = s.Id,
                    Text = s.Text,
                    IsRead = s.IsRead,
                    TimeSent = s.TimeSent,
                    SenderUserId = s.SenderUserId,
                    SenderUserName = s.SenderUser.FullName,
                    ReceiverUserId = s.ReceiverUserId,
                    ReceiverUserName = s.ReceiverUser.FullName,
                    IsSent = false
                }).Where(x => x.ReceiverUserId == currentUserId && x.SenderUserId == userId).OrderBy(x => x.TimeSent).ToArray();

                var temp1 = _uow.MessageRepository.Query().Select(s => new MessageDTO()
                {
                    Id = s.Id,
                    Text = s.Text,
                    IsRead = s.IsRead,
                    TimeSent = s.TimeSent,
                    SenderUserId = s.SenderUserId,
                    SenderUserName = s.SenderUser.FullName,
                    ReceiverUserId = s.ReceiverUserId,
                    ReceiverUserName = s.ReceiverUser.FullName,
                    IsSent = true
                }).Where(x => x.ReceiverUserId == userId && x.SenderUserId == currentUserId).OrderBy(x => x.TimeSent).ToArray();


                return temp.Union(temp1).OrderBy(x=>x.TimeSent).ToList();
            }
        }

        public bool UpdateMessage(MessageDTO message)
        {
            using (_uow)
            {
                var tempMessage = _uow.MessageRepository.GetById(message.Id);
                tempMessage.Text = message.Text;
                tempMessage.TimeSent = message.TimeSent;
                tempMessage.IsRead = true;
                _uow.MessageRepository.Update(tempMessage);
                _uow.Save();
            }
            return true;
        }

        public bool DeleteMessage(long id)
        {
            using (_uow)
            {
                var tempMessage = _uow.MessageRepository.GetById(id);
                _uow.MessageRepository.Delete(tempMessage);
                _uow.Save();
            }
            return true;
        }

        public bool AddMessage(MessageDTO message)
        {
            using (_uow)
            {
                Message tempMessage = new Message();
                tempMessage.Text = message.Text;
                tempMessage.IsRead = false;
                tempMessage.TimeSent = DateTime.Now;
                tempMessage.SenderUserId = message.SenderUserId;
                tempMessage.ReceiverUserId = message.ReceiverUserId;
                _uow.MessageRepository.Insert(tempMessage);
                _uow.Save();
            }
            return true;
        }
    }
}
