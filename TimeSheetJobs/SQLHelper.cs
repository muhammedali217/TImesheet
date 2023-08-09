using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeSheetJobs
{
    public sealed class SQLHelper
    {
        #region Utility Methods & Constructors
        public SQLHelper()
        {

        }

        public static string GetConnection()
        {
            return XmlConec.GetSQLConection();
        }
        public static string GetConnectionofSmartDB()
        {
            return XmlConec.GetSQLConectionusingSmartDB();
        }

        ~SQLHelper()
        {
        }

        public static void PrepareCommand(SqlConnection techvSqlConnection, SqlCommand techvSqlCommand, string commandText, SqlParameter[] cmdParams)
        {
            techvSqlCommand.Connection = techvSqlConnection;
            techvSqlCommand.CommandText = commandText;

            techvSqlCommand.CommandType = CommandType.StoredProcedure;
            if (cmdParams != null)
            {
                foreach (SqlParameter p in cmdParams)
                {
                    if (p != null)
                    {
                        // Check for derived output value with no value assigned
                        if ((p.Direction == ParameterDirection.InputOutput || p.Direction == ParameterDirection.Input) && (p.Value == null))
                            p.Value = DBNull.Value;
                        techvSqlCommand.Parameters.Add(p);
                    }
                }
            }
        }
        #endregion

        #region ExecuteNonQuery
        public static int ExecuteNonQuery(string commandText)
        {
            return ExecuteNonQuery(commandText, (SqlParameter[])null);
        }

        public static int ExecuteNonQuery(string commandText, params SqlParameter[] cmdParams)
        {
            SqlCommand techvSqlCommand = new SqlCommand();
            SqlConnection techvSqlConnection = new SqlConnection(GetConnection());
            techvSqlConnection.Open();
            PrepareCommand(techvSqlConnection, techvSqlCommand, commandText, cmdParams);
            int retval = techvSqlCommand.ExecuteNonQuery();
            techvSqlConnection.Close();
            techvSqlConnection.Dispose();
            techvSqlCommand.Parameters.Clear();
            techvSqlCommand.Dispose();
            return retval;
        }
        #endregion

        #region ExecuteDataset
        public static DataSet ExecuteDatasetUsingSmartdb(string commandText, params SqlParameter[] cmdParams)
        {
            return ExecuteDatasetUsingSmartDB(commandText, cmdParams);
        }
        public static DataSet ExecuteDataset(string commandText)
        {
            return ExecuteDataset(commandText, (SqlParameter[])null);
        }

        public static DataSet ExecuteDataset(string commandText, params SqlParameter[] cmdParams)
        {
            SqlCommand techvSqlCommand = new SqlCommand();
            SqlConnection techvSqlConnection = new SqlConnection(GetConnection());
            PrepareCommand(techvSqlConnection, techvSqlCommand, commandText, cmdParams);
            DataSet techvDataSet;
            using (SqlDataAdapter da = new SqlDataAdapter(techvSqlCommand))
            {
                techvDataSet = new DataSet();
                da.Fill(techvDataSet);
                techvSqlCommand.Parameters.Clear();
            }
            techvSqlConnection.Dispose();
            return techvDataSet;
        }
        #endregion
        public static DataSet ExecuteDatasetUsingSmartDB(string commandText, params SqlParameter[] cmdParams)
        {
            SqlCommand techvSqlCommand = new SqlCommand();
            SqlConnection techvSqlConnection = new SqlConnection(GetConnectionofSmartDB());
            PrepareCommand(techvSqlConnection, techvSqlCommand, commandText, cmdParams);
            DataSet techvDataSet;
            using (SqlDataAdapter da = new SqlDataAdapter(techvSqlCommand))
            {
                techvDataSet = new DataSet();
                da.Fill(techvDataSet);
                techvSqlCommand.Parameters.Clear();
            }
            techvSqlConnection.Dispose();
            return techvDataSet;
        }
        public static string BulkInsert(string strTableName, DataTable dtBulkValues)
        {
            string strResult = String.Empty;
            try
            {
                SqlConnection sqlconn = new SqlConnection(GetConnection());
                sqlconn.Open();
                //series of commands to bulk copy data from the excel file into our sql table            
                SqlBulkCopy bulkcopy = new SqlBulkCopy(sqlconn);
                bulkcopy.DestinationTableName = strTableName;
                if (dtBulkValues.Rows.Count != 0)
                {
                    bulkcopy.WriteToServer(dtBulkValues);
                    DataSet dsResult = ExecuteDataset("Contacts_ImportBulkValue");
                    strResult = Convert.ToString(dsResult.Tables[0].Rows[0][0]) + ":" + Convert.ToString(dsResult.Tables[0].Rows[0][1]);

                }
                else
                {
                    strResult = "Failed";
                }
                dtBulkValues.Dispose();
                sqlconn.Close();
                return strResult;

            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
