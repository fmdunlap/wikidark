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

function setup() {
    themes.forEach((theme) => {
        let themeRadioDiv = $('<div class="theme-radio-entry">')
        themeRadioDiv.append($('<input type="radio" id="' + theme.name + '" name="theme-radio" value="' + theme.name + '">'));
        themeRadioDiv.append($('<label for="' + theme.name + '">' + theme.name + '</label>'));
        themeRadioDiv.append($('</div>'));
        $('#theme-radio-container').append(themeRadioDiv);
    });
    settings.getSyncSettings().then(values => {
        setSelectedTheme(values['theme'])
    })
    $(document).ready(() => {
        $('input[type=radio][name=theme-radio]').on('change', () => {
            settings.saveTheme(getSelectedTheme());
            reloadWikiTabs();
        })
    })
}

setup()
