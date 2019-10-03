using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;

namespace TimeSheet
{
    public partial class uploadjobdesc : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Label1.Visible = false;
            if (!this.IsPostBack)
            {
                string constr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
                using (SqlConnection con = new SqlConnection(constr))
                {
                    using (SqlCommand cmd = new SqlCommand("SELECT	Employee_ID,Employee_FirstName FROM	Employee where Employee_FirstName IS NOT NULL AND Employee_FirstName<>'' AND Employee_Type='Employee' AND  Employee_Active='YES' order by Employee_ID  "))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Connection = con;
                        con.Open();
                        ddlCustomers.DataSource = cmd.ExecuteReader();
                        ddlCustomers.DataTextField = "Employee_FirstName";
                        ddlCustomers.DataValueField = "Employee_ID";
                        ddlCustomers.DataBind();
                        con.Close();
                    }
                }
                ddlCustomers.Items.Insert(0, new ListItem("--Select Employee--", "0"));
            }
        }
        protected void UploadFile(object sender, EventArgs e)
        {
            //var d=ddlCustomers.SelectedItem+".txt";
            //string fileName = Path.GetFileName(FileUpload1.PostedFile.FileName);
            //FileUpload1.PostedFile.SaveAs(Server.MapPath("~/KnowledgeCenter/") + d);
            //Response.Redirect(Request.Url.AbsoluteUri);
            var EmployeeName = ddlCustomers.SelectedItem;
           // string uploadFolder = Request.PhysicalApplicationPath + "KnowledgeCenter\\";
            if (FileUpload1.HasFile)
            {
                string extension = Path.GetExtension(FileUpload1.PostedFile.FileName);
                //Server.MapPath("~/KnowledgeCenter/") + d);
                FileUpload1.PostedFile.SaveAs(Server.MapPath("~/KnowledgeCenter/") + EmployeeName + extension);
                //FileUpload1.SaveAs(uploadFolder + EmployeeName + extension);
                Label1.Visible = true;
                Label1.Text = "File uploaded successfully as: " + EmployeeName + extension;
            }
            else
            {
               // Label1.Text = "First select a file.";
            }
        }
    }
    
}
