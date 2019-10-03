using System;
using System.Diagnostics;
using System.Windows.Forms;

namespace InsuReturnWinServicesUI
{
    public partial class ShowPipeMsg : Form
    {
        public delegate void NewMessageDelegate(string NewMessage);
        private PipeServer _pipeServer;
        private int i;   
        public ShowPipeMsg()
        {
            InitializeComponent();
            _pipeServer = new PipeServer();
            _pipeServer.PipeMessage += new DelegateMessage(PipesMessageHandler);
            string strPipes = XmlConec.getAppSettings_("Environment") + "_pipes";
            _pipeServer.Listen(strPipes);
            dtgJobStatus.Columns.Add("No", "No");
            dtgJobStatus.Columns.Add("Item", "Item");
            dtgJobStatus.Columns[0].Width = 50;
            dtgJobStatus.Columns[1].Width = 480;
            i = 0;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void PipesMessageHandler(string message)
        {
            try
            {
                if (this.InvokeRequired)
                    this.Invoke(new NewMessageDelegate(PipesMessageHandler), message);
                else
                {
                    string[] row1 = new string[2];
                    row1[0] = i.ToString();
                    row1[1] = message;
                    dtgJobStatus.Rows.Add(row1);
                    i = i + 1;

                    if (dtgJobStatus.Rows.Count > 500)
                        dtgJobStatus.Rows.RemoveAt(0);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            _pipeServer.PipeMessage -= new DelegateMessage(PipesMessageHandler);
            _pipeServer = null;
        }
    }
}
