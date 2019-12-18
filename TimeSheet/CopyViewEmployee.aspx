﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CopyViewEmployee.aspx.cs" Inherits="TimeSheet.CopyViewEmployee" %>


<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Employee Details</title>
    <!-- Compressed Vendor BUNDLE
    Includes vendor (3rd party) styling such as the customized Bootstrap and other 3rd party libraries used for the current theme/module -->
    <link href="admin/css/vendor.min.css" rel="stylesheet">
    
    <!-- Compressed Theme BUNDLE
Note: The bundle includes all the custom styling required for the current theme, however
it was tweaked for the current theme/module and does NOT include ALL of the standalone modules;
The bundle was generated using modern frontend development tools that are provided with the package
To learn more about the development process, please refer to the documentation. -->
    <!-- <link href="admin/css/theme.bundle.min.css" rel="stylesheet"> -->
    <!-- Compressed Theme CORE
This variant is to be used when loading the separate styling modules -->
    <link href="admin/css/theme-core.min.css" rel="stylesheet">
    <!-- Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL modules are 100% compatible -->
    <link href="admin/css/module-essentials.min.css" rel="stylesheet" />
    <link href="admin/css/module-layout.min.css" rel="stylesheet" />
    <link href="admin/css/module-sidebar.min.css" rel="stylesheet" />
    <link href="admin/css/module-sidebar-skins.min.css" rel="stylesheet" />
    <link href="admin/css/module-navbar.min.css" rel="stylesheet" />
    <link href="admin/css/module-media.min.css" rel="stylesheet" />
    <link href="admin/css/module-timeline.min.css" rel="stylesheet" />
    <link href="admin/css/custom.css" rel="stylesheet" />
    <!-- <link href="admin/css/module-cover.min.css" rel="stylesheet" /> -->
    <!-- <link href="admin/css/module-colors-alerts.min.css" rel="stylesheet" /> -->
    <!-- <link href="admin/css/module-colors-background.min.css" rel="stylesheet" /> -->
    <!-- <link href="admin/css/module-colors-buttons.min.css" rel="stylesheet" /> -->
    <!-- <link href="admin/css/module-colors-calendar.min.css" rel="stylesheet" /> -->
    <!-- <link href="admin/css/module-colors-progress-bars.min.css" rel="stylesheet" /> -->
    <!-- <link href="admin/css/module-colors-text.min.css" rel="stylesheet" /> -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!-- If you don't need support for Internet Explorer <= 8 you can safely remove these -->
    <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

    <link href="admin/plugins/DataTables-1.10.4/media/DT_bootstrap.css" rel="stylesheet" />

</head>
    <style>
        .navbar-brand.navbar-brand-primary, .navbar-brand.navbar-brand-primary:hover
        {
            background-color: #FFF ;
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
                    <a href="index.html" class="navbar-brand hidden-xs navbar-brand-primary">
                        <%--<img src="web/img/logo1.png" style="width: 90px;" />--%>

                    </a>
                </div>
                <div class="navbar-collapse collapse" id="collapse">
                    <%--<form class="navbar-form navbar-left hidden-xs" role="search">
                        <div class="search-2">
                            <div class="input-group">
                                <input type="text" class="form-control form-control-w-150" placeholder="Search ..">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
                                </span>
                            </div>
                        </div>
                    </form>--%>
                    <ul class="nav navbar-nav navbar-right">
                        <!-- notifications -->
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
                        <!-- user -->
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
                                            <li class="active"><a href="CopyViewEmployee.aspx"><i class="fa fa-user"></i><span>Add Employee</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="ViewAllEmployee.aspx"><i class="fa fa-database"></i><span>View Employee</span></a>
                                            </li>
                                             <li ><a href="CopyViewEmployee.aspx"><i class="fa fa-database"></i><span>EmployeeAdd</span></a>
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
                                        <h2 align="center">Techvantage Employees</h2>
                                    </div>
                                    <hr />
                                    <form>
                                      <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee Code</label>
                                        <input type="email" class="form-control" id="txtEmpCode" placeholder="Enter Employee Code">
                                      </fieldset>
                                      </section>

                                      <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">FirstName</label>
                                        <input type="email" class="form-control" id="txtFirstName" placeholder="Enter FirstName">
                                      </fieldset>
                                      </section>
         
                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">LastName</label>
                                        <input type="email" class="form-control" id="txtLastName" placeholder="Enter LastName">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Designation</label>
                                        <input type="email" class="form-control" id="txtDesignation" placeholder="Enter Designation">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Gender</label><br />
                                        <select class="selectpicker" id="ddlGener">
                                              <option>SELECT</option>
                                              <option>Male</option>
                                              <option>Female</option>
                                        </select>

                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employment Status</label><br />
                                        <select class="selectpicker" id="ddlEmpStatus">
                                              <option>SELECT</option>
                                              <option>Permenent</option>
                                              <option>Temprory</option>
                                        </select>

                                      </fieldset>
                                      </section>


                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Marital Status</label><br />
                                        <select class="selectpicker" id="ddlMarital">
                                              <option>SELECT</option>
                                              <option>Single</option>
                                              <option>Married</option>
                                              <option>Others</option>
                                        </select>

                                      </fieldset>
                                      </section>



                            <!--             <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Date of Birth</label>
                                        <input type="email" class="form-control" id="txtDob" placeholder="Enter DOB">
                                      </fieldset>
                                      </section>-->

                                          <section class="col-md-3">
                                             <fieldset class="form-gr.oup">
                                                 <label for="exampleInputEmail1">Date of Birth</label>
                                            <div class='input-group date' id='Div1'>
                                                <input type='text' class="form-control" id="txtDob" placeholder="Enter Date of Birth"/>
                                                <span class="input-group-addon">
                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                </span>
                                            </div>
                                        </fieldset>

                                      </section>

                                      <section class="col-md-3">
                                             <fieldset class="form-gr.oup">
                                                 <label for="exampleInputEmail1">Date of Joining</label>
                                            <div class='input-group date' id='Div2'>
                                                <input type='text' class="form-control"  id="txtDoJ" placeholder="Enter Date of Joining"/>
                                                <span class="input-group-addon">
                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                </span>
                                            </div>
                                        </fieldset>

                                      </section>

                                          <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Qualification</label><br />
                                        <select class="selectpicker" id="ddlQualification">
                                              <option>SELECT</option>
                                              <option>Diplomo</option>
                                              <option>Graduate</option>
                                              <option>Post Graduate</option>
                                        </select>

                                      </fieldset>
                                      </section>


                                        <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Department</label><br />
                                        <select class="selectpicker" id="ddlDept">
                                              <option>SELECT</option>
                                              <option>.NET</option>
                                              <option>Android</option>
                                              <option>IOS</option>
                                              <option>Data Analytics</option>
                                              <option>System Adminstration</option>
                                              <option>UI Designer</option>
                                        </select>

                                      </fieldset>
                                      </section>



                                          <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Official Email</label>
                                        <input type="email" class="form-control" id="txtOffcEmail" placeholder="Enter Official Email">
                                      </fieldset>
                                      </section>


             
                                          <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Personal Email</label>
                                        <input type="email" class="form-control" id="txtPersonalEmail" placeholder="Enter Personal Email">
                                      </fieldset>
                                      </section>

                
                                          <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Father's Name</label>
                                        <input type="email" class="form-control" id="txtFathersName" placeholder="Enter Father's Name">
                                      </fieldset>
                                      </section>

                                           <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Spouse Name</label>
                                        <input type="email" class="form-control" id="txtSpouseName" placeholder="Enter Spouse Name">
                                      </fieldset>
                                      </section>


                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Mobile Number</label>
                                        <input type="email" class="form-control" id="txtMob" placeholder="Enter Mobile Number">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Address</label>
                                        <input type="email" class="form-control" id="txtAddress" placeholder="Enter Address">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Emergency Contact No</label>
                                        <input type="email" class="form-control" id="txtEmergContact" placeholder="Enter Emergency Contact No">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Account Number</label>
                                        <input type="email" class="form-control" id="txtAccNo" placeholder="Enter Account Number">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Bank and Branch</label>
                                        <input type="email" class="form-control" id="txtBank" placeholder="Enter Bank and Branch Name">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">PAN Number</label>
                                        <input type="email" class="form-control" id="txtPAN" placeholder="Enter PAN Number">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-3">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Blood Group</label>
                                        <input type="email" class="form-control" id="txtBloodGrp" placeholder="Enter Blood Group">
                                      </fieldset>
                                      </section>

                                         <!--<section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email17" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email18" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email19" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email20" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email21" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email22" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email23" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email24" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email25" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email26" placeholder="Enter email">
                                      </fieldset>
                                      </section>

                                         <section class="col-md-4">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Employee-code</label>
                                        <input type="email" class="form-control" id="Email27" placeholder="Enter email">
                                      </fieldset>
                                      </section>         -->


                                         <span class="clearfix"></span>
                                      <hr />
                                      <div style="padding:20px; float:right;">
                                          <section class="btn-group">
                 
                                               <button type="button" class="btn btn-danger b.tn-lg" id="btnCancel">Cancel</button> 
                                              <button type="button" class="btn btn-default bt.n-lg" id="btnSubmit">Submit</button> 
                 
                                         </section>
                                      </div>
                                        <span class="clearfix"></span>
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
    <script src="admin/js/vendor-tables.min.js"></script>
    <script src="admin/js/vendor-forms.min.js"></script>

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
    <script src="admin/js/jquery.js"></script>
    <script src="pagescripts/ViewAllEmployee.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>

    <%--    <script src="admin/plugins/DataTables-1.10.4/media/DT_bootstrap.js"></script>--%>
</body>
</html>