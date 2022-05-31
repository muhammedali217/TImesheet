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


            //document.getElementById('ddtopmenubar').style.display = 'block';
        }
        else {
            document.getElementById('Assetmenu').style.display = 'none';

        }

        Loadvalues();

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
                    "sTitle": "Employee ID",
                    'bVisible': false
                }, {
                    "sTitle": "Employee Code",
                    'sWidth': '5%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Employee",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Asset Code",
                    'sWidth': '1%',
                    'sClass': 'center'
                }, {
                    "sTitle": "Asset Name",
                    'sWidth': '0%',
                    'sClass': 'center'

                }, {
                    "sTitle": "Asset Description",
                    'sWidth': '0%',
                    'sClass': 'center'
                }, {
                    "sTitle": "OS Type",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Softwares Used",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Sez",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Asset Status",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Asset Type",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Allocated Date",
                    'sWidth': '0%',
                    'sClass': 'center'
                },

                {
                    "sTitle": "Deallocated Date",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Allocated Status",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Asset Remarks",
                    'sWidth': '0%',
                    'sClass': 'center'
                },
                {
                    "sTitle": "Project",
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


        $('#btnSubmit').click(function () {

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

            //$("#tblLeavehid").table2excel({
            //    filename: "Report_AssetDetails", exclude_img: false, preserveColors: true,

            //});

            $("#tblLeavehid").table2excel({
                filename: "Report_AssetDetails.xls", sheetName: "AssetDetails", exclude_img: false, preserveColors: true,

            });



        });


        function gettablevalues() {



            var oTable = document.getElementById('tableContractorDetails');

            //gets rows of table
            var rowLength = oTable.rows.length;
            var tblstructure;
            tblstructure = "<table><tr><th><b>Sl.No</th><th><b>Employee Code</th><th><b>Employee</b></th><th><b>Asset Code</b></th><th><b>Asset Name</b></th><th><b>Asset Description</b></th><th><b>OS Type</b></th> <th><b>Software Used</b></th><th><b>Sez</b></th><th><b>Asset Status</b></th><th><b>Asset Type</b></th><th><b>Allocated Date</b></th><th><b>Deallocated Date</b></th><th><b>Allocated Status</b></th><th><b>Asset Remarks</b></th><th><b>Project</b></th></tr>";
            //loops through rows    
            for (i = 1; i < rowLength; i++) {

                //gets cells of current row  
                var oCells = oTable.rows.item(i).cells;

                //gets amount of cells of current row
                var cellLength = oCells.length;
                // alert(oCells.item(1).innerHTML);
                //loops through each cell in current row



                tblstructure = tblstructure + "<tbody><tr>";
                for (var j = 0; j < cellLength; j++) {

                    // get your cell info here
                    var cellVal = oCells.item(j).innerHTML;

                    tblstructure = tblstructure + "<td>" + oCells.item(j).innerHTML + "</td>";

                }

                tblstructure = tblstructure + "</tr></tbody>";



            }
            tblstructure = tblstructure + "</table >";
            console.log(tblstructure);

            document.getElementById('tblLeavehid').innerHTML = tblstructure;

        }

        function Loadvalues() {

            //var varProcParams = new Array();
            //var varParams = {};
            //varParams.strKey = "Employee_ID";
            //varParams.strArgmt = Localvalue;
            //varProcParams[0] = varParams;
            //varParams = {};


            var SpParams = {};
            SpParams.strProc = "Get_Asset_Allocation";
            // SpParams.oProcParams = varProcParams;

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

                            alert(response.details[j].Employee_Id);
                            jQuery("#tableContractorDetails").dataTable().fnAddData([j + 1, (response.details[j].Employee_Id).toString(), (response.details[j].Employee_Code).toString(), (response.details[j].Employee).toString(), (response.details[j].Asset_code).toString(), (response.details[j].Asset_Name).toString(), (response.details[j].Asset_Description).toString(), (response.details[j].Asset_enhancement).toString(), (response.details[j].Asset_Lic_Sw).toString(), (response.details[j].Asset_Cess).toString(), (response.details[j].Asset_Status_Desc).toString(), (response.details[j].Assettype_Desc).toString(), (response.details[j].Allocated_Date).toString(), (response.details[j].Deallocated_Date).toString(), (response.details[j].AllocatedStatus).toString(), (response.details[j].Asset_Remarks).toString(), (response.details[j].Remarks).toString()]);

                        }
                    }
                }
            });
        }
















    }

});

