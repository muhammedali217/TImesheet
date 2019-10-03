using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace TimeSheetDownloading
{
    public class TimeSheetRepository
    {
        
        public DataTable DownloadTimeSheet()
        {
            try
            {

                return SQLHelper.ExecuteDataset("TimeSheet_DownloadThisWeek").Tables[2];     
            }
            catch (Exception e)
            {
                return null;
            }
        }

        
    }
}