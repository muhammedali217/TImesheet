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
        $('#lblWait').hide();
        $('#txtMeetOn').datepicker();
        $('#MeetingFrom').timepicker({
            'minTime': '9:00AM',
            'maxTime': '9:00PM'

        });
        $('#MeetingTo').timepicker({
            'minTime': '9:00AM',
            'maxTime': '9:00PM'
        });
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        var emailId = localStorage.getItem('EmployeeEmail');

        $("#lblName").text(name);

        $(".js-example-basic-multiple").select2();



        EmpDropDown();
        function EmpDropDown() {
            var SpParams = {};
            SpParams.strProc = "Employee_DrpDownIncludesAdmin";


            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    $('#ddlParticipants').empty();

                    if (response != null) {
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlParticipants").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                }//response
            });//ajax
        }
        var prjectorUse;
        $("input:radio[name=Prjector]").click(function () {
            prjectorUse = $(this).val();

        });

        $("#btnSubmit").click(function () {
            if ($("#txtMeetOn").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Choose the Meeting Date.' });
            }
            else if ($("#txtMeetFor").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter the mandatory fields .' });
            }
            else if ($("#MeetingFrom").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter meeting Start time.' });
            }
            else if ($("#MeetingFrom").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter meeting End time.' });
            }
            else if ($("#MeetingFrom").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please choose the participants' });
            }
            else {
                var selMulti = $.map($("#ddlParticipants option:selected"), function (el, i) {
                    return $(el).text();
                });
                //alert(selMulti.join(", "));
                var participants = selMulti.join(", ");
                //alert(participants);
                //alert(value);



                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "MeetngRoom_By";
                varParams.strArgmt = Localvalue;
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "MeetngRoom_MeetOn";
                varParams.strArgmt = $("#txtMeetOn").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "MeetngRoom_MeetFor";
                varParams.strArgmt = $("#txtMeetFor").val();
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "MeetngRoom_MeetSTime";
                varParams.strArgmt = $("#MeetingFrom").val();
                varProcParams[3] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "MeetngRoom_MeetETime";
                varParams.strArgmt = $("#MeetingTo").val();
                varProcParams[4] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "MeetngRoom_Participants";
                varParams.strArgmt = participants;
                varProcParams[5] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "MeetngRoom_UsePrjectr";
                varParams.strArgmt = prjectorUse;
                varProcParams[6] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "MeetngRoom_Remarks";
                varParams.strArgmt = $("#txtMeetRemarks").val();
                varProcParams[7] = varParams;
                varParams = {};

                var timeFromTo = $("#MeetingFrom").val() + ' To ' + $("#MeetingTo").val();


                var SpParams = {};
                SpParams.strProc = "MeetngRoom_Booking";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            SendEmailToAdmin(name, $("#txtMeetFor").val(), $("#txtMeetOn").val(), timeFromTo, participants, emailId);
                            $('#lblWait').show();
                        }
                        else if (response.status == 'FAILED') {
                            $.alert.open({ type: 'info', content: 'Sorry. ' + response.message });
                        }
                    }
                });
            }
        });



        function SendEmailToAdmin(stEmpName, strFor, strDate, strTime, strParticipants, emailAddress) {

            var Params = {};
            Params.EmpName = stEmpName;
            Params.For = strFor;
            Params.Date = strDate;
            Params.Time = strTime;
            Params.Participants = strParticipants;
            Params.EmpEmail = emailAddress;


            $.ajax({
                url: "/api/FIXZIService/MeetingRoomRqstEmail",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {

                    $('#lblStatus').text('Booked successfully . You will notified by email when its approved.');
                    $('#lblWait').hide();
                    $("#txtMeetOn").val('');
                    $("#txtMeetFor").val('');
                    $("#MeetingFrom").val('');
                    $("#MeetingTo").val('');
                    $("#txtMeetRemarks").val('');
                    $(window).scrollTop($('#lblStatus').offset().bottom);
                }
            });
        }
    }
});