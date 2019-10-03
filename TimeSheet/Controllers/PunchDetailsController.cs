using System;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TimeSheet.Models;
namespace TimeSheet.Controllers
{
    public class PunchDetailsController : ApiController
    {
        //[AcceptVerbs("GET", "POST")]
        //public HttpResponseMessage AddPunchDetails(string PunchTimeDetailsId,string tktno, string hhmm, string tmmm, string hh_mm, string flag, string date, string sno, string INOUT)
        //{
        //    try
        //    {
        //        PunchDetails oPunchDetails = new PunchDetails();
        //        oPunchDetails.PunchTimeDetailsId = PunchTimeDetailsId;
        //        oPunchDetails.tktno = tktno;
        //        oPunchDetails.hhmm = hhmm;
        //        oPunchDetails.tmmm = tmmm;
        //        oPunchDetails.hh_mm = hh_mm;
        //        oPunchDetails.flag = flag;
        //        oPunchDetails.date = date;
        //        oPunchDetails.sno = sno;
        //        oPunchDetails.INOUT = INOUT;

        //        PunchDetailsRepository orepository = new PunchDetailsRepository();
        //        string response = orepository.AddPunchTimeDetails(oPunchDetails);
        //        return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
        //    }
        //    catch (SqlException exMe)
        //    {
        //        ApplicationLog.LogError(exMe);
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
        //    }
        //    catch (Exception exMe)
        //    {
        //        ApplicationLog.LogError(exMe);
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
        //    }
        //}
     //   @AttendanceLog_Id,
     //@AttendanceLog_Date ,
     //@AttendanceLog_InTime ,
     //@AttendanceLog_PunchRecords ,
     //@AttendanceLog_Status ,
     //@Employee_Id )

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage AddPunchDetails(string AttendanceLog_Id, string AttendanceLog_Date, string AttendanceLog_PunchRecords, string AttendanceLog_WorkDuration, string AttendanceLog_InTime, string AttendanceLog_OutTime, string AttendanceLog_NormalDuration, string Employee_Id)
        {
            try
            {
                PunchDetails oPunchDetails = new PunchDetails();
                oPunchDetails.AttendanceLog_Id = AttendanceLog_Id;
                oPunchDetails.AttendanceLog_Date = AttendanceLog_Date;
                oPunchDetails.AttendanceLog_PunchRecords = AttendanceLog_PunchRecords;
                oPunchDetails.AttendanceLog_WorkDuration = AttendanceLog_WorkDuration;
                oPunchDetails.AttendanceLog_InTime = AttendanceLog_InTime;
                oPunchDetails.AttendanceLog_OutTime = AttendanceLog_OutTime;
                oPunchDetails.AttendanceLog_NormalDuration = AttendanceLog_NormalDuration;
                oPunchDetails.Employee_Id = Employee_Id;



                PunchDetailsRepository orepository = new PunchDetailsRepository();
                string response = orepository.AddPunchTimeDetails(oPunchDetails);
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }

       
    }
}
