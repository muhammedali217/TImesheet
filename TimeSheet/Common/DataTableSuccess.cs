﻿using System.Collections.Generic;
using System.Data;


namespace TimeSheet
{
    public class DataTableSuccess
    {
        public string status { get; set; }
        public string message { get; set; }
        public DataTable details { get; set; }
    }
}

