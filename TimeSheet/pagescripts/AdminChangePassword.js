$(document).ready(function () {
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var Id = localStorage.getItem('AdminId');
        $("#txtOldPassword").val('');


        $('#btnChange').click(function () {


            if ($("#txtOldPassword").val() == '' || $("#txtNewPassword").val() == '' || $("#tctConfirmPassword").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please fill all the fields' });
            }

            else if ($("#txtNewPassword").val().length < 6 || $("#txtNewPassword").val().length > 15) {
                $.alert.open({ type: 'warning', content: 'Password Should be maximum 15 charcter and minimum 6 .' });

            }

            else if ($("#txtNewPassword").val() != $('#tctConfirmPassword').val()) {
                $.alert.open({ type: 'warning', content: 'Password does not match. Try again.' });
                $('#tctConfirmPassword').val('');

            }
            else if (Id == null) {
                $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login' });

                setTimeout(function () {
                    window.location = "login.html"
                }, 2000);

            }

            else {
                var varProcParams = new Array();




                var varParams = {};
                varParams.strKey = "Employee_ID";
                varParams.strArgmt = Id;
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Employee_OldPassword";
                varParams.strArgmt = $("#txtOldPassword").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Employee_NewPassword";
                varParams.strArgmt = $("#txtNewPassword").val();
                varProcParams[2] = varParams;
                varParams = {};




                var SpParams = {};
                SpParams.strProc = "Employee_ChangePassword";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            $.alert.open({ type: 'info', content: '  Your Password has Changed Successfully !' });

                            $("#txtOldPassword").val('');
                            $("#txtNewPassword").val('');
                            $("#tctConfirmPassword").val('');

                            setTimeout(function () {
                                window.location = "login.html"
                            }, 4000);


                        }
                        else if (response.status == 'Failed') {
                            $.alert.open({ type: 'warning', content: 'Sorry! That seems to be an invalid password.' });
                        }
                        else {
                            $.alert.open({ type: 'warning', content: 'Sorry! Error in changing Password.  Please try again' });
                        }
                    }
                });
            }
        });


        $('#btnCancel').click(function () {
            $("#txtOldPassword").val('');
            $("#txtNewPassword").val('');
            $("#tctConfirmPassword").val('');
        });
    }
});