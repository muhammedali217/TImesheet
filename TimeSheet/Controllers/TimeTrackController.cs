using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TimeSheet.Common;
using TimeSheet.Models;



namespace TimeSheet.Controllers
{
    public class TimeTrackController : ApiController
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
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc);

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
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc);

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
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc);

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
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc, arlParams);
                else
                    dsResult = DBHelper.ExecuteDataset(oServiceParams.strProc);

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
                SmsMailHelper.EmployeeAddedEmail(EmpName, EmpCode, EmpDesignation);
                return "Success";
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message, "Error in accessing EmployeeAddedEmail service from Web");
                return exMe.Message;
            }
        }

        //[AcceptVerbs("GET", "POST")]
        //public string LeaveApplicationEmail(Leave oLeave)
        //{
        //    try
        //    {

        //        DataTableSuccess oDataTableMail = new DataTableSuccess();
        //        string EmpName = Convert.ToString(oLeave.Leave_EmpName);//name
        //        string LeaveType = Convert.ToString(oLeave.Leave_Type);//email
        //        string Reason = Convert.ToString(oLeave.Leave_Reason);//password
        //        string FromDate = Convert.ToString(oLeave.Leave_FromDate);//name
        //        string ToDate = Convert.ToString(oLeave.Leave_ToDate);//email
        //        string TotalLeaves = Convert.ToString(oLeave.Leave_TotalDays);//password

        //        SmsMailHelper.LeaveApplicationEmail(EmpName, LeaveType, Reason, FromDate, ToDate, TotalLeaves);
        //        return "Success";
        //    }
        //    catch (Exception exMe)
        //    {
        //        ApplicationLog.LogError(exMe.Message, "Error in LeaveApplicationEmail accessing service from Web");
        //        return exMe.Message;
        //    }
        //}



        //[AcceptVerbs("GET", "POST")]
        //public string LeaveAcceptRejectEmail(Leave oLeave)
        //{
        //    try
        //    {

        //        DataTableSuccess oDataTableMail = new DataTableSuccess();
        //        string EmpName = Convert.ToString(oLeave.Leave_EmpName);//name
        //        string LeaveType = Convert.ToString(oLeave.Leave_Type);//email
        //        int TotalLeaves = oLeave.Leave_TotalDays;//password
        //        string LeaveStatus = Convert.ToString(oLeave.Leave_Status);
        //        string Email = Convert.ToString(oLeave.Leave_RequestedEmpEmail);
        //        SmsMailHelper.LeaveAcceptRejectEmail(EmpName, LeaveType, TotalLeaves, Email, LeaveStatus);
        //        return "Success";
        //    }
        //    catch (Exception exMe)
        //    {
        //        ApplicationLog.LogError(exMe.Message, "Error in LeaveApplicationEmail accessing service from Web");
        //        return exMe.Message;
        //    }
        //}



    }
}
