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
            $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableContractorDetails" style="width:800px;"></table>');
            var oTable = $('#tableContractorDetails').dataTable({
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
                    "sTitle": "Employee Code",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Name",
                    'sWidth': '5%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Mobile No",
                    'sWidth': '0%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Address",
                    'sWidth': '0%',
                    'sClass': 'center'
                }, {
                    "sTitle": "DOB",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Joining Date",
                    'sWidth': '0%',
                    'sClass': 'center'
                },

                {
                    "sTitle": "Email",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Previous Company",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Account",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Releiving",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Employment Status",
                    'sWidth': '',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Marital Status",
                    'sWidth': '',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Qualification",
                    'sWidth': '',
                    'sClass': 'center'
                },
                 {
                     "sTitle": "Designation",
                     'sWidth': '',
                     'sClass': 'center'
                 },
                 {
                     "sTitle": "Department",
                     'sWidth': '',
                     'sClass': 'center'
                 },
                 {
                     "sTitle": "Father Name",
                     'sWidth': '',
                     'sClass': 'center'
                 },
                  {
                      "sTitle": "Emergency Contact Person",
                      'sWidth': '',
                      'sClass': 'center'
                  },
                  {
                      "sTitle": "Emergency Contact Number",
                      'sWidth': '',
                      'sClass': 'center'


                  },
                  {
                      "sTitle": "Blood Group",
                      'sWidth': '',
                      'sClass': 'center'


                  },
                  {
                      "sTitle": "Passport Number",
                      'sWidth': '',
                      'sClass': 'center'


                  },
                  {
                      "sTitle": "PAN",
                      'sWidth': '',
                      'sClass': 'center'


                  },
                   {
                       "sTitle": "Using Asset",
                       'sWidth': '',
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
                "bFilter": true,
                "bInfo": true,
                "scrollX": true,
                "scrollY": 320,
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
        function Loadvalues() {
            var SpParams = {};
            SpParams.strProc = "Employee_ViewAll";

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

                            if ((response.details[j].Employee_Active).toString() == "YES") {
                                jQuery("#tableContractorDetails").dataTable().fnAddData(['<img src="/admin/images/active.png" style="height:20px;width:20px;">', (response.details[j].Employee_ID).toString(), j + 1, (response.details[j].Employee_Code).toString(), (response.details[j].Name).toString(), (response.details[j].Employee_ContactNo), (response.details[j].Employee_PermanentAddress).toString(), (response.details[j].Employee_DateOfBirth).toString(), (response.details[j].Employee_DateOfJoining).toString(), (response.details[j].Employee_PersonalMailId).toString(), (response.details[j].Employee_PreviousCompanyName).toString(), (response.details[j].SalaryAccountDetails).toString(), (response.details[j].Employee_DateOfRelieving).toString(), (response.details[j].Employee_Status).toString(), (response.details[j].Employee_MaritalStatus).toString(), (response.details[j].Employee_Qualification).toString(), (response.details[j].Employee_Designation).toString(), (response.details[j].Employee_Department).toString(), (response.details[j].Employee_FathersName).toString(), (response.details[j].Employee_EmergencyCntctName).toString(), (response.details[j].Employee_EmergencyCntctNo).toString(), (response.details[j].Employee_BloodGroup).toString(), (response.details[j].Employee_PassportNo).toString(), (response.details[j].Employee_PanNo).toString(), (response.details[j].Employee_AssetIdOfDesktop).toString()]);


                            }

                            else if ((response.details[j].Employee_Active).toString() == "NO") {

                                jQuery("#tableContractorDetails").dataTable().fnAddData(['<img src="/admin/images/inactive1.png" style="height:20px;width:20px;">', +(response.details[j].Employee_ID).toString(), j + 1, (response.details[j].Employee_Code).toString(), (response.details[j].Name).toString(), (response.details[j].Employee_ContactNo), (response.details[j].Employee_PermanentAddress).toString(), (response.details[j].Employee_DateOfBirth).toString(), (response.details[j].Employee_DateOfJoining).toString(), (response.details[j].Employee_PersonalMailId).toString(), (response.details[j].Employee_PreviousCompanyName).toString(), (response.details[j].SalaryAccountDetails).toString(), (response.details[j].Employee_DateOfRelieving).toString(), (response.details[j].Employee_Status).toString(), (response.details[j].Employee_MaritalStatus).toString(), (response.details[j].Employee_Qualification).toString(), (response.details[j].Employee_Designation).toString(), (response.details[j].Employee_Department).toString(), (response.details[j].Employee_FathersName).toString(), (response.details[j].Employee_EmergencyCntctName).toString(), (response.details[j].Employee_EmergencyCntctNo).toString(), (response.details[j].Employee_BloodGroup).toString(), (response.details[j].Employee_PassportNo).toString(), (response.details[j].Employee_PanNo).toString(), (response.details[j].Employee_AssetIdOfDesktop).toString()],false);
                            }
                            
                        }
                        jQuery("#tableContractorDetails").dataTable().fnDraw();
                    }
                    //   alert(response.details);

                }
            });
        }


        //$('#tableContractorDetails tbody').on('click', 'td.details-control', function () {

        //    var table = $('#tableContractorDetails').DataTable();

        //    var tr = $(this).parents('tr');
        //    var row = table.row(tr);

        //    if (row.child.isShown()) {
        //        // This row is already open - close it
        //        row.child.hide();
        //        tr.removeClass('shown');
        //    }
        //    else {
        //        // Open this row (the format() function would return the data to be shown)
        //        row.child(row.data()).show();
        //        tr.addClass('shown');
        //    }
        //} );

        ////$(document).on("click", '#tableContractorDetails tbody td.details-control', function (tr) {
        ////    alert("hi");
        ////    var data = oTable.row(this).data();
        ////    alert('You clicked on ' + data[0] + '\'s row');
        ////});


        //function format() {

        //    var nRow = $(this).parent('tr')[0];
        //    alert(nRow);
        //    var aData = oTable.fnGetData(nRow);
        //    //alert(aData[1]);
        //   //// var nRow = $(this).parents('tr')[0];
        //    var RowValue = oTable.fnGetData(nRow)[0];
        //    alert(RowValue[0]);
        //    // `d` is the original data object for the row
        //    return '<center><table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        //        '<tr>' +
        //            '<td>Mobile:</td>' +
        //            '<td>' + RowValue[4] + '</td>' + 
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extension number:</td>' +
        //            '<td>' + RowValue[1] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Mobile:</td>' +
        //            '<td>' + RowValue[5] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extra info:</td>' +
        //            '<td>' + RowValue[13] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extra info:</td>' +
        //            '<td>' + RowValue[13] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extra info:</td>' +
        //            '<td>' + RowValue[13] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extra info:</td>' +
        //            '<td>' + RowValue[13] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extra info:</td>' +
        //            '<td>' + RowValue[13] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extra info:</td>' +
        //            '<td>' + RowValue[13] + '</td>' +
        //        '</tr>' +
        //        '<tr>' +
        //            '<td>Extra info:</td>' +
        //            '<td>' + RowValue[13] + '</td>' +
        //        '</tr>' +
        //    '</table></center>' ;
        //}

    }
    

});



