$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('EmployeeId');
        window.location.href = "login.html";
    });
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#lblWait').hide();
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');


        $("#lblName").text(name);
        $("#txtPaidOn").datepicker();
        $('#btnSubmit').click(function () {

            var hours = $("#txtJourneyHours").val();

            if ($("#txtPaidOn").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the Expense date' });
            }

            else if ($("#txtDesc").val() == '') {

                $.alert.open({ type: 'warning', content: 'Please enter valid reason for expense.' });
            }
            else if ($("#txtTotalCost").val() == '') {

                $.alert.open({ type: 'warning', content: 'Please enter Total Cost' });
            }
            else {
                var varProcParams = new Array();


                var varParams = {};
                varParams.strKey = "Employee_ID";
                varParams.strArgmt = Localvalue;
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "RequestType_Id";
                varParams.strArgmt = 4;
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelReason";
                varParams.strArgmt = "";
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelFrmDate";
                varParams.strArgmt = "";
                varProcParams[3] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelToDate";
                varParams.strArgmt = "";
                varProcParams[4] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelDuration";
                varParams.strArgmt = "";
                varProcParams[5] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelRemarks";
                varParams.strArgmt = "";
                varProcParams[6] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "VisaType";
                varParams.strArgmt = "";
                varProcParams[7] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "VisaReason";
                varParams.strArgmt = "";
                varProcParams[8] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "VisaTravelDate";
                varParams.strArgmt = "";
                varProcParams[9] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "IdCardType";
                varParams.strArgmt = "";
                varProcParams[10] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "IdCardReason";
                varParams.strArgmt = "";
                varProcParams[11] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "IdCardImage";
                varParams.strArgmt = "";
                varProcParams[12] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpenseFor";
                varParams.strArgmt = "";
                varProcParams[13] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpenseCost";
                varParams.strArgmt = $("#txtTotalCost").val();
                varProcParams[14] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpenseOn";
                varParams.strArgmt = $("#txtPaidOn").val();
                varProcParams[15] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpensePaidTo";
                varParams.strArgmt = $("#txtPaidTo").val();
                varProcParams[16] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpenseRePaidType";
                varParams.strArgmt = $('#ddlPaymentType').val();
                varProcParams[17] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "ExpenseImage";
                varParams.strArgmt = "";
                varProcParams[18] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "WrkFrmHomeReson";
                varParams.strArgmt = "";
                varProcParams[19] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "WrkFrmHomeFDate";
                varParams.strArgmt = "";
                varProcParams[20] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "WrkFrmHomeTDate";
                varParams.strArgmt = "";
                varProcParams[21] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ReimbrsmntUsedDate";
                varParams.strArgmt = "";
                varProcParams[22] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "ReimbrsmntRemarks";
                varParams.strArgmt = "";
                varProcParams[23] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ReimbrsmntHardCopy";
                varParams.strArgmt = "";
                varProcParams[24] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ReimbrsmntCashBack";
                varParams.strArgmt = "";
                varProcParams[25] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ReimbrsmntFor";
                varParams.strArgmt = "";
                varProcParams[26] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "CommonRqstFor";
                varParams.strArgmt = "";
                varProcParams[27] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "CommonRqstType";
                varParams.strArgmt = "";
                varProcParams[28] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "CommonRqstDesc";
                varParams.strArgmt = "";
                varProcParams[29] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "ReimbrsmntAmt";
                varParams.strArgmt = "";
                varProcParams[30] = varParams;
                varParams = {};

                var SpParams = {};
                SpParams.strProc = "Request_Submit";
                SpParams.oProcParams = varProcParams;



                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {

                        if (response.status == 'SUCCESS') {
                            $("#lblWait").css({ "color": "green", "font-size": "16px" });
                            $('#lblWait').show();
                            RequestEmailToAdmin(name, 'Expense Voucher', '', $("#txtTotalCost").val(), $("#txtPaidTo").val());
                            setTimeout(function () {
                                window.location = "employeerequeststatus.aspx"
                            }, 1500);

                        }
                        else {
                            $.alert.open({ type: 'warning', content: "Error in request submitting. Try again." });
                        }
                    }
                });
            }
        });


        $('#btnCancel').click(function () {
            $("#txtPaidOn").val('');
            $("#txtDesc").val('')
            $("#txtTotalCost").val('')
            $("#txtRemarks").val('')
            $("#txtReason").val('');

        });



        function RequestEmailToAdmin(strEmpName, RequestType, expensefor, expensecost, expensePaidTo) {


            var Params = {};
            Params.Request_EmpName = strEmpName;
            Params.Request_Type = RequestType;
            Params.TrvlFDate = '';
            Params.TrvlTDate = '';
            Params.TrvlRemarks = '';
            Params.VisaType = '';
            Params.VisaRemarks = '';
            Params.IdRqType = '';
            Params.IdRemarks = '';
            Params.ExpnseFor = expensefor;
            Params.ExpnseCost = expensecost;
            Params.ExpnsePaidTo = expensePaidTo;
            Params.WrkFHmeFDate = '';
            Params.WrkFHmeTDate = '';
            Params.WrkFHmeReason = '';
            Params.ReimbrseFor = '';
            Params.ReimbrseUsedDate = '';
            Params.ReimbrseRemarks = '';
            Params.ReimbrseAmount = '';
            Params.CmonRqFor = '';
            Params.CmonRqPurpose = '';
            Params.CmonRqDesc = '';


            $.ajax({
                url: "/api/FIXZIService/RequestEmail2Admin",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {

                    $.alert.open({ type: 'info', content: "Request submitted successfully. You will be notified by email." });
                    $('#lblWait').hide();
                    $("#txtPaidOn").val('');
                    $("#txtDesc").val('')
                    $("#txtTotalCost").val('')
                    $("#txtRemarks").val('')
                    $("#txtReason").val('');

                }
            });
        }

        $('#txtPaidOn').on('change', function () {
            compareDate();
            $('.datepicker').hide();
        });





        function compareDate() {
            //In javascript

            // In JQuery
            var dateEntered = $("#txtPaidOn").val();

            var month = dateEntered.substring(0, 2);
            var date = dateEntered.substring(3, 5);
            var year = dateEntered.substring(6, 10);


            var dateToCompare = new Date(year, month - 1, date);
            var currentDate = new Date();


            if (dateToCompare < currentDate) {

            }

            else {
                $.alert.open({ type: 'warning', content: 'Please enter the actual expense date.' });
                $("#txtPaidOn").val('');

            }
        }

        $('#txtTotalCost').bind('keyup blur', function () { $(this).val($(this).val().replace(/[^0-9?=.,/]/g, '')) });

    }

});