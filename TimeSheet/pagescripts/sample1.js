$(document).ready(function () {
    var Localvalue = localStorage.getItem('EmployeeId');
    var name = localStorage.getItem('EmployeeName');
    document.getElementById("filesrc").src = "KnowledgeCenter/" + name + ".pdf";

    $('#lbl1').hide();
    $('#lbl2').hide();
    $('#lbl3').hide();
    $('#lbl4').hide();
    $('#lbl5').hide();
    var day = null;
    var tasksIdMon = [];
    var tasksIdTues = [];
    var tasksIdWed = [];
    var tasksIdThurs = [];
    var tasksIdFriday = [];
    var MonWrkedHours = [];
    var TuesWrkedHours = [];
    var WedWrkedHours = [];
    var ThursWrkedHours = [];
    var FriWrkedHours = [];
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    //var last = first + 6; // last day is the first day + 6

    var Monday = new Date(curr.setDate(first + 1));
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







    assignedProjectDrpDown();
    $('#example').DataTable({
        "bPaginate": false,
        "bFilter": false,
        "bInfo": false

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

                            $("#ddlNewProject").append(new Option(response[i].DisplayMember, response[i].ValueMember));



                        }
                    }//for
                }//if
            }//response

        });//ajax

    }



    $("#ddlNewProject").change(function () {

        jQuery('#div1').html('');
        jQuery('#div2').html('');
        jQuery('#div3').html('');
        jQuery('#div4').html('');
        jQuery('#div5').html('');

        LoadProjectTask();



    });







    function LoadProjectTask() {


        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Projects_ID";
        varParams.strArgmt = $("#ddlNewProject").val();
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



                for (var j = 0; j < response.length; j++) {





                    $('<input style="display:inline-flex; margin-right:2px; margin-left:2px" type="checkbox" class="TaskMonday" name="TaskMondayy" value=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</input>&nbsp;<input type="number" class="textboxM" name="wrkedHours" placeholder="Hours" min="1" max="10" pattern="\d+(\.\d*)?" style="height:25px;width:52px;margin-right:8px;float:right;clear:both;" id=' + response[j].DisplayMember + ' /><br/><br/> ').appendTo('#div1');
                    $('<input style="display:inline-flex; margin-right:2px;margin-left:2px" type="checkbox" class="TaskTuesday" name="TaskTuesday" value=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</input>&nbsp;<input type="number" class="textboxT" name="wrkedHours" placeholder="Hours" min="1" max="10" pattern="\d+(\.\d*)?" style="height:25px;width:52px;margin-right:8px;float:right;clear:both;" id=' + response[j].DisplayMember + '/><br/><br/>').appendTo('#div2');
                    $('<input style="display:inline-flex; margin-right:2px;margin-left:2px" type="checkbox" class="TaskWedday" name="TaskWedday" value=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</input>&nbsp;<input type="number" class="textboxW" name="wrkedHours" placeholder="Hours" min="1" max="10" pattern="\d+(\.\d*)?" style="height:25px;width:52px;margin-right:8px;float:right;clear:both;" id=' + response[j].DisplayMember + '/><br/><br/>').appendTo('#div3');
                    $('<input style="display:inline-flex; margin-right:2px;margin-left:2px" type="checkbox" class="TaskThursday" name="TaskThursday" value=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</input>&nbsp;<input type="number" class="textboxTh" name="wrkedHours" placeholder="Hours" min="1" max="10" pattern="\d+(\.\d*)?" style="height:25px;width:52px;margin-right:8px;float:right;clear:both;" id=' + response[j].DisplayMember + '/><br/><br/>').appendTo('#div4');
                    $('<input style="display:inline-flex; margin-right:2px;margin-left:2px" type="checkbox" class="TaskFriday" name="TaskFriday" value=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</input>&nbsp;<input type="number" class="textboxF" name="wrkedHours" placeholder="Hours" min="1" max="10" pattern="\d+(\.\d*)?" style="height:25px;width:52px;margin-right:8px;float:right;clear:both;" id=' + response[j].DisplayMember + '/><br/><br/>').appendTo('#div5');
                    $('#lbl1').show();
                    $('#lbl2').show();
                    $('#lbl3').show();
                    $('#lbl4').show();
                    $('#lbl5').show();
                    $("#checkMonday").attr("checked", false);
                    $("#checkTuesday").attr("checked", false);
                    $("#checkWednesday").attr("checked", false);
                    $("#checkThursday").attr("checked", false);
                    $("#checkFriday").attr("checked", false);


                 

                }
            }


        });
    }



   


    $("#checkMonday").change(function () {
        $("input[name='TaskMondayy").prop('checked', $(this).prop("checked"));
    });
    $("#checkTuesday").change(function () {
        $("input[name='TaskTuesday").prop('checked', $(this).prop("checked"));
    });
    $("#checkWednesday").change(function () {
        $("input[name='TaskWedday").prop('checked', $(this).prop("checked"));
    });
    $("#checkThursday").change(function () {
        $("input[name='TaskThursday").prop('checked', $(this).prop("checked"));
    });
    $("#checkFriday").change(function () {
        $("input[name='TaskFriday").prop('checked', $(this).prop("checked"));
    });


    $('#btnUpdate').click(function () {

        tasksIdMon = [];
        tasksIdTues = [];
        tasksIdWed = [];
        tasksIdThurs = [];
        tasksIdFriday = [];
        MonWrkedHours = [];
        TuesWrkedHours = [];
        WedWrkedHours = [];
        ThursWrkedHours = [];
        FriWrkedHours = [];

        $.each($("input[name='TaskMondayy']:checked"), function () {
            tasksIdMon.push($(this).val());
            //alert("hi TaskMonday");



        });

        $(".textboxM").each(function () {
            MonWrkedHours.push($(this).val());

        });
        $.each($("input[name='TaskTuesday']:checked"), function () {
            //alert("hi TaskTuesday");
            tasksIdTues.push($(this).val());

        });
        $.each($("input[name='TaskWedday']:checked"), function () {
            //alert("hi TaskWedday");
            tasksIdWed.push($(this).val());

        });
        $.each($("input[name='TaskThursday']:checked"), function () {
            //alert("hi TaskThursday");
            tasksIdThurs.push($(this).val());

        });
        $.each($("input[name='TaskFriday']:checked"), function () {
            //alert("hi TaskFriday");
            tasksIdFriday.push($(this).val());

        });


        //$(".textboxM").each(function () {


        //    MonWrkedHours.push($(this).val());

        //});

        $(".textboxT").each(function () {
            TuesWrkedHours.push($(this).val());

        });
        $(".textboxW").each(function () {
            WedWrkedHours.push($(this).val());

        });
        $(".textboxTh").each(function () {
            ThursWrkedHours.push($(this).val());

        });
        $(".textboxF").each(function () {
            FriWrkedHours.push($(this).val());

        });

        

        //EnterWeeklyTimeSheet('1,2,3', $("#ddlNewProject").val(), 2, '1,2,2', MonDesc, format(Monday));

        EnterWeeklyTimeSheet(tasksIdMon.toString(), $("#ddlNewProject").val(), 2, MonWrkedHours.toString(), $('#MonDesc').val(), format(Monday));
        EnterWeeklyTimeSheet(tasksIdTues.toString(), $("#ddlNewProject").val(), 2, TuesWrkedHours.toString(), $('#TuesDesc').val(), format(tuesday));
        EnterWeeklyTimeSheet(tasksIdWed.toString(), $("#ddlNewProject").val(), 2, WedWrkedHours.toString(), $('#WedDesc').val(), format(Wedday));
        EnterWeeklyTimeSheet(tasksIdThurs.toString(), $("#ddlNewProject").val(), 2, ThursWrkedHours.toString(), $('#ThursDesc').val(), format(Thurday));
        EnterWeeklyTimeSheet(tasksIdFriday.toString(), $("#ddlNewProject").val(), 2, FriWrkedHours.toString(), $('#FriDesc').val(), format(Friday));
        $("#lblMessage").css({ "color": "#3CB371", "font-size": "16px" });
        $("#lblMessage").text("Timesheet for this week submitted successfully");

        setTimeout(function () {
            window.location = "employeetimesheet.aspx"
        }, 1000);


    });


    function EnterWeeklyTimeSheet(SubTasksIdArray, ProjectsId, Employee_ID, TimeSheet_wrkHours, TimeSheet_Description, TimeSheet_Date) {
        
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
        varParams.strArgmt = 2;
        varProcParams[2] = varParams;
        varParams = {};



        var varParams = {};
        varParams.strKey = "TimeSheet_wrkHoursArray";
        varParams.strArgmt = TimeSheet_wrkHours;
        varProcParams[3] = varParams;
        varParams = {};


        var varParams = {};
        varParams.strKey = "TimeSheet_Description";
        varParams.strArgmt = TimeSheet_Description;
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


    

});