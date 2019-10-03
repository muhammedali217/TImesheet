using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace TimeSheet
{
    public sealed class SQLHelper
    {
        #region Utility Methods & Constructors
        public SQLHelper()
        {

        }

        public static string GetConnection()
        {
            string strCon = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
            return strCon;
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

        #region ExecuteGridData
        public static GridData GridData(string commandText)
        {
            return GridData(commandText, 0);
        }

        public static GridData GridData(string commandText, params SqlParameter[] cmdParams)
        {
            return GridData(commandText, 0, cmdParams);
        }

        public static GridData GridData(string commandText, int nTableNo)
        {
            return GridData(commandText, nTableNo, (SqlParameter[])null);
        }

        public static GridData GridData(string commandText, int nTableNo, params SqlParameter[] cmdParams)
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

            List<GridRow> oListGridRow = new List<GridRow>();
            GridData oGridData = new GridData();

            List<string> mylist = null;
            if (techvDataSet.Tables[nTableNo].Rows.Count != 0)
            {
                foreach (DataRow row in techvDataSet.Tables[nTableNo].Rows)
                {
                    mylist = new List<string>();

                    //To list all columns
                    foreach (DataColumn col in techvDataSet.Tables[nTableNo].Columns)
                        mylist.Add(Convert.ToString(row[col]));

                    oListGridRow.Add(new GridRow
                    {
                        cell = mylist
                    });
                }
                oGridData.rows = oListGridRow;
            }
            return oGridData;
        }
        #endregion

        #region ExecuteDropDownData
        public static List<DropDownData> DropDownData(string commandText)
        {
            return DropDownData(commandText, 0);
        }

        public static List<DropDownData> DropDownData(string commandText, params SqlParameter[] cmdParams)
        {
            return DropDownData(commandText, 0, cmdParams);
        }

        public static List<DropDownData> DropDownData(string commandText, int nTableNo)
        {
            return DropDownData(commandText, nTableNo, (SqlParameter[])null);
        }

        public static List<DropDownData> DropDownData(string commandText, int nTableNo, params SqlParameter[] cmdParams)
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

            List<DropDownData> oListDropDown = new List<DropDownData>();

            if (techvDataSet.Tables[nTableNo].Rows.Count != 0)
            {
                foreach (DataRow row in techvDataSet.Tables[nTableNo].Rows)
                    oListDropDown.Add(new DropDownData { ValueMember = Convert.ToInt32(row[0]), DisplayMember = Convert.ToString(row[1]) });
            }
            return oListDropDown;
        }
        #endregion

        #region ExecuteStringArray
        public static string[] SingleRowOfDataTableToArray(string commandText)
        {
            return SingleRowOfDataTableToArray(commandText, 0);
        }

        public static string[] SingleRowOfDataTableToArray(string commandText, params SqlParameter[] cmdParams)
        {
            return SingleRowOfDataTableToArray(commandText, 0, cmdParams);
        }

        public static string[] SingleRowOfDataTableToArray(string commandText, int nTableNo)
        {
            return SingleRowOfDataTableToArray(commandText, nTableNo, (SqlParameter[])null);
        }

        public static string[] SingleRowOfDataTableToArray(string commandText, int nTableNo, params SqlParameter[] cmdParams)
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

            string[] strReturn = null;
            if (techvDataSet.Tables[nTableNo].Rows.Count != 0)
            {
                int i = 0;
                strReturn = new string[techvDataSet.Tables[nTableNo].Columns.Count];
                foreach (DataRow row in techvDataSet.Tables[nTableNo].Rows)
                {
                    //To list all columns
                    foreach (DataColumn col in techvDataSet.Tables[nTableNo].Columns)
                    {
                        strReturn[i] = Convert.ToString(row[col]);
                        i = i + 1;
                    }
                }
            }
            return strReturn;
        }
        #endregion
    }
}