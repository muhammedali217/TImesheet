
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace EmailRemainder.Common
{
   public class MailRepository
    {
       

       public string GetAllEmployeesEmailId()
       {
           return SQLHelper.ExecuteDataset("Employee_EmailAddres").Tables[0].Rows[0][0].ToString();
       }
    }
}

