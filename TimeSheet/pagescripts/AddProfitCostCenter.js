$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('SuperAdminSession');
        window.location.href = "login.html";
    });
    var Localvaluee = localStorage.getItem('SuperAdminSession');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#btnAdd').click(function () {
            if ($("#txtProfitcode").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Enter Profit/Cost Center Code' });
            }
            else if ($("#ddlType").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Select Type' });
            }
            else if ($("#ddlOwner").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Select Owner' });
            }
            else {
                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "Code";
                varParams.strArgmt = $("#txtProfitcode").val();
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Type";
                varParams.strArgmt = $("#ddlType").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Owner";
                varParams.strArgmt = $("#ddlOwner").val();
                varProcParams[2] = varParams;
                varParams = {};

                var SpParams = {};
                SpParams.strProc = "Add_ProfitCostCenter";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status === 'SUCCESS') {
                            $.alert.open({ type: 'success', content: 'Profit/Cost Center Code added Successfully' });
                            $("#txtProfitcode").val('');
                            $("#ddlType").val('');
                            $("#ddlOwner").val('');
                        }
                    }
                });
            }
        });
    }
});
