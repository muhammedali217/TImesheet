$(document).ready(function () {
    var Localvaluee = localStorage.getItem('AdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {

        var Localvalue = localStorage.getItem('AdminSession');

        if (Localvalue == "Start") {
            Loadvalues();

            $('#tblProjectTasks').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableProjectTasks"></table>');






            var oTable = $('#tableProjectTasks').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [{
                    "sTitle": "Project Name",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Employees Assigned",
                    'sWidth': '10%'
                }



                ],

                "aLengthMenu": [
                            [5, 10, 15, -1],
                            [5, 10, 15, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": 15,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
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
                    }
                },
                "bFilter": false,
                "bInfo": false,
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
            SpParams.strProc = "Project_EmployeeDetails";

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
                        $("#tableProjectTasks").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {


                            jQuery("#tableProjectTasks").dataTable().fnAddData([(response.details[j].Projects_Name).toString().toUpperCase(), (response.details[j].Employee_FirstName)]);


                        }
                    }
                    //   alert(response.details);

                }
            });
        }


        jQuery("#btnAssignTaskToemployee").click(function () {
            window.location = 'AssignSubTasks.aspx';
        });
    }

});



