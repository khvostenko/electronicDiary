using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Diary.BLL.DTO;
using Diary.BLL.Interfaces;

namespace ElectronicDiary.Controllers
{
    public class MessagesController : ApiController
    {
        private readonly IMessageService _messageService;

        public MessagesController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        [HttpGet]
        [Route("api/messages/sent/{userId}")]
        public ICollection<MessageDTO> GetAllSentMessage(long userId)
        {
            return _messageService.GetAllSentMessageByUserId(userId);
        }

        [HttpGet]
        [Route("api/messages/receive/{userId}")]
        public ICollection<MessageDTO> GetAllReceiveMessage(long userId)
        {
            return _messageService.GetAllReceiveMessageByUserId(userId);
        }

        [HttpGet]
        [Route("api/messages/history/{currentUserId}/{userId}")]
        public ICollection<MessageDTO> GetAllHistoryMessages(long currentUserId, long userId)
        {
            return _messageService.GetAllHistoryMessageByUserId(currentUserId, userId);
        }

        [HttpPost]
        public bool Post([FromBody] MessageDTO message)
        {
            _messageService.AddMessage(message);
            return true;
        }

        [HttpPut]
        public void Put([FromBody] MessageDTO message)
        {
            _messageService.UpdateMessage(message);
        }

        [HttpDelete]
        public bool Delete(long id)
        {
            _messageService.DeleteMessage(id);
            return true;
        }
    }
}
