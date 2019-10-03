$(document).ready(function () {
   
    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        $('#lblWait').hide();
        $('#tiktNumber').prop('disabled', true);
        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        $("#lblName").text(name);
       $('#tiktNumber').val(RandomNumberGen);
       

       $('#btnSubmit').click(function () {
         
           if ($('#txtDesc').val() == '') {
               $.alert.open({ type: 'warning', content: 'Please write about your issue in detail' });
           }

           else {
               var varProcParams = new Array();




               var varParams = {};
               varParams.strKey = "Ticket_IssueNumber";
               varParams.strArgmt = $("#tiktNumber").val();
               varProcParams[0] = varParams;
               varParams = {};

               var varParams = {};
               varParams.strKey = "Ticket_Issue";
               varParams.strArgmt = $("#txtIssue").val();
               varProcParams[1] = varParams;
               varParams = {};

               var varParams = {};
               varParams.strKey = "Ticket_IssuePriority";
               varParams.strArgmt = $("#ddlPriority").val();
               varProcParams[2] = varParams;
               varParams = {};

               var varParams = {};
               varParams.strKey = "Ticket_IssueDescription";
               varParams.strArgmt = $("#txtDesc").val();
               varProcParams[3] = varParams;
               varParams = {};

               var varParams = {};
               varParams.strKey = "Employee_ID";
               varParams.strArgmt = Localvalue;
               varProcParams[4] = varParams;
               varParams = {};

               var varParams = {};
               varParams.strKey = "Ticket_IssueType";
               varParams.strArgmt = $("#ddlIssueType").val();
               varProcParams[5] = varParams;
               varParams = {};

               var SpParams = {};
               SpParams.strProc = "Ticket_RaiseTicket";
               SpParams.oProcParams = varProcParams;

               $.ajax({
                   url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                   type: "POST",
                   contentType: "application/json;charset=utf-8",
                   dataType: "json",
                   data: JSON.stringify(SpParams),
                   success: function (response) {
                       if (response.status == 'SUCCESS') {
                           //alert($("#tiktNumber").val());
                           var ticketId = response.message;                          
                           SendEmailToSupportPerson(name, $("#ddlIssueType").val(), $("#txtIssue").val(), $("#ddlPriority").val(), $("#txtDesc").val(), $("#tiktNumber").val(), ticketId);

                       }
                   }
               });
           }
           });

       
        
       function RandomNumberGen() {
           var EmployeeName = name.toString();
           var nameSubstring = EmployeeName.substring(0, 3);
           //alert(EmployeeName);
           //alert(nameSubstring);

            var min;
            min = 10;
            var max;
            max = 111122000;
            var randomNumber = Math.floor(Math.random() * (10000 - 3 + 1)) + 33;
            return '#' + nameSubstring .toString()+ randomNumber.toString() + '#';
        }

       function SendEmailToSupportPerson(strEmpName, type, issue, priority, detail, ticketnumber, TicketPKValue) {
            $('#lblWait').show();

          

            var Params = {};
            Params.EmpName = strEmpName;
            Params.Issue = issue;
            Params.Type = type;
            Params.Priority = priority;
            Params.Detail = detail;
            Params.TicketNumber = ticketnumber;
            Params.TicketPKValue = TicketPKValue;


            $.ajax({
                url: "/api/FIXZIService/TicketRequestMail2SupportPerson",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {
                    if (response.status == 'SUCCESS') {
                        $('#lblWait').hide();
                        $.alert.open({ type: 'info', content: 'Submitted successfully. Support person will reply you soon.' });
                        $("#tiktNumber").val('');
                        $("#txtDesc").val('');
                        $("#txtIssue").val('')

                    }


                }
            });
        }
    }
});