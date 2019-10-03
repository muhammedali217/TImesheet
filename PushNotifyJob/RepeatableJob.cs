using System;
using System.Data;
using System.Net;


namespace PushNotifyJob
{
    public class RepeatableJob : Job
    {
        /// <summary>
        /// Counter used to count the number of times this job has been
        /// executed.
        /// </summary>
        private int nCounter = 0;

        /// <summary>
        /// Get the Job Name, which reflects the class name.
        /// </summary>
        /// <returns>The class Name.</returns>
        public override string GetName()
        {
            return this.GetType().Name;
        }

        /// <summary>
        /// Execute the Job itself. Just print a message.
        /// </summary>
      

        public override void DoJobFetchLocalData()
        {
            //Console.WriteLine("DoJobFetchLocalData");
            //DataTable dtValues = DBHelper.ExecuteDataset("FetchPunchTimeTableDataSet").Tables[0];
            //if (dtValues.Rows.Count > 0)
            //{
            //    System.Console.Clear();
            //    Console.WriteLine("New Job Number " + nCounter);
            //}
            //else
            //    Console.WriteLine("New Job Number " + nCounter + "\n No pending data");

            //foreach (DataRow row in dtValues.Rows)
            //{

            //    Console.WriteLine("PunchTimeDetailsId " + Convert.ToString(row["PunchTimeDetailsId"]) + " tktno " + Convert.ToString(row["tktno"]));
            //    Console.WriteLine("\n\n\n");
            //    string PunchTimeDetailsId = Convert.ToString(row["PunchTimeDetailsId"]);
            //    string tktno = Convert.ToString(row["tktno"]);
            //    string hhmm = Convert.ToString(row["hhmm"]);
            //    string tmmm = Convert.ToString(row["tmmm"]);
            //    string hh_mm = Convert.ToString(row["hh_mm"]);
            //    string flag = Convert.ToString(row["flag"]);
            //    string date = Convert.ToString(row["date"]);
            //    string sno = Convert.ToString(row["sno"]);
            //    string INOUT = Convert.ToString(row["INOUT"]);
            //    string strBaseUrl = XmlConec.getAppSettings_("ApiUrl");
            //    string strURI = string.Format(strBaseUrl + "api/PunchDetails/AddPunchDetails?PunchTimeDetailsId=" + PunchTimeDetailsId + "&tktno=" + tktno + "&hhmm=" + hhmm + "&tmmm=" + tmmm + "&hh_mm=" + hh_mm + "&flag=" + flag + "&date=" + date + "&sno=" + sno + "&INOUT=" + INOUT);
            //    var varJson = new WebClient().DownloadString(strURI);
            //    string strJson = varJson;
            //}

            //nCounter++;
            Console.WriteLine("AttendanceLog_New");
            DataTable dtValues = DBHelper.ExecuteDataset("AttendanceLog_New").Tables[0];
            if (dtValues.Rows.Count > 0)
            {
                System.Console.Clear();
                Console.WriteLine("New Job Number " + nCounter);
            }
            else
                Console.WriteLine("New Job Number " + nCounter + "\n No pending data");

            foreach (DataRow row in dtValues.Rows)
            {

                Console.WriteLine("AttendanceLogId " + Convert.ToString(row["AttendanceLogId"]) + " AttendanceDate " + Convert.ToString(row["AttendanceDate"]));
                Console.WriteLine("\n\n\n");
                string AttendanceLogId = Convert.ToString(row["AttendanceLogId"]);
                string AttendanceDate = Convert.ToString(row["AttendanceDate"]);
                string PunchRecords = Convert.ToString(row["PunchRecords"]);
                string WorkDuration = Convert.ToString(row["WorkDuration"]);
                string InTime = Convert.ToString(row["InTime"]);
                string OutTime = Convert.ToString(row["OutTime"]);
                string NormalDuration = Convert.ToString(row["NormalDuration"]);
                string EmployeeId = Convert.ToString(row["EmployeeId"]);
                //string date = Convert.ToString(row["date"]);
                //string sno = Convert.ToString(row["sno"]);
                //string INOUT = Convert.ToString(row["INOUT"]);
                string strBaseUrl = XmlConec.getAppSettings_("ApiUrl");
                string strURI = string.Format(strBaseUrl + "api/PunchDetails/AddPunchDetails?AttendanceLog_Id=" + AttendanceLogId + "&AttendanceLog_Date=" + AttendanceDate + "&AttendanceLog_PunchRecords=" + PunchRecords + "&AttendanceLog_WorkDuration=" + WorkDuration + "&AttendanceLog_InTime=" + InTime + "&AttendanceLog_OutTime=" + OutTime + "&AttendanceLog_NormalDuration=" + NormalDuration + "&Employee_Id=" + EmployeeId);
                var varJson = new WebClient().DownloadString(strURI);
                string strJson = varJson;
            }
            nCounter++;
        }

        public override bool IsRepeatable()
        {
            return true;
        }

        /// <summary>
        /// Determines that this job is to be executed again after
        /// 1 sec.
        /// </summary>
        /// <returns>1 sec, which is the interval this job is to be
        /// executed repeatadly.</returns>
        public override int GetRepetitionIntervalTime()
        {
            return Int32.Parse(XmlConec.getAppSettings_("MsgInterval"));
        }
    }  
}
