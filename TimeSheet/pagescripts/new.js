$(document).ready(function () {
   
    Export();
    function Export() {
        
        $.ajax({
            type: "POST",
            url: "/api/FIXZIService/ExportToExcel",
            contentType: "application/json; charset=utf-8",
            data: "{}",
            dataType: "data",
            async: "true",
            cache: "true",
            error: function (HttpContextResponse) {
                alert("within error");
                var spliting = HttpContextResponse.responseText;
                var myExcel = spliting.split("{");
                window.open('data:application/vnd.ms-excel,' + encodeURIComponent(myExcel[0]));
            } //HttpRespnse
        }); //ajax
    }

    
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

        jQuery('#div1').html('');
        jQuery('#div2').html('');
        jQuery('#div3').html('');
        jQuery('#div4').html('');
        jQuery('#div5').html('');
        jQuery('#divNewTasks').html('');


      

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




                    
                    $('<label class="myLabel" id=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</label> <br/><br/> ').appendTo('#divNewTasks');
                    $('.myLabel').css({
                        "display": "block",
                        "box-sizing": "padding-box",
                        "margin-left": "50px",
                        "font-weight": "500",
                        "float": "left",
                        "font-size": "17px",
                        "font-family": "veranda"

                    });
                    $('<input type="number" id=firstday class="FirstDay" name="1stday" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div1');
                    $('<input type="number" class="SecondDay" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div2');
                    $('<input type="number" class="ThirdDay" name="wrkedHours" placeholder="Hours" style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div3');
                    $('<input type="number" class="FourthDay" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div4');
                    $('<input type="number" class="Fifth" name="wrkedHours" placeholder="Hours"  style="height:25px;width:52px;margin-right:45px;float:right;clear:both;"/><br/><br/> ').appendTo('#div5');
                  



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
     
        if ($("#ddlNewProject").val() == "") {
            $.alert.open({ type: 'warning', content: 'Please select project you have worked.' });
        }


        else if (MondayWrkedHours.toString() != "" || TuesdayWrkedHours.toString() != "" || WednesdayWrkedHours.toString()!= "" || ThursdayWrkedHours.toString() != "" || FridayWrkedHours.toString() != "") {
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, MondayWrkedHours.toString(), format(Monday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, TuesdayWrkedHours.toString(), format(tuesday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, WednesdayWrkedHours.toString(), format(Wedday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, ThursdayWrkedHours.toString(), format(Thurday));
            EnterWeeklyTimeSheet(arrayOfTaskIds.toString(), $("#ddlNewProject").val(), Localvalue, FridayWrkedHours.toString(), format(Friday));
            $("#lblMessage").css({ "color": "#062011", "font-size": "18px" });
            $("#lblMessage").text("TIMESHEET SUBMITTED.");

            setTimeout(function () {
                window.location = "employeetimesheet.aspx"
            }, 2500);
        }
        else {
            $.alert.open({ type: 'warning', content: 'Please enter hours you have worked' });
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


});
        
       

    

    







    











