using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Net;
using TimeSheetDownloading.Mechanism;

namespace TimeSheetDownloading
{
    class RepeatableJob:Job
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


        public override void DoJob()
        {
              int day = (int)System.DateTime.Now.DayOfWeek;
            //Console.WriteLine("Remainder Email To Employee");
           Console.WriteLine(DateTime.Now.ToString("HH:mm:"));
            string time=DateTime.Now.ToString("HH:mm:ss");
            Console.WriteLine(time);
            Console.WriteLine("Not yet downloaded");


            if (day == 5 && time == "12:00:00")
            {

                Console.WriteLine("Downloaded");
                SmsMailHelper.SendReportToAdmin();
            }
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
