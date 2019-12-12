$().ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('AdminSession');
        window.location.href = "login.html";
    });
    var varemployeeeId;
    var email;
    var Localvalue = localStorage.getItem('AdminSession');

    var status = "";

    if (Localvalue == "Start") {
        Loadvalues();
        //  "strProc":"Contractor_GetList"


        // *****************************START DATATTABLE DENITION--(CLIENT SIDE SCRIPT)        //var oTable;
        $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableContractorDetails"></table>');

        var oTable = $('#tableContractorDetails').dataTable({
            "aaData": [
            ],

            "aoColumns": [
             {
                 "sTitle": "Sl ID",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Leave ID",
                 'bVisible': false
             }, {
                 "sTitle": "Name",
                 'sWidth': '30%'
             }, {
                 "sTitle": "From",
                 'sWidth': '30%'
             }, {
                 "sTitle": "To",
                 'sWidth': '30%'
             }, {
                 "sTitle": "No.of days",
                 'sWidth': '13%'
             }, {
                 "sTitle": "Reason",
                 'sWidth': '10%'

             }, {
                 "sTitle": "Applied Date",
                 'sWidth': '30%'
             }, {
                 "sTitle": "Leave Type",
                 'sWidth': '40%'
             }, {
                 "sTitle": "Employee ID",
                 'bVisible': false
             }, {
                 "sTitle": "",
                 'sWidth': '50%'
             },
             {
                 "sTitle": "OfficialMail",
                 'bVisible': false
             },
            ],

            "aLengthMenu": [
                        [5, 10, 15, -1],
                        [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "bFilter": false,
            "bInfo": false,
            "scrollX": true,

            "oLanguage": {
                "sLengthMenu": "",
                "sEmptyTable": "No Leave for approval",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            }
        });
        jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
        jQuery('.paginate_disabled_previous').addClass("label label-default");
        jQuery('#tableContractorDetails_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tableContractorDetails_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


        var nEditing = null;

        // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)
    }
    else {
        window.location = "login.html";
    }

    function Loadvalues() {
        var SpParams = {};
        SpParams.strProc = "Leave_Pending";

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.details != null) {
                    $("#tableContractorDetails").dataTable().fnClearTable();
                    for (var j = 0; j < response.details.length; j++) {

                        //alert((response.details[j].Employee_OfficialMailId).toString())
                        if ((response.details[j].Leave_NoOfDays).toString() == '0.5') {

                            jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1, (response.details[j].Leave_ID).toString(), (response.details[j].Employee_FirstName).toString(), (response.details[j].Leave_From).toString(), (response.details[j].Leave_From).toString(), (response.details[j].Leave_NoOfDays).toString(), (response.details[j].Leave_Reason).toString(), (response.details[j].Leave_AppliedDate).toString(), (response.details[j].Leave_Type).toString(), (response.details[j].Employee_ID).toString(), ' <div class="btn-group"> <button type="button" class="btn btn-success b.tn-lg" id="btnApprove" style="width: 74px;">Approve</button>&nbsp;<button type="button" class="btn btn-danger b.tn-lg" id="btnReject"  style="width: 74px;">Reject</button> </div>', (response.details[j].Employee_OfficialMailId).toString()]);
                        }
                        else {
                            jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1, (response.details[j].Leave_ID).toString(), (response.details[j].Employee_FirstName).toString(), (response.details[j].Leave_From).toString(), (response.details[j].Leave_To).toString(), (response.details[j].Leave_NoOfDays).toString(), (response.details[j].Leave_Reason).toString(), (response.details[j].Leave_AppliedDate).toString(), (response.details[j].Leave_Type).toString(), (response.details[j].Employee_ID).toString(), ' <div class="btn-group"> <button type="button" class="btn btn-success b.tn-lg" id="btnApprove"  style="width: 74px;">Approve</button><button type="button" class="btn btn-danger b.tn-lg" id="btnReject"  style="width: 74px;">Reject</button> </div>', (response.details[j].Employee_OfficialMailId).toString()]);
                        }

                    }
                }
            }
        });
    }


    $('#tableContractorDetails').on('click', '#btnApprove', function () {
        //alert("Approved");
        var nRow = $(this).parents('tr')[0];
        var Leave_ID = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[1];
        varemployeeeId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[9];
        email = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[11];
        var appliedDate = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[7];

        $.alert.open('Are you sure Approve this Leave?', { 1: 'Yes', 2: 'No' }, function (button) {
            if (button == 1) {
                updateStatus(Leave_ID, "Approved");
                var Empname = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[2];
                var leaveType = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[8];
                var noOfdays = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[5];
                //LeaveApproveRejectEmail(Empname, leaveType, noOfdays, email, 'Approved');
                //updateAfterApproval(Leave_ID);
               // LeaveApproveRejectEmailNotificationToAdmin("leave", Empname, appliedDate, "Approved");
                
            }
        });


    });

    $('#tableContractorDetails').on('click', '#btnReject', function () {
        //alert("Rejected");
        var nRow = $(this).parents('tr')[0];
        var Leave_ID = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[1];
        $.alert.open('Are you sure Reject this Leave?', { 1: 'Yes', 2: 'No' }, function (button) {
            if (button == 1) {
                updateStatus(Leave_ID, "Rejected");
                email = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[11];
                var Empname = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[2];
                var leaveType = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[8];
                var noOfdays = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[5];
                var appliedDate = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[7];
                //LeaveApproveRejectEmail(Empname, leaveType, noOfdays, email, 'Rejected');
                //LeaveApproveRejectEmailNotificationToAdmin("leave", Empname, appliedDate, "Rejected");
                $.alert.open({ type: 'info', content: 'Leave Rejected successfully' });
            }
        });
    });





    function updateStatus(varID, varStatus) {
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Leave_Status";
        varParams.strArgmt = varStatus;
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Leave_ID";
        varParams.strArgmt = varID;
        varProcParams[1] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "Leave_ApproveReject";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                //alert(varStatus); 
                $("#tableContractorDetails").dataTable().fnClearTable();

                Loadvalues();


                if (response.status = "SUCCESS") {
                    //updateAfterApproval(varemployeeeId);
                }
                else {
                    //alert("No Data Found!!");
                }
            }
        });
    }

    //function updateAfterApproval(LeaveId) {
       
    //    var varProcParams = new Array();
    //    var varParams = {};
    //    varParams.strKey = "Leave_ID";
    //    varParams.strArgmt = LeaveId;
    //    varProcParams[0] = varParams;
    //    varParams = {};
    //    var SpParams = {};
    //    SpParams.strProc = "Leave_Update";
    //    SpParams.oProcParams = varProcParams;

    //    $.ajax({
    //        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
    //        type: "POST",
    //        contentType: "application/json;charset=utf-8",
    //        dataType: "json",
    //        data: JSON.stringify(SpParams),
    //        success: function (response) {
    //            var EmpAvailLeave = response.details[0].RemainingSickLeave;
    //           // alert("LopDays " + EmpAvailLeave);
    //            if (EmpAvailLeave != null && EmpAvailLeave < 0) {
    //                //alert("hello");
    //                //alert("LopDays " + EmpAvailLeave);
    //                //alert("EmployeeId" + varemployeeeId);
    //                $.alert.open({ type: 'info', content: 'Please Wait.........' });
    //                var ConverToPositive = Math.abs(EmpAvailLeave);
    //               // alert("after minus " + ConverToPositive);
    //                LOPAddDetails(varemployeeeId, ConverToPositive);
                    
    //            }
    //            else {
    //                $.alert.open({ type: 'info', content: 'Leave Approved successfully' });
    //            }
    //        }
    //    });
    //}



    function LeaveApproveRejectEmail(stEmpName, strLeaveType, strNoOfDays, strEmail, strLeaveStatus) {




        var Params = {};
        Params.Leave_EmpName = stEmpName;
        Params.Leave_Type = strLeaveType;
        Params.Leave_TotalDays = strNoOfDays;
        Params.Leave_RequestedEmpEmail = strEmail;
        Params.Leave_Status = strLeaveStatus;


        $.ajax({
            url: "/api/FIXZIService/LeaveAcceptRejectEmail",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(Params),
            success: function (response) {

                //alert(stEmpName);
                //alert(strLeaveType);
                //alert(strNoOfDays);
                //alert(strEmail);
                //alert(strLeaveStatus);

            }
        });
    }




    function LeaveApproveRejectEmailNotificationToAdmin(RequestType, EmpName, ReqDate, ReqStatus) {




        var Params = {};
        Params.Request_Type = RequestType;
        Params.Request_EmpName = EmpName;
        Params.Request_Date = ReqDate;
        Params.Request_Status = ReqStatus;



        $.ajax({
            url: "/api/FIXZIService/ApproveRejectEmail2Admin",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(Params),
            success: function (response) {



            }
        });
    }

    function LOPAddDetails(EmpId, LOPDays) {

        var currentMnthYear = new Date();
        var varProcParams = new Array();

        var varParams = {};
        varParams.strKey = "Employee_Id";
        varParams.strArgmt = EmpId;
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "LOP_Month";
        varParams.strArgmt = currentMnthYear.getMonth() + 1;
        varProcParams[1] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "LOP_Year";
        varParams.strArgmt = currentMnthYear.getFullYear();
        varProcParams[2] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "LOP_NoOfDays";
        varParams.strArgmt = LOPDays;
        varProcParams[3] = varParams;
        varParams = {};




        var SpParams = {};
        SpParams.strProc = "LOP_AddDetails";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                $.alert.open({ type: 'info', content: 'Leave Approved successfully' });
            }
        });

    }


});