$(document).ready(function () {

    $("#lbl1").hide();
    $("#date").datepicker();
    var EmployeeId = localStorage.getItem('EmployeeId');

    var name = localStorage.getItem('EmployeeName');
    assignedProjectDrpDown();
    
    $("#lblName").text(name);
    LoadTimeSheetValues();
    $('#tblTimeSheet').hide();
    $('#tblHeading').hide();


    $('#date').on('change', function () {
        $('.datepicker').hide();
    });
    $('#txtTotalHours').on('change keyup', function () {
        // Remove invalid characters
        var sanitized = $(this).val().replace(/[^-.0-9]/g, '');
        // Remove non-leading minus signs
        sanitized = sanitized.replace(/(.)-+/g, '$1');
        // Remove the first point if there is more than one
        sanitized = sanitized.replace(/\.(?=.*\.)/g, '');
        // Update value
        $(this).val(sanitized);
    });
    
$('#tblTimeSheet').html('<table cellpadding="0" class="table v-middle"  cellspacing="0" border="0" class="display" id="tblViewMyTimeSheet"></table>');

    if (EmployeeId == null) {
        $.alert.open({ type: 'warning', content: 'Your session has timed out. Please Login' });
        setTimeout(function () {
            window.location = "login.html"
        }, 5000);
    }



    var oTable = $('#tblViewMyTimeSheet').dataTable({
        "aaData": [
        /* Reduced data set */
        ],

        "aoColumns": [
            {
                "sTitle": "Sl No",
                'sWidth': '20%'
            }, {
                "sTitle": "Project Name",
                'sWidth': '20%'
            }, {
                "sTitle": "SubTask",
                'sWidth': '20%'
            }, {
                "sTitle": "Worked Hours",
                'sWidth': '20%'
            }, {
                "sTitle": "Date",
                'sWidth': '20%'
                //,
                //'bVisible': false
            },
            {
                "sTitle": "Description",
                'sWidth': '20%'
                //,
                //'bVisible': false
            },
            {
                "sTitle": "Status",
                'sWidth': '20%'
                //,
                //'bVisible': false
            }


        ],

        "aLengthMenu": [
                    [5, 10, 15, -1],
                    [5, 10, 15, "All"] // change per page values here
        ],
        // set the initial value
        "iDisplayLength": 10,
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        //"aoColumns": [
        // { sWidth: '0%', 'bVisible': false },
        // { sWidth: '5%' },
        // { sWidth: '15%' },
        // { sWidth: '20%' },
        // { sWidth: '10%' },
        // { sWidth: '20%' },
        // { sWidth: '35%' }
        //],
        //"sPaginationType": "none",
        //  "bJQueryUI": true,

        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page",
            "oPaginate": {
                "sPrevious": "Prev",
                "sNext": "Next"
            }
        }
    });
   
   // alert("Hi");
    //$('#txtFromTime').datetimepicker({
    //    format: "mm/dd/yyyy HH:ii:ss P",
    //    showMeridian: true,
    //    autoclose: true,
    //    todayHighlight: true,
    //    minDate:0
    //});



    //$('#txtToTime').datetimepicker({
    //    format: "mm/dd/yyyy HH:ii:ss P",
    //    showMeridian: true,
    //    autoclose: true,
    //    todayHighlight: true
    //});


    
    $("#ddlDate").change(function () {
        $("#lblDate").show();
        $('#lblDate').css("fontSize", "15px");
        $('#lblDate').css("color", "black");
        $('#lblDate').css("fontWeight", "bold");
        $("#lblDate").text('SELECTED DATE IS ' +$('#ddlDate :selected').text());
        

        
    });


    function assignedProjectDrpDown() {
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Employee_ID";
        varParams.strArgmt = EmployeeId;
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
                    $('#lbl').css("fontSize", "12px");
                    $('#lbl').css("color", "red");
                    $('#lbl').text('You are not yet assigned to Projects. Please contact Project Lead.');
                    $("#txtTotalHours").prop('disabled', true);
                    $("#txtDescription").prop('disabled', true);
                   


                }
                if (response != null) {
                    //$('#lbl').hide();
                    for (var i = 0; i < response.length; i++) {
                        {

                            $("#ddlProject").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }//for
                }//if
            }//response

        });//ajax
       
    }
    

    $("#ddlProject").change(function () {

        jQuery('#div1').html('');
        $('#div1').show();
        $('#checkAll').show();
        $('#lbl1').show();
       

        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Projects_ID";
        varParams.strArgmt = $("#ddlProject").val();
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
                    $('<input style="display:inline-flex; margin-right:2px; margin-left:2px" type="checkbox" class="CheckBoxAll" name="CheckBoxAll" value=' + (response[j].ValueMember) + '>' + (response[j].DisplayMember) + '</input>&nbsp;<input type="number" class="txtHours" name="txtHours" placeholder="Hours" min="1" max="10" pattern="\d+(\.\d*)?" style="height:25px;width:52px;margin-right:8px;float:right;clear:both;" id=' + response[j].DisplayMember + ' /><br/><br/> ').appendTo('#div1');
                    $("#lbl1").show();
                    $("#checkAll").attr("checked", false);
                }
            }//response
        });//ajax


        
    });


    $("#checkAll").change(function () {
        $("input[name='CheckBoxAll").prop('checked', $(this).prop("checked"));
    });



    $("#btnSubmit").click(function () {



        tasksId = [];
        WrkedHours = [];

        $.each($("input[name='CheckBoxAll']:checked"), function () {
            tasksId.push($(this).val());
            //alert("hi TaskMonday");



        });

        $(".txtHours").each(function () {
            WrkedHours.push($(this).val());

        });

        if ($("#ddlProject").val() == '') {
            $.alert.open({ type: 'warning', content: 'Please choose the project' });
        }
        

        else if ($("#date").val()=='') {
            $.alert.open({ type: 'warning', content: 'Please Select the Date.' });
        }

        else if (tasksId == '') {
            $.alert.open({ type: 'warning', content: 'Please choose atleast one task.' });
        }
        else if (WrkedHours == ',') {
            $.alert.open({ type: 'warning', content: 'Please enter hours you worked.' });
        }

        else {
            
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "SubTasksIdArray";
            varParams.strArgmt = tasksId.toString();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "ProjectsId";
            varParams.strArgmt = $("#ddlProject").val();
            varProcParams[1] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = EmployeeId;
            varProcParams[2] = varParams;
            varParams = {};



            var varParams = {};
            varParams.strKey = "TimeSheet_wrkHoursArray";
            varParams.strArgmt = WrkedHours.toString();
            varProcParams[3] = varParams;
            varParams = {};


            var varParams = {};
            varParams.strKey = "TimeSheet_Description";
            varParams.strArgmt = $('#txtDescription').val();
            varProcParams[4] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "TimeSheet_Date";
            varParams.strArgmt = $('#date').val();
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
                    if (response.status == 'SUCCESS') {
                        $.alert.open({ type: 'info', content: 'Timesheet successfully submitted.' });
                        $("#ddlProject").val('');
                        $("#ddlTasks").val('');
                        $("#txtTotalHours").val('');
                        $("#txtDescription").val('');
                        $('#div1').hide();
                        $('#checkAll').hide();
                        $('#lbl1').hide();


                    }
                    else {

                        $.alert.open({ type: 'warning', content: 'Please check the details submitted.' });
                    }
                }
            });
        }
    });

                        

    $('#btnCancel').click(function () {
        //alert("cancel");
        location.reload(true);
    });




   


    function LoadTimeSheetValues() {

        $('#tblHeading').show();
        //alert("Within db");
        //alert(EmployeeId);
        var varProcParams = new Array();

        var varParams = {};
        varParams.strKey = "Employee_ID";
        varParams.strArgmt = EmployeeId;
        varProcParams[0] = varParams;
        varParams = {};


        var SpParams = {};
        SpParams.strProc = "TimeSheet_View1WkTimeSheet";
        SpParams.oProcParams = varProcParams;
        // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
        // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                //alert(response.details);
                if (response.details != null) {
                   
                    $("#tblViewMyTimeSheet").dataTable().fnClearTable();
                    for (var j = 0; j < response.details.length; j++) {
                        if ((response.details[j].TimeSheet_Status).toString() == 'Pending') {

                            jQuery("#tblViewMyTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Date),
                                (response.details[j].TimeSheet_Description), '<label class="warning">Pending</label>']);
                        }
                        else if ((response.details[j].TimeSheet_Status).toString() == 'Approved') {
                            jQuery("#tblViewMyTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Date),
                                (response.details[j].TimeSheet_Description), '<label class="success">Approved</label>']);
                        }
                        else {
                            jQuery("#tblViewMyTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Date),
                               (response.details[j].TimeSheet_Description), '<label class="danger">Rejected</label>']);
                        }


                    }
                }
                //   alert(response.details);

            }
        });
    }




    $('#btnViewPrevious').click(function () {
        $('#tblTimeSheet').show();
        $('#tblHeading').show();
        LoadTimeSheetValues();
        $('#tblViewMyTimeSheet').focus();
        $(window).scrollTop($('#tblTimeSheet').offset().bottom);
        jQuery("#tblViewMyTimeSheet").attr("tabindex", -1).focus();
    });
    
});



