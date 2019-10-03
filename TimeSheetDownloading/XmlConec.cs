﻿using System;
using System.Xml;

namespace TimeSheetDownloading
{
   public  class XmlConec
    {
        public static void UpdateAppSettings_(string KeyName, string KeyValue)
        {
            XmlDocument XmlDoc = new XmlDocument();
            XmlDoc.Load(AppDomain.CurrentDomain.BaseDirectory + "App.xml");
            foreach (XmlElement xElement in XmlDoc.DocumentElement)
            {
                if (xElement.Name == "appSettings")
                {
                    foreach (XmlNode xNode in xElement.ChildNodes)
                    {
                        if (xNode.Attributes[0].Value == KeyName)
                            xNode.Attributes[1].Value = KeyValue;
                    }
                }
            }
            XmlDoc.Save(AppDomain.CurrentDomain.BaseDirectory + "App.xml");
        }

        public static string getAppSettings_(string KeyName)
        {
            string Keyvalue = "";
            XmlDocument XmlDoc = new XmlDocument();
            XmlDoc.Load(AppDomain.CurrentDomain.BaseDirectory + "App.xml");
            foreach (XmlElement xElement in XmlDoc.DocumentElement)
            {
                if (xElement.Name == "appSettings")
                {
                    foreach (XmlNode xNode in xElement.ChildNodes)
                    {
                        if (xNode.Attributes[0].Value == KeyName)
                            Keyvalue = xNode.Attributes[1].Value.ToString();
                    }
                }
            }
            return Keyvalue;
        }

        public static string GetSQLConection()
        {
            string Strconn = "";
            if (getAppSettings_("Authentic") == "false")
                Strconn = "Data Source=" + getAppSettings_("SQLServer") + ";Initial Catalog=" + getAppSettings_("Database") + ";Integrated Security=true;Pooling=false";
            else
                Strconn = "Data Source=" + getAppSettings_("SQLServer") + ";Initial Catalog=" + getAppSettings_("Database") + ";Persist Security Info=True;User ID=" + getAppSettings_("SQLUserId") + ";Password=" + getAppSettings_("SQLPassword");
            return Strconn;
        }
    }
}
