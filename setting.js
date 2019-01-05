function load_setting() {
    return localStorage["zoomRatio"] ? localStorage["zoomRatio"] : 50
}

function save_setting(zoomRatio) {
    localStorage["zoomRatio"] = zoomRatio;
}