
using System;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Data;
using System.Configuration;

namespace EmailRemainder.Common
{
    public class MailHelper
    {
        private static string strReceiversAddress = null;
        private static string strGlobalSubject = "", strGlobalText = "";
        
        


        private static void SendEMail()
        {
            System.Net.Mail.SmtpClient oSmtpClient;
            try
            {
                string strEmailId = "", strPassword = "";
                strEmailId = ConfigurationSettings.AppSettings["EmailId"].ToString();
                strPassword = ConfigurationSettings.AppSettings["Password"].ToString();
                String strSenderAddress = string.Empty;
                MailMessage oMailMessage = new MailMessage();
                strSenderAddress = "techvantageanalytics@gmail.com";
                //Pass the Values 
                oMailMessage.From = new MailAddress(strSenderAddress, "Techvantage Timesheet", System.Text.Encoding.UTF8);
                oMailMessage.To.Add(strReceiversAddress.ToString());
                oMailMessage.Subject = strGlobalSubject;
                oMailMessage.Body = strGlobalText;
                //add our attachment      

                oMailMessage.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;
                //Attachment imgAtt = new Attachment(System.Web.Hosting.HostingEnvironment.MapPath("~/images/logo_eat.jpg"));
                //oMailMessage.Attachments.Add(imgAtt);


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

        public static void TimesheetRemainderEmail(string Email)
        {

            strReceiversAddress = Email;
            StringBuilder oStringBuilder = new StringBuilder();





            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:14px;border-left:4px solid #26a69a; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Dear Team Techvantage , <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("This is a gentle reminder to inform you all, that please do not forget to enter your weekly timesheet.<br/>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Note: Our timesheet application's timesheet page will automatically close at 5 PM. So kindly submit timesheet before that.<br/>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<a href='http://www.fixzitest.in' style='font-color:'#26a69a;font-size: 16px;font-weight:700px;'>TimeSheet Login</a>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");




            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Techvantage Systems.");
            oStringBuilder.Append("</span>");




            strGlobalSubject = "Reminder - Enter Weekly Timesheet";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }

        }

    }
}