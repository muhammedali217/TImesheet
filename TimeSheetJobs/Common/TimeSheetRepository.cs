using System;
using System.Data;

namespace TimeSheetJobs
{
    public class TimeSheetRepository
    {        
        public DataTable DownloadTimeSheet()
        {
            try
            {
                return SQLHelper.ExecuteDataset("TimeSheet_DownloadThisWeek").Tables[2];     
            }
            catch 
            {
                return null;
            }
        }        
    }
}