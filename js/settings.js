const DEFAULT_SETTINGS = {
    'theme': 'default'
}

async function getSyncSettings() {
    return (await chrome.storage.sync.get(DEFAULT_SETTINGS));
}

function saveSyncSettings(settings) {
    chrome.storage.sync.set({ 'theme': settings['theme'] });
}

function setActiveTheme(theme) {
    saveSyncSettings({
        'theme': theme
    });
}

async function getActiveTheme() {
    return (await getSyncSettings())['theme'];
}

export default {
    getSyncSettings,
    saveSyncSettings,
    setActiveTheme,
    getActiveTheme
};
