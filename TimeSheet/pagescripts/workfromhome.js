﻿$(document).ready(function () {
    var Localvaluee = localStorage.getItem('EmployeeId');
    var wfhstat = "0";

    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#lblWait').hide();

        $("#txtLeaveFrom").datepicker();
        $("#txtLeaveTo").datepicker();
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');


        $("#lblName").text(name);
        $('#btnSubmit').click(function () {

            var hours = $("#txtJourneyHours").val();

            if ($("#txtLeaveFrom").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Valid  Start date' });
            }
            else if ($("#txtLeaveTo").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Valid End date' });
            }

            else if ($("#txtReason").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Valid reason.' });
            }
            
            
            else {
                wfhmonthlycheck(Localvalue, $("#txtLeaveFrom").val());
                //alert(wfhstat);
               
                   
                   
               
            }
        });


        $('#btnCancel').click(function () {
            $("#txtLeaveFrom").val('');
            $("#txtLeaveTo").val('');
            $("#txtReason").val('');
        });
        function addWFH() {
            
            var varProcParams = new Array();


            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "RequestType_Id";
            varParams.strArgmt = 5;
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
            varParams.strArgmt = $("#txtReason").val();
            varProcParams[19] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "WrkFrmHomeFDate";
            varParams.strArgmt = $("#txtLeaveFrom").val();
            varProcParams[20] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "WrkFrmHomeTDate";
            varParams.strArgmt = $("#txtLeaveTo").val();
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
                        $('#lblWait').text("Work From Home submitted successfully.");
                        $("#lblWait").css({ "color": "green", "font-size": "16px" });
                        $('#lblWait').show();

                        RequestEmailToAdmin(name, 'Work From Home', $("#txtLeaveFrom").val(), $("#txtLeaveTo").val(), $("#txtReason").val());
                        setTimeout(function () {
                            window.location = "employeerequeststatus.aspx"
                        }, 1000);

                    }
                    else {
                        $.alert.open({ type: 'warning', content: "Error in request submitting. Try again." });
                    }
                }
            });


        }
        function wfhmonthlycheck(Employee_ID, workfromhomedate) {
            var varProcParams = new Array();


            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Employee_ID;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "WrkFrmHomeFDate";
            varParams.strArgmt = workfromhomedate;
            varProcParams[1] = varParams;
            varParams = {};

           

            var SpParams = {};
            SpParams.strProc = "WfhStatusCheck";
            SpParams.oProcParams = varProcParams;



            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                   
                    if (response.details != null) {
                        debugger
                        if (response.details[0].details == "0") {
                            wfhstat = "0";
                            //alert(response.details[0].message);
                        }
                        else {
                            addWFH();
                        }


                    }
                   
                    
                }
            });
        }
        function RequestEmailToAdmin(strEmpName, RequestType, WFHFDate, WFHTDate, WFHReason) {
            

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
            Params.WrkFHmeFDate = WFHFDate;
            Params.WrkFHmeTDate = WFHTDate;
            Params.WrkFHmeReason = WFHReason;
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
                    $("#txtLeaveFrom").val('');
                    $("#txtLeaveTo").val('');
                    $("#txtReason").val('');
                    setTimeout(function () {
                        window.location = "employeerequeststatus.aspx"
                    }, 3000);

                }
            });
        }


        $('#txtLeaveFrom').on('change', function () {
            $('.datepicker').hide();
        });
        $('#txtLeaveTo').on('change', function () {
            $('.datepicker').hide();
        });




        function daydiff(first, second) {
            return (second - first) / (1000 * 60 * 60 * 24)
        }



        function parseDate(str) {
            var mdy = str.split('/')
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        }



        //alert(daydiff(parseDate($('#txttravelFrm').val()), parseDate($('#txttravelTo').val())));

        $('#txtLeaveTo').change(function () {
            var daysdiff = daydiff(parseDate($('#txtLeaveFrom').val()), parseDate($('#txtLeaveTo').val()));
            if (daysdiff < 0) {

                $.alert.open({ type: 'warning', content: 'Please enter the valid To date.' });
                $('#txtLeaveTo').val('');
            }
        });
    }
});