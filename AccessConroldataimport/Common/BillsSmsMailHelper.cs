using System;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Data;

namespace AccessConroldataimport
{
    public class BillsSmsMailHelper
    {
        private static string strReceiversAddress = null;
        private static string strGlobalSubject = "", strGlobalText = "";
        
        private static void SendEMailWithAttachment()
        {
            System.Net.Mail.SmtpClient oSmtpClient;
            try
            {                 
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();
                SendingDueRepository oSendingDueRepository = new SendingDueRepository();

                DataTable dtWorkedHours = oSendingDueRepository.DownloadDueBills();
                DirectExcel excel = new DirectExcel("Bill Due Dates This Week");
                System.IO.MemoryStream ms = excel.ExportToStream(dtWorkedHours);
                Attachment attachFile = new Attachment(ms, "Due Bills For this Week.xls", "application/vnd.ms-excel");
                String strSenderAddress = string.Empty;
                MailMessage oMailMessage = new MailMessage();
                strSenderAddress = "techvantageanalytics@gmail.com";
                //Pass the Values 
                oMailMessage.From = new MailAddress(strSenderAddress, "Techvantage Timesheet", System.Text.Encoding.UTF8);
                oMailMessage.To.Add(strReceiversAddress.ToString());
                oMailMessage.Bcc.Add("<testtechvantage098@gmail.com>");
                oMailMessage.Subject = strGlobalSubject;
                oMailMessage.Body = strGlobalText;
                //add our attachment      

                oMailMessage.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;
                oMailMessage.Attachments.Add(attachFile);
                oSmtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com", 25);
                oSmtpClient.UseDefaultCredentials = false;
                oSmtpClient.Credentials = new NetworkCredential("techvantageanalytics@gmail.com", "LemonGrass@098");
                oSmtpClient.EnableSsl = true;
                oMailMessage.IsBodyHtml = true;

                oSmtpClient.Send(oMailMessage);

            }
            catch (SmtpFailedRecipientsException ex)
            {
                throw ex;

            }
        }


        public static void SendBillReportToAdmin()
        {

          
            //strReceiversAddress = "<melwyn@techvantagesystems.com>,<melwyn12me@gmail.com>";
            strReceiversAddress = "<info@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:8px solid #e5e5e5;padding:15px;border-left:4px solid #26a69a; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Hi Sir/Madam, <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Please find the attached due and overdue bills to be paid. <br/><br/>");
            oStringBuilder.Append("</span>");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Techvantage Timesheet");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("</div>");


            strGlobalSubject = "Due Bills details";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMailWithAttachment();
            }
        }

    }
}


