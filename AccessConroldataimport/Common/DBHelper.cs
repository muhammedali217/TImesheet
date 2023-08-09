using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace AccessConroldataimport
{
    public sealed class DBHelper
    {
        #region Utility Methods & Constructors
        public DBHelper()
        {

        }

        public static string GetConnection()
        {
            return XmlConec.GetESSLDbConnection();
        }

        ~DBHelper()
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
    }
}
