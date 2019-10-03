$(document).ready(function () {
    $('#lblWait').hide();
    //$('#txtmessage').val('asdasda');
    var Email;
    var ticketNumber;
    var Fullname;
    var name = 'SUPPORT'
    $('#lblName').text(name);
    var TiketIssueID = GetQueryString('TicketId');
   

    var varProcParams = new Array();
    var varParams = {};
    varParams.strKey = "Ticket_IssueId";
    varParams.strArgmt = TiketIssueID;
    varProcParams[0] = varParams;
    varParams = {};

    var SpParams = {};
    SpParams.strProc = "Ticket_IssueReply";
    SpParams.oProcParams = varProcParams;
    $.ajax({
        url: "/api/FIXZIService/GetHTTPResponseDataWeb",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: JSON.stringify(SpParams),
        success: function (response) {
            ticketNumber=response.details[0].Ticket_IssueNumber;
            Fullname=response.details[0].Employee_FirstName;
            Email = response.details[0].Employee_OfficialMailId;
            //alert(ticketNumber);
            //alert(Fullname);
            //alert(Email);
            $("#msgLabel").text('Message to  " '  + Email+ ' "');
            var message = '\n Hi ' + Fullname + ',' + '\n \n Thanks for reaching out to support.  I will resolve your issue within 10 minutes.  \n \n If you have any additional questions or need some more clarification feel free to reach back out to us here in support by replying this mail. We are always happy to lend a hand.';
            $("textarea#txtmessage").val(message);

        }
    });
    
   
    function GetQueryString(varName) {
        varName = varName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + varName + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    } //GetQueryString

   
    $('#btnSend').click(function () {
        SendEmailToSupportPerson($('#txtmessage').val(), Email, ticketNumber);
    });

    function SendEmailToSupportPerson(strContent, strEmail, strTicketNumber) {
        $('#lblWait').show();
        var Params = {};

        Params.TicketNumber = strTicketNumber;
        Params.SupportMsgContent = strContent;
        Params.Email = strEmail;


        $.ajax({
            url: "/api/FIXZIService/ReplyToEmployeeRegardingTicket",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(Params),
            success: function (response) {
                if (response.status == 'SUCCESS') {

                    $.alert.open({ type: 'info', content: 'Send successfully.' });
                    $('#lblWait').hide();
                    setTimeout(function () {
                        window.location = "viewraisedtickets.aspx"
                    }, 1000);


                }
            }
        });

    }





});