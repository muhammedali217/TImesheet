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
                    "sTitle": "ID",
                    'bVisible': false
                }, {
                    "sTitle": "Sl No",
                    'sWidth': '1%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Asset",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Description",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Place",
                    'sWidth': '0%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Working",
                    'sWidth': '0%',
                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": " Not Working",
                    'sWidth': '0%',
                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Used",
                    'sWidth': '0%',
                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                 {
                     "sTitle": "Remaining",
                     'sWidth': '0%',
                     'sClass': 'center'

                     //,
                     //'bVisible': false
                 },
                 {
                     "sTitle": "Total",
                     'sWidth': '0%',
                     'sClass': 'center'

                     //,
                     //'bVisible': false
                 },
                 {
                     "sTitle": "Needed",
                     'sWidth': '0%',
                     'sClass': 'center'

                     //,
                     //'bVisible': false
                 },
                 {
                     "sTitle": "Status",
                     'sWidth': '0%',
                     'sClass': 'center'

                     //,
                     //'bVisible': false
                 },
                 {
                     "sTitle": "Authorized Person",
                     'sWidth': '0%',
                     'sClass': 'center'

                     //,
                     //'bVisible': false
                 },


                ],

                "aLengthMenu": [
                            [5, 10, 15, -1],
                            [5, 10, 15, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": -1,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                "bFilter": true,
                "bInfo": false,
                "scrollX": true,
                "oLanguage": {
                    "sLengthMenu": "",
                    "sEmptyTable": "Please wait.. Data is Loading",
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
            SpParams.strProc = "CommonAsset_ViewAll";

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

                            
                            jQuery("#tableAssetList").dataTable().fnAddData([(response.details[j].CommonAsset_Id).toString(), j + 1, (response.details[j].CommonAsset_Name).toUpperCase(), (response.details[j].CommonAsset_Desc).toString(), (response.details[j].CommonAsset_Place), (response.details[j].CommonAsset_Working).toString(), (response.details[j].CommonAsset_NtWrking).toString(), (response.details[j].CommonAsset_Used).toString(), (response.details[j].CommonAsset_Remaining).toString(), (response.details[j].CommonAsset_TotalQuantity).toString(), (response.details[j].CommonAsset_Needed).toString(), (response.details[j].CommonAsset_CurrentStatus).toString(), (response.details[j].CommonAsset_AuthorizedPerson).toString(),false]);


                            

                        }
                        jQuery("#tableAssetList").dataTable().fnDraw();
                    }
                    //   alert(response.details);

                }
            });
        }



    }
    

});



