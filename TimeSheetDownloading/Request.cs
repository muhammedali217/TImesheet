using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeSheetDownloading
{
    public class Request
    {

        public string Request_EmpName { get; set; }
        public string Request_EmpEmail{ get; set; }
        public string Request_Date    { get; set; }
        public string Request_Remarks { get; set; }
        public string Request_Status  { get; set; }
        public string Request_Type    { get; set; }
        public string TrvlFDate       { get; set; }
        public string TrvlTDate       { get; set; }
        public string TrvlRemarks     { get; set; }
        public string VisaType        { get; set; }
        public string VisaRemarks     { get; set; }
        public string IdRqType        { get; set; }
        public string IdRemarks       { get; set; }
        public string ExpnseFor       { get; set; }
        public string ExpnseCost      { get; set; }
        public string ExpnsePaidTo    { get; set; }
        public string WrkFHmeFDate    { get; set; }
        public string WrkFHmeTDate    { get; set; }
        public string WrkFHmeReason   { get; set; }
        public string ReimbrseFor     { get; set; }
        public string ReimbrseRemarks { get; set; }
        public string ReimbrseUsedDate{ get; set; }
        public string SDate { get; set; }
        public string EDate { get; set; }


    }
}