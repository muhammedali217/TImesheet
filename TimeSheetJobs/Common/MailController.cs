using System;
using System.Data;

namespace TimeSheetJobs
{
    class MailController
    {
        public string SendRemainderEmailToAllEmployee()
        {
            try
            {                
                MailRepository oMailRepository = new MailRepository();
                string dtEmployeeEmails = oMailRepository.GetAllEmployeesEmailId();
                MailHelper.TimesheetRemainderEmail(dtEmployeeEmails);
                //MailHelper.TimesheetRemainderEmail("unni@techvantagesystems.com");
                return "send";
            }
            catch(Exception ex)
            {               
                return "Error";
            }
        }

        public string SendBirthDayEmailToAllEmployee()
        {
            try
            {
                MailRepository oMailRepository = new MailRepository();
                DataSet dtEmployeeEmails = oMailRepository.GetBirthDayEmployeesEmailId();
                string Empname, mailid;
                //string dtEmployeemailEmails = oMailRepository.GetAllEmployeesEmailId();
                string dtEmployeemailEmails = "unni@techvantage.com";
                string msg = "";
                if (dtEmployeeEmails.Tables[0].Rows.Count>0)
                {
                    for (int i = 0; i < dtEmployeeEmails.Tables[0].Rows.Count; i++)
                    {
                        MailHelper.BirthdaywishesEmail(dtEmployeemailEmails, dtEmployeeEmails.Tables[0].Rows[i][0].ToString(), msg);
                    }


                }

                
                //MailHelper.TimesheetRemainderEmail("unni@techvantagesystems.com");
                return "send";
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }

    }
}
