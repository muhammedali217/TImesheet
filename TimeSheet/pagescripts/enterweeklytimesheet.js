$(document).ready(function () {

    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {
        var xmlHttp;
        function srvTime() {
            try {
                //FF, Opera, Safari, Chrome
                xmlHttp = new XMLHttpRequest();
            }
            catch (err1) {
                //IE
                try {
                    xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
                }
                catch (err2) {
                    try {
                        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
                    }
                    catch (eerr3) {
                        //AJAX not supported, use CPU time.
                        alert("AJAX not supported");
                    }
                }
            }
            xmlHttp.open('HEAD', window.location.href.toString(), false);
            xmlHttp.setRequestHeader("Content-Type", "text/html");
            xmlHttp.send('');
            return xmlHttp.getResponseHeader("Date");
        }

        var st = srvTime();
        var date = new Date(st);
        alert(date);
        var time = new Date(st);//new Date(); // for now
        var day = time.getDay();
        var currentHour = time.getHours(); // => 9
        //alert(day);
        //alert(currentHour);
        if (day >= 5 && currentHour >= 17) {
            $('#lblAlert').css({
                'width': '100%',
                'height': '120px',
                'padding-left': '120px'
            });
            //
            $('#lblAlert').text("Sorry Time is over. You cannot enter timesheet . Please contact HR Person through Email.");
            $('#example').hide();
            $("#ddlNewProject").hide();
            $("#labelPrjAssigned").hide();
            $("#btnCancel").hide();
            $("#btnSubmit").hide();
            $("#btnAdd").hide();
            $("#lblStar").hide();
            $("#star").hide();

            //alert(day);
            //alert(currentHour);
            //$.alert.open({ type: 'warning', content: 'Sorry Time is over. You cannot enter timesheet . Please contact HR Person through Email.' });

        }

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
        //var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        //var last = first + 6; // last day is the first day + 6
        //alert(first);
        
        var Monday = new Date(curr.setDate(curr.getDate() - curr.getDay() +1));
        var tuesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
        var Wedday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
        var Thurday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
        var Friday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
        
        //var mon = format(Monday);
        
        //alert(Wedday);
        //alert(Thurday);
        //alert(Friday);



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

        $("#lblMONDAY").css({ "color": "#217dbb", "font-size": "14px" });
        $("#lblTUESDAY").css({ "color": "#217dbb", "font-size": "14px" });
        $("#lblWEDNESDAY").css({ "color": "#217dbb", "font-size": "14px" });
        $("#lblTHURSDAY").css({ "color": "#217dbb", "font-size": "14px" });
        $("#lblFRIDAY").css({ "color": "#217dbb", "font-size": "14px" });

        $('#lblMONDAY').text(format(Monday));
        $('#lblTUESDAY').text(format(tuesday));
        $('#lblWEDNESDAY').text(format(Wedday));
        $('#lblTHURSDAY').text(format(Thurday));
        $('#lblFRIDAY').text(format(Friday));

        




        assignedProjectDrpDown();
        $('#example').DataTable({
            "bPaginate": false,
            "bFilter": false,
            "bInfo": false,
            "aaSorting": []

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
                        //$('#lbl').hide();
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlNewProject").append(new Option(response[i].DisplayMember, response[i].ValueMember));



                            }
                        }//for
                    }//if
                }//response

            });//ajax

        }



        $("#ddlNewProject").change(function () {

            $('#div1').html('');
            $('#div2').html('');
            $('#div3').html('');
            $('#div4').html('');
            $('#div5').html('');
            $('#divNewTasks').html('');
            $('#div6').html('');

          

            if ($("#ddlNewProject").val() == "1045") {
                LoadProjectAssignedTask($("#ddlNewProject").val(), Localvalue);
                $('#div1').show();
                $('#div2').show();
                $('#div3').show();
                $('#div4').show();
                $('#div5').show();
            }
            else {
                LoadProjectAssignedTask($("#ddlNewProject").val(), Localvalue);
                var mondayDate = format(Monday);
                var tuesdayDate = format(tuesday);
                var wednesdayDate = format(Wedday);
                var thursdayDate = format(Thurday);
                var fridayDate = format(Friday);
                //alert(mondayDate);
                var mon = Monday.getFullYear();
                //alert(mon);
                //alert(year);
                //alert(currentDay);
                if (mon < year) {
                    if (mondayDate >= currentDay) {

                        $('#div1').show();
                        //alert(123);

                    }
                    else {

                        $('#div1').hide();
                        //alert('abc');
                    }
                }
                else {
                    if (mondayDate <= currentDay) {

                        $('#div1').show();
                        //alert(123);

                    }
                    else {

                        $('#div1').hide();
                        //alert('abc');
                    }
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
            }



            //LoadProjectAssignedTask($("#ddlNewProject").val(), Localvalue);
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



                    for (var j = 0; j < response.length; j++) {





                        $('<label class="myLabel" id=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</label> <br/><br/> ').appendTo('#divNewTasks');
                        $('.myLabel').css({
                            "display": "block",
                            "box-sizing": "padding-box",
                            "margin-left": "5px",
                            "font-weight": "400",
                            "float": "left",
                            "font-size": "14px",
                            "font-family": "veranda",
                            "margin-right": "20px"

                        });
                        $('<input type="number" step="0.5" id=firstday class="FirstDay" name="1stday" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div1');
                        $('<input type="number" step="0.5" class="SecondDay" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div2');
                        $('<input type="number" step="0.5" id="thirdday" class="ThirdDay" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div3');
                        $('<input type="number" step="0.5" class="FourthDay" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div4');
                        $('<input type="number" step="0.5" class="Fifth" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div5');
                        $('<textarea rows="0" class="remarks" cols="2" style="height:26px;width:152px;margin-left:15px;margin-right:15px;margin-bottom:-6.3px;"/><br/><br/> ').appendTo('#div6');


                    }
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
                    window.location = "thisweektimesheet.aspx"
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
        //alert(today);

        if (day <= 9) {
            //alert(date.getDate());
            dateofDay = '0' + day;
            //return date.getMonth() + 1 + '/' + dateofDay + '/' + date.getFullYear();
            var currentDay = month + '/' + dateofDay + '/' + year;

        }
        else {
            //alert(date.getDate());
            dateofDay = day;
            var currentDay = month + '/' + dateofDay + '/' + year;

        }






        var convertDate = function (usDate) {
            var dateParts = usDate.split(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
            return dateParts[3] + "-" + dateParts[1] + "-" + dateParts[2];
        }


        $('#btnthisWeek').click(function () {
            window.location = 'thisweektimesheet.aspx';
        });
    }
    document.oncontextmenu = document.body.oncontextmenu = function () { return false; }
});























