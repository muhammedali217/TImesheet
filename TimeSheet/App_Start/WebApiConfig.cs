using System.Web.Http;


namespace TimeSheet
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            
         //   RouteTable.Routes.MapHttpRoute(
         //     name: "DefaultApi",
         //     routeTemplate: "{controller}/{id}",
         //     defaults: new { id = System.Web.Http.RouteParameter.Optional }
         //);

            GlobalConfiguration.Configuration.Formatters.Add(new MultipartMediaTypeFormatter());
        }
    }
}
