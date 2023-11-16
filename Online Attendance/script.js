window.onload = function(){  //onload: Fires immediately after the browser loads the object.
    //reference the DropDownList
    var ddlYears = document.getElementById("ddlYears");

    //Determine the current year
    var currentYear = (new Date()).getFullYear();

    //Loop to add the Year values to DropDownList.
    for(var i = 2000; i<=currentYear; i++){
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        ddlYears.appendChild(option);
    }

    var classField = document.getElementById("class");
    for( var i = 1; i<=12; i++){
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        classField.appendChild(option)
    }
};

//Save from data

function saveFormData(){
    var ddlYears = document.getElementById("ddlYears").value;
    var branch = document.getElementById("branch").value;
    var classField = document.getElementById("class").value; 
    var section = document.getElementById("section").value;
    var status = document.getElementById("status").value;
    var date = document.getElementById("date").value;
    var subject = document.getElementById("subject").value;

    addRowToTable(ddlYears,branch,classField,section,status,date,subject);
    clearForm(); //optional: Clear the form after saving the data
}

//Add cell in table

function addRowToTable(ddlYears,branch,classField,section,status,date,subject){
    var table = document.getElementById("dataTable").getElementsByTagName('tboby')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);   
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = ddlYears;
    cell2.innerHTML = branch;
    cell3.innerHTML = classField;
    cell4.innerHTML = section;
    cell5.innerHTML = status;
    cell6.innerHTML = date;
    cell7.innerHTML = subject;


    let newArray = [ddlYears,branch,classField,section,status,date,subject];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset();
}

//clear the form field after saving the data
function saveFormData(){
    var ddlYears = document.getElementById("ddlYears").value="";
    var branch = document.getElementById("branch").value="";
    var classField = document.getElementById("class").value=""; 
    var section = document.getElementById("section").value="";
    var status = document.getElementById("status").value="";
    var date = document.getElementById("date").value="";
    var subject = document.getElementById("subject").value="";
}