$(document).ready(function () {
    var Localvaluee = localStorage.getItem('AdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        RequestDropDown();

        var Localvalue = localStorage.getItem('AdminSession');

        if (Localvalue == "Start") {

            $('#tblRequests').html('<table cellpadding="0"  class="display responsive nowrap"  style="width: 1000px;"cellspacing="0" border="0"  id="tableContractorDetails"></table>');


            var oTable = $('#tableContractorDetails').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [{
                    "sTitle": "ID",
                    'bVisible': false,
                    'sClass': 'center'
                },
                {
                    "sTitle": "SlNo",
                    'sWidth': '1%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Employee Name",
                    'sWidth': '10%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Reason",
                    'sWidth': '10%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Remarks",
                    'sWidth': '10%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Date ",
                    'sWidth': '10%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Email",
                    'bVisible': false,
                    'sClass': 'center'
                },
                {
                    "sTitle": "",
                    'bVisible': false,
                },
                {
                    "sTitle": "",
                    'sWidth': '5%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "",
                    'sWidth': '5%',
                    'sClass': 'center'
                }

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
                    "sEmptyTable": "PLEASE SELECT REQUEST TYPE",
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

            // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   

        }
        else {
            window.location = "login.html";
        }
       


        function RequestDropDown() {

            var SpParams = {};
            SpParams.strProc = "RequestType_DrpDown";


            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {



                    if (response != null) {
                        //$('#lbl').hide();
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlRequestType").append(new Option(response[i].DisplayMember, response[i].ValueMember));



                            }
                        }//for
                    }//if
                }//response

            });//ajax

        }




        $('#tableContractorDetails').on('click', '#btnApprove', function () {

            var nRow = $(this).parents('tr')[0];
            var RequestId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[0];
            //alert(RequestId);
            $.alert.open('Are you sure Approve this Request?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    updateStatus(RequestId, "Approved");
                    var Empname = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[2];
                    var EmailId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[6];
                    var RequestType = $("#ddlRequestType option:selected").text();
                    var ReqDate = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[7];
                    ApproveRejectRequest(Empname, EmailId, RequestType, ReqDate, '--', 'Approved');
                    LeaveApproveRejectEmailNotificationToAdmin(RequestType, Empname, ReqDate, 'Approved');
                    $.alert.open({ type: 'info', content: 'Request Approved.' });
                    LoadRequestValues();
                }
            });
        });


        $('#tableContractorDetails').on('click', '#btnReject', function () {

            var nRow = $(this).parents('tr')[0];
            var RequestId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[0];



            $.alert.open('Are you sure Reject this Request?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    updateStatus(RequestId, "Rejected");
                    //var email = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[1];
                    var Empname = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[2];
                    var EmailId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[6];
                    var RequestType = $("#ddlRequestType option:selected").text();
                    var ReqDate = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[7];
                    ApproveRejectRequest(Empname, EmailId, RequestType, ReqDate, '--', 'Rejected');
                    LeaveApproveRejectEmailNotificationToAdmin(RequestType, Empname, ReqDate, 'Rejected');
                    $.alert.open({ type: 'info', content: 'Request Rejected.' });
                    LoadRequestValues();
                }
            });
        });



        function updateStatus(varID, varStatus) {

            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Request_Status";
            varParams.strArgmt = varStatus;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Request_Id";
            varParams.strArgmt = varID;
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Request_AdminUpdateStatus";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {



                }
            });
        }



        function ApproveRejectRequest(stEmpName, strEmail, strReqType, strDate, strRemarks, strStatus) {




            var Params = {};
            Params.Request_EmpName = stEmpName;
            Params.Request_EmpEmail = strEmail;
            Params.Request_Type = strReqType;
            Params.Request_Date = strDate;
            Params.Request_Remarks = strRemarks;
            Params.Request_Status = strStatus;

            $.ajax({
                url: "/api/FIXZIService/RequestAcceptRejectEmail",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {



                }
            });
        }

        $('#btnSearch').click(function () {
            if ($("#ddlRequestType").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose the Request Type' });
            }
            else if ($('#ddlStatus option:selected').text() == 'Choose Status') {
                $.alert.open({ type: 'warning', content: 'Please choose the Request Status' });
            }
            else {
                LoadRequestValues();
            }
        });
        $('#ddlStatus').change(function () {
            $("#tableContractorDetails").dataTable().fnClearTable();
        });

        function LoadRequestValues() {
            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "RequestType_Id";
            varParams.strArgmt = $("#ddlRequestType").val();
            varProcParams[0] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Request_Status"; 
            varParams.strArgmt = $('#ddlStatus option:selected').text();
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Request_ViewAllAdmib";
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
                        $("#tableContractorDetails").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {
                            if (response.details[j].Request_Status == 'Pending') {

                                jQuery("#tableContractorDetails").dataTable().fnAddData([(response.details[j].Request_Id), j + 1, (response.details[j].Employee_FirstName).toString(), (response.details[j].Reason).toString(), (response.details[j].Remarks), (response.details[j].Date).toString(), (response.details[j].Employee_OfficialMailId).toString(), (response.details[j].ReqDate), ' <div class="active btn-group btn-group-sm"> <button type="button" class="btn btn-primary bt.n-lg" id="btnApprove">Approve</button>', '<button type="button" class="btn btn-warning b.tn-lg" id="btnReject" width:100px>Reject</button> </div>']);
                            }
                            else {
                                jQuery("#tableContractorDetails").dataTable().fnAddData([(response.details[j].Request_Id), j + 1, (response.details[j].Employee_FirstName).toString(), (response.details[j].Reason).toString(), (response.details[j].Remarks), (response.details[j].Date).toString(), (response.details[j].Employee_OfficialMailId).toString(), (response.details[j].ReqDate), ' ','']);
                            }


                        }
                    }
                    //   alert(response.details);

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
    }



    function ExportReport(RequestType, ReqStatus) {




        var Params = {};
        Params.Request_Type = RequestType;
        Params.Request_Status = ReqStatus;



        $.ajax({
            type: "POST",
            url: "/api/FIXZIService/RequestReportExport",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(Params),
            dataType: "data",
            async: "true",
            cache: "true",
            error: function (HttpContextResponse) {

                var spliting = HttpContextResponse.responseText;
                var myExcel = spliting.split("{");
                window.open('data:application/vnd.ms-excel,' + encodeURIComponent(myExcel[0]));
            } //HttpRespnse
        }); //ajax
    }


    $('#btnDownLoad').click(function () {
        if ($("#ddlRequestType").val() == '') {
            $.alert.open({ type: 'warning', content: 'Please choose the Request Type' });
        }
        else if ($('#ddlStatus option:selected').text() == 'Choose Status') {
            $.alert.open({ type: 'warning', content: 'Please choose the Request Status' });
        }
        else {
            ExportReport($("#ddlRequestType").val(), $('#ddlStatus option:selected').text());
        }
    });

});



