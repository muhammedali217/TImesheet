using System;
using System.ServiceProcess;
using System.Threading;
using System.Windows.Forms;

namespace SystemTray
{
    internal class ContextMenus
    {
        private bool bAboutLoaded;
        private bool bShowPipeLoaded;

        public ContextMenus()
        {
            this.bAboutLoaded = false;
            bShowPipeLoaded = false;
        }

        public ContextMenuStrip Create()
        {
            ContextMenuStrip contextMenuStrip = new ContextMenuStrip();
            ToolStripMenuItem toolStripMenuItem1 = new ToolStripMenuItem();
            toolStripMenuItem1.Text = XmlConec.getAppSettings_("Environment") + " Status";
            toolStripMenuItem1.Click += this.ShowPipe_Click;
            contextMenuStrip.Items.Add(toolStripMenuItem1);
            ToolStripMenuItem toolStripMenuItem5 = new ToolStripMenuItem();
            toolStripMenuItem5.Text = "About";
            toolStripMenuItem5.Click += this.About_Click;
            contextMenuStrip.Items.Add(toolStripMenuItem5);
            contextMenuStrip.Items.Add(new ToolStripSeparator());
            ToolStripMenuItem toolStripMenuItem6 = new ToolStripMenuItem();
            toolStripMenuItem6.Text = "Stop Service";
            toolStripMenuItem6.Click += this.Exit_Click;
            contextMenuStrip.Items.Add(toolStripMenuItem6);
            return contextMenuStrip;
        }
        
        private void ShowPipe_Click(object sender, EventArgs e)
        {
            //If form is already open, return
            if (this.bShowPipeLoaded)
                return;
            this.bShowPipeLoaded = true;
            //new ShowPipeMsg().ShowDialog();
            //new Thread(() => new ShowPipeMsg().ShowDialog()).Start();
            System.Diagnostics.Process.Start("TimeSheetWinJobsUI.exe");
            this.bShowPipeLoaded = false;
        }

        private void About_Click(object sender, EventArgs e)
        {
            //If form is already open, return
            if (this.bAboutLoaded)
                return;
            this.bAboutLoaded = true;
            new AboutBox().ShowDialog();
            this.bAboutLoaded = false;
        }

        private void Exit_Click(object sender, EventArgs e)
        {
            //ServiceController service = new ServiceController("MyServiceName");
            //service.Stop();
            Application.Exit();
        }
    }
}
