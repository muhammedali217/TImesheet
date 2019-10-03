<!DOCTYPE html>
<html>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Employee Add</title>
    <link href="admin/css/vendor.min.css" rel="stylesheet"/>
     <link href="admin/css/theme-core.min.css" rel="stylesheet"/>
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
<style type="text/css">
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
}

h1 {
  text-align: center;  
}

input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
.tab {
  display: none;
}

button {
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

#prevBtn {
  background-color: #bbbbbb;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4CAF50;
}
</style>
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
                        <img src="admin/images/tech_v-Logo_colo5r.png" alt="techvLogo"/>
                    </a>
                </div>
                <div class="navbar-collapse collapse" id="collapse">                    
                    <ul class="nav navbar-nav navbar-right">                       
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

            <div class="st-content" id="content">
                <!-- extra div for emulating position:fixed of the menu -->
                <div class="st-content-inner">
                    <div class="container-fluid">

                        <div class="row" data-toggle="isotope">
                            <div class="item col-md-12 col-sm-12 col-xs-12">
                                <!-- Leaderboard -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h2 align="center">ADD EMPLOYEE</h2>
                                    </div>
                                    <hr />














<!-- The Code for Text Boxes-->
  <!-- One "tab" for each step in the form: -->
  <div class="tab">Name:
    <p><input placeholder="First name..." oninput="this.className = ''" name="fname"></p>
    <p><input placeholder="Last name..." oninput="this.className = ''" name="lname"></p>
  </div>
  <div class="tab">Contact Info:
    <p><input placeholder="E-mail..." oninput="this.className = ''" name="email"></p>
    <p><input placeholder="Phone..." oninput="this.className = ''" name="phone"></p>
  </div>
  <div class="tab">Birthday:
    <p><input placeholder="dd" oninput="this.className = ''" name="dd"></p>
    <p><input placeholder="mm" oninput="this.className = ''" name="nn"></p>
    <p><input placeholder="yyyy" oninput="this.className = ''" name="yyyy"></p>
  </div>
  <div class="tab">Login Info:
    <p><input placeholder="Username..." oninput="this.className = ''" name="uname"></p>
    <p><input placeholder="Password..." oninput="this.className = ''" name="pword" type="password"></p>
  </div>
  <div style="overflow:auto;">
    <div style="float:right;">
      <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
      <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
    </div>
  </div>
  <!-- Circles which indicates the steps of the form: -->
  <div style="text-align:center;margin-top:40px;">
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
  </div>

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
<script>
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the crurrent tab

    function showTab(n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }
        //... and run a function that will display the correct step indicator:
        fixStepIndicator(n)
    }

    function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form...
        if (currentTab >= x.length) {
            // ... the form gets submitted:
            document.getElementById("regForm").submit();
            return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
    }

    function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
                // add an "invalid" class to the field:
                y[i].className += " invalid";
                // and set the current valid status to false
                valid = false;
            }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
    }

    function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " active";
    }
</script>
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
    <script src="admin/js/vendor-core.min.js"></script>
    
    <script src="alert/js/alert.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap-wizard/1.2/jquery.bootstrap.wizard.min.js"></script>
</body>
</html>