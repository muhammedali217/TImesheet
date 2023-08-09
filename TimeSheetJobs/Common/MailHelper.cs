
using System;
using System.Net.Mail;
using System.Text;
using MimeKit;
using MailKit.Net.Smtp;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
using MailKit.Security;


namespace TimeSheetJobs
{
    public class MailHelper
    {
        private static string strBccAddress = null;
        private static string strCCAddress = null;
        private static string strGlobalSubject = "", strGlobalText = "";

        private static void SendEMail()
        {
            System.Net.Mail.SmtpClient oSmtpClient;
            try
            {

                MimeMessage emailMessage = new MimeMessage();
                MailboxAddress emailFrom = new MailboxAddress("Time-Sheet","Time-sheet@techvantagesystems.com");
                emailMessage.From.Add(emailFrom);

                InternetAddressList tolist = new InternetAddressList();
                string[] TCId = strBccAddress.Split(',');
                foreach (string TCEmail in TCId)
                {
                    tolist.Add(new MailboxAddress(TCEmail));
                }

                MailboxAddress emailTo = new MailboxAddress(strBccAddress.ToString());
                InternetAddressList Bcclist = new InternetAddressList();
                string[] CCId = strCCAddress.Split(',');
                foreach (string CCEmail in CCId)
                {
                    Bcclist.Add(new MailboxAddress(CCEmail));
                }

               // MailboxAddress emailBcc = new MailboxAddress(strCCAddress.ToString());
                emailMessage.To.AddRange(tolist);
                emailMessage.Bcc.AddRange(Bcclist); 
                emailMessage.Subject = strGlobalSubject;
                BodyBuilder emailBodyBuilder = new BodyBuilder();
                emailBodyBuilder.HtmlBody = strGlobalText;
                emailMessage.Body = emailBodyBuilder.ToMessageBody();
                SmtpClient emailClient = new SmtpClient();
                emailClient.Connect("smtp.office365.com", 587, SecureSocketOptions.StartTls);
                emailClient.Authenticate("Support@techvantagesystems.com", "Lavender#20!8#$");
                emailClient.Send(emailMessage);
                emailClient.Disconnect(true);
                emailClient.Dispose();

            }
            catch (SmtpFailedRecipientsException ex)
            {
                throw ex;

            }
        }   

        public static void TimesheetRemainderEmail(string Email)
        {

            strBccAddress = Email;
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
            oStringBuilder.Append("<a href='http://timesheet.techvantagesystems.com/' style='font-color:'#26a69a;font-size: 16px;font-weight:700px;'>TimeSheet Login</a>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");
            
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Techvantage Timesheet");
            oStringBuilder.Append("</span>");
            
            strGlobalSubject = "Reminder - Enter Weekly Timesheet";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strBccAddress))
            {
                SendEMail();
            }
        }

        public static void BirthdaywishesEmail(string Email,string Name,string message)
        {

            strBccAddress = "smitha.binoy@techvantagesystems.com";
            strCCAddress = Email;
            StringBuilder oStringBuilder = new StringBuilder();

            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:14px;border-left:4px solid #26a69a; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Dear " + Name + ", <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("On behalf of the entire team at Techvantage, We wanted to take a moment to wish you a very happy birthday!.<br/>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("We appreciate all the hard work and dedication you bring to the team, and we’re grateful to have you as a part of our organization. We hope your birthday is filled with joy and celebration.<br/>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Once again, happy birthday! We’re looking forward to celebrating with you soon.");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Team Techvantage");
            oStringBuilder.Append("</span>");

            strGlobalSubject = "Happy Birthday " + Name +"!";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strBccAddress))
            {
                SendEMail();
            }
        }

    }
}