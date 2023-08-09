<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BirthdayCard.aspx.cs" Inherits="TimeSheet.BirthdayCard" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        body {
            font-family: 'Times New Roman','Times New Roman', Times, serif;
            background: #111;
            content: "hi";
            color: blue;
            display: block;
        }

        h2 {
            content: "hello";
            font-family: 'Lobster Two', 'Times New Roman', Times, serif;
            display: block;
            text-align: center;
            font-size: 100px;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: -2px;
        }
    </style>
</head>
<body>
    <div style="width: 100%; height: 100%">
        <div style="text-align: center; align-content: center; width: 350px; height: 200px">
            <%-- <h2>
            <span id="empNames" style="color: #9e41fb;"></span>
        </h2>--%>
            <table>
                <tbody id="tblempLists"></tbody>
            </table>
        </div>
    </div>
    <script src="admin/js/jquery.js"></script>
    <script src="pagescripts/BirthdayCard.js"></script>
    <script src="alert/js/alert.min.js"></script>
    <script src="admin/plugins/DataTables-1.10.4/media/jquery.dataTables.min.js"></script>
</body>
</html>
