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


        $('#btnSubmit').click(function () {

            if ($("#ddlMonth").val() == 0) {
                alert('Please select Month');
            }
            else if ($("#ddlYear").val() == 0) {

                alert('Please select Year');
            }
            else {

                Loadvalues();
            }




        });

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



            var oTable = document.getElementById('tableLeave');

            //gets rows of table
            var rowLength = oTable.rows.length;
            var tblstructure;
            tblstructure = "<table class='auto-style1'><tr style='background - color: #FF6600;'><th style='font-weight: 900;background-color: #FF0000;'><b>Project</b></th><th style='font-weight: 900;background-color: #FF0000;'><b>Employee</b></th><th style='font-weight: 900;background-color: #FF0000;'><b>Utilization</b></th><td></td><td></td><th  style='font-weight: 700;height: 225px;background - color: #FF6600; text-align: center'><img src='https://www.techvantagesystems.com/media/1208/logo.png' alt='image'></th></tr>";
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




        function HtmlTOExcel(type, fun, dl) {
            var elt = document.getElementById('tableLeave');
            var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
            return dl ?
                XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
                XLSX.writeFile(wb, fun || ('student-recored.' + (type || 'xlsx')));
        }
        function Export() {
            $("tableLeave").table2excel({
                filename: "Report_" + $("#ddlMonth option:selected").text() + $("#ddlYear").val() + "Table.xls"
            });
        }
        function exportTableToExcel(tableID, filename = '') {
            var downloadLink;
            var dataType = 'application/vnd.ms-excel';
            var tableSelect = document.getElementById(tableID);
            var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

            // Specify file name
            filename = filename ? filename + '.xls' : 'excel_data.xls';

            // Create download link element
            downloadLink = document.createElement("a");

            document.body.appendChild(downloadLink);

            if (navigator.msSaveOrOpenBlob) {
                var blob = new Blob(['\ufeff', tableHTML], {
                    type: dataType
                });
                navigator.msSaveOrOpenBlob(blob, filename);
            } else {
                // Create a link to the file
                downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

                // Setting the file name
                downloadLink.download = filename;

                //triggering the function
                downloadLink.click();
            }
        }

        $('#tblLeave').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0" id="tableLeave" style="width:400px;"></table>');

        var oTable = $('#tableLeave').dataTable({
            "aaData": [
            ],

            "aoColumns": [
                {
                    "sTitle": "Project",
                    'sWidth': '10%'
                }, {
                    "sTitle": "Employee",
                    'sWidth': '10%'
                },
                {
                    "sTitle": "Utilization",
                    'sWidth': '10%'
                }

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





        function Loadvalues() {



            var varProcParams = new Array();
            var varParams = {};

            varParams.strKey = "P_Month";

            varParams.strArgmt = $("#ddlMonth").val();

            varProcParams[0] = varParams;

            varParams = {};

            var varParams = {};
            varParams.strKey = "P_Year";
            varParams.strArgmt = $("#ddlYear").val();
            varProcParams[1] = varParams;
            varParams = {};



            var SpParams = {};
            SpParams.strProc = "Get_Involvement_Data";
            SpParams.oProcParams = varProcParams;





            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if (response.details != null) {
                        $("#tableLeave").dataTable().fnClearTable();
                        //
                        for (var j = 0; j < response.details.length; j++) {
                            jQuery("#tableLeave").dataTable().fnAddData([(response.details[j].Project).toString(),
                            (response.details[j].Employee).toString(),
                            (response.details[j].Total).toString()]);


                        }
                    }
                }
            });
        }

    }










});