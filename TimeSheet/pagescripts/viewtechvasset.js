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

            $('#tblAssets').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableAssetList" style="width:800px;"></table>');



            var oTable = $('#tableAssetList').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [

                 {
                     "sTitle": "",

                 },
                {
                    "sTitle": "ID",
                    'bVisible': false
                }, {
                    "sTitle": "Sl No",
                    'sWidth': '5%',
                    'sClass': 'center'

                }, {
                    "sTitle": "CODE",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "TYPE",
                    'sWidth': '5%',
                    'sClass': 'center'
                }, {
                    "sTitle": "OPERATING SYSTEM",
                    'sWidth': '0%',
                    'sClass': 'center'

                }, {
                    "sTitle": "USERS",
                    'sWidth': '0%',
                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Using From",
                    'sWidth': '0%',
                    'sClass': 'center'

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
                "scrollX": true,
                "oLanguage": {
                    "sLengthMenu": "",
                    "sEmptyTable": "Please Refresh the page",
                    "oPaginate": {
                        "sPrevious": "",
                        "sNext": ""
                    }
                }
            });
            jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
            jQuery('.paginate_disabled_previous').addClass("label label-default");
            jQuery('#tableAssetList_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
            jQuery('#tableAssetList_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


            var nEditing = null;

            // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   

        }
        else {
            window.location = "login.html";
        }
        function Loadvalues() {
            var SpParams = {};
            SpParams.strProc = "Asset_ViewAll";

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
                        $("#tableAssetList").dataTable().fnClearTable();

                        for (var j = 0; j < response.details.length; j++) {

                            if ((response.details[j].Asset_Type).toString() == "DESKTOP") {
                                jQuery("#tableAssetList").dataTable().fnAddData(['<img src="/admin/images/desk.png" style="height:20px;width:20px;">', (response.details[j].Asset_Id).toString(), j + 1, (response.details[j].Asset_Code).toString(), (response.details[j].Asset_Type).toString(), (response.details[j].Asset_OS), (response.details[j].Asset_Users).toUpperCase(), (response.details[j].Asset_UsingDate).toString()]);


                            }

                            else if ((response.details[j].Asset_Type).toString() == "LAPTOP") {

                                jQuery("#tableAssetList").dataTable().fnAddData(['<img src="/admin/images/lap.png" style="height:20px;width:20px;">', (response.details[j].Asset_Id).toString(), j + 1, (response.details[j].Asset_Code).toString(), (response.details[j].Asset_Type).toString(), (response.details[j].Asset_OS), (response.details[j].Asset_Users).toUpperCase(), (response.details[j].Asset_UsingDate).toString()]);
                            }

                        }
                    }
                    //   alert(response.details);

                }
            });
        }



    }
    jQuery("#btnCommonAssets").click(function () {
        window.location = "viewtechvcommonassets.aspx";
    });

});



