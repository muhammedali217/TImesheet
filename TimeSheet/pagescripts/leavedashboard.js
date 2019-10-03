$(document).ready(function () {
    var Localvaluee = localStorage.getItem('AdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var Localvalue = localStorage.getItem('AdminSession');
       // alert(Localvalue);
        if (Localvalue == "Start") {
            Loadvalues();

            $('#tblEmpLeave').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableContractorDetails" style="width:100%;"></table>');



            var oTable = $('#tableContractorDetails').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [
                  
                {
                    "sTitle": "ID",
                    'bVisible': false
                }, {
                    "sTitle": "SlNo",
                    'sWidth': '5%'

                }, {
                    "sTitle": "EmployeeName",
                    'sWidth': '5%'
                }, {
                    "sTitle": "LeaveTaken",
                    'sWidth': '5%'
                }, {
                    "sTitle": "RemainingLeave",
                    'sWidth': '5%'
                }, {
                    "sTitle": "RemainingSickLeave",
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
                "iDisplayLength": -1,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                "bFilter": false,
                "bInfo":false,
                "scrollX": true,
                "bDeferRender": true,
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
            SpParams.strProc = "LeaveHistory_EmpDashBoard";

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

                           
                            jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1, j + 1, (response.details[j].Name).toString(), (response.details[j].LeaveTaken).toString(), (response.details[j].LeaveHistory_Available), (response.details[j].LeaveHistory_SickL).toString()]);


                        

                        }
                        jQuery("#tableContractorDetails").dataTable().fnDraw();
                    }
                    //   alert(response.details);

                }
            });
        }



    }


    jQuery("#btndownload").click(function () {
        ExportReport();
    });

    function ExportReport() {

      



        $.ajax({
            type: "POST",
            url: "/api/FIXZIService/LeaveDetailsReport",
            contentType: "application/json; charset=utf-8",
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



