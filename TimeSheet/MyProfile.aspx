<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MyProfile.aspx.cs" Inherits="TimeSheet.MyProfile" %>

<!DOCTYPE html>

<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | My Profile</title>
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

    <link href="admin/plugins/DataTables-1.10.4/media/DT_bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-datetimepicker/css/datetimepicker.css" rel="stylesheet" />
</head>
<style>
    .navbar-brand.navbar-brand-primary, .navbar-brand.navbar-brand-primary:hover {
        background-color: #FFF;
    }

    .sidebar-menu li ul li a {
        line-height: 38px;
        font-size: 13px;
        color: #333;
    }

    .sidebar-menu li a:hover {
        font-size: 13px;
        background-color: #138C90;
    }

    .sidebar.sidebar-skin-blue .sidebar-menu.sm-icons-block li.active a i {
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
                                        <%-- <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="employmentcert.aspx"><i class="fa fa-th-large"></i><span>Employment Certificate</span></a>
                                            </li>
                                        </ul>--%>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="ViewAccessDetails.aspx"><i class="fa fa-th-large"></i><span>Attendance</span></a>
                                            </li>
                                        </ul>

                                        <div id="Assetmenu">
                                            <ul class="sidebar-menu sm-icons-right sm-icons-block">

                                                <li class="active">
                                                    <a class="" href="#nav-Policies" data-toggle="collapse" aria-expanded="true">
                                                        <i class="fa fa-file-text"></i>
                                                        <span>Asset</span>
                                                    </a>
                                                    <ul class="collapse" id="nav-Policies" aria-expanded="true" style="">
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
                                                        <li>
                                                            <a href="AssetAllocationReport.aspx">

                                                                <span>Asset Allocation Report</span>
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
                                            <li id='listTimeSheet' class="active"><a href="enterweeklytimesheet.aspx"><i class="fa fa-clock-o"></i><span>Weekly TimeSheet</span></a>
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
                                                <a class="" href="#nav-Employee" data-toggle="collapse" aria-expanded="true"><i class="fa fa-pencil-square-o"></i>
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
                                            <li class="active"><a href="Employee_Handbook.aspx"><i class="fa fa-calendar"></i><span>Employee Handbook</span></a>
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
                                        <h2 align="center">My Profile </h2>
                                        <hr />
                                        <div class="bg-white border rounded-5">

                                            <div class="container py-5">

                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div class="card mb-4">
                                                            <div class="card-body text-center">
                                                                <div style="width: 150px; height: 159px;padding-left:100px">
                                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                                        class="img-circle img-fluid" style="width: 150px;">
                                                                </div>
                                                                <br />
                                                            <%--<input type="text" disabled id="EmpName" class="my-3" /><br />--%>
                                                                <label id="EmpName" class="my-3"></label><br />
                                                                <%--<input type="text" disabled id="EmpDesig" class="text-muted mb-1" />--%>
                                                                <label id="EmpDesig" class="mb-1"></label>

                                                            </div>
                                                        </div>
                                                        <div class="card mb-4 mb-lg-0">
                                                            <div class="card-body p-0">
                                                                <ul class="list-group list-group-flush rounded-3">
                                                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                        <i class="fas fa-globe fa-lg text-warning"></i>
                                                                        <input type="text" id="EmpEMail" style="width: 300px" disabled class="mb-0" />
                                                                    </li>
                                                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                        <i class="fas fa-globe fa-lg text-warning" style="color: black;"></i>
                                                                        <input type="text" id="EmpPhone" style="width: 300px" class="mb-0" />
                                                                    </li>
                                                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                        <i class="fab fa-twitter fa-lg" style="color: black;"></i>
                                                                        <input type="text" disabled id="EMpLineManager" style="width: 300px" class="mb-0" />

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body p-0">
                                                        <div class="col-lg-8">
                                                            <div class="card mb-4">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">Employee Code</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <input type="text" disabled id="EmpCode" class="mb-0" />
                                                                        </div>
                                                                    </div>

                                                                    <hr>
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">First Name</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <input type="text" id="EmpFirstName" class="mb-0" />
                                                                        </div>
                                                                    </div>
                                                                    <hr>
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">Last Name</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <input type="text" id="EmpLastName" class="mb-0" />
                                                                        </div>
                                                                    </div>
                                                                    <hr>
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">Emergency Contact</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <input type="text" id="EmpContactPerson" class="mb-0" />
                                                                        </div>
                                                                    </div>
                                                                    <hr>
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">Contact No</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <input type="text" id="EmpContactNo" class="mb-0" />
                                                                        </div>
                                                                    </div>
                                                                    <hr>
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">Key Skills</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <textarea id="EmpKeySkill" style="width: 400px; height: 100px" class="mb-0">DOt Net </textarea>
                                                                        </div>
                                                                    </div>
                                                                    <hr>
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <button type="button" class="btn btn-success bt.n-lg" id="btnEdit">Edit</button>
                                                                            <button type="button" class="btn btn-success bt.n-lg" id="btnUpdate">UPDATE</button>
                                                                            <button type="button" class="btn btn-danger bt.n-lg" id="btnCancel">CANCEL</button>
                                                                        </div>
                                                                    </div>
                                                                    <hr>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
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
    <script src="pagescripts/MyProfile.js"></script>
    <script src="alert/js/alert.min.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
</body>
</html>
