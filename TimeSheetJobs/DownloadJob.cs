//using System;
//using TimeSheetJobs.Common;

//namespace TimeSheetJobs
//{
//    class DownloadJob : Job
//    {
//        /// <summary>
//        /// Get the Job Name, which reflects the class name.
//        /// </summary>
//        /// <returns>The class Name.</returns>
//        public override string GetName()
//        {
//            return this.GetType().Name;
//        }

//        /// <summary>
//        /// Execute the Job itself. Just print a message.
//        /// </summary>


//        public override void DoJob()
//        {
//            int day = (int)System.DateTime.Now.DayOfWeek;            

//            string time = DateTime.Now.ToString("HH:mm:ss");
//            //Console.WriteLine(time);
//            //Console.WriteLine("Not yet downloaded");

//            if (day == 5 && time == "09:00:00")
//            {

//                PipeClient.WriteLine("Downloaded");
//                SmsMailHelper.SendReportToAdmin();
//            }
//            else
//            {
//                PipeClient.WriteLine("Not yet timesheet Downloaded");
//            }
//        }
//        public override bool IsRepeatable()
//        {
//            return true;
//        }

//        /// <summary>
//        /// Determines that this job is to be executed again after
//        /// 1 sec.
//        /// </summary>
//        /// <returns>1 sec, which is the interval this job is to be
//        /// executed repeatadly.</returns>
//        public override int GetRepetitionIntervalTime()
//        {
//            return Int32.Parse(XmlConec.getAppSettings_("MsgInterval"));
//        }
//    }


//}
