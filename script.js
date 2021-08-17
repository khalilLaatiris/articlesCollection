// api url
const api_url = 
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/article_api-falaj/service/Article_API/incoming_webhook/Articlewebhook0";
  
// Defining async function
async function getapi(url,search_keyword={}){
    const response = await fetch(url,{
    	method: "POST",
    	headers:{
    		'Content-Type': 'application/json',
    	},
    	body: JSON.stringify (search_keyword), //search requist options , {} for all ! !
    });
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log("aware data " ,data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = `<div class="container">
<div class="row">
<div class="col-12">
<table class="table table-image">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Headline</th>
      <th scope="col">Subject</th>
      <th scope="col">Published</th>
      <th scope="col">Author</th>
      
    </tr>
  </thead>
  <tbody>`;
    // Loop to access all rows 
    for (let r of data) {
        tab += 
        `
    <tr>
      <td class="w-25">
	      <img src="${r.image}" class="img-fluid img-thumbnail">
      </td>
      <th scope="row"><a href="${r.link}"> ${r.headline}</a></th>
      <td>${r.subject}</td>
      <td>${r.date_time}</td>
      <td>${r.author}</td>
    </tr>
    <tr>`;
    }
    tab += `</tbody>
</table>   
</div>
</div>
</div>`
    // Setting innerHTML as tab variable
    document.getElementById("Articles").innerHTML = tab;
}



// on click fonction for searching the specific data in our database
function search() {
	// search for some articles in the database 
	var select_input=document.getElementById('select-value').value.trim(); //trim to delete spaces in the extrems of keyword
	var input_kayword=document.getElementById('keyword-value').value;
	if (input_kayword != "") {
		if (select_input == "headline") {
			getapi(api_url,{headline: input_kayword});
		}
		if (select_input == "subject") {
			getapi(api_url,{subject: input_kayword});
		}
	}
}