$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('EmployeeId');
        window.location.href = "login.html";
    });
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var day;

        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');


        $("#lblName").text(name);



       // LeaveSummary();
        Loadvalues();

       



        $('#tblLeave').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableLeave" style="width:400px;"></table>');

        var oTable = $('#tableLeave').dataTable({
            "aaData": [
            ],

            "aoColumns": [
                {
                    "sTitle": "Projects_ID",
                    'bVisible': false
                },
                {
                    "sTitle": "Project",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Utilization",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Employee_ID",
                    'bVisible': false
                }, {
                    "sTitle": "employee",
                    'sWidth': '100%'
                
                },
                {
                    "sTitle": "Involvement_status",
                    'bVisible': false

                },
                {
                    "sTitle": "",
                    'sWidth': '100%'
                },
                {
                    "sTitle": "",
                    'sWidth': '100%'
                }

            ],

            "aLengthMenu": [
                [5, 10, 15, -1],
                [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": -1,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "bFilter": true,
            "bInfo": true,
            "scrollX": true,
            "scrollY": 320,
            "bDeferRender": true,
            "bProcessing": true,
            "bProcessing": true,
            "oLanguage": {
                "sLengthMenu": "",
                "sEmptyTable": "Please wait..data is loading",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            }
        });
        jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
        jQuery('.paginate_disabled_previous').addClass("label label-default");
        jQuery('#tableContractorDetails_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tableContractorDetails_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown

        function Loadvalues() {

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "PerscantageSummary";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.details != null) {
                        //$("#tableTimeSheet").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {
                            if ((response.details[j].Involvement_status) == 1) {
                                jQuery("#tableLeave").dataTable().fnAddData([(response.details[j].ProjectEmployee_Id).toString(), (response.details[j].Projects_name).toString(), (response.details[j].InvolvementPersantage).toString(), (response.details[j].Employee_ID).toString(), (response.details[j].employee).toString(), (response.details[j].Involvement_status).toString(), '<button type="button" class="btn btn-primary bt.n-lg" id="btnEdit">Edit</button>', '<button type="button" class="btn btn-secondary b.tn-lg" id="btnCancel">Disable</button>']);
                            }
                            else {
                                jQuery("#tableLeave").dataTable().fnAddData([(response.details[j].ProjectEmployee_Id).toString(), (response.details[j].Projects_name).toString(), (response.details[j].InvolvementPersantage).toString(), (response.details[j].Employee_ID).toString(), (response.details[j].employee).toString(), (response.details[j].Involvement_status).toString(), '<button type="button" class="btn btn-primary bt.n-lg" id="btnEdit">Edit</button>', '<button type="button" class="btn btn-success b.tn-lg" id="btnCancel">Enable</button>']);
                            }
                        }
                    }
                }
            });
        }


        $('#tableLeave').on('click', '#btnCancel', function () {

            var nRow = $(this).parents('tr')[0];
            var Projects_ID = jQuery("#tableLeave").dataTable().fnGetData(nRow)[0];
            
            $.alert.open('Are you sure to change the status?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                   // alert(Projects_ID);
                    CancelLeave(Projects_ID);

                }
            });



        });



        function CancelLeave(Projects_ID) {
            
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = Projects_ID;
            varProcParams[0] = varParams;

            var SpParams = {};
            SpParams.strProc = "InvolvementPersantagestatuschange";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {

                        $.alert.open({ type: 'info', content: 'Status Changed Successfully' });
                        $("#tableLeave").dataTable().fnClearTable();
                        Loadvalues();
                    }
                }
            });
        }



        $('#tableLeave').on('click', '#btnEdit', function () {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            //LoadSubTaskDrpDown(aData[2]);
            var Leaveid = jQuery("#tableLeave").dataTable().fnGetData(nRow)[0];
            
            jqTds[0].innerHTML = '<label id="employee">' + aData[1] + '</label>';
            jqTds[1].innerHTML = '<input type="text" id="InvolvementPersantage" class="m-wrap medium" style="width:100px;" value="' + aData[2] + '">';
            jqTds[2].innerHTML = '<label id="employee">' + aData[4] + '</label>';
          
           jqTds[3].innerHTML = '<h4><a class="save" style="color:#008055;">UPDATE</a></h4>';
           jqTds[4].innerHTML = '<h4><a class="cancel" style="color:red;"href=" ">CANCEL</a></h4>';

          




        });



        $('#tableLeave').on('click', 'a.save', function () {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            if ($('#InvolvementPersantage').val() == '' ) {
                $.alert.open({ type: 'warning', content: 'Please enter Utilization' });
            }


            else if ($("#txtReason").val() == '') {
               // $.alert.open({ type: 'warning', content: 'Please Enter valid reason for the leave.' });
            }
           
            Updateinvolvement(aData[0], $('#InvolvementPersantage').val());
            $.alert.open({ type: 'info', content: 'Successfully Updated.' });

        });

        $('#btnSubmit').click(function () {

            if ($("#ddlMonth").val() == 0) {
                alert('Please select Month');
            }
            else if ($("#ddlYear").val() == 0) {

                alert('Please select Year');
            }
            else {
                process();
            }
            

        });
        function process() {

            var varProcParams = new Array();



            
            var varParams = {};
            varParams.strKey = "P_Month";
            varParams.strArgmt = $("#ddlMonth").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "P_Year";
            varParams.strArgmt = $("#ddlYear").val();
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "involvament_process";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                   if (response.status == 'SUCCESS') {
                       
                       alert('Project Utilization process has been completed ');
                    }
                }
            });
        }
        function Updateinvolvement(ProjectEmployee_Id, InvolvementPersantage) {
           
            //alert(subtaskid);
            //alert(wrkhours);
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "ProjectEmployee_Id";
            varParams.strArgmt = ProjectEmployee_Id;
            varProcParams[0] = varParams;

            var varParams = {};
            varParams.strKey = "InvolvementPersantage";
            varParams.strArgmt = InvolvementPersantage;
            varProcParams[1] = varParams;
            var SpParams = {};
            

            SpParams.strProc = "Involvement_Edit";
            SpParams.oProcParams = varProcParams;
            
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.status == 'SUCCESS') {

                        $("#tableLeave").dataTable().fnClearTable();
                        setTimeout(Loadvalues(), 500);

                        //Loadvalues();
                    }
                }
            });
        }

        function parseDate(str) {
            var mdy = str.split('/')
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        }

        function daydiff(first, second) {
            return Math.round((second - first) / (1000 * 60 * 60 * 24));
        }


    }







    //function LeaveSummary() {
    //    var totalApproved;
    //    var varProcParams = new Array();
    //    var varParams = {};
    //    varParams.strKey = "Employee_ID";
    //    varParams.strArgmt = Localvalue;
    //    varProcParams[0] = varParams;
    //    varParams = {};


    //    var SpParams = {};
    //    SpParams.strProc = "LeaveSummary";
    //    SpParams.oProcParams = varProcParams;

    //    $.ajax({
    //        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
    //        type: "POST",
    //        contentType: "application/json;charset=utf-8",
    //        dataType: "json",
    //        data: JSON.stringify(SpParams),
    //        success: function (response) {
    //            //alert(response.details[0].TotalPLApproved);
    //            if (response.details != null) {
    //                console.log(response.details);
    //                $("#LeaveSummary").dataTable().fnClearTable();
    //                if (response.details[0].TotalPLApproved == null) {
    //                    totalApproved = '0';
    //                    //alert(totalApproved);
    //                }
    //                else {
    //                    totalApproved = (response.details[0].TotalPLApproved).toString();

    //                }

    //                jQuery("#LeaveSummary").dataTable().fnAddData([(response.details[0].PL).toString(), (response.details[0].Total).toString(), (response.details[0].TotalPLApplied).toString(), totalApproved, (response.details[0].TotalPLRemining).toString()]);


    //                jQuery("#LeaveSummary").dataTable().fnAddData([(response.details[0].SL).toString(), (response.details[0].TotalSL).toString(), (response.details[0].TotalSLApplied).toString(), (response.details[0].TotalSLApproved).toString(), (response.details[0].TotalSLRemining).toString()]);
    //            }
    //        }
    //    });
    //}



});