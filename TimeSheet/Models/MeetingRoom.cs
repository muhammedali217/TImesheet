using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeSheet.Models
{
    public class MeetingRoom
    {
        public string EmpName { get; set; }
        public string Date { get; set; }
        public string For { get; set; }
        public string Time { get; set; }
        public string Participants { get; set; }
        public string EmpEmail { get; set; }

    }
}