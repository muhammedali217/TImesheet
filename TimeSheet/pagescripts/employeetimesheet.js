$().ready(function () {
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

        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');


        $("#lblName").text(name);
        var varDate = new Date();
        var varCurDate = varDate.getDate();
        var varCurMonth = (varDate.getMonth() + 1);
        var varCurYear = varDate.getFullYear();

        $("#txtDate").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            todayHighlight: true,
        });


        $("#txtDate").val(varCurMonth + "/" + varCurDate + "/" + varCurYear);
        Loadvalues();
        $('#tblimeSheet').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableTimeSheet"></table>');

        var oTable = $('#tableTimeSheet').dataTable({
            "aaData": [
            ],

            "aoColumns": [
             {
                 "sTitle": "Sl No",
                 'sWidth': '10%'
             }, {
                 "sTitle": "TimeSheet_Id",
                 'bVisible': false
             }, {
                 "sTitle": "Project",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Task Worked",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Hours",
                 'sWidth': '10%'
             }, {
                 "sTitle": "Status",
                 'sWidth': '20%'
             },
             {
                 "sTitle": "Date",
                 'sWidth': '20%'
             }, {
                 "sTitle": " ",
                 'sWidth': '10%'
             }, {
                 "sTitle": "",
                 'sWidth': '10%'
             }
            ],

            "aLengthMenu": [
                        [5, 10, 15, -1],
                        [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",

            "oLanguage": {
                "sLengthMenu": "",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "bFilter": false
        });


        function Loadvalues() {

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = Localvalue;
            varProcParams[0] = varParams;
            varParams = {};

            varParams.strKey = "SelectedDate";
            varParams.strArgmt = $("#txtDate").val();
            varProcParams[1] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "TimeSheet_EmpTimeSheetView";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.details != null) {
                        //$("#tableTimeSheet").dataTable().fnClearTable();
                        for (var j = 0; j < response.details.length; j++) {
                            if ((response.details[j].TimeSheet_Description).toString() == "APPROVED" || (response.details[j].TimeSheet_Description).toString() == "REJECTED") {
                                jQuery("#tableTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].TimeSheet_Id).toString(), (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks_WBS).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Description).toString(), (response.details[j].TimeSheet_Date).toString(), '', '']);
                            }
                            else {
                                //alert((response.details[j].Employee_OfficialMailId).toString())

                                jQuery("#tableTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].TimeSheet_Id).toString(), (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks_WBS).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Description).toString(), (response.details[j].TimeSheet_Date).toString(), ' <div class="active btn-group btn-group-sm"> <button type="button" class="btn btn-primary bt.n-lg" id="btnEdit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EDIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</button>', '<button type="button" class="btn btn-warning b.tn-lg" id="btnDelete" width:100px>DELETE</button> </div>']);
                            }
                        }
                    }
                }
            });
        }

        $('#tableTimeSheet').on('click', '#btnEdit', function () {

            var nRow = $(this).parents('tr')[0];

            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            //alert(aData[2]);
            LoadSubTaskDrpDown(aData[2]);
            var TimeSheetId = jQuery("#tableTimeSheet").dataTable().fnGetData(nRow)[1];

            //jqTds[0].innerHTML = '<input type="text" style="width:10px;" disabled  value="' + aData[0] + '">';
            //jqTds[1].innerHTML = '<input type="text" class="m-wrap small" value="' + aData[2] + '">';
            jqTds[2].innerHTML = '<select class="form-control input-alt" id="ddlSubTasks" style="width:200px;"><option value="">Choose Project</option></select>';
            jqTds[3].innerHTML = '<input type="number" step="0.5" class="m-wrap small" min="1" max="10" pattern="\d+(\.\d*)?" style="width:50px;" id="wrkhours" value="' + aData[4] + '">';
            jqTds[4].innerHTML = '<h4><a class="save" style="color:#008055;">UPDATE</a></h4>';
            jqTds[5].innerHTML = '<h4><a class="cancel" style="color:red;"href=" ">CANCEL</a></h4>';




        });


        $('#tableTimeSheet').on('click', 'a.save', function () {
            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            //alert(aData[0]);//sl.no
            //alert(aData[1]);//timesheetid
            //alert(aData[2]);//projectname
            //alert(aData[3]);//taskname
            //alert($('#ddlSubTasks').val());

            EditTimeSheetRecord(aData[1], $('#ddlSubTasks').val(), $('#wrkhours').val());
            $.alert.open({ type: 'info', content: 'Successfully Updated.' });
            $("#tableTimeSheet").dataTable().fnClearTable();
            setTimeout(Loadvalues(), 2000);
        });




        $('#txtDate').on('change', function () {
            $('.datepicker').hide();
        });
        $('#tableTimeSheet').on('click', '#btnDelete', function () {

            var nRow = $(this).parents('tr')[0];
            var TimeSheetId = jQuery("#tableTimeSheet").dataTable().fnGetData(nRow)[1];

            $.alert.open('Are you sure to delete this record ?', { 1: 'Yes', 2: 'No' }, function (button) {
                if (button == 1) {
                    DeleteTimeSheetRecotd(TimeSheetId);
                }
            });



        });



        $("#txtDate").change(function () {
            $("#tableTimeSheet").dataTable().fnClearTable();
            Loadvalues();
        });



        function DeleteTimeSheetRecotd(timesheetId) {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "TimeSheet_Id";
            varParams.strArgmt = timesheetId;
            varProcParams[0] = varParams;

            var SpParams = {};
            SpParams.strProc = "TimeSheet_Delete";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {

                        $.alert.open({ type: 'info', content: 'Deleted Successfully' });
                        $("#tableTimeSheet").dataTable().fnClearTable();
                        Loadvalues();
                    }
                }
            });
        }


        function LoadSubTaskDrpDown(prjectName) {

            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Projects_Name";
            varParams.strArgmt = prjectName;
            varProcParams[0] = varParams;

            var varParams = {};
            varParams.strKey = "Employee_Id";
            varParams.strArgmt = Localvalue;
            varProcParams[1] = varParams;

            var SpParams = {};
            SpParams.strProc = "Projects_GetSubTasks@Edit";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    $('#ddlSubTasks').empty();

                    if (response != null) {

                        for (var i = 0; i < response.length; i++) {
                            //$("#ddlSubTasks").append(new Option('Melwyn', 1));
                            $("#ddlSubTasks").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }//for


                }

            });
        }



        function EditTimeSheetRecord(timesheetId, subtaskid, wrkhours) {
            //alert(timesheetId);
            //alert(subtaskid);
            //alert(wrkhours);
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "TimeSheet_Id";
            varParams.strArgmt = timesheetId;
            varProcParams[0] = varParams;

            var varParams = {};
            varParams.strKey = "SubTasks_Id";
            varParams.strArgmt = subtaskid;
            varProcParams[1] = varParams;

            var varParams = {};
            varParams.strKey = "TimeSheet_wrkHours";
            varParams.strArgmt = wrkhours;
            varProcParams[2] = varParams;

            var SpParams = {};
            SpParams.strProc = "TimeSheet_EmpEdit";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response.status == 'SUCCESS') {



                        // Loadvalues();
                    }
                }
            });
        }
        $('#btnthisWeek').click(function () {
            window.location = 'thisweektimesheet.aspx';
        });
    }
});