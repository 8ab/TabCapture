
window.onload = function () {
    var btn = document.getElementById("save");
    var zoom = document.getElementById('zoom');
    var zoomRatio = load_setting();
    zoom.value = zoomRatio;

    btn.addEventListener("click", function () {
        if (zoom.value > 200) zoom.value = 200;
        if (zoom.value < 20) zoom.value = 20;
        save_setting(zoom.value);
    });
}