using System;
using System.Data;

namespace AccessConroldataimport
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
                //string dtEmployeemailEmails = "ali.muhammed@techvantage.com";
                string msg = "";
                if (dtEmployeeEmails.Tables[0].Rows.Count>0)
                {
                    for (int i = 0; i < dtEmployeeEmails.Tables[0].Rows.Count; i++)
                    {
                        MailHelper.BirthdaywishesEmail(dtEmployeeEmails.Tables[0].Rows[i]["Employee_OfficialMailId"].ToString(), dtEmployeeEmails.Tables[0].Rows[i]["EmpName"].ToString(), msg);
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
