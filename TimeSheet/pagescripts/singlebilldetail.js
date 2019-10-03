$(document).ready(function () {
    
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var BillId = GetQueryString('BillingInfo_Id');
        // alert(BillId);



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
                if (response.details[0].BillingInfo_PaidDate == 'Jan 01, 1900') {
                    $('#paiddate').text('');
                }
                else {
                    $('#paiddate').text(response.details[0].BillingInfo_PaidDate);
                }

                $('#billdate').text(response.details[0].BillingInfo_BillDate);
                $('#invoiceNumber').text(response.details[0].BillingInfo_BillInvoiceNo);
                $('#lblCompany').text(response.details[0].BillingInfo_Company);
                $('#lblDetails').text(response.details[0].BillingInfo_Details);
                $('#lblBillAmount').text(response.details[0].BillingInfo_BillAmount);
                $('#lblduedate').text(response.details[0].BillingInfo_DueDate);
                $('#lblPaymentAmt').text(response.details[0].BillingInfo_PaymentAmount);
                $('#lblChequeNumber').text(response.details[0].BillingInfo_TechvSBTChequeNo);
                $('#lblServiceTax').text(response.details[0].BillingInfo_ServiceTax);
                $('#lblTDS').text(response.details[0].BillingInfo_TDS);
                $('#lblRemarks').text(response.details[0].BillingInfo_Remarks);
                $('#lblStatus').text(response.details[0].BillingInfo_Status);
                $('#lblEnteredBy').text(response.details[0].BillingInfo_EnteredBy);
                $('#lblenteredOn').text(response.details[0].BillingInfo_EnteredOn);
                $('#lblSBC').text(response.details[0].BillingInfo_SwchBhartCess);
                $('#billinfoMonth').text(response.details[0].BillingInfo_Month);
                $('#expnseHead').text(response.details[0].BillingInfo_ExpHead);
                $('#grossamt').text(response.details[0].BillingInfo_GrossAmount);
                $('#krishi').text(response.details[0].BillingInfo_KrishiKalyanCess);
                $('#paybleamt').text(response.details[0].BillingInfo_PaymentAmount);
                $('#paidAmnt').text(response.details[0].BillingInfo_PaidAmount);
               


            }
        });



        function GetQueryString(varName) {
            varName = varName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + varName + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        } //GetQueryString


        $('#btnEdit').click(function () {
            window.location = "editbills.aspx?BillingInfo_Id=" + BillId;
        });

        $('#btnView').click(function () {
            window.location = "viewallbills.aspx";
        });
    }
});