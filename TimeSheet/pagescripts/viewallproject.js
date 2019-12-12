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
            $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap" cellspacing="0" border="0"  id="tableContractorDetails"></table>');


            var oTable = $('#tableContractorDetails').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [{
                    "sTitle": "ID",
                    'bVisible': false
                },{
                    "sTitle": "ShortName",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Name",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Start Date",
                    'sWidth': '5%'
                }, {
                    "sTitle": "End Date ",
                    'sWidth': '5%'
                    //,
                    //'bVisible': false
                }, {
                    "sTitle": "Client",
                    'sWidth': '10%'

                },
                {
                    "sTitle": "Duration",
                    'sWidth': '5%'

                }, {
                    "sTitle": "Description",
                    'sWidth': '25%'

                }, {
                    "sTitle": "Version Control",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Programming Languages",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Packages Used",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Frame Work",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Hosting Server",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Database",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Third Party Tools",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Security",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Ports Used",
                    'sWidth': '10%'
                }, {
                    "sTitle": "",
                    'sClass': 'center'
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
            SpParams.strProc = "Project_ViewAll";

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
                            jQuery("#tableContractorDetails").dataTable().fnAddData([(response.details[j].Projects_ID).toString(), (response.details[j].Projects_ShortName).toString(), (response.details[j].Projects_Name).toString(), (response.details[j].Projects_BeginDate), (response.details[j].Projects_EndDate).toString(), (response.details[j].Projects_ClientName).toString(), (response.details[j].Projects_Duration).toString(), (response.details[j].Projects_Description).toString(),
                                (response.details[j].Projects_VersionControl).toString(),(response.details[j].Projects_ProgrammingLanguages).toString(), (response.details[j].Projects_PackagesUsed).toString(),(response.details[j].Projects_Framework).toString(), (response.details[j].Projects_HostingServer).toString(),
                                (response.details[j].Projects_Database).toString(), (response.details[j].Projects_ThirdPartyTools).toString(),(response.details[j].Projects_Security).toString(), (response.details[j].Projects_PortsUsed).toString(),
                                '<button type="button" class="btn btn-warning b.tn-lg" id="btnEdit" style="font-size: 10px;padding-left: 2px;padding-right: 2px;margin-left: -14px;">EDIT</button>'], true);
                        }
                        jQuery("#tableContractorDetails").dataTable().fnDraw();

                    } //   alert(response.details);

                }
            });
        }


        $('#btnAssignTasks').click(function () {
            window.location = "addprojecttask.aspx";
        });


        $('#tableContractorDetails').on('click', '#btnEdit', function () {
            var nRow = $(this).parents('tr')[0];
            var ProjectId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[0];
            window.location = "Projectedit.aspx?Projects_ID=" + ProjectId;

        });
    }
});



