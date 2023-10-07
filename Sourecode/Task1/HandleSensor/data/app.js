

setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("temperature").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/temperature", true);
    xhttp.send();
}, 10000);

setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("humidity").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/humidity", true);
    xhttp.send();
}, 10000);


// WEB SOCKET

// var gateway = `ws://${window.location.hostname}/ws`;
// var websocket;
// // Init web socket when the page loads
// window.addEventListener('load', onload);

// function onload(event) {
//     initWebSocket();
// }

// function getReadings(){
//     websocket.send("getReadings");
// }

// function initWebSocket() {
//     console.log('Trying to open a WebSocket connection…');
//     websocket = new WebSocket(gateway);
//     websocket.onopen = onOpen;
//     websocket.onclose = onClose;
//     websocket.onmessage = onMessage;
// }

// // When websocket is established, call the getReadings() function
// function onOpen(event) {
//     console.log('Connection opened');
//     getReadings();
// }

// function onClose(event) {
//     console.log('Connection closed');
//     setTimeout(initWebSocket, 2000);
// }

// // Function that receives the message from the ESP32 with the readings
// function onMessage(event) {
//     console.log(event.data);
//     var myObj = JSON.parse(event.data);
//     var keys = Object.keys(myObj);

//     for (var i = 0; i < keys.length; i++){
//         var key = keys[i];
//         console.log(key);
//         console.log(myObj[key]);
//         document.getElementById(key).innerHTML = myObj[key];
//     }
// }