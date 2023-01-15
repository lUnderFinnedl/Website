function requestData1_works (url) {
    fetch(url, { method: "GET" })
    .then(responce => responce.json())
    .then((data) => table_theories(data))
    .catch((error) => {
        console.log(error);
    })
}
function table_theories(data){
    console.log(data);
    let anHTML = `<table id="fetch_id"><tr><th>Title</th>`
    data.forEach(element => {
        anHTML += "<tr><td>" +element.title + "</td><td>";      
    })
    anHTML += "</table>";
    document.getElementById("main").innerHTML = anHTML;
}