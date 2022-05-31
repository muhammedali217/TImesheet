<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Editasset.aspx.cs" Inherits="TimeSheet.Editasset" %>

<!DOCTYPE html>
<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Project Add</title>
   
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
                    <a href="ProjectAdd.aspx" class="navbar-brand hidden-xs navbar-brand-primary">
                        <img src="admin/images/tech_v-Logo_colo5r.png" alt="techvLogo"/>
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
                                            <li class="active"><a href="projectpercentagelist.aspx"><i class="fa fa-th-large"></i><span>Project Percenatage</span></a>
                                            </li>
                                        </ul>

                                        <ul class="sidebar-menu sm-icons-right sm-icons-block">
                                            <li class="active"><a href="inv_report.aspx"><i class="fa fa-th-large"></i><span>Involvement Report</span></a>
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
           <!-- Need to enter -->

              <div class="st-content" id="content">
                <!-- extra div for emulating position:fixed of the menu -->
                <div class="st-content-inner">
                    <div class="container-fluid">

                        <div class="row" data-toggle="isotope">
                            <div class="item col-md-12 col-sm-12 col-xs-12">
                                <!-- Leaderboard -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h2 align="center">Edit Asset</h2>
                                    </div>
                                    <hr />
                                    <form>
                                     <div class="col-md-6 col-md-offset-3" >
                                         

                                         <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                          <label for="exampleInputEmail1">Asset Name</label></br>
                                         <select   class="form-control input-alt" name="ddlAssetname" id="ddlAssetname">
                                        <option value="">Choose Asset</option>
                                    </select>
                                         </fieldset>
                                      </section>
                                          <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Asset Code</label> <font color="red" size="4px"><b> * </b></font>
                                        <input type="text" class="form-control" id="txtAssetCode" placeholder="Enter Asset Code"/>
                                     
                                       <%-- <input type="text" class="form-control" id="txtAssetName" placeholder="Enter Asset Name"/>--%>
                                      </fieldset>
                                      </section>
                                            </div>
                                        <div class="col-md-6 col-md-offset-3" >

                                      <section class="col-md-6">
                                             <fieldset class="form-gr.oup">
                                                 <label for="exampleInputEmail1">Asset Type</label><font color="red" size="4px"><b> * </b></font>
                                            <div class='input-group date' id='Div1'>
                                                 <select class="form-control input-alt" name="ddlAsseetType" id="ddlAsseetType">
                                        <option value="">Choose Asset Type</option>
                                    </select>
                                                
                                            </div>
                                        </fieldset>

                                      </section>

                                      <section class="col-md-6">
                                             <fieldset class="form-gr.oup">
                                                 <label for="exampleInputEmail1">Asset Enhancement</label><font color="red" size="4px"><b> * </b></font>
                                            <div class='input-group date' >
                                                 <input type="text" class="form-control" id="txtAssetEnhance" placeholder="Enter Asset Enhancement"/>
                                               
                                            </div>
                                        </fieldset>

                                      </section>
                                            </div>
                                         <div class="col-md-6 col-md-offset-3" >

                                          <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Asset Key</label><font color="red" size="4px"><b> * </b></font>
                                         <input type="text" class="form-control" id="txtAssetKey" placeholder="Enter Asset Key"/>
                                      </fieldset>
                                      </section>

                                          <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Softwares Used</label>
                                        <input type="text" class="form-control" id="txtUsesw" placeholder="Enter Softwares"/>
                                      </fieldset>
                                      </section>
                                            </div>

                            <div class="col-md-6 col-md-offset-3" >
                                    <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Asset Status </label><font color="red" size="4px"><b> </b></font>
                                        <select class="form-control input-alt" name="ddlStatus" id="ddlStatus">
                                        <option value="">Choose Status</option>
                                    </select>
                                      </fieldset>
                                      </section>

                                          <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Remarks</label><br />
                                        <input type="text" class="form-control" id="txtRemarks" placeholder="Enter Remarksy"/>
                                      </fieldset>
                                      </section>
                                    </div>

                                         <div class="col-md-6 col-md-offset-3" >
                                    <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Licenced Softwares</label><font color="red" size="4px"><b> </b></font>
                                        <input type="text" class="form-control" id="txtLicenced" placeholder="Licenced Softwares"/>
                                      </fieldset>
                                      </section>
<section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Cess</label><br />
                                        <input type="text" class="form-control" id="txtCess" placeholder="Cess"/>
                                      </fieldset>
                                      </section>
                                          
                                    </div>
                       
                
                                   


                                         

                                    

                                         


                                         <span class="clearfix"></span>
                                      <hr />
                                      <div style="padding:15px;" class="col-md-6 col-md-offset-3  text-center" >
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

   
     <script src="admin/js/jquery.js"></script>
   <script src="pagescripts/EditAsset.js"></script>
   <script src="bootstrap/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="alert/js/alert.min.js"></script>
</body>
</html>