using System;
using System.ServiceProcess;
using TimeSheetJobs;

namespace TimeSheetWinJobs
{
    public partial class TimeSheetJobs : ServiceBase
    {
        public TimeSheetJobs()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            JobManager jobManager = new JobManager();
            jobManager.ExecuteAllJobs();
        }

        protected override void OnStop()
        {
            try
            {
                throw new Exception("Clear token window service stopped");
            }
            catch (Exception exMe)
            {
                //log4net.Config.XmlConfigurator.Configure();
                //var logger = LogManager.GetLogger(typeof(InsuReturnJobs));
                //logger.Error(exMe.Message, exMe);
            }
        }
    }
}
