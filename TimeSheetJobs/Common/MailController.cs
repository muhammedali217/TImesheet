using System;

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
    }
}
