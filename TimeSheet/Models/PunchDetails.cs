
namespace TimeSheet
{
    public class PunchDetails
    {
        public string PunchTimeDetailsId { get; set; }
        public string tktno { get; set; }
        public string hhmm { get; set; }
        public string tmmm { get; set; }
        public string hh_mm { get; set; }
        public string flag { get; set; }
        public string date { get; set; }
        public string sno { get; set; }
        public string INOUT { get; set; }

        public string AttendanceLog_Id { get; set; }
        public string AttendanceLog_Date { get; set; }
        public string AttendanceLog_PunchRecords { get; set; }
        public string AttendanceLog_WorkDuration { get; set; }    
        public string AttendanceLog_InTime { get; set; }
        public string AttendanceLog_OutTime { get; set; }
        public string AttendanceLog_NormalDuration { get; set; }
        public string Employee_Id { get; set; }

       
    }
}