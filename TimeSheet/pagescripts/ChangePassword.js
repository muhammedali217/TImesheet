$(document).ready(function () {
    //alert("hi");
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
        $("#txtOldPassword").val('');
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        if (Localvalue == 126 || Localvalue == 2 || Localvalue == 12) {

            document.getElementById('Assetmenu').style.display = 'block';


            //document.getElementById('ddtopmenubar').style.display = 'block';
        }
        else {
            document.getElementById('Assetmenu').style.display = 'none';

        }

        $("#lblName").text(name);



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
            else if (Localvalue == null || name == null) {
                $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login' });

                setTimeout(function () {
                    window.location = "login.html"
                }, 2000);

            }

            else {
                var varProcParams = new Array();




                var varParams = {};
                varParams.strKey = "Employee_ID";
                varParams.strArgmt = Localvalue;
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
                            $.alert.open({ type: 'info', content: name + ' ! Your Password has Changed Successfully.' });

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