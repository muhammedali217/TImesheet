$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('SuperAdminSession');
        window.location.href = "login.html";
    });
    var Localvaluee = localStorage.getItem('SuperAdminSession');
    var oTable = '';
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        ListProfitCost();
    }

    $(document).on('mousedown.save', "i.fa.fa-floppy-o", function (e) {
        var $row = $(this).closest("tr");
        $tds = $row.find("td");

        var row_data = oTable.row($(this).closest('tr')).data();
        var ProfitCostCenter_ID = row_data[0];

        var Edited_row = new Array();
        $.each($tds, function (i, el) {
            var txt = $(this).text();
            Edited_row.push(txt);
        });
        var varProcParams = new Array();

        var varParams = {};
        varParams.strKey = "ProfitCostCenter_Code";
        varParams.strArgmt = Edited_row[1];
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "ProfitCostCenter_Type";
        varParams.strArgmt = Edited_row[2];
        varProcParams[1] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "ProfitCostCenter_Owner";
        varParams.strArgmt = Edited_row[3];
        varProcParams[2] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "ProfitCostCenter_ID";
        varParams.strArgmt = ProfitCostCenter_ID;
        varProcParams[3] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "Edit_ProfitCostCenter";
        SpParams.oProcParams = varProcParams;

       

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (res) {
                oTable.destroy();
                ListProfitCost();
            }
        });
        oTable.row($(this).closest("tr")).remove().draw();
    });
        
    

    function ListProfitCost() {
        var SpParams = {};
        SpParams.strProc = "Get_ProfitCostCenter";

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.status === 'SUCCESS') {
                    var ProjectName = '';
                    for (var j = 0; j < response.details.length; j++) {

                        if (response.details[j].Project_Name === null)
                            ProjectName = 'No Projects assigned';
                        else
                            ProjectName = (response.details[j].Project_Name).toString();
                        jQuery("#tblProfitCostDetails").dataTable().fnAddData([j + 1, (response.details[j].ProfitCostCenter_ID), '<div contenteditable>' + (response.details[j].ProfitCostCenter_Code).toString() + '</div>', '<div contenteditable>' + (response.details[j].ProfitCostCenter_Type).toString() + '</div>', '<div contenteditable>' + (response.details[j].ProfitCostCenter_Owner) + '</div>', ProjectName, '<i class="fa fa-floppy-o" aria-hidden="true" style="cursor:pointer"></i>']);
                    }
                }
            }
        });

        $('#tblProfitCost').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tblProfitCostDetails" style="width:800px;"></table>');
        oTable = $('#tblProfitCostDetails').DataTable({
            "aaData": [

            ],
            "aoColumns": [
                {
                    "sTitle": "ID",
                    'bVisible': false
                }, {
                    "sTitle": "Sl No",
                    'sWidth': '5%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Code",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Type",
                    'sWidth': '5%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Owner",
                    'sWidth': '0%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Project",
                    'sWidth': '0%',
                    'sClass': 'center'
                }
                , {
                    "sTitle": "Action",
                    'sWidth': '0%',
                    'sClass': 'center',
                    'bSortable': false
                }
            ],

            "aLengthMenu": [
                [5, 10, 15, -1],
                [5, 10, 15, "All"]
            ],
            "iDisplayLength": -1,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "bFilter": false,
            "bInfo": true,
            "scrollX": true,
            "scrollY": 320,
            "bDeferRender": true,
            "bProcessing": true,
            "bDestroy": true,
            "bPaginate": false,
            "oLanguage": {
                "sLengthMenu": "",
                "sEmptyTable": "No Data Available",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            }
        });
        jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
        jQuery('.paginate_disabled_previous').addClass("label label-default");
        jQuery('#tblProfitCostDetails_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tblProfitCostDetails_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
    }

});