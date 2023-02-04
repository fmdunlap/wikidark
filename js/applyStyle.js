let baseStyleSheet = chrome.runtime.getURL("styles/base.css");

chrome.storage.sync.get({'theme': 'default'}).then((values) => {
    console.log("Got theme '" + values['theme'] + "'");

    let colorSheet = chrome.runtime.getURL("styles/" + values['theme'] + ".css");
    $('<link id="wikidark-colorsheet" rel="stylesheet" type="text/css" href="' + colorSheet + '" >').appendTo("head");
    $('<link id="wikidark-basestylesheet" rel="stylesheet" type="text/css" href="' + baseStyleSheet + '" >').appendTo("head");
})