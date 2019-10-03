using System;
using System.Data.SqlClient;

namespace TimeSheet.Models
{
    public class PunchDetailsRepository
    {
        SqlParameter[] arlParams;
        public string AddPunchTimeDetails(PunchDetails oPunchDetails)
        {
            try
            {
                arlParams = new SqlParameter[8];
                arlParams[0] = new SqlParameter("@AttendanceLog_Id",oPunchDetails.AttendanceLog_Id);
                arlParams[1] = new SqlParameter("@AttendanceLog_Date", oPunchDetails.AttendanceLog_Date);
                arlParams[2] = new SqlParameter("@AttendanceLog_PunchRecords", oPunchDetails.AttendanceLog_PunchRecords);
                arlParams[3] = new SqlParameter("@AttendanceLog_WorkDuration", oPunchDetails.AttendanceLog_WorkDuration);
                arlParams[4] = new SqlParameter("@AttendanceLog_InTime", oPunchDetails.AttendanceLog_InTime);
                arlParams[5] = new SqlParameter("@AttendanceLog_OutTime", oPunchDetails.AttendanceLog_OutTime);
                arlParams[6] = new SqlParameter("@AttendanceLog_NormalDuration", oPunchDetails.AttendanceLog_NormalDuration);
                arlParams[7] = new SqlParameter("@Employee_Id", oPunchDetails.Employee_Id);
                SQLHelper.ExecuteNonQuery("AttendanceLogs_InsertFromLocal", arlParams);
                return "Success";
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message);
                return exMe.Message;
            }
        }
    }
}