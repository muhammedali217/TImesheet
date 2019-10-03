$(document).ready(function () {
     $("#divPricing").hide();

    $("#lblLat").hide();
    $("#lblLong").hide();






    //$("#txtlocation").change(function () {

    //    //google.maps.event.addDomListener(window, 'load', codeAddress);
    //    var address = $('#txtlocation').val().split(",");
    //    alert(address[0]);
    //  //      document.getElementById("txtlocation").value;
    //    var geocoder = new google.maps.Geocoder();


    //    if (address != "") {
    //        geocoder.geocode({ 'address': address[0] }, function (results, status) {

    //            if (status == "ZERO_RESULTS") {
    //                alert("choose a city");
    //            }
    //            var location = results[0].geometry.location

    //            $('#lblLat').text(location.lat());
    //            $('#lblLong').text(location.lng());


    //        });
    //    }
    //});

    //$("#txtlocation").click(function () {

    //    //google.maps.event.addDomListener(window, 'load', codeAddress);
    //    var address = $('#txtlocation').val().split(",");
    //    //      document.getElementById("txtlocation").value;
    //    var geocoder = new google.maps.Geocoder();


    //    if (address != "") {
    //        geocoder.geocode({ 'address': address[0] }, function (results, status) {

    //            if (status == "ZERO_RESULTS") {
    //                alert("choose a city");
    //            }
    //            var location = results[0].geometry.location

    //            $('#lblLat').text(location.lat());
    //            $('#lblLong').text(location.lng());


    //        });
    //    }


    //});








    $("#ddlCountry").change(function () {



        var options = {
            types: ['(cities)'],
            componentRestrictions: {
                country: $("#ddlCountry option:selected").text()

            }
        };
        var input = document.getElementById('txtlocation');
        new google.maps.places.Autocomplete(input, options);

    });





    var ContractorId;
    $("#RegistrationForm").validate({

        ignore: ".ignore",
        invalidHandler: function (e, validator) {
            if (validator.errorList.length)
                $('#tabs a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show')
        },

        submitHandler: function (form) {

            //google.maps.event.addDomListener(window, 'load', codeAddress);
            var address = $('#txtlocation').val().split(",");
            //      document.getElementById("txtlocation").value;
            var geocoder = new google.maps.Geocoder();


            if (address != "") {
                geocoder.geocode({ 'address': address[0] }, function (results, status) {

                    if (status == "ZERO_RESULTS") {
                        alert("choose a city");
                    }
                    var location = results[0].geometry.location

                    $('#lblLat').text(location.lat());
                    $('#lblLong').text(location.lng());
                    RegistrationProcess();

                });
            }

        },
        rules: {
            txtFirstName: "required",
            txtLastName: "required",
            txtCompany: "required",
            txtEmail: {
                required: true,
                email: true
            },
            txtrateperhour:
                {
                    required: true,
                    number: true
                },
            ddlservicetype:
            {
                required: true
            },
            txtMobile: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            txtPassword: "required",
            txtConfirmPassword: {
                required: true,
                equalTo: "#txtPassword"
            },
            ddlCountry: "required",

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
            },
            txtCompany: "Please provide your company",
            txtrateperhour: "please enter your rate($)/hour "
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

        //  alert($("#lblLat").text());
        //  alert($("#lblLong").text());

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

        var varParams = {};
        varParams.strKey = "Contractor_CountryCode";
        varParams.strArgmt = $("#ddlCountry").val();
        varProcParams[10] = varParams;
        varParams = {};

        var varParams = {};
        varParams.strKey = "Contractor_UtilityType";
        varParams.strArgmt = $("#ddlservicetype").val();
        varProcParams[11] = varParams;
        varParams = {};

        var SpParams = {};
        SpParams.strProc = "Contractor_AddDetails";
        SpParams.oProcParams = varProcParams;



        $.ajax({
            url: "/api/FIXZIService/GetHTTPResponseDataWeb",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(SpParams),
            success: function (response) {

                if (response.status == "ok") {
                    $("#divPricing").show();
                    $("#divSignup").hide();
                    CreatepaypalButton();


                }

                //ContractorId = response.details;
            },//success

            error: function (x, e) {
                alert(x.responseText);
                alert(x.status);
            }//error
        });//ajax

    } //function



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

    function CreatepaypalButton() {
        var PayPal = {};
        PayPal.Price = "0.01";
        PayPal.CustomValue = "custome";
        PayPal.Recurring = "1";

        $.ajax({
            url: "/api/PayPal/CreateDynamicPayPalButton",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(PayPal),
            success: function (response) {
                if (response != null) {
                    SendEmail($("#txtFirstName").val() + " " + $("#txtLastName").val(), $("#txtEmail").val(), $("#txtPassword").val());
                    $("#btnCustom").html('');
                    $("#btnCustom").append(response);
                }
            },

            error: function (x, e) {
                alert(x.responseText);
                alert(x.status);
            }
        });
    }

    //populate service type(new service)
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


    //populate service type(new service)

    var SpParams = {};
    SpParams.strProc = "CountryCode_GetDetails";

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
                        $("#ddlCountry").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                    }
                }
            }
        },

        error: function (x, e) {
            alert(x.responseText);
            alert(x.status);
        }
    });

    function SendEmail(strName, strUsername, strPassword) {

        var Params = {};
        Params.Name = strName;
        Params.EmailID = strUsername;
        Params.Password = strPassword;


        $.ajax({
            url: "/api/FIXZIService/SendEmail",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(Params),
            success: function (response) {
                $("#h3Success").show();
                $("#h3Success").text("Congratulations! Your account has been set up. We have sent the login credentials to your email :" + strUsername);

            }
        });
    }


    //populate service type(old service)

    //$.ajax({
    //    type: "GET",
    //    url: "/api/FIXZIService/GetHTTPResponseData",
    //    dataType: "json",
    //    data: JSON.stringify({ 'dictArgmts': null, 'strProc': 'UtilityType_GetDetails' }),
    //    contentType: "application/json; charset=utf-8",
    //    success: function (xmldata) {
    //        for (var i = 0; i < xmldata.d.length; i++)
    //            $("#ddlservicetype").append(new Option(data[i].DataDisplayMember, data[i].DataValueMember));
    //    }
    //});

});
