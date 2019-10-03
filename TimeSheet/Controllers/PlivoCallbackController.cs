using System;
using System.Data.SqlClient;
using System.Web.Http;

namespace TimeSheet.Controllers
{
    public class PlivoCallbackController : ApiController
    {
        [AcceptVerbs("GET", "POST")]
        public void GetCallback()
        {
            try
            {
                
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);                
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe);                
            }
        }
    }
}
