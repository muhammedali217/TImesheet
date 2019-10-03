$(document).ready(function () {
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $("#txtTasksFrom").val('');
        $("#txtTasksTo").val('');
        $("#txtTasksFrom").datepicker();
        $("#txtTasksTo").datepicker();
        $("#ddlEmployee").val("");
        ProjectDropDown();
        function ProjectDropDown() {
            $("#ddlEmployee").val('');
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
        }

        $("#ddlProject").change(function () {

            $("#ddlEmployee").val('');
            $("#ddlEmployee").html("");
            $('#ddlEmployee').empty();
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#ddlProject").val();
            varProcParams[0] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Projects_AssignedEmpDrpDown";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    //if(response[0].DisplayMember=='' || response[0].DisplayMember==null)
                    //{
                    //alert(response[0].DisplayMember);

                    //}
                    if (response.length == 0) {
                        document.getElementById('ddlEmployee').innerHTML = '<option value="" selected="true" style="display: none;">No Employees Assigned</option>';
                    }

                    if (response != null && response.length > 0) {
                        document.getElementById('ddlEmployee').innerHTML = '<option value="" selected="true" style="display: none;">Select Employee</option>';
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                    //else {
                    //    $("#ddlEmployee").append(new Option("hi", "response[i].ValueMember"));
                    //}
                }//response
            });//ajax

        });

        $(".js-example-basic-multiple").select2();
        $(".js-example-theme-multiple").select2({
            theme: "classic"
        });

        $("#ddlEmployee").change(function () {

            $("#ddlSubTasks").select2("val", "");
            $("#ddlSubTasks").val('');
            $("#ddlSubTasks").html("");
            $('#ddlSubTasks').empty();

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#ddlProject").val();
            varProcParams[0] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Employee_Id";
            varParams.strArgmt = $("#ddlEmployee").val();
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Employee_UnAssignedTask";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {


                    if (response != null && response.length > 0) {
                        //document.getElementById('ddlSubTasks').innerHTML = '<option value="" selected="true" style="display: none;">Select Employee</option>';
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlSubTasks").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                    //else {
                    //    $("#ddlEmployee").append(new Option("hi", "response[i].ValueMember"));
                    //}
                }//response
            });//ajax

        });



        $("#btnAssign").click(function () {
            var SubTasksId = $("#ddlSubTasks").val();
            //alert(SubTasksId);
            //alert($("#ddlEmployee").val());
            if ($("#ddlProject").val() == '' || SubTasksId == null || $("#ddlEmployee").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose project and assign atleast 1 task to employee.' });
            }
            else {

                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "SubTasksIdArray";
                varParams.strArgmt = SubTasksId.toString();
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ProjectId";
                varParams.strArgmt = $("#ddlProject").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Employee_ID";
                varParams.strArgmt = $("#ddlEmployee").val();
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ProjectSubTaskEmp_Hours";
                varParams.strArgmt = $("#txtHours").val();
                varProcParams[3] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ProjectSubTaskEmp_SDate";
                varParams.strArgmt = $("#txtTasksFrom").val();
                varProcParams[4] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ProjectSubTaskEmp_EDate";
                varParams.strArgmt = $("#txtTasksTo").val();
                varProcParams[5] = varParams;
                varParams = {};

                var SpParams = {};
                SpParams.strProc = "SubTasks_AssignEmployees";
                SpParams.oProcParams = varProcParams;

                //alert(varParams);
                //alert($("#ddlProject").val());
                //alert($("#ddlEmployee").val());

                var employee = $('#ddlEmployee :selected').text();

                $.alert.open('Are you sure to assign these task to ' + employee + '?', { 1: 'Yes', 2: 'No' }, function (button) {
                    if (button == 1) {
                        $.ajax({
                            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                            type: "POST",
                            contentType: "application/json;charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify(SpParams),
                            success: function (response) {
                                if (response.status == 'SUCCESS') {
                                    $.alert.open({ type: 'info', content: 'Sub Tasks assigned successfully.' });
                                    $("#ddlSubTasks").select2("val", "");
                                    $("#ddlSubTasks").val('');
                                    $("#ddlSubTasks").html("");
                                    $('#ddlSubTasks').empty();
                                    $("#ddlEmployee").val('');
                                    $("#ddlEmployee").html("");
                                    $('#ddlEmployee').empty();
                                    $("#ddlProject").val('');
                                    setTimeout(function () {
                                        window.location = "viewprojectemployee.aspx"
                                    }, 1000);

                                }
                                else {
                                    $.alert.open({ type: 'warning', content: 'Error in assigning . Try again.' });
                                }//else
                            }//response
                        });//ajax
                    }//if

                    else if (button == 2) {

                        $("#ddlSubTasks").select2("val", "");
                        $("#ddlSubTasks").val('');
                        $("#ddlSubTasks").html("");
                        $('#ddlSubTasks').empty();

                    }

                });//alert
            }//else
        });


        $("#btnCancel").click(function () {
            $("#ddlProject").val("");
            $("#ddlSubTasks").select2("val", "");
            $("#ddlEmployee").html("");
            $('#ddlEmployee').empty();
            $("#ddlProject").val('');


        });

        $('#txtTasksFrom').on('change', function () {
            $('.datepicker').hide();
        });
        $('#txtTasksTo').on('change', function () {
            $('.datepicker').hide();
        });

        function parseDate(str) {
            var mdy = str.split('/')
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        }

        function daydiff(first, second) {
            return Math.round((second - first) / (1000 * 60 * 60 * 24));
        }

        var day;

        $('#txtTasksTo').on('change', function () {
            day = 1 + daydiff(parseDate($('#txtTasksFrom').val()), parseDate($('#txtTasksTo').val()));
            if (day <= 0) {
                $.alert.open({ type: 'warning', content: 'Please select the valid date' });
                $('#txtTasksTo').val('');
            }

        });

    }
});