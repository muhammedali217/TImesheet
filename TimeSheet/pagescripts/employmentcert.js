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

        function doesFileExist(urlToFile) {
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', urlToFile, false);
            xhr.send();

            if (xhr.status == "404") {
                return false;
            } else {
                return true;
            }
        }
       // var url = "/Certification/" + name + ".pdf";

        var url = "/Certification/" + name + ".pdf";
        if (doesFileExist(url))
        {
            
           // alert(url);
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false); // false = Synchronous

            http.send(null); // it will stop here until this http request is complete

            // when we are here, we already have a response, b/c we used Synchronous XHR
           // alert(http.status);
            if (http.status === 200) {
                window.location = "/Certification/" + name + ".pdf";
            }

           // window.open(" http://localhost:15794/Certification/UNNIKRISHNAN.PDF", "resizeable,scrollbar");
            
        }
        else {
            alert('Employment Cretificate has not generated');
        };
        // window.location = "/Certification/" + name + ".pdf";
        
    });
});
