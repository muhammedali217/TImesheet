$(document).ready(function () {
    var disableddates = [];

    if (Localvalue == 126 || Localvalue == 2 || Localvalue == 12) {

        document.getElementById('Assetmenu').style.display = 'block';


        //document.getElementById('ddtopmenubar').style.display = 'block';
    }
    else {
        document.getElementById('Assetmenu').style.display = 'none';

    }
    HolidayDates();



    function HolidayDates() {
        var SpParams = {};
        SpParams.strProc = "HolidayCalnder_GetDates";

        // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
        // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                disableddates = response.details[0].HolidaysList;

            }
        });
    }


    var frmAN;
    var frmFN;
    var toFN;
    var toAN;


    function DisableSpecificDates(date) {
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [disableddates.indexOf(string) == -1];
    }


    $('#chkfrmAN').attr('checked', true);
    $("#chkfrmFN").attr('checked', true);
    $("#chktoAN").attr('checked', true);
    $("#chktoFN").attr('checked', true);


    var hasApproval;
    $('#remainingLeaves').prop('disabled', true);
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#ddlLeaveType').val('0');
        var day;
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');

        LeaveInfo();


        var LeaveHistory_Available;
        var LeaveHistory_SickLempId;
        var Leave_TakenempId;
        var SickLeave_TakenempId;
        var availLeave;
        var availSL;
        var availMaternLeave;
        var availPeternLeave;
        var LeaveHistory_Aditional;


        function LeaveInfo() {
            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};
           

            var SpParams = {};
            SpParams.strProc = "Employee_LeaveDetails";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.details != null) {
                        availLeave = response.details[0].LeaveHistory_Available;
                        availSL = response.details[0].LeaveHistory_SickL;
                        availMaternLeave = response.details[0].LeaveHistory_MaternityL;
                        availPeternLeave = response.details[0].LeaveHistory_PaternityL;
                        LeaveHistory_Aditional = response.details[0].LeaveHistory_AditionalL;

                        if (availLeave > 0) {

                            $("#lblLeave").css({
                                "color": "green", "font-size": "14px", "color": "#26A69A",

                                "box-shadow": "0 0 20px rgba(0,0,0, 0.3)",
                                "padding": "10px",
                                "border-radius": "2px",
                                "margin-top": "-209px",
                                "margin-left": "-153px",
                                "margin-right": "-147px"

                            });


                            $('#lblLeave').html('<span id="count">' + availLeave + '</span> Remaining Leave');

                        }
                        else {
                            $("#lblLeave").css({ "color": "red", "font-size": "14px" });

                            $("#lblLeave").css({
                                "color": "green", "font-size": "14px", "color": "#FF5400",

                                "box-shadow": "0 0 20px rgba(0,0,0, 0.3)",
                                "text-align": "center",
                                "border-radius": "5px", "width": "100px",
                                "height": "70px",
                                "margin-top": "-209px",
                                "margin-left": "-153px",
                                "margin-right": "-149px"
                            });

                            $('#lblLeave').html('<span id="count">' + availLeave + '</span> No Leave');
                        }

                        if (availSL > 0) {
                            $("#lblSL").css({
                                "color": "yellow", "font-size": "14px", "color": "rgb(8, 84, 63)",

                                "box-shadow": "0 0 20px rgba(0,0,0, 0.3)",
                                "padding": "10px",
                                "border-radius": "90px",
                                "margin-top": "-128px",
                                "margin-left": "-105px",
                                "margin-right": "-174px"

                            });

                            $('#lblSL').html('<span id="count1">' + availSL + '</span> Sick Leave Remaining');
                        }
                        else {
                            $("#lblSL").css({
                                "color": "yellow", "font-size": "14px", "color": "red",

                                "box-shadow": "0 0 20px rgba(0,0,0, 0.3)",
                                "padding": "10px",
                                "border-radius": "90px",
                                "margin-top": "-128px",
                                "margin-left": "-105px",
                                "margin-right": "-146px"

                            });

                            $('#lblSL').html('<span id="count1"></span> No Sick Leave.');
                        }
                    }



                }



            });

        }


        $('#chkbxHalfDay').attr('checked', false); // Unchecks it
        $("#txtLeaveTo").prop('disabled', false);

        $("input[name='halfday']").click(function () {
            if ($("#txtLeaveFrom").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose the start date' });
                $("#chkbxHalfDay").attr('checked', false);
            }
            if ($("input[name='halfday']:checked").val() == "Yes") {

                //$("#txtLeaveTo").val('');
                $("#txtLeaveTo").val($("#txtLeaveFrom").val());
                $("#txtLeaveTo").prop('disabled', true);
                $("#chktoFN").prop('disabled', true);
                $("#chktoAN").prop('disabled', true);
                $("#txtTotalLeave").val(0.5);
            }

            else {
                $("#txtLeaveTo").prop('disabled', false);
                $("#txtTotalLeave").val('');
                $("#chktoFN").prop('disabled', false);
                $("#chktoAN").prop('disabled', false);
            }

        });



        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');

        $("#lblName").text(name);
        $("#txtTotalLeave").val('');
        $("#txtLeaveFrom").val('');
        $("#txtLeaveTo").val('');
        $("#txtLeaveFrom").datepicker({
            beforeShowDay: DisableSpecificDates
        });

        $("#txtLeaveTo").datepicker({
            beforeShowDay: DisableSpecificDates
        });


        $("#txtTotalLeave").prop('disabled', true);



        if (Localvalue == null) {
            $.alert.open({ type: 'warning', content: 'Your session has timed out. Please Login' });
            setTimeout(function () {
                window.location = "login.html"
            }, 3000);
        }




        function parseDate(str) {
            var mdy = str.split('/')
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        }

        function setToChecked() {
            $.alert.open({ type: 'info', content: 'Date Selected..' });
            $("#chktoAN").attr('checked', true);
            $("#chktoFN").attr('checked', true);

        }



        $('#txtLeaveTo').on('change', function () {
            $.alert.open({ type: 'info', content: 'Date Selected..' });
            $("#chktoAN").attr('checked', true);
            $("#chktoFN").attr('checked', true);
            $("#chktoAN").prop('checked', true);
            $("#chktoFN").prop('checked', true);
            $("#chkfrmAN").prop('checked', true);
            $("#chkfrmFN").prop('checked', true);

            var startDate = new Date($("#txtLeaveFrom").val());
            var enddate = new Date($('#txtLeaveTo').val());


            //day = 1 + daydiff(parseDate($('#txtLeaveFrom').val()), parseDate($('#txtLeaveTo').val()));
            day = calculateDays(startDate, enddate);
            $("#txtTotalLeave").val(day);
            if (day <= 0) {
                $.alert.open({ type: 'warning', content: 'Please Choose valid dates' });
                $("#txtLeaveFrom").val('');
                $("#txtLeaveTo").val('');
                $("#txtTotalLeave").val('');
            }
            if ($("#txtLeaveFrom").val() == $('#txtLeaveTo').val()) {

                $("#chktoFN").prop('disabled', true);
                $("#chktoAN").prop('disabled', true);
                calculateDays(startDate, enddate);
            }
            else {

                $("#chktoFN").prop('disabled', false);
                $("#chktoAN").prop('disabled', false);
                calculateDays(startDate, enddate);
            }
        });




        $('#txtLeaveFrom').on('change', function () {
            $("#chktoAN").prop('checked', true);
            $("#chktoFN").prop('checked', true);
            $("#chkfrmAN").prop('checked', true);
            $("#chkfrmFN").prop('checked', true);
            $("#txtTotalLeave").val(1);
            if ($('#txtLeaveTo').val() != '') {
                var startDate = new Date($("#txtLeaveFrom").val());
                var enddate = new Date($('#txtLeaveTo').val());


                //day = 1 + daydiff(parseDate($('#txtLeaveFrom').val()), parseDate($('#txtLeaveTo').val()));
                day = calculateDays(startDate, enddate);
                $("#txtTotalLeave").val(day);
                if (day <= 0) {
                    $.alert.open({ type: 'warning', content: 'Please Choose valid dates' });
                    $("#txtLeaveFrom").val('');
                    $("#txtLeaveTo").val('');
                    $("#txtTotalLeave").val('');

                }
            }

        });

        $('#btnSubmit').click(function () {

            if ($('#txtLeaveFrom').val() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose the start date and end Dates' });
            }

            else if ($("#ddlLeaveType").val() == '0') {
                $.alert.open({ type: 'warning', content: 'Please choose the Leave Type.' });
            }

            else if ($("#txtReason").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Enter valid reason for the leave.' });
            }

            else if ($("#txtTotalLeave").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Choose To date since you are not taken half day.' });

            }
            else if ($("#ddlLeaveType").val() == '5' && $("#remainingLeaves").val() <='0')  {
                $.alert.open({ type: 'warning', content: 'Please Choose other leave type.' });
            }
            else if ($("#ddlLeaveType").val() == '5' && ($("#remainingLeaves").val() - $("#txtTotalLeave").val()) < '0') {
                $.alert.open({ type: 'warning', content: 'You have exceeded the limit of this leave type, please choose other type.' });
            }            
            else if ($("#ddlLeaveType").val() == '2' && $("#remainingLeaves").val() <= '0') {
                $.alert.open({ type: 'warning', content: 'You have exceeded the limit of this leave type, please choose other type.' });
            }

            else if ($("#txtTotalLeave").val() <= 0) {
                $.alert.open({ type: 'warning', content: 'Please Choose valid dates' });

                $("#txtLeaveFrom").val('');
                $("#txtLeaveTo").val('');
            }

            else {
                
                LOPCheck($("#txtTotalLeave").val());

            }

        });
        function AddLeaveDetails() {
            LeaveFNANCheck();
            GotApproval();
            EleigibleForSickLeaveOrNot();
            var varProcParams = new Array();




            var varParams = {};
            varParams.strKey = "Leave_From";
            varParams.strArgmt = $("#txtLeaveFrom").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_To";
            varParams.strArgmt = $("#txtLeaveTo").val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_Reason";
            varParams.strArgmt = $("#txtReason").val();
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_NoOfDays";
            varParams.strArgmt = $("#txtTotalLeave").val();
            varProcParams[3] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_Type";
            varParams.strArgmt = $("#ddlLeaveType option:selected").text();
            varProcParams[4] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[5] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Leave_HasApprvl";
            varParams.strArgmt = hasApproval;
            varProcParams[6] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_FrmFN";
            varParams.strArgmt = frmFN;
            varProcParams[7] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Leave_FrmAN";
            varParams.strArgmt = frmAN;
            varProcParams[8] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_ToFN";
            varParams.strArgmt = toFN;
            varProcParams[9] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_ToAN";
            varParams.strArgmt = toAN;
            varProcParams[10] = varParams;
            varParams = {};






            var SpParams = {};
            SpParams.strProc = "Leave_Add";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {
                        var LeaveId = response.details[0].LeaveId;

                        updateAfterApproval(LeaveId);
                        LeaveApplicationEmail(name, $("#ddlLeaveType option:selected").text(), $("#txtReason").val(), $("#txtLeaveFrom").val(), $("#txtLeaveTo").val(), $("#txtTotalLeave").val());

                        $('#lblMessage').focus();
                        $(window).scrollTop($('#lblMessage').offset().bottom);
                        $("#lblMessage").css("fontSize", "18px")
                        $("#lblMessage").css("color", 'DarkGreen');
                        $('#lblMessage').text("Leave request submitted successfully. You will notified by Email after Admin approval.");
                        $("#txtLeaveFrom").val('');
                        $("#txtLeaveTo").val('');
                        $("#txtTotalLeave").val('');
                        $("#txtReason").val('');
                        setTimeout(function () {
                            window.location = "employeeleavehistory.aspx"
                        }, 1000);



                    }
                    else {
                        $.alert.open({ type: 'warning', content: 'Please provide correct Details' });
                    }
                }
            });
        }


        function LeaveApplicationEmail(EmpName, LeaveType, Reason, FromDate, ToDate, TotalLeaves) {


            var Params = {};
            Params.Leave_EmpName = EmpName;
            Params.Leave_Type = LeaveType;
            Params.Leave_Reason = Reason;
            Params.Leave_FromDate = FromDate;
            Params.Leave_ToDate = ToDate;
            Params.Leave_NoOfDays = TotalLeaves;


            $.ajax({
                url: "/api/FIXZIService/LeaveApplicationEmail",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {
                    $('#txtLeaveFrom').val('');
                    $("#txtLeaveTo").val('');
                    $("#txtReason").val('');
                    $("#txtTotalLeave").val('');

                }
            });
        }



        $('#txtLeaveFrom').on('change', function () {

            //CheckboxFunction()
            $('.datepicker').hide();

        });
        $('#txtLeaveTo').on('change', function () {



            //CheckboxFunction();
            $('.datepicker').hide();
        });




        function LOPCheck(noofdays) {
            EleigibleForSickLeaveOrNot();
            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Leave_NoOfDays";
            varParams.strArgmt = noofdays;
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Leave_CheckLOP";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'Failed') {
                        $.alert.open('Are you sure to Apply?', { 1: 'Yes', 2: 'No' }, function (button) {
                            if (button == 1) {
                                AddLeaveDetails();


                            }
                        });
                    }
                    else if (response.status == 'SUCCESS') {
                        AddLeaveDetails();

                    }
                }
            });
        }


    }


    $("#ddlLeaveType").change(function () {
        EleigibleForSickLeaveOrNot();
    });

    function EleigibleForSickLeaveOrNot() {

        if ($('#txtLeaveFrom').val() == '') {
            $.alert.open({ type: 'warning', content: 'Please enter leave dates.' });
            $('#ddlLeaveType').val('0');
        }

        if ($('#ddlLeaveType').val != '0') {


            displayRemingLeaveLabel($('#ddlLeaveType').val());


        }
        var NoOfDays = $("#txtTotalLeave").val();
        var LeaveDrpDownVal = $('#ddlLeaveType option:selected').text();

    }


    function displayRemingLeaveLabel(ddlvalue) {

        if (ddlvalue == '1') {

            $('#remainingLeaves').val(availLeave);

        }
        else if (ddlvalue == '2') {

            $('#remainingLeaves').val(availSL);
        }
        else if (ddlvalue == '3') {

            $('#remainingLeaves').val(availMaternLeave);
        }
        else if (ddlvalue == '4') {

            $('#remainingLeaves').val(availPeternLeave);
        }
        else if (ddlvalue == '5') {

            $('#remainingLeaves').val(LeaveHistory_Aditional);
        }
        else {

            $('#remainingLeaves').val('');

        }

    }

    function GotApproval() {

        if ($('input#ChkApproval').is(':checked')) {

            hasApproval = 'YES';
        }
        else {
            hasApproval = 'NO';

        }
    }


    $('#btnCancel').click(function () {
        $('#txtLeaveFrom').val('');
        $("#txtLeaveTo").val('');
        $("#txtReason").val('');
        $("#txtTotalLeave").val('');
        $('#remainingLeaves').val('');
    });
    function LeaveFNANCheck() {
        if ($('input#chkfrmAN').is(':checked')) {
            frmAN = 'YES';
        }
        else {
            frmAN = 'NO';
        }
        if ($('input#chkfrmFN').is(':checked')) {
            frmFN = 'YES';
        }
        else {
            frmFN = 'NO';
        }

        if ($('input#chktoAN').is(':checked')) {
            toAN = 'YES';
        }
        else {
            toAN = 'NO';
        }
        if ($('input#chktoFN').is(':checked')) {
            toFN = 'YES';
        }
        else {
            toFN = 'NO';
        }

    }








    function updateAfterApproval(leaveID) {

        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Leave_ID";
        varParams.strArgmt = leaveID;
        varProcParams[0] = varParams;
        varParams = {};
        var SpParams = {};
        SpParams.strProc = "Leave_Update";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                var EmpAvailLeave = response.details[0].RemainingSickLeave;

            }
        });
    }












    function CheckboxFunctionFromFN() {

        if ($("#txtLeaveFrom").val() == '') {
            $.alert.open({ type: 'warning', content: 'Please choose the From date' });
        }
        else {

            var LeaveDays = $("#txtTotalLeave").val();
            var FromFN = document.getElementById("chkfrmFN").checked;
            var FromAN = document.getElementById("chkfrmAN").checked;

            var startDate = new Date($("#txtLeaveFrom").val());
            var enddate = new Date($('#txtLeaveTo').val());


            //day = 1 + daydiff(parseDate($('#txtLeaveFrom').val()), parseDate($('#txtLeaveTo').val()));




            if (FromFN == true) {

                FinalVal = parseFloat(LeaveDays) + parseFloat(0.5);

                $("#txtTotalLeave").val(FinalVal);

            }
            else if (FromFN == false) {


                FinalVal = LeaveDays - 0.5;

                $("#txtTotalLeave").val(FinalVal);

            }
            else {

            }

            if (FromFN == false && FromAN == false) {
                $.alert.open({ type: 'warning', content: 'Could not deselect both..' });
                $("#chkfrmAN").prop('checked', true);
                $("#chkfrmFN").prop('checked', true);
                day = calculateDays(startDate, enddate);
                if ($('#txtLeaveTo').val() == '') {
                    $("#txtTotalLeave").val(1);
                }
                else {
                    $("#txtTotalLeave").val(day);
                }
            }
        }
    }




    function CheckboxFunctionFromAN() {
        if ($("#txtLeaveFrom").val() == '') {
            $.alert.open({ type: 'warning', content: 'Please choose the From date' });
        }
        else {

            var LeaveDays = $("#txtTotalLeave").val();
            var FromFN = document.getElementById("chkfrmFN").checked;
            var FromAN = document.getElementById("chkfrmAN").checked;

            var startDate = new Date($("#txtLeaveFrom").val());
            var enddate = new Date($('#txtLeaveTo').val());



            if (FromAN == true) {

                FinalVal = parseFloat(LeaveDays) + parseFloat(0.5);

                $("#txtTotalLeave").val(FinalVal);

            }
            else if (FromAN == false) {


                FinalVal = LeaveDays - 0.5;

                $("#txtTotalLeave").val(FinalVal);

            }
            else {

            }

            if (FromFN == false && FromAN == false) {
                $.alert.open({ type: 'warning', content: 'Could not deselect both..' });
                $("#chkfrmAN").prop('checked', true);
                $("#chkfrmFN").prop('checked', true);

                day = calculateDays(startDate, enddate);
                if ($('#txtLeaveTo').val() == '') {
                    $("#txtTotalLeave").val(1);
                }
                else {
                    $("#txtTotalLeave").val(day);
                }
            }
        }
    }






    function CheckboxFunctionToAN() {

        if ($("#txtLeaveTo").val() == '') {
            $.alert.open({ type: 'warning', content: 'Please choose the To date' });
        }
        else {
            var LeaveDays = $("#txtTotalLeave").val();
            var ToFN = document.getElementById("chktoFN").checked;
            var ToAN = document.getElementById("chktoAN").checked;
            var FinalVal;

            var startDate = new Date($("#txtLeaveFrom").val());
            var enddate = new Date($('#txtLeaveTo').val());


            if (ToAN == true) {

                FinalVal = parseFloat(LeaveDays) + parseFloat(0.5);

                $("#txtTotalLeave").val(FinalVal);

            }
            else if (ToAN == false) {


                FinalVal = LeaveDays - 0.5;
                $("#txtTotalLeave").val(FinalVal);

            }
            else {

            }
            if (ToFN == false && ToAN == false) {
                $.alert.open({ type: 'warning', content: 'Could not deselect both..' });
                $("#chktoFN").prop('checked', true);
                $("#chktoAN").prop('checked', true);
                day = calculateDays(startDate, enddate);
                $("#txtTotalLeave").val(day);

            }
        }

    }


    function CheckboxFunctionToFN() {

        if ($("#txtLeaveTo").val() == '') {
            $.alert.open({ type: 'warning', content: 'Please choose the To date' });
        }
        else {

            var LeaveDays = $("#txtTotalLeave").val();
            var ToFN = document.getElementById("chktoFN").checked;
            var ToAN = document.getElementById("chktoAN").checked;
            var FinalVal;

            var startDate = new Date($("#txtLeaveFrom").val());
            var enddate = new Date($('#txtLeaveTo').val());

            if (ToFN == true) {

                FinalVal = parseFloat(LeaveDays) + parseFloat(0.5);

                $("#txtTotalLeave").val(FinalVal);

            }
            else if (ToFN == false) {


                FinalVal = LeaveDays - 0.5;
                $("#txtTotalLeave").val(FinalVal);

            }
            else {

            }

            if (ToFN == false && ToAN == false) {
                $.alert.open({ type: 'warning', content: 'Could not deselect both..' });
                $("#chktoFN").prop('checked', true);
                $("#chktoAN").prop('checked', true);
                day = calculateDays(startDate, enddate);
                $("#txtTotalLeave").val(day);


            }
        }
    }


    $('#chkfrmFN').click(function () {

        CheckboxFunctionFromFN();


    });

    $('#chkfrmAN').click(function () {
        CheckboxFunctionFromAN();


    });

    $('#chktoFN').click(function () {

        CheckboxFunctionToFN();


    });



    $('#chktoAN').click(function () {
        CheckboxFunctionToAN();


    });









    function workingDaysBetweenDates(startDate, endDate) {


        var millisecondsPerDay = 86400 * 1000;
        startDate.setHours(0, 0, 0, 1);
        endDate.setHours(23, 59, 59, 999);
        var diff = endDate - startDate;
        var days = Math.ceil(diff / millisecondsPerDay);

        // Subtract two weekend days for every week in between
        var weeks = Math.floor(days / 7);
        days = days - (weeks * 2);

        // Handle special cases
        var startDay = startDate.getDay();
        var endDay = endDate.getDay();

        // Remove weekend not previously removed.   
        if (startDay - endDay > 1)
            days = days - 2;

        // Remove start day if span starts on Sunday but ends before Saturday
        if (startDay === 0 && endDay != 6)
            days = days - 1;

        // Remove end day if span ends on Saturday but starts after Sunday
        if (endDay === 6 && startDay !== 0)
            days = days - 1;

        return days;

    }







    // 2 helper functions - moment.js is 35K minified so overkill in my opinion
    function pad(num) { return ("0" + num).slice(-2); }
    function formatDate(date) { var d = new Date(date), dArr = [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())]; return dArr.join('-'); }

    function calculateDays(first, last) {
        //first = new Date($("#txtLeaveFrom").val());
        //last = new Date($('#txtLeaveTo').val());

        var gon = {};

        gon["holiday"] = disableddates.split(", ");


        var aDay = 24 * 60 * 60 * 1000,
        daysDiff = parseInt((last.getTime() - first.getTime()) / aDay, 10) + 1;

        if (daysDiff > 0) {

            for (var i = first.getTime(), lst = last.getTime() ; i <= lst; i += aDay) {
                var d = new Date(i);

                if (d.getDay() == 6 || d.getDay() == 0 // weekend
                || gon.holiday.indexOf(formatDate(d)) != -1) {

                    daysDiff--;
                }
            }
        }

        // $("#txtTotalLeave").val(daysDiff);
        return daysDiff;

    }


});