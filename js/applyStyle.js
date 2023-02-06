(async () => {
    const src = chrome.runtime.getURL("js/themes.js");
    const themes = await import(src);


    let baseStyleSheet = chrome.runtime.getURL("styles/base.css");
    chrome.storage.sync.get({ 'theme': 'default' }).then((values) => {
        let currentTheme = themes.getTheme(values['theme'])
        Object.keys(currentTheme.colorCodes).forEach((colorCodeKey) => {
            document.documentElement.style.setProperty('--' + colorCodeKey, currentTheme.colorCodes[colorCodeKey]);
        })
        $('<link id="wikidark-basestylesheet" rel="stylesheet" type="text/css" href="' + baseStyleSheet + '" >').appendTo("head");
    })
})();