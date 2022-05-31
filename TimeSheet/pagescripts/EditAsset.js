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

        var SpParams = {};
        SpParams.strProc = "Get_Asset_Dropdown";

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

                            $("#ddlAssetname").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                        }
                    }//for
                }//if
            }//response
        });


        $('#txtAssetCode').val('');
        $("#ddlAsseetType").val('')
        $("#txtAssetEnhance").val('')
        $("#txtAssetKey").val('')
        $('#txtUsesw').val('');
        $("#ddlStatus").val('')
        $("#txtRemarks").val('')
        $("#txtLicenced").val('')


        AssettypeDrpDown();
        AssetStatusDrpDown();


        $("#ddlAssetname").change(function () {

            Getassetvaluesbyassetid($("#ddlAssetname").val());
        });

        $('#btnSubmit').click(function () {

            if ($("#txtAssetCode").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Asset Code.' });
            }

            else if ($("#ddlAssetname").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Asset Name .' });
            }
            else if ($("#ddlAsseetType").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Select Asset Type.' });
            }
            else if ($("#txtAssetEnhance").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Asset Enhancement.' });
            }
            else if ($("#ddlStatus").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please Select Status.' });
            }
            //else if ($("#txtAssetCode").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please select Code' });
            //}
            //else if ($("#txtVersioncontrol").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Version Control.' });
            //}
            //else if ($("#txtProgramminglanguages").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Programming Languages.' });
            //}
            //else if ($("#txtPackagesused").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Packages Used.' });
            //}
            //else if ($("#txtFramework").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Frame work.' });
            //}
            //else if ($("#txtHostingserver").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Hosting server.' });
            //}
            //else if ($("#txtDatabase").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Database.' });
            //}
            //else if ($("#txtThirdparty").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Third Party Tools.' });
            //}
            //else if ($("#txtSecurity").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Security.' });
            //}
            //else if ($("#txtPortsused").val() == '') {
            //    $.alert.open({ type: 'warning', content: 'Please enter Ports Used.' });
            //}
            else {
                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "Asset_code";
                varParams.strArgmt = $("#txtAssetCode").val();
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Asset_Name";
                varParams.strArgmt = $("#ddlAssetname").val();
                varProcParams[1] = varParams;
                varParams = {};
                
                var varParams = {};
                varParams.strKey = "Asset_Type_Id";
                varParams.strArgmt = $("#ddlAsseetType").val();
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Asset_Description";
                varParams.strArgmt = $("#txtAssetEnhance").val();
                varProcParams[3] = varParams;
                varParams = {};
               // alert($("#txtAssetKey").val());
                var varParams = {};
                varParams.strKey = "Asset_Key";
                varParams.strArgmt = $("#txtAssetKey").val();
                varProcParams[4] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Asset_Enhancement";
                varParams.strArgmt = $("#txtUsesw").val();
                varProcParams[5] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Asset_Status_id";
                varParams.strArgmt = $("#ddlStatus").val();
                varProcParams[6] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Asset_Remarks";
                varParams.strArgmt = $("#txtRemarks").val();
                varProcParams[7] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "Asset_Lic_Sw";
                varParams.strArgmt = $("#txtLicenced").val()
                varProcParams[8] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Asset_Cess";
                varParams.strArgmt = $("#txtCess").val()
                varProcParams[9] = varParams;
                varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_VersionControl";
                //varParams.strArgmt = $("#ddlEmployee option:selected").text();
                //varParams.strArgmt = $("#txtVersioncontrol").val();
                //varProcParams[9] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_ProgrammingLanguages";
                //varParams.strArgmt = $("#txtProgramminglanguages").val();
                //varProcParams[10] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_PackagesUsed";
                //varParams.strArgmt = $("#txtPackagesused").val();
                //varProcParams[11] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_Framework";
                //varParams.strArgmt = $("#txtFramework").val();
                //varProcParams[12] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_HostingServer";
                //varParams.strArgmt = $("#txtHostingserver").val();
                //varProcParams[13] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_Database";
                //varParams.strArgmt = $("#txtDatabase").val();
                //varProcParams[14] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_ThirdPartyTools";
                //varParams.strArgmt = $("#txtThirdparty").val();
                //varProcParams[15] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_Security";
                //varParams.strArgmt = $("#txtSecurity").val();
                //varProcParams[16] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_PortsUsed";
                //varParams.strArgmt = $("#txtPortsused").val();
                //varProcParams[17] = varParams;
                //varParams = {};

                //var varParams = {};
                //varParams.strKey = "Projects_ProfitCenterCode";
                //varParams.strArgmt = $("#ddlCode").val();
                //varProcParams[18] = varParams;
                //varParams = {};



                var SpParams = {};
                SpParams.strProc = "Asset_Update";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            $.alert.open({ type: 'info', content: 'Asset updated Successfully.' });

                            setTimeout(function () {
                                window.location = "Viewasset.aspx"
                            }, 1000);


                        }//if
                        else {
                            $.alert.open({ type: 'warning', content: 'Please check the details you have entered.' });
                        }
                    }

                });
            }
        });//brnClick

        $('#btnCancel').click(function () {
            //alert("cancel");
            location.reload(true);
        });


        function AssettypeDrpDown() {
            
            var SpParams = {};
            SpParams.strProc = "Get_Asset_Type";


            // SpParams.oProcParams = varProcParams;
            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if ((response[0].DisplayMember == 'No Asset Types')) {
                    }
                    if (response != null) {
                        //$('#lbl').hide();
                        for (var i = 0; i < response.length; i++) {
                            {
                                $("#ddlAsseetType").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                            }
                        }//for
                    }//if
                }//response
            });//ajax
        }


        function AssetStatusDrpDown() {
            
            var SpParams = {};
            SpParams.strProc = "Get_Asset_Status";


            // SpParams.oProcParams = varProcParams;
            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    if ((response[0].DisplayMember == 'No Asset Status')) {
                    }
                    if (response != null) {
                        //$('#lbl').hide();
                        for (var i = 0; i < response.length; i++) {
                            {
                                $("#ddlStatus").append(new Option(response[i].DisplayMember, response[i].ValueMember));
                            }
                        }//for
                    }//if
                }//response
            });//ajax
        }


        function Getassetvaluesbyassetid(AssetId) {
            
            var varProcParams = new Array();
            var varParams = {};
            varParams.strKey = "Asset_ID";
            varParams.strArgmt = AssetId;
            varProcParams[0] = varParams;
            varParams = {};
            var SpParams = {};
            SpParams.strProc = "Asset_DetailsById";
            SpParams.oProcParams = varProcParams;
            $.ajax({
                url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    

                    $('#txtAssetCode').val(response.details[0].Asset_code);
                    $("#ddlAsseetType").val(response.details[0].Asset_Type_Id)
                    $("#txtAssetEnhance").val(response.details[0].Asset_Description)
                    $("#txtAssetKey").val(response.details[0].Asset_Key)
                    $('#txtUsesw').val(response.details[0].Asset_Enhancement);
                    $("#ddlStatus").val(response.details[0].Asset_Status_id)
                    $("#txtRemarks").val(response.details[0].Asset_Remarks)
                    $("#txtLicenced").val(response.details[0].Asset_Lic_Sw)
                    $("#txtCess").val(response.details[0].Asset_Cess)

                   

                }
            });

        }











    }

});
