using System;
using System.Windows.Forms;

namespace SystemTray
{
    static class Program
    {
        public static ProcessIcon _ProcessIcon = (ProcessIcon)null;
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            using (Program._ProcessIcon = new ProcessIcon())
            {
                Program._ProcessIcon.Display();
                Application.Run();
            }
        }
    }
}
