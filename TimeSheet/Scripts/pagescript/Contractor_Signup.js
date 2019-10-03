
$(document).ready(function () {
  
    $("#SignupForm").validate({
        ignore: ".ignore",
        invalidHandler: function (e, validator) {
            if (validator.errorList.length)
                $('#tabs a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show')
        },

        submitHandler: function (form) {

            ContractorSignup();
        },
        rules: {
            txtname: "required",
            txtcmpname: "required",
            txtrate: "required",

            txtcontactno: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 12
            },

            txtmail: {
                required: true,
                email: true
            },

            txtpassword: "required",
            txtaddress: "required",
            txtlocation: "required",
            txtlatitude: "required",
            txtlongitude: "required"
        },

        messages: {


            txtname: "Please enter your Name",
            txtcmpname: "Please enter your Company name",
            txtrate: "Please enter your rate per hour",
            txtmail: "Please enter your mail id",
            txtpassword: "Please enter your password",
            txtaddress: "Please enter your address",
            txtlocation: "Please enter your location",
            txtlatitude: "Please enter your latitude",
            txtlongitude: "Please enter your longitude",
            txtcontactno: {
                required: "Please provide a Mobile Number",
                minlength: "Please enter a 10 digit mobile number",
                maxlength: "Please enter a 10 digit mobile number"
            }
        },

        errorPlacement: function (error, element) {

            if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
                error.insertAfter($('#register_tnc_error'));

            } else if (element.closest('.input-icon').size() === 1) {
                error.insertAfter(element.closest('.input-icon'));
            } else {
                error.insertAfter(element);
            }
        }

    });
  
    function ContractorSignup() {
     
        var varProcParams = new Array();
        var varParams = {};
        varParams.strKey = "Contractor_Name";
        varParams.strArgmt = $("#txtname").val();
        varProcParams[0] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_CompanyName";
        varParams.strArgmt = $("#txtcmpname").val();
        varProcParams[1] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_ContactNumber";
        varParams.strArgmt = $("#txtcontactno").val();
        varProcParams[2] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Email";
        varParams.strArgmt = $("#txtmail").val();
        varProcParams[3] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_RatePerHour";
        varParams.strArgmt = $("#txtrate").val();
        varProcParams[4] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Address";
        varParams.strArgmt = $("#txtaddress").val();
        varProcParams[5] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Location";
        varParams.strArgmt = $("#txtlocation").val();
        varProcParams[6] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Latitude";
        varParams.strArgmt = $("#txtlatitude").val();
        varProcParams[7] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_Longitude";
        varParams.strArgmt = $("#txtlongitude").val();
        varProcParams[8] = varParams;
        varParams = {};

       
        var varParams = {};
        varParams.strKey = "Contractor_Password";
        varParams.strArgmt = $("#txtpassword").val();
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
                alert(response.message);
            },

            error: function (x, e) {
                alert(x.responseText);
                alert(x.status);
            }
        });

    }




    





});
