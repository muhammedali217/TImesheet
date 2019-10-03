using System;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace TimeSheet.Controllers
{
    public class PushContentController : ApiController
    {
        [AcceptVerbs("GET", "POST")]
        public HttpResponseMessage PUSH(string strApplicationId, string strRestApiKey, string strPushMessage, string strDeviceToken, string strId,string strStatus)
        {
            try
            {
                PushNotification oPushNotification = new PushNotification();                
                oPushNotification.DeviceToken = strDeviceToken;
                oPushNotification.ApplicationId = strApplicationId;
                oPushNotification.RestApiKey = strRestApiKey;
                oPushNotification.PushMessage = strPushMessage;
                oPushNotification.Id = strId;
                oPushNotification.status = strStatus;

                PushNotificationRepository orepository = new PushNotificationRepository();
                WebResponse response = orepository.SendPushNotification(oPushNotification);
                return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
            }  
        }
    }
}