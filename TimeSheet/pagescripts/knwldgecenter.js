$(document).ready(function () {
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        $("#lblName").text(name);
        Loadvalues();

        $('#tblKnwldge').html('<table cellpadding="0" class="display responsive nowrap" cellspacing="0" border="0"  id="tableKnwldgeCenter" style="width:300px;"></table>');


        var oTable = $('#tableKnwldgeCenter').dataTable({
            "aaData": [
            /* Reduced data set */
            ],

            "aoColumns": [{
                "sTitle": "Sl.No"
            },
             {
                 "sTitle": "TOPIC",
                 'sWidth': '10%'
             }, {
                 "sTitle": "DATE",
                 'sWidth': '5%'
             }, {
                 "sTitle": "DOWNLOAD",
                 'sWidth': '50%'
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
                    "sPrevious": "",
                    "sNext": ""
                }
            }
        });
        jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
        jQuery('.paginate_disabled_previous').addClass("label label-default");
        jQuery('#tableKnwldgeCenter_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tableKnwldgeCenter_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


        var nEditing = null;

        // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   



        function Loadvalues() {
            var link = "http://localhost:15794/KnowledgeCenter/";
            var hosted = "http://timesheet.techvantagesystems.com/KnowledgeCenter/";
            var SpParams = {};
            SpParams.strProc = "dbo.KnwldgeCenter_ViewAll";

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
                        $("#tableKnwldgeCenter").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {


                            jQuery("#tableKnwldgeCenter").dataTable().fnAddData([j + 1, (response.details[j].KnwldgeCenter_Topic).toString().toUpperCase(), '<label style="color:#008F14;text-align: center;font-size:14px;">' + (response.details[j].KnwldgeCenter_SessionOn).toString() + '</label>', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=' + hosted + (response.details[j].KnwldgeCenter_FileName) + '><i class="fa fa-download color-i" aria-hidden="true"></i></a>']);


                        }
                    }
                    //   alert(response.details);

                }
            });
        }
    }
});