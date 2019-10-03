using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeSheet.Models
{
    public class Leave
    {
        public string Leave_EmpName { get; set; }
        public string Leave_Type { get; set; }
        public string Leave_Reason { get; set; }
        public string Leave_FromDate { get; set; }
        public string Leave_ToDate { get; set; }
        public int Leave_TotalDays { get; set; }
        public string Leave_Status { get; set; }
        public string Leave_RequestedEmpEmail { get; set; }
        public string Leave_TotalDayz { get; set; }
        public string Leave_Remarks { get; set; }
        public double Leave_NoOfDays { get; set; }

    }
}