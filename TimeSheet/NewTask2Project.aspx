<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="NewTask2Project.aspx.cs" Inherits="TimeSheet.NewTask2Project" %>

<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | New Task To Project</title>
    <!-- Compressed Vendor BUNDLE
    Includes vendor (3rd party) styling such as the customized Bootstrap and other 3rd party libraries used for the current theme/module -->
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
    <link href="bootstrap-datetimepicker/css/datetimepicker.css" rel="stylesheet" />

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
                    <a href="NewTask2Project.aspx" class="navbar-brand hidden-xs navbar-brand-primary">
                        <img src="admin/images/tech_v-Logo_colo5r.png" alt="techvLogo"/>

                    </a>
                </div>
                <div class="navbar-collapse collapse" id="collapse">
                   
                    <ul class="nav navbar-nav navbar-right">
                   <%--     <!-- notifications -->
                        <li class="dropdown notifications updates hidden-xs hidden-sm">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-bell-o"></i>
                                <!--     <span class="badge badge-primary"></span>-->
                            </a>

                        </li>
                        <!-- // END notifications -->
                        <!-- messages -->
                       <li class="dropdown notifications hidden-xs hidden-sm">
                            <a href="#showImageModal" data-toggle="modal" data-toggle="dropdown">
                                <i class="fa fa-envelope-o"></i>
                                <!--      <span class="badge floating badge-danger">12</span>-->
                            </a>

                        </li>
                        <!-- // END messages -->
                        <!-- user -->--%>
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
                                        <h2 align="center">ADD NEW TASK</h2>
                                    </div>
                                    
                                    <hr />
                                  
                                    <form>
                                     
                                   

                                        
                                          


                                        <div class="col-md-6 col-md-offset-3" >

                                          <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Project</label><font color="red" size="4px"><b> &nbsp;&nbsp;* </b></font><br />
                                        <select class="form-control input-alt" name="ddlProject" id="ddlProject">
                                        <option value="">Choose Project</option>
                                    </select>

                                      </fieldset>
                                      </section>

                                          
                                            </div>

                                        <div class="col-md-6 col-md-offset-3" >

                                          <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">New Task</label><font color="red" size="4px"><b> &nbsp;&nbsp;* </b></font><br />
                                        <input type="text" class="form-control" id="txtTask"  />
                                      </fieldset>
                                      </section>

                                      
                                            </div>
                                         
                                        
                                      
                <div class="col-md-6 col-md-offset-3" >

                                          <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Activity Code</label><font color="red" size="4px"><b> &nbsp;&nbsp;* </b></font><br />
                                        <input type="text" class="form-control" id="txtWBS"  />
                                      </fieldset>
                                      </section>

                                      
                                            </div>
                                       


                                         <span class="clearfix"></span>
                                      <hr />
                                      <div style="padding:15px;" class="col-md-6 col-md-offset-3  text-center" >
                                          <section class="btn-group pull-left">
                 
                                               <button type="button" class="btn btn-danger b.tn-lg" id="btnCancel">Cancel</button> 
                                               <button type="button" class="btn btn-default bt.n-lg" id="btnSubmit">Submit</button> 
                                              
                                               
                 
                                         </section>
                                          
                                      </div>
                                        <span class="clearfix"></span>
                                     </form>
                                    </div>
                                     <div class="item col-md-12 col-sm-12 col-xs-12">
                                <!-- Leaderboard -->
                               
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
    <script src="admin/js/vendor-tables.min.js"></script>
    <script src="admin/js/vendor-forms.min.js"></script>

  
     <script src="admin/js/jquery.js"></script>
    <script src="pagescripts/NewTask2Project.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="alert/js/alert.min.js"></script>
    <script src="bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
    

</body>
</html>




