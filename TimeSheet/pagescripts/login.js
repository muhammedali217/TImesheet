
$().ready(function () {
   
    $('#browserWarning').hide();
    if (bowser.chrome) {
        $('#browserWarning').show();
        
    } 
    var empId;
    var name;
    var adminId;
    var superadminId;
    var EmpLoggedEmail;
    var FullName;
    var Designation;
    var JoinDate;
    var Gender;
    var support;
    $("#loginform").validate({
        submitHandler: function (form) {
            loginprocess();
        },
        rules: {
            txtUsername: {
                required: true
            },
            txtPassword: "required"
        },
        messages: {
            txtUsername: {
                required: "Please enter a username"
            },
            txtPassword: "Please enter your password"
        }
    });

    function loginprocess() {
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Employee_OfficialMailId";
        varParams.strArgmt = $("#txtUsername").val();
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Employee_Password";
        varParams.strArgmt = $("#txtPassword").val();
        varProcParams[1] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "Employee_GetLoginDetails";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseLogin",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                if (response.status == "Admin") {
                    adminId = response.details[0].Employee_ID;
                    localStorage.setItem('AdminSession', 'Start'); 
                    window.location = "ViewAllEmployee.aspx";
                    localStorage.setItem('AdminId', adminId);
                    
                }
                else if (response.status == "SuperAdmin") {
                    superadminId = response.details[0].Employee_ID;
                    localStorage.setItem('SuperAdminSession', 'Start');
                    window.location = "EmployeeProjectReport.aspx";
                    localStorage.setItem('SuperAdminId', superadminId);

                }
                else if (response.status == "Employee") {
                    $("#divError").hide();
                    empId = response.details[0].Employee_ID;
                    name = response.details[0].Employee_FirstName;
                    EmpLoggedEmail = response.details[0].Employee_OfficialMailId;
                    FullName = response.details[0].FullName;;
                    Designation = response.details[0].Employee_Designation;;
                    JoinDate = response.details[0].Employee_DateOfJoining;;
                    Gender = response.details[0].Employee_Gender;;

                    localStorage.setItem('EmployeeId', empId);
                    localStorage.setItem('EmployeeName', name.toUpperCase());
                    localStorage.setItem('EmployeeEmail', EmpLoggedEmail);
                    localStorage.setItem('FullName', FullName);
                    localStorage.setItem('Designation', Designation);
                    localStorage.setItem('JoinDate', JoinDate);
                    localStorage.setItem('Gender', Gender);
                    localStorage.setItem('Day', response.day);
                    localStorage.setItem('Hour', response.hour);
                    window.location = "enterweeklytimesheet.aspx";
                }
                else if (response.status == "FAILED")
                {
                    $("#lblError").text(response.message);
                    $("#divError").show();
                }
                else if (response.status == "Support") {
                    support = response.details[0].Employee_FirstName;
                    window.location = "viewraisedtickets.aspx";
                    localStorage.setItem('Support', support);                    
                }
            }
        });
    }

    $("form").change(function () {
        $("#divError").hide();
    });
});