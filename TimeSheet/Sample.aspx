<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Sample.aspx.cs" Inherits="TimeSheet.Sample" %>

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
    <link href="alert/css/alert.min.css" rel="stylesheet" />
    <link href="alert/themes/default/theme.min.css" rel="stylesheet" />
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
    <link href="bootstrap-datetimepicker/css/datetimepicker.css" rel="stylesheet" />
</head>
<style>
    .navbar-brand.navbar-brand-primary, .navbar-brand.navbar-brand-primary:hover
    {
        background-color: #FFF;
    }

    .sidebar-menu li ul li a
    {
        line-height: 38px;
        font-size: 13px;
        color: #333;
    }

    .sidebar-menu li a:hover
    {
        font-size: 13px;
        background-color: #138C90;
    }

    .sidebar.sidebar-skin-blue .sidebar-menu.sm-icons-block li.active a i
    {
        color: greenyellow;
        background-color: black;
    }
</style>
<body>
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
                    <a href="ViewTimeSheet.aspx" class="navbar-brand hidden-xs navbar-brand-primary">
                        <img src="admin/images/tech_v-Logo_colo5r.png" alt="techvLogo" />

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
                                        <h2 align="center">Weekly Time Sheet </h2>





                                    </div>

                                    <span class="clearfix"></span>

                                    <table id="example" class="display" cellspacing="0" width="90%" border="2" align="center">
                                        <thead style="height: 50px; width: 10px; padding: 10px">
                                            <tr>
                                                <th style="padding-left: 70px; color: black;">MONDAY<br /><label id="lblMONDAY"></label></th>
                                                <th style="padding-left: 70px; color: black;">TUESDAY<br />&nbsp;<label id="lblTUESDAY"></label></th>
                                                <th style="padding-left: 70px; color: black;">WEDNESDAY<br />&nbsp;&nbsp;&nbsp;<label id="lblWEDNESDAY"></label></th>
                                                <th style="padding-left: 70px; color: black;">THURSDAY<br />&nbsp;&nbsp;<label id="lblTHURSDAY"></label></th>
                                                <th style="padding-left: 70px; color: black;">&nbsp;&nbsp;FRIDAY<br /><label id="lblFRIDAY"></label></th>
                                            </tr>
                                        </thead>

                                        <tbody style="height: 160px; width: 50px; padding-left: 50px;">
                                            <tr style="height: 40px">
                                                <td>
                                                    <input type="text" style="width: 75%" placeholder="Worked Hours" id="MonHours" /></td>
                                                <td>
                                                    <input type="text" style="width: 75%" placeholder="Worked Hours" id="TuesHours" /></td>
                                                <td>
                                                    <input type="text" style="width: 75%" placeholder="Worked Hours" id="WedHours" /></td>
                                                <td>
                                                    <input type="text" style="width: 75%" placeholder="Worked Hours" id="ThursHours" /></td>
                                                <td>
                                                    <input type="text" style="width: 75%" placeholder="Worked Hours" id="FriHours" /></td>
                                            </tr>
                                            <tr style="height: 40px;">
                                                <td>
                                                    <select class="" name="ddlEmployee" id="MonPrject" style="width: 75%">
                                                        <option value="">Choose Project</option>
                                                    </select></td>
                                                <td>
                                                    <select class="" name="ddlEmployee" id="TuesPrject" style="width: 75%">
                                                        <option value="">Choose Project</option>
                                                    </select></td>
                                                <td>
                                                    <select class="" name="ddlEmployee" id="WedPrject" style="width: 75%">
                                                        <option value="">Choose Project</option>
                                                    </select></td>
                                                <td>
                                                    <select class="" name="ddlEmployee" id="ThursPrject" style="width: 75%">
                                                        <option value="">Choose Project</option>
                                                    </select></td>
                                                <td>
                                                    <select class="" name="ddlEmployee" id="FriPrject" style="width: 75%">
                                                        <option value="">Choose Project</option>
                                                    </select></td>
                                            </tr>
                                            <tr style="height: 40px;">
                                                <td>
                                                    <select class="ddlTasks" name="ddlEmployee" id="MonTasks" style="width: 75%">
                                                        <option value="">Choose Taks</option>
                                                    </select></td>

                                                <td>
                                                    <select class="ddlTasks" name="ddlEmployee" id="TuesTasks" style="width: 75%">
                                                        <option value="">Choose Taks</option>
                                                    </select></td>
                                                <td>
                                                    <select class="ddlTasks" name="ddlEmployee" id="WedTasks" style="width: 75%">
                                                        <option value="">Choose Taks</option>
                                                    </select></td>
                                                <td>
                                                    <select class="ddlTasks" name="ddlEmployee" id="ThursTasks" style="width: 75%">
                                                        <option value="">Choose Taks</option>
                                                    </select></td>
                                                <td>
                                                    <select class="ddlTasks" name="ddlEmployee" id="FriTasks" style="width: 75%">
                                                        <option value="">Choose Taks</option>
                                                    </select></td>
                                            </tr>
                                            <tr style="height: 40px;">

                                                <td>
                                                    <textarea id="MonDesc" placeholder="Enter Work Status" style="width: 75%;"></textarea> </td>
                                               


                                                <%--<td> <textarea  id="MonDesc" placeholder="Enter Work Status" style="width: 75%;"> </textarea></td>--%>
                                                <td>
                                                    <textarea id="TuesDesc" placeholder="Enter Work Status" style="width: 75%;"></textarea></td>
                                                <td>
                                                    <textarea id="WedDesc" placeholder="Enter Work Status" style="width: 75%;"></textarea></td>
                                                <td>
                                                    <textarea id="ThursDesc" placeholder="Enter Work Status" style="width: 75%;"></textarea></td>
                                                <td>
                                                    <textarea id="FriDesc" placeholder="Enter Work Status" style="width: 75%;"></textarea></td>

                                            </tr>


                                            <tr style="height: 40px;">

                                                <td>    
                                                    <button type="button" class="btn btn-primary bt.n-lg" id="btnUpdate1" style="margin-top: 10px; margin-bottom: 10px;margin-left:50px;">UPDATE</button><br /><label id="lblMo"></label> </td>
                                               


                                                <%--<td> <textarea  id="MonDesc" placeholder="Enter Work Status" style="width: 75%;"> </textarea></td>--%>
                                                <td>
                                                    <button type="button" class="btn btn-primary bt.n-lg" id="btnUpdate2" style="margin-top: 10px; margin-bottom: 10px;margin-left:50px;">UPDATE</button><br /><label id="lblTu"></label></td>
                                                <td>
                                                    <button type="button" class="btn btn-primary bt.n-lg" id="btnUpdate3" style="margin-top: 10px; margin-bottom: 10px;margin-left:75px;">UPDATE</button><br /><label id="lblWe"></label></td>
                                                <td>
                                                    <button type="button" class="btn btn-primary bt.n-lg" id="btnUpdate4" style="margin-top: 10px; margin-bottom: 10px;margin-left:65px;">UPDATE</button><br /><label id="lblTh"></label></td>
                                                <td>
                                                    <button type="button" class="btn btn-primary bt.n-lg" id="btnUpdate5" style="margin-top: 10px; margin-bottom: 10px;margin-left:55px;">UPDATE</button><br /><label id="lblFr"></label></td>

                                            </tr>

                                            

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
    <script src="pagescripts/Sample.js"></script>
    <script src="alert/js/alert.min.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <%--    <script src="admin/plugins/DataTables-1.10.4/media/DT_bootstrap.js"></script>--%>
</body>
</html>

