var x = JSON.parse(employees);
console.table(x);

 var i = 0
    
    for (i = 0; i < x.length; i++) {

        document.getElementById("result").innerHTML += `<tr>
	<td>${x[i].UniqueID}</td>
	<td>${x[i].FirstName}</td>
	<td>${x[i].LastName}</td>
	<td>${x[i].Emailaddress}</td>
	<td>${x[i].JobTitle}</td>
	<td>${x[i].Salary}</td>
	</tr>`;
        
     

  }