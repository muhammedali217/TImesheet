
using TimeSheetDownloading.Mechanism;

namespace TimeSheetDownloading
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

