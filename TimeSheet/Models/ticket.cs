using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeSheet.Models
{
    public class ticket
    {
        public string EmpName { get; set; }
        public string Email { get; set; }
        public string Issue { get; set; }
        public string Type { get; set; }
        public string Priority { get; set; }
        public string Detail { get; set; }
        public string TicketNumber { get; set; }
        public string TicketPKValue { get; set; }
        public string SupportMsgContent { get; set; }

    }
}