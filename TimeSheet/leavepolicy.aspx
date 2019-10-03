<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="leavepolicy.aspx.cs" Inherits="TimeSheet.leavepolicy" %>

<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Leave Policy</title>
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

</head>
<style>
    .mt-3
    {
        margin-top: 30px;
    }

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

    #leavepolicy
    {
        background: #fff;
        padding: 20px;
        border: 1px solid #e6e6e6;
    }

        #leavepolicy h4
        {
            color: #0E82B1;
            font-weight: bold;
            font-size: 16px !important;
        }

            #leavepolicy h4:after
            {
                content: "";
                _padding-bottom: 10px;
                display: block;
                background-color: #B76C00;
                width: 50px;
                height: 4px;
                margin-top: 5px;
            }

        #leavepolicy li:after
        {
            content: "";
            padding-bottom: 15px;
            display: block;
        }

        #leavepolicy li, #leavepolicy p
        {
            color: #333;
            line-height: 24px;
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
                                            <li class="active"><a href="enterweeklytimesheet.aspx"><i class="fa fa-clock-o"></i><span>Weekly TimeSheet</span></a>
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
                                        

                                        <h2 align="center">LEAVE POLICY</h2>
                                         </div>
                                    <hr />
                                        <div class="col-md-8 col-md-offset-2 mt-3">

                                            <div id="leavepolicy">
                                                <h4>1. SCOPE</h4>
                                                <p>Techvantage Systems Leave Policy covers the following aspects regarding leave that can be availed by the employees of TechVantage (henceforth referred to as the company):</p>
                                                <ul>
                                                    <li>Leave Categories </li>
                                                    <li>Number of Leaves in each Category  </li>
                                                    <li>Leave approval process  </li>
                                                    <li>Holidays </li>
                                                </ul>
                                                <p>The Leave Policy is applicable to all permanent staff of the company. All permanent employees are eligible to avail the various leave types from their probationary period onwards. For computing leave accrued in a year, the calendar year period from 1st Jan to 31st December will be considered.</p>
                                                <br />
                                                <h4>2. LEAVE CATEGORIES</h4>
                                                <p>The different types of leaves are classified as follows:</p>
                                                <ul>
                                                    <li>Privilege leave</li>
                                                    <li>Maternity leave </li>
                                                    <li>Paternity leave </li>
                                                    <li>Public Holidays</li>
                                                    <li>Leave without pay </li>
                                                    <li>Sick leave</li>
                                                </ul>
                                                <br />
                                                <h4>2.1.PRIVILEGE LEAVE</h4>
                                                <p>
                                                    All employees have a maximum of 14 days Privilege leave in a year, with 3.5 days credited at the beginning of each quarter. On completion of 3 years in the company, the maximum Privilege leave is increased to 16 days per annum, with 4 days credited at the beginning of each quarter. If an employee completes 3 years’ service or joins the company mid-way through a year, the entitlement will be on pro-rata basis rounded to the nearest whole days.<p>

                                                <p>
                                                    If an employee does not avail his privilege leave entitlement in a year, he will be allowed to carry forward to the next year up to a maximum of 2 years. An employee is not entitled for privilege leave during the period he avails continuous Loss of Pay Leave. In such cases, the privilege leave credited in the next quarter is to be adjusted deducting on pro rata basis rounded to the nearest whole days
                                                </p>
                                                <br />
                                                <h4>2.2 MATERNITY LEAVE</h4>
                                                <p>Full time permanent female employees who have completed 6 months of service with the company, including probation, are eligible for availing maternity leave.This leave can be utilized twice (maximum) during their tenure in the company. It is granted as a continuous period of 86 days from the date of commencement of the leave.</p>
                                                <br />
                                                <h4>2.3 PATERNITY LEAVE</h4>
                                                <p>All male employees can avail up to 5 days of paternity leave within a month of his spouse’s delivery, subject to a maximum of 2 occasions during their tenure, after submitting certificate issued by a Registered Medical Practitioner indicating date of delivery.</p>
                                                <br />
                                                <h4>2.4 PUBLIC HOLIDAYS</h4>
                                                <p>All employees are entitled to 10 days of public holiday per annum. The holiday list for the forthcoming year will be published during the last week of December, every year.</p>
                                                <br />
                                                <h4>2.5 LEAVE WITHOUT PAY</h4>
                                                <p>Leave without pay is granted only in exceptional circumstances approved by the respective Department Head and only after confirmation from the HR department that all annual leave entitlement have been used up. The leave without pay application duly approved by the respective Department Head must reach HR department 2 days in advance and the employee should get it approved before commencing on leave.</p>
                                                <br />
                                                <h4>2.6 SICK LEAVE</h4>

                                                <p>Sick leave is allowed only for a maximum of 3 days and is not allowed as a matter of right. It will be granted on a case by case basis. The medical proof must necessarily accompany the sick leave application. In case of exigencies, intimation must be done to the respective Department Head and Team Lead and necessary application forwarded to the HR Department within 2 days of availing the sick leave along with the approval of the respective Department Head.</p>
                                                <p>In all cases of absence due to sickness, Management has the right to improve upon or reduce any of these entitlements depending upon circumstances.</p>
                                                <br>
                                                <h4>GENERAL PROCEDURE FOR AVAILING LEAVE</h4>

                                                <p>All employees are to follow the below mentioned procedure for availing any of the leave entitled to them.</p>
                                                <ul>
                                                    <li>Employees must apply leave through timesheet application, indicating clearly the type of leave applied for, valid reasons and the duration of leave requested. </li>
                                                    <li>Leave authorized by Team Lead and approved by the respective Department Head should be based on operational requirements, merit, reasonableness and past practice. </li>
                                                    <li>The employee is required to give prior notice to the Team Lead and the respective Department Head before availing any of the leaves, entitled to him. </li>
                                                    <li>The Team Lead must authorize and respective Department Head must approve all leave applications of the employee. Duly approved leave application must reach HR department 2 days in advance and the employee should get it approved before commencing on leave</li>

                                                </ul>
                                                <br />
                                                <h4>UNAUTHORIZED LEAVE AND LATENESS</h4>
                                                <p>All employees are expected to report for duty on time, as per the stipulations in their employment contract. Coming on weekends to finish assigned work, does not warrant Compensatory Off. If employees are reporting for duty late by more than half an hour without valid reason, they will be deducted half a day privilege leave.</p>
                                                <p>If an employee does not follow the reporting procedures or have the permission only from the Team Lead to be absent without the approval of the respective Department Head or he is late on several occasions, the Management reserves the right to take necessary disciplinary action.</p>
                                            </div>


                                        </div>





                                        <span class="clearfix"></span>
                                        <hr />


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


    <script src="admin/js/jquery.js"></script>
    <script src="pagescripts/ApplyLeave.js"></script>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>

    <script src="alert/js/alert.min.js"></script>
</body>
</html>



