<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EmpAdd.aspx.cs" Inherits="TimeSheet.EmpAdd" %>

<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Employee Add</title>    
    <link href="admin/css/vendor.min.css" rel="stylesheet">
    <link href="admin/css/theme-core.min.css" rel="stylesheet">
    <link href="admin/css/module-essentials.min.css" rel="stylesheet" />
    <link href="admin/css/module-layout.min.css" rel="stylesheet" />
    <link href="admin/css/module-sidebar.min.css" rel="stylesheet" />
    <link href="admin/css/module-sidebar-skins.min.css" rel="stylesheet" />
    <link href="admin/css/module-navbar.min.css" rel="stylesheet" />
    <link href="admin/css/module-media.min.css" rel="stylesheet" />
    <link href="admin/css/module-timeline.min.css" rel="stylesheet" />
    <link href="admin/css/custom.css" rel="stylesheet" />
    <link href="alert/css/alert.min.css" rel="stylesheet" />    
    <link href="alert/themes/default/theme.min.css" rel="stylesheet" />
    <link href="admin/plugins/DataTables-1.10.4/media/DT_bootstrap.css" rel="stylesheet" />
    <!--Extra Code-->
    <style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
}

h1 {
  text-align: center;  
}

input {
  padding: 10px;
  width: 500px;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}
select{
    padding: 10px;
  width: 500px;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}
 textarea{
    padding: 10px;
  width: 500px;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
        }

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
.tab {
  display: none;
}

button {
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

#prevBtn {
  background-color: #bbbbbb;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4CAF50;
}
</style>

    <!---->

    <style type="text/css">
#EmployeeAddForm .tab-content {
    margin-top: 20px;
}
</style>

</head>
    <style>
        .navbar-brand.navbar-brand-primary, .navbar-brand.navbar-brand-primary:hover
        {
            background-color: #FFF ;
        }
        .sidebar-menu li ul li a
    {
        line-height:38px;
        font-size:13px;
        color:#333;
    }

  .sidebar-menu li a:hover {
    font-size: 13px;
    background-color: #138C90;
}

  .sidebar.sidebar-skin-blue .sidebar-menu.sm-icons-block li.active  a i {
    color: greenyellow;
    background-color: black;
}
    </style>
<body id="viewEmployee">
    <!-- Wrapper required for sidebar transitions -->
    <div class="st-container">
        <!-- Fixed navbar -->
        <div class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="#sidebar-menu" data-toggle="sidebar-menu" data-effect="st-effect-3" class="toggle pull-left visible-xs"><i class="fa fa-bars"></i></a>

                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand hidden-xs navbar-brand-primary">
                        <img src="admin/images/tech_v-Logo_colo5r.png" alt="techvLogo"/>

                    </a>
                </div>
                <div class="navbar-collapse collapse" id="collapse">                    
                    <ul class="nav navbar-nav navbar-right">                       
                        <li class="dropdown user">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="admin/images/administrator1.png" class="img-circle" />
                                Admin<span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu">

                                <li><a href="login.html" id="btnLogout"><i class="fa fa-sign-out"></i>Logout</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </div>



        <div class="st-pusher">
            <!-- Sidebar component with st-effect-3 (set on the toggle button within the navbar) -->
            <div class="sidebar left sidebar-size-2 sidebar-offset-0 sidebar-skin-blue sidebar-visible-desktop" id="sidebar-menu" data-type="collapse">
                <div class="split-vertical">
                    <div class="sidebar-block tabbable tabs-icons">
                        <ul class="nav nav-tabs">
                        </ul>
                    </div>
                    <div class="split-vertical-body">
                        <div class="split-vertical-cell">
                            <div class="tab-content">
                                <div class="tab-pane active" id="sidebar-tabs-menu">
                                    <div>
                                       <ul class="sidebar-menu sm-icons-right sm-icons-block">

                                            <li class="active">
                                                <a class="" href="#nav-Employee" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-users"></i>
                                                    <span>Employee</span>
                                                </a>
                                                <ul class="collapse" id="nav-Employee" aria-expanded="true" style="">
                                                    <li>
                                                        <a href="EmpAdd.aspx">
                                      
                                                            <span>Add Employee</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="ViewAllEmployee.aspx">
                                                           
                                                            <span>View Employee</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>                                           
                                        </ul>
                                                                                                                        
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">

                                            <li class="active">
                                                <a class="" href="#nav-Project" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-tasks"></i>
                                                    <span>Projects</span>
                                                </a>
                                                <ul id="nav-Project" class="collapse" aria-expanded="true" style="">
                                                    <li>
                                                        <a href="ProjectAdd.aspx">
                                      
                                                            <span>Add Project</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="viewallproject.aspx">
                                                            
                                                            <span>View Project</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="viewprojecttasks.aspx">
                                                            
                                                            <span>View Project Tasks</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="addprojecttask.aspx">
                                                            
                                                            <span>Assign Tasks</span>
                                                        </a>
                                                    </li>
                                                     <li>
                                                        <a href="NewTask2Project.aspx">
                                                            
                                                            <span>New Tasks</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                          </ul>

                                         <ul class="sidebar-menu sm-icons-right sm-icons-block">

                                            <li class="active">
                                                <a class="" href="#nav-AssignProject" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-th-large"></i>
                                                    <span>Assign Projects</span>
                                                </a>
                                                <ul id="nav-AssignProject" class="collapse" aria-expanded="true" style="">
                                                    <li>
                                                        <a href="AssignProject.aspx">
                                                           
                                                            <span>Assign Project</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="AssignSubTasks.aspx">
                                                            
                                                            <span>Assign Tasks</span>
                                                        </a>
                                                    </li>
                                                   <li>
                                                        <a href="viewprojectemployee.aspx">
                                                            
                                                            <span>Project & Employee</span>
                                                        </a>
                                                    </li>  
                                                   
                                                </ul>
                                            </li>                                           
                                        </ul>

                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">

                                            <li class="active">
                                                <a class="" href="#nav-Requests" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-thumb-tack"></i>
                                                    <span>Requests</span>
                                                </a>
                                                <ul id="nav-Requests" class="collapse" aria-expanded="true" style="">
                                                    <li>
                                                        <a href="Admin_LeaveMgt.aspx">
                                                            
                                                            <span>Leave Requests</span>
                                                        </a>
                                                    </li>
                                                    
                                                    <li>
                                                        <a href="ViewTimeSheet.aspx">
                                                            
                                                            <span>Time Sheet</span>
                                                        </a>
                                                    </li>
                                                     <li>
                                                         <a href="viewrequests.aspx">
                                                            
                                                            <span>Others</span>
                                                        </a>
                                                    </li>  
                                                   
                                                </ul>
                                            </li>

                                           
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="holidaycalender.aspx"><i class="fa fa-calendar"></i><span>Holiday Calender</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="viewattendance.aspx"><i class="fa-bar-chart"></i><span>Attendance</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="AdminChangePassword.aspx"><i class="fa fa-lock"></i><span>Change Password</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="viewtechvasset.aspx"><i class="fa fa-desktop"></i><span>Assets List</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="uploadjobdesc.aspx"><i class="fa fa-book"></i><span>Upload JD</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">

                                            <li class="active">
                                                <a class="" href="#nav-Accounts" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-inr"></i>
                                                    <span>Accounts</span>
                                                </a>
                                                <ul id="nav-Accounts" class="collapse" aria-expanded="true" style="">
                                                    <li>
                                                        <a href="billadd.aspx">

                                                            <span>Add Bill Details</span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="viewallbills.aspx">

                                                            <span>View Bills</span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="billreports.aspx">

                                                            <span>Bills Report</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="uploadknwldgedoc.aspx"><i class="fa fa-file"></i><span>Upload Knowledge Doc</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                       
                                        
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block" id="leavesidebar">

                                            <li class="active">
                                                <a class="" href="#nav-Leave" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-bed"></i>
                                                    <span>Leave Details</span>
                                                </a>
                                                <ul id="nav-Leave" class="collapse" aria-expanded="true" style="">
                                                    <li>
                                                        <a href="viewapprovedleaves.aspx">

                                                            <span>Leave Reports</span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="lopdetails.aspx">

                                                            <span>LOP Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="leavedashboard.aspx">

                                                            <span>Employee Leave Details</span>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- // END .tab-pane -->

                            </div>
                            <!-- // END .tab-content -->
                        </div>
                        <!-- // END .split-vertical-cell -->
                    </div>
                    <!-- // END .split-vertical-body -->

                </div>
            </div>
            <!-- sidebar effects INSIDE of st-pusher: -->
            <!-- st-effect-3, st-effect-6, st-effect-7, st-effect-8, st-effect-14 -->
            <!-- this is the wrapper for the content -->
           <div class="st-content" id="content">
                <!-- extra div for emulating position:fixed of the menu -->
                <div class="st-content-inner">
                    <div class="container-fluid">

                        <div class="row" data-toggle="isotope">
                            <div class="item col-md-12 col-sm-12 col-xs-12">
                                <!-- Leaderboard -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h2 align="center">ADD EMPLOYEE</h2>
                                    </div>
                                    <hr />
                                    <form id="EmployeeAddForm" class="form-horizontal">
                             <div class="tab" align="center" id="tab1"> <h4 align="center">Official Details</h4>
                             <p><input placeholder="Employee Name...(Eg:Firstname,Lastname)" id="txtEmpName" oninput="this.className = ''" name="name"></p>
                            <p><select id="ddlEmpStatus" name="ddlEmpStatus">                                              
                                <option>Select the Employee Status</option>              
                                <option>Permanent</option>
                                 <option>Temporary</option>
                               </select></p>
                            <p><input placeholder="Employee Code..." id="txtEmpCode" oninput="this.className = ''" name="Code" readonly="readonly"></p>
                             <p><select id="ddlGener" name="ddlGener">                                              
                                <option>Select the Gender</option>              
                                <option>Male</option>
                                 <option>Female</option>
                                 </select></p>
                            <p><input placeholder="Designation..." id="txtdesig" oninput="this.className = ''" name="designation"></p>
                            <p><input placeholder="Date Of Joining..." id="txtDOJ" oninput="this.className = ''" name="DOJ"></p>
                            <p><input placeholder="Date Of Birth..." id="txtDOB" oninput="this.className = ''" name="DOB"></p>
                            <p><input placeholder="Qualification..." id="txtqual" oninput="this.className = ''" name="quali"></p>
                            <p><input placeholder="Official Mail-ID..." id="txtoff_mail" oninput="this.className = ''" name="offi_mail" required="required" value="@techvantagesystems.com"></p>
                            <p><input placeholder="Personal Mail-ID..." id="txtper_mail" oninput="this.className = ''" name="per_mail" value="@gmail.com"></p>
                            <p><input placeholder="Mobile Number..." id="txtmobile" oninput="this.className = ''" name="mobile"></p>      
                           <button align="right" type="button" id="btnNext1">Next</button>  
                          </div>
                          <div class="col-2 tab" align="center" id="tab2"><h4 align="center">Personal Details</h4>
                              <p><textarea placeholder="Enter the Permanent Address" id="txtperAddress" name="txtAddress" rows="2"></textarea></p>
                              <p><textarea placeholder="Enter the Present Address" id="txtpresent" name="txtAddress" rows="2"></textarea></p>
                            <p><select  id="ddlMarital" name="ddlMarital">
                                   <option value="Select the marital status">Select the marital status</option>                                             
                                  <option value="Married">Married</option>
                                  <option value="Single">Single</option>
                                  <option value="Others">Others</option>
                               </select></p>
                            <p><input placeholder="Spouse Name..." id="txtspouse" oninput="this.className = ''" name="phone"></p>
                              <p><input placeholder="Spouse DOB..." id="txtsDOB" oninput="this.className = ''" name="phone"></p>
                              <p><select  id="ddlKidsCount" name="ddlKidsCount">
                                   <option value="Select the number of Kids">Select the number of Kids</option>                                             
                                   <option value="0">0</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                </select></p>
                              <p><input placeholder="Kid1 Name..." id="txtKid1name" oninput="this.className = ''" name="phone"></p>
                              <p><input placeholder="Kid1 DOB..." id="txtKid1DOB" oninput="this.className = ''" name="phone"></p>
                               <p><input placeholder="Kid2 Name..." id="txtKid2name" oninput="this.className = ''" name="phone"></p>
                              <p><input placeholder="Kid2 DOB..." id="txtKid2DOB" oninput="this.className = ''" name="phone"></p>
                               <p><input placeholder="Kid3 Name..." id="txtKid3name" oninput="this.className = ''" name="phone"></p>
                              <p><input placeholder="Kid3 DOB..." id="txtKid3DOB" oninput="this.className = ''" name="phone"></p>
                              <p><input placeholder="Fathers/Mothers Name..." id="txtparent_name" oninput="this.className = ''" name="phone"></p>
                              <table><tr><td><button align="right" type="button" id="btnPrev1">Previous</button></td><td width="200px"></td>
                                  <td><button align="right" type="button" id="btnNext2">Next</button></td>
                                    </tr></table>                                                       
                          </div>
                       </div>
                          <div class="tab" align="center" id="tab3"><h4 align="center">Contact Details</h4>
                            <p><input placeholder="Emergency Contact Person" id="txtemer_person" oninput="this.className = ''" name="dd">
                                <select id="ddlrelation">
                                    <option>Select the Relationship with the Person</option>
                                    <option>Father</option>
                                    <option>Mother</option>
                                    <option>Spouse</option>
                                    <option>Others</option>
                                </select></p>
                            <p><input placeholder="Enter the relationship" id="txt_emer_others" oninput="this.className = ''" name="dd">
                            <p><input placeholder="Contact Number" id="txtcon_num" oninput="this.className = ''" name="nn"></p>
                            <p><textarea placeholder="Previous Company name With Address" id="txtprev_company" oninput="this.className = ''" name="yyyy"></textarea></p>
                             <p><input placeholder="Referal Contact Person" id="txtref_cont_per" oninput="this.className = ''" name="nn"><input placeholder="Contact Number" id="txtrefnum" oninput="this.className = ''" name="nn"></p>
                              <table><tr>
                                  <td><button align="right" type="button" id="btnPrev2">Previous</button></td><td width="200px"></td>
                                  <td>
                              <button align="right" type="button" id="btnNext3">Next</button></td></tr></table>
                          </div>
                          <div class="tab" align="center" id="tab4"><h4 align="center">Account Details</h4>
                            <p><input placeholder="Bank Name..." id="txtbankname" oninput="this.className = ''" name="uname"></p>
                            <p><input placeholder="Account Number..." id="txtacount_num" oninput="this.className = ''" name="pword"></p>
                            <p><input placeholder="Branch Name..." id="txtbranch_name" oninput="this.className = ''" name="pword"></p>
                            <p><input placeholder="IFSC Code..." id="txtifsc_code" oninput="this.className = ''" name="pword"></p>
                            <p><input placeholder="Blood Group..." id="txtbgroup" oninput="this.className = ''" name="phone"></p>  
                              <p><input placeholder="Pan Number..." id="txtpan_num" oninput="this.className = ''" name="pword"></p>
                              <p><input placeholder="Passport Number..." id="txtpass_num" oninput="this.className = ''" name="pword"></p>
                            <p><input placeholder="Aadhar Number..." id="txtadhar_num" oninput="this.className = ''" name="pword"></p>
                              <p><input placeholder="Asset ID of Desktop/Laptop..." id="txtasset" oninput="this.className = ''" name="mobile"></p>
                            <p><select id="ddlLineManager" name="ddlLineManager">                                              
                                <option>Select Line Managers</option>              
                                <option>Devi</option>
                                 <option>Ravi</option>
                                <option>Smitha</option>
                                <option>Joji</option>
                                <option>Jitesh</option>
                                <option>Aswathy</option>
                                <option>Rahul</option>
                                        </select></p>
                              <table><tr>
                                  <td><button align="right" type="button" id="btnPrev3">Previous</button></td><td width="200px"></td>
                                  <td>
                              <button type="button" id="btnSubmit">Submit</button></td></tr></table>
                          </div>
</form>
                                </div>
                                <!-- // Leaderboard -->
                            </div>
                        </div>

                    </div>
                </div>
                <!-- /st-content-inner -->
            </div>
            <!-- /st-content -->
        </div>
        <!-- /st-pusher -->
        <!-- Footer -->

        <footer class="footer">
          
       
        </footer>
        <!-- // Footer -->
    </div>
    <!-- /st-container -->
    <!-- Modal -->

    <!-- Inline Script for colors and config objects; used by various external scripts; -->
    <script>
        var colors = {
            "danger-color": "#e74c3c",
            "success-color": "#81b53e",
            "warning-color": "#f0ad4e",
            "inverse-color": "#2c3e50",
            "info-color": "#2d7cb5",
            "default-color": "#6e7882",
            "default-light-color": "#cfd9db",
            "purple-color": "#9D8AC7",
            "mustard-color": "#d4d171",
            "lightred-color": "#e15258",
            "body-bg": "#f6f6f6"
        };
        var config = {
            theme: "admin",
            skins: {
                "default": {
                    "primary-color": "#3498db"
                }
            }
        };
    </script>
    <!-- Separate Vendor Script Bundles -->
    <script src="admin/js/vendor-core.min.js"></script>
<%--    <script src="admin/js/vendor-tables.min.js"></script>
    <script src="admin/js/vendor-forms.min.js"></script>--%>

    <!-- <script src="admin/js/vendor-charts-flot.min.js"></script> -->
    <!-- <script src="admin/js/vendor-charts-easy-pie.min.js"></script> -->
    <!-- <script src="admin/js/vendor-charts-morris.min.js"></script> -->
    <!-- <script src="admin/js/vendor-charts-sparkline.min.js"></script> -->

    <!-- <script src="admin/js/vendor-angular.min.js"></script> -->
    <!-- Compressed Vendor Scripts Bundle
    Includes all of the 3rd party JavaScript libraries above.
    The bundle was generated using modern frontend development tools that are provided with the package
    To learn more about the development process, please refer to the documentation.
    Do not use it simultaneously with the separate bundles above. -->
    <!-- <script src="admin/js/vendor-bundle-all.min.js"></script> -->
    <!-- Compressed App Scripts Bundle
    Includes Custom Application JavaScript used for the current theme/module;
    Do not use it simultaneously with the standalone modules below. -->
    <!-- <script src="admin/js/module-bundle-main.min.js"></script> -->
    <!-- Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL the modules are 100% compatible -->

 



    




        <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap-wizard/1.2/jquery.bootstrap.wizard.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
   <%-- <script src="http://formvalidation.io/vendor/formvalidation/js/formValidation.min.js"></script>
<script src="http://formvalidation.io/vendor/formvalidation/js/framework/bootstrap.min.js"></script>--%>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>

    



   <%--<script src= "https://cdn.jsdelivr.net/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"></script>--%>



    <script src="alert/js/alert.min.js"></script>
    <script src="pagescripts/EmpAdd.js"></script>

    <%--<script>
        var currentTab = 0; // Current tab is set to be the first tab (0)
        showTab(currentTab); // Display the crurrent tab

        function showTab(n) {
            // This function will display the specified tab of the form...
            var x = document.getElementsByClassName("tab");
            x[n].style.display = "block";
            //... and fix the Previous/Next buttons:
            if (n == 0) {
                document.getElementById("prevBtn").style.display = "none";
            } else {
                document.getElementById("prevBtn").style.display = "inline";
            }
            if (n == (x.length - 1)) {
                document.getElementById("nextBtn").innerHTML = "Submit";
            } else {
                document.getElementById("nextBtn").innerHTML = "Next";
            }
            //... and run a function that will display the correct step indicator:
            fixStepIndicator(n)
        }

        function nextPrev(n) {
            // This function will figure out which tab to display
            var x = document.getElementsByClassName("tab");
            // Exit the function if any field in the current tab is invalid:
            if (n == 1 && !validateForm()) return false;
            // Hide the current tab:
            x[currentTab].style.display = "none";
            // Increase or decrease the current tab by 1:
            currentTab = currentTab + n;
            // if you have reached the end of the form...
            if (currentTab >= x.length) {
                // ... the form gets submitted:
                var button = document.getElementById('btnAdd');
                button.form.submit();
            }
            // Otherwise, display the correct tab:
            showTab(currentTab);
        }

        function validateForm() {
            // This function deals with validation of the form fields
            var x, y, i, valid = true;
            x = document.getElementsByClassName("tab");
            y = x[currentTab].getElementsByTagName("input");
            // A loop that checks every input field in the current tab:
            for (i = 0; i < y.length; i++) {
                // If a field is empty...
                if (y[i].value == "") {
                    // add an "invalid" class to the field:
                    y[i].className += " invalid";
                    // and set the current valid status to false
                    valid = false;
                }
            }
            // If the valid status is true, mark the step as finished and valid:
            if (valid) {
                document.getElementsByClassName("step")[currentTab].className += " finish";
            }
            return valid; // return the valid status
        }

        function fixStepIndicator(n) {
            // This function removes the "active" class of all steps...
            var i, x = document.getElementsByClassName("step");
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(" active", "");
            }
            //... and adds the "active" class on the current step:
            x[n].className += " active";
        }
</script>--%>

</body>
</html>
