using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace AccessConroldataimport
{
    public class AccessDataRepository
    {

        public string Importalldata()
        {
            try
            {
                //return SQLHelper.ExecuteDataset("SP_ImportAccessdata").Tables[0].Rows[0][0].ToString();
                DataSet sampleds = new DataSet();
            sampleds = getAccessDetails();

           
            
            if (sampleds != null && sampleds.Tables[0] != null && sampleds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in sampleds.Tables[0].Rows)
                //for(int i=0;i< sampleds.Tables[0].Rows.Count;i++)
                {
                    List<SqlParameter> cmdParams = new List<SqlParameter>();

                    foreach (DataColumn c in dr.Table.Columns)  //loop through the columns. 
                    {
                        cmdParams.Add(new SqlParameter(c.ColumnName, dr[c.ColumnName].ToString()));
                    }


                    SqlParameter[] cmdParamArray = cmdParams.ToArray();

                    SQLHelper.ExecuteNonQuery("ImprtAccessData", cmdParamArray);
                        string employeeId = "";
                        employeeId = dr["EmployeeId"].ToString();
                        string attid= dr["AttendanceLogId"].ToString();
                        TimeSpan totdiff = TimeSpan.Parse("00:00:00");
                        //----------------------------------------------------------------------
                        if (dr["Status"].ToString() != "Absent")
                        { 
                            string punchrecords = dr["PunchRecords"].ToString().Remove(dr["PunchRecords"].ToString().Length - 1);
                    string[] Tms = punchrecords.Split(',');
                    string intime = "";
                    string outtime = "";
                    //DateTime a = new DateTime(2010, 05, 12, 13, 15, 00);
                   
                    for (int i = 0; i < Tms.Length; i++)
                    {
                        
                            if(Tms[i].Length== 13)
                            {
                            outtime = Tms[i].Remove(Tms[i].Length - 5);

                            if(intime !="")
                            {
                                DateTime dateOne = DateTime.ParseExact(intime, "H:mm:ss", null, System.Globalization.DateTimeStyles.None); 
                                DateTime datetwo = DateTime.ParseExact(outtime, "H:mm:ss", null, System.Globalization.DateTimeStyles.None); 
                                var diff = datetwo.Subtract(dateOne);
                                TimeSpan difftime = TimeSpan.Parse(diff.ToString());
                                totdiff = totdiff + difftime;
                            }
                            intime = "";
                            }
                        else
                            {
                            intime= Tms[i].Remove(Tms[i].Length - 4);
                            outtime = "";

                        }
                   


                    }
                        }
                        //-----------------------------------------------------------------

                        List<SqlParameter> cmdParamsact = new List<SqlParameter>();

                        cmdParamsact.Add(new SqlParameter("EmployeeId", employeeId));
                        cmdParamsact.Add(new SqlParameter("attid", attid));
                       
                            cmdParamsact.Add(new SqlParameter("ActualHours", totdiff.ToString()));

                       
                        SqlParameter[] cmdParamArrayAct = cmdParamsact.ToArray();
                        SQLHelper.ExecuteNonQuery("UpdateActualHours", cmdParamArrayAct);
                        string ss = totdiff.ToString();
                    //string[] tokens = str.Split(',');

                }

            }
            




            return "success";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

        }

        public DataSet getAccessDetails()
        {
            DataSet accdatadet = new DataSet();

            accdatadet= SQLHelper.ExecuteDatasetacc("Instaccess");

            return accdatadet;



        }
    }
}
