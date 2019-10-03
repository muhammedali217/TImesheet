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
                //string dtEmployeeEmails = oMailRepository.GetAllEmployeesEmailId();
                //MailHelper.TimesheetRemainderEmail(dtEmployeeEmails);
                MailHelper.TimesheetRemainderEmail("monisha@techvantagesystems.com");
                return "send";
            }
            catch 
            {               
                return "Error";
            }
        }
    }
}
