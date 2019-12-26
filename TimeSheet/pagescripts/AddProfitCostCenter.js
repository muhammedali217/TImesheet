$(document).ready(function () {
    $("#lblRule").hide();
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
        LoadOwner();
        function LoadOwner() {
            var SpParams = {};
            SpParams.strProc = "Get_OwnerList";

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    $('#ddlOwner').empty();
                    if (response != null) {
                        for (var i = 0; i < response.length; i++) {
                            $("#ddlOwner").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                        }
                    }
                }
            });
        }

        $("#ddlType").change(function () {
            if ($("#ddlType").val !== '') {
                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "Type";
                varParams.strArgmt = $('#ddlType').val();
                varProcParams[0] = varParams;
                varParams = {};

                var SpParams = {};
                SpParams.strProc = "GetProfitCost_LstInsertedID";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        $("#lblRule").show();
                        $("#txtProfitcode").val(response.details[0].DETAILS);
                        if (response.message === 'Cost')
                            $("#lblRule").text('Complete the Cost Center code with Project Name');
                        else if (response.message === 'Profit')
                            $("#lblRule").text('Complete the Profit Center code with CustomerName_ProjectName');
                    }
                });
            }
        });

        $('#btnAdd').click(function () {
            var profitCode = $("#txtProfitcode").val();
            var lastChar = profitCode.substr(profitCode.length - 1);
            if ($("#txtProfitcode").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Enter Profit/Cost Center Code' });
            }
            else if ($("#ddlType").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Select Type' });
            }
            else if ($("#ddlOwner").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Select Owner' });
            }
            else if (lastChar === '_') {
                $.alert.open({ type: 'warning', content: 'Please suffix Code with customer name/project name' });
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
                            $("#lblRule").text('');
                            $("#lblRule").hide();
                        }
                    }
                });
            }
        });
    }
});
