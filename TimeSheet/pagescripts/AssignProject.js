$(document).ready(function () {
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

        var SpParams = {};
        SpParams.strProc = "Projects_DrpDown";

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

                            $("#ddlProject").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }//for
                }//if
            }//response
        });//ajax

        //var ProjectChoosen = GetQueryString("ProjectChoosen");
        //function getShortName() {

        //    var varProcParams = new Array();
        //    var varParams = {};
        //    varParams.strKey = "Projects_Name";
        //    varParams.strArgmt = ProjectChoosen;
        //    varProcParams[0] = varParams;
        //    varParams = {};

        //    var SpParams = {};
        //    SpParams.strProc = "Projects_GetShortNameByPrjct";
        //    SpParams.oProcParams = varProcParams;

        //    $.ajax({
        //        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
        //        type: "POST",
        //        contentType: "application/json;charset=utf-8",
        //        dataType: "json",
        //        data: JSON.stringify(SpParams),
        //        success: function (response) {

        //            $('#lblshortName').css("fontSize", "15px");
        //            $('#lblshortName').css("color", "green");
        //            $("#lblshortName").text(response.details[0].Projects_ShortName);

        //        }
        //    });
        //}


        //if (ProjectChoosen != '') {
        //    $("#ddlProject option:selected").text(ProjectChoosen);
        //    getShortName();

        //}
        //$('#ddlEmployee').select2({
        //    placeholder: " ",
        //    allowClear: true
        //});

        function UnAssignedEmpDropDown(projectid) {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_Id";
            varParams.strArgmt = projectid;
            varProcParams[0] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Projects_RemainingUnAssignedEmpl";
            SpParams.oProcParams = varProcParams;

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

        $("#ddlProject").change(function () {

            UnAssignedEmpDropDown($("#ddlProject").val());
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#ddlProject").val();
            varProcParams[0] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Projects_GetShortName";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    //alert(response.details[0].Projects_ShortName);
                    $('#lblshortName').css("fontSize", "15px");
                    $('#lblshortName').css("color", "green");
                    $("#lblshortName").text(response.details[0].Projects_ShortName);
                }
            });
        });

        $("#btnSubmit").click(function () {

            var empId = $("#ddlEmployee").val();
            if ($("#ddlProject").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose the project and atleast assign one employee.' });
            }

            else if ($("#ddlEmployee").val() == '' || empId == null) {
                $.alert.open({ type: 'warning', content: 'Please Assign atleast one employee.' });
            }
            else if ($("#txtinvolvement").val() == '' ) {
                $.alert.open({ type: 'warning', content: 'Please enter Involvement % .' });
            }

            else {
                alert($("#txtinvolvement").val());
                //alert(empId);
                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "EmployeeIdArray";
                varParams.strArgmt = empId.toString();
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ProjectId";
                varParams.strArgmt = $("#ddlProject").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Involvementp";
                varParams.strArgmt = $("#txtinvolvement").val();
                varProcParams[2] = varParams;
                varParams = {};
                

                var SpParams = {};
                SpParams.strProc = "Project_AssignEmployees";
                SpParams.oProcParams = varProcParams;


                //alert($("#ddlProject").val());
                //alert($("#ddlEmployee").val());

                var project = $('#ddlProject :selected').text();

                $.alert.open('Are you sure to assign above employees to ' + project + '?', { 1: 'Yes', 2: 'No' }, function (button) {
                    if (button == 1) {
                        $.ajax({
                            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                            type: "POST",
                            contentType: "application/json;charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify(SpParams),
                            success: function (response) {
                                if (response.status == 'SUCCESS') {
                                    $.alert.open({ type: 'info', content: 'Project assigned successfully.' });
                                    setTimeout(function () {
                                        window.location = "viewprojectemployee.aspx"
                                    }, 1000);
                                    //$("#btnAssignTask").show();
                                    $("#ddlProject").val("");
                                    $("#ddlEmployee").select2("val", "");
                                    $("#lblshortName").text('');


                                }
                                else if (response.status == 'FAILED') {
                                    $.alert.open({ type: 'warning', content: 'These employees already in this Project. Please assign others' });
                                    $("#ddlEmployee").select2("val", "");

                                }
                                else {
                                    $.alert.open({ type: 'warning', content: 'Error in assigning Employees. Try again.' });
                                }
                            }//response
                        });//ajax
                    }//if
                    else if (button == 2) {

                        $("#ddlEmployee").select2("val", "");
                        EmpDropDown();

                    }
                });//alert
            }
        });


        $("#btnCancel").click(function () {
            $("#ddlProject").val("");
            $("#ddlEmployee").select2("val", "");
            EmpDropDown();

        });

        $("#btnAssignTask").click(function () {
            window.location = "AssignSubTasks.aspx";
        });



        function GetQueryString(varName) {
            varName = varName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + varName + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        } //GetQueryString




    }
    

});