$(document).ready(function () {   
   
    $('#btnLogout').click(function () {
        localStorage.removeItem('EmployeeId');
        window.location.href = "login.html";
    });

    var Localvalue = localStorage.getItem('EmployeeId');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        LoadEmployeeDetails(Localvalue)
        $("#btnUpdate").hide();
        $("#EmpContactNo").attr('disabled','disabled');
        $("#EmpContactPerson").attr('disabled', 'disabled');
        $("#EmpLastName").attr('disabled', 'disabled');
        $("#EmpFirstName").attr('disabled', 'disabled');
        $("#EmpPhone").attr('disabled', 'disabled');
        $("#EmpKeySkill").attr('disabled', 'disabled');
        $("#btnEdit").show();
        $("#btnEdit").click(function () {
            $("#btnUpdate").show();
            $("#EmpContactNo").removeAttr('disabled');
            $("#EmpContactPerson").removeAttr('disabled');
            $("#EmpLastName").removeAttr('disabled');
            $("#EmpFirstName").removeAttr('disabled');
            $("#EmpPhone").removeAttr('disabled');
            $("#EmpKeySkill").removeAttr('disabled');
            $("#btnEdit").hide();
        });
        //$('#ddlEmployee').select2();
        $("#btnUpdate").click(function () {
            $("#btnUpdate").hide();
            $("#EmpContactNo").attr('disabled', 'disabled');
            $("#EmpContactPerson").attr('disabled', 'disabled');
            $("#EmpLastName").attr('disabled', 'disabled');
            $("#EmpFirstName").attr('disabled', 'disabled');
            $("#EmpPhone").attr('disabled', 'disabled');
            $("#EmpKeySkill").attr('disabled', 'disabled');
            $("#btnEdit").show();

            if ($("#EmpFirstName").val() == '' || $("#EmpLastName").val() == '') {
                $.alert.open({ type: 'warning', content: 'Name is required' });
            }
            if ($("#EmpPhone").val() == '' || $("#EmpContactNo").val() == '' ) {
                $.alert.open({ type: 'warning', content: 'Phone number required.' });
            }
            if ($("#EmpContactPerson").val() == '') {
                $.alert.open({ type: 'warning', content: 'Contact Person name is required' });
            }
            if ($("#EmpKeySkill").val() == '') {
                $.alert.open({ type: 'warning', content: 'Skill set is required' });
            }
            else {

                UpdateEmployee($("#EmpFirstName").val(), $("#EmpLastName").val(), $("#EmpPhone").val(), $("#EmpContactNo").val(), $("#EmpContactPerson").val(), $("#EmpKeySkill").val());
                LoadEmployeeDetails();
            }
        })

        $("#btnCancel").click(function () {
            $("#btnUpdate").hide();
            $("#EmpContactNo").attr('disabled', 'disabled');
            $("#EmpContactPerson").attr('disabled', 'disabled');
            $("#EmpLastName").attr('disabled', 'disabled');
            $("#EmpFirstName").attr('disabled', 'disabled');
            $("#EmpPhone").attr('disabled', 'disabled');
            $("#EmpKeySkill").attr('disabled', 'disabled');
            $("#btnEdit").show();
            LoadEmployeeDetails();
        });
    }
    
    function LoadEmployeeDetails() {
        debugger
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "EmpId";
        varParams.strArgmt = Localvalue;
        varProcParams[0] = varParams;
        varParams = {};
        var SpParams = {};
        SpParams.strProc = "GetEmployeeById";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                if (response != null) {
                    if (response.details.length > 0) {
                        debugger
                        $("#EmpContactNo").val(response.details[0].Employee_EmergencyCntctNo);
                        $("#EmpContactPerson").val(response.details[0].Employee_EmergencyCntctName);
                        $("#EmpLastName").val(response.details[0].Employee_LastName);
                        $("#EmpFirstName").val(response.details[0].Employee_FirstName);
                        $("#EmpPhone").val(response.details[0].Employee_ContactNo);
                        $("#EmpKeySkill").val(response.details[0].Employee_KeySkills);
                        $("#EmpCode").val(response.details[0].Employee_Code);
                        $("#EMpLineManager").val("Manager: "+response.details[0].Employee_LineManager);
                        $("#EmpEMail").val(response.details[0].Employee_OfficialMailId);
                        $("#EmpName").text(response.details[0].Employee_Name);
                        $("#EmpDesig").text(response.details[0].Employee_Designation);
                    }
                    
                }
            }
        });
    }
    function UpdateEmployee(EmpFirstname,EmpLastName,EmpContactNo,EmpEmergencyContact,EmpContactPerson,EmpKeySkills) {
        debugger
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Employee_Id";
        varParams.strArgmt = Localvalue;
        varProcParams[0] = varParams;
        varParams = {};

        varParams.strKey = "Employee_FirstName";
        varParams.strArgmt = EmpFirstname;
        varProcParams[1] = varParams;
        varParams = {};

        varParams.strKey = "Employee_LastName";
        varParams.strArgmt = EmpLastName;
        varProcParams[2] = varParams;
        varParams = {};

        varParams.strKey = "Employee_ContactNo";
        varParams.strArgmt = EmpContactNo;
        varProcParams[3] = varParams;
        varParams = {};

        varParams.strKey = "Employee_Emergencycontact";
        varParams.strArgmt = EmpEmergencyContact;
        varProcParams[4] = varParams;
        varParams = {};

        varParams.strKey = "Employee_ContactPerson";
        varParams.strArgmt = EmpContactPerson;
        varProcParams[5] = varParams;
        varParams = {};

        varParams.strKey = "Employee_KeySkills";
        varParams.strArgmt = EmpKeySkills;
        varProcParams[6] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "Employee_MyProfileUpdate";
        SpParams.oProcParams = varProcParams;
       
        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {                
                $.alert.open({ type: 'Success', content: 'Details Updated Successfully' });
                }            
        });
    }
});