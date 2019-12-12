$(document).ready(function () {
    $('#btnLogout').click(function () {
        localStorage.removeItem('EmployeeId');
        window.location.href = "login.html";
    });
    var gentlemanWomen;
    var hisher;
    $("#lblWait").hide();
    $('#btnDownLoad').hide();
    var name = localStorage.getItem('EmployeeName');
    $("#lblName").text(name);
    var Localvaluee = localStorage.getItem('EmployeeId');
    var FullName=localStorage.getItem('FullName');
    var Designation=localStorage.getItem('Designation');
    var JoinDate=localStorage.getItem('JoinDate');
    var Gender = localStorage.getItem('Gender');

    if (Localvaluee == null) {
        $.alert.open({ type: 'warning', content: 'Session has timed out. Please Login again' });
        window.location = "login.html";
    }
    else {


        $('#getCert').click(function () {
            $("#lblWait").show();
            if (Gender == 'Male') {
                gentlemanWomen = 'gentleman';
                hisher = 'his';
            }
            else if (Gender == 'Female') {
                gentlemanWomen = 'gentlewomen';
                hisher = 'her';
            }
            //alert(FullName);
            //alert(Designation);
            //alert(JoinDate);
            //alert(Gender);

            //hortName { get; set; }
            //public string Name { get; set; }
            //public string Designation { get; set; }
            //public string JoiningDate { get; set; }
            //public string GentleManWomen { get; set; }
            //public string himhis { get; set; }


            var Params = {};
            Params.ShortName = name;
            Params.Name = FullName;
            Params.Designation = Designation;
            Params.JoiningDate = JoinDate;
            Params.GentleManWomen = gentlemanWomen;
            Params.himhis = hisher;
            


            $.ajax({
                url: "/api/FIXZIService/GenerateEmpCertificate",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(Params),
                success: function (response) {
                    //alert(response.status);
                    $("#lblWait").hide();
                    $('#btnDownLoad').show();
                    


                    //$("#myJD").attr("href", "Certification/" + name + ".pdf");
                }

            });
        });
    }
    $('#btnDownLoad').click(function () {
        window.location = "/Certification/" + name + ".pdf";
    });
});
