//using System;
//using System.Collections.Generic;


//namespace TimeSheetJobs
//{
//    class LeaveUpdateJob : Job
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
//            string time = DateTime.Now.ToString("HH:mm:ss");
//            DateTime Today = DateTime.UtcNow.Date;
//            string TodayDay=Today.ToString("dd");
//            if (TodayDay=="1" &&time == "01:00:00")
//            {
//                Console.WriteLine("Updated Leave");
//                SQLHelper.ExecuteNonQuery("LeaveHistory_Monthly");
//            }
//            else
//                Console.WriteLine("Not yet leave updated");          
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
