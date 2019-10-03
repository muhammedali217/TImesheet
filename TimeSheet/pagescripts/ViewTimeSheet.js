$(document).ready(function () {
    var Localvaluee = localStorage.getItem('AdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#btnBack').hide();


        $('#txtDate').datepicker({
            todayHighlight: true
        });
        $('#txtSDate').datepicker();
        $('#txtEDate').datepicker();
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        $('#txtDate').val(month + '/' + day + '/' + year);

        $('#txtDate').on('change', function () {
            $('.datepicker').hide();
        });

        $('#txtSDate').on('change', function () {
            $('.datepicker').hide();
        });
        $('#txtEDate').on('change', function () {
            $('.datepicker').hide();
        });
        //alert(date[0]);//month
        //alert(date[1]);//day
        //alert(date[2]);//year
        $('#txtDate').change(function () {

            var date1 = $('#txtDate').val();
            var date = date1.split('/');
            //alert(date1);
            $('#btnBack').show();
            //alert(date);

            //alert(date[1]);
            //alert(date[0]);
            //alert(date[2]);
            Loadvalues(date[1], date[0], date[2]);

        });

        $('#btnBack').click(function () {
            //alert("hi");
            $("#tableContractorDetails").dataTable().fnClearTable();
            Loadvalues(day, month, year);
        });

        var Localvalue = localStorage.getItem('AdminSession');

        if (Localvalue == "Start") {
            Loadvalues(day, month, year);

            $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableContractorDetails"></table>');






            var oTable = $('#tableContractorDetails').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [{
                    "sTitle": "ID",
                    'bVisible': false
                }, {
                    "sTitle": "EmpCode",
                    'sWidth': '10%',
                    "sClass": "center"
                }, {
                    "sTitle": "Name",
                    'sWidth': '15%',
                    "sClass": "center"
                }, {
                    "sTitle": "Project",
                    'sWidth': '20%',
                    "sClass": "center"
                }, {
                    "sTitle": "Task",
                    'sWidth': '15%',
                    "sClass": "center"
                    //,
                    //'bVisible': false
                }, {
                    "sTitle": "Date",
                    'sWidth': '10%',
                    "sClass": "center"

                },
                {
                    "sTitle": "Hours",
                    'sWidth': '10%',
                    "sClass": "center"

                }, {
                    "sTitle": "Description",
                    'sWidth': '25%',
                    "sClass": "center"

                },
                {
                    "sTitle": "",
                    'sWidth': '25%',
                    "sClass": "center"

                }

                ],

                "aLengthMenu": [
                            [5, 10, 15, -1],
                            [5, 10, 15, "All"] // change per page values here
                ],
                "iDisplayLength": -1,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                "bFilter": false,
                "bInfo": true,
                "scrollX": true,
                "deferRender": true,
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


            var nEditing = null;

            // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   

        }
        else {
            window.location = "login.html";
        }
        function Loadvalues(day, month, year) {

            //$("#tableContractorDetails").dataTable().fnClearTable();

            var varProcParams = new Array();




            var varParams = {};
            varParams.strKey = "Day";
            varParams.strArgmt = day;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Month";
            varParams.strArgmt = month;
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Year";
            varParams.strArgmt = year;
            varProcParams[2] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "TimeSheet_ViewToday";
            SpParams.oProcParams = varProcParams;

            // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
            // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"

            //alert(day);
            //alert(month);
            //alert(year);

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


                            jQuery("#tableContractorDetails").dataTable().fnAddData([(response.details[j].TimeSheet_Id).toString(), (response.details[j].EmpCode).toString(), (response.details[j].Name).toString(), (response.details[j].Projects_Name), (response.details[j].SubTasks).toString(), (response.details[j].TimeSheet_Date).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Description).toString(), ' <div class="active btn-group btn-group-sm"> <button type="button" class="btn btn-primary bt.n-lg" id="btnApprove">Approve</button><button type="button" class="btn btn-warning b.tn-lg" id="btnReject" width:100px>Reject</button> </div>']);


                        }
                    }
                    //   alert(response.details);

                }
            });
        }




        $('#tableContractorDetails').on('click', '#btnApprove', function () {
            //alert("Approved");
            var nRow = $(this).parents('tr')[0];
            var TimeSheetId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[0];
            //alert(TimeSheetId);
            $.alert.open('Are you sure Approve this Time Sheet?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    updateStatus(TimeSheetId, "Approved");
                    $.alert.open({ type: 'info', content: 'Time Sheet Approved.' });
                    $("#tableContractorDetails").dataTable().fnClearTable();
                    Loadvalues(day, month, year);
                }
            });

        });

        $('#tableContractorDetails').on('click', '#btnReject', function () {
            //alert("Rejected");
            var nRow = $(this).parents('tr')[0];
            var TimeSheetId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[0];
            $.alert.open('Are you sure Reject this Time Sheet?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    //alert(TimeSheetId);
                    updateStatus(TimeSheetId, "Rejected");
                    $.alert.open({ type: 'info', content: 'Time Sheet Rejected.' });
                    $("#tableContractorDetails").dataTable().fnClearTable();

                    Loadvalues(day, month, year);
                }
            });
        });

        function updateStatus(varID, varStatus) {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "TimeSheet_Status";
            varParams.strArgmt = varStatus;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "TimeSheet_Id";
            varParams.strArgmt = varID;
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "TimeSheet_ApproveReject";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    $("#tableContractorDetails").dataTable().fnClearTable();
                    Loadvalues(day, month, year);
                }
            });

        }

        $('#btnExport').click(function () {
            Export($('#txtSDate').val(), $('#txtEDate').val());
        });

        function Export(sDate, EDate) {

            var Params = {};
            Params.SDate = sDate;
            Params.EDate = EDate;


            $.ajax({
                type: "POST",
                url: "/api/FIXZIService/ExportToExcel",
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
    }
});