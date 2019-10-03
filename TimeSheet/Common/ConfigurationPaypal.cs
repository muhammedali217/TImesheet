using System.Collections.Generic;

namespace TimeSheet.Common
{
    public static class ConfigurationPaypal
    {
        // Creates a configuration map containing credentials and other required configuration parameters
        public static Dictionary<string, string> GetAcctAndConfig()
        {
            Dictionary<string, string> configMap = new Dictionary<string, string>();
            configMap = GetConfig();


            //configMap.Add("account1.apiUsername", "ATywUi6-9967jzr9femYmyCOKfEFzpFgFe5H4sfQPAv4o-K58HK53A3DmidzZPJbYofs1lD8-3gd6MOa");
            //configMap.Add("account1.apiPassword", "ELEJwWN42fDo6ykMDgu2uMM4WiYSjLyngvjtAYZjMlSHZgeEk2nsGKPTM9SaLrFhrwrenRVCQd_Lwpg7");
            //configMap.Add("account1.apiSignature", "signature");

            configMap.Add("account1.apiUsername", "sm_api1.fixzi.com");
            configMap.Add("account1.apiPassword", "55HQEQS4XG4GC8W6");
            configMap.Add("account1.apiSignature", "AOvKe4G-hS0-d6qz0TTkttoV3yS8AGeyK2P8cj7R.tAWhGLUbOkTGyv6");

            return configMap;
        }

        // Creates a configuration map containing mode and other required configuration parameters
        public static Dictionary<string, string> GetConfig()
        {
            Dictionary<string, string> configMap = new Dictionary<string, string>();
            // Endpoints are varied depending on whether sandbox OR live is chosen for mode
            configMap.Add("mode", "live");
           // configMap.Add("mode", "sandbox");
            return configMap;
        }
    }
}