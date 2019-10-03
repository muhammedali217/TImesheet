﻿$(document).ready(function () {
    var Localvaluee = localStorage.getItem('AdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var Localvalue = localStorage.getItem('AdminSession');
        var SpParams = {};
        SpParams.strProc = "Months_DrpDown";

        $.ajax({
            url: "/api/FIXZIService/GetHTTPDropDownResponse",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                if (response != null) {

                    for (var i = 0; i < response.length; i++) {
                        {

                            $("#ddlMonth").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }//for
                }//if
            }//response
        });//ajax
        if (Localvalue == "Start") {

            $('#tblLeaves').html('<table cellpadding="0" class="display responsive nowrap" cellspacing="0" border="0"  id="tableLeaveDetails" style="width:70%;"></table>');


            var oTable = $('#tableLeaveDetails').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [{
                    "sTitle": "Sl.No",
                    'sWidth': '5%'
                },
                {
                    "sTitle": "Employee Name",
                    'sWidth': '5%'
                },
                {
                    "sTitle": "From",
                    'sWidth': '10%'
                }, {
                    "sTitle": "To",
                    'sWidth': '10%'
                }, {
                    "sTitle": "No of Days",
                    'sWidth': '5%'
                }, {
                    "sTitle": "Leave Type",
                    'sWidth': '5%'
                    //,
                    //'bVisible': false
                },

                {
                    "sTitle": "Reason",
                    'sWidth': '5%'
                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Status",
                    'sWidth': '5%'
                    //,
                    //'bVisible': false
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
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    },
                    "sEmptyTable": ""
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
        function Loadvalues(monthId) {
            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "MonthName";
            varParams.strArgmt = monthId;
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "Leave_TakenEmployeeDetails";
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
                        $("#tableLeaveDetails").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {

                            if ((response.details[j].Leave_NoOfDays).toString() == '0.5') {
                                jQuery("#tableLeaveDetails").dataTable().fnAddData([j + 1, (response.details[j].Employee_FirstName).toString(), (response.details[j].Leave_From).toString(), (response.details[j].Leave_From), (response.details[j].Leave_NoOfDays).toString(), (response.details[j].Leave_Type).toString(), (response.details[j].Leave_Reason).toString(), (response.details[j].Leave_Status).toString()]);
                            }
                            else {
                                jQuery("#tableLeaveDetails").dataTable().fnAddData([j + 1, (response.details[j].Employee_FirstName).toString(), (response.details[j].Leave_From).toString(), (response.details[j].Leave_From), (response.details[j].Leave_NoOfDays).toString(), (response.details[j].Leave_Type).toString(), (response.details[j].Leave_Reason).toString(), (response.details[j].Leave_Status).toString()]);

                            }

                        }
                    }
                    //   alert(response.details);

                }
            });
        }


        $("#ddlMonth").change(function () {
            Loadvalues($("#ddlMonth").val());
        });
    }

    $("#btnDownLoad").click(function () {
        if ($("#ddlMonth").val() == '') {
            $.alert.open({ type: 'warning', content: 'Please choose month before download' });
        }
        else {
            ExportReport($("#ddlMonth").val());
        }
    });





    function ExportReport(month) {

        var Params = {};
        Params.Month = month;
       


        $.ajax({
            type: "POST",
            url: "/api/FIXZIService/LeaveReportThisMonth",
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
});



