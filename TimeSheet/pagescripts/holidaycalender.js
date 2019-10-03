$(document).ready(function () {
    var Localvaluee = localStorage.getItem('EmployeeId');
    //if (Localvaluee == null) {
    //    $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
    //    window.location = "login.html";
    //}
    //else {
        var Localvalue = localStorage.getItem('EmployeeId');

        var name = localStorage.getItem('EmployeeName');


        $("#lblName").text(name);
        Loadvalues();
        $('#tblholiday').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableHolidayCalender" style="width:800px;"></table>');




        var oTable = $('#tableHolidayCalender').dataTable({
            "aaData": [
            /* Reduced data set */
            ],

            "aoColumns": [{
                "sTitle": "Sl No",
                'sWidth': '10%'
            }, {
                "sTitle": "DATE",
                'sWidth': '10%'
            },
            {
                "sTitle": "DAY",
                'sWidth': '10%',
                'sClass': 'center'
            },
            {
                "sTitle": "FESTIVAL",
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
                "sEmptyTable": "No attendance available for this date",
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
        jQuery('#tableHolidayCalender_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tableHolidayCalender_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


        var nEditing = null;

        // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   




        function Loadvalues() {



            var SpParams = {};
            SpParams.strProc = "HolidayCalender_ViewThisYear";




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
                        $("#tableHolidayCalender").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {


                            jQuery("#tableHolidayCalender").dataTable().fnAddData([j + 1, (response.details[j].HolidayCalnder_Date).toString().toLocaleUpperCase(), (response.details[j].HolidayCalnder_Day).toString().toLocaleUpperCase(), '<b>' + (response.details[j].HolidayCalnder_Festival).toString().toLocaleUpperCase() + '</b>']);


                        }
                    }
                    //   alert(response.details);

                }
            });
        }


    //}


});


