// ==============================================================
//  Eye tracking on WebPage - Get Coordinates

var listObjects = []
webgazer.setGazeListener((data)=>{

    if (data == null) {
        return;
    }

    var objectData = {
        x: data.x,
        y: data.y
    }

    console.log(JSON.stringify(objectData));
    listObjects.push(JSON.stringify(objectData));

    //console.log(data,timestamp)
}).begin()
//  Eye tracking on WebPage

// ==============================================================
//  Save Doc with coordinates

function download() {
    
    console.log("MENSAJE DE SAVE TXT ===========================")
    console.log(listObjects)

    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(listObjects));
    pom.setAttribute('download', 'info_coordinates.json');

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

//  Save Doc with coordinates


