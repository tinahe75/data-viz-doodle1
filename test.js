function onSelectPlot(plot, displayId) {
    const iFrameID = document.getElementById(displayId);
    if(iFrameID) {
        iFrameID.data = "plots/"+plot;
    }
}

