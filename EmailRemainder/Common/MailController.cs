namespace EmailRemainder.Common
{
    class MailController
    {
        public string SendRemainderEmailToAllEmployee()
        {
            try
            {
                MailRepository oMailRepository = new MailRepository();
                string dtEmployeeEmails = oMailRepository.GetAllEmployeesEmailId();

                //oDataTableWStatus.status = "SUCCESS";
                //oDataTableWStatus.message = "Send Successfully";
                //oDataTableWStatus.details = " ";

                //var response = oDataTableWStatus;
                MailHelper.TimesheetRemainderEmail(dtEmployeeEmails);
                return "send";
            }
            catch 
            {               
                return "Error";
            }
        }
    }
}
