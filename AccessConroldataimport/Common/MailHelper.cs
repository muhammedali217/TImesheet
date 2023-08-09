
using System;
using System.Net.Mail;
using System.Text;
using MimeKit;
using MailKit.Net.Smtp;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
using MailKit.Security;


namespace AccessConroldataimport
{
    public class MailHelper
    {
        private static string strBccAddress = null;
        private static string strGlobalSubject = "", strGlobalText = "";

        private static void SendEMail()
        {
            System.Net.Mail.SmtpClient oSmtpClient;
            try
            {

                MimeMessage emailMessage = new MimeMessage();

                MailboxAddress emailFrom = new MailboxAddress("Time-Sheet", "Support@techvantagesystems.com");
                emailMessage.From.Add(emailFrom);

                InternetAddressList tolist = new InternetAddressList();
                string[] TCId = strBccAddress.Split(',');
                foreach (string TCEmail in TCId)
                {
                    tolist.Add(new MailboxAddress("info@techvantagesystems.com"));
                    //tolist.Add(new MailboxAddress("unni@techvantagesystems.com"));
                }
                //strBccAddress = "Unni@techvantagesystems.com,rajesh@techvantagesystems.com";
                //MailboxAddress emailTo = new MailboxAddress(strReceiversAddress.ToString());
                InternetAddressList Bcclist = new InternetAddressList();
                string[] CCId = strBccAddress.Split(',');
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



                // MailMessage oMailMessage = new MailMessage();
                // string strSenderPassword = XmlConec.getAppSettings_("SenderMailPwd");
                // strSenderAddress = XmlConec.getAppSettings_("SenderMail");//"techvantagetechies@gmail.com";
                // //Pass the Values 
                // oMailMessage.From = new MailAddress(strSenderAddress, "Techvantage Timesheet", System.Text.Encoding.UTF8);
                //// oMailMessage.To.Add("info@techvantagesystems.com");
                // oMailMessage.To.Add("unni@techvantagesystems.com");
                // //oMailMessage.Bcc.Add("tmonisha86@gmail.com");
                //// oMailMessage.Bcc.Add(strBccAddress.ToString());
                // oMailMessage.Subject = strGlobalSubject;
                // oMailMessage.Body = strGlobalText;
                // //add our attachment
                // //



                // //oMailMessage.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;


                // SmtpClient client = new SmtpClient("smtp.office365.com");
                // client.Port = Convert.ToInt32("587");
                // client.DeliveryMethod = SmtpDeliveryMethod.Network;
                // client.UseDefaultCredentials = false;
                // System.Net.NetworkCredential credentials = new System.Net.NetworkCredential("info@flyhy.in", "Lavender#20!8#");
                // client.EnableSsl = true;
                // client.Credentials = credentials;
                // client.TargetName = "STARTTLS/smtp.office365.com";
                // client.Send(oMailMessage);

                //SmtpClient client = new SmtpClient();
                //client.UseDefaultCredentials = false;
                //client.Credentials = new System.Net.NetworkCredential
                //                      (strSenderAddress,
                //                       strSenderPassword);
                //client.Host = "smtp.office365.com";
                //client.Port = 587;
                //client.EnableSsl = true;
                //client.Send(oMailMessage);
                //Attachment imgAtt = new Attachment(System.Web.Hosting.HostingEnvironment.MapPath("~/images/logo_eat.jpg"));
                //oMailMessage.Attachments.Add(imgAtt);

                //MimeMessage emailMessage = new MimeMessage();
                //MailboxAddress emailFrom = new MailboxAddress(_emailSettings.Name, _emailSettings.EmailId);
                //emailMessage.From.Add(emailFrom);
                //MailboxAddress emailTo = new MailboxAddress(emailData.EmailToName, emailData.EmailToId);
                //emailMessage.To.Add(emailTo);
                //emailMessage.Subject = emailData.EmailSubject;
                //BodyBuilder emailBodyBuilder = new BodyBuilder();
                //emailBodyBuilder.HtmlBody = emailData.EmailBody;
                //emailMessage.Body = emailBodyBuilder.ToMessageBody();
                //SmtpClient emailClient = new SmtpClient();
                //emailClient.Connect(_emailSettings.Host, _emailSettings.Port, SecureSocketOptions.StartTls);
                //emailClient.Authenticate(_emailSettings.EmailId, _emailSettings.Password);
                //emailClient.Send(emailMessage);
                //emailClient.Disconnect(true);
                //emailClient.Dispose();


                //oSmtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com", 25);
                //oSmtpClient.UseDefaultCredentials = false;
                //oSmtpClient.Credentials = new NetworkCredential(strSenderAddress, strSenderPassword);
                //oSmtpClient.EnableSsl = true;
                //oMailMessage.IsBodyHtml = true;
                //SmtpClient client = new SmtpClient();

                ////client.EnableSsl = true;
                ////client.UseDefaultCredentials = false;
                ////client.Credentials = new NetworkCredential(strSenderAddress, strSenderPassword);
                ////client.Host = "smtp.gmail.com";
                ////client.Port = 587;
                ////client.DeliveryMethod = SmtpDeliveryMethod.Network;

                //SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
                //smtp.Credentials = new System.Net.NetworkCredential("techvantageanalytics@gmail.com", "LemonGrass@098");
                //smtp.EnableSsl = true;
                //smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                //smtp.UseDefaultCredentials = false;
                //smtp.Send(oMailMessage);

                //client.Send(oMailMessage);

                //SmtpClient client = new SmtpClient();

                //client.Credentials = new NetworkCredential(strSenderAddress, strSenderPassword, "smtp.gmail.com");
                //client.Host = "smtp.gmail.com";
                //client.Port = 587;
                //client.DeliveryMethod = SmtpDeliveryMethod.Network;
                //client.EnableSsl = true;
                //client.UseDefaultCredentials = true;
                //client.Send(oMailMessage);
                //oSmtpClient.Send(oMailMessage);
            }
            catch (SmtpFailedRecipientsException ex)
            {
                Console.Write(ex.ToString());// throw ex;

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

    }
}