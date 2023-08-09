$(document).ready(function () {
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#lblWait').hide();
        $("#txttravelFrm").datepicker();
        $("#txttravelTo").datepicker();

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }


        var startDate = new Date($('#txttravelFrm').val());
        var endDate = new Date($('#txttravelTo').val());



        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        if (Localvalue == 126 || Localvalue == 2 || Localvalue == 12) {

            document.getElementById('Assetmenu').style.display = 'block';


            //document.getElementById('ddtopmenubar').style.display = 'block';
        }
        else {
            document.getElementById('Assetmenu').style.display = 'none';

        }


        $("#lblName").text(name);

        $('#btnSubmit').click(function () {


            var hours = $("#txtJourneyHours").val();

            if ($("#txttravelFrm").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Valid travel start date' });
            }
            else if ($("#txttravelTo").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Valid travel end date' });
            }
            else if (isNumeric(hours) == false) {

                $.alert.open({ type: 'warning', content: 'Please enter valid Journey hours.' });
            }
            else if ($("#txtRemarks").val() == '') {

                $.alert.open({ type: 'warning', content: 'Please enter request reason.' });
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
                varParams.strArgmt = 1;
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelReason";
                varParams.strArgmt = $("#txtReason").val();
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelFrmDate";
                varParams.strArgmt = $("#txttravelFrm").val();
                varProcParams[3] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelToDate";
                varParams.strArgmt = $("#txttravelTo").val();
                varProcParams[4] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelDuration";
                varParams.strArgmt = $("#txtJourneyHours").val();
                varProcParams[5] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "TravelRemarks";
                varParams.strArgmt = $("#txtRemarks").val();
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

                            RequestEmailToAdmin(name, 'Travel', $("#txttravelFrm").val(), $("#txttravelTo").val(), $("#txtReason").val());


                            $("#txtJourneyHours").val('');
                            $("#txttravelFrm").val('')
                            $("#txttravelTo").val('')
                            $("#txtRemarks").val('')
                            $("#txtReason").val('');

                        }
                        else {
                            $.alert.open({ type: 'warning', content: "Error in request submitting. Try again." });
                        }
                    }
                });
            }
        });


        $('#txttravelFrm').on('change', function () {
            $('.datepicker').hide();
        });
        $('#txttravelTo').on('change', function () {
            $('.datepicker').hide();
        });


        $('#btnCancel').click(function () {
            $("#txtLeaveFrom").val('');
            $("#txtLeaveTo").val('')
            $("#txtReason").val('')
            $("#txtJourneyHours").val('');
            $("#txttravelFrm").val('')
            $("#txttravelTo").val('')
            $("#txtRemarks").val('')
            $("#txtReason").val('');

        });

        function RequestEmailToAdmin(strEmpName, RequestType, TravelFrmDate, TravelToDate, strRemarks) {


            var Params = {};
            Params.Request_EmpName = strEmpName;
            Params.Request_Type = RequestType;
            Params.TrvlFDate = TravelFrmDate;
            Params.TrvlTDate = TravelToDate;
            Params.TrvlRemarks = strRemarks;
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
                    setTimeout(function () {
                        window.location = "employeerequeststatus.aspx"
                    }, 5000);

                    $('#lblWait').hide();
                }
            });
        }



        function daydiff(first, second) {
            return (second - first) / (1000 * 60 * 60 * 24)
        }



        function parseDate(str) {
            var mdy = str.split('/')
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        }



        //alert(daydiff(parseDate($('#txttravelFrm').val()), parseDate($('#txttravelTo').val())));

        $('#txttravelTo').change(function () {
            var daysdiff = daydiff(parseDate($('#txttravelFrm').val()), parseDate($('#txttravelTo').val()));
            if (daysdiff < 0) {

                $.alert.open({ type: 'warning', content: 'Travel end date should be greater than travel start date.' });
                $('#txttravelTo').val('');
            }
        });


        $('#txtJourneyHours').bind('keyup blur', function () { $(this).val($(this).val().replace(/[^0-9]/g, '')) });
    }
});

