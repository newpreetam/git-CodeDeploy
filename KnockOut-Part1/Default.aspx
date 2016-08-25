<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="KnockOut_Part1.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Knockout </title>

    <script src="Scripts/knockout-3.4.0.js"></script>
    <script src="Scripts/jquery-2.2.3.min.js"></script>

    <%--Embedding our ViewModel to the View--%>
    <script src="Scripts/ViewModel.js"></script>   

    <%--Embedding our Model(s) to the View--%>
    <script src="Scripts/Models/Product.js"></script>


</head>
<body>
    <h2>Knockout Demo</h2>
    <table style="border:true">
        <tr id="tbl1">
            <td>Product Name : <span id="namespan" data-bind="text: product.productname"></span>
                <br />
                Product Price : <span id="pricespan" data-bind="text: product.productprice"></span>
                <br />
                Product Type : <span id="typesapn" data-bind="text: product.producttype"></span>
                <br />
                <br />
                <br />
                Name :
                <input id="txt1" data-bind="value: product.productname" type="text" />
                            Price:
                <input id="txt2" data-bind="value: product.productprice" type="text" />
                            Type:
                <input id="txt3" data-bind="value: product.producttype" type="text" />
            </td>
        </tr>
    </table>

    <br />

    <table border="1">
        <tbody id="tbl2" data-bind="foreach: collection">
            <tr>
                <td>Product Name : <span id="namespan2" data-bind="text: productname"></span>
                    <br />
                    Product Price : <span id="pricespan2" data-bind="text: productprice"></span>
                    <br />
                    Product Type : <span id="typesapn2" data-bind="text: producttype"></span>
                    <br />
                </td>
            </tr>
        </tbody>          
    </table>

</body>
</html>
