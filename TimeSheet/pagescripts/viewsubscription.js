$(document).ready(function () {

    var Localvaluee = localStorage.getItem('AdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var Localvalue = localStorage.getItem('AdminSession');

        if (Localvalue == "Start") {
            //Loadvalues();

            $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableContractorDetails" style="width:50px !important;"></table>');



            var oTable = $('#tableContractorDetails').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [
                    //{
                    //    "className": 'details-control',
                    //    "orderable": false,
                    //    "data": null,
                    //    "defaultContent": '',
                    //    'sWidth': '5%'
                    //},

                {
                    "sTitle": "&nbsp&nbspEmail ID",
                    'sWidth': '2%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Date",
                    'sWidth': '2%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Website",
                    'sWidth': '2%',
                    'sClass': 'center'
                },


                ],

                "aLengthMenu": [
                            [5, 10, 15, -1],
                            [5, 10, 15, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": -1,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                "bFilter": false,
                "bInfo": false,
                "scrollX": true,
                "bDeferRender": true,
                "bProcessing": true,
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
        function Loadvalues(Subscribe_Website) {

            var varProcParams = new Array();




            var varParams = {};
            varParams.strKey = "Subscribe_Website";
            varParams.strArgmt = Subscribe_Website;
            varProcParams[0] = varParams;
            varParams = {};
            var SpParams = {};


            var SpParams = {};
            SpParams.strProc = "SubscribeList";
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


                            jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1 + ') &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '&nbsp;&nbsp;  ' + (response.details[j].Email).toString(), (response.details[j].Date).toString(), (response.details[j].Website)]);




                        }
                        jQuery("#tableContractorDetails").dataTable().fnDraw();
                    }
                    //   alert(response.details);

                }
            });
        }



    }
    $('#ddlWebsite').change(function () {
        var websitr = $('#ddlWebsite option:selected').text();
        Loadvalues(websitr);
    });


});



