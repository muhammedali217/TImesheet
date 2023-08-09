using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Timers;
using System.Web;
using System.Xml;

namespace TimeSheet
{
    public class Jobs
    {
        public Jobs() { }

        public void DailyJob(string EmpId)
        {
            try
            {
                TimeZoneInfo INDIAN_ZONE = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
                DateTime dtIndianTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
                int day = dtIndianTime.Day, month = dtIndianTime.Month, year = dtIndianTime.Year;
                System.Timers.Timer aTimer = new System.Timers.Timer(60 * 60 * 1000 * 24);//24 hour;
                DataSet sampleds = new DataSet();              
                
                sampleds = getAccessDetails("today");

                int returncount = int.Parse(sampleds.Tables[0].Rows.Count.ToString());
                /////////////////////////////////////////////
                List<SqlParameter> delparm1 = new List<SqlParameter>();

                delparm1.Add(new SqlParameter("UpdateStatus", "3"));
                delparm1.Add(new SqlParameter("EmpId", EmpId));
                SqlParameter[] cmddelparm1 = delparm1.ToArray();

                var EmployeeAccesscode = ExecuteDatasetDefault("ImprtAccessDataNew", cmddelparm1);
                int EmpAccessCode = Convert.ToInt32(EmployeeAccesscode.Tables[0].Rows[0][0].ToString());
                if (sampleds != null && sampleds.Tables[0] != null && sampleds.Tables[0].Rows.Count > 0)
                {
                    DataTable AllAttendanceToday = sampleds.Tables[0];

                    DataTable tblFiltered = AllAttendanceToday.AsEnumerable()
                                            .Where(row => row.Field<int>("EmployeeId") == EmpAccessCode).CopyToDataTable();

                    //Delete selected employee rows from attendance
                    List<SqlParameter> delparm = new List<SqlParameter>();
                    delparm.Add(new SqlParameter("UpdateStatus", "4"));
                    delparm.Add(new SqlParameter("EmployeeId", EmpAccessCode.ToString()));
                    SqlParameter[] cmddelparm = delparm.ToArray();
                    var s = SQLHelper.ExecuteNonQuery("ImprtAccessDataNew", cmddelparm);

                    foreach (DataRow dr in tblFiltered.Rows)
                    {
                        List<SqlParameter> cmdParams = new List<SqlParameter>();
                        cmdParams.Add(new SqlParameter("UpdateStatus", "2"));
                        foreach (DataColumn c in tblFiltered.Columns)  //loop through the columns. 
                        {
                            cmdParams.Add(new SqlParameter(c.ColumnName, dr[c.ColumnName].ToString()));
                        }


                        SqlParameter[] cmdParamArray = cmdParams.ToArray();
                        //Insert Today attendance
                        SQLHelper.ExecuteNonQuery("ImprtAccessDataNew", cmdParamArray);
                        string employeeId = "";
                        employeeId = dr["EmployeeId"].ToString();
                        string attid = dr["AttendanceLogId"].ToString();
                        TimeSpan totdiff = TimeSpan.Parse("00:00:00");
                        //----------------Update actual hours---------------------
                        if (dr["Status"].ToString() != "Absent")
                        {
                            string punchrecords = dr["PunchRecords"].ToString().Remove(dr["PunchRecords"].ToString().Length - 1);
                            string[] Tms = punchrecords.Split(',');
                            string intime = "";
                            string outtime = "";
                            //DateTime a = new DateTime(2010, 05, 12, 13, 15, 00);

                            for (int i = 0; i < Tms.Length; i++)
                            {

                                if (Tms[i].Length == 13)
                                {
                                    outtime = Tms[i].Remove(Tms[i].Length - 5);

                                    if (intime != "")
                                    {
                                        DateTime dateOne = DateTime.ParseExact(intime, "H:mm:ss", null, System.Globalization.DateTimeStyles.None);
                                        DateTime datetwo = DateTime.ParseExact(outtime, "H:mm:ss", null, System.Globalization.DateTimeStyles.None);
                                        var diff = datetwo.Subtract(dateOne);
                                        TimeSpan difftime = TimeSpan.Parse(diff.ToString());
                                        totdiff = totdiff + difftime;
                                    }
                                    intime = "";
                                }
                                else
                                {
                                    intime = Tms[i].Remove(Tms[i].Length - 4);
                                    outtime = "";

                                }

                            }
                        }
                        //-----------------------------------------------------------------

                        List<SqlParameter> cmdParamsact = new List<SqlParameter>();

                        cmdParamsact.Add(new SqlParameter("EmployeeId", employeeId));
                        cmdParamsact.Add(new SqlParameter("attid", attid));

                        cmdParamsact.Add(new SqlParameter("ActualHours", totdiff.ToString()));


                        SqlParameter[] cmdParamArrayAct = cmdParamsact.ToArray();
                        SQLHelper.ExecuteNonQuery("UpdateActualHours", cmdParamArrayAct);
                        string ss = totdiff.ToString();
                        //string[] tokens = str.Split(',');

                    }

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public DataSet getAccessDetails(string status)
        {
            try
            {
                DataSet accdatadet = new DataSet();


                List<SqlParameter> AttDaily = new List<SqlParameter>();

                AttDaily.Add(new SqlParameter("Status", status));
                SqlParameter[] cmdAttDaily = AttDaily.ToArray();
                accdatadet = ExecuteDatasetAcc("InstaccessDailyAttendance", cmdAttDaily);

                return accdatadet;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public static DataSet ExecuteDatasetAcc(string commandText, params SqlParameter[] cmdParams)
        {
            try
            {
                SqlCommand techvSqlCommand = new SqlCommand();
                SqlConnection techvSqlConnection = new SqlConnection(GetSQLConection());
                PrepareCommand(techvSqlConnection, techvSqlCommand, commandText, cmdParams);
                DataSet techvDataSet;
                using (SqlDataAdapter da = new SqlDataAdapter(techvSqlCommand))
                {
                    techvDataSet = new DataSet();
                    da.Fill(techvDataSet);
                    techvSqlCommand.Parameters.Clear();
                }
                techvSqlConnection.Dispose();
                return techvDataSet;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static void PrepareCommand(SqlConnection techvSqlConnection, SqlCommand techvSqlCommand, string commandText, SqlParameter[] cmdParams)
        {
            techvSqlCommand.Connection = techvSqlConnection;
            techvSqlCommand.CommandText = commandText;

            techvSqlCommand.CommandType = CommandType.StoredProcedure;
            if (cmdParams != null)
            {
                foreach (SqlParameter p in cmdParams)
                {
                    if (p != null)
                    {
                        // Check for derived output value with no value assigned
                        if ((p.Direction == ParameterDirection.InputOutput || p.Direction == ParameterDirection.Input) && (p.Value == null))
                            p.Value = DBNull.Value;
                        techvSqlCommand.Parameters.Add(p);
                    }
                }
            }
        }
        public static string GetSQLConection()
        {
            string SmartServer = ConfigurationManager.AppSettings["SmartOfficedb"].ToString();
            string SmartUserId = ConfigurationManager.AppSettings["SmartUserId"].ToString();
            string SmartPassword = ConfigurationManager.AppSettings["SmartPassword"].ToString();
            string SmartDB = ConfigurationManager.AppSettings["SmartDB"].ToString();
            string Strconn = "";

            Strconn = "Data Source=" + SmartServer + ";Initial Catalog=" + SmartDB + ";User Id=" + SmartUserId + ";Password=" + SmartPassword + ";";

            return Strconn;
            //string Strconn = "";
            //Strconn = System.Configuration.ConfigurationManager.ConnectionStrings["SmartConnection"].ConnectionString;
            //return Strconn;
        }
        public static DataSet ExecuteDatasetDefault(string commandText, params SqlParameter[] cmdParams)
        {
            SqlCommand techvSqlCommand = new SqlCommand();
            SqlConnection techvSqlConnection = new SqlConnection(GetConnection());
            PrepareCommand(techvSqlConnection, techvSqlCommand, commandText, cmdParams);
            DataSet techvDataSet;
            using (SqlDataAdapter da = new SqlDataAdapter(techvSqlCommand))
            {
                techvDataSet = new DataSet();
                da.Fill(techvDataSet);
                techvSqlCommand.Parameters.Clear();
            }
            techvSqlConnection.Dispose();
            return techvDataSet;
        }
        public static string GetConnection()
        {
            string strCon = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
            return strCon;
        }
        //WFH or Out of office Attendance Update
        public void WeeklyJobForOutofOfficeAttendance(string fromParm, string FromDate, string ToParam, string ToDate)
        {
            try
            {
                TimeZoneInfo INDIAN_ZONE = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
                DateTime dtIndianTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
                int day = dtIndianTime.Day, month = dtIndianTime.Month, year = dtIndianTime.Year;
                System.Timers.Timer aTimer = new System.Timers.Timer(60 * 60 * 1000 * 24);//24 hour;
                DataSet RequestTables = new DataSet();
                //need to set execute once 
                
                for (int x = 0; x <= 1; x++)
                {
                    List<SqlParameter> updateParams = new List<SqlParameter>();
                    if (x == 0)
                    {
                        updateParams.Add(new SqlParameter("Status", "1"));
                        updateParams.Add(new SqlParameter(fromParm, FromDate));
                        updateParams.Add(new SqlParameter(ToParam, ToDate));
                        SqlParameter[] cmddelparm1 = updateParams.ToArray();
                        RequestTables = ExecuteDatasetDefault("JobsforAttendanceUpdate_OutofOffice", cmddelparm1);
                    }
                    if (x == 1)
                    {

                        updateParams.Add(new SqlParameter("Status", "3"));
                        updateParams.Add(new SqlParameter(fromParm, FromDate));
                        updateParams.Add(new SqlParameter(ToParam, ToDate));
                        SqlParameter[] cmddelparm2 = updateParams.ToArray();
                        RequestTables = ExecuteDatasetDefault("JobsforAttendanceUpdate_OutofOffice", cmddelparm2);
                    }

                    if (RequestTables != null && RequestTables.Tables[0] != null && RequestTables.Tables[0].Rows.Count > 0)
                    {

                        //var s = SQLHelper.ExecuteNonQuery("ImprtAccessDataNew", cmddelparm);

                        foreach (DataRow dr in RequestTables.Tables[0].Rows)
                        {
                            List<SqlParameter> cmdParams = new List<SqlParameter>();
                            if (x == 0)
                            {
                                cmdParams.Add(new SqlParameter("Status", "2"));
                            }
                            if (x == 1)
                            {
                                cmdParams.Add(new SqlParameter("Status", "4"));
                            }

                            foreach (DataColumn c in RequestTables.Tables[0].Columns)  //loop through the columns. 
                            {

                                if (c.ColumnName == "AbsentStatus")
                                {
                                    cmdParams.Add(new SqlParameter(c.ColumnName, dr[c.ColumnName].ToString()));
                                }
                                else if (c.ColumnName == "AttendanceDate")
                                {
                                    cmdParams.Add(new SqlParameter(c.ColumnName, dr[c.ColumnName].ToString()));
                                }
                                else if (c.ColumnName == "Employee_Access_Id")
                                {
                                    cmdParams.Add(new SqlParameter(c.ColumnName, dr[c.ColumnName].ToString()));
                                }
                                else
                                {

                                }
                            }


                            SqlParameter[] cmdParamArray = cmdParams.ToArray();
                            //Insert Today attendance
                            SQLHelper.ExecuteNonQuery("JobsforAttendanceUpdate_OutofOffice", cmdParamArray);

                            //string[] tokens = str.Split(',');

                        }

                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}