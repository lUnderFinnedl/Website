function requestData_works (url) {
    fetch(url, { method: "GET" })
    .then(responce => responce.json())
    .then((data) => table_works(data))
    .catch((error) => {
        console.log(error);
    })
}
function table_works(data){
    console.log(data);
    let anHTML = `<table id="fetch_id"><tr><th>Title</th>
            <th>Publisher</th><th>Date</th></tr>`
    data.forEach(element => {
        anHTML += "<tr><td>" +
        element.title + "</td><td>" +
        element.publisher + "</td><td>" +
            element.date + "</td></tr>";      
    })
    anHTML += "</table>";
    document.getElementById("main").innerHTML = anHTML;
}