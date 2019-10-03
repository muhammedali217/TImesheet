using System.IO;
using System.Net;
using System.Text;


namespace TimeSheet
{
    public class PushNotificationRepository
    {
        public WebResponse SendPushNotification(PushNotification oPushNotification)
        {
            string strUrlPath = "https://api.parse.com/1/push";
            var httpWebRequest = (HttpWebRequest)WebRequest.Create(strUrlPath);
            byte[] buffer = Encoding.GetEncoding("UTF-8").GetBytes("{\"data\": { \"alert\": \"" + oPushNotification.PushMessage + "\" ,\"Id\": \"" + oPushNotification.Id + "\",\"Status\": \"" + oPushNotification.status + "\", \"title\": \"FIXZ\", \"sound\": \"sound.wav\" },\"where\": { \"deviceToken\": \"" + oPushNotification.DeviceToken + "\" }}");
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.ContentLength = buffer.Length;
            httpWebRequest.Headers.Add("X-Parse-Application-Id", oPushNotification.ApplicationId);
            httpWebRequest.Headers.Add("X-Parse-REST-API-KEY", oPushNotification.RestApiKey);
            httpWebRequest.Method = "POST";
            Stream reqstr = httpWebRequest.GetRequestStream();
            reqstr.Write(buffer, 0, buffer.Length);
            reqstr.Close();
            WebResponse response = httpWebRequest.GetResponse();
            return response;
        }
    }
}