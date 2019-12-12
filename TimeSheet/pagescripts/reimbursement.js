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
        document.getElementById("ProofSubmitted").checked = false;
        var proofSubmitted;
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');

        $('#lblMsg').text('');

        $("#lblName").text(name);
        $("#txtPaidOn").datepicker();

        $('#txtPaidOn').on('change', function () {
            $('.datepicker').hide();
        });



        $('input[type="checkbox"]').change(function () {
            if ($(this).is(':checked')) {
                proofSubmitted = 'YES';

            } else {
                //$(this).prop('checked',true);
                proofSubmitted = 'NO';

            }
        });



        //if ($('#ProofSubmitted').prop("checked") == true) {          
        //        proofSubmitted = 'YES';
        //    }
        //else if ($('#ProofSubmitted').prop("checked") == false) {
        //        proofSubmitted = 'NO';
        //    }


        $('#btnSubmit').click(function () {

            //alert(proofSubmitted);
            if ($("#txtPaidOn").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Reimbursement Used Date.' });
            }
            else if ($("#txtPaidFor").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter reason for Reimbursement' });
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
                varParams.strArgmt = 8;
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
                varParams.strArgmt = $("#ddlVisaType").val();
                varProcParams[7] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "VisaReason";
                varParams.strArgmt = $("#txtReason").val();
                varProcParams[8] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "VisaTravelDate";
                varParams.strArgmt = $("#txtTrvlDate").val();
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
                varParams.strArgmt = "";
                varProcParams[14] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpenseOn";
                varParams.strArgmt = "";
                varProcParams[15] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpensePaidTo";
                varParams.strArgmt = "";
                varProcParams[16] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ExpenseRePaidType";
                varParams.strArgmt = "";
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
                varParams.strArgmt = $('#txtPaidOn').val();
                varProcParams[22] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "ReimbrsmntRemarks";
                varParams.strArgmt = $('#txtRemarks').val();
                varProcParams[23] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ReimbrsmntHardCopy";
                varParams.strArgmt = proofSubmitted;
                varProcParams[24] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ReimbrsmntCashBack";
                varParams.strArgmt = $('#ddlPaymentType').val();
                varProcParams[25] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ReimbrsmntFor";
                varParams.strArgmt = $('#txtPaidFor').val();
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
                varParams.strArgmt = $('#txtAmount').val();
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
                            RequestEmailToAdmin(name, 'Reimbursement', $('#txtPaidFor').val(), $('#txtPaidOn').val(), $('#txtRemarks').val(), $('#txtAmount').val());




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
            $("#txtPaidFor").val('');
            $("#ddlPaymentType").val('');
            $("#txtRemarks").val('');


        });


        function RequestEmailToAdmin(strEmpName, RequestType, ReimbrseFor, ReimbrseOn, ReimbrsRemarks,ReimbrsAmount) {


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
            Params.ExpnseFor = '';
            Params.ExpnseCost = '';
            Params.ExpnsePaidTo = '';
            Params.WrkFHmeFDate = '';
            Params.WrkFHmeTDate = '';
            Params.WrkFHmeReason = '';
            Params.ReimbrseFor = ReimbrseFor;
            Params.ReimbrseUsedDate = ReimbrseOn;
            Params.ReimbrseRemarks = ReimbrsRemarks;
            Params.ReimbrseAmount = ReimbrsAmount;
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
                    $("#txtPaidFor").val('');
                    $("#txtPaidOn").val('');
                    $('#txtRemarks').val('');
                    $("#lblMsg").css({ "color": "red", "font-size": "16px" });
                    $('#lblMsg').text('Note: Please make sure that proof copies submitted to concerned person.');
                    setTimeout(function () {
                        window.location = "employeerequeststatus.aspx"
                    }, 5000);
                }
            });
        }


        $("#txtPaidOn").change(function () {
            compareDate();
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
                $.alert.open({ type: 'warning', content: 'Please enter the valid Reimbursement used Date' });
                $("#txtPaidOn").val('');

            }
        }
        $('#txtAmount').bind('keyup blur', function () { $(this).val($(this).val().replace(/[^0-9?=.,/]/g, '')) });

    }


});