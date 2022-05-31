<<<<<<< HEAD
﻿$(document).ready(function () {
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
        SpParams.strProc = "EmployeeAll_DrpDown";

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
                    }//for
                }//if
            }//response
        });

        $('#txtEmpName').attr('readonly', 'true');

        $('#txtEmpName').val('');
        $("#ddlEmpStatus").val('')
        $("#txtEmpCode").val('')
        $("#txtdesig").val('')
        $('#ddlGener').val('');
        $("#txtDOJ").val('')
        $("#txtDOB").val('')
        $("#txtqual").val('')
        $("#txtoff_mail").val('')
        $("#txtper_mail").val('')

        $("#txtmobile").val('')
        $("#txtperAddress").val('')
        $("#txtpresent").val('')
        $("#ddlMarital").val('')
        $("#txtspouse").val('')
        $("#txtsDOB").val('')
        //$("#ddlKidsCount").val(response.details[0].Employee_Designation)
        $("#txtKid1name").val('')
        $("#txtKid1DOB").val('')
        $("#txtKid2name").val('')
        $("#txtKid2DOB").val('')
        $("#txtKid3name").val('')

        $("#txtKid3DOB").val('')
        $("#txtparent_name").val('')
        $("#txtemer_person").val('')
        $("#ddlrelation").val('')
        $("#txt_emer_others").val('')
        $("#txtcon_num").val('')
        // alert(response.details[0].Employee_ReferalNumber);
        $("#txtprev_company").val('')
        $("#txtref_cont_per").val('')
        $("#txtrefnum").val('')
        // $("#txtref_cont_per").val(response.details[0].Employee_Designation)

        $("#txtbankname").val('')
        $("#txtacount_num").val('')
        $("#txtbranch_name").val('')
        $("#txtifsc_code").val('')
        $("#txtbgroup").val('')
        $("#txtpan_num").val('')
        $("#txtpass_num").val('')
        $("#txtadhar_num").val('')
        $("#txtasset").val('')
        $("#ddlLineManager").val('')


        $("#ddlEmployee").change(function () {

            UnAssignedEmpDropDown($("#ddlEmployee").val());
        });


       

        function UnAssignedEmpDropDown(EmployeeId) {
            //alert(EmployeeId);
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = EmployeeId;
            varProcParams[0] = varParams;
            varParams = {};
            var SpParams = {};
            SpParams.strProc = "Employee_DetailsById";
            SpParams.oProcParams = varProcParams;
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    //alert(response.details[0].empname);
                    $('#txtEmpName').val(response.details[0].empname)  ;
                    $("#ddlEmpStatus").val(response.details[0].Employee_Status)
                    $("#txtEmpCode").val(response.details[0].Employee_Code)
                    $("#txtdesig").val(response.details[0].Employee_Designation)
                    $('#ddlGener').val(response.details[0].Employee_Gender);
                    $("#txtDOJ").val(response.details[0].Employee_DateOfJoining)
                    $("#txtDOB").val(response.details[0].Employee_DateOfBirth)
                    $("#txtqual").val(response.details[0].Employee_Qualification)
                    $("#txtoff_mail").val(response.details[0].Employee_OfficialMailId)
                    $("#txtper_mail").val(response.details[0].Employee_PersonalMailId)

                    $("#txtmobile").val(response.details[0].Employee_ContactNo)
                    $("#txtperAddress").val(response.details[0].Employee_PermanentAddress)
                    $("#txtpresent").val(response.details[0].Employee_PresentAddress)
                    $("#ddlMarital").val(response.details[0].Employee_MaritalStatus)
                    $("#txtspouse").val(response.details[0].Employee_SpouseName)
                    $("#txtsDOB").val(response.details[0].Employee_SpouseDOB)
                    //$("#ddlKidsCount").val(response.details[0].Employee_Designation)
                    $("#txtKid1name").val(response.details[0].Employee_Kid1Name)
                    $("#txtKid1DOB").val(response.details[0].Employee_Kid1DOB)
                    $("#txtKid2name").val(response.details[0].Employee_Kid2Name)
                    $("#txtKid2DOB").val(response.details[0].Employee_Kid2DOB)
                    $("#txtKid3name").val(response.details[0].Employee_Kid3Name)

                    $("#txtKid3DOB").val(response.details[0].Employee_Kid3DOB)
                    $("#txtparent_name").val(response.details[0].Employee_FathersName)
                    $("#txtemer_person").val(response.details[0].Employee_EmergencyCntctName)
                    $("#ddlrelation").val(response.details[0].Employee_RelationwithEperson)
                    $("#txt_emer_others").val(response.details[0].Employee_ReferalCntctPerson)
                    $("#txtcon_num").val(response.details[0].Employee_EmergencyCntctNo)
                   // alert(response.details[0].Employee_ReferalNumber);
                    $("#txtprev_company").val(response.details[0].Employee_PreviousCompanyName)
                    $("#txtref_cont_per").val(response.details[0].Employee_ReferalCntctPerson)
                    $("#txtrefnum").val(response.details[0].Employee_ReferalNumber)
                   // $("#txtref_cont_per").val(response.details[0].Employee_Designation)

                    $("#txtbankname").val(response.details[0].Employee_BankName_and_Branch)
                    $("#txtacount_num").val(response.details[0].Employee_AccountNumber)
                    $("#txtbranch_name").val(response.details[0].Employee_BranchName)
                    $("#txtifsc_code").val(response.details[0].Employee_IFSCcode)
                    $("#txtbgroup").val(response.details[0].Employee_BloodGroup)
                    $("#txtpan_num").val(response.details[0].Employee_PanNo)
                    $("#txtpass_num").val(response.details[0].Employee_PassportNo)
                    $("#txtadhar_num").val(response.details[0].Employee_AadharNum)
                    $("#txtasset").val(response.details[0].Employee_AssetIdOfDesktop)
                    $("#ddlLineManager").val(response.details[0].Employee_LineManager)
                    if ($("#ddlMarital").val() == 'Single' || $("#ddlMarital").val() == 'Others') {
                        $("#txtspouse").hide();
                        $("#txtsDOB").hide();
                        $('#ddlKidsCount').hide();
                    }
                    else if ($("#ddlMarital").val() == 'Married') {
                        $("#txtspouse").show();
                        $("#txtsDOB").show();
                        $('#ddlKidsCount').show();
                    }
                    else {
                        $("#txtspouse").hide();
                        $("#txtsDOB").hide();
                        $('#ddlKidsCount').hide();
                    }

                    if (response.details[0].Employee_Kid3Name != '' && response.details[0].Employee_Kid3Name != 'NULL')
                    {
                        $("#ddlKidsCount").val(3);

                    }
                    if (response.details[0].Employee_Kid2Name != '' && response.details[0].Employee_Kid2Name != 'NULL') {
                        $("#ddlKidsCount").val(2);

                    }
                    if (response.details[0].Employee_Kid1Name != '' && response.details[0].Employee_Kid1Name != 'NULL') {
                        $("#ddlKidsCount").val('1');

                    }
                    
                   

                    if (response.details[0].Employee_Kid1Name == '' || response.details[0].Employee_Kid1Name =='NULL') {
                        $("#ddlKidsCount").val('0');

                    }
                    if ($('#ddlKidsCount').val() == '0') {
                        $('#txtKid1name').hide();
                        $('#txtKid1DOB').hide();
                        $('#txtKid2name').hide();
                        $('#txtKid2DOB').hide();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }
                    else if ($('#ddlKidsCount').val() == '1') {
                        $('#txtKid1name').show();
                        $('#txtKid1DOB').show();
                        $('#txtKid2name').hide();
                        $('#txtKid2DOB').hide();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }
                    else if ($('#ddlKidsCount').val() == '2') {
                        $('#txtKid1name').show();
                        $('#txtKid1DOB').show();
                        $('#txtKid2name').show();
                        $('#txtKid2DOB').show();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }

                    else if ($('#ddlKidsCount').val() == '3') {
                        $('#txtKid1name').show();
                        $('#txtKid1DOB').show();
                        $('#txtKid2name').show();
                        $('#txtKid2DOB').show();
                        $('#txtKid3name').show();
                        $('#txtKid3DOB').show();
                    }
                    else {
                        $('#txtKid1name').hide();
                        $('#txtKid1DOB').hide();
                        $('#txtKid2name').hide();
                        $('#txtKid2DOB').hide();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }


                }
            });

        }
       
        function adjustIframeHeight() {
            var $body = $('body'),
                $iframe = $body.data('iframe.fv');
            if ($iframe) {
                $iframe.height($body.height());

            }
        }


        $('#tab1').show();

        $('#btnNext1').click(function () {
            if ($('#txtEmpName').val() == '') {
                $.alert.open('Please Choose the Employee Name');
            }
            else if ($('#txtEmpName').val().indexOf(',') <= 0) {
                $.alert.open('Please enter the Employee Name like Firstname,Lastname ');
                //$.alert.open('Please enter the Employee Name1');
            }
            else if ($('#ddlEmpStatus').val() == 'Select the Employee Status') {
                $.alert.open('Please select the Employee Status');
            }
            else if ($('#ddlGener').val() == 'Select the Gender') {
                $.alert.open('Please select the Gender');
            }
            else if ($('#txtdesig').val() == '') {
                $.alert.open('Please enter the Designation');
            }
            else if ($('#txtDOJ').val() == '') {
                $.alert.open('Please enter the Joining Date');
            }
            else if ($('#txtDOB').val() == '') {
                $.alert.open('Please enter the Employee Date of Birth');
            }
            else if ($('#txtqual').val() == '') {
                $.alert.open('Please enter the Employee Qualification');
            }
            else if ($('#txtoff_mail').val() == '@techvantagesystems.com') {
                $.alert.open('Please enter a valid Official mail-id');
            }
            else if ($('#txtper_mail').val() == '@gmail.com') {
                $.alert.open('Please enter a valid Personal mail-id');
            }
            else if ($('#txtmobile').val() == '') {
                $.alert.open('Please enter Mobile Number');
            }
            else {
                $('#tab1').hide();
                $('#tab2').show();
            }
        });

        $('#btnNext2').click(function () {
            if ($('#txtperAddress').val() == '') {
                $.alert.open('Please enter the Permanent Address');
            }
            else if ($('#txtpresent').val() == '') {
                $.alert.open('Please enter the Present Address');
            }
            else if ($('#ddlMarital').val() == 'Select the marital status') {
                $.alert.open('Please select the Marital Status');
            }
            else if ($('#txtparent_name').val() == '') {
                $.alert.open('Please enter the Parent Name');
            }
            else {
                $('#tab2').hide();
                $('#tab3').show();
            }
        });

        $('#btnNext3').click(function () {
            if ($('#txtemer_person').val() == '') {
                $.alert.open('Please enter the Emergency Contact Person Name');
            }
            else if ($('#ddlrelation').val() == 'Select the Relationship with the Person') {
                $.alert.open('Please select the Relationship');
            }
            else if ($('#txtcon_num').val() == '') {
                $.alert.open('Please enter the Emergency Contact Number');
            }
            else {
                $('#tab3').hide();
                $('#tab4').show();
            }
        });

        $('#btnPrev1').click(function () {
            $('#tab2').hide();
            $('#tab1').show();
        });

        $('#btnPrev2').click(function () {
            $('#tab3').hide();
            $('#tab2').show();
        });
        $('#btnPrev3').click(function () {
            $('#tab4').hide();
            $('#tab3').show();
        });

        $('#btnSubmit').click(function () {
            if ($('#ddlLineManager').val() == 'Select Line Managers') {
                $.alert.open('Please select the Line Manager');
            }
            else {
                EmployeeAdd();
            }
        });
        $('#txt_emer_others').hide();
        var relation;
        $('#ddlrelation').change(function () {
            if ($('#ddlrelation').val() == 'Others') {
                $('#txt_emer_others').show();
                relation = $('#txt_emer_others').val();
            }
            else {
                $('#txt_emer_others').hide();
                relation = $('#ddlrelation').val();
            }
        });


        var Code;
        $('#ddlEmpStatus').change(function () {
            if ($("#ddlEmpStatus").val() == 'Temporary') {
                //alert($("#txtEmpCode").val());
                var content = 'T' + $("#txtEmpCode").val();
                $("#txtEmpCode").val(content);
            }
            else {

                var content = $("#txtEmpCode").val();
                content = content.substring(1, content.length);
                $("#txtEmpCode").val(content);
            }
        });
        $("#txtspouse").hide();
        $("#txtsDOB").hide();
        $('#ddlKidsCount').hide();

        $('#ddlMarital').change(function () {
            if ($("#ddlMarital").val() == 'Single' || $("#ddlMarital").val() == 'Others') {
                $("#txtspouse").hide();
                $("#txtsDOB").hide();
                $('#ddlKidsCount').hide();
            }
            else if ($("#ddlMarital").val() == 'Married') {
                $("#txtspouse").show();
                $("#txtsDOB").show();
                $('#ddlKidsCount').show();
            }
            else {
                $("#txtspouse").hide();
                $("#txtsDOB").hide();
                $('#ddlKidsCount').hide();
            }
        });
        $('#txtKid1name').hide();
        $('#txtKid1DOB').hide();
        $('#txtKid2name').hide();
        $('#txtKid2DOB').hide();
        $('#txtKid3name').hide();
        $('#txtKid3DOB').hide();

        $('#ddlKidsCount').change(function () {
            if ($('#ddlKidsCount').val() == '0') {
                $('#txtKid1name').hide();
                $('#txtKid1DOB').hide();
                $('#txtKid2name').hide();
                $('#txtKid2DOB').hide();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }
            else if ($('#ddlKidsCount').val() == '1') {
                $('#txtKid1name').show();
                $('#txtKid1DOB').show();
                $('#txtKid2name').hide();
                $('#txtKid2DOB').hide();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }
            else if ($('#ddlKidsCount').val() == '2') {
                $('#txtKid1name').show();
                $('#txtKid1DOB').show();
                $('#txtKid2name').show();
                $('#txtKid2DOB').show();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }

            else if ($('#ddlKidsCount').val() == '3') {
                $('#txtKid1name').show();
                $('#txtKid1DOB').show();
                $('#txtKid2name').show();
                $('#txtKid2DOB').show();
                $('#txtKid3name').show();
                $('#txtKid3DOB').show();
            }
            else {
                $('#txtKid1name').hide();
                $('#txtKid1DOB').hide();
                $('#txtKid2name').hide();
                $('#txtKid2DOB').hide();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }
        });

        var Today = new Date();

        function monthDiff(d1, d2) {
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth() + 1;
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
        }

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
        $("#txtsDOB").datepicker();
        $("#txtDOJ").datepicker();
        $("#txtDOB").datepicker();
        $("#txtKid1DOB").datepicker();
        $("#txtKid2DOB").datepicker();
        $("#txtKid3DOB").datepicker();



        function EmployeeAdd() {

            var varProcParams = new Array();


            var varParams = {};
            varParams.strKey = "Employee_Code";
            varParams.strArgmt = $("#txtEmpCode").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Name";
            varParams.strArgmt = $("#txtEmpName").val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Status";
            varParams.strArgmt = $("#ddlEmpStatus").val();
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Designation";
            varParams.strArgmt = $("#txtdesig").val();
            varProcParams[3] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_DOJ";
            varParams.strArgmt = $("#txtDOJ").val();
            varProcParams[4] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_DOB";
            varParams.strArgmt = $("#txtDOB").val();
            varProcParams[5] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Qualification";
            varParams.strArgmt = $("#txtqual").val();
            varProcParams[6] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Officialmail";
            varParams.strArgmt = $("#txtoff_mail").val();
            varProcParams[7] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Personalmail";
            varParams.strArgmt = $("#txtper_mail").val();
            varProcParams[8] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PhoneNumber";
            varParams.strArgmt = $("#txtmobile").val();
            varProcParams[9] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_AssetID";
            varParams.strArgmt = $("#txtasset").val();
            varProcParams[10] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_LineManager";
            varParams.strArgmt = $("#ddlLineManager").val();
            varProcParams[11] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_MaritalStatus";
            varParams.strArgmt = $("#ddlMarital").val();
            varProcParams[12] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_SpouseName";
            varParams.strArgmt = $("#txtspouse").val();
            varProcParams[13] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_SpouseDOB";
            varParams.strArgmt = $("#txtsDOB").val();
            varProcParams[14] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid1Name";
            varParams.strArgmt = $("#txtKid1name").val();
            varProcParams[15] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid1DOB";
            varParams.strArgmt = $("#txtKid1DOB").val();
            varProcParams[16] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid2Name";
            varParams.strArgmt = $("#txtKid2name").val();
            varProcParams[17] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid2DOB";
            varParams.strArgmt = $("#txtKid2DOB").val();
            varProcParams[18] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid3Name";
            varParams.strArgmt = $("#txtKid3name").val();
            varProcParams[19] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid3DOB";
            varParams.strArgmt = $("#txtKid3DOB").val();
            varProcParams[20] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PermanentAddress";
            varParams.strArgmt = $("#txtperAddress").val();
            varProcParams[21] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PresentAddress";
            varParams.strArgmt = $("#txtpresent").val();
            varProcParams[22] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Employee_ParentName";
            varParams.strArgmt = $("#txtparent_name").val();
            varProcParams[23] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BloodGroup";
            varParams.strArgmt = $("#txtbgroup").val();
            varProcParams[24] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_EmergencyContactPerson";
            varParams.strArgmt = $("#txtemer_person").val();
            varProcParams[25] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Relation";
            varParams.strArgmt = relation;
            varProcParams[26] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_EContactNumber";
            varParams.strArgmt = $("#txtcon_num").val();
            varProcParams[27] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PreviousCompanyAddress";
            varParams.strArgmt = $("#txtprev_company").val();
            varProcParams[28] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_ReferalContactPerson";
            varParams.strArgmt = $("#txtref_cont_per").val();
            varProcParams[29] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_ReferalNumber";
            varParams.strArgmt = $("#txtrefnum").val();
            varProcParams[30] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BankName";
            varParams.strArgmt = $("#txtbankname").val();
            varProcParams[31] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_AccountNumber";
            varParams.strArgmt = $("#txtacount_num").val();
            varProcParams[32] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BranchName";
            varParams.strArgmt = $("#txtbranch_name").val();
            varProcParams[33] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_IFSCcode";
            varParams.strArgmt = $("#txtifsc_code").val();
            varProcParams[34] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PassportNumber";
            varParams.strArgmt = $("#txtpass_num").val();
            varProcParams[35] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PanNumber";
            varParams.strArgmt = $("#txtpan_num").val();
            varProcParams[36] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_AdharNumber";
            varParams.strArgmt = $("#txtadhar_num").val();
            varProcParams[37] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Gender";
            varParams.strArgmt = $("#ddlGener").val();
            varProcParams[38] = varParams;
            varParams = {};

            varParams.strKey = "employeeID";
            varParams.strArgmt = $("#ddlEmployee").val();
            varProcParams[39] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Employee_Update";
            SpParams.oProcParams = varProcParams;

            

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.status == 'SUCCESS') {
                        $.alert.open('Employee details updated Successfully');
                        SendEmailToAdmin($("#txtEmpName").val(), $("#txtEmpCode").val(), $("#txtDesignation").val());
                        //EmpId = response.message;
                       // AddLeaveHistory(PrvL, MatrnL, PaternL, SickL, Quarter1, Quarter2, Quarter3, Quarter4, PrvL, EmpId);
                        window.location = "ViewAllEmployee.aspx";
                    }
                    else {
                        $.alert.open({ 'warning': 'Error in Adding Employee. Please check the details you have entered.' });
                    }
                }
            });
        }

        function SendEmailToAdmin(strEmpName, strEmpCode, strDesignation) {
            alert('hi');
            var Params = {};
            Params.EmpName = strEmpName;
            Params.EmpCode = strEmpCode;
            Params.EmpDesignation = strDesignation;


            $.ajax({
                url: "/api/FIXZIService/EmployeeUpdateedEmail",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {
                }
            });
        }


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
    }
=======
﻿$(document).ready(function () {
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
        SpParams.strProc = "EmployeeAll_DrpDown";

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
                    }//for
                }//if
            }//response
        });

        $('#txtEmpName').attr('readonly', 'true');

        $('#txtEmpName').val('');
        $("#ddlEmpStatus").val('')
        $("#txtEmpCode").val('')
        $("#txtdesig").val('')
        $('#ddlGener').val('');
        $("#txtDOJ").val('')
        $("#txtDOB").val('')
        $("#txtqual").val('')
        $("#txtoff_mail").val('')
        $("#txtper_mail").val('')

        $("#txtmobile").val('')
        $("#txtperAddress").val('')
        $("#txtpresent").val('')
        $("#ddlMarital").val('')
        $("#txtspouse").val('')
        $("#txtsDOB").val('')
        //$("#ddlKidsCount").val(response.details[0].Employee_Designation)
        $("#txtKid1name").val('')
        $("#txtKid1DOB").val('')
        $("#txtKid2name").val('')
        $("#txtKid2DOB").val('')
        $("#txtKid3name").val('')

        $("#txtKid3DOB").val('')
        $("#txtparent_name").val('')
        $("#txtemer_person").val('')
        $("#ddlrelation").val('')
        $("#txt_emer_others").val('')
        $("#txtcon_num").val('')
        // alert(response.details[0].Employee_ReferalNumber);
        $("#txtprev_company").val('')
        $("#txtref_cont_per").val('')
        $("#txtrefnum").val('')
        // $("#txtref_cont_per").val(response.details[0].Employee_Designation)

        $("#txtbankname").val('')
        $("#txtacount_num").val('')
        $("#txtbranch_name").val('')
        $("#txtifsc_code").val('')
        $("#txtbgroup").val('')
        $("#txtpan_num").val('')
        $("#txtpass_num").val('')
        $("#txtadhar_num").val('')
        $("#txtasset").val('')
        $("#ddlLineManager").val('')


        $("#ddlEmployee").change(function () {

            UnAssignedEmpDropDown($("#ddlEmployee").val());
        });


       

        function UnAssignedEmpDropDown(EmployeeId) {
            //alert(EmployeeId);
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = EmployeeId;
            varProcParams[0] = varParams;
            varParams = {};
            var SpParams = {};
            SpParams.strProc = "Employee_DetailsById";
            SpParams.oProcParams = varProcParams;
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    //alert(response.details[0].empname);
                    $('#txtEmpName').val(response.details[0].empname)  ;
                    $("#ddlEmpStatus").val(response.details[0].Employee_Status)
                    $("#txtEmpCode").val(response.details[0].Employee_Code)
                    $("#txtdesig").val(response.details[0].Employee_Designation)
                    $('#ddlGener').val(response.details[0].Employee_Gender);
                    $("#txtDOJ").val(response.details[0].Employee_DateOfJoining)
                    $("#txtDOB").val(response.details[0].Employee_DateOfBirth)
                    $("#txtqual").val(response.details[0].Employee_Qualification)
                    $("#txtoff_mail").val(response.details[0].Employee_OfficialMailId)
                    $("#txtper_mail").val(response.details[0].Employee_PersonalMailId)

                    $("#txtmobile").val(response.details[0].Employee_ContactNo)
                    $("#txtperAddress").val(response.details[0].Employee_PermanentAddress)
                    $("#txtpresent").val(response.details[0].Employee_PresentAddress)
                    $("#ddlMarital").val(response.details[0].Employee_MaritalStatus)
                    $("#txtspouse").val(response.details[0].Employee_SpouseName)
                    $("#txtsDOB").val(response.details[0].Employee_SpouseDOB)
                    //$("#ddlKidsCount").val(response.details[0].Employee_Designation)
                    $("#txtKid1name").val(response.details[0].Employee_Kid1Name)
                    $("#txtKid1DOB").val(response.details[0].Employee_Kid1DOB)
                    $("#txtKid2name").val(response.details[0].Employee_Kid2Name)
                    $("#txtKid2DOB").val(response.details[0].Employee_Kid2DOB)
                    $("#txtKid3name").val(response.details[0].Employee_Kid3Name)

                    $("#txtKid3DOB").val(response.details[0].Employee_Kid3DOB)
                    $("#txtparent_name").val(response.details[0].Employee_FathersName)
                    $("#txtemer_person").val(response.details[0].Employee_EmergencyCntctName)
                    $("#ddlrelation").val(response.details[0].Employee_RelationwithEperson)
                    $("#txt_emer_others").val(response.details[0].Employee_ReferalCntctPerson)
                    $("#txtcon_num").val(response.details[0].Employee_EmergencyCntctNo)
                   // alert(response.details[0].Employee_ReferalNumber);
                    $("#txtprev_company").val(response.details[0].Employee_PreviousCompanyName)
                    $("#txtref_cont_per").val(response.details[0].Employee_ReferalCntctPerson)
                    $("#txtrefnum").val(response.details[0].Employee_ReferalNumber)
                   // $("#txtref_cont_per").val(response.details[0].Employee_Designation)

                    $("#txtbankname").val(response.details[0].Employee_BankName_and_Branch)
                    $("#txtacount_num").val(response.details[0].Employee_AccountNumber)
                    $("#txtbranch_name").val(response.details[0].Employee_BranchName)
                    $("#txtifsc_code").val(response.details[0].Employee_IFSCcode)
                    $("#txtbgroup").val(response.details[0].Employee_BloodGroup)
                    $("#txtpan_num").val(response.details[0].Employee_PanNo)
                    $("#txtpass_num").val(response.details[0].Employee_PassportNo)
                    $("#txtadhar_num").val(response.details[0].Employee_AadharNum)
                    $("#txtasset").val(response.details[0].Employee_AssetIdOfDesktop)
                    $("#ddlLineManager").val(response.details[0].Employee_LineManager)
                    if ($("#ddlMarital").val() == 'Single' || $("#ddlMarital").val() == 'Others') {
                        $("#txtspouse").hide();
                        $("#txtsDOB").hide();
                        $('#ddlKidsCount').hide();
                    }
                    else if ($("#ddlMarital").val() == 'Married') {
                        $("#txtspouse").show();
                        $("#txtsDOB").show();
                        $('#ddlKidsCount').show();
                    }
                    else {
                        $("#txtspouse").hide();
                        $("#txtsDOB").hide();
                        $('#ddlKidsCount').hide();
                    }

                    if (response.details[0].Employee_Kid3Name != '' && response.details[0].Employee_Kid3Name != 'NULL')
                    {
                        $("#ddlKidsCount").val(3);

                    }
                    if (response.details[0].Employee_Kid2Name != '' && response.details[0].Employee_Kid2Name != 'NULL') {
                        $("#ddlKidsCount").val(2);

                    }
                    if (response.details[0].Employee_Kid1Name != '' && response.details[0].Employee_Kid1Name != 'NULL') {
                        $("#ddlKidsCount").val('1');

                    }
                    
                   

                    if (response.details[0].Employee_Kid1Name == '' || response.details[0].Employee_Kid1Name =='NULL') {
                        $("#ddlKidsCount").val('0');

                    }
                    if ($('#ddlKidsCount').val() == '0') {
                        $('#txtKid1name').hide();
                        $('#txtKid1DOB').hide();
                        $('#txtKid2name').hide();
                        $('#txtKid2DOB').hide();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }
                    else if ($('#ddlKidsCount').val() == '1') {
                        $('#txtKid1name').show();
                        $('#txtKid1DOB').show();
                        $('#txtKid2name').hide();
                        $('#txtKid2DOB').hide();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }
                    else if ($('#ddlKidsCount').val() == '2') {
                        $('#txtKid1name').show();
                        $('#txtKid1DOB').show();
                        $('#txtKid2name').show();
                        $('#txtKid2DOB').show();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }

                    else if ($('#ddlKidsCount').val() == '3') {
                        $('#txtKid1name').show();
                        $('#txtKid1DOB').show();
                        $('#txtKid2name').show();
                        $('#txtKid2DOB').show();
                        $('#txtKid3name').show();
                        $('#txtKid3DOB').show();
                    }
                    else {
                        $('#txtKid1name').hide();
                        $('#txtKid1DOB').hide();
                        $('#txtKid2name').hide();
                        $('#txtKid2DOB').hide();
                        $('#txtKid3name').hide();
                        $('#txtKid3DOB').hide();
                    }


                }
            });

        }
       
        function adjustIframeHeight() {
            var $body = $('body'),
                $iframe = $body.data('iframe.fv');
            if ($iframe) {
                $iframe.height($body.height());

            }
        }


        $('#tab1').show();

        $('#btnNext1').click(function () {
            if ($('#txtEmpName').val() == '') {
                $.alert.open('Please Choose the Employee Name');
            }
            else if ($('#txtEmpName').val().indexOf(',') <= 0) {
                $.alert.open('Please enter the Employee Name like Firstname,Lastname ');
                //$.alert.open('Please enter the Employee Name1');
            }
            else if ($('#ddlEmpStatus').val() == 'Select the Employee Status') {
                $.alert.open('Please select the Employee Status');
            }
            else if ($('#ddlGener').val() == 'Select the Gender') {
                $.alert.open('Please select the Gender');
            }
            else if ($('#txtdesig').val() == '') {
                $.alert.open('Please enter the Designation');
            }
            else if ($('#txtDOJ').val() == '') {
                $.alert.open('Please enter the Joining Date');
            }
            else if ($('#txtDOB').val() == '') {
                $.alert.open('Please enter the Employee Date of Birth');
            }
            else if ($('#txtqual').val() == '') {
                $.alert.open('Please enter the Employee Qualification');
            }
            else if ($('#txtoff_mail').val() == '@techvantagesystems.com') {
                $.alert.open('Please enter a valid Official mail-id');
            }
            else if ($('#txtper_mail').val() == '@gmail.com') {
                $.alert.open('Please enter a valid Personal mail-id');
            }
            else if ($('#txtmobile').val() == '') {
                $.alert.open('Please enter Mobile Number');
            }
            else {
                $('#tab1').hide();
                $('#tab2').show();
            }
        });

        $('#btnNext2').click(function () {
            if ($('#txtperAddress').val() == '') {
                $.alert.open('Please enter the Permanent Address');
            }
            else if ($('#txtpresent').val() == '') {
                $.alert.open('Please enter the Present Address');
            }
            else if ($('#ddlMarital').val() == 'Select the marital status') {
                $.alert.open('Please select the Marital Status');
            }
            else if ($('#txtparent_name').val() == '') {
                $.alert.open('Please enter the Parent Name');
            }
            else {
                $('#tab2').hide();
                $('#tab3').show();
            }
        });

        $('#btnNext3').click(function () {
            if ($('#txtemer_person').val() == '') {
                $.alert.open('Please enter the Emergency Contact Person Name');
            }
            else if ($('#ddlrelation').val() == 'Select the Relationship with the Person') {
                $.alert.open('Please select the Relationship');
            }
            else if ($('#txtcon_num').val() == '') {
                $.alert.open('Please enter the Emergency Contact Number');
            }
            else {
                $('#tab3').hide();
                $('#tab4').show();
            }
        });

        $('#btnPrev1').click(function () {
            $('#tab2').hide();
            $('#tab1').show();
        });

        $('#btnPrev2').click(function () {
            $('#tab3').hide();
            $('#tab2').show();
        });
        $('#btnPrev3').click(function () {
            $('#tab4').hide();
            $('#tab3').show();
        });

        $('#btnSubmit').click(function () {
            if ($('#ddlLineManager').val() == 'Select Line Managers') {
                $.alert.open('Please select the Line Manager');
            }
            else {
                EmployeeAdd();
            }
        });
        $('#txt_emer_others').hide();
        var relation;
        $('#ddlrelation').change(function () {
            if ($('#ddlrelation').val() == 'Others') {
                $('#txt_emer_others').show();
                relation = $('#txt_emer_others').val();
            }
            else {
                $('#txt_emer_others').hide();
                relation = $('#ddlrelation').val();
            }
        });


        var Code;
        $('#ddlEmpStatus').change(function () {
            if ($("#ddlEmpStatus").val() == 'Temporary') {
                //alert($("#txtEmpCode").val());
                var content = 'T' + $("#txtEmpCode").val();
                $("#txtEmpCode").val(content);
            }
            else {

                var content = $("#txtEmpCode").val();
                content = content.substring(1, content.length);
                $("#txtEmpCode").val(content);
            }
        });
        $("#txtspouse").hide();
        $("#txtsDOB").hide();
        $('#ddlKidsCount').hide();

        $('#ddlMarital').change(function () {
            if ($("#ddlMarital").val() == 'Single' || $("#ddlMarital").val() == 'Others') {
                $("#txtspouse").hide();
                $("#txtsDOB").hide();
                $('#ddlKidsCount').hide();
            }
            else if ($("#ddlMarital").val() == 'Married') {
                $("#txtspouse").show();
                $("#txtsDOB").show();
                $('#ddlKidsCount').show();
            }
            else {
                $("#txtspouse").hide();
                $("#txtsDOB").hide();
                $('#ddlKidsCount').hide();
            }
        });
        $('#txtKid1name').hide();
        $('#txtKid1DOB').hide();
        $('#txtKid2name').hide();
        $('#txtKid2DOB').hide();
        $('#txtKid3name').hide();
        $('#txtKid3DOB').hide();

        $('#ddlKidsCount').change(function () {
            if ($('#ddlKidsCount').val() == '0') {
                $('#txtKid1name').hide();
                $('#txtKid1DOB').hide();
                $('#txtKid2name').hide();
                $('#txtKid2DOB').hide();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }
            else if ($('#ddlKidsCount').val() == '1') {
                $('#txtKid1name').show();
                $('#txtKid1DOB').show();
                $('#txtKid2name').hide();
                $('#txtKid2DOB').hide();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }
            else if ($('#ddlKidsCount').val() == '2') {
                $('#txtKid1name').show();
                $('#txtKid1DOB').show();
                $('#txtKid2name').show();
                $('#txtKid2DOB').show();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }

            else if ($('#ddlKidsCount').val() == '3') {
                $('#txtKid1name').show();
                $('#txtKid1DOB').show();
                $('#txtKid2name').show();
                $('#txtKid2DOB').show();
                $('#txtKid3name').show();
                $('#txtKid3DOB').show();
            }
            else {
                $('#txtKid1name').hide();
                $('#txtKid1DOB').hide();
                $('#txtKid2name').hide();
                $('#txtKid2DOB').hide();
                $('#txtKid3name').hide();
                $('#txtKid3DOB').hide();
            }
        });

        var Today = new Date();

        function monthDiff(d1, d2) {
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth() + 1;
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
        }

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
        $("#txtsDOB").datepicker();
        $("#txtDOJ").datepicker();
        $("#txtDOB").datepicker();
        $("#txtKid1DOB").datepicker();
        $("#txtKid2DOB").datepicker();
        $("#txtKid3DOB").datepicker();



        function EmployeeAdd() {

            var varProcParams = new Array();


            var varParams = {};
            varParams.strKey = "Employee_Code";
            varParams.strArgmt = $("#txtEmpCode").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Name";
            varParams.strArgmt = $("#txtEmpName").val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Status";
            varParams.strArgmt = $("#ddlEmpStatus").val();
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Designation";
            varParams.strArgmt = $("#txtdesig").val();
            varProcParams[3] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_DOJ";
            varParams.strArgmt = $("#txtDOJ").val();
            varProcParams[4] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_DOB";
            varParams.strArgmt = $("#txtDOB").val();
            varProcParams[5] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Qualification";
            varParams.strArgmt = $("#txtqual").val();
            varProcParams[6] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Officialmail";
            varParams.strArgmt = $("#txtoff_mail").val();
            varProcParams[7] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Personalmail";
            varParams.strArgmt = $("#txtper_mail").val();
            varProcParams[8] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PhoneNumber";
            varParams.strArgmt = $("#txtmobile").val();
            varProcParams[9] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_AssetID";
            varParams.strArgmt = $("#txtasset").val();
            varProcParams[10] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_LineManager";
            varParams.strArgmt = $("#ddlLineManager").val();
            varProcParams[11] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_MaritalStatus";
            varParams.strArgmt = $("#ddlMarital").val();
            varProcParams[12] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_SpouseName";
            varParams.strArgmt = $("#txtspouse").val();
            varProcParams[13] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_SpouseDOB";
            varParams.strArgmt = $("#txtsDOB").val();
            varProcParams[14] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid1Name";
            varParams.strArgmt = $("#txtKid1name").val();
            varProcParams[15] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid1DOB";
            varParams.strArgmt = $("#txtKid1DOB").val();
            varProcParams[16] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid2Name";
            varParams.strArgmt = $("#txtKid2name").val();
            varProcParams[17] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid2DOB";
            varParams.strArgmt = $("#txtKid2DOB").val();
            varProcParams[18] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid3Name";
            varParams.strArgmt = $("#txtKid3name").val();
            varProcParams[19] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Kid3DOB";
            varParams.strArgmt = $("#txtKid3DOB").val();
            varProcParams[20] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PermanentAddress";
            varParams.strArgmt = $("#txtperAddress").val();
            varProcParams[21] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PresentAddress";
            varParams.strArgmt = $("#txtpresent").val();
            varProcParams[22] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Employee_ParentName";
            varParams.strArgmt = $("#txtparent_name").val();
            varProcParams[23] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BloodGroup";
            varParams.strArgmt = $("#txtbgroup").val();
            varProcParams[24] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_EmergencyContactPerson";
            varParams.strArgmt = $("#txtemer_person").val();
            varProcParams[25] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Relation";
            varParams.strArgmt = relation;
            varProcParams[26] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_EContactNumber";
            varParams.strArgmt = $("#txtcon_num").val();
            varProcParams[27] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PreviousCompanyAddress";
            varParams.strArgmt = $("#txtprev_company").val();
            varProcParams[28] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_ReferalContactPerson";
            varParams.strArgmt = $("#txtref_cont_per").val();
            varProcParams[29] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_ReferalNumber";
            varParams.strArgmt = $("#txtrefnum").val();
            varProcParams[30] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BankName";
            varParams.strArgmt = $("#txtbankname").val();
            varProcParams[31] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_AccountNumber";
            varParams.strArgmt = $("#txtacount_num").val();
            varProcParams[32] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_BranchName";
            varParams.strArgmt = $("#txtbranch_name").val();
            varProcParams[33] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_IFSCcode";
            varParams.strArgmt = $("#txtifsc_code").val();
            varProcParams[34] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PassportNumber";
            varParams.strArgmt = $("#txtpass_num").val();
            varProcParams[35] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_PanNumber";
            varParams.strArgmt = $("#txtpan_num").val();
            varProcParams[36] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_AdharNumber";
            varParams.strArgmt = $("#txtadhar_num").val();
            varProcParams[37] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Gender";
            varParams.strArgmt = $("#ddlGener").val();
            varProcParams[38] = varParams;
            varParams = {};

            varParams.strKey = "employeeID";
            varParams.strArgmt = $("#ddlEmployee").val();
            varProcParams[39] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Employee_Update";
            SpParams.oProcParams = varProcParams;

            

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.status == 'SUCCESS') {
                        $.alert.open('Employee details updated Successfully');
                        SendEmailToAdmin($("#txtEmpName").val(), $("#txtEmpCode").val(), $("#txtDesignation").val());
                        //EmpId = response.message;
                       // AddLeaveHistory(PrvL, MatrnL, PaternL, SickL, Quarter1, Quarter2, Quarter3, Quarter4, PrvL, EmpId);
                        window.location = "ViewAllEmployee.aspx";
                    }
                    else {
                        $.alert.open({ 'warning': 'Error in Adding Employee. Please check the details you have entered.' });
                    }
                }
            });
        }

        function SendEmailToAdmin(strEmpName, strEmpCode, strDesignation) {
            alert('hi');
            var Params = {};
            Params.EmpName = strEmpName;
            Params.EmpCode = strEmpCode;
            Params.EmpDesignation = strDesignation;


            $.ajax({
                url: "/api/FIXZIService/EmployeeUpdateedEmail",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {
                }
            });
        }


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
    }
>>>>>>> d6486f5aee28eb05216245c3355998f811103a67
});