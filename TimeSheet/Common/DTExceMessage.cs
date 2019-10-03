using System.Data;
using System.Data.SqlClient;

namespace TimeSheet
{
    public static class DTExceMessage
    {
        public static DataTable ReturnDTException(SqlException sqExMe)
        {
            DataTable dtException = new DataTable();
            dtException.Clear();
            dtException.Columns.Add("Exception");
            DataRow drException = dtException.NewRow();
            drException["Exception"] = sqExMe.Message;
            dtException.Rows.Add(drException);
            return dtException;
        }

        public static DataSet ReturnDSException(SqlException sqExMe)
        {
            DataSet dsException = new DataSet();
            DataTable dtException = new DataTable();
            dtException.Clear();
            dtException.Columns.Add("Exception");
            DataRow drException = dtException.NewRow();
            drException["Exception"] = sqExMe.Message;
            dtException.Rows.Add(drException);
            dsException.Tables.Add(dtException);
            return dsException;
        }
    }
}