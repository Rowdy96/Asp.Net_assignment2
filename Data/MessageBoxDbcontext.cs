using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication4.Model;

namespace WebApplication4.Models
{
    public class MessageBoxDbcontext : DbContext
    {
        public MessageBoxDbcontext (DbContextOptions<MessageBoxDbcontext> options)
            : base(options)
        {
        }

        public DbSet<WebApplication4.Model.Message> Message { get; set; }
    }
}
