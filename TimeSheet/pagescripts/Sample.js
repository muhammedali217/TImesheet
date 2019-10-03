$(document).ready(function () {

    var day=null;
    
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    //var last = first + 6; // last day is the first day + 6

    var Monday = new Date(curr.setDate(first+1));
    var tuesday = new Date(curr.setDate(first + 2));
    var Wedday = new Date(curr.setDate(first + 3));
    var Thurday = new Date(curr.setDate(first + 4));
    var Friday = new Date(curr.setDate(first + 5));

  



    function format(inputDate) {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        }
    }

    $("#lblMONDAY").css({ "color": "#217dbb", "font-size": "16px" });
    $("#lblTUESDAY").css({ "color": "#217dbb", "font-size": "16px" });
    $("#lblWEDNESDAY").css({ "color": "#217dbb", "font-size": "16px" });
    $("#lblTHURSDAY").css({ "color": "#217dbb", "font-size": "16px" });
    $("#lblFRIDAY").css({ "color": "#217dbb", "font-size": "16px" });

    $('#lblMONDAY').text(format(Monday));
    $('#lblTUESDAY').text(format(tuesday));
    $('#lblWEDNESDAY').text(format(Wedday));
    $('#lblTHURSDAY').text(format(Thurday));
    $('#lblFRIDAY').text(format(Friday));


   

    TimeSheetEnteredCheck($('#lblMONDAY').text());
    TimeSheetEnteredCheck($('#lblTUESDAY').text());
    TimeSheetEnteredCheck($('#lblWEDNESDAY').text());
    TimeSheetEnteredCheck($('#lblTHURSDAY').text());
    TimeSheetEnteredCheck($('#lblFRIDAY').text());


    assignedProjectDrpDown();
        $('#example').DataTable({
            "bPaginate": false,
            "bFilter": false,
            "bInfo": false
            
        });
        $('#example').on('click', '#btnUpdate1', function () {
            day = 'Monday';
            EnterTimeSheet($('#MonPrject').val(), $('#MonTasks').val(), $('#MonHours').val(), $('#MonDesc').val(), $('#lblMONDAY').text());
            
        });
    

        $('#example').on('click', '#btnUpdate2', function () {
            day = 'Tuesday';
            EnterTimeSheet($('#TuesPrject').val(), $('#TuesTasks').val(), $('#TuesHours').val(), $('#TuesDesc').val(), $('#lblTUESDAY').text());
        });

        $('#example').on('click', '#btnUpdate3', function () {
            day = 'Wednesday';
            EnterTimeSheet($('#WedPrject').val(), $('#WedTasks').val(), $('#WedHours').val(), $('#WedDesc').val(), $('#lblWEDNESDAY').text());
        });

        $('#example').on('click', '#btnUpdate4', function () {
            day = 'Thursday';
            EnterTimeSheet($('#ThursPrject').val(), $('#ThursTasks').val(), $('#ThursHours').val(), $('#ThursDesc').val(), $('#lblTHURSDAY').text());
        });
        $('#example').on('click', '#btnUpdate5', function () {
            day = 'Friday';
            EnterTimeSheet($('#FriPrject').val(), $('#FriTasks').val(), $('#FriHours').val(), $('#FriDesc').val(), $('#lblFRIDAY').text());
        });





        function assignedProjectDrpDown() {
           
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = 2;
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "Employees_AssignedProject";
            SpParams.oProcParams = varProcParams;


            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if ((response[0].DisplayMember == 'No projects assigned')) {
                        



                    }
                    if (response != null) {
                        //$('#lbl').hide();
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#MonPrject").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                                $("#TuesPrject").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                                $("#WedPrject").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                                $("#ThursPrject").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                                $("#FriPrject").append(new Option(response[i].DisplayMember, response[i].ValueMember));


                            }
                        }//for
                    }//if
                }//response

            });//ajax

        }

        

        $("#MonPrject").change(function () {

        
       
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Projects_ID";
        varParams.strArgmt = $("#MonPrject").val();
        varProcParams[0] = varParams;
        varParams = {};


        var SpParams = {};
        SpParams.strProc = "Projects_SubTask";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPDropDownResponse",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {


                if (response != null && response.length > 0) {
                    document.getElementById('MonTasks').innerHTML = '<option value="" selected="true" style="display: none;">Select Task</option>';
                    for (var i = 0; i < response.length; i++) {
                        {

                            $("#MonTasks").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }//for
                }//if
                else {
                    $("#MonTasks").val("");
                    document.getElementById('MonTasks').innerHTML = '<option value="" selected="true" style="display: none;">No tasks Assigned</option>';
                    //$("#ddlTasks").append(new Option("hi", "response[i].ValueMember"));
                }
            }//response
        });//ajax


        
        });



        $("#TuesPrject").change(function () {



            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#TuesPrject").val();
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "Projects_SubTask";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {


                    if (response != null && response.length > 0) {
                        document.getElementById('TuesTasks').innerHTML = '<option value="" selected="true" style="display: none;">Select Task</option>';
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#TuesTasks").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                    else {
                        $("#TuesTasks").val("");
                        document.getElementById('TuesTasks').innerHTML = '<option value="" selected="true" style="display: none;">No tasks Assigned</option>';
                        //$("#ddlTasks").append(new Option("hi", "response[i].ValueMember"));
                    }
                }//response
            });//ajax



        });




        $("#WedPrject").change(function () {



            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#WedPrject").val();
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "Projects_SubTask";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {


                    if (response != null && response.length > 0) {
                        document.getElementById('WedTasks').innerHTML = '<option value="" selected="true" style="display: none;">Select Task</option>';
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#WedTasks").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                    else {
                        $("#WedTasks").val("");
                        document.getElementById('WedTasks').innerHTML = '<option value="" selected="true" style="display: none;">No tasks Assigned</option>';
                        //$("#ddlTasks").append(new Option("hi", "response[i].ValueMember"));
                    }
                }//response
            });//ajax



        });



        $("#ThursPrject").change(function () {



            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#ThursPrject").val();
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "Projects_SubTask";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {


                    if (response != null && response.length > 0) {
                        document.getElementById('ThursTasks').innerHTML = '<option value="" selected="true" style="display: none;">Select Task</option>';
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ThursTasks").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                    else {
                        $("#ThursTasks").val("");
                        document.getElementById('ThursTasks').innerHTML = '<option value="" selected="true" style="display: none;">No tasks Assigned</option>';
                        //$("#ddlTasks").append(new Option("hi", "response[i].ValueMember"));
                    }
                }//response
            });//ajax



        });



        $("#FriPrject").change(function () {



            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = $("#FriPrject").val();
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "Projects_SubTask";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {


                    if (response != null && response.length > 0) {
                        document.getElementById('FriTasks').innerHTML = '<option value="" selected="true" style="display: none;">Select Task</option>';
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#FriTasks").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                    else {
                        $("#FriTasks").val("");
                        document.getElementById('FriTasks').innerHTML = '<option value="" selected="true" style="display: none;">No tasks Assigned</option>';
                        //$("#ddlTasks").append(new Option("hi", "response[i].ValueMember"));
                    }
                }//response
            });//ajax



        });



        function EnterTimeSheet(ProjectId,SubTasksId,WrkHours,Desc,date)

        {
            alert(day);
            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = 2;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = ProjectId;
            varProcParams[1] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "SubTasks_Id";
            varParams.strArgmt = SubTasksId;
            varProcParams[2] = varParams;
            varParams = {};

          

            var varParams = {};
            varParams.strKey = "TimeSheet_wrkHours";
            varParams.strArgmt = WrkHours;
            varProcParams[3] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "TimeSheet_Description";
            varParams.strArgmt = Desc;
            varProcParams[4] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "TimeSheet_Date";
            varParams.strArgmt = date;
            varProcParams[5] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "TimeSheet_InsertData";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                   
                    if (response.status == 'SUCCESS') {

                        $.alert.open({ type: 'info', content: 'Your timesheet for today is successfully submitted.' });


                        
                       
                        if (day =='Monday') {
                            alert('within Monday');
                            $("#MonPrject").prop('disabled', true);
                            $('#MonTasks').prop('disabled', true);
                            $('#MonHours').prop('disabled', true);
                            $('#MonDesc').prop('disabled', true);
                            $('#btnUpdate1').prop('disabled', true);

                        }

                        
                        else if (day == 'Tuesday') {
                            alert('within Tuesday');
                            $("#TuesPrject").prop('disabled', true);
                            $('#TuesTasks').prop('disabled', true);
                            $('#TuesHours').prop('disabled', true);
                            $('#TuesDesc').prop('disabled', true);
                            $('#btnUpdate2').prop('disabled', true);

                        }
                        else if (day == 'Wednesday') {
                            alert('within Wednesday');
                            $("#WedPrject").prop('disabled', true);
                            $('#WedTasks').prop('disabled', true);
                            $('#WedHours').prop('disabled', true);
                            $('#WedDesc').prop('disabled', true);
                            $('#btnUpdate3').prop('disabled', true);

                        }

                        else if (day == 'Thursday') {
                            alert('within Thursday');
                            $("#ThursPrject").prop('disabled', true);
                            $('#ThursTasks').prop('disabled', true);
                            $('#ThursHours').prop('disabled', true);
                            $('#ThursDesc').prop('disabled', true);
                            $('#btnUpdate4').prop('disabled', true);

                        }
                        else if (day == 'Friday') {
                            alert('within Friday');
                           $("#FriPrject").prop('disabled', true);
                           $('#FriTasks').prop('disabled', true);
                           $('#FriHours').prop('disabled', true);
                           $('#FriDesc').prop('disabled', true);
                           $('#btnUpdate5').prop('disabled', true);

                       }
                       else {
                       }
                        
                    }
                }
            });
           
        }



        function TimeSheetEnteredCheck(date) {
            alert("wihinin TimeSheetEnteredCheck");
            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "TimeSheet_Date";
            varParams.strArgmt = date;
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Employee_Id";
            varParams.strArgmt = 2;
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "TimeSheetCheckExists";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.status == 'FAILED') {
                        //alert("within function");
                        //alert(date);
                        //alert($('#lblMONDAY').text());
                        if(date==$('#lblMONDAY').text())
                        {
                            alert("within monday");
                            $("#MonPrject").prop('disabled', true);
                            $('#MonTasks').prop('disabled', true);
                            $('#MonHours').prop('disabled', true);
                            $('#MonDesc').prop('disabled', true);
                            $('#btnUpdate1').prop('disabled', true);
                            $('#lblMo').text(' You have entered already');

                        }
                        else if(date==$('#lblTUESDAY').text())
                        {
                            alert("within tuesday");
                            $("#TuesPrject").prop('disabled', true);
                            $('#TuesTasks').prop('disabled', true);
                            $('#TuesHours').prop('disabled', true);
                            $('#TuesDesc').prop('disabled', true);
                            $('#btnUpdate2').prop('disabled', true);
                            $('#lblTu').text(' You have entered already');
                        }

                        else if (date == $('#lblWEDNESDAY').text()) {
                            alert("within wedday");

                            $("#WedPrject").prop('disabled', true);
                            $('#WedTasks').prop('disabled', true);
                            $('#WedHours').prop('disabled', true);
                            $('#WedDesc').prop('disabled', true);
                            $('#btnUpdate3').prop('disabled', true);
                            $('#lblWe').text(' You have entered already');
                        }


                        else if (date == $('#lblTHURSDAY').text()) {
                            alert("within thursday");

                            $("#ThursPrject").prop('disabled', true);
                            $('#ThursTasks').prop('disabled', true);
                            $('#ThursHours').prop('disabled', true);
                            $('#ThursDesc').prop('disabled', true);
                            $('#btnUpdate4').prop('disabled', true);
                            $('#lblTh').text(' You have entered already');
                        }

                        else if (date == $('#lblFRIDAY').text()) {
                            alert("within friday");
                            $("#FriPrject").prop('disabled', true);
                            $('#FriTasks').prop('disabled', true);
                            $('#FriHours').prop('disabled', true);
                            $('#FriDesc').prop('disabled', true);
                            $('#btnUpdate5').prop('disabled', true);
                            $('#lblFr').text(' You have entered already');
                        }
                        else {
                        }
                    }
                }
            });
        }

});