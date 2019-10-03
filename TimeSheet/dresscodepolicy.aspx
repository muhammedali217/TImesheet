<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="dresscodepolicy.aspx.cs" Inherits="TimeSheet.dresscodepolicy" %>

<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Dress Code</title>
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
        margin-top:30px;
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
            font-weight:bold;
            font-size:16px !important;
        }
            #leavepolicy h4:after
            {
                content: "";
                _padding-bottom: 10px;
                display: block;
                background-color:#B76C00;
                width:50px;
                height:4px;
                margin-top:5px;
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
            line-height:24px;
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

                                        <div class="panel-heading">

                                        <h2 align="center">DRESS CODE POLICY</h2>
                                        </div>
                                        <hr />
                                        <div class="col-md-8 col-md-offset-2 mt-3">

                                            <div id="leavepolicy">
                                                <h4>DRESS CODE POLICY</h4>
                                                
                                                <ul>
                                                    <li>Maintaining a professional, business like appearance is very important to the success of Techvantage Systems. </li>
                                                    <li>Regardless of the employee’s interaction with clients, customers, suppliers, contractors, or volunteers, each employee projects the reputation of the organization. Part of this impression depends on each employee’s choice of dress.    </li>
                                                    <li>Techvantage Systems has chosen to offer a casual dress environment for employees. Employees are expected to use good judgment and to show courtesy to their co-workers by dressing in a manner that is presentable and appropriate. At all times employees are asked to be cognizant that regardless of their interaction with clients, customers, suppliers, contractors, or volunteers Techvantage Systems is still a place of business</li>
                                                    <li>Should employees be asked to attend business meetings with clients, either in Techvantage Systems offices or otherwise, they should dress in appropriate business attire.</li>
                                                    <li>This policy is intended to define appropriate “business attire” during normal business operations and “casual business attire” on Fridays.</li>
                                                    <li>The Company recognizes the growing popularity of casual business dress and the positive effects of this shift to boost employee morale, improve quality, encourage more open communication and increased productivity, therefore, creating a more comfortable work environment. Therefore, casual business attire will be permitted on Fridays. The Company reserves the right to continue, extend, revise or revoke this policy at its discretion</li>
                                                    <li>Any questions related to the content of this policy or its interpretation should be directed to Human Resource Person.</li>
                                                </ul>
                                                <p>The Leave Policy is applicable to all permanent staff of the company. All permanent employees are eligible to avail the various leave types from their probationary period onwards. For computing leave accrued in a year, the calendar year period from 1st Jan to 31st December will be considered.</p><br />
                                                <h4>FOR MEN TO WEAR</h4>
                                                
                                                <ul>
                                                    <li>Wear formal shirts only and put your buttons until your collar button this issue is very important</li>
                                                    <li>Sweaters, Polo shirts with collars, Slacks, Chinos or Dockers are acceptable</li>
                                                    <li>Always wear full length trousers with matching combination of your shirt</li>
                                                    <li>Good pair of leather shoes of black and brown colors with always polished</li>
                                                    <li>Socks you are wearing always should match with your shoes and trousers</li>
                                                    <li>Wear formal belts with sleek buckle and it should match your trouser</li>
                                                    <li>Maintain a good hairstyle according to your dress</li>
                                                </ul><br />
                                                <h4>FOR MEN NOT TO WEAR</h4>
                                                <ul>
                                                <li>Don’t wear t-shirts (Except Friday), shirts with thick stripes and checks and shirts with v neck is not acceptable</li>
                                                <li>Trousers should not have any pleats and don’t wear unmatching combination of shirt</li>
                                                <li>Don’t wear torn shoes, casual shoes and formal shoes with crazy colours</li>
                                                <li>Don’t wear torn socks or uncleaned socks</li>
                                                <li>Don’t wear belts, watches in unfit position</li>
                                                    </ul>
                                              <br />
                                                <h4>FOR WOMEN TO WEAR</h4>
                                                <ul>
                                                    <li>You can wear Kurtis, salwarkameez, and formal shirts</li>
                                                    <li>Wear full length skirts, trousers</li>
                                                    <li>Sweaters, Blazers, Polo shirts and slacks are acceptable</li>
                                                    <li>Wear heels with 1 or 2 inches it is standard or sandals with good colours</li>
                                                    <li>If you are carrying hand bags, then prefer black or brown</li>
                                                    <li>When wearing accessories like ear rings, bracelets prefer with small design</li>
                                                    <li>Maintain a good hairstyle according to dress</li>
                                                </ul><br />
                                                <h4>FOR WOMEN NOT TO WEAR</h4>
                                               <ul>
                                                   <li>Don’t wear t-shirts tight fitting, sleeveless, transparent clothes</li>
                                                   <li>Wear saree if your company accepted</li>
                                                   <li>Don’t wear sandals with different colours with glittering designs</li>
                                                   <li>Don’t wear shoes or sandals with high heels</li>
                                                   <li>Don’t wear accessories with large designs heavy jewelry</li>

                                                   

                                               </ul><br />
                                                <h4>ENFORCEMENT</h4>
                                                <p>Department managers and supervisors are responsible for monitoring and enforcing this policy. The policy will be administered according to the following action steps:</p>
                                                
                                                <p>1. If questionable attire is worn in the office, the respective department supervisor/manager will hold a personal, private discussion with the employee to advice and counsel the employee regarding the inappropriateness of the attire.</p>
                                                <p>2. If an obvious policy violation occurs, the department supervisor/manager will hold a private discussion with the employee and ask the employee to go home and change his/her attire immediately.</p>
                                                <p>3. Repeated policy violations will result in disciplinary action, up to and including termination.</p>
                                                <p>4. Enforcement of this guideline is the responsibility of Company management and supervisory personnel.</p>
                                               <br />
                                                <h4>REVIEW AND REVISON</h4>
                                                <p>The Company reserves the right to rescind and/or amend this, and all Company policies, at any time.</p>
                                               
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




