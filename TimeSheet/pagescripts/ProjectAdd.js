$(document).ready(function () {
    //alert(calcBusinessDays(new Date("August 11, 2010 11:13:00"), new Date("August 16, 2010 11:13:00")));
    var Localvalue = localStorage.getItem('AdminSession');
    if (Localvalue == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {

        var dateToday = new Date();

        $("#txtPrjectFrom").datepicker();

        $("#txtPrjectTo").datepicker();


        EmpDropDown();

        $('#txtProjectName').on('change', function () {

            var projectname = $('#txtProjectName').val();
            var ShortName = projectname.toUpperCase();
            //$('#txtShortName').val(ShortName);
            var res = ShortName.substring(0, 5);
            //alert(res + RandomNumber());
            var random = Math.floor((Math.random() * 10000) + 1).toString();
            $('#txtShortName').val(res + random);
            //alert(res + random);
        });



        $('#btnSubmit').click(function () {


            if ($("#txtProjectName").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Project Name.' });
            }

            else if ($("#txtClientName").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter client name.' });
            }
            else if ($("#txtDescription").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter project description.' });
            }
            else if ($("#txtPrjectFrom").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter project Start date.' });
            }
            else if ($("#txtPrjectTo").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter project End date.' });
            }
            else if ($("#txtVersioncontrol").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Version Control.' });
            }
            else if ($("#txtProgramminglanguages").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Programming Languages.' });
            }
            else if ($("#txtPackagesused").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Packages Used.' });
            }
            else if ($("#txtFramework").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Frame work.' });
            }
            else if ($("#txtHostingserver").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Hosting server.' });
            }
            else if ($("#txtDatabase").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Database.' });
            }
            else if ($("#txtThirdparty").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Third Party Tools.' });
            }
            else if ($("#txtSecurity").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Security.' });
            }
            else if ($("#txtPortsused").val() == '') {
                $.alert.open({ type: 'warning', content: 'Please enter Ports Used.' });
            }
            else {
                var varProcParams = new Array();

                var varParams = {};
                varParams.strKey = "Project_Name";
                varParams.strArgmt = $("#txtProjectName").val();
                varProcParams[0] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Project_ShortName";
                varParams.strArgmt = $("#txtShortName").val();
                varProcParams[1] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Project_StartDate";
                varParams.strArgmt = $("#txtPrjectFrom").val();
                varProcParams[2] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Project_EndDate";
                varParams.strArgmt = $("#txtPrjectTo").val();
                varProcParams[3] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Project_ClientName";
                varParams.strArgmt = $("#txtClientName").val();
                varProcParams[4] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Project_Cost";
                varParams.strArgmt = "";
                varProcParams[5] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Project_Description";
                varParams.strArgmt = $("#txtDescription").val();
                varProcParams[6] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_Duration";
                varParams.strArgmt = $("#txtDuration").val();
                varProcParams[7] = varParams;
                varParams = {};


                var varParams = {};
                varParams.strKey = "Projects_Sponsor";
                varParams.strArgmt = $("#ddlEmployee option:selected").text();
                varProcParams[8] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_VersionControl";
                varParams.strArgmt = $("#txtVersioncontrol").val();
                varProcParams[9] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_ProgrammingLanguages";
                varParams.strArgmt = $("#txtProgramminglanguages").val();
                varProcParams[10] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_PackagesUsed";
                varParams.strArgmt = $("#txtPackagesused").val();
                varProcParams[11] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_Framework";
                varParams.strArgmt = $("#txtFramework").val();
                varProcParams[12] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_HostingServer";
                varParams.strArgmt = $("#txtHostingserver").val();
                varProcParams[13] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_Database";
                varParams.strArgmt = $("#txtDatabase").val();
                varProcParams[14] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_ThirdPartyTools";
                varParams.strArgmt = $("#txtThirdparty").val();
                varProcParams[15] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_Security";
                varParams.strArgmt = $("#txtSecurity").val();
                varProcParams[16] = varParams;
                varParams = {};

                var varParams = {};
                varParams.strKey = "Projects_PortsUsed";
                varParams.strArgmt = $("#txtPortsused").val();
                varProcParams[17] = varParams;
                varParams = {};

                

                var SpParams = {};
                SpParams.strProc = "Project_Add";
                SpParams.oProcParams = varProcParams;

                $.ajax({
                    url: "/api/FIXZIService/GetHTTPResponseDataWeb",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(SpParams),
                    success: function (response) {
                        if (response.status == 'SUCCESS') {
                            $.alert.open({ type: 'info', content: 'Project Added Successfully.' });

                            setTimeout(function () {
                                window.location = "viewallproject.aspx"
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


        function RandomNumber() {
            var number = Math.random() // 0.9394456857981651
            var id = number.toString(36).substr(2, 6); // 'xtis06h6'
            return id.toLocaleUpperCase();

        }

        function EmpDropDown() {
            var SpParams = {};
            SpParams.strProc = "Employee_DrpDownIncludesAdmin";


            $.ajax({
                url: "/api/FIXZIService/GetHTTPDropDownResponse",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(SpParams),
                success: function (response) {
                    $('#ddlEmployee').empty();

                    if (response != null) {
                        for (var i = 0; i < response.length; i++) {
                            {

                                $("#ddlEmployee").append(new Option(response[i].DisplayMember, response[i].ValueMember));

                            }
                        }//for
                    }//if
                }//response
            });//ajax
        }


        function workingDaysBetweenDates(startDate, endDate) {
            var millisecondsPerDay = 86400 * 1000;
            startDate.setHours(0, 0, 0, 1);
            endDate.setHours(23, 59, 59, 999);
            var diff = endDate - startDate;
            var days = Math.ceil(diff / millisecondsPerDay);

            // Subtract two weekend days for every week in between
            var weeks = Math.floor(days / 7);
            days = days - (weeks * 2);

            // Handle special cases
            var startDay = startDate.getDay();
            var endDay = endDate.getDay();

            // Remove weekend not previously removed.   
            if (startDay - endDay > 1)
                days = days - 2;

            // Remove start day if span starts on Sunday but ends before Saturday
            if (startDay === 0 && endDay != 6)
                days = days - 1;

            // Remove end day if span ends on Saturday but starts after Sunday
            if (endDay === 6 && startDay !== 0)
                days = days - 1;

            return days;
        }



        $('#txtPrjectTo').change(function () {
            $('#txtDuration').val('');
            // alert(workingDaysBetweenDates($("#txtPrjectFrom").val(), $('#txtPrjectTo').val()));
            var startDate = new Date($("#txtPrjectFrom").val());
            var enddate = new Date($('#txtPrjectTo').val());
            var duration = workingDaysBetweenDates(startDate, enddate);
            $('#txtDuration').val(duration);
            $("#txtDuration").prop('disabled', true);
            if (duration < 0) {
                $.alert.open({ type: 'warning', content: 'Please enter the end date greater than start date.' });

                $('#txtDuration').val('');
                $('#txtPrjectTo').val('');
            }
        });


        $('#txtPrjectTo').on('change', function () {
            $('.datepicker').hide();
        });
        $('#txtPrjectFrom').on('change', function () {
            $('.datepicker').hide();
        });
    }

});