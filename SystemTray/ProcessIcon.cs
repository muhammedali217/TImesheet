using System;
using System.Drawing;
using System.Reflection;
using System.Windows.Forms;


namespace SystemTray
{
    internal class ProcessIcon : IDisposable
    {
        public NotifyIcon ServiceNotifyIcon;

        public ProcessIcon()
        {
            this.ServiceNotifyIcon = new NotifyIcon();
        }
 
        public void Display()
        {
            this.ServiceNotifyIcon.MouseClick += new MouseEventHandler(this.ni_MouseClick);
            //this.ServiceNotifyIcon.BalloonTipClicked += new EventHandler(this.Ni_BalloonTipClicked);
            this.ServiceNotifyIcon.Icon = Resources.Resources.staging;
            this.ServiceNotifyIcon.Text = XmlConec.getAppSettings_("Environment");
            this.ServiceNotifyIcon.Visible = true;
            this.ServiceNotifyIcon.Icon = new Icon(Resources.Resources.staging, SystemInformation.IconSize);
            this.ServiceNotifyIcon.ContextMenuStrip = new ContextMenus().Create();
        }

        public void Dispose()
        {
            this.ServiceNotifyIcon.Dispose();
        }

        private void ni_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button != MouseButtons.Left)
                return;
            typeof(NotifyIcon).GetMethod("ShowContextMenu", BindingFlags.Instance | BindingFlags.NonPublic)
                .Invoke((object) this.ServiceNotifyIcon, (object[]) null);
        }

        //Maybe later
        //private void Ni_BalloonTipClicked(object sender, EventArgs e)
        //{
        //}
    }
}
