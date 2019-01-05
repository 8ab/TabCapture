var zoomRatio = load_setting();
var screen = document.getElementById('screen');
var link = document.getElementById('link');

chrome.storage.local.get(["captureUrl", "captureTabUrl", "captureTabTitle", "captureTabWidth", "captureTabHeight"], function (items) {
    var captureUrl = items.captureUrl ? items.captureUrl : ""
    screen.src = captureUrl;
    var tabTitle = items.captureTabTitle ? items.captureTabTitle : ""
    screen.alt = tabTitle;
    var tabWidth = items.captureTabWidth ? items.captureTabWidth : 0
    screen.width = tabWidth / 100 * zoomRatio;
    var tabHeight = items.captureTabHeight ? items.captureTabHeight : 0
    screen.height = tabHeight / 100 * zoomRatio;
    var tabUrl = items.captureTabUrl ? items.captureTabUrl : ""
    link.href = tabUrl;
    link.target = "_blank";
});
