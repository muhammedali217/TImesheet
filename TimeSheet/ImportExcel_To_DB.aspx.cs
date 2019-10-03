using System;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.OleDb;
using System.Data.Common; 

namespace TimeSheet
{
    public partial class ImportExcel_To_DB : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
               // BindGridview();
            }  
        }

        private void BindGridview()
        {
            using (SqlConnection con = new SqlConnection(@"Data Source=192.168.137.1;Initial Catalog=tango2;User Id=sa;Password=password#123"))
            {
                SqlCommand cmd = new SqlCommand("Testing_Get_Allvalues", con);
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                GridView1.DataSource = cmd.ExecuteReader();
                GridView1.DataBind();
            }
        }  

        protected void btnUpload_Click(object sender, EventArgs e)
        {
            if (FileUpload1.PostedFile != null)
            {
                try
                {
                    string filename = FileUpload1.PostedFile.FileName.ToString();
                    string path = string.Concat(Server.MapPath("~/UploadFile/" + FileUpload1.FileName));
                    string path_1 = string.Format("{0}{1}", AppDomain.CurrentDomain.BaseDirectory, "UploadFile\\");
                    FileUpload1.SaveAs(path);
                    // Connection String to Excel Workbook  
                    //string excelCS = string.Format("Provider=Microsoft.ACE.OLEDB.12.0;Data Source={0};Extended Properties=Excel 8.0", path);
                    string excelCS = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + path_1 + ";Extended Properties='text;HDR=Yes;FMT=Delimited(,)';";
                    using (OleDbConnection con = new OleDbConnection(excelCS))
                    {
                        OleDbCommand cmd = new OleDbCommand("select * from ["+filename+"]", con);
                        con.Open();
                        // Create DbDataReader to Data Worksheet  
                        DbDataReader dr = cmd.ExecuteReader();                      
                        // Bulk Copy to SQL Server   
                        SqlBulkCopy bulkInsert = new SqlBulkCopy(@"Data Source=192.168.137.1;Initial Catalog=tango2;User Id=sa;Password=password#123");
                        bulkInsert.DestinationTableName = "MemberLogin_Test";
                        bulkInsert.WriteToServer(dr);
                       // BindGridview();
                        lblMessage.Text = "Your file uploaded successfully";
                        lblMessage.ForeColor = System.Drawing.Color.Green;
                    }
                }
                catch (Exception)
                {
                    lblMessage.Text = "Your file not uploaded";
                    lblMessage.ForeColor = System.Drawing.Color.Red;
                }
            }  
        }
    }
}