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
        var Localvalue = localStorage.getItem('EmployeeId');

        var name = localStorage.getItem('EmployeeName');

        $("#lblName").text(name);


        if (Localvalue == 126) {

            document.getElementById('Assetmenu').style.display = 'block';



        }
        else {
            document.getElementById('Assetmenu').style.display = 'none';

        }

       // alert('hi');
        Employeedrpdown();
        Assetdrpdown();
       // LeaveSummary();
       // Loadvalues('2259');
        $("#ddlEmployee").change(function () {
            Loadvalues($("#ddlEmployee").val());
        });

        $("#ddlAsset").change(function () {


            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = $("#ddlEmployee").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "asset_ID";
            varParams.strArgmt = $("#ddlAsset").val();
            varProcParams[1] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "AssetAllocateCheck";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    alert(response.details.length);
                    if (response.details.length != 1) {

                        document.getElementById('btnDeallocate').style.display = 'none';
                        document.getElementById('btnAllocate').style.display = 'block';
                    }
                    else {

                        document.getElementById('btnDeallocate').style.display = 'block';
                        document.getElementById('btnAllocate').style.display = 'none';
                        //for (var i = 0; i < response.length; i++) {
                        //    {

                        //        $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        //    }
                        //}//for
                    }//if
                }//response
            });


        });

        $('#btnCancel').click(function () {
            //alert("cancel");
            location.reload(true);
        });

        $('#btnDeallocate').click(function () {
            //alert("cancel");
            AssetDeAllocate();
            location.reload(true);
        });

        $('#btnAllocate').click(function () {
            AssetAllocate();
            location.reload(true);
        });

        function AssetAllocate() {


            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = $("#ddlEmployee").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "asset_ID";
            varParams.strArgmt = $("#ddlAsset").val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Remarks";
            varParams.strArgmt = $("#txtRemarks").val();
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Location";
            varParams.strArgmt = $("#txtLocation").val();
            varProcParams[3] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "AssetAllocateEmployee";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {
                        $.alert.open({ type: 'info', content: 'Asset Allocated Successfully.' });

                        setTimeout(function () {
                           // location.reload(true);
                        }, 1000);


                    }//if
                    else {
                        $.alert.open({ type: 'warning', content: 'Please check the details you have entered.' });
                    }
                }//response
            });


        }

        function AssetDeAllocate() {

            var varProcParams = new Array();

            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = $("#ddlEmployee").val();
            varProcParams[0] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "asset_ID";
            varParams.strArgmt = $("#ddlAsset").val();
            varProcParams[1] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Remarks";
            varParams.strArgmt = $("#txtRemarks").val();
            varProcParams[2] = varParams;
            varParams = {};

            var varParams = {};
            varParams.strKey = "Location";
            varParams.strArgmt = $("#txtLocation").val();
            varProcParams[3] = varParams;
            varParams = {};

            var SpParams = {};
            SpParams.strProc = "AssetDeAllocateEmployee";
            SpParams.oProcParams = varProcParams;

            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.status == 'SUCCESS') {
                        $.alert.open({ type: 'info', content: 'Asset DeAllocated Successfully.' });

                        setTimeout(function () {
                            // location.reload(true);
                        }, 1000);


                    }//if
                    else {
                        $.alert.open({ type: 'warning', content: 'Please check the details you have entered.' });
                    }
                }//response
            });


        }

       
        function Employeedrpdown() {



            var SpParams = {};
            SpParams.strProc = "EmployeeAll_DrpDown";

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response != null) {

                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                }//response
            });


        }

        function Assetdrpdown() {




            var SpParams = {};
            SpParams.strProc = "AssetAll_DrpDown";

            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {

                    if (response != null) {

                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlAsset").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                }//response
            });


        }


        $('#tblLeave').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableLeave" style="width:800px;"></table>');

        var oTable = $('#tableLeave').dataTable({
            "aaData": [
            ],

            "aoColumns": [
                {
                    "sTitle": "Employee Id",
                    'bVisible': false
                },
                {
                    "sTitle": "Sl No",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Employee Code",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Employee Name",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Asset Code",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Asset Name",
                    'sWidth': '10%'
                },
                {
                    "sTitle": "Asset Id",
                    'bVisible': false
                },
                {
                    "sTitle": "Location",
                    'sWidth': '10%'
                }
            

            ],

            "aLengthMenu": [
                [5, 10, 15, -1],
                [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 100,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "aaSorting": [[1, "asc"]],
            "oLanguage": {
                "sLengthMenu": "",
                "sEmptyTable": "No attendance available for this date",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "bFilter": false,
            "bInfo": false,
        });

        function Loadvalues(employeeId) {
            alert(employeeId);
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = employeeId;
            varProcParams[0] = varParams;
            varParams = {};


            var SpParams = {};
            SpParams.strProc = "AssetAllocatedByEmployeeId";
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
                            alert((response.details[j].EmployeeId).toString());
                            jQuery("#tableLeave").dataTable().fnAddData([(response.details[j].EmployeeId).toString(), j + 1, (response.details[j].Employee_Code).toString(), (response.details[j].empname).toString(), (response.details[j].Asset_code).toString(), (response.details[j].Asset_Name).toString(), (response.details[j].AssetId).toString(), (response.details[j].Location).toString()]);
                           
                        }
                    }
                }
            });
        }


       



      


        



       



      

        function parseDate(str) {
            var mdy = str.split('/')
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        }

        function daydiff(first, second) {
            return Math.round((second - first) / (1000 * 60 * 60 * 24));
        }


    }







    function LeaveSummary() {
        var totalApproved;
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Employee_ID";
        varParams.strArgmt = Localvalue;
        varProcParams[0] = varParams;
        varParams = {};


        var SpParams = {};
        SpParams.strProc = "LeaveSummary";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                //alert(response.details[0].TotalPLApproved);
                if (response.details != null) {
                    console.log(response.details);
                    $("#LeaveSummary").dataTable().fnClearTable();
                    if (response.details[0].TotalPLApproved == null) {
                        totalApproved = '0';
                        //alert(totalApproved);
                    }
                    else {
                        totalApproved = (response.details[0].TotalPLApproved).toString();

                    }

                    jQuery("#LeaveSummary").dataTable().fnAddData([(response.details[0].PL).toString(), (response.details[0].Total).toString(), (response.details[0].TotalPLApplied).toString(), totalApproved, (response.details[0].TotalPLRemining).toString()]);


                    jQuery("#LeaveSummary").dataTable().fnAddData([(response.details[0].SL).toString(), (response.details[0].TotalSL).toString(), (response.details[0].TotalSLApplied).toString(), (response.details[0].TotalSLApproved).toString(), (response.details[0].TotalSLRemining).toString()]);
                }
            }
        });
    }



});