import settings from "/js/settings.js";
import { themes } from "./themes.js";

function setSelectedTheme(themeName) {
    $('input:radio[name=theme-radio]').filter('[value="' + themeName + '"]').prop('checked', true);
}

function getSelectedTheme() {
    return $('input:radio[name=theme-radio]:checked').val();
}

function reloadWikiTabs() {
    chrome.tabs.query({
        url: [
            "http://*.wikipedia.org/*",
            "https://*.wikipedia.org/*"
        ]
    }).then((tabs) => {
        tabs.forEach(tab => {
            chrome.tabs.reload(tab.id)
        })
    })
}

function addThemeRadioButtons() {
    themes.forEach((theme) => {
        let themeRadioEntry = $('<div class="theme-radio-entry">')
        themeRadioEntry.append($('<input type="radio" id="' + theme.name + '" name="theme-radio" value="' + theme.name + '">'));
        themeRadioEntry.append($('<label for="' + theme.name + '">' + theme.name + '</label>'));
        themeRadioEntry.append($('</div>'));
        $('#theme-radio-container').append(themeRadioEntry);
    });
}

function onThemeChange() {
    settings.setActiveTheme(getSelectedTheme());
    reloadWikiTabs();
}

async function setup() {
    addThemeRadioButtons()
    setSelectedTheme(await settings.getActiveTheme())
    $(document).ready(() => {
        $('input[type=radio][name=theme-radio]').on('change',onThemeChange)
    })
}

await setup()
