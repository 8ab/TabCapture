var ContextMenus = new function () {
    var items = {};
    var callbacks = {};

    this.setItems = function (aItems) {
        aItems.forEach(function (item) {
            callbacks[item.id] = item.onclick;
            item.onclick = null;
            items[item.id] = item;
        });
    };

    this.create = function () {
        Object.keys(items).forEach(
            function (key) {
                chrome.contextMenus.create(items[key]);
            }
        );
    };

    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        callbacks[info.menuItemId](info, tab);
    });
};

ContextMenus.setItems([
    {
        title: "たぶキャプチャー",
        contexts: ["page"],
        type: "normal",
        id: 'tabCapture',
        onclick: tabCapture()
    }
]);

chrome.runtime.onInstalled.addListener(ContextMenus.create);

function tabCapture() {
    return function (info, tab) {
        chrome.tabs.captureVisibleTab(function (screenshotUrl) {
            chrome.storage.local.set({ captureUrl: screenshotUrl });
            chrome.storage.local.set({ captureTabUrl: tab.url });
            chrome.storage.local.set({ captureTabTitle: tab.title });
            chrome.storage.local.set({ captureTabWidth: tab.width });
            chrome.storage.local.set({ captureTabHeight: tab.height });
        })
    }
};
