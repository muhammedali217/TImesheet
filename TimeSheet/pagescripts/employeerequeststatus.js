$(document).ready(function () {
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        function RandomNumber() {
            var number = Math.random() // 0.9394456857981651
            var id = number.toString(30).substr(6, 6); // 'xtis06h6'
            return id.toLocaleUpperCase();

        }
        var day;

        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');


        $("#lblName").text(name);




        Loadvalues();
        $('#employeeLeaveStatus').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="employeeLeaveStatusTable" style="width:200px;"></table>');

        var oTable = $('#employeeLeaveStatusTable').dataTable({
            "aaData": [
            ],

            "aoColumns": [
               {
                   "sTitle": "Request Id",
                   'sWidth': '10%',
                   'bVisible': false,
                   'sClass': 'center'
               },
             {
                 "sTitle": "Request Token",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Request Type",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Requested Date",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Status",
                 'sWidth': '10%'
             }


            ],

            "aLengthMenu": [
                        [5, 10, 15, -1],
                        [5, 10, 15, "All"] // change per page values here
            ],
            "aaSorting": [[1, "asc"]],
            // set the initial value
            "iDisplayLength": -1,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",

            "oLanguage": {
                "sLengthMenu": "",
                "sEmptyTable": "No request available",
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
            varParams.strKey = "EmployeeId";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "Request_ViewEmployee";
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
                            if ((response.details[j].Request_Status).toString() == "APPROVED") {
                                jQuery("#employeeLeaveStatusTable").dataTable().fnAddData([(response.details[j].Request_Id).toString(), '#' + RandomNumber(), (response.details[j].RequestType).toString(), (response.details[j].ReqDate).toString(), '<b><label style="text-align:center; color: green;">' + (response.details[j].Request_Status) + '</label></b>']);
                            }
                            else if ((response.details[j].Request_Status).toString() == "PENDING") {
                                jQuery("#employeeLeaveStatusTable").dataTable().fnAddData([(response.details[j].Request_Id).toString(), '#' + RandomNumber(), (response.details[j].RequestType).toString(), (response.details[j].ReqDate).toString(), '<b><label style="text-align:center; color: rgb(126, 0, 140);">' + (response.details[j].Request_Status) + '</label></b>']);
                            }
                            else {
                                jQuery("#employeeLeaveStatusTable").dataTable().fnAddData([(response.details[j].Request_Id).toString(), '#' + RandomNumber(), (response.details[j].RequestType).toString(), (response.details[j].ReqDate).toString(), '<b><label style="text-align:center; color: red;">' + (response.details[j].Request_Status) + '</label></b>']);
                            }
                        }
                    }
                }
            });
        }




        //$('#tableLeave').on('click', '#btnCancel', function () {

        //    var nRow = $(this).parents('tr')[0];
        //    var LeaveId = jQuery("#employeeLeaveStatusTable").dataTable().fnGetData(nRow)[0];
        //    //alert(LeaveId);
        //    $.alert.open('Are you sure to cancel this leave?', { 1: 'Yes', 2: 'No' }, function (button) {
        //        if (button == 1) {
        //            CancelLeave(LeaveId);

        //        }
        //    });



        //});



        //function CancelLeave(LeaveId) {
        //    var varProcParams = new Array();
        //    var varParams = {};
        //    varParams.strKey = "Leave_ID";
        //    varParams.strArgmt = LeaveId;
        //    varProcParams[0] = varParams;

        //    var SpParams = {};
        //    SpParams.strProc = "Leave_CancelLeave";
        //    SpParams.oProcParams = varProcParams;

        //    $.ajax({
        //        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
        //        type: "POST",
        //        contentType: "application/json;charset=utf-8",
        //        dataType: "json",
        //        data: JSON.stringify(SpParams),
        //        success: function (response) {
        //            if (response.status == 'SUCCESS') {

        //                $.alert.open({ type: 'info', content: 'Leave cancelled Successfully' });
        //                $("#employeeLeaveStatusTable").dataTable().fnClearTable();
        //                Loadvalues();
        //            }
        //        }
        //    });
        //}



        //$('#tableLeave').on('click', '#btnEdit', function () {

        //    var nRow = $(this).parents('tr')[0];
        //    var aData = oTable.fnGetData(nRow);
        //    var jqTds = $('>td', nRow);

        //    //LoadSubTaskDrpDown(aData[2]);
        //    var Leaveid = jQuery("#tableLeave").dataTable().fnGetData(nRow)[0];

        //    //jqTds[0].innerHTML = '<input type="text" style="width:10px;" disabled  value="' + aData[0] + '">';
        //    jqTds[1].innerHTML = '<input type="text" id="FromDate" class="m-wrap medium" style="width:100px;" value="' + aData[2] + '">';
        //    jqTds[2].innerHTML = '<input type="text" id="ToDate" class="m-wrap medium" style="width:100px;" value="' + aData[3] + '">';
        //    jqTds[3].innerHTML = '<label id="lblNoOfDays">' + aData[4] + '</label>';
        //    jqTds[4].innerHTML = '<input id="txtReason" type="text" class="m-wrap medium" style="width:200px;" value="' + aData[5] + '">';
        //    jqTds[5].innerHTML = '<h4><a class="save" style="color:#008055;">UPDATE</a></h4>';
        //    jqTds[6].innerHTML = '<h4><a class="cancel" style="color:red;"href=" ">CANCEL</a></h4>';

        //    $('#FromDate').datepicker({ todayHighlight: true });
        //    $('#ToDate').datepicker({ todayHighlight: true });

        //    $('#FromDate').on('change', function () {
        //        $('.datepicker').hide();
        //    });

        //    $('#ToDate').on('change', function () {
        //        day = 1 + daydiff(parseDate($('#FromDate').val()), parseDate($('#ToDate').val()));
        //        $("#lblNoOfDays").text(day);
        //        $('.datepicker').hide();
        //        if (day <= 0) {
        //            $.alert.open({ type: 'warning', content: 'Please choose valid dates' });
        //            $('#ToDate').val('');
        //        }
        //    });




        //});



        //$('#tableLeave').on('click', 'a.save', function () {

        //    var nRow = $(this).parents('tr')[0];
        //    var aData = oTable.fnGetData(nRow);
        //    if ($('#FromDate').val() == '' || $('#ToDate').val() == '') {
        //        $.alert.open({ type: 'warning', content: 'Please choose the start date and end Dates' });
        //    }


        //    else if ($("#txtReason").val() == '') {
        //        $.alert.open({ type: 'warning', content: 'Please Enter valid reason for the leave.' });
        //    }
        //    //alert($('#FromDate').val());//sl.no
        //    //alert(aData[2]);//timesheetid
        //    //alert(aData[3]);//projectname
        //    //alert(aData[5]);//taskname
        //    // alert(day);
        //    EditLeave(aData[0], $('#FromDate').val(), $('#ToDate').val(), $("#lblNoOfDays").text(), $("#txtReason").val());
        //    $.alert.open({ type: 'info', content: 'Successfully Updated.' });

        //});



        //function EditLeave(LeaveId, From, To, numOfDays, reason) {
        //    //alert(timesheetId);
        //    //alert(subtaskid);
        //    //alert(wrkhours);
        //    var varProcParams = new Array();
        //    var varParams = {};
        //    varParams.strKey = "Leave_ID";
        //    varParams.strArgmt = LeaveId;
        //    varProcParams[0] = varParams;

        //    var varParams = {};
        //    varParams.strKey = "Leave_From";
        //    varParams.strArgmt = From;
        //    varProcParams[1] = varParams;

        //    var varParams = {};
        //    varParams.strKey = "Leave_To";
        //    varParams.strArgmt = To;
        //    varProcParams[2] = varParams;

        //    var varParams = {};
        //    varParams.strKey = "Leave_NoOfDays";
        //    varParams.strArgmt = numOfDays;
        //    varProcParams[3] = varParams;

        //    var varParams = {};
        //    varParams.strKey = "Leave_Reason";
        //    varParams.strArgmt = reason;
        //    varProcParams[4] = varParams;
        //    var SpParams = {};

        //    SpParams.strProc = "Leave_Edit";
        //    SpParams.oProcParams = varProcParams;

        //    $.ajax({
        //        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
        //        type: "POST",
        //        contentType: "application/json;charset=utf-8",
        //        dataType: "json",
        //        data: JSON.stringify(SpParams),
        //        success: function (response) {

        //            if (response.status == 'SUCCESS') {

        //                $("#tableLeave").dataTable().fnClearTable();
        //                setTimeout(Loadvalues(), 500);

        //                //Loadvalues();
        //            }
        //        }
        //    });
        //}

        //function parseDate(str) {
        //    var mdy = str.split('/')
        //    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        //}

        //function daydiff(first, second) {
        //    return Math.round((second - first) / (1000 * 60 * 60 * 24));
        //}


    }

});