$(document).ready(function () {
    
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
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

        LoadProjectTask();
        function LoadProjectTask() {

            var varProcParams = new Array();
            var SpParams = {};
            SpParams.strProc = "SubTasksViewAll";

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.details != null) {

                        for (var j = 0; j < response.details.length; j++) {
                            $('<input type="checkbox" class="ckb" name="dynradio" value=' + (response.details[j].SubTasks_Id) + '>&nbsp;&nbsp;&nbsp;&nbsp;' + (response.details[j].SubTasks_WBS) + '</input><br/>').appendTo('#tblPopulateChkBox');
                        }
                    }
                }
            });


        }




        $('#btnAssign').click(function () {

            var tasksId = [];
            $.each($("input[name='dynradio']:checked"), function () {
                tasksId.push($(this).val());
            });
            //alert("My tasks are: " + favorite.join(", "));
            if ($("#ddlProject").val() == '' || tasksId.toString() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose the project and Tasks to be assign.' });
            }
            else {
                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "SubTasksIdArray";
                varParams.strArgmt = tasksId.toString();
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "ProjectId";
                varParams.strArgmt = $("#ddlProject").val();
                varProcParams[1] = varParams;
                varParams = {};


                var SpParams = {};
                SpParams.strProc = "SubTasks_AssignToProject";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            $.alert.open({ type: 'info', content: 'Project tasks assigned successfully.' });
                            //$("#btnAssignTask").show();
                            setTimeout(function () {
                                window.location = "viewprojecttasks.aspx"
                            }, 1000);
                            $("#ddlProject").val("");
                            $("#ddlEmployee").select2("val", "");
                            $("#lblshortName").text('');


                        }
                    }
                });
            }

        });




        $("#ddlProject").change(function () {

            jQuery('#tblPopulateChkBox').html('');
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#ddlProject").val();
            varProcParams[0] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Projects_RemainingUnAssignedTask";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.details != null) {

                        for (var j = 0; j < response.details.length; j++) {
                            $('<input type="checkbox" class="chb" name="dynradio" value=' + (response.details[j].SubTasks_Id) + '>&nbsp;&nbsp;&nbsp;&nbsp;' + (response.details[j].SubTasks_WBS) + '</input><br/>').appendTo('#tblPopulateChkBox');
                        }
                    }

                    if (response.details.length == '0') {
                        $('<label id="lbl"></label>').appendTo('#tblPopulateChkBox');
                        $('#lbl').text();
                        $('#lbl').css("fontSize", "15px");
                        $('#lbl').css("color", "green");
                        $("#lbl").text("No pending tasks to be assigned");
                        $('<button type="button" class="btn btn-primary" style="margin-top: 25px; margin-bottom:30px;margin-left:50px;" id="btnAssignNewTask">Assign New Task</button>').appendTo('#tblPopulateChkBox');
                        $('#btnAssign').hide();
                        $('#btnAssignNewTask').click(function () {
                            window.location = 'NewTask2Project.aspx';
                        });
                    }
                }
            });
        });

    }
    
});