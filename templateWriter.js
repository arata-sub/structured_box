const URL = "https://wadaarata.github.io/structured_box/template.json";
let request = new XMLHttpRequest();
request.open("GET", URL);
request.responseType = "json";
request.send();

request.addEventListener("load",initTemplate,false);

function initTemplate() {
    console.log(request.response);
    let template = request.response;
    
    if (template['box1'] === true) {

    }

    if (template['box2'] === true) {

    }

    if (template['box3'] === true) {

    }
}