using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication4.Model
{
    public class Message
    {
        public int Id { get; set; }
        public string MessagePost { get; set; }
        public string Comment { get; set; }
        public int Like { get; set; }
    }
}
