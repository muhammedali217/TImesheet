using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace TimeSheetJobs
{
    class MailController
    {
        public string SendRemainderEmailToAllEmployee()
        {
            try
            {                
                MailRepository oMailRepository = new MailRepository();
                string dtEmployeeEmails = oMailRepository.GetAllEmployeesEmailId();
                MailHelper.TimesheetRemainderEmail(dtEmployeeEmails);
                //MailHelper.TimesheetRemainderEmail("unni@techvantagesystems.com");
                return "send";
            }
            catch(Exception ex)
            {               
                return "Error";
            }
        }

        public string SendBirthDayEmailToAllEmployee()
        {
            try
            {
                MailRepository oMailRepository = new MailRepository();
                DataSet dtEmployeeEmails = oMailRepository.GetBirthDayEmployeesEmailId();
                string Empname, mailid;
                //string dtEmployeemailEmails = oMailRepository.GetAllEmployeesEmailId();
                if (dtEmployeeEmails.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; i < dtEmployeeEmails.Tables[0].Rows.Count; i++)
                    {
                        MailHelper.BirthdaywishesEmail(dtEmployeeEmails.Tables[0].Rows[i]["Employee_OfficialMailId"].ToString(), dtEmployeeEmails.Tables[0].Rows[i]["EmpName"].ToString(), "");
                    }
                }
                //MailHelper.TimesheetRemainderEmail("unni@techvantagesystems.com");
                return "send";
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string UpdateTodayAttendance()
        {
            try
            {
                MailRepository oMailRepository = new MailRepository();
                DataSet sampleds = oMailRepository.GetTodayAttendance("today");
                List<SqlParameter> delparm = new List<SqlParameter>();
                delparm.Add(new SqlParameter("UpdateStatus", "4"));               
                SqlParameter[] cmddelparm = delparm.ToArray();
                SQLHelper.ExecuteNonQuery("ImprtAccessDataNew", cmddelparm);

                if (sampleds != null && sampleds.Tables[0] != null && sampleds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in sampleds.Tables[0].Rows)
                    //for(int i=0;i< sampleds.Tables[0].Rows.Count;i++)
                    {
                        List<SqlParameter> cmdParams = new List<SqlParameter>();                        
                        cmdParams.Add(new SqlParameter("UpdateStatus", "2"));

                        foreach (DataColumn c in dr.Table.Columns)  //loop through the columns. 
                        {
                            cmdParams.Add(new SqlParameter(c.ColumnName, dr[c.ColumnName].ToString()));
                        }


                        SqlParameter[] cmdParamArray = cmdParams.ToArray();

                        SQLHelper.ExecuteNonQuery("ImprtAccessDataNew", cmdParamArray);
                        string employeeId = "";
                        employeeId = dr["EmployeeId"].ToString();
                        string attid = dr["AttendanceLogId"].ToString();
                        TimeSpan totdiff = TimeSpan.Parse("00:00:00");
                        //----------------------------------------------------------------------
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

                return "Update Attendance";
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }

    }
}
