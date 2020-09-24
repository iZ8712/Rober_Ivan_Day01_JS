var x = JSON.parse(books);

console.log(x);

var i = 0
    
    for (i = 0; i < x.length; i++) {

        document.getElementById("cover").innerHTML += `<ul>
	<p><h3>${x[i].title}</h3></p>
	<li>${x[i].author}</li>
	<li>${x[i].read}</li>
	<p>${x[i].img}</p>
	</ul>`;
        
     

  }