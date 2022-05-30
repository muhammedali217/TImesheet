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
        var dayOfWeek = localStorage.getItem('Day');
        var currentHour = localStorage.getItem('Hour');       
        var Localvalue = localStorage.getItem('EmployeeId');
        
        if (Localvalue == 126) {

            document.getElementById('Assetmenu').style.display = 'block';

           
            //document.getElementById('ddtopmenubar').style.display = 'block';
        }
        else {
            document.getElementById('Assetmenu').style.display = 'none';
           
        }


        if (dayOfWeek >= 5 && currentHour >= 17) {
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
            $("#lblProfitCostCode").hide();
            $("#star").hide();
            $("#btnthisWeek").hide();
            $("#txtprofitcostcode").hide();
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
       // alert(first-6); 
        if (Localvaluee == 2259) {
            var Monday = new Date(curr.setDate(curr.getDate() - curr.getDay() - 6));
            var tuesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
            var Wedday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
            var Thurday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
            var Friday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
        }
        else {
            var Monday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
            var tuesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
            var Wedday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
            var Thurday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
            var Friday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
        }
        
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
                LoadProfitCostCode($("#ddlNewProject").val());
                LoadProjectAssignedTask($("#ddlNewProject").val(), Localvalue);
                $('#div1').show();
                $('#div2').show();
                $('#div3').show();
                $('#div4').show();
                $('#div5').show();
            }
            else {
                LoadProfitCostCode($("#ddlNewProject").val());
                LoadProjectAssignedTask($("#ddlNewProject").val(), Localvalue);
                var mondayDate = format(Monday);
                var tuesdayDate = format(tuesday);
                var wednesdayDate = format(Wedday);
                var thursdayDate = format(Thurday);
                var fridayDate = format(Friday);
                var mon = Monday.getFullYear();
                var tue = tuesday.getFullYear();
                var wed = Wedday.getFullYear();
                var thu = Thurday.getFullYear();
                var fri = Friday.getFullYear();
                
                if (mon < year) {
                    if (mondayDate >= currentDay) 
                        $('#div1').show();
                    else 
                        $('#div1').hide();
                }
                else {
                    if (mondayDate <= currentDay) 
                        $('#div1').show();
                    else 
                        $('#div1').hide();
                }
                if (tue < year) {
                    if (tuesdayDate >= currentDay)
                        $('#div2').show();

                    else
                        $('#div2').hide();
                }
                else {
                    if (tuesdayDate <= currentDay)
                        $('#div2').show();
                    else
                        $('#div2').hide();
                }
                if (wed < year) {
                    if (wednesdayDate >= currentDay)
                        $('#div3').show();

                    else
                        $('#div3').hide();
                }
                else {
                    if (wednesdayDate <= currentDay)
                        $('#div3').show();
                    else
                        $('#div3').hide();
                }

                if (thu < year) {
                    if (thursdayDate >= currentDay)
                        $('#div4').show();
                    else
                        $('#div4').hide();
                }
                else {
                    if (thursdayDate <= currentDay)
                        $('#div4').show();
                    else
                        $('#div4').hide();
                }
                if (fri < year) {
                    if (fridayDate >= currentDay)
                        $('#div5').show();
                    else
                        $('#div5').hide();
                }
                else {
                    if (fridayDate <= currentDay)
                        $('#div5').show();
                    else
                        $('#div5').hide();
                }
            }
        });

        function LoadProfitCostCode(projectId) {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = projectId;
            varProcParams[0] = varParams;

            var SpParams = {};
            SpParams.strProc = "GetProject_ProfitCostCode";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS')
                        if (response.details.length !== 0) {
                            $('#txtprofitcostcode').val(response.details[0]["CODE"]);
                            $('#lblProfitCostType').html(response.details[0]["TYPE"]);
                            console.log(response.details[0]["TYPE"])
                        }
                        else {
                            $('#txtprofitcostcode').val('No Code');
                            $('#lblProfitCostType').html('');
                        }
                }
            });
        }

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
            var comments = [];

            $("#div1").children("input[type=number]").each(function () {
                MondayWrkedHours.push($(this).val());
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

            $("#div6").children("textarea").each(function() {
                if($(this).val()!='')
                    comments.push($(this).val());
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

            var comm = comments.toString();
            var comment = comm.replace(/,/g, "");
            //alert(MonW);
            //alert(MondayWrkedHours.toString());
            if ($("#ddlNewProject").val() == "") {

                $.alert.open({ type: 'warning', content: 'Please select project you have worked.' });
            }

            else if (MonW.toString() == "" && TueW.toString() == "" && WedW.toString() == "" && ThurW.toString() == "" && Fri.toString() == "") {
                $.alert.open({ type: 'warning', content: 'Please enter hours you have worked.' });
            }
            else if (MonW != "" || TueW != "" || WedW != "" || ThurW != "" || Fri != "") {

                EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, MondayWrkedHours.toString(), format(Monday), comments.toString());
                EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, TuesdayWrkedHours.toString(), format(tuesday), comments.toString());
                EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, WednesdayWrkedHours.toString(), format(Wedday), comments.toString());
                EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, ThursdayWrkedHours.toString(), format(Thurday), comments.toString());
                EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, FridayWrkedHours.toString(), format(Friday), comments.toString());
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
        function EnterWeeklyTimeSheet(SubTasksIdArray, ProjectsId, Employee_ID, TimeSheet_wrkHours, TimeSheet_Date,Timesheet_Description) {
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
            varParams.strArgmt = Timesheet_Description;
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























