$(document).ready(function () {
   // alert("hi");
    var employeeLeaveDateLabel = [];
    var LeaveDates;
    $('#MondayAbsent').hide();
    $('#TuesdayAbsent').hide();
    $('#WednesdayAbsent').hide();
    $('#ThursdayAbsent').hide();
    $('#Fridayabsent').hide();
    $('#btnAdd').hide();
    $('.myLabel').css({
        "display": "inline-block",
        "box-sizing": "padding-box",
        "margin-left": "15px"
    });
    var Localvalue = localStorage.getItem('EmployeeId');
    var name = localStorage.getItem('EmployeeName');


    $("#lblName").text(name);

    $('#lbl1').hide();
    $('#lbl2').hide();
    $('#lbl3').hide();
    $('#lbl4').hide();
    $('#lbl5').hide();
    var day = null;

    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    //var last = first + 6; // last day is the first day + 6

    var Monday = new Date(curr.setDate(first + 1));
    var tuesday = new Date(curr.setDate(first + 2));
    var Wedday = new Date(curr.setDate(first + 3));
    var Thurday = new Date(curr.setDate(first + 4));
    var Friday = new Date(curr.setDate(first + 5));





    function format(inputDate) {
        var dateofDay;
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            if (date.getDate() <= 9) {
                //alert(date.getDate());
                dateofDay = '0' + date.getDate();
                return date.getMonth() + 1 + '/' + dateofDay + '/' + date.getFullYear();
            }
            else {
                //alert(date.getDate());
                return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
            }


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

    checkLeave();


    function checkLeave() {

        var varProcParams = new Array();

        var varParams = {};
        varParams.strKey = "StartDate";
        varParams.strArgmt = format(Monday);
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "EndDate";
        varParams.strArgmt = format(Friday);
        varProcParams[1] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Employee_ID";
        varParams.strArgmt = Localvalue;
        varProcParams[2] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "TimeSheet_EmpLeaveCheck";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                //alert(response.status);
                //alert(response.message);
                if (response.message == ' ') {

                    LeaveDates = response.status;
                }
                else if (response.status == ' ') {

                    LeaveDates = response.message.toString();
                }
                else {

                    LeaveDates = response.status + ',' + response.message.toString();
                }
                //alert(LeaveDates);

                var MondayDate = new Date($('#lblMONDAY').text());
                var TuesdayDate = new Date($('#lblTUESDAY').text());
                var WednesdayDate = new Date($('#lblWEDNESDAY').text());
                var ThursdayDate = new Date($('#lblTHURSDAY').text());
                var FridayDate = new Date($('#lblFRIDAY').text());



                var varMonth = parseInt(MondayDate.getMonth() + 1);

                if (varMonth < 10) {
                    varMonth = '0' + varMonth

                }

                var FirstDay = MondayDate.getDate();
                if (FirstDay < 10) {
                    FirstDay = '0' + FirstDay;
                }

                var SecondDay = TuesdayDate.getDate();
                if (SecondDay < 10) {
                    SecondDay = '0' + SecondDay;
                }
                var ThirdDay = WednesdayDate.getDate();
                if (ThirdDay < 10) {
                    ThirdDay = '0' + ThirdDay;
                }
                var FourthDay = ThursdayDate.getDate();
                if (FourthDay < 10) {
                    FourthDay = '0' + FourthDay;
                }
                var FifthDay = FridayDate.getDate();
                if (FifthDay < 10) {
                    FifthDay = '0' + FifthDay;
                }

                var LeaveDateMonday = MondayDate.getFullYear() + "-" + varMonth + "-" + FirstDay;
                var LeaveDateTuesday = TuesdayDate.getFullYear() + "-" + varMonth + "-" + SecondDay;
                var LeaveDateWednesady = WednesdayDate.getFullYear() + "-" + varMonth + "-" + ThirdDay;
                var LeaveDateThursday = ThursdayDate.getFullYear() + "-" + varMonth + "-" + FourthDay;
                var LeaveDateFriday = FridayDate.getFullYear() + "-" + varMonth + "-" + FridayDate.getDate();


                var isLeaveMonday = LeaveDates.search(LeaveDateMonday); // 2013-12-06
                if (isLeaveMonday > '-1') {
                    // alert("leave Monday");
                    $("#MondayAbsent").css({ "color": "red", "font-size": "14px" });
                    $('#MondayAbsent').show();
                    $('#div1').hide();

                }

                var isLeaveTuesday = LeaveDates.search(LeaveDateTuesday); // 2013-12-06
                if (isLeaveTuesday > '-1') {
                    //alert("leave Tuesday");
                    $("#TuesdayAbsent").css({ "color": "red", "font-size": "14px" });
                    $('#TuesdayAbsent').show();
                    $('#div2').hide();

                }

                var isLeaveWednesday = LeaveDates.search(LeaveDateWednesady); // 2013-12-06
                if (isLeaveWednesday > '-1') {
                    // alert("leave Wednesday");
                    $("#WednesdayAbsent").css({ "color": "red", "font-size": "14px" });
                    $('#WednesdayAbsent').show();
                    $('#div3').hide();

                }
                var isLeaveThursday = LeaveDates.search(LeaveDateThursday); // 2013-12-06
                if (isLeaveThursday > '-1') {
                    // alert("leave Thursday");
                    $("#ThursdayAbsent").css({ "color": "red", "font-size": "14px" });
                    $('#ThursdayAbsent').show();
                    $('#div4').hide();

                }

                var isLeaveFriday = LeaveDates.search(LeaveDateFriday);

                if (isLeaveFriday > '-1') {
                    //alert("leave Friday");
                    $("#Fridayabsent").css({ "color": "red", "font-size": "14px" });
                    $('#Fridayabsent').show();
                    $('#div5').hide();

                }


            }

        });
    }




    //assignedProjectDrpDown();
    $('#example').DataTable({
        "bPaginate": false,
        "bFilter": false,
        "bInfo": false,
        "aaSorting": []

    });


    $('#btnEnterTask').click(function () {
        var lineBreak = document.createElement("br");
        assignedProjectDrpDown();
    });


    function assignedProjectDrpDown() {

   
       
        

        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Employee_ID";
        varParams.strArgmt = Localvalue;
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
                   
                    for (var i = 0; i < response.length; i++) {
                        {
                           
                            $(".ddlMyProject").append(new Option(response[i].DisplayMember, response[i].ValueMember));



                        }
                    }//for
                    $(".ddlMyProject").appendTo('#div7');
                    $('.ddlMyProject').css({
                        "display": "block",
                        "box-sizing": "padding-box",
                        "margin-top": "0px",
                        "font-weight": "500",
                        "float": "left",
                        "font-size": "17px",
                        "font-family": "veranda",
                        "margin-left": "15px",

                    });
                }//if
            }//response

        });//ajax

    }



    $(".ddlMyProject").change(function () {

        $('#div1').html('');
        $('#div2').html('');
        $('#div3').html('');
        $('#div4').html('');
        $('#div5').html('');
        $('#div6').html('');

        LoadProjectAssignedTask($(".ddlMyProject").val(), Localvalue);
    });







    function LoadProjectAssignedTask(projectId, EmployeeId) {


        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Projects_ID";
        varParams.strArgmt = projectId;
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Employee_Id";
        varParams.strArgmt = EmployeeId;
        varProcParams[1] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "Projects_GetAssigendTask4Emp";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPDropDownResponse",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                $(".ddlMyTaks").empty();

                for (var j = 0; j < response.length; j++) {




                    $(".ddlMyTaks").append(new Option(response[j].DisplayMember, response[j].ValueMember)).appendTo('#divNewTasks');
                }
                    //$('<label class="myLabel" id=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</label> <br/><br/> ').appendTo('#divNewTasks');
                    $('.ddlMyTaks').css({
                        "display": "block",
                        "box-sizing": "padding-box",
                        "margin-top": "-5px",
                        "font-weight": "500",
                        "float": "left",
                        "font-size": "17px",
                        "font-family": "veranda",
                        "margin-left": "15px",

                    });
                    $('<input type="number" id=firstday class="HoursBox" name="1stday" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div1');
                    $('<input type="number" class="HoursBox" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div2');
                    $('<input type="number" id="thirdday" class="HoursBox" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div3');
                    $('<input type="number" class="HoursBox" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div4');
                    $('<input type="number" class="HoursBox" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div5');
                    //$('<input type="text" class="" name="wrkedHours" style="height:25px;width:152px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div6');
                    $('<textarea rows="0" class="remarks" cols="2" style="height:25px;width:150px;margin-left:15px;margin-right:15px;"/><br/><br/> ').appendTo('#div6');
                    
                    $('.HoursBox').css({
                        "display": "block",
                        "box-sizing": "padding-box",
                        "margin-top": "19px",
                        "font-weight": "500",
                        "float": "left",
                        "font-size": "17px",
                        "font-family": "veranda",
                        "margin-left": "15px",

                    });
                    $('.remarks').css({
                        "display": "block",
                        "box-sizing": "padding-box",
                        "margin-top": "10px",
                        "font-weight": "500",
                        "float": "left",
                        "font-size": "17px",
                        "font-family": "veranda",
                        "margin-left": "15px",

                    });

                
            }


        });
    }


    var values = [];

    $('#btnCancel').click(function () {
        $("#ddlNewProject").val(" ");
        jQuery('#divNewTasks').html('');
        jQuery('#div1').html('');
        jQuery('#div2').html('');
        jQuery('#div3').html('');
        jQuery('#div4').html('');
        jQuery('#div5').html('');
    });


    $('#btnSubmit').click(function () {


        var arrayOfTaskIds = $.map($(".myLabel"), function (n, i) {
            return n.id;
        });
        //alert(arrayOfTaskIds);



        var MondayWrkedHours = [];
        var TuesdayWrkedHours = [];
        var WednesdayWrkedHours = [];
        var ThursdayWrkedHours = [];
        var FridayWrkedHours = [];

        $("#div1").children("input[type=number]").each(function () {
            //var value = $(this).val();
            //if (value) {
            MondayWrkedHours.push($(this).val());
            //}



        });


        $("#div2").children("input[type=number]").each(function () {

            TuesdayWrkedHours.push($(this).val());


        });

        $("#div3").children("input[type=number]").each(function () {

            WednesdayWrkedHours.push($(this).val());



        });

        $("#div4").children("input[type=number]").each(function () {

            ThursdayWrkedHours.push($(this).val());



        });

        $("#div5").children("input[type=number]").each(function () {

            FridayWrkedHours.push($(this).val());



        });

        var Mon = MondayWrkedHours.toString();
        var MonW = Mon.replace(/,/g, "");

        var Tue = TuesdayWrkedHours.toString();
        var TueW = Tue.replace(/,/g, "");

        var Wed = WednesdayWrkedHours.toString();
        var WedW = Wed.replace(/,/g, "");

        var Thur = ThursdayWrkedHours.toString();
        var ThurW = Thur.replace(/,/g, "");

        var Fri = FridayWrkedHours.toString();
        var FriW = Fri.replace(/,/g, "");
        //alert(MonW);
        //alert(MondayWrkedHours.toString());
        if ($("#ddlNewProject").val() == "") {

            $.alert.open({ type: 'warning', content: 'Please select project you have worked.' });
        }

        else if (MonW.toString() == "" && TueW.toString() == "" && WedW.toString() == "" && ThurW.toString() == "" && Fri.toString() == "") {
            $.alert.open({ type: 'warning', content: 'Please enter hours you have worked.' });
        }
        else if (MonW != "" || TueW != "" || WedW != "" || ThurW != "" || Fri != "") {

            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, MondayWrkedHours.toString(), format(Monday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, TuesdayWrkedHours.toString(), format(tuesday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, WednesdayWrkedHours.toString(), format(Wedday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, ThursdayWrkedHours.toString(), format(Thurday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, FridayWrkedHours.toString(), format(Friday));
            //$("#lblMessage").css({ "color": "#062011", "font-size": "18px" });
            //$("#lblMessage").text("TIMESHEET SUBMITTED.");

            setTimeout(function () {
                window.location = "employeetimesheet.aspx"
            }, 500);
        }
        else {
            $.alert.open({ type: 'warning', content: 'Please check the details you have entered.' });

        }

    });
    //alert(values);



    function EnterWeeklyTimeSheet(SubTasksIdArray, ProjectsId, Employee_ID, TimeSheet_wrkHours, TimeSheet_Date) {

        var varProcParams = new Array();

        var varParams = {};
        varParams.strKey = "SubTasksIdArray";
        varParams.strArgmt = SubTasksIdArray;
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "ProjectsId";
        varParams.strArgmt = ProjectsId;
        varProcParams[1] = varParams;
        varParams = {};


        var varParams = {};
        varParams.strKey = "Employee_ID";
        varParams.strArgmt = Employee_ID;
        varProcParams[2] = varParams;
        varParams = {};



        var varParams = {};
        varParams.strKey = "TimeSheet_wrkHoursArray";
        varParams.strArgmt = TimeSheet_wrkHours;
        varProcParams[3] = varParams;
        varParams = {};


        var varParams = {};
        varParams.strKey = "TimeSheet_Description";
        varParams.strArgmt = '';
        varProcParams[4] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "TimeSheet_Date";
        varParams.strArgmt = TimeSheet_Date;
        varProcParams[5] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "TimeSheet_InsertWeekly";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {





            }


        });
    }

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var currentDay = month + '/' + day + '/' + year;
    //alert(currentDay);

    var mondayDate = format(Monday);
    var tuesdayDate = format(tuesday);
    var wednesdayDate = format(Wedday);
    var thursdayDate = format(Thurday);
    var fridayDate = format(Friday);



    if (mondayDate <= currentDay) {

        $('#div1').show();
    }
    else {

        $('#div1').hide();
    }

    if (tuesdayDate <= currentDay) {

        $('#div2').show();
    }
    else {
        $('#div2').hide();
    }

    if (wednesdayDate <= currentDay) {

        $('#div3').show();
    }
    else {
        $('#div3').hide();
    }


    if (thursdayDate <= currentDay) {

        $('#div4').show();
    }
    else {
        $('#div4').hide();
    }


    if (fridayDate <= currentDay) {

        $('#div5').show();
    }

    else {
        $('#div5').hide();
    }



    var convertDate = function (usDate) {
        var dateParts = usDate.split(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
        return dateParts[3] + "-" + dateParts[1] + "-" + dateParts[2];
    }






    function TimeSheetEnteredCheck(date, projectId) {


        var varProcParams = new Array();

        var varParams = {};
        varParams.strKey = "TimeSheet_Date";
        varParams.strArgmt = date;
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Employee_Id";
        varParams.strArgmt = Localvalue;
        varProcParams[1] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Projects_ID";
        varParams.strArgmt = projectId;
        varProcParams[2] = varParams;
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
                    if (date == $('#lblMONDAY').text()) {

                        clearDiv('div1');

                        $('#div1').prepend('<label class="mynewlabel" style="padding-left:10px;color:green";>Already Entered</label>');
                        $('#div6').html('');

                    }
                    else if (date == $('#lblTUESDAY').text()) {

                        $('#div6').html('');
                        clearDiv('div2');
                        $('#div2').prepend('<label class="mynewlabel" style="padding-left:10px;color:green";>Already Entered</label>');
                        $('#div6').html('');
                    }

                    else if (date == $('#lblWEDNESDAY').text()) {
                        $('#div6').html('');
                        clearDiv('div3');

                        $('#div3').prepend('<label class="mynewlabel" style="padding-left:10px;color:green";>Already Entered</label>');
                        $('#div6').html('');
                        //$('#div3').innerHTML('<label class="mynewlabel" style="padding-left:10px;color:green";>Already Entered</label>');
                        //$('<label class="mynewlabel" style="padding-left:10px;color:green";>Already Entered</label>').appendTo('#div3');

                    }


                    else if (date == $('#lblTHURSDAY').text()) {
                        $('#div6').html('');
                        clearDiv('div4');
                        $('#div4').prepend('<label class="mynewlabel" style="padding-left:10px;color:green";>Already Entered</label>');
                        $('#div6').html('');
                    }

                    else if (date == $('#lblFRIDAY').text()) {
                        $('#div6').html('');
                        clearDiv('div5');
                        $('#div5').prepend('<label class="mynewlabel" style="padding-left:10px;color:green";>Already Entered</label>');
                        $('#div6').html('');
                    }
                    else {
                    }
                }
            }
        });
    }


    function alerting(day) {
        $.alert.open({ type: 'warning', content: 'You have already entered time sheet for this project on ' + day });
    }


    function clearDiv(elementID) {
        alert("You have already entered time sheet for the selected project");
        document.getElementById(elementID).innerHTML = "";
    }
    //$('#btnAdd').click(function () {

    //    //$('<input type="number" id=firstday class="FirstDay" name="1stday" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#td1');
    //    //$('<label>Hi</label><br/><br/>').appendTo('#td2');
    //    //$('<label>Hi</label><br/><br/>').appendTo('#td3');
    //    //$('<label>Hi</label><br/><br/>').appendTo('#td4');
    //    //$('<label>Hi</label><br/><br/>').appendTo('#td5');


    //    $('<input type=text id=txtTask/>').appendTo('#divNewTasks');
    //    $('<input type="number" id=firstday class="FirstDay" name="1stday" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div1');
    //    $('<input type="number" class="SecondDay" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div2');
    //    $('<input type="number" id="thirdday" class="ThirdDay" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div3');
    //    $('<input type="number" class="FourthDay" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div4');
    //    $('<input type="number" class="Fifth" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div5');
    //});
});























