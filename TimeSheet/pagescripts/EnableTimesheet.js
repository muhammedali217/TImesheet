$(document).ready(function () {
    debugger
    $("#txtFromDate").datepicker();
    $("#txtFromDate").on('changeDate', function (ev) {
        $("#txtFromDate").datepicker('hide');
    });   
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
        $("#btnAssignTask").hide();
        $(".js-example-basic-multiple").select2();
        $(".js-example-theme-multiple").select2({
            theme: "classic"
        });
        //$('#ddlEmployee').select2();
        Employeedrpdown();
        
        $("#btnSubmit").click(function () {

            var empId = $("#ddlEmployee").val();
         

            if ($("#ddlEmployee").val() == '' || empId == null) {
                $.alert.open({ type: 'warning', content: 'Please select atleast one employee.' });
            }
            if ($("#txtFromDate").val() == '' || empId == null) {
                $.alert.open({ type: 'warning', content: 'Please select from date to enable timesheet.' });
            }           

            else {
                
                //alert(empId);
                var varProcParams = new Array();
                debugger
                var varParams = {};
                varParams.strKey = "EmployeeIdArray";
                varParams.strArgmt = empId.toString();
                varProcParams[0] = varParams;
                varParams = {};

                var employee = $('#ddlEmployee :selected').text();

                $.alert.open('Are you sure to unlock the above employees timesheet ?', { 1: 'Yes', 2: 'No' }, function (button) {
                    if (button == 1) {
                        debugger
                        let empId = $('#ddlEmployee').val();
                        var dateSelected = $("#txtFromDate").val();
                        let dateFrom = JSON.stringify(dateSelected);
                        let empIdList = JSON.stringify(empId);
                        localStorage.setItem("EmpIdEnableTimesheet", empIdList);
                        localStorage.setItem("FromDateEnableTimesheet", dateFrom);
                        $.alert.open({ type: 'success', content: 'Timesheet Enabled Successfully' });
                        debugger
                        for (var m = 0; m <= empId.length; m++) {
                            debugger
                            EmpEmailId(empId[m]);
                            
                        }
                        $("#ddlEmployee").select2("val", "");
                        $("#txtFromDate").val("");
                        $("#txtToDate").val("");                       
                    }//if
                    else if (button == 2) { 

                    }
                });//alert
            }
        });
       
        $("#btnCancel").click(function () {            
            $("#ddlEmployee").select2("val", "");
            $("#txtFromDate").val("");
            $("#txtToDate").val("");
            Employeedrpdown();

        });
    }
    function SendEmailToEmployee(strEmpName, strEmpEmail) {

        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "EmpName";
        varParams.strArgmt = strEmpName
        varProcParams[0] = varParams;
        varParams = {};

        varParams.strKey = "EmpEmail";
        varParams.strArgmt = strEmpEmail;
        varProcParams[1] = varParams;

        var SpParams = {};
        SpParams.oProcParams = varProcParams;


        $.ajax({
            url: "/api/FIXZIService/TimeSheetEnableMailNotification",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
            }
        });
    }
    function Employeedrpdown() {
        debugger
        var SpParams = {};
        SpParams.strProc = "Employee_DrpDown";

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

                            $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }
                }
            }
        });
    }
    function EmpEmailId(empId) {
        debugger
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "EmpId";
        varParams.strArgmt = empId;
        varProcParams[0] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "EmpEmailByID";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                debugger
                if (response != null) {
                    debugger
                    if (response.details.length > 0) {
                        //SendEmailToEmployee(response.details[0].EmployeeName, response.details[0].Employee_OfficialMailId);
                    }
                }
            }
        });
    }
});