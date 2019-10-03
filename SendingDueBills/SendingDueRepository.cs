using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace SendingDueBills
{
    public class SendingDueRepository
    {
        
        public DataTable DownloadDueBills()
        {
            try
            {

                return SQLHelper.ExecuteDataset("BillingInfo_SendThisWeekDues").Tables[2];     
            }
            catch 
            {
                return null;
            }
        }
        
        public DataTable DownloadDueBillsResult()
        {
            try
            {
                return SQLHelper.ExecuteDataset("BillingInfo_SendThisWeekDues").Tables[0];
            }
            catch 
            {
                return null;
            }
        }
    }
}


