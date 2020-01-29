using System;
using System.Data.SqlClient;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace TimeSheetDownloading.Common
{
    public static class ApplicationLog
    {
        public static void LogError(Exception exMe)
        {
            if (exMe.Message.ToString() != "Attempted to divide by zero.")
                RecordErrorInNotepad(FormatOrdinaryException(exMe));
            else
                SendEMail(exMe.Message);
        }

        public static void LogError(SqlException sqexMe)
        {
            int nExceNumber = sqexMe.Number;
            if (nExceNumber == 2)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == -2)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == -1073741769)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == 4060)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == 18456)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == 1326)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == 229)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == 208)
            {
                string sExceptionDescription = sqexMe.Message.Substring(20, sqexMe.Message.Length - 20);
                sExceptionDescription = sExceptionDescription.Substring(1, sExceptionDescription.Length - 3);
                sExceptionDescription = "Table " + sExceptionDescription + " not found";
                RecordErrorInNotepad(sExceptionDescription);
                return;
            }
            else if (nExceNumber == 2601 || nExceNumber == 2627)
            {
                string sExceptionDescription = FormatSqlException(sqexMe, nExceNumber);
                RecordErrorInNotepad(sExceptionDescription);
                return;
            }
            else if (nExceNumber == 547)
            {
                string sExceptionDescription = FormatSqlException(sqexMe, nExceNumber);
                RecordErrorInNotepad(sExceptionDescription);
                return;
            }
            else if (nExceNumber == 2714 || nExceNumber == 1779)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else if (nExceNumber == 50000)
            {
                SendEMail(sqexMe.Message);
                return;
            }
            else
            {
                string sExceptionDescription = FormatSqlException(sqexMe, nExceNumber);
                RecordErrorInNotepad(sExceptionDescription);
            }
        }

        private static string FormatOrdinaryException(Exception exMe)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("Time of Error: " + DateTime.Now.ToString("g") + Environment.NewLine);
            if (exMe != null)
            {
                sb.Append("Message: " + exMe.ToString() + Environment.NewLine);
                sb.Append(Environment.NewLine);
            }
            return sb.ToString();
        }

        private static string FormatSqlException(SqlException sqexMe, int nExceNumber)
        {
            StringBuilder sb = new StringBuilder();
            if (sqexMe != null)
            {
                sb.Append("Time of Error: " + DateTime.Now.ToString("g") + Environment.NewLine);
                for (int i = 0; i < sqexMe.Errors.Count; i++)
                {
                    sb.Append("Index #" + i.ToString() + Environment.NewLine);
                    sb.Append("Message: " + sqexMe.Errors[i].Message + Environment.NewLine);
                    sb.Append("LineNumber: " + sqexMe.Errors[i].LineNumber + Environment.NewLine);
                    sb.Append("Source: " + sqexMe.Errors[i].Source + Environment.NewLine);
                    sb.Append("Procedure: " + sqexMe.Errors[i].Procedure + Environment.NewLine);
                }
                sb.Append(Environment.NewLine);
            }
            return sb.ToString();
        }

        private static void RecordErrorInNotepad(string sText)
        {
            SendEMail(sText);
            string sToday = DateTime.Today.Day + "-" + DateTime.Today.Month + "-" + DateTime.Today.Year;
            string sPath = AppDomain.CurrentDomain.BaseDirectory + "Errors";
            System.IO.Directory.CreateDirectory(@sPath);
            sPath = sPath + "\\" + sToday + ".txt";

            FileInfo fileInfo = new FileInfo(sPath);
            if (fileInfo.Exists)
            {
                FileStream fs = new FileStream(sPath, FileMode.Append, FileAccess.Write);
                StreamWriter writer = new StreamWriter(fs);
                writer.Write(sText);
                writer.Close();
                fs.Close();
            }
            else
            {
                FileStream fs = new FileStream(sPath, FileMode.CreateNew, FileAccess.Write);
                StreamWriter writer = new StreamWriter(fs);
                writer.Write(sText);
                writer.Close();
                fs.Close();
            }
            Console.WriteLine(sText);
        }

        private static void SendEMail(string strText)
        {
            System.Net.Mail.SmtpClient oSmtpClient;
            MailMessage oMailMessage = new MailMessage();
            oMailMessage.From = new MailAddress("techvantagetechies@gmail.com", "Time Sheet", System.Text.Encoding.UTF8);
            oMailMessage.To.Add("monisha@techvantagesystems.com");
            oMailMessage.Subject = "Job Error in Techvantage TimeSheet";
            oMailMessage.Body = strText;
            oMailMessage.IsBodyHtml = true;
            oSmtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com", 25);
            oSmtpClient.UseDefaultCredentials = false;
            oSmtpClient.Credentials = new NetworkCredential("techvantagetechies@gmail.com", "Gravity@2019#");
            oSmtpClient.EnableSsl = true;
            oSmtpClient.Send(oMailMessage);
        }
    }
}
