$(document).ready(function () {


    //if (localvalue == 126 || localvalue == 2 || localvalue == 12) {

    //    document.getelementbyid('assetmenu').style.display = 'block';


    //    //document.getelementbyid('ddtopmenubar').style.display = 'block';
    //}
    //else {
    //    document.getelementbyid('assetmenu').style.display = 'none';

    //}




    var Localvaluee = localStorage.getItem('EmployeeId');
    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        // window.location = "login.html";
    }
    else {

        var Localvalue = localStorage.getItem('EmployeeId');
        var name = localStorage.getItem('EmployeeName');
        $("#lblName").text(name);


        //if (Localvalue == 126 || Localvalue == 2 || Localvalue == 12) {
        if (Localvalue == 2 || Localvalue == 12 || Localvalue == 77) {
            var theControl = document.getElementById("Empcap");
            theControl.style.visibility = 'visible';

            var theControl = document.getElementById("ddlEmployee");
            theControl.style.visibility = 'visible';

            //document.getElementById('ddtopmenubar').style.display = 'block';
        }
        else {
            $("#ddlEmployee").val = Localvalue;
            var theControl = document.getElementById("Empcap");
            theControl.style.visibility = 'hidden';

            var theControl = document.getElementById("ddlEmployee");
            theControl.style.visibility = 'hidden';
        }


        var varDate = new Date();
        var varCurDate = varDate.getDate();
        var varCurMonth = (varDate.getMonth() + 1);
        var varCurYear = varDate.getFullYear();
        $("#txtfromDate").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            todayHighlight: true,
        });
        $("#txtfromDate").val(varCurMonth + "/" + varCurDate + "/" + varCurYear);

        $("#txttoDate").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            todayHighlight: true,
        });
        $("#txttoDate").val(varCurMonth + "/" + varCurDate + "/" + varCurYear);

        LoadEmployee();
        //CallAttendanceByHourly();
        //Loadvalues();
        $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableContractorDetails"></table>');
       
        var oTable = $('#tableContractorDetails').dataTable({
            "aaData": [
            ],

            "aoColumns": [
                {
                    "sTitle": "Sl No",
                    'sWidth': '4%'
                }, {
                    "sTitle": "Employee_Code",
                    'bVisible': false
                }, {
                    "sTitle": "EmpName",
                    'sWidth': '8%'
                }, {
                    "sTitle": "Date",
                    'sWidth': '8%'
                }, {
                    "sTitle": "In Time",
                    'sWidth': '8%'
                }, {
                    "sTitle": "Out Time",
                    'sWidth': '8%'
                },
                {
                    "sTitle": "Punch Records",
                    'sWidth': '20%'
                }, {
                    "sTitle": "Status ",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Worked Hours",
                    'sWidth': '10%'
                }
            ],

            "aLengthMenu": [
                [5, 10, 15, -1],
                [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            ////"iDisplayLength": 10,
            ////"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t><'row-fluid'<'span6'i><'span6'p>>",
            ////"oLanguage": {
            ////    "sLengthMenu": "",
            ////    "oPaginate": {
            ////        "sPrevious": "Prev",
            ////        "sNext": "Next"
            ////    }
            ////},
            ////"bFilter": false
            "iDisplayLength": 15,
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
                "sLengthMenu": "",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "bFilter": false,
            "bInfo": false,
        });
        jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
        jQuery('.paginate_disabled_previous').addClass("label label-default");
        jQuery('#tableContractorDetails_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tableContractorDetails_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


        $('#btnView').click(function () {
            //alert("hi");
            var tdate = new Date();
            var todayDate = tdate.getDate();
            var tMonth = tdate.getMonth();
            var sDate = new Date($("#txtfromDate").val());
            var selDate = sDate.getDate();
            var sMonth = sDate.getMonth();
            debugger
            if ((selDate == selDate) && (tMonth == sMonth)) {
                LoadTodayAttendance();
            }
            $("#tableContractorDetails").dataTable().fnClearTable();
            Loadvalues();
        });


    }
    function LoadTodaysAttendance() {
        var SpParams = {};
        SpParams.strProc = "GetAccessData";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.details != null) {
                    debugger

                    //$("#tableTimeSheet").dataTable().fnClearTable();
                    for (var j = 0; j < response.details.length; j++) {

                        jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1, (response.details[j].Employee_Code).toString(), (response.details[j].EmpName).toString(), (response.details[j].Attdate).toString(), (response.details[j].InTime).toString(), (response.details[j].OutTime).toString(), (response.details[j].PunchRecords).toString(), (response.details[j].Status).toString(), (response.details[j].actualHours).toString()]);
                        
                    }
                }
            }
        });
    }    
    //Load Attendance
    function LoadTodayAttendance() {
        
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "employeeId";
        varParams.strArgmt = Localvalue;//empId    
        varProcParams[0] = varParams;
        varParams = {};
        var SpParams = {};       
        SpParams.oProcParams = varProcParams;
        
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDailyAttendance",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    debugger
                    if (response != null) {                        
                        alert('Successfull')
                    }
                }
            });  
    }
    function Loadvalues() {
        //  alert(Localvalue);
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "firstdate";
        varParams.strArgmt = $("#txtfromDate").val();
        varProcParams[0] = varParams;
        varParams = {};

        varParams.strKey = "lastdate";
        varParams.strArgmt = $("#txttoDate").val();
        varProcParams[1] = varParams;
        varParams = {};
        var empid = "";
        if (Localvalue == 126 || Localvalue == 2 || Localvalue == 12) {
            empid = $("#ddlEmployee").val();

        }
        else {
            empid = Localvalue;
        }

        //alert($("#txtfromDate").val());
        varParams.strKey = "employeeId";
        varParams.strArgmt = empid;
        varProcParams[2] = varParams;
        varParams = {};



        var SpParams = {};
        SpParams.strProc = "GetAccessData";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.details != null) {
                    debugger

                    //$("#tableTimeSheet").dataTable().fnClearTable();
                    for (var j = 0; j < response.details.length; j++) {

                        jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1, (response.details[j].Employee_Code).toString(), (response.details[j].EmpName).toString(), (response.details[j].Attdate).toString(), (response.details[j].InTime).toString(), (response.details[j].OutTime).toString(), (response.details[j].PunchRecords).toString(), (response.details[j].Status).toString(), (response.details[j].actualHours).toString()]);


                        //if ((response.details[j].TimeSheet_Description).toString() == "APPROVED" || (response.details[j].TimeSheet_Description).toString() == "REJECTED") {
                        //    jQuery("#tableTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].TimeSheet_Id).toString(), (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks_WBS).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Description).toString(), (response.details[j].TimeSheet_Date).toString(), '', '']);
                        //}
                        //else {
                        //    //alert((response.details[j].Employee_OfficialMailId).toString())

                        //    jQuery("#tableTimeSheet").dataTable().fnAddData([j + 1, (response.details[j].TimeSheet_Id).toString(), (response.details[j].Projects_Name).toString(), (response.details[j].SubTasks_WBS).toString(), (response.details[j].TimeSheet_wrkHours).toString(), (response.details[j].TimeSheet_Description).toString(), (response.details[j].TimeSheet_Date).toString(), ' <div class="active btn-group btn-group-sm"> <button type="button" class="btn btn-primary bt.n-lg" id="btnEdit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EDIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</button>', '<button type="button" class="btn btn-warning b.tn-lg" id="btnDelete" width:100px>DELETE</button> </div>']);
                        //}
                    }
                }
            }
        });
    }

    $('#btnDownload').click(function () {

        //Downloadvalues();
        //exportTableToExcel("tableLeave", "Report_" + $("#ddlMonth option:selected").text()  + $("#ddlYear").val());
        //generate_excel('tableLeave');
        //var url = 'data:application/vnd.ms-excel,' + encodeURIComponent($('#tableLeave').html())
        //location.href = url
        //return false

        // HtmlTOExcel('xlsx');
        gettablevalues();
        //alert(document.getElementById('tblLeavehid').innerHTML);
        //var table = document.getElementById('tblLeavehid').innerHTML;
        //var preserveColors = (table.hasClass('table2excel_with_colors') ? true : false);
        //$(table).table2excel({
        //    filename: "Report_" + $("#ddlMonth option:selected").text() + $("#ddlYear").val() + ".xls", exclude_img: false, preserveColors: preserveColors
        //});

        $("#tblLeavehid").table2excel({
            filename: "Report_" + $("#ddlMonth option:selected").text() + $("#ddlYear").val() + ".xls", sheetName: "Report_" + $("#ddlMonth option:selected").text() + $("#ddlYear option:selected").val(), exclude_img: false, preserveColors: true,

        });



    });

    function gettablevalues() {



        var oTable = document.getElementById('tableContractorDetails');

        //gets rows of table
        var rowLength = oTable.rows.length;
        var tblstructure;
        //tblstructure = "<table class='auto-style1'><tr style='background - color: #FF6600;'><th style='font-weight: 900;background-color: #FF0000;'><b>Project</b></th><th style='font-weight: 900;background-color: #FF0000;'><b>Employee</b></th><th style='font-weight: 900;background-color: #FF0000;'><b>Utilization</b></th><td></td><td></td><th  style='font-weight: 700;height: 225px;background - color: #FF6600; text-align: center'><img src='https://www.techvantagesystems.com/media/1208/logo.png' alt='image'></th></tr>";
        //loops through rows    
        for (i = 1; i < rowLength; i++) {

            //gets cells of current row  
            var oCells = oTable.rows.item(i).cells;

            //gets amount of cells of current row
            var cellLength = oCells.length;
            // alert(oCells.item(1).innerHTML);
            //loops through each cell in current row


            if (oCells.item(1).innerHTML == "Total") {
                tblstructure = tblstructure + "<tbody><tr>";
                for (var j = 0; j < cellLength; j++) {

                    // get your cell info here

                    var cellVal = oCells.item(j).innerHTML;

                    tblstructure = tblstructure + "<td><b>" + oCells.item(j).innerHTML + "</b></td>";

                    //
                }
                tblstructure = tblstructure + "<td></td>";
                tblstructure = tblstructure + "<td></td>";
                tblstructure = tblstructure + "<td></td>";
                tblstructure = tblstructure + "</tr></tbody>";
            }
            else {
                tblstructure = tblstructure + "<tbody><tr  style='background - color: #FF6600;'>";
                for (var j = 0; j < cellLength; j++) {

                    // get your cell info here

                    var cellVal = oCells.item(j).innerHTML;

                    tblstructure = tblstructure + "<td>" + oCells.item(j).innerHTML + "</td>";
                    // 

                }
                tblstructure = tblstructure + "<td></td>";
                tblstructure = tblstructure + "<td></td>";
                tblstructure = tblstructure + "<td></td>";
                tblstructure = tblstructure + "</tr></tbody>";
            }

        }
        tblstructure = tblstructure + "</table >";
        console.log(tblstructure);

        document.getElementById('tblLeavehid').innerHTML = tblstructure;

    }




    function LoadEmployee() {
        var SpParams = {};
        SpParams.strProc = "Employee_ActiveEmpDrpDown";
        $.ajax({
            url: "/api/FIXZIService/GetHTTPDropDownResponse",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                $('#ddlEmployee').empty();
                $("#ddlEmployee").append(new Option("All", "All"));
                if (response != null) {

                    for (var i = 0; i < response.length; i++) {
                        {
                            $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                        }
                    }//for
                }//if
            }//response
        });//ajax
    }



});