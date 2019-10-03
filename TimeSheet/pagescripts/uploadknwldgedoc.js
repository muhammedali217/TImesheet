$(document).ready(function () {
    
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#txtDate').datepicker();
        $('#btnSubmit').click(function () {

            UpLoadFile();

        });
        function UpLoadFile() {
            var data = new FormData();

            var files = $("#fileUpload").get(0).files;
            var filenamee = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
            // Add the uploaded image content to the form data collection
            if (files.length > 0) {
                data.append("UploadedFile", files[0]);
            }

            // Make Ajax request with the contentType = false, and procesDate = false
            var ajaxRequest = $.ajax({
                type: "POST",
                url: "/api/FIXZIService/UploadFile",
                contentType: false,
                processData: false,
                data: data
            });



            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "KnwldgeCenter_Topic";
            varParams.strArgmt = $('#txtTopic').val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "KnwldgeCenter_SessionOn";
            varParams.strArgmt = $('#txtDate').val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "KnwldgeCenter_FileName";
            varParams.strArgmt = filenamee;
            varProcParams[2] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "KnwldgeCenter_UploadDoc";
            SpParams.oProcParams = varProcParams;

            //alert(filenamee);
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    alert(response.status);
                    if (response.status == "SUCCESS") {
                        $.alert.open({ type: 'info', content: 'Uploaded Successfully' });
                    }
                    else if (response.status == "FAILED") {
                        $.alert.open({ type: 'warning', content: 'Please change the filename and then Upload. ' });
                    }
                    else {
                        $.alert.open({ type: 'warning', content: 'Error in uploading File. ' });
                    }
                }
            });


            ajaxRequest.done(function (xhr, textStatus) {
                // Do other operation

            });
        }
    }
});