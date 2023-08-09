using System;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Data;

namespace TimeSheetJobs
{
    public class SmsMailHelper
    {
        private static string strReceiversAddress = null;
        private static string strGlobalSubject = "", strGlobalText = "";

        private static void SendEMailWithAttachment()
        {
            System.Net.Mail.SmtpClient oSmtpClient;
            try
            {
                DataTableSuccess oDataTableWStatus = new DataTableSuccess();

                TimeSheetRepository oTimeSheetRepository = new TimeSheetRepository();

                DataTable dtWorkedHours = oTimeSheetRepository.DownloadTimeSheet();

                DirectExcel excel = new DirectExcel("TimeSheet Report");
                System.IO.MemoryStream ms = excel.ExportToStream(dtWorkedHours);
                Attachment attachFile = new Attachment(ms, "TimeSheet.xls", "application/vnd.ms-excel");
                String strSenderAddress = string.Empty;
                MailMessage oMailMessage = new MailMessage();
                //strSenderAddress = "techvantagetechies@gmail.com";
                string strSenderPassword = XmlConec.getAppSettings_("SenderMailPwd");
                strSenderAddress = XmlConec.getAppSettings_("SenderMail");
                //Pass the Values 
                oMailMessage.From = new MailAddress(strSenderAddress, "Techvantage Timesheet", System.Text.Encoding.UTF8);
                oMailMessage.To.Add(strReceiversAddress.ToString());
                oMailMessage.Subject = strGlobalSubject;
                oMailMessage.Body = strGlobalText;
                //add our attachment      

                oMailMessage.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;
                oMailMessage.Attachments.Add(attachFile);
                oSmtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com", 25);
                oSmtpClient.UseDefaultCredentials = false;
                oSmtpClient.Credentials = new NetworkCredential(strSenderAddress, strSenderPassword);
                oSmtpClient.EnableSsl = true;
                oMailMessage.IsBodyHtml = true;

                oSmtpClient.Send(oMailMessage);

            }
            catch (SmtpFailedRecipientsException ex)
            {
                throw ex;

            }
        }


        public static void SendReportToAdmin()
        {

           // strReceiversAddress = "<monisha@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>";
            strReceiversAddress = "<testtechvantage098@gmail.com>";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:8px solid #e5e5e5;padding:15px;border-left:4px solid #26a69a; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Hi Sir/Madam, <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Please find the attached Timesheet report for this week. <br/><br/>");
            oStringBuilder.Append("</span>");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Techvantage Timesheet");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("</div>");


            strGlobalSubject = "Weekly Timesheet Report";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMailWithAttachment();
            }
        }

    }
}