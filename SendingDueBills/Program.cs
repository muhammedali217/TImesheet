using SendingDueBills.Mechanism;

namespace SendingDueBills
{
   class Program
    {
        static void Main(string[] args)
        {
            JobManager jobManager = new JobManager();
            jobManager.ExecuteAllJobs();
        }
    }
}

