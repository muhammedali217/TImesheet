$(document).ready(function () {
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        //location.reload();
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        document.getElementById("filesrc").src = "KnowledgeCenter/" + name + ".pdf";
        $("#lblName").text(name);


        $("#myJD").attr("href", "KnowledgeCenter/" + name + ".pdf");
        $("#btnRefresh").click(function () {
            location.reload();
        });
        //
        //var varProcParams = new Array();
        //var varParams = {};
        //varParams.strKey = "Employee_Id";
        //varParams.strArgmt = Localvalue;
        //varProcParams[0] = varParams;
        //varParams = {};
        //var SpParams = {};
        //SpParams.strProc = "JobDesc_Employee";
        //SpParams.oProcParams = varProcParams;

        //$.ajax({
        //    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
        //    type: "POST",
        //    contentType: "application/json;charset=utf-8",
        //    dataType: "json",
        //    data: JSON.stringify(SpParams),
        //    success: function (response) {
        //        if (response.status == 'SUCCESS') {
        //            $('#lblEmpName').text(response.details[0].EmpName);
        //            $('#lblJobTitle').text(response.details[0].JobDesc_Tittle);
        //            $('#lblJobtype').text(response.details[0].JobDesc_Type);
        //            $('#lblJobResp').text(response.details[0].JobDesc_Responsibilities);
        //            $('#lblJobDuties').text(response.details[0].JobDesc_Duties);
        //        }
        //    }
        //});
    }
});