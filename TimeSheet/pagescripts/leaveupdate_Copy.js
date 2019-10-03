$(document).ready(function () {
    $('#tblLeavesUpdated').hide();
    $('#txtPL').bind('keyup blur', function () { $(this).val($(this).val().replace(/[^0-9.]/g, '')) });
    $(".js-example-basic-multiple").select2();
    $(".js-example-theme-multiple").select2({
        theme: "classic"
    });



    var SpParams = {};
    SpParams.strProc = "Employee_ActiveEmpDrpDown";

    $.ajax({
        url: "/api/FIXZIService/GetHTTPDropDownResponse",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: JSON.stringify(SpParams),
        success: function (response) {
            $('#ddlEmployee').empty();
            if (response != null) {

                for (var i = 0; i < response.length; i++) {
                    {

                        $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                    }
                }//for
            }//if
        }//response
    });//ajax
    $('#btnUpdate').click(function () {

        if ($("#ddlEmployee").val() == null) {
            $.alert.open({ type: 'warning', content: 'Please choose atleast one employee' });
        }
        else if ($("#txtPL").val() == "") {
            $.alert.open({ type: 'warning', content: 'Please enter the PL for this quarter' });
        }
        else {
            var empId = $("#ddlEmployee").val();



            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "EmployeeIdArray";
            varParams.strArgmt = empId.toString();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "PL";
            varParams.strArgmt = $("#txtPL").val();
            varProcParams[1] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "LeaveHistory_Update";
            SpParams.oProcParams = varProcParams;


            //alert($("#ddlProject").val());
            //alert($("#ddlEmployee").val());

            var project = $('#ddlEmployee :selected').text();

            $.alert.open('Are you sure to update leave?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    $.ajax({
                        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                        type: "POST",
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        data: JSON.stringify(SpParams),
                        success: function (response) {
                            if (response.status == 'SUCCESS') {
                                $.alert.open({ type: 'info', content: 'Leave updated successfully.' });
                                $("#ddlEmployee").select2("val", "");
                                $("#txtPL").val('');
                                LeaveSummary();
                            }
                        }
                    });
                }
            });

        }
    });
    $('#btnCancel').click(function () {
        $("#ddlEmployee").select2("val", "");
        $("#txtPL").val('')

    });

    $('#btnShowLeave').click(function () {
        LeaveSummary();
    });



    function LeaveSummary() {
        $('#tblLeavesUpdated').show();
        $("html, div").animate({
            scrollTop: $('html, div').get(0).scrollHeight
        }, 44);
        var SpParams = {};
        SpParams.strProc = "LeaveHistory_LastUpdated";

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.details != null) {
                    $("#tableLeavesUpdated").dataTable().fnClearTable();
                    console.log(response.details);
                    for (var j = 0; j < response.details.length; j++) {

                        jQuery("#tableLeavesUpdated").dataTable().fnAddData([j + 1, (response.details[j].Name).toString(), (response.details[j].LeaveHistory_Available).toString(), (response.details[j].Updated).toString()]);

                    }
                    jQuery("#tableLeavesUpdated").dataTable().fnDraw();

                }
            }
        });
    }













    $('#tblLeavesUpdated').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="1" id="tableLeavesUpdated" style="width:200px;"></table>');

    var oTable = $('#tableLeavesUpdated').dataTable({
        "aaData": [
        ],

        "aoColumns": [

         {
             "sTitle": "Sl No",
             'sWidth': '10%'
         }, {
             "sTitle": "Employee Name",
             'sWidth': '10%'
         }, {
             "sTitle": "Leaves Remaining",
             'sWidth': '10%'
         }, {
             "sTitle": "Last Updated",
             'sWidth': '10%'
         }

        ],

        "aLengthMenu": [
                    [5, 10, 15, -1],
                    [5, 10, 15, "All"] // change per page values here
        ],
        // set the initial value
        "iDisplayLength": 100,
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",

        "oLanguage": {
            "sLengthMenu": "",
            "sEmptyTable": "No data available",
            "oPaginate": {
                "sPrevious": "",
                "sNext": ""
            }
        },
        "bFilter": false,
        "bInfo": false,
    });




});