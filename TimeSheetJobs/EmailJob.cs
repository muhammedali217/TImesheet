using System;
using TimeSheetJobs.Common;

namespace TimeSheetJobs
{
    class EmailJob : Job
    {
        /// <summary>
        /// Counter used to count the number of times this job has been
        /// executed.
        /// </summary>
        /// <summary>
        /// Get the Job Name, which reflects the class name.
        /// </summary>
        /// <returns>The class Name.</returns>
        DateTime CurrentTime = new DateTime();
        public override string GetName()
        {
            return this.GetType().Name;
        }

        /// <summary>
        /// Execute the Job itself. Just print a message.
        /// </summary>
        public override void DoJob()
        {
            //Console.WriteLine("DoJob");
            int day = (int)System.DateTime.Now.DayOfWeek;
            //Console.WriteLine("-----------------------------");
            //Console.WriteLine("Remainder Email To Employee");
            //Console.WriteLine("-----------------------------");
            // Console.WriteLine(DateTime.Now.ToString("HH:mm:"));
            string time = DateTime.Now.ToString("HH:mm:ss");
            DateTime TimeNow = DateTime.Now;            

            //Console.WriteLine(time);
            MailController oMailController = new MailController();
            //Console.WriteLine(day);
            PipeClient.WriteLine("Day: " + day.ToString());
            PipeClient.WriteLine("Time: "+ time.ToString());
            //oMailController.SendRemainderEmailToAllEmployee();
            //if (day == 5 && time == "16:23:00")
            //if (day == 5 && time == "06:02:00")
                if (day == 5 && time == "04:02:00")
                {
                oMailController.SendRemainderEmailToAllEmployee();
                PipeClient.WriteLine("Email Send To All Employees");
            }
            else
            {
                PipeClient.WriteLine("Email not yet Send");
            }
            //if (time == "12:00:00")
            //{
            //    oMailController.SendBirthDayEmailToAllEmployee();
            //    PipeClient.WriteLine("Birth Day Email Send To Employees");
            //}
            if (time == "17:15:00")
            {
                oMailController.UpdateTodayAttendance();
                PipeClient.WriteLine("Attendance Updated");
                CurrentTime = DateTime.Now;
            }
            else if(CurrentTime.AddMinutes(2)>=TimeNow)
            {
                oMailController.UpdateTodayAttendance();
                PipeClient.WriteLine("Email Send To All Employees");
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
