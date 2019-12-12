using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using TimeSheet.Common;
using TimeSheet.Models;

namespace TimeSheet.Controllers
{
    public class FIXZIServiceController : ApiController
    {
        //Common service for Android
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage GetHTTPResponseDataAndroid(ServiceParams oServiceParams)
        {
            try
            {
                DataTable dtResult = new DataTable();
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();
                int nArgCnt = 0, nArgIncre = 0;
                if (oServiceParams.oProcParams != null)
                    nArgCnt = oServiceParams.oProcParams.Count;
                if (oServiceParams.oEncryptedArgs != null)
                    nArgCnt = nArgCnt + oServiceParams.oEncryptedArgs.Count;

                SqlParameter[] arlParams = new SqlParameter[nArgCnt];
                if (oServiceParams.oProcParams != null)
                {
                    for (int j = 0; j < oServiceParams.oProcParams.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oProcParams[j].strKey), oServiceParams.oProcParams[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                if (oServiceParams.oEncryptedArgs != null)
                {
                    for (int j = 0; j < oServiceParams.oEncryptedArgs.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oEncryptedArgs[j].strKey), oServiceParams.oEncryptedArgs[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                DataSet dsResult = new DataSet();
                if (nArgCnt != 0)
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc);

                oDataTableWStatus.status = dsResult.Tables[0].Rows[0][0].ToString();
                oDataTableWStatus.message = dsResult.Tables[1].Rows[0][0].ToString();
                oDataTableWStatus.details = dsResult.Tables[2];

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing service from Android");
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }

        //Common service for IOS
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage GetHTTPResponseDataIOS(ServiceParams oServiceParams)
        {
            try
            {
                DataTable dtResult = new DataTable();
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                int nArgCnt = 0, nArgIncre = 0;
                if (oServiceParams.oProcParams != null)
                    nArgCnt = oServiceParams.oProcParams.Count;
                if (oServiceParams.oEncryptedArgs != null)
                    nArgCnt = nArgCnt + oServiceParams.oEncryptedArgs.Count;

                SqlParameter[] arlParams = new SqlParameter[nArgCnt];
                if (oServiceParams.oProcParams != null)
                {
                    for (int j = 0; j < oServiceParams.oProcParams.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oProcParams[j].strKey), oServiceParams.oProcParams[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                if (oServiceParams.oEncryptedArgs != null)
                {
                    for (int j = 0; j < oServiceParams.oEncryptedArgs.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oEncryptedArgs[j].strKey), oServiceParams.oEncryptedArgs[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                DataSet dsResult = new DataSet();
                if (nArgCnt != 0)
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc);

                oDataTableWStatus.status = dsResult.Tables[0].Rows[0][0].ToString();
                oDataTableWStatus.message = dsResult.Tables[1].Rows[0][0].ToString();
                oDataTableWStatus.details = dsResult.Tables[2];

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing service from IOS");
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }

        //Common service for Web
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage GetHTTPResponseDataWeb(ServiceParams oServiceParams)
        {
            TimeZoneInfo INDIAN_ZONE = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
            DateTime dtIndianTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
            int day = dtIndianTime.Day, month = dtIndianTime.Month, year = dtIndianTime.Year;
            try
            {
                DataTable dtResult = new DataTable();
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                int nArgCnt = 0, nArgIncre = 0;
                if (oServiceParams.oProcParams != null)
                    nArgCnt = oServiceParams.oProcParams.Count;
                if (oServiceParams.oEncryptedArgs != null)
                    nArgCnt = nArgCnt + oServiceParams.oEncryptedArgs.Count;

                SqlParameter[] arlParams = new SqlParameter[nArgCnt];
                if (oServiceParams.oProcParams != null)
                {
                    for (int j = 0; j < oServiceParams.oProcParams.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oProcParams[j].strKey), oServiceParams.oProcParams[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                if (oServiceParams.oEncryptedArgs != null)
                {
                    for (int j = 0; j < oServiceParams.oEncryptedArgs.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oEncryptedArgs[j].strKey), oServiceParams.oEncryptedArgs[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                DataSet dsResult = new DataSet();
                if (nArgCnt != 0)
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc);

                oDataTableWStatus.status = dsResult.Tables[0].Rows[0][0].ToString();
                oDataTableWStatus.message = dsResult.Tables[1].Rows[0][0].ToString();
                oDataTableWStatus.details = dsResult.Tables[2];

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }

        //Common service for Web
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage GetHTTPResponseLogin(ServiceParams oServiceParams)
        {
            TimeZoneInfo INDIAN_ZONE = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
            DateTime dtIndianTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
            int dayOfWeek = (int)dtIndianTime.DayOfWeek;
            int hours = dtIndianTime.Hour;
            try
            {
                DataTable dtResult = new DataTable();
                LoginDataTableSuccess oDataTableWStatus = new LoginDataTableSuccess();

                int nArgCnt = 0, nArgIncre = 0;
                if (oServiceParams.oProcParams != null)
                    nArgCnt = oServiceParams.oProcParams.Count;
                if (oServiceParams.oEncryptedArgs != null)
                    nArgCnt = nArgCnt + oServiceParams.oEncryptedArgs.Count;

                SqlParameter[] arlParams = new SqlParameter[nArgCnt];
                if (oServiceParams.oProcParams != null)
                {
                    for (int j = 0; j < oServiceParams.oProcParams.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oProcParams[j].strKey), oServiceParams.oProcParams[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                if (oServiceParams.oEncryptedArgs != null)
                {
                    for (int j = 0; j < oServiceParams.oEncryptedArgs.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oEncryptedArgs[j].strKey), oServiceParams.oEncryptedArgs[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                DataSet dsResult = new DataSet();
                if (nArgCnt != 0)
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc);

                oDataTableWStatus.status = dsResult.Tables[0].Rows[0][0].ToString();
                oDataTableWStatus.message = dsResult.Tables[1].Rows[0][0].ToString();
                oDataTableWStatus.day = dayOfWeek;
                oDataTableWStatus.hour = hours;
                oDataTableWStatus.details = dsResult.Tables[2];

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }

        //Common service for populating drop down
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage GetHTTPDropDownResponse(ServiceParams oServiceParams)
        {
            try
            {
                int nArgCnt = 0, nArgIncre = 0;
                if (oServiceParams.oProcParams != null)
                    nArgCnt = oServiceParams.oProcParams.Count;
                if (oServiceParams.oEncryptedArgs != null)
                    nArgCnt = nArgCnt + oServiceParams.oEncryptedArgs.Count;

                SqlParameter[] arlParams = new SqlParameter[nArgCnt];
                if (oServiceParams.oProcParams != null)
                {
                    for (int j = 0; j < oServiceParams.oProcParams.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oProcParams[j].strKey), oServiceParams.oProcParams[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                if (oServiceParams.oEncryptedArgs != null)
                {
                    for (int j = 0; j < oServiceParams.oEncryptedArgs.Count; j++)
                    {
                        arlParams[nArgIncre] = new SqlParameter(("@" + oServiceParams.oEncryptedArgs[j].strKey), oServiceParams.oEncryptedArgs[j].strArgmt);
                        nArgIncre = nArgIncre + 1;
                    }
                }

                DataSet dsResult = new DataSet();
                if (nArgCnt != 0)
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = SQLHelper.ExecuteDataset(oServiceParams.strProc);

                List<DropDown> oListDropDown = new List<DropDown>();
                if (dsResult.Tables[2].Rows.Count != 0)
                {
                    foreach (DataRow row in dsResult.Tables[2].Rows)
                    {
                        oListDropDown.Add(new DropDown { ValueMember = Convert.ToInt32(row[0]), DisplayMember = Convert.ToString(row[1]) });
                    }
                }

                var response = oListDropDown;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }

        //encrypt otp
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage GetEncryptedValue(EncryptedArgs oEncryptedArgs)
        {
            try
            {
                var response = oEncryptedArgs.strArgmt;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }
        
        [AcceptVerbs("GET", "POST")]
        public string EmployeeAddedEmail(Employee oEmployee)
        {
            try
            {

                DataTableSuccess oDataTableMail = new DataTableSuccess();
                string EmpName = Convert.ToString(oEmployee.EmpName);//name
                string EmpCode = Convert.ToString(oEmployee.EmpCode);//email
                string EmpDesignation = Convert.ToString(oEmployee.EmpDesignation);//password
                string UserName = Convert.ToString(Environment.UserName);
                SmsMailHelper.EmployeeAddedEmail(EmpName, EmpCode, EmpDesignation);
                return "Success ";
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing EmployeeAddedEmail service from Web");
                return exMe.Message;
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage LeaveApplicationEmail(Leave oLeave)
        {
            try
            {

                DataTableSuccess oDataTableWStatus = new DataTableSuccess();
                string EmpName = Convert.ToString(oLeave.Leave_EmpName);//name
                string LeaveType = Convert.ToString(oLeave.Leave_Type);//email
                string Reason = Convert.ToString(oLeave.Leave_Reason);//password
                string FromDate = Convert.ToString(oLeave.Leave_FromDate);//name
                string ToDate = Convert.ToString(oLeave.Leave_ToDate);//email
                double TotalLeaves = oLeave.Leave_NoOfDays;//password
                //string UserName = Convert.ToString(Environment.UserName);
                SmsMailHelper.LeaveApplicationEmail(EmpName, LeaveType, Reason, FromDate, ToDate, TotalLeaves);

                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;

                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);

            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in LeaveApplicationEmail accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage LeaveAcceptRejectEmail(Leave oLeave)
        {
            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                string EmpName = Convert.ToString(oLeave.Leave_EmpName);//name
                string LeaveType = Convert.ToString(oLeave.Leave_Type);//email
                string TotalLeaves = Convert.ToString(oLeave.Leave_TotalDayz);//password
                string LeaveStatus = Convert.ToString(oLeave.Leave_Status);
                string Email = Convert.ToString(oLeave.Leave_RequestedEmpEmail);
                string Remarks = Convert.ToString(oLeave.Leave_Remarks);
                SmsMailHelper.LeaveAcceptRejectEmail(EmpName, LeaveType, TotalLeaves, Email, LeaveStatus, Remarks);
                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in LeaveApplicationEmail accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage RequestEmail2Admin(Request oRequest)
        {
            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                string EmpName = Convert.ToString(oRequest.Request_EmpName);//name
                string RequestType = Convert.ToString(oRequest.Request_Type);//RequestType

                string TrvlFDate = Convert.ToString(oRequest.TrvlFDate);
                string TrvlTDate = Convert.ToString(oRequest.TrvlTDate);
                string TrvlRemarks = Convert.ToString(oRequest.TrvlRemarks);

                string VisaType = Convert.ToString(oRequest.VisaType);
                string VisaRemarks = Convert.ToString(oRequest.VisaRemarks);

                string IdRqType = Convert.ToString(oRequest.IdRqType);
                string IdRemarks = Convert.ToString(oRequest.IdRemarks);

                string ExpnseFor = Convert.ToString(oRequest.ExpnseFor);
                string ExpnseCost = Convert.ToString(oRequest.ExpnseCost);
                string ExpnsePaidTo = Convert.ToString(oRequest.ExpnsePaidTo);

                string WrkFHmeFDate = Convert.ToString(oRequest.WrkFHmeFDate);
                string WrkFHmeTDate = Convert.ToString(oRequest.WrkFHmeTDate);
                string WrkFHmeReason = Convert.ToString(oRequest.WrkFHmeReason);


                string ReimbrseFor = Convert.ToString(oRequest.ReimbrseFor);
                string ReimbrseUsedDate = Convert.ToString(oRequest.ReimbrseUsedDate);
                string ReimbrseRemarks = Convert.ToString(oRequest.ReimbrseRemarks);
                string ReimbrseAmount = Convert.ToString(oRequest.ReimbrseAmount);

                string cmnReqFor = Convert.ToString(oRequest.CmonRqFor);
                string cmnRePurpose = Convert.ToString(oRequest.CmonRqPurpose);
                string cmnReqDesc = Convert.ToString(oRequest.CmonRqDesc);


                SmsMailHelper.RequestEmail2Admin(RequestType, EmpName, TrvlFDate, TrvlTDate, TrvlRemarks, VisaType, VisaRemarks, IdRqType, IdRemarks, ExpnseFor, ExpnseCost, ExpnsePaidTo, WrkFHmeFDate, WrkFHmeTDate, WrkFHmeReason, ReimbrseFor, ReimbrseUsedDate, ReimbrseRemarks, ReimbrseAmount, cmnReqFor, cmnRePurpose, cmnReqDesc);
                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in LeaveApplicationEmail accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage RequestAcceptRejectEmail(Request oRequest)
        {
            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                string EmpName = Convert.ToString(oRequest.Request_EmpName);//name
                string EmpEmail = Convert.ToString(oRequest.Request_EmpEmail);//Email
                string ReqType = Convert.ToString(oRequest.Request_Type);//type
                string ReqDate = Convert.ToString(oRequest.Request_Date);//date
                string Remarks = Convert.ToString(oRequest.Request_Remarks);//remarks
                string Status = Convert.ToString(oRequest.Request_Status);//remarks

                SmsMailHelper.RequestAcceptRejectEmail(EmpName, EmpEmail, ReqType, ReqDate, Status, Remarks);
                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in LeaveApplicationEmail accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage ApproveRejectEmail2Admin(Request oRequest)
        {

            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                string RequestType = Convert.ToString(oRequest.Request_Type);
                string EmpName = Convert.ToString(oRequest.Request_EmpName);//type
                string ReqDate = Convert.ToString(oRequest.Request_Date);//date
                string ReqStatus = Convert.ToString(oRequest.Request_Status);//remarks


                SmsMailHelper.ApproveRejectEmailNotification2Admin(RequestType, EmpName, ReqDate, ReqStatus);
                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in MeetingRoomRqstEmail accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage ExportToExcel(Request oRequest)
        {
            try
            {
                string SDate = Convert.ToString(oRequest.SDate);//name
                string EDate = Convert.ToString(oRequest.EDate);//Email
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                TimeSheetRepository oTimeSheetRepository = new TimeSheetRepository();

                DataTable dtWorkedHours = oTimeSheetRepository.ExportMonthlyWrkedHours(SDate, EDate);
                int totalRows = dtWorkedHours.Rows.Count;//Number of Rows
                string sum1 = "H" + (totalRows + 3);// columnname and DataTable Rows combined
                if (dtWorkedHours.Rows.Count > 0)
                {
                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    System.Web.UI.WebControls.DataGrid dgGrid = new System.Web.UI.WebControls.DataGrid();
                    dgGrid.DataSource = dtWorkedHours;
                    dgGrid.DataBind();

                    //Get the HTML for the control.
                    dgGrid.RenderControl(hw);
                    //Write the HTML back to the browser.
                    //Response.ContentType = application/vnd.ms-excel;

                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment;");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";


                    HttpContext.Current.Response.Write(tw.ToString());
                    //string calculatedCommsn = @"<Table><tr><td>   </td> <td>     </td> <td>     </td> <td>     </td><td>     </td><td>     </td><td> <h3><b>Total Sales($)</td><td style='padding-left: 5px; padding-bottom:3px;color:#FF0000;font-size: 14px;font-weight:bold'> =SUM(H4:" + sum1 + ")</td></tr></Table>";
                    //HttpContext.Current.Response.Write(calculatedCommsn);
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);

                }
                else
                {
                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment; filename=" + "Report" + ".xls");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";

                    string headerTable1 = @"                                                                        ";
                    HttpContext.Current.Response.Write(headerTable1);
                    string headerTable2 = @"                    No records found.";
                    HttpContext.Current.Response.Write(headerTable2);
                    HttpContext.Current.Response.Write(tw.ToString());
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);


                }

            }


            catch (Exception ex)
            {

                var response = "Failed";
                ApplicationLog.LogError(ex.Message, "Error in Export timesheet from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }

        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage MeetingRoomRqstEmail(MeetingRoom oMeetingRoom)
        {

            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                string EmpName = Convert.ToString(oMeetingRoom.EmpName);
                string For = Convert.ToString(oMeetingRoom.For);//type
                string Date = Convert.ToString(oMeetingRoom.Date);//date
                string Time = Convert.ToString(oMeetingRoom.Time);//remarks
                string Participants = Convert.ToString(oMeetingRoom.Participants);//remarks
                string Email = Convert.ToString(oMeetingRoom.EmpEmail);//remarks

                SmsMailHelper.MeetingRoomBookedMail(EmpName, For, Date, Time, Participants, Email);
                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in MeetingRoomRqstEmail accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public string ApproveMeetingRoomRequest()
        {
            string Email = HttpContext.Current.Request.QueryString["EmailId"];
            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();
                SmsMailHelper.MeetingRoomApprove(Email);
                //oDataTableWStatus.status = "SUCCESS";
                //oDataTableWStatus.message = "Send Successfully";
                //oDataTableWStatus.details = null;

                //var response = oDataTableWStatus;
                //return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
                return "Approved";
            }
            catch (Exception exMe)
            {
                // var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in MeetingRoom ApproveEmail accessing service from Web");
                // return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
                return "Approved";
            }
        }

        [AcceptVerbs("GET", "POST")]
        public string RejectMeetingRoomRequest()
        {
            string Email = HttpContext.Current.Request.QueryString["EmailId"];
            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();
                SmsMailHelper.MeetingRoomReject(Email);
                //oDataTableWStatus.status = "SUCCESS";
                //oDataTableWStatus.message = "Send Successfully";
                //oDataTableWStatus.details = null;

                //var response = oDataTableWStatus;
                //return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
                return "Rejected";
            }
            catch (Exception exMe)
            {
                //var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in MeetingRoom ApproveEmail accessing service from Web");
                // return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
                return "Rejected";
            }
        }

        [AcceptVerbs("GET", "POST")]
        public void UploadFile()
        {
            if (HttpContext.Current.Request.Files.AllKeys.Any())
            {
                // Get the uploaded image from the Files collection
                var httpPostedFile = HttpContext.Current.Request.Files["UploadedFile"];

                if (httpPostedFile != null)
                {
                    // Validate the uploaded image(optional)

                    // Get the complete file path
                    var fileSavePath = Path.Combine(HttpContext.Current.Server.MapPath("~/KnowledgeCenter"), httpPostedFile.FileName);

                    // Save the uploaded file to "UploadedFiles" folder
                    httpPostedFile.SaveAs(fileSavePath);
                }
            }
        }

        //Download the bill reports
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage BillReportExport(BillReport oBillReport)
        {
            try
            {
                string FDate = Convert.ToString(oBillReport.FDate);
                string EDate = Convert.ToString(oBillReport.EDate);//
                string SearchId = Convert.ToString(oBillReport.SearchTypeId);//
                string InvoiceCompny = Convert.ToString(oBillReport.InvoiceCmpny);//
                string Status = Convert.ToString(oBillReport.Status);//

                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                TimeSheetRepository oTimeSheetRepository = new TimeSheetRepository();

                DataTable dtReport = oTimeSheetRepository.BillReportDownLoad(FDate, EDate, SearchId, InvoiceCompny, Status);
                int totalRows = dtReport.Rows.Count;//Number of Rows
                string sum1 = "H" + (totalRows + 3);// columnname and DataTable Rows combined
                if (dtReport.Rows.Count > 0)
                {

                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    System.Web.UI.WebControls.DataGrid dgGrid = new System.Web.UI.WebControls.DataGrid();
                    dgGrid.DataSource = dtReport;
                    dgGrid.DataBind();

                    //Get the HTML for the control.
                    dgGrid.RenderControl(hw);
                    //Write the HTML back to the browser.
                    //Response.ContentType = application/vnd.ms-excel;

                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment;");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";


                    HttpContext.Current.Response.Write(tw.ToString());
                    //string calculatedCommsn = @"<Table><tr><td>   </td> <td>     </td> <td>     </td> <td>     </td><td>     </td><td>     </td><td> <h3><b>Total Sales($)</td><td style='padding-left: 5px; padding-bottom:3px;color:#FF0000;font-size: 14px;font-weight:bold'> =SUM(H4:" + sum1 + ")</td></tr></Table>";
                    //HttpContext.Current.Response.Write(calculatedCommsn);
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);

                }
                else
                {
                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment; filename=" + "Report" + ".xls");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";

                    string headerTable1 = @"                                                                        ";
                    HttpContext.Current.Response.Write(headerTable1);
                    string headerTable2 = @"                    No records found.";
                    HttpContext.Current.Response.Write(headerTable2);
                    HttpContext.Current.Response.Write(tw.ToString());
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);


                }

            }


            catch (Exception ex)
            {

                var response = "Failed";
                ApplicationLog.LogError(ex.Message, "Error in Export timesheet from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }

        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage GenerateEmpCertificate(Certificate oCertificate)
        {
            DataTableSuccess oDataTableSuccess = new DataTableSuccess();
            try
            {
                Font boldFont = new Font(Font.FontFamily.TIMES_ROMAN, 14, Font.BOLD);


                string shortname = oCertificate.ShortName.ToString();
                string name = oCertificate.Name.ToString();
                string Designation = oCertificate.Designation.ToString();
                string JoinDate = oCertificate.JoiningDate.ToString();
                string gendrmamWomen = oCertificate.GentleManWomen.ToString();
                string himhis = oCertificate.himhis.ToString();

                string filepath = "~/Certification/" + shortname + ".pdf";
                //(HttpContext.Current.Server.MapPath("~/KnowledgeCenter")
                FileStream fs = new FileStream(HttpContext.Current.Server.MapPath(filepath), FileMode.Create, FileAccess.Write, FileShare.None);
                Document doc = new Document(PageSize.A4, 75f, 50f, 50f, 50f);

                PdfWriter writer = PdfWriter.GetInstance(doc, fs);
                doc.Open();


                // Setting paragraph's text alignment using iTextSharp.text.Element class

                var FontColour = new BaseColor(64, 64, 64);
                var MyFont = FontFactory.GetFont("Arial", 11, FontColour);


                string imageURL = "http://www.techvantagesystems.com/img/logo.png";
                iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance(imageURL);
                //Resize image depend upon your need
                //jpg.ScaleToFit(160f, 46f);

                //Give space before image
                jpg.SpacingBefore = 10f;
                //Give some space after the image
                jpg.SpacingAfter = 1f;
                jpg.Alignment = Element.ALIGN_CENTER;
                doc.Add(jpg);
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph(" "));

                Paragraph Heading = new Paragraph("EMPLOYMENT CERTIFICATE", boldFont);
                Heading.Alignment = Element.ALIGN_CENTER;

                //Heading.Add(CreateSimpleHtmlParagraph("<b>vxxv</b>"));


                doc.Add(new Paragraph(" "));
                Paragraph FirstPara = new Paragraph("This is to certify that " + name + " is working with our organization under the title of " + Designation + " since " + JoinDate + ". We found this " + gendrmamWomen + " fully committed to job and totally sincere towards our organization.");
                Paragraph SecondPara = new Paragraph("This certification is being issued upon the request of " + name + " for whatever legal purpose it may serve " + himhis + ".");
                DateTime dt = DateTime.Today;
                DateTime Today = DateTime.UtcNow.Date;
                string thisMonth = dt.ToString("MMMM");

                Console.WriteLine(thisMonth);
                string TodayDay = Today.ToString("dd");
                string TodayYear = Today.ToString("yyyy");
                //string TodayYear = Today.ToString("yyyy");



                Paragraph ThirdPara = new Paragraph("Issued this " + TodayDay + " " + thisMonth + " " + TodayYear + " Technopark, Trivandrum.");


                doc.Add(Heading);
                doc.Add(new Paragraph(" "));
                doc.Add(FirstPara);
                doc.Add(new Paragraph(" "));


                doc.Add(SecondPara);
                doc.Add(new Paragraph(" "));
                doc.Add(ThirdPara);
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph("Regards"));
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph("Deviprasad Thrivikraman"));
                doc.Add(new Paragraph("Director"));


                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph(" "));

                Paragraph Footer = new Paragraph("This Certificate is not valid unless having Signature or Seal ", MyFont);
                Footer.Alignment = Element.ALIGN_CENTER;
                doc.Add(Footer);

                doc.Close();

                oDataTableSuccess.status = "SUCCESS";
                oDataTableSuccess.message = "Created Successfully";
                oDataTableSuccess.details = null;

                var response = oDataTableSuccess;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception ex)
            {

                oDataTableSuccess.status = "FAILED";
                oDataTableSuccess.message = "Unable to Create. Please Try again.";
                oDataTableSuccess.details = null;
                var response = oDataTableSuccess;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
                throw ex;
            }


        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage RequestReportExport(Request oRequest)
        {
            try
            {
                string ReqType = Convert.ToString(oRequest.Request_Type);
                string ReqStatus = Convert.ToString(oRequest.Request_Status);

                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                TimeSheetRepository oTimeSheetRepository = new TimeSheetRepository();

                DataTable dtReport = oTimeSheetRepository.RequestReport(ReqType, ReqStatus);
                int totalRows = dtReport.Rows.Count;//Number of Rows
                string sum1 = "H" + (totalRows + 3);// columnname and DataTable Rows combined
                if (dtReport.Rows.Count > 0)
                {

                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    System.Web.UI.WebControls.DataGrid dgGrid = new System.Web.UI.WebControls.DataGrid();
                    dgGrid.DataSource = dtReport;
                    dgGrid.DataBind();

                    //Get the HTML for the control.
                    dgGrid.RenderControl(hw);
                    //Write the HTML back to the browser.
                    //Response.ContentType = application/vnd.ms-excel;

                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment;");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";


                    HttpContext.Current.Response.Write(tw.ToString());
                    //string calculatedCommsn = @"<Table><tr><td>   </td> <td>     </td> <td>     </td> <td>     </td><td>     </td><td>     </td><td> <h3><b>Total Sales($)</td><td style='padding-left: 5px; padding-bottom:3px;color:#FF0000;font-size: 14px;font-weight:bold'> =SUM(H4:" + sum1 + ")</td></tr></Table>";
                    //HttpContext.Current.Response.Write(calculatedCommsn);
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);

                }
                else
                {
                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment; filename=" + "Report" + ".xls");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";

                    string headerTable1 = @"                                                                        ";
                    HttpContext.Current.Response.Write(headerTable1);
                    string headerTable2 = @"                    No records found.";
                    HttpContext.Current.Response.Write(headerTable2);
                    HttpContext.Current.Response.Write(tw.ToString());
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);


                }

            }


            catch (Exception ex)
            {

                var response = "Failed";
                ApplicationLog.LogError(ex.Message, "Error in Export timesheet from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }

        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage TicketRequestMail2SupportPerson(ticket oticket)
        {

            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                string EmpName = Convert.ToString(oticket.EmpName);
                string Type = Convert.ToString(oticket.Type);//type
                string Issue = Convert.ToString(oticket.Issue);//date
                string Priority = Convert.ToString(oticket.Priority);//remarks
                string Detail = Convert.ToString(oticket.Detail);//remarks
                string TicketNumber = Convert.ToString(oticket.TicketNumber);//remarks
                string TicketPKValue = Convert.ToString(oticket.TicketPKValue);//remarks

                SmsMailHelper.TicketMail2SupportPerson(EmpName, Type, Issue, Priority, Detail, TicketNumber, TicketPKValue);
                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in TicketRqstEmail accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage ReplyToEmployeeRegardingTicket(ticket oticket)
        {

            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                string SupportMsgContent = Convert.ToString(oticket.SupportMsgContent);
                string Email = Convert.ToString(oticket.Email);
                string TicketNumber = Convert.ToString(oticket.TicketNumber);

                SmsMailHelper.ReplyToEmployeeRegardingTicket(Email, SupportMsgContent, TicketNumber);
                oDataTableWStatus.status = "SUCCESS";
                oDataTableWStatus.message = "Send Successfully";
                oDataTableWStatus.details = null;

                var response = oDataTableWStatus;
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                var response = "Failed";
                ApplicationLog.LogError(exMe.Message, "Error in sending Support Email accessing service from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage LeaveReportThisMonth(Request oRequest)
        {
            try
            {
                string month = Convert.ToString(oRequest.Month);

                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                TimeSheetRepository oTimeSheetRepository = new TimeSheetRepository();

                DataTable dtReport = oTimeSheetRepository.LeaveReportThisMonth(month);
                int totalRows = dtReport.Rows.Count;//Number of Rows
                string sum1 = "H" + (totalRows + 3);// columnname and DataTable Rows combined
                if (dtReport.Rows.Count > 0)
                {

                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    System.Web.UI.WebControls.DataGrid dgGrid = new System.Web.UI.WebControls.DataGrid();
                    dgGrid.DataSource = dtReport;
                    dgGrid.DataBind();

                    //Get the HTML for the control.
                    dgGrid.RenderControl(hw);
                    //Write the HTML back to the browser.
                    //Response.ContentType = application/vnd.ms-excel;

                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment;");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";


                    HttpContext.Current.Response.Write(tw.ToString());
                    //string calculatedCommsn = @"<Table><tr><td>   </td> <td>     </td> <td>     </td> <td>     </td><td>     </td><td>     </td><td> <h3><b>Total Sales($)</td><td style='padding-left: 5px; padding-bottom:3px;color:#FF0000;font-size: 14px;font-weight:bold'> =SUM(H4:" + sum1 + ")</td></tr></Table>";
                    //HttpContext.Current.Response.Write(calculatedCommsn);
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);

                }
                else
                {
                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment; filename=" + "Report" + ".xls");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";

                    string headerTable1 = @"                                                                        ";
                    HttpContext.Current.Response.Write(headerTable1);
                    string headerTable2 = @"                    No leave found.";
                    HttpContext.Current.Response.Write(headerTable2);
                    HttpContext.Current.Response.Write(tw.ToString());
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);


                }

            }


            catch (Exception ex)
            {

                var response = "Failed";
                ApplicationLog.LogError(ex.Message, "Error in Export timesheet from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }

        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage LOPReport(Request oRequest)
        {
            try
            {
                string month = Convert.ToString(oRequest.Month);

                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                TimeSheetRepository oTimeSheetRepository = new TimeSheetRepository();

                DataTable dtReport = oTimeSheetRepository.LOPReportThisMonth(month);
                int totalRows = dtReport.Rows.Count;//Number of Rows
                string sum1 = "H" + (totalRows + 3);// columnname and DataTable Rows combined
                if (dtReport.Rows.Count > 0)
                {

                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    System.Web.UI.WebControls.DataGrid dgGrid = new System.Web.UI.WebControls.DataGrid();
                    dgGrid.DataSource = dtReport;
                    dgGrid.DataBind();

                    //Get the HTML for the control.
                    dgGrid.RenderControl(hw);
                    //Write the HTML back to the browser.
                    //Response.ContentType = application/vnd.ms-excel;

                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment;");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";


                    HttpContext.Current.Response.Write(tw.ToString());
                    //string calculatedCommsn = @"<Table><tr><td>   </td> <td>     </td> <td>     </td> <td>     </td><td>     </td><td>     </td><td> <h3><b>Total Sales($)</td><td style='padding-left: 5px; padding-bottom:3px;color:#FF0000;font-size: 14px;font-weight:bold'> =SUM(H4:" + sum1 + ")</td></tr></Table>";
                    //HttpContext.Current.Response.Write(calculatedCommsn);
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);

                }
                else
                {
                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment; filename=" + "Report" + ".xls");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";

                    string headerTable1 = @"                                                                        ";
                    HttpContext.Current.Response.Write(headerTable1);
                    string headerTable2 = @"                    No leave found.";
                    HttpContext.Current.Response.Write(headerTable2);
                    HttpContext.Current.Response.Write(tw.ToString());
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);


                }

            }


            catch (Exception ex)
            {

                var response = "Failed";
                ApplicationLog.LogError(ex.Message, "Error in Export timesheet from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }

        }

        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage LeaveDetailsReport()
        {
            try
            {


                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                TimeSheetRepository oTimeSheetRepository = new TimeSheetRepository();

                DataTable dtReport = oTimeSheetRepository.LeaveDetailsReport();
                int totalRows = dtReport.Rows.Count;//Number of Rows
                string sum1 = "H" + (totalRows + 3);// columnname and DataTable Rows combined
                if (dtReport.Rows.Count > 0)
                {

                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    System.Web.UI.WebControls.DataGrid dgGrid = new System.Web.UI.WebControls.DataGrid();
                    dgGrid.DataSource = dtReport;
                    dgGrid.DataBind();

                    //Get the HTML for the control.
                    dgGrid.RenderControl(hw);
                    //Write the HTML back to the browser.
                    //Response.ContentType = application/vnd.ms-excel;

                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment;");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";


                    HttpContext.Current.Response.Write(tw.ToString());
                    //string calculatedCommsn = @"<Table><tr><td>   </td> <td>     </td> <td>     </td> <td>     </td><td>     </td><td>     </td><td> <h3><b>Total Sales($)</td><td style='padding-left: 5px; padding-bottom:3px;color:#FF0000;font-size: 14px;font-weight:bold'> =SUM(H4:" + sum1 + ")</td></tr></Table>";
                    //HttpContext.Current.Response.Write(calculatedCommsn);
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);

                }
                else
                {
                    System.IO.StringWriter tw = new System.IO.StringWriter();
                    System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                    HttpContext.Current.Response.AppendHeader("content-disposition", "attachment; filename=" + "Report" + ".xls");
                    // HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", "sample.xls"));
                    HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";

                    string headerTable1 = @"                                                                        ";
                    HttpContext.Current.Response.Write(headerTable1);
                    string headerTable2 = @"                    No leave found.";
                    HttpContext.Current.Response.Write(headerTable2);
                    HttpContext.Current.Response.Write(tw.ToString());
                    oDataTableWStatus.status = "SUCCESS";
                    oDataTableWStatus.message = "Send Successfully";
                    oDataTableWStatus.details = null;

                    var response = oDataTableWStatus;
                    return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);


                }

            }


            catch (Exception ex)
            {

                var response = "Failed";
                ApplicationLog.LogError(ex.Message, "Error in Export timesheet from Web");
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }

        }
    }
}
 