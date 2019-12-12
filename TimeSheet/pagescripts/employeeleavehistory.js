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



        LeaveSummary();
        Loadvalues();

        $('#tblLeaveSummary').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="1" id="LeaveSummary" style="width:100px;"></table>');
        var oTable = $('#LeaveSummary').dataTable({
            "aaData": [
            ],

            "aoColumns": [
                {
                    "sTitle": "",
                    'sWidth': '5%'
                },
                {
                    "sTitle": "Total",
                    'sWidth': '5%'
                },
             {
                 "sTitle": "Applied",
                 'sWidth': '5%'
             }, {
                 "sTitle": "Approved",
                 'sWidth': '5%'
             }, {
                 "sTitle": "Remaining",
                 'sWidth': '5%'
             }

            ],

            "aLengthMenu": [
                        [5, 10, 15, -1],
                        [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 100,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "aaSorting": [[1, "asc"]],
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



        $('#tblLeave').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableLeave" style="width:200px;"></table>');

        var oTable = $('#tableLeave').dataTable({
            "aaData": [
            ],

            "aoColumns": [
                {
                    "sTitle": "Leave Id",
                    'bVisible': false
                },
             {
                 "sTitle": "Sl No",
                 'sWidth': '10%'
             }, {
                 "sTitle": "From",
                 'sWidth': '10%'
             }, {
                 "sTitle": "To",
                 'sWidth': '10%'
             }, {
                 "sTitle": "No of Days",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Type",
                 'sWidth': '10%'
             },
             {
                 "sTitle": "Applied Date",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Status",
                 'sWidth': '20%'
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
            "iDisplayLength": 100,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "aaSorting": [[1, "asc"]],
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

        function Loadvalues() {

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "LeaveHistory_EmployeeTakenLeave";
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
                            if ((response.details[j].Leave_Status).toString() == "Approved") {
                                jQuery("#tableLeave").dataTable().fnAddData([(response.details[j].Leave_ID).toString(), j + 1, (response.details[j].Leave_From).toString(), (response.details[j].Leave_To).toString(), (response.details[j].Leave_NoOfDays).toString(), (response.details[j].Leave_Type).toString(), (response.details[j].Leave_AppliedDate).toString(), (response.details[j].Leave_Status).toString(), "", ""]);
                            }
                            else {
                                jQuery("#tableLeave").dataTable().fnAddData([(response.details[j].Leave_ID).toString(), j + 1, (response.details[j].Leave_From).toString(), (response.details[j].Leave_To).toString(), (response.details[j].Leave_NoOfDays).toString(), (response.details[j].Leave_Type).toString(), (response.details[j].Leave_AppliedDate).toString(), (response.details[j].Leave_Status).toString(), '<button type="button" class="btn btn-primary bt.n-lg" id="btnEdit">Edit</button>', '<button type="button" class="btn btn-warning b.tn-lg" id="btnCancel">Cancel</button>']);
                            }
                        }
                    }
                }
            });
        }


        $('#tableLeave').on('click', '#btnCancel', function () {

            var nRow = $(this).parents('tr')[0];
            var LeaveId = jQuery("#tableLeave").dataTable().fnGetData(nRow)[0];
            //alert(LeaveId);
            $.alert.open('Are you sure to cancel this leave?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    CancelLeave(LeaveId);

                }
            });



        });



        function CancelLeave(LeaveId) {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Leave_ID";
            varParams.strArgmt = LeaveId;
            varProcParams[0] = varParams;

            var SpParams = {};
            SpParams.strProc = "Leave_CancelLeave";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {

                        $.alert.open({ type: 'info', content: 'Leave cancelled Successfully' });
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

            //jqTds[0].innerHTML = '<input type="text" style="width:10px;" disabled  value="' + aData[0] + '">';
            jqTds[1].innerHTML = '<input type="text" id="FromDate" class="m-wrap medium" style="width:100px;" value="' + aData[2] + '">';
            jqTds[2].innerHTML = '<input type="text" id="ToDate" class="m-wrap medium" style="width:100px;" value="' + aData[3] + '">';
            jqTds[3].innerHTML = '<label id="lblNoOfDays">' + aData[4] + '</label>';
            jqTds[4].innerHTML = '<input id="txtReason" type="text" class="m-wrap medium" style="width:200px;" value="' + aData[5] + '">';
            jqTds[5].innerHTML = '<h4><a class="save" style="color:#008055;">UPDATE</a></h4>';
            jqTds[6].innerHTML = '<h4><a class="cancel" style="color:red;"href=" ">CANCEL</a></h4>';

            $('#FromDate').datepicker({ todayHighlight: true });
            $('#ToDate').datepicker({ todayHighlight: true });

            $('#FromDate').on('change', function () {
                $('.datepicker').hide();
            });

            $('#ToDate').on('change', function () {
                day = 1 + daydiff(parseDate($('#FromDate').val()), parseDate($('#ToDate').val()));
                $("#lblNoOfDays").text(day);
                $('.datepicker').hide();
                if (day <= 0) {
                    $.alert.open({ type: 'warning', content: 'Please choose valid dates' });
                    $('#ToDate').val('');
                }
            });




        });



        $('#tableLeave').on('click', 'a.save', function () {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            if ($('#FromDate').val() == '' || $('#ToDate').val() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose the start date and end Dates' });
            }


            else if ($("#txtReason").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Enter valid reason for the leave.' });
            }
            //alert($('#FromDate').val());//sl.no
            //alert(aData[2]);//timesheetid
            //alert(aData[3]);//projectname
            //alert(aData[5]);//taskname
            // alert(day);
            EditLeave(aData[0], $('#FromDate').val(), $('#ToDate').val(), $("#lblNoOfDays").text(), $("#txtReason").val());
            $.alert.open({ type: 'info', content: 'Successfully Updated.' });

        });



        function EditLeave(LeaveId, From, To, numOfDays, reason) {
            //alert(timesheetId);
            //alert(subtaskid);
            //alert(wrkhours);
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Leave_ID";
            varParams.strArgmt = LeaveId;
            varProcParams[0] = varParams;

            var varParams = {};
            varParams.strKey = "Leave_From";
            varParams.strArgmt = From;
            varProcParams[1] = varParams;

            var varParams = {};
            varParams.strKey = "Leave_To";
            varParams.strArgmt = To;
            varProcParams[2] = varParams;

            var varParams = {};
            varParams.strKey = "Leave_NoOfDays";
            varParams.strArgmt = numOfDays;
            varProcParams[3] = varParams;

            var varParams = {};
            varParams.strKey = "Leave_Reason";
            varParams.strArgmt = reason;
            varProcParams[4] = varParams;
            var SpParams = {};

            SpParams.strProc = "Leave_Edit";
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







    function LeaveSummary() {
        var totalApproved;
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Employee_ID";
        varParams.strArgmt = Localvalue;
        varProcParams[0] = varParams;
        varParams = {};


        var SpParams = {};
        SpParams.strProc = "LeaveSummary";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                //alert(response.details[0].TotalPLApproved);
                if (response.details != null) {
                    console.log(response.details);
                    $("#LeaveSummary").dataTable().fnClearTable();
                    if (response.details[0].TotalPLApproved == null) {
                        totalApproved = '0';
                        //alert(totalApproved);
                    }
                    else {
                        totalApproved = (response.details[0].TotalPLApproved).toString();
                        
                    }

                    jQuery("#LeaveSummary").dataTable().fnAddData([(response.details[0].PL).toString(), (response.details[0].Total).toString(), (response.details[0].TotalPLApplied).toString(), totalApproved, (response.details[0].TotalPLRemining).toString()]);


                    jQuery("#LeaveSummary").dataTable().fnAddData([(response.details[0].SL).toString(), (response.details[0].TotalSL).toString(), (response.details[0].TotalSLApplied).toString(), (response.details[0].TotalSLApproved).toString(), (response.details[0].TotalSLRemining).toString()]);
                }
            }
        });
    }
                    
  
   
});