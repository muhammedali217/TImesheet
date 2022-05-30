<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="enterweeklytimesheet.aspx.cs" Inherits="TimeSheet.enterweeklytimesheet" %>

<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Weekly TimeSheet</title>
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
                    <a href="#" class="navbar-brand hidden-xs navbar-brand-primary">
                        <img src="admin/images/tech_v-Logo_colo5r.png" alt="techvLogo" />
                    </a>
                </div>
                <div class="navbar-collapse collapse" id="collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown user">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="admin/images/administrator1.png" class="img-circle" /><span id="lblName"></span><span class="caret"></span>
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
                                            <li class="active"><a href="employmentcert.aspx"><i class="fa fa-th-large"></i><span>Employment Certificate</span></a>
                                            </li>
                                        </ul>

                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="projectpercentagelist.aspx"><i class="fa fa-th-large"></i><span>Utilization</span></a>
                                            </li>
                                        </ul>

                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="inv_report.aspx"><i class="fa fa-th-large"></i><span>Utilization Report</span></a>
                                            </li>
                                        </ul>
                                         <div id="Assetmenu">
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">

                                            <li class="active">
                                                <a class="" href="#nav-Employee" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-users"></i>
                                                    <span>Asset</span>
                                                </a>
                                                
                                                <ul class="collapse" id="nav-Employee" aria-expanded="true" style="">
                                                    <li>
                                                        <a href="AssetMaster.aspx">
                                      
                                                            <span>Asset Master</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="Viewasset.aspx">
                                                           
                                                            <span>View Asset</span>
                                                        </a>
                                                    </li>
                                                     <li>
                                                        <a href="Editasset.aspx">
                                                           
                                                            <span>Edit  Asset Details</span>
                                                        </a>
                                                    </li>
                                                     <li>
                                                        <a href="AssetEmployeeAllocation.aspx">
                                                           
                                                            <span>Asset Allocation</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
</div>
                                        
                                        

                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="knwldgecenter.aspx"><i class="fa fa-book"></i><span>Knowledge Center</span></a>
                                            </li>
                                        </ul>
                                       <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="ApplyLeave.aspx"><i class="fa fa-bed"></i><span>Apply Leave</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="employeeleavehistory.aspx"><i class="fa fa-bar-chart"></i><span>Leave History</span></a>
                                            </li>
                                        </ul>
                                       <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li id='listTimeSheet'class="active"><a href="enterweeklytimesheet.aspx"><i class="fa fa-clock-o"></i><span>Weekly TimeSheet</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="employeetimesheet.aspx"><i class="fa fa-tasks"></i><span>View TimeSheet</span></a>
                                            </li> 
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="ChangePassword.aspx"><i class="fa fa-lock"></i><span>Change Password</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="holidaycalenderemployee.aspx"><i class="fa fa-calendar"></i><span>Holiday Calender</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active">
                                                <a class="" href="#nav-Employee" data-toggle="collapse" aria-expanded="true"> <i class="fa fa-pencil-square-o"></i>
                                                    <span>Request</span>
                                                </a>
                                                <ul class="collapse" id="nav-Employee" aria-expanded="true" style="">
                                                    <li>
                                                         <a href="travelrequest.aspx">
                                                            <span>Travel</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="visarequest.aspx">
                                                            <span>VISA</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                       <a href="idcardrequest.aspx">
                                                            <span>ID Card </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="expensevoucher.aspx">
                                                            <span>Expense Voucher</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="workfromhome.aspx">
                                                            <span>Work From Home</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="reimbursement.aspx">
                                                            <span>Reimbursement</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="commonrequest.aspx">
                                                            <span>Others</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                         <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active">
                                                <a class="" href="#nav-Policies" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-file-text"></i>
                                                    <span>Company Policies</span>
                                                </a>
                                                <ul class="collapse" id="nav-Policies" aria-expanded="true" style="">
                                                    <li>
                                                         <a href="leavepolicy.aspx">
                                                            <span>Leave</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                       <a href="dresscodepolicy.aspx">
                                                            <span>Dress Code</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                         <a href="reimbursementpolicy.aspx">
                                                            <span>Reimbursement</span>
                                                        </a>
                                                    </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                         <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="empjobdesc.aspx"><i class="fa fa-graduation-cap"></i><span>Job Description</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="meetingroom.aspx"><i class="fa fa-users"></i><span>Meeting Room</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="employeerequeststatus.aspx"><i class="fa fa-pencil-square-o"></i><span>Request Status</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="raiseticket.aspx"><i class="fa fa-desktop"></i><span>Register Issue</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <hr />
                                  <h4 style="color:red"><label id="lblAlert"></label></h4>
                                        <div>
                                            <label for="exampleInputEmail1" style="width: 20%; margin-left: 95px;display:inline" id="labelPrjAssigned">&nbsp;Projects Assigned</label>
                                            <font color="red" size="4px" id="star"><b id="lblStar">*</b></font>
                                            <label for="exampleInputEmail1" style="width: 20%; margin-left: 156px;display:inline" id="lblProfitCostType">&nbsp;</label>
                                        </div><br />
                                        <select class="form-control input-alt" name="ddlNewProject" id="ddlNewProject" style="width: 20%;margin-left: 95px;display:inline">
                                            <option value="">Select Project</option>
                                        </select>
                                        <input type="text" id="txtprofitcostcode" style="display:inline;margin-left:6%;background-color: #ecf0f1;background-image: none;border: 1px solid #ecf0f1;border-radius: 4px;box-shadow: inset 0 1px 1px rgba(0,0,0,.075);transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;line-height: 2;width: 25%;align-items: center;text-align: center!important;color:black;" readonly="readonly">
                                        <button type="button" class="btn btn-primary bt.n-lg" style="margin-top: -30px;margin-bottom:30px;margin-left: 788px;font-size:10px;background-color:#26a69a;border-color:#26a69a;" id="btnthisWeek">CLICK TO VIEW THIS WEEK TIMESHEET</button>
                                    </div>
                                    <br />
                                  
                                    
                                    <table id="example" class="display" cellspacing="11px" cellpadding="50px" width="85%" border="2" align="center">
                                        <thead style="height: 50px; width: 5px; padding: 50px">
                                            <tr>
                                                <th style="text-align:center; color: black;">Task<br />
                                                    <label id="lblTask"></label>
                                                </th>
                                                <th style="text-align:center; color: black;">MONDAY<br />
                                                    <label id="lblMONDAY"></label><br /><label id="MondayAbsent">ABSENT</label>
                                                </th>
                                                <th style="text-align:center; color: black;">TUESDAY<br />
                                                    &nbsp;<label id="lblTUESDAY"></label><br /><label id="TuesdayAbsent">ABSENT</label></th>
                                                <th style="text-align:center; color: black;">WEDNESDAY<br />
                                                    &nbsp;&nbsp;&nbsp;<label id="lblWEDNESDAY"></label><br /><label id="WednesdayAbsent">ABSENT</label></th>
                                                <th style="text-align:center; color: black;">THURSDAY<br />
                                                    &nbsp;&nbsp;<label id="lblTHURSDAY"></label><br /><label id="ThursdayAbsent">ABSENT</label></th>
                                                <th style="text-align:center; color: black;">&nbsp;&nbsp;FRIDAY<br />
                                                    <label id="lblFRIDAY"></label><br />  <label id="Fridayabsent">ABSENT</label>
                                                </th>
                                                <th style="text-align:center; color: black;">&nbsp;&nbsp;Remarks<br />
                                                    <label id="lblRemarks"></label>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody style="height: 10px; width: 10px; padding-left: 10px;">
                                            <tr id='tdTasks' style="height: 140px;">
                                                <td id="td1" class="">
                                                    <hr style="margin-top:-5px; margin-bottom:10px;" />
                                                     <br />
                                                    <div id="divNewTasks" style="width:130px;"></div><label id="Label2"></label>
                                                </td>
                                                <td id="td2" class="tdMonday">
                                                     <br />
                                                    <div id="div1"></div><label id="MDay"></label>
                                                </td>
                                                <td id="td3">
                                                     <br />
                                                    <div id="div2"></div><label id="TDay"></label>
                                                </td>
                                                <td id="td4">
                                                     <br />
                                                    <div id="div3"></div><label id="WDay"></label>
                                                </td>
                                                <td id="td5">
                                                     <br />
                                                    <div id="div4"></div><label id="ThDay"></label>
                                                </td>
                                                <td id="td6">
                                                     <br />
                                                    <div id="div5"></div><label id="FDay"></label>
                                                </td>
                                                <td id="td7">
                                                     <br />
                                                    <div id="div6"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <label id="lblMessage" style="margin-left:485px;margin-top:20px;"></label><br />
                                    <span class="clearfix"></span>
                                        <div style="padding: 15px;padding-top:-1px !important;" class="col-md-6 col-md-offset-3  text-center">
                                            <section class="btn-group">
                                                <button type="button" class="btn btn-danger bt.n-lg" id="btnCancel" >CANCEL</button>
                                                <button type="button" class="btn btn-default bt.n-lg" id="btnSubmit" >SUBMIT</button>
                                            </section>
                                        </div>
                                        <span class="clearfix"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
        </footer>
    </div>
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
    <script src="pagescripts/enterweeklytimesheet.js"></script>
    <script src="alert/js/alert.min.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script type="text/javascript">
        {
            var date = new Date();
            var day = date.getDay();
            if (day == 4 || day == 5) {
                $('.btn-warningg').css({ 'color': '#B2D3EF', 'background-color': '#B2D3EF', 'border-color': '#B2D3EF' });
                setInterval(function () { $("#listTimeSheet").toggleClass('btn-info btn-warningg'); }, 1000);
                setInterval(function () { $("#listTimeSheet").toggleClass('btn-warningg btn-info'); }, 500);
            }
        }
    </script>
</body>
</html>



