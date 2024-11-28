const xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    let xmlHttp;
    // for IE
    if(window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLXTTP");
        }
        catch(e) {
            xmlHttp = false;
        }
    } else {    // for other browser
        try {
            xmlHttp = new XMLHttpRequest();
        }
        catch(e) {
            xmlHttp = false;
        }
    }

    if(!xmlHttp) {
        alert('Error creating the XMLHttpRequest object.');
    } else {
        return xmlHttp;
    }
};

// HTTP-request
function ajax() {
    if(xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        // get user name
        let userName = encodeURIComponent(document.getElementById('Name').value);
        // pass user name to ajax.php
        xmlHttp.open("GET", "ajax.php?userName=" + userName, true);

        xmlHttp.onreadystatechange = processServerResponse;

        // request to server
        xmlHttp.send(null);
    } else {
        // re-request in 1 sec if server is busy
        setTimeout('ajax()', 1000);
    }

    function processServerResponse() {
        if(xmlHttp.readyState == 4) {
            if(xmlHttp.status == 200) {
                xmlResponse = xmlHttp.responseXML;
                xmlDocumentElement = xmlResponse.documentElement;
                helloMessage = xmlDocumentElement.firstChild.data;

                document.getElementById("OurMessage").innerHTML = 
                '<i>' + helloMessage + '<i>';
                setTimeout('ajax(}', 1000);
            } else {
                alert('Access error:' + xmlHttp.statusText);
            }
        }
    };
};