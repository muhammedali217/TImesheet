<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Employee_Handbook.aspx.cs" Inherits="TimeSheet.Employee_Handbook" %>

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
                                       <%-- <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="employmentcert.aspx"><i class="fa fa-th-large"></i><span>Employment Certificate</span></a>

                                            </li>


                                        </ul>--%>
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
                                            <li class="active"><a href="Employee_Handbook.aspx"><i class="fa fa-calendar"></i><span>Employee Handbook</span></a>
                                            </li>
                                        </ul>
                                        <%--<ul class="sidebar-menu sm-icons-right sm-icons-block">

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
                                        </ul>--%>

                                       <%-- <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="empjobdesc.aspx"><i class="fa fa-graduation-cap"></i><span>Job Description</span></a>
                                            </li>


                                        </ul>--%>
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
                                        

                                        <h2 align="center">HR HANDBOOK</h2>
                                         </div>
                                    <hr />
                                        <div class="col-md-8 col-md-offset-2 mt-3">
                                            <div id="leavepolicy">
                                            <div>
                                                <h5><b>“22” CODE OF CONDUCT FOR EMPLOYEES / INTERNS / CONTRACTORS / CONSULTANTS-2022</b></h5>
                                                </br>
                                                 <h5><b>1. Work from home (WFH): </b></h5>
                                                 <p>  All employees are eligible for work-from-home <b>one day in a month</b> with explicit written approval from the line manager. Based on the approval from your line manager apply for the work from home through our timesheet portal within two days’ time to avoid the LOP. In case of any important client visit, WFH will not be allowed for anyone. </p>
                                            <h5><b>2. Leaves needs to apply in advance: </b></h5>
                                                 <p> All employees must apply for the leaves in advance. This ensures that no crucial work gets affected in your absence. In case of extreme emergency, leaves may be granted on approval from the line manager (case to case basis) </p>
                                            
                                            
                                                <h5><b> <p style="color:black">Procedure for applying the leave are as follows:</p></b></h5>
                                           
                                             <h5><b><p style="color:black">“Leave request email to your respective line manager>>>Line Manager to approve the leave through email>>>After email approval, apply the leave through timesheet portal within two days’ time>>Mark your leave against the leave category with proper reason for leave”</p></b></h5>
                                            <h5><b><p style="color:black">For more details regarding the leave policy, please refer to section “T1”</p></b></h5>

                                                <h5><b>3. Attendance-Linked with Monthly Payroll: </b></h5>
                                                 <p> It is important to note that attendance and adherence to working hours is directly linked with <b>monthly payroll</b>. Hence, all must ensure that attendance and working hours are properly recorded via proper and regular usage of access cards provided w.e.f 1st August 2022. In case if you are facing any issues with the access, please contact the Infrastructure Manager immediately.</p>

                                                 <h5><b>4. Working hours: </b></h5>
                                                 <p> Each employee is expected to spend 8 hours in office, excluding all breaks. (The standard working hours (Monday-Friday) being 9.30 am–5.30 pm). Working hours’ records are directly linked to and will affect the payroll for the relevant month. This will be monitored through swipe card records.</p>

                                                 <h5><b>5. Holiday Calendar </b></h5>

                                                 <ul>
                                                    <li>We request everyone to follow the company “Holiday Calendar” published in our timesheet portal.  </li>
                                                    <li>In case any of the projects needs to follow the client holiday calendar, please take an explicit approval from your line manager in Techvantage.   </li>
                                                    <li>If you are availing any Optional holidays you should report to your line manager in advance through an email. If Optional holidays are availed without Line Manager approval, it may be considered as LOP  </li>
                                                    
                                                </ul>
                                                <h5><b>6. Timesheet entry </b></h5>
                                                 <p> Timesheet is the internal reporting system of Techvantage and is to be mandatorily filled before 5 pm every Friday. This is necessary as it is linked to payroll calculations. In case an employee fails to fill the timesheet within the mentioned timeline, explicit due consideration can be given through line manager only in case of genuine emergencies. Please mark the timesheet against the ‘relevant project’. In case if timesheet is not updated, please inform your line manager immediately. Kindly note that entering time against productive tasks is the responsibility of the employee. If an employee fills time against items like ‘Self learning’ (greater than 40 hours in an year), it shall be rejected in the system.</p>

                                                  <p>Procedure for the special case are as follows: Initiate an email to your line manager copying the HR within 12 hours of time. </p>

                                                 <h5><b>7. Dress Code Policy </b></h5>
                                                 <p> All the employees must follow the dress code policy without any fail--“Business attire” during normal business operations and “casual business attire” on Fridays. </p>
                                                 <h5><b><p style="color:black">For more details regarding the Dress Code Policy, please refer to section “T2”</p></b></h5>


                                                 <h5><b>8. Reimbursement Policy- All company expenses are made against a budget allocated towards the same. </b></h5>
                                                 <p> Techvantage Systems expects employees to act responsibly and professionally when incurring and submitting costs. The organization will reimburse employees for reasonable expenses only for pre-approved business. This may include for example, travel fares, accommodations, meals, tips, telephone and fax charges, and purchases made on behalf of the organization with explicit and written prior approval. All employees are requested to submit the bills against the expense to the following email id: bills@techvantagesystems.com. Expense reimbursements are not considered for approval if it is not submitted on time (within a week of expense) and/or without your line managers prior approval. </p>
                                                 <h5><b><p style="color:black">For more details regarding the Reimbursement Policy, please refer to section “T3”</p></b></h5>

                                                 <h5><b>9. Laptop policy </b></h5>
                                                 <p> Personal laptops are not allowed inside the office premises unless explicit written permission is received from the Infrastructure Manager. If and when a personal laptop is brought inside the office premises, please mark the laptop “in” and “out” time in the assigned register.   </p>

                                                 <h5><b>10. Data Security </b></h5>
                                                 <p> As per the confidentiality agreement signed by you in the employment/contract securing data and company information is of utmost importance. Any breaches in security protocol will lead to strict and swift disciplinary action and may even result in termination of employment contract. Employees/Interns/Contractors/Consultants will be given access to a Virtual Private Network to secure connections with company servers and networks (if required). The VPN must be used at all times during work hours. Under no circumstances may the VPN be used outside of work hours. </p>

                                                 <h5><b>11. Company Assets</b></h5>
                                                 <p> Quality means doing it right when no one is looking. All company assets should be handled with care. If any company assets are to be taken out of the office premises, it should have the explicit written approval of the IT Manager who in turn will update the asset movement register. </p>

                                                 <h5><b>12.Follow Company Social Media Handles </b></h5>
                                                 <p> All employees are expected to follow the official company page on all social media handles (LinkedIn, Facebook, Instagram, Twitter, etc.). Each one is expected to map their LinkedIn handles to company handle on LinkedIn (if possible other Social Media Site’s as well). At all times, employees must refrain from indulging in and promoting vile content and hate speech or any such conversation that affects the company adversely. Failing to do so may result in legal action. For more points, please refer the social media Policy. </p>

                                                  <h5><b><p style="color:black">For more details regarding the Social Media policy, please refer to section “T4”</p></b></h5>

                                                 <h5><b>13. Email Etiquette </b></h5>
                                                 <p> All are expected to ensure that the mails they send are professional and clear. It is suggested to proofread the mail and check for spelling and grammar twice before sending out the mail. Email signature should be aligned to the format mentioned in the official style guide for Techvantage. It is expected that all important mails should be reverted to within 4 hours of receiving the mail without any fail. Any correspondence from a co-worker or client must be answered as quickly as possible. It is also expected that emails are configured in the smart phones so that urgent emails can be responded to after office hours. </p>

                                                 <h5><b>14. At the workstations: </b></h5>
                                                 
                                                 <ul>
                                                    <li>Great people have great values and great ethics in the workplace. </li>
                                                    <li>Always keep calm and keep your workstations clean. This promotes a positive work environment. </li>
                                                    <li>At the close of business each day, all are expected to clear their desk of any sensitive/confidential information from their respective desks  </li>
                                                    <li>Keep your workstation free of unwanted documents and files. </li>
                                                      <li>Please ensure to place your chairs back in position whenever you leave the workstation </li>
                                                      <li>Please avoid keeping stacks of files/bags at your desk. Keep them below the desk </li>
                                                      <li>Bring creativity to the office instead of your helmets and raincoats. Remember to keep them outside the reception area.</li>
                                                      <li>Want to avoid cockroaches and insects? Please use the pantry only for lunch and snacks. No food items are allowed inside the office [Exception: at the time of client meeting, tea/coffee may be served in meeting rooms]</li>
                                                      <li>Chewing gums in workstations must be avoided </li>
                                                      <li>Smoking at the workstation/office premise/toilets at any time is an offense </li>
                                                      <li>Please make sure to use the workstation walls for the professional purpose </li>
                                                      <li>Feel free to express your ideas on the whiteboards provided. But make sure that your ideas are not leaked. Please clean it immediately after use. </li>

                                                     <li>Switch off unwanted lights. We encourage using daylight to the extent possible </li>

                                                     <li>Turn off your printer, scanner, computer, lights when you leave the office. Please ensure that all switches in your workstation are in ‘off’ position before you leave. </li>

                                                     <li>No time to plant a tree? Save paper, save trees. Think before you print. Please pick up all printed matter of the printer and ensure that the printer is stocked with paper at all times </li>

                                                     <li>Take care of your tone and pitch while speaking in the office. Remember there are other employees sitting around you as well. </li>

                                                     <li>Please have a habit of keeping your own notepad and pen ready for use at any time especially for meetings/calls.  </li>

                                                </ul>


                                                 <h5><b>15. Refreshment Area </b></h5>
                                                 <ul>
                                                    <li>Cleanliness is next to godliness. Everyone is expected to ensure proper usage of washrooms and cleanliness of the same.  </li>
                                                    <li>Ideas can happen in the most unlikely places only if it's clean at all times. Please keep the pantry and bathroom areas ready for innovation </li>
                                                    <li>Tissues, hand wash, and other consumables should be used at a minimal level. If there are any issues with these facilities, you should notify your HRM immediately  </li>
                                                    <li>Keep the toilet area dry and clean always.</li>
                                                      </ul>

                                                 <h5><b>16. Meeting Room </b></h5>
                                                 <ul>
                                                    <li>If you need to book or use the meeting room, please ensure that you book through the intranet to avoid chaos  </li>
                                                    <li>Please make use of whiteboards, projectors, Television, graphs, pointers, slides for better clarity </li>
                                                    <li>Actively attend the meetings and training sessions with your own notepad and pen  </li>
                                                    <li>Always keep your cell phone in silent or vibrator mode during the meetings and training sessions. Walking out with your phone in the middle of a meeting is bad etiquette.</li>
                                                     <li>If any chairs are taken from the workstations, make sure to place the chairs back in position.</li>
                                                      </ul>


                                                 <h5><b>17. Energy Saving </b></h5>
                                                 <p> Saving energy is a healthy habit that needs to be ingrained in each employees’ minds. All electrical appliances and switches should be turned off when not in need. Please keep these things in your mind. </p>

                                                <ul>
                                                    <li>People who shine from within don't need the spotlight :)  </li>
                                                    <li>Please switch off the lights/AC before you leave the place- ‘Conserve energy to preserve our future’</li>
                                                    <li>Please shutdown your computers before you leave the place  </li>
                                                    
                                                      </ul>



                                                 <h5><b>18. Car/Two-Wheeler Parking</b></h5>
                                                 <p> All employees are requested to park their vehicles as per the parking rule followed by the builder. For people who are working out of Kinfra office, kindly note the following: </p>

                                                 <p> Car parking: Covered car parking is limited, and employees must take the special approval from the management in advance (Paid covered car parking slots are: 56,57,58,59-Ground floor, Accel Infinium-1). For uncovered car parking and two-wheeler parking- The employees must obey the rules followed by the builder. In case if you have any queries/concerns, please reach out to the HRM.  </p>


                                                 <h5><b>19. Waste management </b></h5>
                                                 <p> Techvantage believes in sustainability. Help Techvantage to contribute to the environment through proper waste management. Use bins provided for specific purposes, so we can reduce, reuse, and recycle accordingly. Kindly read the specific purpose of the bin and dispose of the waste as appropriate.  </p>

                                                 <h5><b>20. Food items are not allowed inside the office premises </b></h5>
                                                 <p> Maintaining cleanliness and hygiene within the workplace goes a long way. Food items are not permitted within the workplace under any circumstance. </p>

                                                 <h5><b>21. Cost Reduction Ideas: </b></h5>
                                                 <ul>
                                                    <li>Minimization is asking why before you buy. We welcome cost-saving ideas from the employees.   </li>
                                                    <li>We will reward people who come up with cost-saving ideas of significant value. Please do participate in the scheme and contact HRM for details. </li>
                                                    
                                                      </ul>

                                                 <h5><b>22. Work expectations: </b></h5>
                                                 <ul>
                                                  <li>All employees must have an active OKR at all times </li>
                                                    <li>It is the employee’s responsibility to set his/her OKR in discussion with the Line Manager </li>
                                                <li>The KPI’s one will be measured during an appraisal cycle will be according to the OKR’s assigned. </li>
                                                <li>You must follow the work schedules provided, be sure to meet deadlines, uphold high-quality standards, and submit daily status reports. </li>
                                                <li>And while some flexibility is allowed, you must agree to work set hours as much as possible, five days a week. </li>
                                                <li>The performance will be measured weekly/monthly </li>
</ul>

                                            </div>
                                                </div>
                                            <div id="leavepolicy">
                                                <h2 align="center">‘T1’-LEAVE POLICY</h2>
                                                <h4>1. SCOPE</h4>
                                                <p>Techvantage Systems Leave Policy covers the following aspects regarding leave that can be availed by the employees of Techvantage (henceforth referred to as the company):</p>
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

                                             <div id="leavepolicy">
                                               <h2 align="center">‘T2’-DRESS CODE POLICY</h2>
                                                
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
                                             <div id="leavepolicy">
                                                <h2 align="center">‘T3’-EXPENSE REIMBURSEMENT POLICY</h2>
                                                
                                                <p>This policy is designed to assist employees in reporting expenses incurred while conducting Techvantage Systems business activities.</p>
                                                <p>Techvantage Systems expects employees to act responsibly and professionally when incurring and submitting costs. The organization will reimburse employees for reasonable expenses on pre-approved business. This includes, for example, travel fares, accommodations, meals, tips, telephone and fax charges, and purchases made on behalf of the organization.</p>
                                                <p>Techvantage Systems does not pay for local travel to and from the office. If employees use their vehicles for business travel, mileage will be reimbursed as per the Treasury Board Guidelines and for appropriate parking fees. Techvantage Systems will not be responsible for fuel, maintenance, traffic or parking violations.</p><br />
                                                <h4>GENERAL GUIDELINES</h4>
                                                <p>Original receipts are required for reimbursement of all expenses except for per diems. These expenses include:</p>
                                                <ul>
                                                    <li>Original boarding passes for airplane / train travel</li>
                                                    <li>Credit card receipts</li>
                                                    <li>Detailed merchant receipts</li>
                                                    
                                                </ul>
                                               <p>Receipts must be accompanied by a summary which outlines</p>
                                                <ul>
                                                <li>The nature of the expense</li>
                                                <li>The name and titles of the individuals involved</li>
                                                <li>The purpose for the expense</li>
                                            
                                                    </ul>

                                             <p>Expense summaries must be submitted with receipts and approved by the Human resource person.All expenses and summaries must be submitted within 5 days to Human Resource for payment.</p><br />
                                                <h4>TRAVEL GUIDELINES</h4>
                                                <ul>
                                                    <li>Employees are encouraged to fly coach class with the lowest available airfare for non-stop travel.   </li>
                                                    <li>If a car rental is required, employees are requested to rent mid-sized or compact vehicles. Employees will be reimbursed for the fuel costs associated with renting a vehicle</li>
                                                    <li>Employees will be reimbursed for reasonable hotel accommodations. Discounted room rates should be requested at the time of room booking</li>
                                                    <li>Per Diem rates for meal and incidentals will be provided; no receipts are required. The per diem amount paid for each day of travel is set out under the Treasury Board Guidelines. Per Diem rates will not be paid where other meal arrangements are provided. For example, a luncheon included with an event</li>
                                                    <li>The following list includes examples of non-reimbursable expenses: </li>
                                                    <ul>
                                                    <li>Personal travel insurance</li>
                                                    <li>Personal reading materials</li>
                                                        <li>Childcare</li>
                                                        <li>Toiletries, cosmetics, or grooming products</li>
                                                        <li>Expenses occurred by spouses, children, or relatives</li>
                                                        <li>In-room movies or video games</li>
                                                        <li>Sporting activities, shows, etc</li>
                                                        </ul>
                                                </ul><br />
                                                <p>Any questions related to the content of this policy or its interpretation should be directed to the Human resource person.</p>
                                                
                                               
                                            </div>

                                            <div id="leavepolicy">
                                                <h2 align="center">‘T4’-SOCIAL MEDIA POLICY FOR EMPLOYEES</h2>
                                                 <h4>POLICY</h4>
                                                <p>At Techvantage, we understand that social media can be a fun and rewarding way to share your life and opinions with family, friends, and co-workers around the world. However, use of social media also presents certain risks and carries with it certain responsibilities. </p>
                                                <p>This policy applies to all employees of Techvantage and is intended to assist you in making responsible decisions about your use of social media. We have established these guidelines for appropriate use of social media, which include blogs, wikis, microblogs, message boards, chat rooms, electronic newsletters, online forums, social networking sites, and other sites and services that permit users to share information with others in a contemporaneous manner.</p>
                                                <h4>Guidelines</h4>
                                                <p>In the rapidly expanding world of electronic communication, social media can mean many things. Social media includes all means of communicating or posting information or content of any sort on the Internet, including to your own or someone else’s web log or blog, journal or diary, personal web site, social networking or affinity web site, web bulletin board or a chat room, whether or not associated or affiliated with Techvantage as well as any other form of electronic communication. </p>
                                                <p>Ultimately, you are solely responsible for what you post online. Before creating online content, consider some of the risks and rewards that are involved. Keep in mind that any of your conduct that adversely affects your job performance, the performance of fellow associates or otherwise adversely affects members, customers, suppliers, people who work on behalf of Techvantage or Techvantage’s legitimate business interests may result in disciplinary action up to and including termination.</p>
                                                
                                               <h4>Know and follow the rules</h4>
                                                
                                                <p>Carefully read the below guidelines and ensure your postings are consistent with Techvantage Social Media Policy. Inappropriate postings that may include discriminatory remarks, harassment, and threats of violence or similar inappropriate or unlawful conduct will not be tolerated and may subject you to disciplinary action up to and including termination.</p>
                                            
                                                <h4>Policy elements</h4>

                                                <h4><p style="color:black" >Using personal social media</p></h4>

                                                <ul>
                                                    <li>We [allow] our employees to access their personal accounts at work. But we expect you to act responsibly and ensure your productivity is not affected. </li>
                                                    <li>Whether you are using your accounts for business or personal purposes, you may easily get sidetracked by the vast amount of available content. So, please restrict your use to a few minutes per workday.</li>
                                                    <li>We ask you to be careful when posting on social media, too. We cannot restrict what you post there, but we expect you to adhere to our confidentiality policies at all times. </li>
                                                    <li>We also caution you to avoid violating our anti-harassment policies or posting something that might make your collaboration with your colleagues more difficult (e.g., hate speech against groups where colleagues belong to). </li>
                                                <li>The name and titles of the individuals involved</li>
                                                    
                                                </ul>
                                                <h4><p style="color:black" >We advise our employees to:</p></h4>
                                                <ul>
                                                
                                                <li>Ensure others know that your personal account or statements do not represent our company. You should not state or imply that your personal opinions and content are authorized or endorsed by our company. We advise using a disclaimer such as “opinions are my own” to avoid misunderstandings.</li>
                                            <li>Avoid sharing intellectual property like trademarks on a personal account without approval. Confidentiality policies and laws always apply.</li>
                                                    <li>Avoid any defamatory, offensive, or derogatory content. It may be considered as a violation of our company’s anti-harassment policy, if directed towards colleagues, clients or partners.</li>
                                                    <li>Any information that is shared online is permanent and public. Please ensure that the information projected is factually accurate and in line with Techvantage policies.</li>
                                                    </ul>


                                                <h4><p style="color:black" >Representing our company</p></h4>

                                             <p>Some employees represent our company by handling corporate social media accounts or speak on our company’s behalf. When you’re sitting behind a corporate social media account, we expect you to act carefully and responsibly to protect our company’s image and reputation. You should:</p>
                                               <ul> 
                                               <li>Be respectful, polite, and patient, when engaging in conversations on our company's behalf. You should be extra careful when making declarations or promises towards customers and stakeholders.</li>
                                                <li>Avoid speaking on matters outside your field of expertise when possible. Everyone should be careful not to answer questions or make statements that fall under somebody else’s responsibility.</li>
                                                <li>Follow our confidentiality policy and data protection policy and observe laws on copyright, trademarks, plagiarism and fair use.</li>
                                                <li>Be prudent in your actions when reached and/or contacted for a connection. It is essential that you be able to judge the quality of the lead.</li>
                                                <li>Inform our HR/Marketing department when you are about to share any major-impact content.</li>
                                                <li>Avoid deleting or ignoring comments for no reason. They should listen and reply to criticism.</li>
                                                <li>Never post discriminatory, offensive, or libelous content and commentary.</li>
                                                <li>Correct or remove any misleading or false content as quickly as possible.</li>
                                                 </ul>



                                                <h4>Do’s and Don’ts to follow</h4>

                                                <h4><p style="color:black" >Do’s</p></h4>

                                                <ul> 
                                               <li>Employees are allowed to repost/share the contents posted from the official Techvantage channels. </li>
                                                <li>Be cautious while clicking on links from unknown entities as these could viruses/ malwares and can compromise your social media identity.</li>
                                                <li>Follow the right sources, influencers, prospects, and industry leaders which will give you and insight into their business and spheres of interest and influence.</li>
                                                <li>Employees can identify Techvantage as their employer on Social medias. </li>
                                                <li>Employees are allowed to have their personal profile on Social Medias.</li>
                                                <li>Employees can generate leads through social media channels/share opportunities with the marketing team. </li>
                                                
                                                 </ul>

<h4><p style="color:black" >Don’t Do’s</p></h4>

                                                <ul> 
                                               <li>Employees are not allowed to create any blog on behalf of Techvantage or any of its service lines unless you are assigned to represent the company on social medias.</li>
                                                <li>Do not criticize Techvantage or Techvantage’s competitors either in your personal or competitor's official blogs, public posts,etc</li>
                                                <li>Do not justify/comment on rumors or hearsay and do not comment about Techvantage leaders.</li>
                                                <li>Informal online groups and communities such as parody accounts, or groups disparaging companies or a personnel and groups promoting vendetta against someone must be avoided. </li>
                                                <li>Do not reveal any pricing and fees details (This is highly confidential. Not to be shared at any level)</li>
                                                <li>Do not post or reveal details about Techvantage’s customers’ information, engagement, deals, revenue &headcount information etc. </li>
                                                     <li>Do not share confidential videos like internal training, customer visits, etc. </li>

                                                    <li>Do not share any documents containing content owned by Techvantage, unless authorized or already in public domain through proper channels from Techvantage.</li>
                                                
                                                 </ul>
<h4>PROCEDURES</h4>
<p>The following principles apply to professional use of social media on behalf of Techvantage as well as personal use of social media when referencing Techvantage Systems Private Limited.</p>

 <ul> 
                                               <li>Employees need to know and adhere to the Techvantage’s Code of Conduct, Employee Handbook, and other company policies when using social media in reference to Techvantage. </li>
                                                <li>Employees should be aware of the effect their actions may have on their images, as well as Techvantage’s image. The information that employees post or publish may be public information for a long time.</li>
                                                <li>Employees should be aware that Techvantage may observe content and information made available by employees through social media.</li>
                                                <li>Employees should use their best judgment in posting material that is neither inappropriate nor harmful to Techvantage, its employees, or customers. </li>
                                                <li>Although not an exclusive list, some specific examples of prohibited social media conduct include posting commentary, content, or images that are defamatory, pornographic, proprietary, harassing, libelous, or that can create a hostile work environment.</li>
                                                <li>Employees are not to publish, post or release any information that is considered confidential or not public. If there are questions about what is considered confidential, employees should check with the Human Resources Department. </li>
                                                     <li>Social media networks, blogs and other types of online content sometimes generate press and media attention or legal questions. Employees should refer these inquiries to authorized Techvantage spokespersons. </li>

                                                    <li>If employees find encounter a situation while using social media that threatens to become antagonistic, employees should disengage from the dialogue in a polite manner and seek the advice of a supervisor.</li>
                                                <li>•	Employees should get appropriate permission before you refer to or post images of current or former employees, members, vendors or suppliers. Additionally, employees should get appropriate permission to use a third party's copyrights, copyrighted material, trademarks, service marks or other intellectual property.</li>
     <li>Social media use shouldn't interfere with employee’s responsibilities at Techvantage.</li>
     <li>Techvantage’s computer systems are to be used for business purposes only. When using Techvantage’s computer systems, use of social media for business purposes is allowed (ex: Facebook, Twitter, Techvantage blogs and LinkedIn), but personal use of social media networks or personal blogging of online content is discouraged and could result in disciplinary action.</li>
     <li>Subject to applicable law, after‐hours online activity that violates the Company’s Code of Conduct or any other company policy may subject an employee to disciplinary action or termination.</li>
     <li>If employees publish content after‐hours that involves work or subjects associated with Techvantage a disclaimer should be used, such as this: “The postings on this site are my own and may not represent Techvantage’s positions, strategies or opinions.”</li>
     <li>It is highly recommended that employees keep Techvantage related social media accounts separate from personal accounts, if practical.</li>

                                                 </ul>

                                                <h4>Disciplinary Consequences</h4>
<p>We may have to take disciplinary action leading up to and including termination if employees do not follow this policy's guidelines. Examples of non-conformity with the employee social media policy include but are not limited to:</p>

<ul> 
                                               <li>Disregarding job responsibilities and deadlines to use social media at work. </li>
                                                <li>Disclosing confidential information through personal or corporate accounts.</li>
                                                <li>Directing offensive comments towards other members of the online community.</li>
      </ul>
                                                <p>If you violate this policy inadvertently, you may receive a reprimand. We expect you to comply after that, or stricter disciplinary actions will apply.</p>

                                                 <h4>For more information</h4>
<b><p>If you have questions or need further guidance, please contact your HR representative immediately. </p></b>
                                                <br />
                                                <br />

                                                <b><p>“I, hereby, accept and agree to abide by all the terms and conditions listed in this document.
and do understand that Techvantage has the right to take action in case I fail in any of the
above at any point in time during my tenure in Techvantage.”
</p></b>



                                            </div>


                                           
                                        </div>


                                         <div style="padding: 15px;" class="col-md-6 col-md-offset-3  text-center">
                                            <section class="btn-group">
                                                
                                               
                                                <button type="button" class="btn btn-default bt.n-lg" id="btnSubmit">I read and accept</button>
                                                    
                                               
                                                
                                            </section>
                                            <label style="font-size:large;color:green;"id="lblStatus"></label>
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
    <script src="pagescripts/Employee_Handbook.js"></script>
    <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>

    <script src="alert/js/alert.min.js"></script>
</body>
</html>