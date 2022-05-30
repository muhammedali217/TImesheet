$(document).ready(function () {
    alert('hi');
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

        var name = localStorage.getItem('EmployeeName');

        $("#lblName").text(name);
       
       
        if (Localvalue == 126) {

            document.getElementById('Assetmenu').style.display = 'block';


           
        }
        else {
            document.getElementById('Assetmenu').style.display = 'none';

        }
       
        Employeedrpdown();
        Assetdrpdown();

        

        $("#ddlEmployee").change(function () {
            alert('hi');
            AllocatedassetByEmployeeId($("#ddlEmployee").val());
        });

        $('#btnSubmit').click(function () {
          
        });

        $('#btnCancel').click(function () {
            //alert("cancel");
            location.reload(true);
        });

        $('#tblContractor').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableContractorDetails" style="width:800px;"></table>');
        var oTable = $('#tableContractorDetails').dataTable({
            "aaData": [
                /* Reduced data set */
            ],
            "aoColumns": [
                {
                    "sTitle": "Sl No",

                },
                {
                    "sTitle": "Asset ID",
                    'bVisible': false
                }, {
                    "sTitle": "Asset Code",
                    'sWidth': '5%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Asset Name",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Asset Type ID",
                    'bVisible': false
                }, {
                    "sTitle": "Asset Enhancement",
                    'sWidth': '0%',
                    'sClass': 'center'

                }, 



            ],

            "aLengthMenu": [
                [5, 10, 15, -1],
                [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": -1,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "bFilter": true,
            "bInfo": true,
            "scrollX": true,
            "scrollY": 320,
            "bDeferRender": true,
            "bProcessing": true,
            "bProcessing": true,
            "oLanguage": {
                "sLengthMenu": "",
                "sEmptyTable": "Please wait..data is loading",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            }
        });
        jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
        jQuery('.paginate_disabled_previous').addClass("label label-default");
        jQuery('#tableContractorDetails_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#tableContractorDetails_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


        var nEditing = null;


        function AllocatedassetByEmployeeId(EmployeeId) {
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Employee_ID";
            varParams.strArgmt = EmployeeId;
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

                            jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1, (response.details[j].EmployeeId).toString(), (response.details[j].Employee_Code).toString(), (response.details[j].empname).toString(), (response.details[j].Asset_code).toString(), (response.details[j].Asset_Name).toString()]);


                        }
                    }
                }
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


    }   

});