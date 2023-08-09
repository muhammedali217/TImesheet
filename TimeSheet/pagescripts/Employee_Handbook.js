$().ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('EmployeeId');
        window.location.href = "login.html";
    });
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {

        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        $("#lblName").text(name);
        IsAccepted(Localvalue);

        $('#btnSubmit').click(function () {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_Id";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;

            var SpParams = {};
            SpParams.strProc = "Employee_HB_Status_Update";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {

                       // $.alert.open({ type: 'info', content: 'Thank You' });
                        IsAccepted(Localvalue);
                    }
                }
            });




        });


    }

    function IsAccepted(employeeID) {
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Employee_Id";
        varParams.strArgmt = employeeID;
        varProcParams[0] = varParams;

        var SpParams = {};
        SpParams.strProc = "Employee_Handbook_Status";
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

                        if ((response.details[j].Employee_Accepted_status).toString() == "0") {

                            //document.getElementById("btnSubmit").disabled = true;

                            $("#btnSubmit").show();
                            //$(":btnSubmit").attr("disabled", true);
                            ////var btn = document.getElementById("btnSubmit");

                            ////btn.enabled = false;

                            }
                    else
                        {

                            $("#btnSubmit").hide();
                            //document.getElementById("btnSubmit").disabled = false;


                        }

                    }

                }
            }
        });
    }


});
