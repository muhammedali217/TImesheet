﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AddProfitCostCenter.aspx.cs" Inherits="TimeSheet.AddProfitCostCenter" %>

<!DOCTYPE html>

<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Techvantage | Employee Database</title>
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
    <link href="https://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css " rel="stylesheet " />
<link href="https://cdn.datatables.net/responsive/2.0.2/css/responsive.dataTables.min.css" rel ="stylesheet" />
    <link href="admin/plugins/DataTables-1.10.4/media/DT_bootstrap.css" rel="stylesheet" />
    <link href="alert/css/alert.min.css" rel="stylesheet" />
    <link href="alert/themes/default/theme.min.css" rel="stylesheet" />

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
        #liActive{
            background-color:#26a69a;
        }

  .sidebar-menu li a:hover {
    font-size: 13px;
    background-color: #138C90;
}

  .sidebar.sidebar-skin-blue .sidebar-menu.sm-icons-block li.active  a i {
    color: greenyellow;
    background-color: black;
}
  td.details-control {
    background: url('https://datatables.net/examples/resources/details_open.png') no-repeat center center;
    cursor: pointer;
}
tr.shown td.details-control {
    background: url('https://datatables.net/examples/resources/details_close.png') no-repeat center center;
}
     .dataTables_wrapper .dataTables_paginate .paginate_button.current
     {
         visibility:hidden !important;
     }
    </style>
<body>
    <div class="st-container">
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
                                SuperAdmin<span class="caret"></span>
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
                                            <li class="" id="liActive"><a href="#"><i class="fa fa-calendar"></i><span>Add Profit/Cost Center</span></a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block" id="leavesidebar">
                                            <li class="">
                                                <a href="ViewProfitCostCenter.aspx" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-bed"></i>
                                                    <span>View Profit/Cost Center</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="sidebar-menu sm-icons-right sm-icons-block" id="leavesidebar">
                                            <li class="active" >
                                                <a href="EmployeeProjectReport.aspx" data-toggle="collapse" aria-expanded="true">
                                                    <i class="fa fa-bed"></i>
                                                    <span>Employee-Project Report</span>
                                                </a>
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
                <div class="st-content-inner" style="background:white">
                    <div class="container-fluid">
                        <div class="row" data-toggle="isotope">
                            <div class="item col-md-12 col-sm-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h2 align="center">Add Profit/Cost Center</h2>
                                    </div>
                                    <hr />
                                    <div>
                                  <form>
                                     <div class="col-md-6 col-md-offset-3" >
                                         <section class="col-md-6">
                                      <fieldset class="Employee-code">
                                        <label for="exampleInputEmail1">Profit/Cost Center Code</label> <font color="red" size="4px"><b> * </b></font>
                                        <input type="text" class="form-control" id="txtProfitcode" placeholder="Enter Profit/Cost Code">
                                      </fieldset>
                                      </section>
                                      <section class="col-md-6">
                                        <fieldset class="Employee-code">
                                            <label for="exampleInputEmail1">Profit/Cost Type</label><font color="red" size="4px"><b> * </b></font>
                                                <select class="form-control input-alt" id="ddlType" style="width: 100%;margin-left: 0px;display:inline;">
                                                    <option value="">Select Type</option>
                                                    <option value="Profit">Profit</option>
                                                    <option value="Cost">Cost</option>
                                                </select>
                                            </fieldset>
                                        </section>
                                            </div>
                                      <br />
                                        <div class="col-md-6 col-md-offset-3" style="margin-top: 2%;" >
                                             <section class="col-md-6">
                                              <fieldset class="Employee-code">
                                                <label for="exampleInputEmail1">Owner</label><font color="red" size="4px"><b> * </b></font>
                                                <select class="form-control input-alt" id="ddlOwner" style="width: 100%;margin-left: 0px;display:inline;">
                                                    <option value="">Select Owner</option>
                                                    <option value="Devi">Devi</option>
                                                    <option value="Ravi">Ravi</option>
                                                    <option value="SreeKumar">SreeKumar</option>
                                                  </select>
                                              </fieldset>
                                            </section>                                     
                                      </div>
                                      <button type="button" id="btnAdd" style="display:inline;margin-left: 42%;margin-top: 3%;" class="btn btn-default bt.n-lg">Submit</button>
                                        <span class="clearfix"></span>
                                     </form> 
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
    <script src="admin/js/vendor-core.min.js"></script>
    <script src="admin/js/vendor-tables.min.js"></script>
    <script src="admin/js/vendor-forms.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>   
    <script src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
    <script src="pagescripts/AddProfitCostCenter.js"></script>
    <script src="alert/js/alert.min.js"></script>
</body>
</html>

