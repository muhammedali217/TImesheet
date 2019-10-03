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

            $('#tblBills').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableBills" style="width:85%;"></table>');



            var oTable = $('#tableBills').dataTable({
                "aaData": [
                /* Reduced data set */
                ],

                "aoColumns": [
                {
                    "sTitle": "ID",
                    'bVisible': false
                }, {
                    "sTitle": "Sl No"

                }, {
                    "sTitle": "Bill Date",
                    "sWidth":"15%"
                }, {
                    "sTitle": "Invoice Number",

                    'bVisible': false
                }, {
                    "sTitle": "Invoice Company"

                }, {
                    "sTitle": "Details",

                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Bill Amount",

                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Due Date",

                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Payment Amount",

                    'bVisible': false

                    //,
                    //'bVisible': false
                },
                 {
                     "sTitle": "Cheque Number",

                     'bVisible': false

                     //,
                     //'bVisible': false
                 },
                  {
                      "sTitle": "Service Tax",

                      'bVisible': false

                      //,
                      //'bVisible': false
                  },
                   {
                       "sTitle": "TDS",

                       'bVisible': false

                       //,
                       //'bVisible': false
                   },
                    {
                        "sTitle": "VAT",

                        'bVisible': false

                        //,
                        //'bVisible': false
                    },
                    {
                        "sTitle": "Remarks",

                        'bVisible': false

                        //,
                        //'bVisible': false
                    },
                    {
                        "sTitle": "Status",
                        'bVisible': false

                        //,
                        //'bVisible': false
                    },
                    {
                        "sTitle": "Added By",

                        'bVisible': false

                        //,
                        //'bVisible': false
                    },
                    {
                        "sTitle": "Added On",

                        'bVisible': false

                        //,
                        //'bVisible': false
                    },
                    {
                        "sTitle": "",

                        'sClass': 'center'

                        //,
                        //'bVisible': false
                    },
                    {
                        "sTitle": "",

                        'sClass': 'center'

                        //,
                        //'bVisible': false
                    },
                    {
                        "sTitle": "",

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
                "aaSorting": [[1, "asc"]],
                "iDisplayLength": -1,
                "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                "bFilter": true,
                "bInfo": true,
                "scrollX": true,
                "bDeferRender": true,
                "bProcessing": true,
                "oLanguage": {
                    "sLengthMenu": "",
                    "sEmptyTable": "No Bills found in this category",
                    "oPaginate": {
                        "sPrevious": "",
                        "sNext": ""
                    }
                },
                "aoColumnDefs": [
            { "sWidth": "1%", "aTargets": [-1] }
                ]
            });
            jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
            jQuery('.paginate_disabled_previous').addClass("label label-default");
            jQuery('#tableBills_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
            jQuery('#tableBills_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


            var nEditing = null;

            // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   

        }
        else {
            window.location = "login.html";
        }

        $("#ddlBillStatus").change(function () {

            Loadvalues();

        });
        function Loadvalues() {


            // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
            // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "BillingInfo_Status";
            varParams.strArgmt = $("#ddlBillStatus option:selected").text();
            varProcParams[0] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "BillingInfo_ViewAll";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.details != null) {
                        $("#tableBills").dataTable().fnClearTable();

                        for (var j = 0; j < response.details.length; j++) {


                            jQuery("#tableBills").dataTable().fnAddData([(response.details[j].BillingInfo_Id).toString(), j + 1, (response.details[j].BillingInfo_BillDate), (response.details[j].BillingInfo_BillInvoiceNo).toString(), (response.details[j].BillingInfo_Company), (response.details[j].BillingInfo_Details).toString(),
                            (response.details[j].BillingInfo_BillAmount).toString(), (response.details[j].BillingInfo_DueDate).toString(), (response.details[j].BillingInfo_PaymentAmount).toString(), (response.details[j].BillingInfo_TechvSBTChequeNo).toString(), (response.details[j].BillingInfo_ServiceTax).toString(), (response.details[j].BillingInfo_TDS).toString(), (response.details[j].BillingInfo_VAT).toString(),
                            (response.details[j].BillingInfo_Remarks).toString(), (response.details[j].BillingInfo_Status).toString(), (response.details[j].BillingInfo_EnteredBy).toString(), (response.details[j].BillingInfo_EnteredOn).toString(), ' <div class="active btn-group btn-group-sm"> <button type="button" class="btn btn-primary bt.n-lg" id="btnViewMore" style="font-size: 10px;margin-left: -16px;padding-left: 2px;padding-right: 2px;">VIEW MORE</button>', '<button type="button" class="btn btn-warning b.tn-lg" id="btnEdit" style="font-size: 10px;padding-left: 2px;padding-right: 2px;margin-left: -14px;">EDIT</button>', '<button type="button" class="btn btn-danger b.tn-lg" id="btnDelete" style="font-size: 10px;padding-right: 2px;padding-left: 2px;margin-left: -10px;" id="btnDelete">DELETE</button> </div>'], false);





                        }
                        jQuery("#tableBills").dataTable().fnDraw();
                    }
                    //   alert(response.details);

                }
            });
        }

        $('#tableBills').on('click', '#btnViewMore', function () {
            var nRow = $(this).parents('tr')[0];
            var BillId = jQuery("#tableBills").dataTable().fnGetData(nRow)[0];
            window.location = "singlebilldetail.aspx?BillingInfo_Id=" + BillId;

        });
        $('#tableBills').on('click', '#btnEdit', function () {
            var nRow = $(this).parents('tr')[0];
            var BillId = jQuery("#tableBills").dataTable().fnGetData(nRow)[0];
            window.location = "editbills.aspx?BillingInfo_Id=" + BillId;
        });
        $('#tableBills').on('click', '#btnDelete', function () {
            var nRow = $(this).parents('tr')[0];
            var BillId = jQuery("#tableBills").dataTable().fnGetData(nRow)[0];
            
            $.alert.open('Are you sure to delete this Bill?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    DeleteBill(BillId);
                }
                });
        });
    }




    function DeleteBill(BillId) {
        
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "BillingInfo_Id";
        varParams.strArgmt = BillId;
        varProcParams[0] = varParams;

        var SpParams = {};
        SpParams.strProc = "BillingInfo_Delete";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.status == 'SUCCESS') {

                    $.alert.open({ type: 'info', content: 'Bill Deleted.' });
                    $("#tableBills").dataTable().fnClearTable();
                    Loadvalues();
                }
            }
        });
    }
});



