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

        // alert(Localvalue);
        debugger
        var curr = new Date(18-07-2023);
        var ApplyedDate = new Array();
        // alert(Localvalue);
        debugger
        //var empIdTimesheet = localStorage.getItem('EmpIdEnableTimesheet');
        let empIdList = localStorage.getItem("EmpIdEnableTimesheet");
        let fromDate = localStorage.getItem("FromDateEnableTimesheet");
        let toDate = localStorage.getItem("ToDateEnableTimesheet");
        // Retrieved array
        var empIdTimesheet = JSON.parse(empIdList)
        var EnableFromDate = fromDate;
        var EnableToDate = toDate;
        if (Localvalue == 126 || Localvalue == 2 || Localvalue == 12) {

            //document.getElementById('Assetmenu').style.display = 'block';


            //document.getElementById('ddtopmenubar').style.display = 'block';
        }
        else {
            //document.getElementById('Assetmenu').style.display = 'none';

        }


        if (empIdTimesheet != null) {
            debugger
            var today = new Date();
            var day = today.getDate();
            for (var i = 0; i < empIdTimesheet.length; i++) {
                var days = daysdifference(today, EnableFromDate);
                enableTimesheet(empIdTimesheet[i], days);

            }
        }
        else {
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
        }

        var employeeLeaveDateLabel = [];
        var LeaveDates;
        debugger

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
        //if (Localvaluee == 2259) {
        //    var Monday = new Date(curr.setDate(curr.getDate() - curr.getDay() - 6));
        //    var tuesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
        //    var Wedday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
        //    var Thurday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
        //    var Friday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
        //}
        //else {

        debugger
        if (empIdTimesheet == null) {
            var Monday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
            var tuesday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
            var Wedday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
            var Thurday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
            var Friday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
            var Saturday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
            var Sunday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));

            //var Monday = new Date(curr.setDate(curr.getDate() - 8));
            //debugger
            //var tuesday = new Date(curr.setDate(curr.getDate() + 1));
            //var Wedday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
            //var Thurday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
            //var Friday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
            //var Saturday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
            //var Sunday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));


        }
        //}
        function daysdifference(firstDate, secondDate) {
            debugger
            var startDay = new Date(firstDate);
            var endDay = new Date(secondDate);

            // Determine the time difference between two dates     
            var millisBetween = startDay.getTime() - endDay.getTime();

            // Determine the number of days between two dates  
            var days = millisBetween / (1000 * 3600 * 24);

            // Show the final number of days between dates     
            return Math.round(Math.abs(days));
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
        $("#lblSATURDAY").css({ "color": "#217dbb", "font-size": "14px" });
        //$("#lblSUNDAY").css({ "color": "#217dbb", "font-size": "14px" });
        //alert(format(Monday));
        /* $('#lblMONDAY').text('hi');*/
        //alert(document.getElementById('lblMONDAY').text);
        //document.getElementById('lblMONDAY').innerHTML = format(Monday);
        /* $("#lblMONDAY").append(Monday);*/
        $('[id$=lblMONDAY]').text("JINU");
        //$('#lblMONDAY').html(format(Monday));
        $('#lblTUESDAY').html(format(tuesday));
        $('#lblWEDNESDAY').html(format(Wedday));
        $('#lblTHURSDAY').html(format(Thurday));
        $('#lblFRIDAY').html(format(Friday));
        $('#lblSATURDAY').html(format(Saturday));
        $('#lblSUNDAY').html(format(Sunday));

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

            if ($("#ddlNewProject").val() == "1045") {
                LoadClient($("#ddlNewProject").val());
                LoadProjectAssignedTask($("#ddlNewProject").val(), Localvalue);

            }
            else {
                LoadClient($("#ddlNewProject").val());
                LoadProjectAssignedTask($("#ddlNewProject").val(), Localvalue);
                var mondayDate = format(Monday);
                var tuesdayDate = format(tuesday);
                var wednesdayDate = format(Wedday);
                var thursdayDate = format(Thurday);
                var fridayDate = format(Friday);
                var fridayDate = format(Friday);
                var fridayDate = format(Friday);
                var saturdayDate = format(Saturday);
                var sundayDate = format(Sunday);
                // alert(mondayDate);
                var mon = Monday.getFullYear();
                var tue = tuesday.getFullYear();
                var wed = Wedday.getFullYear();
                var thu = Thurday.getFullYear();
                var fri = Friday.getFullYear();
                var sat = Saturday.getFullYear();
                var fri = Sunday.getFullYear();



            }
        });

        function ApplyedTimesheetDate(Reqfdate,ReqTdate,Empid) {

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "empId ";
            varParams.strArgmt = Empid;            
            varProcParams[0] = varParams;
            varParams = {}

            varParams.strKey = "fromdate";
            varParams.strArgmt = Reqfdate;
            varProcParams[1] = varParams;
            varParams = {};

            varParams.strKey = "todate";
            varParams.strArgmt = ReqTdate;
            varProcParams[2] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "GetTimeSheetApplyedDate";
            SpParams.oProcParams = varProcParams;
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response != null) {
                        //$('#lbl').hide();
                        for (var i = 0; i < response.length; i++) {
                            debugger
                            ApplyedDate.push(response[i].TimeSheet_Date)
                        }//for
                    }//if
                }//response
            });//ajax
        }
        function enableTimesheet(EmpId, dateDifferance) {
            debugger
            if (Localvaluee == EmpId) {
                ApplyedTimesheetDate(EnableFromDate,EnableToDate,Localvalue)
                Monday = new Date(curr.setDate(curr.getDate() - (dateDifferance - 1)));
                tuesday = new Date(curr.setDate(curr.getDate() + 1));
                Wedday = new Date(curr.setDate(curr.getDate() + 1));
                Thurday = new Date(curr.setDate(curr.getDate() + 1));
                Friday = new Date(curr.setDate(curr.getDate() + 1));
                Saturday = new Date(curr.setDate(curr.getDate() + 1));
                Sunday = new Date(curr.setDate(curr.getDate() + 1));
                //var array = ['2023-07-10', '2023-07-11'];
                debugger
                var M_yr = Monday.getFullYear(),
                    M_month = Monday.getMonth() < 10 ? '0' + Monday.getMonth() : Monday.getMonth(),
                    M_month = Number(M_month) + 1,
                   M_month = M_month < 10 ? '0' + M_month : M_month,
                    M_day = Monday.getDate() < 10 ? '0' + Monday.getDate() : Monday.getDate(),
                    stringMonday = M_yr + '-' + M_month + '-' + M_day;
                //var T_yr = tuesday.getFullYear(),
                //    T_month = tuesday.getMonth() < 10 ? '0' + tuesday.getMonth() : tuesday.getMonth(),
                //    T_month = Number(T_month) + 1,
                //    T_month = T_month < 10 ? '0' + T_month : T_month,
                //    T_day = tuesday.getDate() < 10 ? '0' + tuesday.getDate() : tuesday.getDate(),
                //    stringTuesday = T_yr + '-' + T_month + '-' + T_day;
                //debugger
                if (ApplyedDate.length > 0) {
                    if (jQuery.inArray(stringMonday, ApplyedDate) !== -1) {
                        Monday = null;
                    }
                }
                //if (jQuery.inArray(stringTuesday, array) !== -1) {
                //    $("lblTUESDAY").remove();
                //}
            }
        }
        function loaddate() {

            $("#lblMONDAY").css({ "color": "#217dbb", "font-size": "14px" });
            $("#lblTUESDAY").css({ "color": "#217dbb", "font-size": "14px" });
            $("#lblWEDNESDAY").css({ "color": "#217dbb", "font-size": "14px" });
            $("#lblTHURSDAY").css({ "color": "#217dbb", "font-size": "14px" });
            $("#lblFRIDAY").css({ "color": "#217dbb", "font-size": "14px" });
            $("#lblSATURDAY").css({ "color": "#217dbb", "font-size": "14px" });
            $("#lblSUNDAY").css({ "color": "#217dbb", "font-size": "14px" });
            //alert(format(Monday));
            /* $('#lblMONDAY').text('hi');*/
            //alert(document.getElementById('lblMONDAY').text);
            //document.getElementById('lblMONDAY').innerHTML = format(Monday);
            /* $("#lblMONDAY").append(Monday);*/
            //$('[id$=lblMONDAY]').text("JINU");
            $('#lblMONDAY').html(format(Monday));
            $('#lblTUESDAY').html(format(tuesday));
            $('#lblWEDNESDAY').html(format(Wedday));
            $('#lblTHURSDAY').html(format(Thurday));
            $('#lblFRIDAY').html(format(Friday));
            $('#lblSATURDAY').html(format(Saturday));
            $('#lblSUNDAY').html(format(Sunday));


        }

        function LoadClient(projectId) {
            //alert(projectId);
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = projectId;
            varProcParams[0] = varParams;

            var SpParams = {};
            SpParams.strProc = "GetProject_Client";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    //alert(response.details.length);
                    if (response.status == 'SUCCESS')
                        if (response.details.length !== 0) {
                            $('#txtprofitcostcode').val(response.details[0]["ClientName"]);
                            $('#txtMethod').val(response.details[0]["Methodalogy"]);
                            //console.log(response.details[0]["TYPE"])
                            $('#lblProfitCostType').html('');
                        }
                        else {
                            $('#txtprofitcostcode').val('-');
                            $('#txtMethod').val('-');
                            $('#lblProfitCostType').html('');
                        }
                }
            });
        }


        function LoadProfitCostCode(projectId) {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_ID";
            varParams.strArgmt = projectId;
            varProcParams[0] = varParams;

            var SpParams = {};
            SpParams.strProc = "GetProject_Client";
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
                            $('#txtprofitcostcode').val(response.details[0]["ClientName"]);
                            $('#txtMethod').val(response.details[0]["Methodalogy"]);
                            //console.log(response.details[0]["TYPE"])
                            $('#lblProfitCostType').html('');
                            //console.log(response.details[0]["TYPE"])
                        }
                        else {
                            $('#txtprofitcostcode').val('-');
                            $('#txtMethod').val('-');
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
            var div = "";
            var div0 = "";
            var div2 = "";
            var totdiv = "";
            div0 = "<div id = 'center'><table width='85%' align='center' border='2' id='timval' ><tr style = 'height: 50px;' id='first'><td style='text-align:center; color: black;'>Task<br /><label id='lblTask'></label></td><td style='text-align:center; color: black;'><br /></td> <td id='tdmhead' style='text-align:center; color: black;'>MONDAY<br /> <label id='lblMONDAY'></label><br /><label id='MondayAbsent'></label></td><td id='tdthead' style='text-align:center; color: black;'>TUESDAY<br /><label id='lblTUESDAY'></label><br /><label id='TuesdayAbsent'></label></td><td  id='tdwhead' style='text-align:center; color: black;'>WEDNESDAY<br /><label id='lblWEDNESDAY'></label><br /><label id='WednesdayAbsent'></label></td><td  id='tdthhead' style='text-align:center; color: black;'>THURSDAY<br /><label id='lblTHURSDAY'></label><br /><label id='ThursdayAbsent'></label></td><td  id='tdfhead' style='text-align:center; color: black;'>FRIDAY<br /><label id='lblFRIDAY'></label><br /><label id='Fridayabsent'></label></td> <td  id='tdshead' style='text-align:center; color: black;'>SATURDAY<br /><label id='lblSATURDAY'></label><br /><label id='saturdayAbsent'></label></td><td  id='tdsuhead' style='text-align:center; color: black;'>SUNDAY<br /><label id='lblSUNDAY'></label><br /><label id='SundayAbsent'></label></td><td  style='text-align:center; color: black;'>Total<br /><label id='lblHtotal'></label></td><td  style='text-align:center; color: black;'>Remarks<br /><label id='lblRemarks'></label></td></tr >";
            //alert(div0);
            div2 = " </table></div>";

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    for (var j = 0; j < response.length; j++) {

                        div = "<tr style='height: 50px;' id=tra" + j + "><td rowspan='2'><label class='myLabel1' id=" + (response[j].ValueMember) + " Text='" + (response[j].ValueMember) + "'>" + (response[j].DisplayMember) + "</label></td> <td style='text-align:center; color: black;'><label class='myLabel' id='ActualHead" + j + "'>Actual Hour</label><br /></td><td><input type='number' step='0.5' id=firstday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "Moday'  onchange='Hsum(\"a\"," + j + ",HTotal" + j + ");Htxtsum(\"f\",MonvTotal,MonvbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=secondday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "Tuday' onchange='Hsum(\"a\"," + j + ",HTotal" + j + ");Htxtsum(\"s\",TuevTotal,TuevbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=thirdday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "weday' onchange='Hsum(\"a\"," + j + ",HTotal" + j + ");Htxtsum(\"t\",WedTotal,WedbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=fourthday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "Thday' onchange='Hsum(\"a\"," + j + ",HTotal" + j + ");Htxtsum(\"fo\",ThuvTotal,ThuvbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=fifthday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "Frday' onchange='Hsum(\"a\"," + j + ",HTotal" + j + ");Htxtsum(\"fi\",FrivTotal,FrivbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td> <td><input type='number' step='0.5' id=sixthday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "Saday' onchange='Hsum(\"a\"," + j + ",HTotal" + j + ");Htxtsum(\"si\",SatvTotal,SatvbTotal,SunvbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=seventhday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "Suday' onchange='Hsum(\"a\"," + j + ",HTotal" + j + ");Htxtsum(\"se\",SunvTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number'  id=HTotal" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "HTotal'  value=0 disabled placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><textarea  id=aremarks" + j + " class='remarks aremarks' name='" + (response[j].DisplayMember) + "remarks' style='height:26px;width:152px;margin-left:15px;margin-right:15px;margin-bottom:-6.3px;'></textarea></td></tr><tr style='height: 50px;' id=trb" + j + "><td style='text-align:center; color: black;'><label class='myLabel' id='reqNor1' >Billable Hour</label><br /></td><td><input type='number' step='0.5' id=firstbday" + j + " class='FirstDay' '" + (response[j].DisplayMember) + "MoBday' onchange='Hsum(\"b\"," + j + ",HTotalB" + j + ");Htxtsum(\"f\",MonvTotal,MonvbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=secondbday" + j + " class='FirstDay' '" + (response[j].DisplayMember) + "TuBday' onchange='Hsum(\"b\"," + j + ",HTotalB" + j + ");Htxtsum(\"s\",TuevTotal,TuevbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=thiredbday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "weBday' onchange='Hsum(\"b\"," + j + ",HTotalB" + j + ");Htxtsum(\"t\",WedTotal,WedbTotal,WedbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=fourthbday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "ThBday' onchange='Hsum(\"b\"," + j + ",HTotalB" + j + ");Htxtsum(\"fo\",ThuvTotal,ThuvbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=fifthbday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "FrBday' onchange='Hsum(\"b\"," + j + ",HTotalB" + j + ");Htxtsum(\"fi\",FrivTotal,FrivbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number' step='0.5' id=sixthbday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "SaBday' onchange='Hsum(\"b\"," + j + ",HTotalB" + j + ");Htxtsum(\"si\",SatvTotal,SatvbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td> <td><input type='number' step='0.5' id=seventhbday" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "SuBday'  onchange='Hsum(\"b\"," + j + ",HTotalB" + j + ");Htxtsum(\"se\",SunvTotal,SunvbTotal);' placeholder='Hours'  style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td><input type='number'  id=HTotalB" + j + " class='FirstDay' name='" + (response[j].DisplayMember) + "Total'  value=0 placeholder='Hours'  disabled style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br/></td><td> <textarea id='bremarks" + j + " class=' remarks bremarks style='height:26px;width:152px;margin-left:15px;margin-right:15px;margin-bottom:-6.3px;'></textarea></td ></tr > ";
                        //

                        //alert(div);
                        div0 += div;
                    }
                    var dibtot = "<tr style='height:50px;' id='tra8'><td rowspan = '2' > <label class='myLabel1' id='1058' text='1058'>Total</label></td ><td style='text-align:center; color: black;'><label class='myLabel' id='ActualHead8'>Actual Hour</label><br></td>                               <td><input type='number' id=MonvTotal class='FirstDay' name='MonvTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=TuevTotal class='FirstDay' name='TuevTotal' placeholder='Hours' value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;' disabled/><br /></td><td><input type='number' id=WedTotal class='FirstDay' name='WedTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=ThuvTotal class='FirstDay' name='ThuvTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=FrivTotal class='FirstDay' name='FrivTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=SatvTotal class='FirstDay' name='SatvTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=SunvTotal class='FirstDay' name='SunvTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-ight:45px;float:right;clear:both;'/><br /></td><td></td><td></td></tr ><tr style='height: 50px;' id=tr2b" + j + "><td style='text-align:center; color: black;'><label class='myLabel' id='reqNor1' >Billable Hour</label><br /></td><td><input type='number' id=MonvbTotal class='FirstDay' name='MonvbTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=TuevbTotal class='FirstDay' name='TuevbTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=WedbTotal class='FirstDay' name='WedbTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=ThuvbTotal class='FirstDay' name='ThuvbTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=FrivbTotal class='FirstDay' name='FrivbTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=SatvbTotal class='FirstDay' name='SatvbTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-right:45px;float:right;clear:both;'/><br /></td><td><input type='number' id=SunvbTotal class='FirstDay' name='SunvbTotal' placeholder='Hours' disabled value=0 style='height:25px;width:52px;margin-ight:45px;float:right;clear:both;'/><br /></td><td></td><td></td></tr >";

                    totdiv = div0 + dibtot + div2;
                    // alert(div0);
                    //alert(div2);
                    document.getElementById('divtest').innerHTML = totdiv;

                    loaddate();


                    //alert(totdiv);




                    //var table = document.getElementById("timval");
                    //var totalRowCount = table.rows.length;
                    //for (i = 0; i < totalRowCount; i++) {
                    //    //alert(document.getElementById("1").value);
                    //    //alert(document.getElementById("1").text);
                    //    //alert(i);


                    //}

                    //alert(totalRowCount);


                    /* PRINT */
                    //for (let i = 0; i < allChildren.length; i++) {
                    //    console.log("Child #", i + 1, allChildren[i])
                    //}

                    //$("#divsample0 :input"); 
                    //var MondayWrkedHours = [];
                    //var TuesdayWrkedHours = [];
                    //var WednesdayWrkedHours = [];
                    //var ThursdayWrkedHours = [];
                    //var FridayWrkedHours = [];

                    //var subtaskArray = $('table#timval label.subtask')
                    //var countOfsubtaskArray = subtaskArray.length;
                    //var labelSubTask = null;
                    //var firstdayInput = null;
                    //for (i = 0; i < countOfsubtaskArray; i++) {
                    //    labelSubTask = subtaskArray[i];
                    //    console.log(labelSubTask.attributes.text)
                    //    firstdayInput = $('#firstday' + i);
                    //    MondayWrkedHours.push(document.getElementById(firstdayInput).value);

                    //    console.log(firstdayInput.val);
                    //}






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

            var arrayOfTaskIds = [];
            var MondayWrkedHours = [];
            var TuesdayWrkedHours = [];
            var WednesdayWrkedHours = [];
            var ThursdayWrkedHours = [];
            var FridayWrkedHours = [];
            var SaturdayWrkedHours = [];
            var SundayWrkedHours = [];
            var aremarksdetails = [];

            var MondaybWrkedHours = [];
            var TuesdaybWrkedHours = [];
            var WednesdaybWrkedHours = [];
            var ThursdaybWrkedHours = [];
            var FridaybWrkedHours = [];
            var SaturdaybWrkedHours = [];
            var SundaybWrkedHours = [];
            var bremarksdetails = [];
            //var subtaskArray = [];
            //var arrayOfTaskIds = $.map($('table#timval label.subtask').innerHTML, function (n, i) {
            //    return n.text;
            //});
            //alert(arrayOfTaskIds);

            var subtaskArray = $('table#timval label.myLabel1');
            var aremarksArray = $('table#timval textarea.aremarks');
            var bremarksArray = $('table#timval textarea.bremarks');
            // alert(bremarksArray);
            //alert(subtaskArray.toString);
            var countOfsubtaskArray = subtaskArray.length;
            var labelSubTask = null;
            var firstdayInput = null;
            var seconddayInut = null;
            var thireddayInput = null;
            var fourthdayInput = null;
            var fifthdayInput = null;
            var sixthdayInput = null;
            var seventhdayInput = null;

            var firstbdayInput = null;
            var secondbdayInut = null;
            var thiredbdayInput = null;
            var fourthbdayInput = null;
            var fifthbdayInput = null;
            var sixthbdayInput = null;
            var seventhbdayInput = null;

            var mondate = null;
            var tuedate = null;
            var weddate = null;
            var thdate = null;
            var fridate = null;
            var satdate = null;
            var sundate = null;



            mondate = $('#lblMONDAY').val();
            tuedate = $('#lblTUESDAY').val();
            weddate = $('#lblWEDNESDAY').val();
            thdate = $('#lblTHURSDAY').val();
            fridate = $('#lblFRIDAY').val();
            satdate = $('#lblSATURDAY').val();
            sundate = $('#lblSUNDAY').val();
            var arrayOfTaskIds1 = $.map($(".myLabel1"), function (n, i) {
                return n.id;
            });

            // alert('Sample_Task-' + arrayOfTaskIds1);

            for (i = 0; i < countOfsubtaskArray; i++) {
                //labelSubTask = subtaskArray[i];
                //alert('hi');
                //console.log(labelSubTask.attributes.text)
                // alert(document.getElementById($('#firstday' + i +"'")).value);
                // labelSubTask = $('#subtask' + i);
                firstdayInput = $('#firstday' + i);
                seconddayInut = $('#secondday' + i);
                thireddayInput = $('#thirdday' + i);
                fourthdayInput = $('#fourthday' + i);
                fifthdayInput = $('#fifthday' + i);
                sixthdayInput = $('#sixthday' + i);
                seventhdayInput = $('#seventhday' + i);
                aremarks = $('#aremarks' + i);

                //aremarksdetails
                firstbdayInput = $('#firstbday' + i);
                secondbdayInut = $('#secondbday' + i);
                thiredbdayInput = $('#thiredbday' + i);
                fourthbdayInput = $('#fourthbday' + i);
                fifthbdayInput = $('#fifthbday' + i);
                sixthbdayInput = $('#sixthbday' + i);
                seventhbdayInput = $('#seventhbday' + i);
                bremarks = $('#bremarks' + i);

                // alert("-dv-" + $("#firstday0").attr('value'));

                // alert($('#firstday0').html());

                // arrayOfTaskIds.push(labelSubTask.val());

                MondayWrkedHours.push(firstdayInput.val());
                TuesdayWrkedHours.push(seconddayInut.val());
                WednesdayWrkedHours.push(thireddayInput.val());
                ThursdayWrkedHours.push(fourthdayInput.val());
                FridayWrkedHours.push(fifthdayInput.val());
                SaturdayWrkedHours.push(sixthdayInput.val());
                SundayWrkedHours.push(seventhdayInput.val());
                aremarksdetails.push(aremarks.val());

                MondaybWrkedHours.push(firstbdayInput.val());
                TuesdaybWrkedHours.push(secondbdayInut.val());
                WednesdaybWrkedHours.push(thiredbdayInput.val());
                ThursdaybWrkedHours.push(fourthbdayInput.val());
                FridaybWrkedHours.push(fifthbdayInput.val());
                SaturdaybWrkedHours.push(sixthbdayInput.val());
                SundaybWrkedHours.push(seventhbdayInput.val());
                bremarksdetails.push(bremarks.val());
            }
            //alert('Task-ID' + arrayOfTaskIds.toString());

            // alert(subtaskArray.toString());
            //alert(MondayWrkedHours.toString());
            // alert(aremarksArray.toString());
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

            var Sat = SaturdayWrkedHours.toString();
            var SatW = Sat.replace(/,/g, "");

            var Sun = SaturdaybWrkedHours.toString();
            var SunW = Sun.replace(/,/g, "");

            var comm = aremarksdetails.toString();
            var comment = comm.replace(/,/g, "");

            //---------------------------------------------------------------

            var Monb = MondaybWrkedHours.toString();
            var MonWb = Monb.replace(/,/g, "");

            var Tueb = TuesdaybWrkedHours.toString();
            var TueWb = Tueb.replace(/,/g, "");

            var Wedb = WednesdaybWrkedHours.toString();
            var WedWb = Wedb.replace(/,/g, "");

            var Thurb = ThursdaybWrkedHours.toString();
            var ThurWb = Thurb.replace(/,/g, "");

            var Frib = FridaybWrkedHours.toString();
            var FriWb = Frib.replace(/,/g, "");

            var Satb = SaturdaybWrkedHours.toString();
            var SatWb = Satb.replace(/,/g, "");

            var Sunb = SundaybWrkedHours.toString();
            var SunWb = Sunb.replace(/,/g, "");

            var commb = bremarksdetails.toString();
            var commentb = commb.replace(/,/g, "");


            // alert(arrayOfTaskIds1.toString() + ',' + $("#ddlNewProject").val() + ',' + Localvalue + ',' + MondayWrkedHours.toString() + ',' + format(Monday) + ',' + aremarksdetails.toString())

            //alert(MonW);
            //if (MonW == "") {
            //    alert('Yes');
            //}
            //else {
            //    alert('No');
            //}
            //alert(TuesdayWrkedHours);
            //alert(WednesdayWrkedHours);
            //alert(ThursdayWrkedHours);
            //alert(FridayWrkedHours);
            //alert(SaturdayWrkedHours);
            //alert(SundayWrkedHours);

            //console.log(aremarksArray);
            //console.log(bremarksArray);

            //var arrayOfTaskIds = $.map($(".myLabel"), function (n, i) {
            //    return n.id;
            //});
            ////alert(arrayOfTaskIds);
            //var MondayWrkedHours = [];
            //var TuesdayWrkedHours = [];
            //var WednesdayWrkedHours = [];
            //var ThursdayWrkedHours = [];
            //var FridayWrkedHours = [];
            //var comments = [];

            //$("#div1").children("input[type=number]").each(function () {
            //    MondayWrkedHours.push($(this).val());
            //});
            //$("#div2").children("input[type=number]").each(function () {
            //    TuesdayWrkedHours.push($(this).val());
            //});

            //$("#div3").children("input[type=number]").each(function () {
            //    WednesdayWrkedHours.push($(this).val());
            //});

            //$("#div4").children("input[type=number]").each(function () {
            //    ThursdayWrkedHours.push($(this).val());
            //});

            //$("#div5").children("input[type=number]").each(function () {
            //    FridayWrkedHours.push($(this).val());
            //});

            //$("#div6").children("textarea").each(function () {
            //    if ($(this).val() != '')
            //        comments.push($(this).val());
            //});

            //var Mon = MondayWrkedHours.toString();
            //var MonW = Mon.replace(/,/g, "");

            //var Tue = TuesdayWrkedHours.toString();
            //var TueW = Tue.replace(/,/g, "");

            //var Wed = WednesdayWrkedHours.toString();
            //var WedW = Wed.replace(/,/g, "");

            //var Thur = ThursdayWrkedHours.toString();
            //var ThurW = Thur.replace(/,/g, "");

            //var Fri = FridayWrkedHours.toString();
            //var FriW = Fri.replace(/,/g, "");

            //var comm = comments.toString();
            //var comment = comm.replace(/,/g, "");
            ////alert(MonW);
            ////alert(MondayWrkedHours.toString());
            //------------------------------------------------

            if ($("#ddlNewProject").val() == "") {

                $.alert.open({ type: 'warning', content: 'Please select project you have worked.' });
            }

            else if (MonW.toString() == "" && TueW.toString() == "" && WedW.toString() == "" && ThurW.toString() == "" && FriW.toString() == "" && SatW.toString() == "" && SunW.toString() == "" && MonWb.toString() == "" && TueWb.toString() == "" && WedWb.toString() == "" && ThurWb.toString() == "" && FriWb.toString() == "" && SatWb.toString() == "" && SunWb.toString() == "") {
                $.alert.open({ type: 'warning', content: 'Please enter hours you have worked.' });
            }
            else if (MonW != "" || TueW != "" || WedW != "" || ThurW != "" || FriW != "" || SatW != "" || SunW != "" || MonWb != "" || TueWb != "" || WedWb != "" || ThurWb != "" || FriWb != "" || SatWb != "" || SunWb != "") {


                //alert(arrayOfTaskIds1.toString() + ',' + $("#ddlNewProject").val() + ',' + Localvalue + ',' + MondayWrkedHours.toString() + ',' + format(Monday) + ',' + aremarksArray.toString())
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, MondayWrkedHours.toString(), format(Monday), aremarksdetails.toString(), '0');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, TuesdayWrkedHours.toString(), format(tuesday), aremarksdetails.toString(), '0');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, WednesdayWrkedHours.toString(), format(Wedday), aremarksdetails.toString(), '0');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, ThursdayWrkedHours.toString(), format(Thurday), aremarksdetails.toString(), '0');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, FridayWrkedHours.toString(), format(Friday), aremarksdetails.toString(), '0');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, SaturdayWrkedHours.toString(), format(Saturday), aremarksdetails.toString(), '0');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, SundayWrkedHours.toString(), format(Sunday), aremarksdetails.toString(), '0');


                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, MondaybWrkedHours.toString(), format(Monday), bremarksdetails.toString(), '1');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, TuesdaybWrkedHours.toString(), format(tuesday), bremarksdetails.toString(), '1');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, WednesdaybWrkedHours.toString(), format(Wedday), bremarksdetails.toString(), '1');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, ThursdaybWrkedHours.toString(), format(Thurday), bremarksdetails.toString(), '1');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, FridaybWrkedHours.toString(), format(Friday), bremarksdetails.toString(), '1');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, SaturdaybWrkedHours.toString(), format(Saturday), bremarksdetails.toString(), '10');
                EnterWeeklyTimeSheet(arrayOfTaskIds1.toString(), $("#ddlNewProject").val(), Localvalue, SundaybWrkedHours.toString(), format(Sunday), bremarksdetails.toString(), '1');


                $("#lblMessage").css({ "color": "#062011", "font-size": "18px" });
                $("#lblMessage").text("TIMESHEET SUBMITTED.");





                setTimeout(function () {
                    window.location = "thisweektimesheet.aspx"
                }, 500);
            }
            else {
                $.alert.open({ type: 'warning', content: 'Please check the details you have entered.' });

            }

        });
        function EnterWeeklyTimeSheet(SubTasksIdArray, ProjectsId, Employee_ID, TimeSheet_wrkHours, TimeSheet_Date, Timesheet_Description, Billinghours) {
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
            var varParams = {};
            varParams.strKey = "Billinghours";
            varParams.strArgmt = Billinghours;
            varProcParams[6] = varParams;
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
                    localStorage.removeItem("EmpIdEnableTimesheet");
                    localStorage.removeItem("FromDateEnableTimesheet");
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

function Hsum(totctrl, curctrl, vtotal) {

    // alert(totctrl);
    var firstdayInput = null;
    var seconddayInut = null;
    var thireddayInput = null;
    var fourthdayInput = null;
    var fifthdayInput = null;
    var sixthdayInput = null;
    var seventhdayInput = null;
    var Htotalinput = null;
    var firstbdayInput = null;
    var secondbdayInut = null;
    var thiredbdayInput = null;
    var fourthbdayInput = null;
    var fifthbdayInput = null;
    var sixthbdayInput = null;
    var seventhbdayInput = null;
    var Htotalbinput = null;
    if (totctrl == 'a') {
        var fival = 0;
        var senval = 0;
        var thval = 0;
        var foval = 0;
        var fivval = 0;
        var sival = 0;
        var seval = 0;
        firstdayInput = $('#firstday' + curctrl);
        seconddayInut = $('#secondday' + curctrl);
        thireddayInput = $('#thirdday' + curctrl);
        fourthdayInput = $('#fourthday' + curctrl);
        fifthdayInput = $('#fifthday' + curctrl);
        sixthdayInput = $('#sixthday' + curctrl);
        seventhdayInput = $('#seventhday' + curctrl);
        // Htotalinput = $('#' + vtotal + curctrl);
        // alert(Htotalinput);

        if (firstdayInput.val() == '') {

            fival = 0;

        }
        else {
            fival = parseFloat(firstdayInput.val());

        }
        if (seconddayInut.val() == '') {

            senval = 0;

        }
        else {

            senval = parseFloat(seconddayInut.val());
        }
        if (thireddayInput.val() == '') {

            thval = 0;

        }
        else {

            thval = parseFloat(thireddayInput.val());
        }
        if (fourthdayInput.val() == '') {
            foval = 0;

        }
        else {

            foval = parseFloat(fourthdayInput.val());
        }
        if (fifthdayInput.val() == '') {
            fivval = 0;

        }
        else {

            fivval = parseFloat(fifthdayInput.val());
        }
        if (sixthdayInput.val() == '') {
            sival = 0;


        }
        else {

            sival = parseFloat(sixthdayInput.val());
        }
        if (seventhdayInput.val() == '') {


            seval = 0;
        }
        else {
            seval = parseFloat(seventhdayInput.val());

        }


        //alert(parseFloat(fival) + parseFloat(senval) + parseFloat(thval) + parseFloat(foval) + parseFloat(fivval) + parseFloat(sival) + parseFloat(seval));
        vtotal.value = parseFloat(fival) + parseFloat(senval) + parseFloat(thval) + parseFloat(foval) + parseFloat(fivval) + parseFloat(sival) + parseFloat(seval);



    }
    if (totctrl == 'b') {
        var fival = 0;
        var senval = 0;
        var thval = 0;
        var foval = 0;
        var fivval = 0;
        var sival = 0;
        var seval = 0;
        firstbdayInput = $('#firstbday' + curctrl);
        secondbdayInut = $('#secondbday' + curctrl);
        thiredbdayInput = $('#thiredbday' + curctrl);
        fourthbdayInput = $('#fourthbday' + curctrl);
        fifthbdayInput = $('#fifthbday' + curctrl);
        sixthbdayInput = $('#sixthbday' + curctrl);
        seventhbdayInput = $('#seventhbday' + curctrl);
        //Htotalbinput = $('#' + vtotal + curctrl);


        if (firstbdayInput.val() == '') {

            fival = 0;

        }
        else {
            fival = parseFloat(firstbdayInput.val());

        }
        if (secondbdayInut.val() == '') {

            senval = 0;

        }
        else {

            senval = parseFloat(secondbdayInut.val());
        }
        if (thiredbdayInput.val() == '') {

            thval = 0;

        }
        else {

            thval = parseFloat(thiredbdayInput.val());
        }
        if (fourthbdayInput.val() == '') {
            foval = 0;

        }
        else {

            foval = parseFloat(fourthbdayInput.val());
        }
        if (fifthbdayInput.val() == '') {
            fivval = 0;

        }
        else {

            fivval = parseFloat(fifthbdayInput.val());
        }
        if (sixthbdayInput.val() == '') {
            sival = 0;


        }
        else {

            sival = parseFloat(sixthbdayInput.val());
        }
        if (seventhbdayInput.val() == '') {


            seval = 0;
        }
        else {
            seval = parseFloat(seventhbdayInput.val());

        }



        vtotal.value = parseFloat(fival) + parseFloat(senval) + parseFloat(thval) + parseFloat(foval) + parseFloat(fivval) + parseFloat(sival) + parseFloat(seval);



    }

    //firstdayInput = $('#firstday' + curctrl);
    //seconddayInut = $('#secondday' + curctrl);
    //thireddayInput = $('#thirdday' + curctrl);
    //fourthdayInput = $('#fourthday' + curctrl);
    //fifthdayInput = $('#fifthday' + curctrl);
    //sixthdayInput = $('#sixthday' + curctrl);
    //seventhdayInput = $('#seventhday' + curctrl);

    ////aremarksdetails
    //firstbdayInput = $('#firstbday' + i);
    //secondbdayInut = $('#secondbday' + i);
    //thiredbdayInput = $('#thiredbday' + i);
    //fourthbdayInput = $('#fourthbday' + i);
    //fifthbdayInput = $('#fifthbday' + i);
    //sixthbdayInput = $('#sixthbday' + i);
    //seventhbdayInput = $('#seventhbday' + i);


}
function Htxtsum(totctrl, curctrl, totbctrl) {
    var subtaskArray = $('table#timval label.myLabel1');//totctrl, curctrl, vtotal,tarctrl

    var firstdayInput = null;
    var seconddayInut = null;
    var thireddayInput = null;
    var fourthdayInput = null;
    var fifthdayInput = null;
    var sixthdayInput = null;
    var seventhdayInput = null;
    var Htotalinput = null;
    var firstbdayInput = null;
    var secondbdayInut = null;
    var thiredbdayInput = null;
    var fourthbdayInput = null;
    var fifthbdayInput = null;
    var sixthbdayInput = null;
    var seventhbdayInput = null;


    // alert("entered");
    var tot = 0;
    var totb = 0;
    // alert(totctrl);
    var fival = 0;
    var fibbal = 0;
    var countOfsubtaskArray = subtaskArray.length;
    for (i = 0; i < countOfsubtaskArray - 1; i++) {
        if (totctrl == 'f') {
            firstdayInput = $('#firstday' + i);
            firstbdayInput = $('#firstbday' + i);
            if (firstdayInput.val() == '') {

                fival = 0;

            }
            else {
                fival = parseFloat(firstdayInput.val());

            }
            // alert(i);
            // alert(firstbdayInput.val());
            if (firstbdayInput.val() == '') {

                fibbal = 0;

            }
            else {
                fibbal = parseFloat(firstbdayInput.val());

            }
            tot = tot + fival;
            totb = totb + fibbal;
        }
        if (totctrl == 's') {
            firstdayInput = $('#secondday' + i);
            firstbdayInput = $('#secondbday' + i);
            if (firstdayInput.val() == '') {

                fival = 0;

            }
            else {
                fival = parseFloat(firstdayInput.val());

            }
            if (firstbdayInput.val() == '') {

                fibbal = 0;

            }
            else {
                fibbal = parseFloat(firstbdayInput.val());

            }
            tot = tot + fival;
            totb = totb + fibbal;
        }
        if (totctrl == 't') {
            firstdayInput = $('#thirdday' + i);
            firstbdayInput = $('#thiredbday' + i);
            if (firstdayInput.val() == '') {

                fival = 0;

            }
            else {
                fival = parseFloat(firstdayInput.val());

            }
            if (firstbdayInput.val() == '') {

                fibbal = 0;

            }
            else {
                fibbal = parseFloat(firstbdayInput.val());

            }
            tot = tot + fival;
            totb = totb + fibbal;
        }
        if (totctrl == 'fo') {
            firstdayInput = $('#fourthday' + i);
            firstbdayInput = $('#fourthbday' + i);
            if (firstdayInput.val() == '') {

                fival = 0;

            }
            else {
                fival = parseFloat(firstdayInput.val());

            }
            if (firstbdayInput.val() == '') {

                fibbal = 0;

            }
            else {
                fibbal = parseFloat(firstbdayInput.val());

            }
            tot = tot + fival;
            totb = totb + fibbal;
        }
        if (totctrl == 'fi') {
            firstdayInput = $('#fifthday' + i);
            firstbdayInput = $('#fifthbday' + i);
            if (firstdayInput.val() == '') {

                fival = 0;

            }
            else {
                fival = parseFloat(firstdayInput.val());

            }
            if (firstbdayInput.val() == '') {

                fibbal = 0;

            }
            else {
                fibbal = parseFloat(firstbdayInput.val());

            }
            tot = tot + fival;
            totb = totb + fibbal;
        }
        if (totctrl == 'si') {
            firstdayInput = $('#sixthday' + i);
            firstbdayInput = $('#sixthbday' + i);
            if (firstdayInput.val() == '') {

                fival = 0;

            }
            else {
                fival = parseFloat(firstdayInput.val());

            }
            if (firstbdayInput.val() == '') {

                fibbal = 0;

            }
            else {
                fibbal = parseFloat(firstbdayInput.val());

            }

            tot = tot + fival;
            totb = totb + fibbal;
        }
        if (totctrl == 'se') {
            firstdayInput = $('#seventhday' + i);
            firstbdayInput = $('#seventhbday' + i);
            if (firstdayInput.val() == '') {

                fival = 0;

            }
            else {
                fival = parseFloat(firstdayInput.val());

            }
            if (firstbdayInput.val() == '') {

                fibbal = 0;

            }
            else {
                fibbal = parseFloat(firstbdayInput.val());

            }
            tot = tot + fival;
            totb = totb + fibbal;
        }





    }
    curctrl.value = tot;
    totbctrl.value = totb;
}

function Vtxtsum(totctrl, curctrl) {
    var tot = 0;
    tot = parseFloat(totctrl.value);
    var cur = 0;
    cur = parseFloat(curctrl.value);
    var sumh = 0;
    sumh = tot + cur;
    // var ss = document.getElementById(totctrl).value
    totctrl.value = sumh;
    //alert(totctrl.value);

}




















