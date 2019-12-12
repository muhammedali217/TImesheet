$().ready(function () {
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
        scrollBottom();
        function scrollBottom() {
            $("html, div").animate({
                scrollTop: $('html, div').get(0).scrollHeight
            }, 2000);
        }
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');


        $("#lblName").text(name);




        Loadvalues();
        $('#tblThisWeekTimeSheet').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableThisWeekTimeSheet" style="width:600px;height:50px;"></table>');

        var oTable = $('#tableThisWeekTimeSheet').dataTable({
            "aaData": [
            ],

            "aoColumns": [
             {
                 "sTitle": "Sl No",
                 'sWidth': '10%'
             }, {
                 "sTitle": "TimeSheet_Id",
                 'bVisible': false
             }, {
                 "sTitle": "Project",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Task Worked",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Hours",
                 'sWidth': '10%'
             },
             {
                 "sTitle": "Day",
                 'sWidth': '10%'
             }
            ],

            "aLengthMenu": [
                        [5, 10, 15, -1],
                        [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": "100",
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",

            "oLanguage": {
                "sLengthMenu": "",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "bFilter": false,
            "bInfo": false
        });


        function Loadvalues() {

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "TimeSheet_TimeSheetThisWeek";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.details != null) {
                        //$("#tableTimeSheet").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {

                            jQuery("#tableThisWeekTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].TimeSheet_Id).toString(), (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks_WBS).toString(), (response.details[j].TimeSheet_wrkHours).toString(), '<label style="text-align:center; color: rgb(126, 0, 140);">' + (response.details[j].TimeSheet_Date) + '</label>']);
                        }
                    }
                }
            });
        }


        WrkedHours();
        function WrkedHours() {

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "TimeSheet_WrkHourLabel";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    $('#spnTotalHours').text('TOTAL HOURS : ' + response.details[0].WrkedHours);
                }
            });
        }
    }
});
     