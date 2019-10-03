using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TimeSheet
{
    public partial class uploadknwldgedoc : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //TextBox2.Text = DateTime.Today.AddDays(-7).ToString("yyyy/mm/dd");
        }

        //protected void btnUpload_Click(object sender, EventArgs e)
        //{
        //     //var d=ddlCustomers.SelectedItem+".txt";
        //    //string fileName = Path.GetFileName(FileUpload1.PostedFile.FileName);
        //    //FileUpload1.PostedFile.SaveAs(Server.MapPath("~/KnowledgeCenter/") + d);
        //    //Response.Redirect(Request.Url.AbsoluteUri);
        //   var NameOftheFile= FileUpload1.PostedFile.FileName.ToString();
        //   // string uploadFolder = Request.PhysicalApplicationPath + "KnowledgeCenter\\";
        //    if (FileUpload1.HasFile)
        //    {
        //        string extension = Path.GetExtension(FileUpload1.PostedFile.FileName);
        //        //Server.MapPath("~/KnowledgeCenter/") + d);
        //        FileUpload1.PostedFile.SaveAs(Server.MapPath("~/KnowledgeCenter/") + NameOftheFile);
        //        //FileUpload1.SaveAs(uploadFolder + EmployeeName + extension);
        //        InsertData();
        //    }
        //    else
        //    {
        //       // Label1.Text = "First select a file.";
        //    }
        //}
       

        //public string InsertData(){
        //    String strConnString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        //    SqlConnection con = new SqlConnection(strConnString);
        //    SqlCommand cmd = new SqlCommand();
        //    cmd.CommandType = CommandType.StoredProcedure;
        //    cmd.CommandText = "KnwldgeCenter_UploadDoc";
        //    cmd.Parameters.Add("@KnwldgeCenter_Topic", SqlDbType.VarChar).Value = txtTopic.Text.Trim();
        //    cmd.Parameters.Add("@KnwldgeCenter_SessionOn", SqlDbType.Date).Value = txtSessionDate.Text.Trim();
        //    cmd.Parameters.Add("@KnwldgeCenter_FileName", SqlDbType.VarChar).Value = FileUpload1.PostedFile.FileName.ToString();
        //    cmd.Parameters.Add("@Status", SqlDbType.VarChar, 500);
        //    cmd.Parameters["@Status"].Direction = ParameterDirection.Output;
        //    cmd.Connection = con;
        //    try
        //    {
        //        con.Open();
        //        cmd.ExecuteNonQuery();
                
        //    }
            
                
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //    //Console.Write(cmd.Parameters["@Status"].Value.ToString());
           
        //    return "Inserted";
        //}

       
    }
}