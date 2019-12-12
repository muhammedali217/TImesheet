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


        $("#btnSubmit").click(function () {

            if ($("#ddlProject").val() == '') {

                $.alert.open({ type: 'warning', content: 'Please choose a Project.' });

            }

            else if ($("#txtTask").val() == '') {

                $.alert.open({ type: 'warning', content: 'Please Enter Task.' });


            }

            else {
                var varProcParams = new Array();
                var varParams = {};
                varParams.strKey = "Projects_ID";
                varParams.strArgmt = $("#ddlProject").val();
                varProcParams[0] = varParams;
                varParams = {};

                varParams.strKey = "SubTasks";
                varParams.strArgmt = $("#txtTask").val();
                varProcParams[1] = varParams;
                varParams = {};


                varParams.strKey = "SubTasks_WBS";
                varParams.strArgmt = $("#txtWBS").val();
                varProcParams[2] = varParams;
                varParams = {};


                var SpParams = {};
                SpParams.strProc = "SubTasks_AddToProject";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            $.alert.open({ type: 'info', content: 'Task added successfully.' });
                            //window.location = "viewprojecttasks.aspx";
                            setTimeout(function () {
                                window.location = "viewprojecttasks.aspx"
                            }, 1000);
                            $("#txtTask").val('');
                            $("#ddlProject").val('');

                        }
                        else if (response.status == 'FAILED') {

                            $.alert.open({ type: 'warning', content: 'This Task already assigned to this Project.' });
                        }

                        else {

                            $.alert.open({ type: 'warning', content: 'Something Wrong. Try again later' });
                        }

                    }
                });
            }
        });

    }
});