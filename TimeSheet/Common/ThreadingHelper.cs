using System;
using System.Threading;

namespace TimeSheet
{
    public class ThreadingHelper
    {
        public ThreadingHelper()
        {
        }

        ~ThreadingHelper()
        {
        }

        private static void StartBackgroundThread(ThreadStart threadStart)
        {
            if (threadStart != null)
            {
                Thread trd = new Thread(threadStart);
                trd.IsBackground = true;
                trd.Start();
            }
        }

        public static void RunMethodInSeparateThread(Action action)
        {
            var thread = new Thread(new ThreadStart(action));
            thread.Start();
        }
    }
}