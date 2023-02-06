import settings from "/js/settings.js";
import { themes } from "./themes.js";

function setSelectedTheme(themeName) {
    $('#theme-select').val(themeName);
}

function getSelectedTheme() {
    return $('#theme-select').val();
}

function reloadWikiTabs() {
    chrome.tabs.query({
        url: [
            "http://*.wikipedia.org/*",
            "https://*.wikipedia.org/*"
        ]
    }).then((tabs) => {
        tabs.forEach(tab => {
            chrome.tabs.reload(tab.id),
            {
                bypassCache: true
            }
        })
    })
}

function setup() {
    themes.forEach((theme) => {
        console.log(theme)
        $('<option value="' + theme.name + '">' + theme.name + '</option>').appendTo($('#theme-select'));
    });
    settings.getSyncSettings().then(values => {
        setSelectedTheme(values['theme'])
    })
    $(document).ready(() => {
        $('#theme-select').on('change', () => {
            settings.saveTheme(getSelectedTheme());
            reloadWikiTabs();
        })
    })
}

setup()
