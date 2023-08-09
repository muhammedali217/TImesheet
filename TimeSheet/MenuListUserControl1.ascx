<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="MenuListUserControl1.ascx.cs" Inherits="TimeSheet.MenuListUserControl1" %>
<div>
                                         <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                              <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="viewcandidates.html"><i class="fa fa-male"></i><span>Candidates</span></a>
                                            </li>
                                           
                                            
                                        </ul>
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
													<li>
                                                        <a href="Delete_Employee.aspx"> 
                                                            <span>Disable Employee</span>
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
                                         <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="leaveupdate.aspx"><i class="fa fa-file"></i><span>Update Quarterly Leave</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="viewsubscription.aspx"><i class="fa fa-book"></i><span>Subscription List</span></a>
                                            </li>
                                           
                                            
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="EnableTimesheet.aspx"><i class="fa fa-exchange"></i><span>Enable Timesheet</span></a>
                                                </li></ul>
                                         <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="RunJobs.aspx"><i class="fa fa-square"></i><span>SQL Jobs</span></a>
                                                </li></ul>
                                         
                                    </div>
