const DEFAULT_SETTINGS = {
    'theme': 'default'
}

function setSelectedTheme(themeName) {
    $('#theme-select').val(themeName);
}

function getSelectedTheme() {
    return $('#theme-select').val();
}

function setup() {
    chrome.storage.sync.get(DEFAULT_SETTINGS).then(values => {
        setSelectedTheme(values['theme'])
    })
    $(document).ready(() => {
        $('#save').click(onSave)
    })
}

function onSave() {
    chrome.storage.sync.set({'theme': getSelectedTheme()});
}

setup()