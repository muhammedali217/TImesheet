$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('AdminSession');
        window.location.href = "login.html";
    });
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {

        var SpParams = {};
        SpParams.strProc = "BillingInfo_InviceCmpnyDrpDown";

        $.ajax({
            url: "/api/FIXZIService/GetHTTPDropDownResponse",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                if (response != null) {

                    for (var i = 0; i < response.length; i++) {
                        {

                            $("#ddlinvoiceCompany").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }//for
                }//if
            }//response
        });//ajax


        $("#btnSearch").hide();
        $("#btnDownLoad").hide();
        $("#ddlStatus").hide();
        $('#FromDate').hide();
        $('#ToDate').hide();
        $('#invoiceCompany').hide();
        // alert($('#ddlReportType').text());
        $('#FromDate').datepicker();
        $('#ToDate').datepicker();
        //$('#btnSearch').hide();
        //$('#btnDownLoad').hide();
        //$('.input-group').hide();
        $('#FromDate').on('change', function () {
            $('.datepicker').hide();
        });
        $('#ToDate').on('change', function () {
            $('.datepicker').hide();
        });
        var drpdownValue = $('#ddlReportType option:selected').val();
        $('#ddlReportType').change(function () {
            $("#tableBills").dataTable().fnClearTable();
            $('#FromDate').val('');
            $('#ToDate').val('');
            drpdownValue = this.value; // or 
            drpdownValue = $(this).val();
            //alert(drpdownValue);
            if (drpdownValue == '1' || drpdownValue == '2' || drpdownValue == '5' || drpdownValue == '6' || drpdownValue == '7') {
                $('#FromDate').show();
                $('#ToDate').show();
                //$('#btnSearch').show();
                //$('#btnDownLoad').show();
                $('.input-group').show();
                $('#invoiceCompany').hide();
                $("#btnSearch").show();
                $("#btnDownLoad").show();
                $("#ddlStatus").hide();
                //invoiceCompany
            }
            else if (drpdownValue == '4') {
                $('#invoiceCompany').show();
                $('#FromDate').hide();
                $('#ToDate').hide();
                $("#btnSearch").show();
                $("#btnDownLoad").show();
                $("#ddlStatus").hide();
            }
            else if (drpdownValue == '3') {
                $("#btnSearch").show();
                $("#btnDownLoad").show();
                $("#ddlStatus").show();
                $('#invoiceCompany').hide();
                $('#FromDate').show();
                $('#ToDate').show();

            }
        });


        $("#ddlStatus").change(function () {
            $("#tableBills").dataTable().fnClearTable();
            $('#FromDate').val('');
            $('#ToDate').val('');
        });

        $('#tblBills').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableBills" style="width:500px;"></table>');



        var oTable = $('#tableBills').dataTable({
            "aaData": [
            /* Reduced data set */
            ],

            "aoColumns": [
            {
                "sTitle": "ID",
                'bVisible': false
            }, {
                "sTitle": "Sl No",
                'sClass': 'center'

            }, {
                "sTitle": "Bill Date",
                'sClass': 'center'
            }, {
                "sTitle": "Invoice Number",

                'sClass': 'center'
            }, {
                "sTitle": "Invoice Company",

                'sClass': 'center'

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

                'sClass': 'center'

                //,
                //'bVisible': false
            },
             {
                 "sTitle": "Cheque Number",

                 'sClass': 'center'

                 //,
                 //'bVisible': false
             },
              {
                  "sTitle": "Service Tax",

                  'sClass': 'center'

                  //,
                  //'bVisible': false
              },
               {
                   "sTitle": "TDS",

                   'sClass': 'center'

                   //,
                   //'bVisible': false
               },
                {
                    "sTitle": "VAT",

                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Swachh Bahart Cess",

                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Remarks",

                    'sClass': 'center',


                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Status",

                    'sClass': 'center'


                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Added By",

                    'sClass': 'center'

                    //,
                    //'bVisible': false
                },
                {
                    "sTitle": "Added On",

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
            "bInfo": false,
            "scrollX": true,
            "oLanguage": {
                "sLengthMenu": "",
                "sEmptyTable": "Please Refresh the page",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "paging": false
        });
        jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
        jQuery('.paginate_disabled_previous').addClass("label label-default");
        jQuery('#tableBills_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tableBills_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


        var nEditing = null;

        // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   





        function Loadvalues() {


            // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
            // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "FromDate";
            varParams.strArgmt = $('#FromDate').val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "ToDate";
            varParams.strArgmt = $('#ToDate').val();
            varProcParams[1] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "SearchTypeID";
            varParams.strArgmt = drpdownValue;
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "BillingInfo_Company";
            varParams.strArgmt = $('#ddlinvoiceCompany option:selected').text();
            varProcParams[3] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "BillingInfo_Status";
            varParams.strArgmt = $('#ddlStatus option:selected').text();
            varProcParams[4] = varParams;
            varParams = {};



            var SpParams = {};
            SpParams.strProc = "BillingInfo_FrmToDueDateReprt";
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


                            jQuery("#tableBills").dataTable().fnAddData([
                                j + 1,
                                j + 1,
                                (response.details[j].BillingInfo_BillDate),
                                (response.details[j].BillingInfo_BillInvoiceNo),
                                (response.details[j].BillingInfo_Company),
                                (response.details[j].BillingInfo_Details),
                                (response.details[j].BillingInfo_BillAmount),
                                (response.details[j].BillingInfo_DueDate),
                                (response.details[j].BillingInfo_PaymentAmount),
                                (response.details[j].BillingInfo_TechvSBTChequeNo),
                                (response.details[j].BillingInfo_ServiceTax),
                                (response.details[j].BillingInfo_TDS),
                                (response.details[j].BillingInfo_VAT),
                                (response.details[j].BillingInfo_SwchBhartCess),
                                (response.details[j].BillingInfo_Remarks),
                                (response.details[j].BillingInfo_Status),
                                (response.details[j].BillingInfo_EnteredBy),
                                (response.details[j].BillingInfo_EnteredOn)

                            ]);



                        }
                    }
                    //   alert(response.details);

                }
            });
        }





        $("#btnSearch").click(function () {

            Loadvalues();

        });
        $("#btnDownLoad").click(function () {


            ExportReport($('#FromDate').val(), $('#ToDate').val(), drpdownValue, $('#ddlinvoiceCompany option:selected').text(), $('#ddlStatus option:selected').text());

        });



        function ExportReport(FDate, EDate, SearchtypeId, InvoiceCmpny, Status) {

            var Params = {};
            Params.FDate = FDate;
            Params.EDate = EDate;
            Params.SearchTypeId = SearchtypeId;
            Params.InvoiceCmpny = InvoiceCmpny;
            Params.Status = Status;


            $.ajax({
                type: "POST",
                url: "/api/FIXZIService/BillReportExport",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(Params),
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
    }
});