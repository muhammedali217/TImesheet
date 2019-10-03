$(document).ready(function () {
    Employee_Disable_Dropdwn();

    $('#btnDisable').click(function () {

        if ($("#ddlEmployee").val() == null) {
            $.alert.open({ type: 'warning', content: 'Please choose an employee to disable' });
        }
        else if ($("#txt_DOR").val() == "") {
            $.alert.open({ type: 'warning', content: 'Please enter the Relieving date of the Employee' });
        }
        else if ($("#txt_Remarks").val() == "") {
            $.alert.open({ type: 'warning', content: 'Please enter Remarks of the Employee' });
        }
        else {
            var empId = $("#ddlEmployee").val();

            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = empId;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "DOR";
            varParams.strArgmt = $("#txt_DOR").val();
            varProcParams[1] = varParams;
            varParams = {};
            console.log($("#txt_DOR").val());

            var varParams = {};
            varParams.strKey = "Remarks";
            varParams.strArgmt = $("#txt_Remarks").val();
            varProcParams[2] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "Employee_Disable";
            SpParams.oProcParams = varProcParams;

           // var project = $('#ddlEmployee :selected').text();
            
            $.alert.open('Are you sure to Disable the Selected Employee?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    $.ajax({
                        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                        type: "POST",
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        data: JSON.stringify(SpParams),
                        success: function (response) {                         
                            if (response.status == 'SUCCESS') {
                                location.reload(true);
                               
                                
                                
                            }
                        }
                    });
                }
            });

        }
    });




    function Employee_Disable_Dropdwn() {
        var SpParams = {};
        SpParams.strProc = "Employee_ActiveEmpDrpDown";
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
});