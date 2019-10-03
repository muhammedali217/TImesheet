$(document).ready(function () {



    Loadvalues();

    $('#tblContractor').html('<table cellpadding="0" class="display table table-bordered"  cellspacing="0" border="0"  id="tableContractorDetails" style="width:800px;"></table>');



    var oTable = $('#tableContractorDetails').dataTable({
        "aaData": [
        /* Reduced data set */
        ],

        "aoColumns": [
            //{
            //    "className": 'details-control',
            //    "orderable": false,
            //    "data": null,
            //    "defaultContent": '',
            //    'sWidth': '5%'
            //},

        {
            "sTitle": "ID",
            'bVisible': false
        }, {
            "sTitle": "Sl No",
            'sWidth': '1%',
            'sClass': 'center',
            'bVisible': false

        }, {
            "sTitle": "Name",
            'sWidth': '1%',
            'sClass': 'center'
        }, {
            "sTitle": "Email",
            'sWidth': '1%',
            'sClass': 'center'
        }, {
            "sTitle": "Mobile",
            'sWidth': '1%',
            'sClass': 'center'

        }, {
            "sTitle": "Qualification",
            'sWidth': '1%',
            'sClass': 'center'

            //,
            //'bVisible': false
        },
        {
            "sTitle": "Institution",
            'sWidth': '1%',
            'sClass': 'center'

            //,
            //'bVisible': false
        },
        {
            "sTitle": "Other",
            'sWidth': '1%',
            'sClass': 'center'


        },
        {
            "sTitle": "Proficiency",
            'sWidth': '1%',
            'sClass': 'center'


        },

        {
            "sTitle": "Experience",
            'sWidth': '1%',
            'sClass': 'center'


        },
        {
            "sTitle": "Know Through",
            'sWidth': '1%',
            'sClass': 'center'


        },
        {
            "sTitle": "Interest",
            'sWidth': '10%',
            'sClass': 'center'


        },
        {
            "sTitle": "Send UniqueID",
            'sWidth': '10%',
            'sClass': 'center'


        },
        {
            "sTitle": "Response Received",
            'sWidth': '10%',
            'sClass': 'center'


        }


        ],

        "aLengthMenu": [
                    [5, 10, 15, -1],
                    [5, 10, 15, "All"] // change per page values here
        ],
        // set the initial value
        "iDisplayLength": -1,
        "aaSorting": [[1, "asc"]],
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "bFilter": true,
        "bInfo": true,
        "scrollX": true,
        "bDeferRender": true,
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

    // *****************************END DATATTABLE DENITION--(CLIENT SIDE SCRIPT)**********************************************   


    function Loadvalues() {
        var SpParams = {};
        SpParams.strProc = "Trainee_Details";

        // "<a class='active' href='#'><span class='fa fa-check-circle text-success'><i> Active</i></span></a>"
        // "<a href='#' class='inactive'><span class='fa fa-times-circle text-danger'><i> Inactive</i></span></a>"

        $.ajax({
            url: "http://kss.techvantagesystems.com/api/Training/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                if (response.details != null) {
                    $("#tableContractorDetails").dataTable().fnClearTable();
                    var status;
                    for (var j = 0; j < response.details.length; j++) {

                        if ((response.details[j].Trainee_Response).toString() == 'false') {
                            status = "NO";

                        }
                        else if ((response.details[j].Trainee_Response).toString() == 'true') {
                            status = "YES";

                        }
                        else {
                            status = "";
                        }
                        if ((response.details[j].Trainee_MailSent) == '0') {
                            jQuery("#tableContractorDetails").dataTable().fnAddData([(response.details[j].Trainee_Id).toString(), j + 1, (response.details[j].Trainee_Name).toString(), (response.details[j].Trainee_Email).toString(), (response.details[j].Trainee_PhoneNo), (response.details[j].Trainee_Qualification).toString(), (response.details[j].Trainee_InstOrg).toString(), (response.details[j].Trainee_OtherDegree).toString(), (response.details[j].Trainee_Proficiency).toString(), (response.details[j].Trainee_Experience).toString(), (response.details[j].Trainee_HwKnw).toString(), (response.details[j].Trainee_Interest).toString(), '<button type="button" class="btn btn-success b.tn-lg" id="btnSend" style="width: 74px;">SEND</button>', status]);
                        }
                        else if ((response.details[j].Trainee_MailSent) == '1') {
                            jQuery("#tableContractorDetails").dataTable().fnAddData([(response.details[j].Trainee_Id).toString(), j + 1, (response.details[j].Trainee_Name).toString(), (response.details[j].Trainee_Email).toString(), (response.details[j].Trainee_PhoneNo), (response.details[j].Trainee_Qualification).toString(), (response.details[j].Trainee_InstOrg).toString(), (response.details[j].Trainee_OtherDegree).toString(), (response.details[j].Trainee_Proficiency).toString(), (response.details[j].Trainee_Experience).toString(), (response.details[j].Trainee_HwKnw).toString(), (response.details[j].Trainee_Interest).toString(), '', status]);
                        }



                    }
                    jQuery("#tableContractorDetails").dataTable().fnDraw();
                }
                //   alert(response.details);

            }
        });
    }




    $('#tableContractorDetails').on('click', '#btnSend', function () {
        $('#btnSend').attr("disabled", true);
        var nRow = $(this).parents('tr')[0];
        var TraineeId = jQuery("#tableContractorDetails").dataTable().fnGetData(nRow)[0];
        getTraineeDetails(TraineeId);
    });

    //$('#tableContractorDetails tbody').on('click', 'td.details-control', function () {

    function sendUniqueURL(Name, EmailId, UniqId) {



        var Params = {};
        Params.Name = Name;
        Params.Email = EmailId;
        Params.UniqueURL = UniqId;


        $.ajax({
            url: "http://kss.techvantagesystems.com/api/Training/SendUniqueURL",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(Params),
            success: function (response) {
                if (response.message == 'Send Successfully') {
                    updateMailSent(UniqId);
                    alert("Send Successfully");
                    $('#btnSend').attr("disabled", false);
                    $("#tableContractorDetails").dataTable().fnClearTable();
                    Loadvalues();


                }
            }
        });
    }

    function updateMailSent(UniqeID) {

        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "UniqueId";
        varParams.strArgmt = UniqeID;
        varProcParams[0] = varParams;
        varParams = {};
        var SpParams = {};
        SpParams.strProc = "Trainee_Update";
        SpParams.oProcParams = varProcParams;


        $.ajax({
            url: "/api/Training/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
            }
        });

    }

    function getTraineeDetails(trineeId) {
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Trainee_Id";
        varParams.strArgmt = trineeId;
        varProcParams[0] = varParams;
        varParams = {};
        var SpParams = {};
        SpParams.strProc = "Trainee_SendUniqueId";
        SpParams.oProcParams = varProcParams;


        $.ajax({
            url: "/api/Training/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {
                var name = response.details[0].Trainee_Name;
                var email = response.details[0].Trainee_Email;
                var UniqueId = response.details[0].Trainee_UniqId;
                sendUniqueURL(name, email, UniqueId);

            }
        });
    }
});
