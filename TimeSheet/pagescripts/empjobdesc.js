$(document).ready(function () {
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
        //location.reload();
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        var url = "KnowledgeCenter/" + name + ".pdf";
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false); // false = Synchronous

        http.send(null); // it will stop here until this http request is complete

        // when we are here, we already have a response, b/c we used Synchronous XHR
        // alert(http.status);
        if (http.status === 200) {
            url = "KnowledgeCenter/" + name + ".pdf";
        }
        else {

            url = "KnowledgeCenter/Test_File_K.pdf";
        }
        //alert(url);

        document.getElementById("filesrc").src = url;
        $("#lblName").text(name);


        $("#myJD").attr("href", url);
        $("#btnRefresh").click(function () {
            //var url = "KnowledgeCenter/" + name + ".pdf";
            
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