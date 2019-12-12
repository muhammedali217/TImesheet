$(document).ready(function () {
    //$("#txtEmpCode").prop('disabled', true);
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
        var SpParams = {};
        SpParams.strProc = "EmployeeCode_Next";

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {


                var empCod = response.details[0].EmpId;
                //$("#txtEmpCode").prop('disabled', true);
                $("#txtEmpCode").val(empCod);

            }//response
        });//ajax

        //setTimeout(function () {
        //    window.location = "login.html"
        //}, 5000);
        //alert("hi");
        $("#txtDoJ").datepicker();
        $("#txtDob").datepicker();
        function adjustIframeHeight() {
            var $body = $('body'),
                    $iframe = $body.data('iframe.fv');
            if ($iframe) {
                // Adjust the height of iframe
                $iframe.height($body.height());
            }
        }



        $('#btnAdd').click(function () {

            if ($("#txtEmpCode").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the Employee Code' });
            }
            else if ($("#txtFirstName").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the First name of the Employee' });
            }
            else if ($("#txtLastName").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the Last name of the Employee' });
            }
            else if ($("#txtDesignation").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the Designation of the Employee' });
            }
                //else if ($("#ddlGener").val() == '') {
                //    $.alert.open({ type: 'warning', content: 'Please enter the First name of the Employee' });
                //}
                //else if ($("#ddlEmpStatus").val() == '') {
                //    $.alert.open({ type: 'warning', content: 'Please enter the First name of the Employee' });
                //}
                //else if ($("#ddlMarital").val() == '') {
                //    $.alert.open({ type: 'warning', content: 'Please enter the First name of the Employee' });
                //}
            else if ($("#txtDob").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the First name of the Employee' });
            }
            else if ($("#txtDoJ").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the First name of the Employee' });
            }

            else if ($("#txtOffcEmail").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the Official Email of the Employee' });
            }
            else if ($("#txtEmergContact").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the Emergency number of the Employee' });
            }
            else if ($("#txtAccNo").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the Account number of the Employee' });
            }
            else {
                EmployeeAdd();

            }

        });













        $('#ddlMarital').change(function () {


            if ($("#ddlMarital").val() == 'Single' || $("#ddlMarital").val() == 'Others') {


                $("#txtSpouseName").prop('disabled', true);
                $("#txtSpouseName").val(' ');
            }

            else {
                $("#txtSpouseName").prop('disabled', false);
            }

        });

        var Today = new Date();

        function monthDiff(d1, d2) {
            //d1 = new Date();
            //d2 = new Date();
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth() + 1;
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
        }
        //year,month-1,day
        // alert(monthDiff(new Date(2010, 0, 1), new Date(2010, 12, 12)));  
        //alert(monthDiff(new Date('2010/04/04'), new Date('2009/04/04')));



        var PrvL;
        var MatrnL;
        var PaternL;
        var SickL;
        var Quarter1;
        var Quarter2;
        var Quarter3;
        var Quarter4;
        var AvailL;
        var EmpId;


        $("#txtDoJ").datepicker();
        $("#txtDob").datepicker();




        function EmployeeAdd() {

            var varProcParams = new Array();


            var varParams = {};
            varParams.strKey = "Employee_Code";
            varParams.strArgmt = $("#txtEmpCode").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_FirstName";
            varParams.strArgmt = $("#txtFirstName").val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_LastName";
            varParams.strArgmt = $("#txtLastName").val();
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Gender";
            varParams.strArgmt = $("#ddlGener").val();
            varProcParams[3] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Designation";
            varParams.strArgmt = $("#txtDesignation").val();
            varProcParams[4] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_MaritalStatus";
            varParams.strArgmt = $("#ddlMarital").val();
            varProcParams[5] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_DateOfBirth";
            varParams.strArgmt = $("#txtDob").val();
            varProcParams[6] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_DateOfJoining";
            varParams.strArgmt = $("#txtDoJ").val();
            varProcParams[7] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Qualification";
            varParams.strArgmt = $("#ddlQualification").val();
            varProcParams[8] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Department";
            varParams.strArgmt = $("#ddlDept").val();
            varProcParams[9] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_OfficialMailId";
            varParams.strArgmt = $("#txtOffcEmail").val();
            varProcParams[10] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PersonalMailId";
            varParams.strArgmt = $("#txtPersonalEmail").val();
            varProcParams[11] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_AccountNumber";
            varParams.strArgmt = $("#txtAccNo").val();
            varProcParams[12] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_FathersName";
            varParams.strArgmt = $("#txtFathersName").val();
            varProcParams[13] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_SpouseName";
            varParams.strArgmt = $("#txtSpouseName").val();
            varProcParams[14] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PermanentAddress";
            varParams.strArgmt = $("#txtAddress").val();
            varProcParams[15] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_ContactNo";
            varParams.strArgmt = $("#txtMob").val();
            varProcParams[16] = varParams;
            varParams = {};


            //varParams.strKey = "Employee_Previous_AccountNumber";
            //varParams.strArgmt = $("#txtAccNo").val();
            //varProcParams[17] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BankName_and_Branch";
            varParams.strArgmt = $("#txtBank").val();
            varProcParams[17] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Employee_PanNo";
            varParams.strArgmt = $("#txtPAN").val();
            varProcParams[18] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BloodGroup";
            varParams.strArgmt = $("#txtBloodGrp").val();
            varProcParams[19] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Status";
            varParams.strArgmt = $("#ddlEmpStatus").val();
            varProcParams[20] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Employee_AddDetails";
            SpParams.oProcParams = varProcParams;


            var doj = $("#txtDoJ").val();
            var doj1 = doj.split('/');



            var today = new Date();
            var experienceInMonth = monthDiff(new Date(doj1[2], doj1[0], doj1[1]), new Date(2016, 02, 24)) + 1;

            if (experienceInMonth > 48) {

                PrvL = 4.0;
                SickL = 3;
            }
            else if (experienceInMonth > 12 && experienceInMonth < 48) {


                PrvL = 3.0;
                SickL = 3.0;
            }

            else {

                PrvL = 1;
                SickL = 1.0;
            }

            //alert(today.getMonth()+1);
            var currentmonth = today.getMonth() + 1;

            if (currentmonth == "1" || currentmonth == "2" || currentmonth == "3") {
                Quarter1 = PrvL;
                Quarter2 = 0;
                Quarter3 = 0;
                Quarter4 = 0;

            }
            else if (currentmonth == "4" || currentmonth == "5" || currentmonth == "6") {
                Quarter1 = 0;
                Quarter2 = PrvL;
                Quarter3 = 0;
                Quarter4 = 0;
            }



            else if (currentmonth == "7" || currentmonth == "8" || currentmonth == "9") {
                Quarter1 = 0;
                Quarter2 = 0;
                Quarter3 = PrvL;
                Quarter4 = 0;
            }


            else if (currentmonth == "10" || currentmonth == "11" || currentmonth == "12") {
                Quarter1 = 0;
                Quarter2 = 0;
                Quarter3 = PrvL;
                Quarter4 = 0;
            }
            else {

            }



            if ($("#ddlGener").val() == "Female") {
                MatrnL = 30;

            }
            else {
                MatrnL = 0;
            }

            if ($("#ddlGener").val() == "Male") {
                PaternL = 1;

            }
            else {
                PaternL = 0;
            }





            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.status == 'SUCCESS') {
                        //alert(JSON.stringify(SpParams));
                        //$.alert.open({ type: 'info', content: 'Employee Details Added Successfully' });
                        SendEmailToAdmin($("#txtFirstName").val() + " " + $("#txtLastName").val(), $("#txtEmpCode").val(), $("#txtDesignation").val());
                        EmpId = response.message;
                        AddLeaveHistory(PrvL, MatrnL, PaternL, SickL, Quarter1, Quarter2, Quarter3, Quarter4, PrvL, EmpId);
                        //window.location = "ViewAllEmployee.aspx";
                        alert('Details added Successfully');
                        var r = confirm('Do you want to add another Employee?');
                        if (r == true) {
                            location.reload(true);
                        }
                        else {
                            window.locatin = "ViewAllEmployee.aspx";
                        }

                    }
                    else {
                        $.alert.open({ 'warning': 'Error in Adding Employee. Please check the details you have entered.' });
                    }
                }
            });
        }




        function SendEmailToAdmin(strEmpName, strEmpCode, strDesignation) {




            var Params = {};
            Params.EmpName = strEmpName;
            Params.EmpCode = strEmpCode;
            Params.EmpDesignation = strDesignation;


            $.ajax({
                url: "/api/FIXZIService/EmployeeAddedEmail",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {



                }
            });
        }


        $('#btnCancel').click(function () {
            //alert("cancel");
            location.reload(true);
        });





        function AddLeaveHistory(PrvLeave, MaternLeave, PaternLeave, SickLeave, Quarter1, Quarter2, Quarter3, Quarter4, AvailLeave, EmpId) {

            var varProcParams = new Array();


            var varParams = {};
            varParams.strKey = "LeaveHistory_PrivilegeL";
            varParams.strArgmt = PrvLeave;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_MaternityL";
            varParams.strArgmt = MaternLeave;
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_PaternityL";
            varParams.strArgmt = PaternLeave;
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_SickL";
            varParams.strArgmt = SickLeave;
            varProcParams[3] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_Quarter1";
            varParams.strArgmt = Quarter1;
            varProcParams[4] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_Quarter2";
            varParams.strArgmt = Quarter2;
            varProcParams[5] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_Quarter3";
            varParams.strArgmt = Quarter3;
            varProcParams[6] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_Quarter4";
            varParams.strArgmt = Quarter4;
            varProcParams[7] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "LeaveHistory_Available";
            varParams.strArgmt = AvailLeave;
            varProcParams[8] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = EmpId;
            varProcParams[9] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "LeaveHistory_Add";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.status == 'SUCCESS') {
                        $('#completeModal').modal();

                    }
                }
            });
        }

        $('#btnAddMore').click(function () {
            location.reload(true);
            window.locatin = "employeeadd.aspx";
        });


    }

});