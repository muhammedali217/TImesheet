using JobForQuarterlyUpdateLeave.Mechanism;
namespace JobForQuarterlyUpdateLeave
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
