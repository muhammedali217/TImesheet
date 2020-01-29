using System;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Data;
using TimeSheet.Models;
namespace TimeSheet.Common
{
    public class SmsMailHelper
    {
        private static string strReceiversAddress = null;
        private static string strCCAddress = null;
        private static string strGlobalSubject = "", strGlobalText = "";

        private static void SendEMail()
        {
            System.Net.Mail.SmtpClient oSmtpClient;
            try
            {
                String strSenderAddress = string.Empty;
                MailMessage oMailMessage = new MailMessage();
                strSenderAddress = "techvantagetechies@gmail.com";
                //Pass the Values 
                oMailMessage.From = new MailAddress(strSenderAddress, "Techvantage Timesheet", System.Text.Encoding.UTF8);
                oMailMessage.To.Add(strReceiversAddress.ToString());
                oMailMessage.Bcc.Add(strCCAddress.ToString());
                oMailMessage.Subject = strGlobalSubject;
                oMailMessage.Body = strGlobalText;
                //add our attachment      

                oMailMessage.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;
                //Attachment imgAtt = new Attachment(System.Web.Hosting.HostingEnvironment.MapPath("~/images/logo_eat.jpg"));
                //oMailMessage.Attachments.Add(imgAtt);


                oSmtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com", 25);
                oSmtpClient.UseDefaultCredentials = false;
                oSmtpClient.Credentials = new NetworkCredential("techvantagetechies@gmail.com", "Gravity@2019#");
                oSmtpClient.EnableSsl = true;
                oMailMessage.IsBodyHtml = true;

                oSmtpClient.Send(oMailMessage);

            }
            catch (SmtpFailedRecipientsException ex)
            {
                throw ex;

            }
        }



        public static void EmployeeAddedEmail(string EmpName, string EmpCode, string EmpDesgntn)
        {
            strReceiversAddress = "<balu.ramesh@techvantagesystems.com>";
            strCCAddress="<info@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:130%; display: block; font-weight: 500\">");
            oStringBuilder.Append("Hi  , <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:130%; display: block; font-weight: 500\">");
            oStringBuilder.Append("One Employee added in Techvantage Database. Details Given below:- <br/><br/>");
            oStringBuilder.Append("</span>");

           

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:130%; display: block; font-weight: 500\">");
            oStringBuilder.Append("Employee Name             :  " + EmpName);
            oStringBuilder.Append("</span>");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:130%; display: block; font-weight: 500\">");
            oStringBuilder.Append("Employee Code         : " + EmpCode + " <br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:130%; display: block; font-weight: 500\">");
            oStringBuilder.Append("Designation            &nbsp; &nbsp;  &nbsp;&nbsp;         : " + EmpDesgntn);
            oStringBuilder.Append("</span>");



            strGlobalSubject = "New Employee Added";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }




        public static void LeaveApplicationEmail(string stEmpName, string strLeaveType, string strReason, string strFromDate, string strtoDate, double strTotalLeaves)
        {


            //strReceiversAddress = "<monisha@techvantagesystems.com>";
            strReceiversAddress = "<info@techvantagesystems.com>";
            strCCAddress = "<balu.ramesh@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>";
            //strCCAddress = "<smitha.binoy@techvantagesystems.com>";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Hi , <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("One Employee requested for Leave. Details Given below:- <br/><br/>");
            oStringBuilder.Append("</span>");
          

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Employee Name<span style='margin-left:25px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
            oStringBuilder.Append("</span>");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Leave Type  <span style='margin-left:55px;margin-top:15px;'></span> : &nbsp; &nbsp; " + strLeaveType + " <br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("From<span style='margin-left:96px;margin-top:15px;'></span> : &nbsp; &nbsp; " + strFromDate);
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("To  <span style='margin-left:113px;margin-top:15px;'></span>           : &nbsp; &nbsp; " + strtoDate);
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Reason<span style='margin-left:80px;margin-top:15px;'></span>           : &nbsp;&nbsp; &nbsp; " + strReason);
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/><br/>");
            oStringBuilder.Append("<span style=\"color:#26a69a;border-bottom: 1px solid #26a69a;    width: 260px;letter-spacing: 0.02rem; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 600\">");
            oStringBuilder.Append("Total days of Leave  Requested                   : " + strTotalLeaves);
            oStringBuilder.Append("</span></div>");


            strGlobalSubject = "Leave Request From " + stEmpName.ToString();
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }



        public static void LeaveAcceptRejectEmail(string stEmpName, string strLeaveType, string strNoOfDays, string strEmail, string strLeaveStatus, string strRemarks)
        {
            if (strNoOfDays == "0.5")
            {
                strNoOfDays = "Half";

            }


            if (strRemarks == " ")
            {
                strRemarks = "Nil";
            }
            

            decimal p;
            Decimal.TryParse(strNoOfDays, out p);
            //strReceiversAddress = "melwyn@techvantagesystems.com";
            strReceiversAddress = strEmail;
            strCCAddress = " ";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            if (strLeaveStatus == "Approved")
            {
                oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #26a69a; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Dear " + stEmpName.ToUpper() + " , <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("You have requested leave through timesheet application.<br/>");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");
             

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Your leave is now <strong style=\'color:#26a69a !important;'>Approved</strong> . Please ensure that the project tasks are not affected.<br>If necessary, please be prepared to compensate on weekends or other working days.");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");


                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500;\">");
                oStringBuilder.Append("<i><strong>Remarks :&nbsp;&nbsp;</strong>" + strRemarks + "</i>");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Regards,");
                oStringBuilder.Append("<br>Techvantage Timesheet.");
                oStringBuilder.Append("</span>");
            }

            else if (strLeaveStatus == "Rejected")
            {
                oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #f44336; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Dear  " + stEmpName.ToUpper() + " , <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("You are requested leave through timesheet application.");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");


                oStringBuilder.Append("<span style=\"color:black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("We regret to inform you that management has <strong style=\'color:#f44336 !important;'>Rejected </strong>your leave application for the given period.");
                oStringBuilder.Append("</span>");


                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("We hope you will understand the situation.");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");



                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("<i><strong>Remarks :&nbsp;&nbsp;</strong>" + strRemarks + "</i>");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Regards,");
                oStringBuilder.Append("<br>Techvantage Timesheet.");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("</div>");

            }
            else
            {

            }

            strGlobalSubject = "Email Regarding Your Leave";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }

        public static void RequestEmail2Admin(string strRequestType, string stEmpName, string TrvlFDate, string TrvlTDate, string TrvlRemarks, string VisaType, string VisaRemarks, string IdRqType, string IdRemarks, string ExpnseFor, string ExpnseCost, string ExpnsePaidTo, string WrkFHmeFDate, string WrkFHmeTDate, string WrkFHmeReason, string ReimbursementFor, string ReimbursementUsed, string ReimbursementRemarks, string ReimbursementAmount,string commonRqFor,string commonRqPurpse,string commonRqDesc)
        {

            //strReceiversAddress = "<monisha@techvantagesystems.com>";
            strReceiversAddress = "<info@techvantagesystems.com>";
            strCCAddress = "<balu.ramesh@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");

            if (strRequestType == "Travel")
            {
                oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Hi , <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append(strRequestType + " request from One Employee . Details Given below:- <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Employee Name<span style='margin-left:40px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
                oStringBuilder.Append("</span>");


                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Travel From Date  <span style='margin-left:33px;margin-top:15px;'></span> : &nbsp; &nbsp; " + TrvlFDate + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Travel To Date<span style='margin-left:50px;margin-top:15px;'></span> : &nbsp; &nbsp; " + TrvlTDate);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Remarks  <span style='margin-left:86px;margin-top:15px;'></span>           : &nbsp; &nbsp; " + TrvlRemarks);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Requested Date<span style='margin-left:40px;margin-top:15px;'></span>           : &nbsp;&nbsp; &nbsp; " + DateTime.Now.ToString());
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/><br/>");
                oStringBuilder.Append("</div>");
            }


            if (strRequestType == "VISA")
            {
                oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Hi , <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append(strRequestType + " request from One Employee . Details Given below:- <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Employee Name<span style='margin-left:80px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
                oStringBuilder.Append("</span>");


                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Visa Type <span style='margin-left:121px;margin-top:15px;'></span> : &nbsp; &nbsp; " + VisaType + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Remarks<span style='margin-left:126px;margin-top:15px;'></span> : &nbsp; &nbsp; " + VisaRemarks);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Requested Date<span style='margin-left:80px;margin-top:15px;'></span>           : &nbsp;&nbsp; &nbsp; " + DateTime.Now.ToString());
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/><br/>");
                oStringBuilder.Append("</div>");
            }


            if (strRequestType == "ID Card")
            {
                oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Hi , <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append(strRequestType + " request from One Employee . Details Given below:- <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Employee Name<span style='margin-left:25px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
                oStringBuilder.Append("</span>");


                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Request For <span style='margin-left:51px;margin-top:15px;'></span> : &nbsp; &nbsp; " + IdRqType + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Remarks<span style='margin-left:72px;margin-top:15px;'></span> : &nbsp; &nbsp; " + IdRemarks);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Requested Date<span style='margin-left:25px;margin-top:15px;'></span>           : &nbsp;&nbsp; &nbsp; " + DateTime.Now.ToString());
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/><br/>");
                oStringBuilder.Append("</div>");
            }

            if (strRequestType == "Expense Voucher")
            {
                oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Hi , <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append(strRequestType + " request from One Employee . Details Given below:- <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Employee Name<span style='margin-left:81px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Expense For <span style='margin-left:105px;margin-top:15px;'></span> : &nbsp; &nbsp; " + ExpnseFor + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Expense Cost <span style='margin-left:98px;margin-top:15px;'></span> : &nbsp; &nbsp; " + ExpnseCost + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Paid To<span style='margin-left:138px;margin-top:15px;'></span> : &nbsp; &nbsp; " + ExpnsePaidTo);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Requested Date<span style='margin-left:82px;margin-top:15px;'></span>           : &nbsp;&nbsp; &nbsp; " + DateTime.Now.ToString());
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/><br/>");
                oStringBuilder.Append("</div>");
            }


            if (strRequestType == "Work From Home")
            {
                oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Hi , <br/><br/>");
                oStringBuilder.Append("</span>");

                //oStringBuilder.Append("<div style=text-align:left;color:#505050;font-family:Lucida Sans,Lucida;font-size:14px;line-height:150%><a style=color:#336699;font-weight:normal;text-decoration:underline rel=nofollow target='_blank'><img class='CToWUd' style='border:px none;border-style:none;border-width:px;min-height:64px;width:93px;margin:0;padding:0;line-height:100%;outline:none;text-decoration:none;display:inline' src='https://www.puretexting.com/email/mcomputerInfo.png' alt='Online Services' height='64' border='0' width='93'></a></div>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append(strRequestType + " request from One Employee . Details Given below:- <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Employee Name<span style='margin-left:79px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("From <span style='margin-left:150px;margin-top:15px;'></span> : &nbsp; &nbsp; " + WrkFHmeFDate + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("To  <span style='margin-left:168px;margin-top:15px;'></span> : &nbsp; &nbsp; " + WrkFHmeTDate + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Reason<span style='margin-left:136px;margin-top:15px;'></span> : &nbsp; &nbsp; " + WrkFHmeReason);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Requested Date<span style='margin-left:80px;margin-top:15px;'></span>           : &nbsp;&nbsp; &nbsp; " + DateTime.Now.ToString());
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/><br/>");
                oStringBuilder.Append("</div>");
            }

            if (strRequestType == "Reimbursement")
            {
                oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Hi , <br/><br/>");
                oStringBuilder.Append("</span>");

                //oStringBuilder.Append("<div style=text-align:left;color:#505050;font-family:Lucida Sans,Lucida;font-size:14px;line-height:150%><a style=color:#336699;font-weight:normal;text-decoration:underline rel=nofollow target='_blank'><img class='CToWUd' style='border:px none;border-style:none;border-width:px;min-height:64px;width:93px;margin:0;padding:0;line-height:100%;outline:none;text-decoration:none;display:inline' src='https://www.puretexting.com/email/mcomputerInfo.png' alt='Online Services' height='64' border='0' width='93'></a></div>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append(strRequestType + " request from One Employee .<br/> Details Given below:- <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Employee Name<span style='margin-left:79px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Reimbursement For <span style='margin-left:55px;margin-top:15px;'></span> : &nbsp; &nbsp; " + ReimbursementFor + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Reimbursement Amount <span style='margin-left:29px;margin-top:15px;'></span> : &nbsp; &nbsp; " + ReimbursementAmount + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Reimbursement Used <span style='margin-left:45px;margin-top:15px;'></span> : &nbsp; &nbsp; " + ReimbursementUsed + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Remarks<span style='margin-left:125px;margin-top:15px;'></span> :&nbsp; &nbsp;&nbsp; " + ReimbursementRemarks);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Requested Date<span style='margin-left:80px;margin-top:15px;'></span>           : &nbsp;&nbsp; " + DateTime.Now.ToString());
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/><br/>");
                oStringBuilder.Append("</div>");
            }


            if (strRequestType == "Common")
            {
                oStringBuilder.Append("<div style='line-height:24px;padding-left: 30px;background-color:#F3F3F3;padding:15px; border-top:4px solid#FFB300;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Hi , <br/><br/>");
                oStringBuilder.Append("</span>");

                //oStringBuilder.Append("<div style=text-align:left;color:#505050;font-family:Lucida Sans,Lucida;font-size:14px;line-height:150%><a style=color:#336699;font-weight:normal;text-decoration:underline rel=nofollow target='_blank'><img class='CToWUd' style='border:px none;border-style:none;border-width:px;min-height:64px;width:93px;margin:0;padding:0;line-height:100%;outline:none;text-decoration:none;display:inline' src='https://www.puretexting.com/email/mcomputerInfo.png' alt='Online Services' height='64' border='0' width='93'></a></div>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append(strRequestType + " request from One Employee .<br/> Details Given below:- <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Employee Name<span style='margin-left:29px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Request For <span style='margin-left:55px;margin-top:15px;'></span> : &nbsp; &nbsp; " + commonRqFor + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Purpose <span style='margin-left:80px;margin-top:15px;'></span> : &nbsp; &nbsp; " + commonRqPurpse + " <br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Requested Date<span style='margin-left:29px;margin-top:15px;'></span>           : &nbsp;&nbsp;&nbsp; " + DateTime.Now.ToString());
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Desctiption <span style='margin-left:62px;margin-top:15px;'></span> : &nbsp; &nbsp; " + commonRqDesc + " <br/>");
                oStringBuilder.Append("</span>");

                
                oStringBuilder.Append("<br/><br/>");
                oStringBuilder.Append("</div>");
            }

            strGlobalSubject = strRequestType + " Request From " + stEmpName.ToString();
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }

        public static void RequestAcceptRejectEmail(string stEmpName, string strEmail, string stRequestType, string strReqDate, string strRequestStatus, string strRemarks)
        {


            strReceiversAddress = strEmail;
            strCCAddress = "";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            if (strRequestStatus == "Approved")
            {
                oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #26a69a; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Dear " + stEmpName.ToUpper() + " , <br/><br/>");
                oStringBuilder.Append("</span>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("I am approving your " + stRequestType + " request.<br/>");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");


                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Your request is <strong style=\'color:#26a69a !important;'>Approved.</strong> ");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");


                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500;\">");
                oStringBuilder.Append("<i><strong>Remarks :&nbsp;&nbsp;</strong>" + strRemarks + "</i>");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Regards,");
                oStringBuilder.Append("<br>Techvantage Timesheet.");
                oStringBuilder.Append("</span>");
            }

            else if (strRequestStatus == "Rejected")
            {
                oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #f44336; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Dear  " + stEmpName.ToUpper() + " , <br/><br/>");
                oStringBuilder.Append("</span>");


                oStringBuilder.Append("<span style=\"color:black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("We regret to inform you that management has <strong style=\'color:#f44336 !important;'>Rejected </strong> your " + stRequestType + " request.");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("We sincerely hope this does not inconvinience you in anyway. ");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");



                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("<i><strong>Remarks :&nbsp;&nbsp;</strong>" + strRemarks + "</i>");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("<br/>");

                oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
                oStringBuilder.Append("Regards,");
                oStringBuilder.Append("<br>Techvantage Timesheet.");
                oStringBuilder.Append("</span>");
                oStringBuilder.Append("</div>");

            }
            else
            {

            }

            strGlobalSubject = "Email regarding Your " + stRequestType + " request";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }

        //Sending Email To Admin

        public static void MeetingRoomBookedMail(string stEmpName, string strFor, string strDate, string strTime, string strParticipants, string emailAddress)
        {


            strReceiversAddress = "<info@techvantagesystems.com>";
            //strReceiversAddress = "<monisha@techvantagesystems.com>";
            strCCAddress = "<balu.ramesh@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>,<ravi@techvantagesystems.com>,<meenu@techvantagesystems.com>";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #26a69a; font-size: 14px;line-height: 26px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; width:450px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Hi , <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:450px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Meeting room request from one Employee. Details Given below:- <br/><br/>");
            oStringBuilder.Append("</span>");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:450px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Booked By<span style='margin-left:45px;margin-top:15px;'></span>  : &nbsp; &nbsp;  " + stEmpName);
            oStringBuilder.Append("</span>");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:450px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Booked For  <span style='margin-left:38px;margin-top:15px;'></span> : &nbsp; &nbsp; " + strFor + " <br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<div style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:450px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Meeting Date<span style='margin-left:27px;margin-top:15px;'></span> : &nbsp; &nbsp; " + strDate);
            oStringBuilder.Append("</div>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:450px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Meeting Time  <span style='margin-left:25px;margin-top:15px;'></span>           : &nbsp; &nbsp; " + strTime);
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;padding-bottom:30px;width:450px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Participants<span style='margin-left:36px;margin-top:15px;'></span>           : &nbsp;&nbsp; &nbsp; " + strParticipants);
            //var approveLink = "http://timesheet.techvantagesystems.com/api/FIXZIService/ApproveMeetingRoomRequest?EmailId=" + emailAddress;
            //var rejectLink = "http://timesheet.techvantagesystems.com/api/FIXZIService/RejectMeetingRoomRequest?EmailId=" + emailAddress;
            var approveLink = "http://localhost:15794/api/FIXZIService/ApproveMeetingRoomRequest?EmailId=" + emailAddress;
            var rejectLink = "http://localhost:15794/api/FIXZIService/RejectMeetingRoomRequest?EmailId=" + emailAddress;
            //Approve Reject BTN
            oStringBuilder.Append("<br /><a href=" + approveLink + " style=\'margin-top:20px;display: inline-block;padding: .375rem 1rem;font-size: 1rem;font-weight: 400;line-height: 1.5;text-align: center;white-space: nowrap;vertical-align: middle;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent; border-radius: .25rem;color: #fff;background-color: #449d44;border-color: #419641;'>APPROVE</a></button>");
            oStringBuilder.Append("<a href=" + rejectLink + " style=\'margin-left:5px;margin-top:20px;display: inline-block;padding: .375rem 1rem;font-size: 1rem;font-weight: 400;line-height: 1.5;text-align: center;white-space: nowrap;vertical-align: middle;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent; border-radius: .25rem;color: #fff;background-color: #c9302c;border-color: #c12e2a;'>REJECT</a></button>");


            oStringBuilder.Append("</span>");
            oStringBuilder.Append("</div>");


            strGlobalSubject = "Meeting Room request from " + stEmpName.ToString();
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }




        //Approve Mail
        public static void MeetingRoomApprove(string emailAddress)
        {

            strReceiversAddress = emailAddress;
            strCCAddress = "";
            StringBuilder oStringBuilder = new StringBuilder();

            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #26a69a; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Hi,<br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("I am writing to let you know that I am granting your meeting request  you have requested.<br/>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");


            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Your request is <strong style=\'color:#26a69a !important;'>Approved.</strong> ");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Please be ensure that all the properties in meeting room should be properly used.");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Techvantage Timesheet.");
            oStringBuilder.Append("</span>");

            strGlobalSubject = "Regarding Meeting room request";
            strGlobalText = oStringBuilder.ToString();

            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }



        //Approve Mail
        public static void MeetingRoomReject(string emailAddress)
        {

            strReceiversAddress = emailAddress;
            strCCAddress = "";
            StringBuilder oStringBuilder = new StringBuilder();

            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #f44336; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Hi,<br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("We regret to inform you that your meeting room request  has <strong style=\'color:#f44336 !important;'>Rejected </strong>");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("We sincerely hope this does not inconvinience you in anyway. ");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Techvantage Timesheet.");
            oStringBuilder.Append("</span>");

            strGlobalSubject = "Regarding Meeting room request";
            strGlobalText = oStringBuilder.ToString();

            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }


        public static void ApproveRejectEmailNotification2Admin(string requestType,string EmpName,string requestDate,string reqStatus)
        {
            strReceiversAddress = "<info@techvantagesystems.com>";
            strCCAddress = "<balu.ramesh@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>";

            //strReceiversAddress = "melwyn@techvantagesystems.com";
           
            StringBuilder oStringBuilder = new StringBuilder();

            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #0e0c0c; font-size: 14px;line-height: 21px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Hi,<br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("This email is to inform you that admin  has <strong style=\'color:black !important;'>" + reqStatus.ToLower() + " </strong>" + EmpName + "'s " + requestType + " dated " + requestDate+".");
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<br/>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; font-weight: 500\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Techvantage Timesheet.");
            oStringBuilder.Append("</span>");

            strGlobalSubject = EmpName + "'s " + requestType + " Request has been " + reqStatus.ToLower();
            strGlobalText = oStringBuilder.ToString();

            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }


        public static void TicketMail2SupportPerson(string stEmpName, string Type, string Issue, string priority, string details, string TicketNo,string TicketPKValue)
        {
            //var RedirictLink = "http://localhost:15794/replytoticket.aspx?TicketId=" + TicketPKValue;
            var RedirictLink = "http://fixzitest.in/replytoticket.aspx?TicketId=" + TicketPKValue;
            strReceiversAddress = "<rajesh@techvantagesystems.com>";
            strCCAddress = " ";
            
           // strReceiversAddress = "<balu.ramesh@techvantagesystems.com>,<info@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>,<melwyn@techvantagesystems.com>";
            StringBuilder oStringBuilder = new StringBuilder();

            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");


            oStringBuilder.Append("<div style='background-color:#F3F3F3;border:1px solid #e5e5e5;padding:15px;border-left:4px solid #26a69a; font-size: 14px;line-height: 26px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:15px; display: block; width:612px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Hi , <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:615px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append(stEmpName+" raised a ticket regarding some issue . Details Given below:- <br/><br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:615px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Issue Type <span style='margin-left:38px;margin-top:15px;'></span> : &nbsp; &nbsp; " + Type + " <br/>");
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:615px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Issue<span style='margin-left:72px;margin-top:72px;'></span> : &nbsp; &nbsp; " + Issue);
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:615px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Priority  <span style='margin-left:61px;margin-top:15px;'></span>           : &nbsp; &nbsp; " + priority);
            oStringBuilder.Append("</span>");

            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;padding-bottom:30px;width:615px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("Details<span style='margin-left:62px;margin-top:15px;'></span>           : &nbsp; &nbsp; " + details);
            oStringBuilder.Append("</span>");
            
            
            oStringBuilder.Append("<span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block;width:615px; margin:0 auto; font-weight: 500\">");
            oStringBuilder.Append("<p>Ticket Number for this issue is " + TicketNo);
            oStringBuilder.Append("</span>");
            oStringBuilder.Append("<button type='submit' style=\'margin-left:18px;margin-top:20px;display: inline-block;padding: .375rem 1rem;font-size: 1rem;font-weight: 400;line-height: 1.5;text-align: center;white-space: nowrap;vertical-align: middle;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent; border-radius: .25rem;color: #fff;background-color: #00a96d;border-color: #00a96d;'><a href=" + RedirictLink + " style='color:white;text-decoration:none;'>RESOLVE</a></button>");
            oStringBuilder.Append("</div>");                        

            strGlobalSubject = "Issue Request from " + stEmpName.ToString();
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }

        public static void ReplyToEmployeeRegardingTicket(string email,string content,string TicketNumber)
        {


            strReceiversAddress = email;
            strCCAddress = "";
            // strReceiversAddress = "<balu.ramesh@techvantagesystems.com>,<info@techvantagesystems.com>,<smitha.binoy@techvantagesystems.com>,<jeeja.deviprasad@techvantagesystems.com>,<melwyn@techvantagesystems.com>";
            StringBuilder oStringBuilder = new StringBuilder();
            oStringBuilder.Append("<br/><br/>");
            oStringBuilder.Append("<div style='background-color:aliceblue;border:2px solid grey;padding:15px;border-left:4px solid grey; font-size: 14px;line-height: 26px;'> <span style=\"color:Black; font-family:Arial;text-align:left;font-size:14px; display: block; font-weight: 500\">");
            oStringBuilder.Append("<span style=\"color:Black; font-family:inherit;text-align:left;font-size:15px; display: block; width:612px; margin:0 auto; font-weight: 500\">");

            oStringBuilder.Append("</span>");
            // string strHostedUrl = Convert.ToString(ConfigurationManager.ConnectionStrings["HostedUrl"] + "/login.aspx");
            oStringBuilder.Append("<span style='display: flex; !important;letter-spacing: 2px !important;'>" + content + "< /span>");
            //oStringBuilder.Append("<div style='background-color:#eeedef;border:1px solid #ddd;color:#555;font-size:18px;text-align:center'><br>Your <span class='il'>ticket</span> code: <strong>"+TicketNumber+"</strong><br><span style='font-size:11px'>Make sure you include this code in all emails regarding this issue.</span><br><br></div>");
            oStringBuilder.Append("</div>");
            oStringBuilder.Append("<br/>");
            oStringBuilder.Append("<div style='color:#555;font-size:18px;text-align:center'><br>Your <span class='il'>ticket</span> code: <strong>"+TicketNumber+"</strong><br><span style='font-size:11px'>Make sure you include this code in all emails regarding this issue.</span><br><br></div>");
            oStringBuilder.Append("</div>");
            oStringBuilder.Append("<span style=\"color:Black; font-family:initial;text-align:left;font-size:18px; display: block; font-weight: 500;margin-left:5px;color:#00a96d\">");
            oStringBuilder.Append("Regards,");
            oStringBuilder.Append("<br>Support Team");
            oStringBuilder.Append("</span>");
            strGlobalSubject = "RE: Techvantage Support";
            strGlobalText = oStringBuilder.ToString();
            if (!String.IsNullOrEmpty(strReceiversAddress))
            {
                SendEMail();
            }
        }
    }
}
        
