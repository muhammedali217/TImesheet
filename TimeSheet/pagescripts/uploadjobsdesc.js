$(document).ready(function () {
    EmpDropDown();
    function EmpDropDown() {
        var SpParams = {};
        SpParams.strProc = "Employee_DrpDown";


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