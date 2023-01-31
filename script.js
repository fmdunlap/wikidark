console.log("Hello!")
var a = chrome.runtime.getURL("styles/default.css");
$('<link rel="stylesheet" type="text/css" href="' + a + '" >').appendTo("head");