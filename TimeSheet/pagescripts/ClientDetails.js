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

        $('#btnSubmit').click(function () {
            
            if ($("#txtclientId").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Client ID.' });
            }
            else if ($("#txtclientName").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter client Name.' });
            }
            else if ($("#ddlstatus").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Select Status.' });
            }
            else {
                var varProcParams = new Array();


                var varParams = {};
                varParams.strKey = "Client_Id";
                varParams.strArgmt = $("#txtclientId").val();
                varProcParams[0] = varParams;
                varParams = {};

                    
                var varParams = {};
                varParams.strKey = "Client_Name";
                varParams.strArgmt = $("#txtclientName").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Client_Remarks";
                varParams.strArgmt = $("#txtDescription").val();
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Client_Status";
                varParams.strArgmt = $("#ddlstatus").val();
                varProcParams[3] = varParams;
                varParams = {};



                var SpParams = {};
                SpParams.strProc = "Client_Add";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            $.alert.open({ type: 'info', content: 'Client Added Successfully.' });

                            setTimeout(function () {
                                window.location = "ViewClientDetails.aspx"
                            }, 1000);


                        }//if
                        else {
                            $.alert.open({ type: 'warning', content: 'Please check the details you have entered.' });
                        }
                    }

                });
            }
        });//brnClick


        $('#btnCancel').click(function () {
            //alert("cancel");
            location.reload(true);
        });

    }

});
