//using System;


//namespace TimeSheetJobs
//{
//    class SendDueBillsJob : Job
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
//            //Console.WriteLine("Remainder Email To Employee");
//            //Console.WriteLine(DateTime.Now.ToString("HH:mm:"));
//            string time = DateTime.Now.ToString("HH:mm:ss");
           
//            SendingDueRepository oSendingDueRepository = new SendingDueRepository();
//            string result = oSendingDueRepository.DownloadDueBillsResult().Rows[0][0].ToString();
            
//            if (result == "SUCCESS")
//            {
//                if (day == 1 && time == "01:00:00")
//                {

//                    Console.WriteLine("Bills Sent");
//                    BillsSmsMailHelper.SendBillReportToAdmin();
//                }
//                else
//                {
//                    Console.WriteLine("Bills Not yet send");
//                }
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
