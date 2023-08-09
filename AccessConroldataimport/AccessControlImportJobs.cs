using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccessConroldataimport.Common;


namespace AccessConroldataimport
{
    class AccessControlImportJobs: Job
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


            int day = (int)System.DateTime.Now.DayOfWeek;

            string time = DateTime.Now.ToString("HH:mm:ss");
            PipeClient.WriteLine("Day: " + day.ToString());
            PipeClient.WriteLine("Time: " + time.ToString());


            //if (time == "04:00:00")
            //{
            try
            {
                AccessDataController oAccessDataController = new AccessDataController();
                if (oAccessDataController.Importalldata().ToString ()== "Success")
                {
                    PipeClient.WriteLine("Data Imported Successfully");
                    Environment.Exit(0);
                }
                

            }
            catch (Exception ex)
            {
                PipeClient.WriteLine( ex.Message);
            }
            //AccessDataController oAccessDataController = new AccessDataController();
            //    oAccessDataController.Importalldata();
            //    PipeClient.WriteLine("Data Imported");
            //}
            //else
            //{
            //    PipeClient.WriteLine("Email not yet Send");
            //}


            

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
