<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ApplyLeave.aspx.cs" Inherits="TimeSheet.ApplyLeave" %>

<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Apply Leave</title>
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
    <link href="http://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css" rel="stylesheet">
</head>
<style>
    .navbar-brand.navbar-brand-primary, .navbar-brand.navbar-brand-primary:hover
    {
        background-color: #FFF;
    }

    table
    {
        border-collapse: collapse;
        width: 100%;
    }

    th, td
    {
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even)
    {
        background-color: #f2f2f2;
    }

    th
    {
        background-color: #bbb5b5;
        color: white;
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

    li
    {
        color:orange;
    }
    .panel {
    box-shadow: none;
    margin-top: -30px;
}
    .styled-select {
  background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
  height: 29px;
  overflow: hidden;
  width: 240px;
}
.styled-select select {
  background: rgb(0, 0, 0);
  border: none;
  font-size: 14px;
  height: 29px;
  padding: 5px;
  /* If you add too much padding here, the options won't show in IE */
  width: 268px;
}
.styled-select.slate {
  background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center;
  height: 34px;
  width: 240px;
}
.styled-select.slate select {
  border: 1px solid #ccc;
  font-size: 16px;
  height: 34px;
  width: 268px;
}
/* -------------------- Rounded Corners */
.rounded {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}
.semi-square {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
/* -------------------- Colors: Background */
.slate {
  background-color: #ddd;
}
.green {
  background-color: #779126;
}
.blue {
  background-color: #3b8ec2;
}
.yellow {
  background-color: #ECF0F1;
}
.black {
  background-color: #ECF0F1;
}
/* -------------------- Colors: Text */
.slate select {
  color: #000;
}
.green select {
  color: #fff;
}
.blue select {
  color: #fff;
}
.yellow select {
  color: #000;
}
.black select {
  color: #fff;
}
.styled-select select:hover {
color:white
}
.styled-select select::selection {
color:white
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
                        <img src="admin/images/tech_v-Logo_colo5r.png" alt="techvLogo" />

                    </a>
                </div>
                <div class="navbar-collapse collapse" id="collapse">

                    <ul class="nav navbar-nav navbar-right">
                        <!-- notifications -->
                        <%--<li class="dropdown notifications updates hidden-xs hidden-sm">
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

                        </li>--%>
                        <!-- // END messages -->
                        <!-- user -->
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
                                        <%-- <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="EnterTimeSheet.aspx"><i class="fa fa-tasks"></i><span>Enter TimeSheet</span></a>
                                            </li>
                                           
                                            
                                        </ul>--%>


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
                                                <a class="" href="#nav-Employee" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-pencil-square-o"></i>
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
                                            <li class="active"><a href="raiseticket.aspx"><i class="fa fa-desktop"></i><span>Register Issue</span></a>
                                            
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


                                    <form>

                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                
                                                <span class="clearfix"></span> 
                                            </div>


                                        </div>
                                        <div class="col-md-6 col-md-offset-3">
                                            <h2 align="center">Apply Leave </h2>
                                            
                                        <hr />
                                            <section class="col-md-6">

                                                <fieldset class="form-gr.oup">
                                                    <label for="exampleInputEmail1">Leave From</label><font color="red" size="4px"><b> &nbsp;&nbsp;* </b></font>
                                                    <div class='input-group date' id='Div1'>
                                                        <input type='text' class="form-control" id="txtLeaveFrom" placeholder="Choose Date" name="fromLeaveDate"/>
                                                        <input type="checkbox" name="chkfrm" value="Yes" id="chkfrmFN" > FN </input>
                                                        <input type="checkbox" name="chkfrm" value="Yes" id="chkfrmAN" > AN </input>&nbsp;
                                                        
                                                    </div>
                                                </fieldset>

                                            </section>

                                            <section class="col-md-6">
                                                <fieldset class="form-gr.oup">
                                                    <label for="exampleInputEmail1">Leave To</label><font color="red" size="4px"><b> &nbsp;&nbsp;* </b></font>
                                                    <div class='input-group date' id='Div2'>
                                                        <input type='text' class="form-control" id="txtLeaveTo" placeholder="Choose Date" />
                                                        <input type="checkbox" name="chkto" value="Yes" id="chktoFN" > FN </input>
                                                         <input type="checkbox" name="chkto" value="Yes" id="chktoAN" > AN </input>&nbsp;
                                                        
                                                    </div>
                                                </fieldset>

                                            </section>
                                        </div>

                                        <div class="col-md-6 col-md-offset-3">

                                            <section class="col-md-6">
                                                <fieldset class="Employee-code">
                                                    <label for="ddlLeaveType">Leave Type</label><font color="red" size="4px"><b> &nbsp;&nbsp;* </b></font><br />
                                                    <select class="styled-select black select" id="ddlLeaveType" name="dropdown" style="margin-top: -16px; margin-bottom: 5px; margin-left: -1px;width: 258px;height: 30px;">
                                                        <option value="0">SELECT Leave Type</option>
                                                        <option value="1">Privilege Leave</option>
                                                        <option value="2">Sick Leave</option>
                                                        <option value="3">Maternity leave</option>
                                                        <option value="4">Paternity leave</option>
                                                        <option>On Duty</option>
                                                        <option>LOP</option>





                                                    </select>

                                                </fieldset>
                                            </section>




                                            <section class="col-md-6">
                                                <fieldset class="Employee-code">
                                                    <label for="remainingLeaves" id="Remains" style="color:red">Remaining</label>
                                                    <input type="text" class="form-control" id="remainingLeaves">
                                                </fieldset>
                                            </section>

                                            <section class="col-md-6">
                                                <fieldset class="Employee-code">
                                                    <label for="exampleInputEmail1" style="margin-left: 0px;">No Of Days</label>
                                                    <input type="text" class="form-control" id="txtTotalLeave" style="height:32px;width:68px;margin-left: 0px;">
                                                </fieldset>
                                            </section>
                                        </div>


                                        <div class="col-md-6 col-md-offset-3">
                                            <section class="col-md-12">
                                                <fieldset class="Employee-code">
                                                    <label for="exampleInputEmail1">Reason For Leave</label><font color="red"><b> &nbsp;&nbsp;* </b></font>
                                                    <input type="text" class="form-control" id="txtReason" placeholder="Enter Reason for Leave" style="height:57px;width:525px;">
                                                </fieldset>
                                            </section>
                                        </div>

                                        <div class="col-md-6 col-md-offset-3">
                                            <section class="col-md-12">
                                                <fieldset class="Employee-code">
                                                    <br />
                                                    <%--<input type="checkbox" name="halfday" value="Yes" id="chkbxHalfDay"> Half Day </input><br /><br />--%>
                                                    <input type="checkbox" name="approval" value="Yes" id="ChkApproval"> I have discussed my leave plan with my Line Manager.</input>
                                                    <%--<label class="pull-right" id="lblLeave"></label>
                                                    <label class="pull-right" id="lblSL"></label>--%>
                                                </fieldset>
                                            </section>
                                        </div>





                                        <span class="clearfix"></span>
                                        <hr />
                                        <div style="padding: 15px;" class="col-md-6 col-md-offset-3  text-center">
                                            <section class="btn-group">

                                                <button type="button" class="btn btn-danger b.tn-lg" id="btnCancel">Cancel</button>
                                                <button type="button" class="btn btn-default bt.n-lg" id="btnSubmit">Submit</button>
                                                
                                            </section>

                                        </div>

                                        <span class="clearfix"></span>
                                        <label id="lblMessage"></label>
                                        
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


    <script src="admin/js/jquery.js"></script>
    <script src="pagescripts/ApplyLeave.js"></script>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
   <script src="http://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>

    <script src="alert/js/alert.min.js"></script>
    <script type="text/javascript">
        {
            var date = new Date();
            var day=date.getDay();
            if (day == 4 || day == 5) {
                $('.btn-warningg').css({ 'color': '#B2D3EF', 'background-color': '#B2D3EF', 'border-color': '#B2D3EF' });
                setInterval(function () { $("#listTimeSheet").toggleClass('btn-info btn-warningg'); }, 1000);
                setInterval(function () { $("#listTimeSheet").toggleClass('btn-warningg btn-info'); }, 500);
            }
        }
    </script>
</body>
</html>


