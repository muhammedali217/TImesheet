
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace TimeSheetJobs
{
    public class MailRepository
    {
        public string GetAllEmployeesEmailId()
        {
            return SQLHelper.ExecuteDataset("Employee_EmailAddres").Tables[0].Rows[0][0].ToString();
        }
        public DataSet GetBirthDayEmployeesEmailId()
        {
            return SQLHelper.ExecuteDataset("Employee_BirthDayMail");
        }
        public DataSet GetTodayAttendance(string Status)
        {
            //return SQLHelper.ExecuteDatasetUsingSmartdb("InstaccessDailyAttendance");
            DataSet accdatadet = new DataSet();


            List<SqlParameter> AttDaily = new List<SqlParameter>();

            AttDaily.Add(new SqlParameter("Status", Status));
            SqlParameter[] cmdAttDaily = AttDaily.ToArray();            
            accdatadet = SQLHelper.ExecuteDatasetUsingSmartdb("InstaccessDailyAttendance", cmdAttDaily);


            return accdatadet;
        }
    }
}

