
using System.Data;

namespace AccessConroldataimport
{
    public class MailRepository
    {
        public string GetAllEmployeesEmailId()
        {
            return SQLHelper.ExecuteDataset("Employee_EmailAddres").Tables[0].Rows[0][0].ToString();
        }
        public DataSet GetBirthDayEmployeesEmailId()
        {
            return SQLHelper.ExecuteDataset("Employee_BirthDayMail");
        }
    }
}

