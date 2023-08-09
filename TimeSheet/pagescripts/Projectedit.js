$(document).ready(function () {

    //alert(123);

    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {

        //alert(456);
         $('#txtProjectName').on('change', function () {

            var projectname = $('#txtProjectName').val();
            var ShortName = projectname.toUpperCase();
            //$('#txtShortName').val(ShortName);
            var res = ShortName.substring(0, 5);
            //alert(res + RandomNumber());
            var random = Math.floor((Math.random() * 10000) + 1).toString();
            $('#txtShortName').val(res + random);
            //alert(res + random);
        });
        EmpDropDown();
        $("#txtPrjectFrom").datepicker();

        $("#txtPrjectTo").datepicker();
        var ProjectId = GetQueryString('Projects_ID');

        //alert(ProjectId);
        debugger
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Projects_ID";
        varParams.strArgmt = ProjectId;
        varProcParams[0] = varParams;
        varParams = {};

        //alert(567);

        var SpParams = {};
        SpParams.strProc = "ProjectInfo_ViewSingle";
        SpParams.oProcParams = varProcParams;


        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                debugger
                console.log(response);
                console.log(response.details[0].Projects_Sponsor);
                $('#txtProjectName').val(response.details[0].Projects_Name);
                $('#txtShortName').val(response.details[0].Projects_ShortName);
                $('#txtPrjectFrom').val(response.details[0].Projects_BeginDate);
                $('#txtPrjectTo').val(response.details[0].Projects_EndDate);
                $('#txtClientName').val(response.details[0].Projects_ClientName);
                $('#txtDescription').val(response.details[0].Projects_Description);
                $('#txtDuration').val(response.details[0].Projects_Duration);              
                $("#ddlEmployee").append(response.details[0].Projects_Sponsor);
                $('#txtVersioncontrol').val(response.details[0].Projects_VersionControl);
                $('#txtProgramminglanguages').val(response.details[0].Projects_ProgrammingLanguages);
                $('#txtPackagesused').val(response.details[0].Projects_PackagesUsed);
                $('#txtFramework').val(response.details[0].Projects_Framework);
                $('#txtHostingserver').val(response.details[0].Projects_HostingServer);
                $('#txtDatabase').val(response.details[0].Projects_Database);
                $('#txtThirdparty').val(response.details[0].Projects_ThirdPartyTools);
                $('#txtSecurity').val(response.details[0].Projects_Security);
                $('#txtPortsused').val(response.details[0].Projects_PortsUsed);


            }

        });

        function GetQueryString(varName) {           
            varName = varName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + varName + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        } //GetQueryString

        //To populate the drop down

        function EmpDropDown() {
            var SpParams = {};
            SpParams.strProc = "Employee_DrpDownIncludesAdmin";


            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    $('#ddlEmployee').empty();

                    if (response != null) {
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                }//response
            });//ajax
        }



        $('#btnupdate').click(function () {

            //alert($("#txtPrjectFrom").val());
            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Project_Name";
            varParams.strArgmt = $("#txtProjectName").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Project_ShortName";
            varParams.strArgmt = $("#txtShortName").val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Project_StartDate";
            varParams.strArgmt = $("#txtPrjectFrom").val();
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Project_EndDate";
            varParams.strArgmt = $("#txtPrjectTo").val();
            varProcParams[3] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Project_ClientName";
            varParams.strArgmt = $("#txtClientName").val();
            varProcParams[4] = varParams;
            varParams = {};
            

            var varParams = {};
            varParams.strKey = "Project_Description";
            varParams.strArgmt = $("#txtDescription").val();
            varProcParams[5] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_Duration";
            varParams.strArgmt = $("#txtDuration").val();
            varProcParams[6] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Projects_Sponsor";
            varParams.strArgmt = $("#ddlEmployee option:selected").text();
            varProcParams[7] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_VersionControl";
            varParams.strArgmt = $("#txtVersioncontrol").val();
            varProcParams[8] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_ProgrammingLanguages";
            varParams.strArgmt = $("#txtProgramminglanguages").val();
            varProcParams[9] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_PackagesUsed";
            varParams.strArgmt = $("#txtPackagesused").val();
            varProcParams[10] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_Framework";
            varParams.strArgmt = $("#txtFramework").val();
            varProcParams[11] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_HostingServer";
            varParams.strArgmt = $("#txtHostingserver").val();
            varProcParams[12] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_Database";
            varParams.strArgmt = $("#txtDatabase").val();
            varProcParams[13] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_ThirdPartyTools";
            varParams.strArgmt = $("#txtThirdparty").val();
            varProcParams[14] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_Security";
            varParams.strArgmt = $("#txtSecurity").val();
            varProcParams[15] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_PortsUsed";
            varParams.strArgmt = $("#txtPortsused").val();
            varProcParams[16] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = ProjectId;
            varProcParams[17] = varParams;
            varParams = {};

           


            var SpParams = {};
            SpParams.strProc = "Project_EditDetails";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {
                        $.alert.open({ type: 'info', content: 'Project details updated successfully.' });

                        setTimeout(function () {
                            window.location = "viewallproject.aspx"
                        }, 1000);
                    }
                    else if (response.status == 'FAILED') {
                        $.alert.open({ type: 'warning', content: 'Sorry. ' + response.message });
                    }
                }
            });


        });

    }

 });




