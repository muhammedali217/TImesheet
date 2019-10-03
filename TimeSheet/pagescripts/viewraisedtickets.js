$(document).ready(function () {
   
    var name = 'SUPPORT';
    $('#lblName').text(name);
    $('#tableTicketIssues').html('<table cellpadding="0" class="display responsive nowrap"  cellspacing="0" border="0"  id="tableTickets" style="width:500px;"></table>');



    var oTable = $('#tableTickets').dataTable({
        "aaData": [
        /* Reduced data set */
        ],

        "aoColumns": [
        {
            "sTitle": "ID",
            'bVisible': false
        },
        {
            "sTitle": "Sl.No"

        },
        {
            "sTitle": "Type"
        },
        {
            "sTitle": "Ticket.No"
            
        },
        {
            "sTitle": "Employee"

        },
        {
            "sTitle": "Priority"

            
        },
        {
            "sTitle": "Date"

            //,
            //'bVisible': false
        },
            {
                "sTitle": "Time"

                //,
                //'bVisible': false
            },
            {
                "sTitle": ""
               

                //,
                //'bVisible': false
            },
            {
                "sTitle": ""


                //,
                //'bVisible': false
            }

        ],

        "aLengthMenu": [
                    [5, 10, 15, -1],
                    [5, 10, 15, "All"] // change per page values here
        ],
        // set the initial value
        "aaSorting": [[1, "desc"]],
        "iDisplayLength": -1,
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "bFilter": false,
        "bInfo": true,
        "scrollX": true,
        "bDeferRender": true,
        "bProcessing": true,
        "oLanguage": {
            "sLengthMenu": "",
            "sEmptyTable": "Please select the Issue status",
            "oPaginate": {
                "sPrevious": "",
                "sNext": ""
            }
        }
    });
    jQuery('.paginate_disabled_previous').removeClass("paginate_disabled_previous")
    jQuery('.paginate_disabled_previous').addClass("label label-default");
    jQuery('#tableTickets_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
    jQuery('#tableTickets_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown


    var nEditing = null;

    // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   



    $("#ddlTicketStatus").change(function () {

        Loadvalues($("#ddlTicketStatus option:selected").text());

    });
    function Loadvalues(ddlvalue) {


        // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
        // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Ticket_IssueStatus";
        varParams.strArgmt = ddlvalue; 
        varProcParams[0] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "TicketIssue_ViewAllByStatus";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.details != null) {
                    $("#tableTickets").dataTable().fnClearTable();

                    for (var j = 0; j < response.details.length; j++) {

                        if ((response.details[j].Ticket_IssueStatus).toString() == 'RESOLVED') {
                            jQuery("#tableTickets").dataTable().fnAddData([(response.details[j].Ticket_IssueId).toString(), j + 1, (response.details[j].Ticket_IssueType).toString(), (response.details[j].Ticket_IssueNumber).toString(), (response.details[j].Employee_FirstName), (response.details[j].Ticket_IssuePriority).toString(),
                                (response.details[j].Ticket_IssueDate).toString(), (response.details[j].Ticket_IssueTime).toString(), '', ' '], false);
                        }
                        else {
                            jQuery("#tableTickets").dataTable().fnAddData([(response.details[j].Ticket_IssueId).toString(), j + 1, (response.details[j].Ticket_IssueType).toString(), (response.details[j].Ticket_IssueNumber).toString(), (response.details[j].Employee_FirstName), (response.details[j].Ticket_IssuePriority).toString(),
                                (response.details[j].Ticket_IssueDate).toString(), (response.details[j].Ticket_IssueTime).toString(), ' <div class="active btn-group btn-group-sm"> <button type="button" class="btn btn-success bt.n-lg" id="btnReply">REPLY</button>', '<button type="button" class="btn btn-danger b.tn-lg" id="btnUpdate" width:100px>UPDATE</button> </div>'], false);

                        }





                    }
                    jQuery("#tableTickets").dataTable().fnDraw();
                }
                //   alert(response.details);

            }
        });
    }

    $('#tableTickets').on('click', '#btnReply', function () {
        var nRow = $(this).parents('tr')[0];
        var TicketId = jQuery("#tableTickets").dataTable().fnGetData(nRow)[0];
        
        window.location = "replytoticket.aspx?TicketId=" + TicketId;

    });
    $('#tableTickets').on('click', '#btnUpdate', function () {
        
        var nRow = $(this).parents('tr')[0];

        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);
        //alert(aData[2]);
       // LoadSubTaskDrpDown(aData[2]);
        var TimeSheetId = jQuery("#tableTickets").dataTable().fnGetData(nRow)[1];

        //jqTds[0].innerHTML = '<input type="text" style="width:10px;" disabled  value="' + aData[0] + '">';
        //jqTds[1].innerHTML = '<input type="text" class="m-wrap small" value="' + aData[2] + '">';
        jqTds[6].innerHTML = '<select class="form-control input-alt" id="ddlStatus" style="width:200px;"><option value="">Choose Status</option> <option>RESOLVED</option><option>PENDING</option></select>';
        jqTds[7].innerHTML = '<h4><a class="save" style="color:rgb(60, 60, 86);">SAVE</a></h4>';
        jqTds[8].innerHTML = '<h4><a class="cancel" style="color:rgb(207, 104, 82);">CANCEL</a></h4>';
        //jqTds[5].innerHTML = '<h4><a class="cancel" style="color:red;"href=" ">CANCEL</a></h4>';
        
    });


    $('#tableTickets').on('click', 'a.save', function () {
        var nRow = $(this).parents('tr')[0];
        var aData = oTable.fnGetData(nRow);
        //alert(aData[0]);//sl.no
        //alert(aData[1]);//timesheetid
        //alert(aData[2]);//projectname
        //alert(aData[3]);//taskname
        //alert($('#ddlSubTasks').val());
        
        UpdateStatus(aData[0], $('#ddlStatus').val());
       
        $.alert.open({ type: 'info', content: 'Successfully Updated.' });
        $("#tableTickets").dataTable().fnClearTable();
        $('#ddlTicketStatus').val('1'); //
    });

    $('#tableTickets').on('click', 'a.cancel', function () {
       
        $("#tableTickets").dataTable().fnClearTable();
        $('#ddlTicketStatus').val('1'); //
    });


    function UpdateStatus(IssueID, status) {
       
        //alert(timesheetId);
        //alert(subtaskid);
        //alert(wrkhours);
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Ticket_IssueId";
        varParams.strArgmt = IssueID;
        varProcParams[0] = varParams;

        var varParams = {};
        varParams.strKey = "Ticket_IssueStatus";
        varParams.strArgmt = status;
        varProcParams[1] = varParams;


        var SpParams = {};
        SpParams.strProc = "Ticket_UpdateStatus";
        SpParams.oProcParams = varProcParams;

        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                if (response.status == 'SUCCESS') {



                    
                }
            }
        });
    }
});

