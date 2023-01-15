function requestData_links (url) {
    fetch(url, { method: "GET" })
    .then(responce => responce.json())
    .then((data) => table_link(data))
    .catch((error) => {
        console.log(error);
    })
}
function table_link(data){
    console.log(data);
    let anHTML = `<table id="fetch_id"><tr><th>Links</th></tr>`
    data.forEach(element => {
        anHTML += "<tr><td>" +
            "<a href='" + element.Link + "' target='_blank'>" + element.Link + "<"
             + "</td></tr>";      
    })
    anHTML += "</table>";
    document.getElementById("main").innerHTML = anHTML;
}