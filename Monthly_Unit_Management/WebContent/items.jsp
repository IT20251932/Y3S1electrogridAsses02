<%@ page import="model.Unit" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title> Monthly Unit Management </title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.js"></script>
<script src="Components/items.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
	<h1> Monthly Unit Management </h1>
	
	<form id="formItem" name="formItem">
		 Account Number : 
		 <input id="uAccNo" name="uAccNo" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 Date : 
		 <input id="uDate" name="uDate" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 Unit Amount : 
		 <input id="UnitAmount" name="UnitAmount" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 Price Per Unit : 
		 <input id="PriceForPerUnit" name="PriceForPerUnit" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 Total Amount : 
		 <input id="Total" name="Total" type="text" 
		 class="form-control form-control-sm">
		 <br>
		 <input id="btnSave" name="btnSave" type="button" value="Save" 
		 class="btn btn-primary">
		 <input type="hidden" id="hidItemIDSave" 
		 name="hidItemIDSave" value="">
	</form>
	
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Unit UnitObj = new Unit(); 
	 out.print(UnitObj.readUnit()); 
 %>
</div>
</div> </div> </div> 
</body>
</html>
