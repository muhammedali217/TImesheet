﻿using System;
using System.Data;

namespace TimeSheetJobs
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


