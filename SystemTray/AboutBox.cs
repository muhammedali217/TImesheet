using System;
using System.Windows.Forms;
using System.Xml;


namespace SystemTray
{
    public partial class AboutBox : Form
    {
        public AboutBox()
        {
            InitializeComponent();
            dtgXMLValues.Columns.Add("Key", "Key");
            dtgXMLValues.Columns.Add("Value", "Value");
            dtgXMLValues.Columns[0].Width = 150;
            dtgXMLValues.Columns[1].Width = 573;
        }

        private void AboutBox_Load(object sender, EventArgs e)
        {
            try
            {
                XmlDocument XmlDoc = new XmlDocument();
                XmlDoc.Load(AppDomain.CurrentDomain.BaseDirectory + "App.xml");
                foreach (XmlElement xElement in XmlDoc.DocumentElement)
                {
                    if (xElement.Name == "appSettings")
                    {
                        foreach (XmlNode xNode in xElement.ChildNodes)
                        {
                            string[] row1 = new string[2];
                            row1[0] = xNode.Attributes[0].Value;
                            row1[1] = xNode.Attributes[1].Value;
                            dtgXMLValues.Rows.Add(row1);
                        }
                    }
                }

                XmlDoc.Load(AppDomain.CurrentDomain.BaseDirectory + "TimeSheetWinJobs.exe.config");
                foreach (XmlElement xElement in XmlDoc.DocumentElement)
                {
                    if (xElement.Name == "log4net")
                    {
                        foreach (XmlNode xNode in xElement.ChildNodes[2])
                        {
                            string strWebhookUrl = "", strChannel = "";
                            if (xNode.Name == "WebhookUrl")
                            {
                                string[] row1 = new string[2];
                                row1[0] = xNode.Name;
                                row1[1] = xNode.Attributes[0].Value;
                                dtgXMLValues.Rows.Add(row1);
                            }
                            else if (xNode.Name == "Channel")
                            {
                                {
                                    string[] row1 = new string[2];
                                    row1[0] = xNode.Name;
                                    row1[1] = xNode.Attributes[0].Value;
                                    dtgXMLValues.Rows.Add(row1);
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception exMe)
            {
                MessageBox.Show(exMe.Message);
            }
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            try
            {
                for (int i = 0; i < dtgXMLValues.Rows.Count - 1; i++)
                {
                    string strKeyValue = dtgXMLValues.Rows[i].Cells["Key"].Value.ToString();
                    if (strKeyValue != "WebhookUrl" && strKeyValue != "Channel")
                        XmlConec.UpdateAppSettings_(strKeyValue, dtgXMLValues.Rows[i].Cells["Value"].Value.ToString());
                    //else
                    //{
                    //    MessageBox.Show(strKeyValue);
                    //}
                }
                MessageBox.Show("App.xml values are updated. Exe.config is not updated (WebhookUrl, Channel).");
            }
            catch (Exception exMe)
            {
                MessageBox.Show(exMe.Message);
            }
        }
    }
}
