$(document).ready(function () {


    var Localvaluee = localStorage.getItem('AdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
       
        var Localvalue = localStorage.getItem('AdminSession');

        $('#txtDate').datepicker({
            todayHighlight: true
        });
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        $('#txtDate').val(month + '/' + day + '/' + year);


        var dateval = $('#txtDate').val().trim();
        var datevalsplit = dateval.split('/');

        Loadvalues(datevalsplit[2] + '-' + datevalsplit[0] + '-' + datevalsplit[1]);
        
        //GetAttendncePercentage(datevalsplit[2] + '-' + datevalsplit[0] + '-' + datevalsplit[1]);

        $('#txtDate').change(function () {
            $('#lblPercentage').hide();
            var dateval = $('#txtDate').val().trim();
            var datevalsplit = dateval.split('/');
            Loadvalues(datevalsplit[2] + '-' + datevalsplit[0] + '-' + datevalsplit[1]);
            
            //GetAttendncePercentage(datevalsplit[2] + '-' + datevalsplit[0] + '-' + datevalsplit[1]);
        });

        $('#txtDate').on('change', function () {
            $('.datepicker').hide();
        });

        if (Localvalue == "Start") {


            $('#tblAttendance').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableAttendance" style="width:800px;"></table>');






            var oTable = $('#tableAttendance').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [{
                    "sTitle": "Sl No",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Employee Name",
                    'sWidth': '10%'
                },
                {
                    "sTitle": "Employee Code",
                    'sWidth': '10%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Work Duration(Hours)",
                    'sWidth': '10%'
                },


                {
                    "sTitle": "In Time",
                    'sWidth': '10%'
                },
                {
                    "sTitle": "Out Time",
                    'sWidth': '10%'
                },
                {
                    "sTitle": "Total Duration(Excluding Breaks)",
                    'sWidth': '10%'
                },
                {
                    "sTitle": "Status",
                    'sWidth': '10%'
                }
                ],

                "aLengthMenu": [
                            [5, 10, 15, -1],
                            [5, 10, 15, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": -1,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                //"aoColumns": [
                // { sWidth: '0%', 'bVisible': false },
                // { sWidth: '5%' },
                // { sWidth: '15%' },
                // { sWidth: '20%' },
                // { sWidth: '10%' },
                // { sWidth: '20%' },
                // { sWidth: '35%' }
                //],
                //"sPaginationType": "none",
                //  "bJQueryUI": true,

                "oLanguage": {
                    "sLengthMenu": "",
                    "sEmptyTable": "No attendance available for this date",
                    "oPaginate": {
                        "sPrevious": "",
                        "sNext": ""
                    }
                },
                "bFilter": false,
                "bInfo": false,
            });
            jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
            jQuery('.paginate_disabled_previous').addClass("label label-default");
            jQuery('#tableContractorDetails_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
            jQuery('#tableContractorDetails_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


            var nEditing = null;

            // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   

        }
        else {
            window.location = "login.html";
        }
        function Loadvalues(date) {
            var varProcParams = new Array();

        var varParams = {};
        varParams.strKey = "Date";
        varParams.strArgmt = date;
        varProcParams[0] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "AttendanceLogFetch_New";
        SpParams.oProcParams = varProcParams;
              
            

          



            // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
            // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.details != null) {
                        $("#tableAttendance").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {

                            if (response.details[j].AttendanceLog_WorkDuration != 0 && response.details[j].AttendanceLog_WorkDuration < 240) {
                                jQuery("#tableAttendance").dataTable().fnAddData([j + 1, (response.details[j].EmployeeName), '<b>' + (response.details[j].EmployeeCode).toString().toLocaleUpperCase() + '</b>', parseFloat(response.details[j].AttendanceLog_WorkDuration/60).toFixed(1), (response.details[j].AttendanceLog_InTime).toString(), (response.details[j].AttendanceLog_OutTime).toString(), parseFloat(response.details[j].AttendanceLog_NormalDuration/60).toFixed(1), '<label style=color:orange;>HALF DAY</label>']);
                            }
							else if (response.details[j].AttendanceLog_WorkDuration == 0) {
                                jQuery("#tableAttendance").dataTable().fnAddData([j + 1, (response.details[j].EmployeeName), '<b>' + (response.details[j].EmployeeCode).toString().toLocaleUpperCase() + '</b>', parseFloat(response.details[j].AttendanceLog_WorkDuration/60).toFixed(1), (response.details[j].AttendanceLog_InTime).toString(), (response.details[j].AttendanceLog_OutTime).toString(), parseFloat(response.details[j].AttendanceLog_NormalDuration/60).toFixed(1), '<label style=color:red;>ABSENT</label>']);
                            }
                            else {
                                jQuery("#tableAttendance").dataTable().fnAddData([j + 1, (response.details[j].EmployeeName), '<b>' + (response.details[j].EmployeeCode).toString().toLocaleUpperCase() + '</b>',  parseFloat(response.details[j].AttendanceLog_WorkDuration/60).toFixed(1), (response.details[j].AttendanceLog_InTime).toString(), (response.details[j].AttendanceLog_OutTime).toString(), parseFloat(response.details[j].AttendanceLog_NormalDuration/60).toFixed(1), '<label style=color:green;>FULL DAY</label>']);
                            }

                        }
                    }
                    //   alert(response.details);

                }
            });
        }


    }


    function GetAttendncePercentage(date) {
      
        var varProcParams = new Array();


        var varParams = {};
        varParams.strKey = "Date";
        varParams.strArgmt = date;
        varProcParams[0] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "AttendanceLog_TodaysAttendancePercent";
        SpParams.oProcParams = varProcParams;



        // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
        // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.status == 'SUCCESS') {
                    $('#lblPercentage').show();
                    //alert(response.details[0].AttendancePercentage);
                    //$('#lblPercentage').css({ "color": "red", "margin-left": "200px" });
                    $("#lblPercentage").css({
                        "color": "rgb(239, 7, 81)", "font-size": "14px",

                        "box-shadow": "0 0 20px rgba(0,0,0, 0.3)",
                        "padding": "10px",
                        "border-radius": "2px",
                        "margin-top": "-209px",
                        "margin-left": "188px",
                        "margin-right": "-147px"

                    });
                    $('#lblPercentage').text('Attendance Percentage : '+response.details[0].AttendancePercentage);

                }
            }
        });
    }
                   
                

});


