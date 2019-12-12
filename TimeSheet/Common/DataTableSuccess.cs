using System.Collections.Generic;
using System.Data;


namespace TimeSheet
{
    public class DataTableSuccess
    {
        public string status { get; set; }
        public string message { get; set; }
        public DataTable details { get; set; }
    }
    public class LoginDataTableSuccess
    {
        public string status { get; set; }
        public string message { get; set; }
        public int day { get; set; }
        public int hour { get; set; }
        public DataTable details { get; set; }
    }
}

