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
        var remarks = ["Online paid voucher raised.Receipt kept in receipt lists", "Paid as cash and voucher raised", "NEFT", "Paid online from company account", "Paid from Petty Cash", "Raised for Reimbursement(Devi)"];
        $("#remarks").autocomplete({
            source: remarks
        });
        $("#dueDate").datepicker();
        $("#billDate").datepicker();

        $('#dueDate').on('change', function () {
            $('.datepicker').hide();
        });
        $('#billDate').on('change', function () {
            $('.datepicker').hide();
        });
        var BillId = GetQueryString('BillingInfo_Id');
        //alert(BillId);



        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "BillingInfo_Id";
        varParams.strArgmt = BillId;
        varProcParams[0] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "BillingInfo_ViewSingle";
        SpParams.oProcParams = varProcParams;
        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                $('#billDate').val(response.details[0].BillingInfo_BillDate);
                $('#billNumber').val(response.details[0].BillingInfo_BillInvoiceNo);
                $('#cmpnyName').val(response.details[0].BillingInfo_Company);
                $('#billDetails').val(response.details[0].BillingInfo_Details);
                $('#billAmount').val(response.details[0].BillingInfo_BillAmount);
                $('#dueDate').val(response.details[0].BillingInfo_DueDate);
                $('#paymentAmount').val(response.details[0].BillingInfo_PaymentAmount);
                $('#chequeNumber').val(response.details[0].BillingInfo_TechvSBTChequeNo);
                $('#serviceTax').val(response.details[0].BillingInfo_ServiceTax);
                $('#tds').val(response.details[0].BillingInfo_TDS);
                $('#remarks').val(response.details[0].BillingInfo_Remarks);
                $('#ddlBillStatus').val(response.details[0].BillingInfo_Status);
                $('#enteredBy').val(response.details[0].BillingInfo_EnteredBy);
                $('#vat').val(response.details[0].BillingInfo_VAT);


            }
        });



        function GetQueryString(varName) {
            varName = varName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + varName + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        } //GetQueryString



        $('#btnUpdate').click(function () {

            if ($("#billDate").val() == '' && $("#billNumber").val() == '' && $("#billAmount").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the mandatory fields' });
            }
            else {
                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "BillingInfo_BillDate";
                varParams.strArgmt = $("#billDate").val();
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_BillInvoiceNo";
                varParams.strArgmt = $("#billNumber").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_Company";
                varParams.strArgmt = $("#cmpnyName").val();
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_Details";
                varParams.strArgmt = $("#billDetails").val();
                varProcParams[3] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_BillAmount";
                varParams.strArgmt = $("#billAmount").val();
                varProcParams[4] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_DueDate";
                varParams.strArgmt = $("#dueDate").val();
                varProcParams[5] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_PaymentAmount";
                varParams.strArgmt = $("#paymentAmount").val();
                varProcParams[6] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_TechvSBTChequeNo";
                varParams.strArgmt = $("#chequeNumber").val();
                varProcParams[7] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "BillingInfo_TDS";
                varParams.strArgmt = $("#tds").val();
                varProcParams[8] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_VAT";
                varParams.strArgmt = $("#vat").val();
                varProcParams[9] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_Remarks";
                varParams.strArgmt = $("#remarks").val();
                varProcParams[10] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_Status";
                varParams.strArgmt = $("#ddlBillStatus").val();
                varProcParams[11] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_EnteredBy";
                varParams.strArgmt = $("#enteredBy").val();
                varProcParams[12] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_ServiceTax";
                varParams.strArgmt = $("#serviceTax").val();
                varProcParams[13] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "BillingInfo_Id";
                varParams.strArgmt = BillId;
                varProcParams[14] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "BillingInfo_SwchBhartCess";
                varParams.strArgmt = $("#txtSBC").val();
                varProcParams[15] = varParams;
                varParams = {};


                var SpParams = {};
                SpParams.strProc = "BillingInfo_EditDetails";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            $.alert.open({ type: 'info', content: 'Bill details updated successfully.' });

                            setTimeout(function () {
                                window.location = "viewallbills.aspx"
                            }, 1000);
                        }
                        else if (response.status == 'FAILED') {
                            $.alert.open({ type: 'warning', content: 'Sorry. ' + response.message });
                        }
                    }
                });
            }
        });

        $('#btnCancel').click(function () {
            $("#billDate").val('');
            $("#billNumber").val('');
            $("#cmpnyName").val('');
            $("#billDetails").val('');
            $("#billAmount").val('');
            $("#dueDate").val('');
            $("#paymentAmount").val('');
            $("#chequeNumber").val('');
            $("#tds").val('');
            $("#vat").val('');
            $("#remarks").val('');
            $("#ddlBillStatus").val('');
            $("#enteredBy").val('');
            $("#serviceTax").val('');

        });
    }
});