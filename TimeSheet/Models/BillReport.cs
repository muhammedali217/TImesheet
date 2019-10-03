using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeSheet.Models
{
    public class BillReport
    {
        public string FDate { get; set; }
        public string EDate { get; set; }
        public string SearchTypeId { get; set; }
        public string InvoiceCmpny { get; set; }
        public string Status { get; set; }
       
    }
}