$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('SuperAdminSession');
        window.location.href = "login.html";
    });
    var Localvaluee = localStorage.getItem('SuperAdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        ActiveEmployee_DrpDown();
        Year_DropDown();
        $('#btnReportSubmit').click(function () {

            if ($("#ddlActiveEmp").val() == null) {
                $.alert.open({ type: 'warning', content: 'Please choose an employee' });
            }
            else if ($("#ddlYear").val() == "") {
                $.alert.open({ type: 'warning', content: 'Please Choose a year' });
            }
            else {

                $('#tblProjectReport').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableProjectReportDetails" style="width:800px;"></table>');
                var oTable = $('#tableProjectReportDetails').dataTable({
                    "aaData": [
                        /* Reduced data set */
                    ],
                    "aoColumns": [
                        {
                            "sTitle": "Sl No",
                            'sWidth': '10%',
                            'sClass': 'center'
                        },
                        {
                            "sTitle": "Project ID",
                            'sWidth': '1%',
                            'sClass': 'center',
                            'bVisible': false
                        }, {
                            "sTitle": "Project Name",
                            'sWidth': '10%',
                            'sClass': 'center'
                        }, {
                            "sTitle": "Profit/Cost Center Code",
                            'sWidth': '10%',
                            'sClass': 'center'

                        },
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
                    "scrollY": 320,
                    "bDeferRender": true,
                    "bProcessing": true,
                    "bProcessing": true,
                    "oLanguage": {
                        "sLengthMenu": "",
                        "sEmptyTable": "No data available",
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



                var empId = $("#ddlActiveEmp").val();

                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "Employee_ID";
                varParams.strArgmt = empId;
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Year";
                varParams.strArgmt = $("#ddlYear").val();
                varProcParams[1] = varParams;
                varParams = {};

                var SpParams = {};
                SpParams.strProc = "Project_ProfitCostReport";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.details != null) {
                            $("#tableProjectReportDetails").dataTable().fnClearTable();
                            var profitcostCode = '';
                            for (var j = 0; j < response.details.length; j++) {
                                if (response.details[j].ProfitCostCenter_Code !== null)
                                    profitcostCode = (response.details[j].ProfitCostCenter_Code).toString();
                                else
                                    profitcostCode = 'No Code';
                                jQuery("#tableProjectReportDetails").dataTable().fnAddData([j + 1, (response.details[j].Projects_ID).toString(), (response.details[j].Projects_Name).toString(), profitcostCode]);
                            }
                            jQuery("#tableProjectReportDetails").dataTable().fnDraw();
                        }
                    }
                });
            }
        });
    }
    function ActiveEmployee_DrpDown() {
        var SpParams = {};
        SpParams.strProc = "Employee_ActiveEmpDrpDown";
        $.ajax({
            url: "/api/FIXZIService/GetHTTPDropDownResponse",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                $('#ddlActiveEmp').empty();
                if (response != null) {

                    for (var i = 0; i < response.length; i++) {
                        {
                            $("#ddlActiveEmp").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                        }
                    }//for
                }//if
            }//response
        });//ajax
    }

    function Year_DropDown() {
        var year = [];
        var current_year = new Date().getFullYear();
        year.push(current_year - 3);
        year.push(current_year - 2);
        year.push(current_year - 1);
        year.push(current_year);

        for (var i = 0; i < year.length; i++)
            $("#ddlYear").append(new Option(year[i], year[i]));
    }
});
