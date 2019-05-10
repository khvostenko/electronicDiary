using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Diary.DAL.Models;

namespace Diary.DAL.Configurations
{
    public class MessageConfiguration: EntityTypeConfiguration<Message>
    {
        public MessageConfiguration()
        {
            ToTable("dbo.Message");
        }
        
    }
}
