const DEFAULT_SETTINGS = {
    'theme': 'default'
}

export function getSyncSettings() {
    return chrome.storage.sync.get(DEFAULT_SETTINGS);
}

export function saveSettings(settings) {
    chrome.storage.sync.set({'theme': settings['theme']});
}