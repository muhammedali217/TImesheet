using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace TimeSheet.Models
{
    public class TimeSheetRepository
    {
        SqlParameter[] arlParams = null;
        public DataTable ExportMonthlyWrkedHours(string sDate,string eDate)
        {
            try
            {
                arlParams = new SqlParameter[2];
                arlParams[0] = new SqlParameter("@StartDate", sDate);
                arlParams[1] = new SqlParameter("@EndDate", eDate);
               return SQLHelper.ExecuteDataset("TimeSheet_Print", arlParams).Tables[2];     
            }
            catch
            {
                return null;
            }
        }

        public string GetAllEmployeesEmailId()
        {
            return SQLHelper.ExecuteDataset("Employee_EmailAddres").Tables[0].Rows[0][0].ToString();
        }


        public DataTable BillReportDownLoad(string FDate,string EDate,string SearchTypeId,string InvoiceCompany,string Status)
        {
            arlParams = new SqlParameter[5];
            arlParams[0] = new SqlParameter("@FromDate", FDate);
            arlParams[1] = new SqlParameter("@ToDate", EDate);
            arlParams[2] = new SqlParameter("@SearchTypeID", SearchTypeId);
            arlParams[3] = new SqlParameter("@BillingInfo_Company", InvoiceCompany);
            arlParams[4] = new SqlParameter("@BillingInfo_Status", Status);
            return SQLHelper.ExecuteDataset("BillingInfo_FrmToDueDateReprt", arlParams).Tables[2];  
        }

        public DataTable RequestReport(string ReqType,string ReqStatus)
        {
            arlParams = new SqlParameter[2];
            arlParams[0] = new SqlParameter("@RequestType_Id", ReqType);
            arlParams[1] = new SqlParameter("@Request_Status", ReqStatus);
            return SQLHelper.ExecuteDataset("Request_ViewAllAdmib", arlParams).Tables[2];
        }

        public DataTable LeaveReportThisMonth(string month)
        {
            arlParams = new SqlParameter[1];
            arlParams[0] = new SqlParameter("@MonthName", month);

            return SQLHelper.ExecuteDataset("Leave_TakenEmployeeDetails", arlParams).Tables[2];
        }

        public DataTable LOPReportThisMonth(string month)
        {
            arlParams = new SqlParameter[1];
            arlParams[0] = new SqlParameter("@Month", month);

            return SQLHelper.ExecuteDataset("Lop_GetDetails", arlParams).Tables[2];
        }


        public DataTable LeaveDetailsReport()
        {
            return SQLHelper.ExecuteDataset("LeaveHistory_EmpDashBoard").Tables[2];
        }
    }
}