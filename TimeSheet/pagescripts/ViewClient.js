$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('AdminSession');
        window.location.href = "login.html";
    });
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var Localvalue = localStorage.getItem('AdminSession');
        alert('hi');
        if (Localvalue == "Start") {
            Loadvalues();
            $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap" cellspacing="0" border="0"  id="tableContractorDetails"></table>');


            var oTable = $('#tableContractorDetails').dataTable({
                "aaData": [
                    /* Reduced data set */
                ],

                "aoColumns": [{
                    "sTitle": "CID",
                    'bVisible': false
                }, {
                    "sTitle": "ID",
                    'sWidth': '10%'
                },
                {
                    "sTitle": "Name",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Status",
                    'sWidth': '5%'
                }, {
                    "sTitle": "Remarks",
                    'sWidth': '7%'
                }



                ],

                "aLengthMenu": [
                    [5, 10, 15, -1],
                    [5, 10, 15, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": -1,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                "bFilter": false,
                "bInfo": true,
                "scrollX": true,
                "scrollY": 320,
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
        function Loadvalues() {
            var SpParams = {};
            SpParams.strProc = "Client_ViewAll";

            // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
            // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"
            alert('hi');
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    alert(response.details);
                    if (response.details != null) {
                        $("#tableContractorDetails").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {
                            jQuery("#tableContractorDetails").dataTable().fnAddData([(response.details[j].CId).toString(), (response.details[j].ClientId).toString(), (response.details[j].ClientName).toString(), (response.details[j].ClientStatus), (response.details[j].ClientRemarks).toString(),
                                '<button type="button" class="btn btn-warning b.tn-lg" id="btnEdit" style="font-size: 10px;padding-left: 2px;padding-right: 2px;margin-left: -14px;">EDIT</button>'], true);
                        }
                        jQuery("#tableContractorDetails").dataTable().fnDraw();

                    } //   alert(response.details);

                }
            });
        }





        //$('#tableContractorDetails').on('click', '#btnEdit', function () {
        //    var nRow = $(this).parents('tr')[0];
        //    var ProjectId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[0];
        //    window.location = "Projectedit.aspx?Projects_ID=" + ProjectId;

        //});
    
    }

});