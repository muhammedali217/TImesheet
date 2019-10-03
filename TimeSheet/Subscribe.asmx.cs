using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Web.Script.Services;
namespace TimeSheet
{
    /// <summary>
    /// Summary description for Subscribe
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class Subscribe : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string SubscribeEmail(string Email)
        {
            SqlConnection con = new SqlConnection();
            con.ConnectionString = "Data Source=(local);Initial Catalog=dbLeaveMngment;User Id=sa;Password=password#123";

            string query1 = "insert into Subscribe(Subscribe_Email,Subscribe_Date) values ('" + Email + "','"+DateTime.Now+"')";

            SqlCommand cmd1 = new SqlCommand(query1, con);
            con.Open();
            cmd1.ExecuteNonQuery();
            con.Close();
            return "Inserted";
        }
    }
}
