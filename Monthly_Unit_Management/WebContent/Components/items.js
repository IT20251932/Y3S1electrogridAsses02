$(document).ready(function() 
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 

// SAVE 
function onItemSaveComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 
 $("#hidItemIDSave").val(""); 
 $("#formItem")[0].reset(); 
}

$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateItemForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "UnitAPI", 
 type : type, 
 data : $("#formItem").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onItemSaveComplete(response.responseText, status); 
 } 
 }); 
}); 

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidItemIDSave").val($(this).data("itemid")); 
 
 $("#uAccNo").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#uDate").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#UnitAmount").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#PriceForPerUnit").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#Total").val($(this).closest("tr").find('td:eq(4)').text()); 
}); 

$(document).on("click", ".btnRemove", function(event) 
{ 
 $.ajax( 
 { 
 url : "UnitAPI", 
 type : "DELETE", 
 data : "uID=" + $(this).data("itemid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onItemDeleteComplete(response.responseText, status); 
 } 
 }); 
});

function onItemDeleteComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validateItemForm() 
{ 
// Account Number
if ($("#uAccNo").val().trim() == "") 
 { 
 return "Insert account number."; 
 } 
// Date
if ($("#uDate").val().trim() == "") 
 { 
 return "Insert todays' date."; 
 } 
// Unit Amount
if ($("#UnitAmount").val().trim() == "") 
 { 
 return "Insert unit amount."; 
 } 
// Price For Per Unit
if ($("#PriceForPerUnit").val().trim() == "") 
 { 
 return "Insert price for a unit."; 
 } 
// Total
if ($("#Total").val().trim() == "") 
 { 
 return "Insert total amount."; 
 } 
return true; 
}