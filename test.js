var selectedPlotName;

function onIframeLoad() {
    console.log("xxx")
    const iFrameID = document.getElementById('plot-iframe');
    if(iFrameID) {
        // here you can make the height, I delete it first, then I make it again
        iFrameID.height = "";
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "20px";
        iFrameID.width = iFrameID.contentWindow.document.body.scrollWidth + "20px";
    }
}

function onSelectPlot(plot) {
    const iFrameID = document.getElementById('plot-iframe');
    if(iFrameID) {
        iFrameID.src = "plots/"+plot;
    }
}