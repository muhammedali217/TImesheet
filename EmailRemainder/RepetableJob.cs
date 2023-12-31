﻿using System;
using EmailRemainder.Common;


namespace EmailRemainder
{
    class RepeatableJob:Job
    {
        /// <summary>
        /// Counter used to count the number of times this job has been
        /// executed.
        /// </summary>
        

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
            //Console.WriteLine("DoJob");
            int day = (int)System.DateTime.Now.DayOfWeek;
            Console.WriteLine("Remainder Email To Employee");
           // Console.WriteLine(DateTime.Now.ToString("HH:mm:"));
            string time=DateTime.Now.ToString("HH:mm:ss");

            Console.WriteLine(time);
            MailController oMailController = new MailController();

           if (day==5 && time == "07:00:00")
            {

            oMailController.SendRemainderEmailToAllEmployee();
            }
            //int a = SQLHelper.ExecuteNonQuery("LeaveHistory_UpdateQuarterly");
            //if (a > 0)
            //{
            //    Console.WriteLine("New Job Number " + nCounter);
            //}
            //else
            //    Console.WriteLine("New Job Number " + nCounter + "\n No pending data");
            //nCounter++;
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
