function applyInternalFilterStyles(theme) {
    // document.documentElement.style.
}

function applyCssColorVariables(theme) {
    Object.keys(theme.colorCodes).forEach((colorCodeKey) => {
        document.documentElement.style.setProperty('--' + colorCodeKey, theme.colorCodes[colorCodeKey]);
    })
    Object.keys(theme.filterCodes).forEach((filterCodeKey) => {
        document.documentElement.style.setProperty('--' + filterCodeKey, theme.filterCodes[filterCodeKey]);
    })
}

function applyBaseStyleSheet() {
    let baseStyleSheetUrl = chrome.runtime.getURL("styles/base.css");
    $('<link id="wikidark-basestylesheet" rel="stylesheet" type="text/css" href="' + baseStyleSheetUrl + '" >').appendTo("head");
}

function stripHardcodedColorsFromInternalStyles() {
    $("body").find("style").each(function() {
        filteredStyle = $( this )[0].innerHTML.split(' ').filter(word => !word.includes('color') && (!word.includes('background') || word.includes('url')));
        filteredStyle.forEach((word, i) => {
            filteredStyle[i] = word.replaceAll(new RegExp(/#[0-9a-fA-F]{3,}/, 'g'), '')
        })
        $( this )[0].innerHTML = filteredStyle.join(' ');
    })
}

async function applyStyle() {
    const src = chrome.runtime.getURL("js/themes.js");
    const themes = await import(src);
    
    chrome.storage.sync.get({ 'theme': 'default' }).then((values) => {
        let theme = themes.getTheme(values['theme'])
        stripHardcodedColorsFromInternalStyles()
        applyCssColorVariables(theme);
        applyBaseStyleSheet()
        applyInternalFilterStyles(theme)
    })
}

(async () => {
    applyStyle();
})();