$(document).ready(function () {
    var Localvaluee = localStorage.getItem('AdminSession');
    $("#txtDateFrom").datepicker();
    $("#txtDateFrom").on('changeDate', function (ev) {
        $("#txtDateFrom").datepicker('hide');
    });
    $("#txtDateTo").datepicker();
    $("#txtDateTo").on('changeDate', function (ev) {
        $("#txtDateTo").datepicker('hide');
    });
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var Localvalue = localStorage.getItem('AdminSession');

        $('#btnWeeklyAttUpdateoOffice').click(function () {
            debugger
            let fromd = new Date($("#txtDateFrom").val());
            let tod = new Date($("#txtDateTo").val());
            var monthofDateFrom = fromd.getMonth();
            var yearfDateFrom = fromd.getFullYear();
            var monthofDateTo = tod.getMonth();
            var yearofDateTo = tod.getFullYear();
            if ($("#txtDateFrom").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please select From date' });
            }
            else if ($("#txtDateTo").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please select To date' });
            }

            else if (monthofDateFrom != monthofDateTo) {
                $.alert.open({ type: 'warning', content: 'Please select same month date' });
            }
            else if (yearfDateFrom != yearofDateTo) {
                $.alert.open({ type: 'warning', content: 'Please select same year date' });
            }
            else if (fromd > tod) {
                $.alert.open({ type: 'warning', content: 'Invalid date selection' });
            }

            else {
                $.alert.open('Selected Date is Confirmed ?', { 1: 'Yes', 2: 'No' }, function (button) {
                    if (button == 1) {
                        debugger
                        var varProcParams = new Array();
                        var varParams = {};
                        varParams.strKey = "FromDate";
                        varParams.strArgmt = $("#txtDateFrom").val();
                        varProcParams[0] = varParams;
                        varParams = {};

                        varParams.strKey = "ToDate";
                        varParams.strArgmt = $("#txtDateTo").val();
                        varProcParams[1] = varParams;

                        var SpParams = {};
                        SpParams.oProcParams = varProcParams;

                        $.ajax({
                            url: "/api/FIXZIService/UpdateOutofOfficeAttendance",
                            type: "POST",
                            contentType: "application/json;charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify(SpParams),
                            success: function (response) {
                                $.alert.open({ type: 'Success', content: 'Out of Office Attendance Updated.' });
                            }
                        });
                        $("#txtDateFrom").val("");
                        $("#txtDateTo").val("");
                    }//if
                    else if (button == 2) {
                    }
                });

            }
        })

    }
});