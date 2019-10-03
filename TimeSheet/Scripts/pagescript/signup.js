$(document).ready(function () {


    PopulateService();
    $("#lblLat").hide();
    $("#lblLong").hide();
    
    var ContractorId;
    $("#RegistrationForm").validate({

        ignore: ".ignore",
        invalidHandler: function (e, validator) {
            if (validator.errorList.length)
                $('#tabs a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show')
        },

        submitHandler: function (form) {
           
            RegistrationProcess();
        },
        rules: {
            txtFirstName: "required",
            txtLastName: "required",
            txtCompany: "required",
            txtEmail: {
                required: true,
                email: true
            },
            txtRate:
                {
                    required: true,
                    number : true
                },
            txtMobile: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 12
            },
            txtPassword: "required",
            txtConfirmPassword: {
                required: true,
                equalTo: "#txtPassword"
            },

            txtlocation: "required",

            txtAddress: "required"

        },

        messages: {


            txtFirstName: "Please enter your firstname",
            txtLastName: "Please enter your lastname",
            txtMobile: {
                required: "Please provide a Mobile Number",
                minlength: "Please enter a 10 digit mobile number",
                maxlength: "Please enter a 10 digit mobile number"
            }
        },

        errorPlacement: function (error, element) {
            if (element.closest('.input-icon').size() === 1) {
                error.insertAfter(element.closest('.input-icon'));
            } else {
                error.insertAfter(element);
            }
        }

    });

    //registration process function
    function RegistrationProcess() {

        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Contractor_Name";
        varParams.strArgmt = $("#txtFirstName").val() + " " + $("#txtLastName").val();
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_CompanyName";
        varParams.strArgmt = $("#txtCompany").val();
        varProcParams[1] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_ContactNumber";
        varParams.strArgmt = $("#txtMobile").val();
        varProcParams[2] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Email";
        varParams.strArgmt = $("#txtEmail").val();
        varProcParams[3] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_RatePerHour";
        varParams.strArgmt = $("#txtrateperhour").val();
        varProcParams[4] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Address";
        varParams.strArgmt = $("#txtAddress").val();
        varProcParams[5] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Location";
        varParams.strArgmt = $("#txtlocation").val();
        varProcParams[6] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Latitude";
        varParams.strArgmt = $("#lblLat").text();
        varProcParams[7] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Longitude";
        varParams.strArgmt = $("#lblLong").text();
        varProcParams[8] = varParams;
        varParams = {};



        var varParams = {};
        varParams.strKey = "Contractor_Password";
        varParams.strArgmt = $("#txtPassword").val();
        varProcParams[9] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "Contractor_AddDetails";
        SpParams.oProcParams = varProcParams;



        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseData",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {                
                if (response.details != null) {
                    alert(response.details.length);
                    for (var i = 0; i < response.details.length; i++) {
                        {
                            console.log(response.details[i]);
                            alert(response.details[i]);
                        }
                    }
                }
            },//success

            error: function (x, e) {
                alert(x.responseText);
                alert(x.status);
            }//error
        });//ajax

    }//function



    ////add service type of contractor
    //function ContractorServiceType() {

    //    var varProcParams = new Array();
    //    var varParams = {};
    //    varParams.strKey = "ProviderType_IdArray";
    //    varParams.strArgmt = $("#ddlservicetype").val();
    //    varProcParams[0] = varParams;
    //    varParams = {};

    //    var varParams = {};
    //    varParams.strKey = "Contractor_Id";
    //    varParams.strArgmt = ContractorId;
    //    varProcParams[1] = varParams;
    //    varParams = {};

    //    var SpParams = {};
    //    SpParams.strProc = "ProviderType_AddDetails";
    //    SpParams.oProcParams = varProcParams;


    //    $.ajax({
    //        url: "/api/FIXZIService/GetHTTPResponseData",
    //        type: "POST",
    //        contentType: "application/json;charset=utf-8",
    //        dataType: "json",
    //        data: JSON.stringify(SpParams),
    //        success: function (response) {
    //           
    //         },//success

    //        error: function (x, e) {
    //            alert(x.responseText);
    //            alert(x.status);
    //        }//error
    //    });//ajax

    //}//function


   
    //populate service type
    function PopulateService() {
        var SpParams = {};
        SpParams.strProc = "UtilityType_GetDetails";

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
                        $("#ddlservicetype").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                       
                    }
                }
            }
        },

        error: function (x, e) {
            alert(x.responseText);
            alert(x.status);
        }
    });
}


 
});
