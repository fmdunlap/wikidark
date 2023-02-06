const DEFAULT_SETTINGS = {
    'theme': 'default'
}

function getSyncSettings() {
    return chrome.storage.sync.get(DEFAULT_SETTINGS);
}

function saveSyncSettings(settings) {
    chrome.storage.sync.set({ 'theme': settings['theme'] });
}

function saveTheme(theme) {
    saveSyncSettings({
        'theme': theme
    });
}

export default {
    getSyncSettings,
    saveSyncSettings,
    saveTheme
};
