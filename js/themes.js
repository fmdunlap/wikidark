export const themes = [{
    name: 'Default',
    colorCodes: {
        "primary-bg-color": "#333",
        "accent-bg-color": "#555",
        "toc-bg-color": "var(--accent-bg-color)",
        "toc-link-color": "var(--dark-link-color)",
        "active-toc-link-color": "#CCC",
        "toc-hide-link-color": "var(--dark-link-color)",
        "expanded-toc-parent-color": "#CCC",
        "text-color": "#FFF",
        "hatnote-color": "var(--text-color)",
        "main-title-color": "var(--text-color)",
        "primary-link-color": "#d3c4a9",
        "dark-link-color": "#c0a97f",
        "infobox-background": "#555",
        "reflist-link-color": "#c0a97f",
        "navbox-background": "#555",
        "navbox-border": "#000",
        "navbox-title-background": "#727272",
        "navbox-group-header-color": "#7a6338",
        "navbox-subgroup-header-color": "#937845",
        "navbox-subgroup-background-color": "#666",
        "navbox-subgroup-alt-background-color": "#777",
        "navbox-text": "var(--text-color)",
        "navbox-link-color": "#d3c4a9",
        "main-menu-bg": "var(--accent-bg-color)",
        "main-menu-heading": "var(--main-title-color)",
        "main-menu-message-box-bg": "var(--primary-bg-color)",
        "main-menu-message-box-text": "var(--text-color)",
        "main-menu-link": "var(--primary-link-color)",
        "main-menu-link-visited": "var(--primary-link-color)",
    }
},
{
    name: 'Solarized',
    colorCodes: {
        "primary-bg-color": "#002b36",
        "accent-bg-color": "#073642",
        "toc-bg-color": "var(--accent-bg-color)",
        "toc-link-color": "var(--dark-link-color)",
        "active-toc-link-color": "#6c71c4",
        "toc-hide-link-color": "var(--dark-link-color)",
        "expanded-toc-parent-color": "var(--active-toc-link-color)",
        "text-color": "#fdf6e3",
        "hatnote-color": "var(--text-color)",
        "main-title-color": "var(--text-color)",
        "primary-link-color": "#2aa198",
        "dark-link-color": "#93a1a1",
        "infobox-background": "#586e75",
        "reflist-link-color": "#859900",
        "navbox-background": "#586e75",
        "navbox-border": "#eee8d5",
        "navbox-title-background": "var(--accent-bg-color)",
        "navbox-group-header-color": "#073642",
        "navbox-subgroup-header-color": "#002b36",
        "navbox-subgroup-background-color": "#586e75",
        "navbox-subgroup-alt-background-color": "#657b83",
        "navbox-text": "var(--text-color)",
        "navbox-link-color": "#fdf6e3",
        "main-menu-bg": "var(--accent-bg-color)",
        "main-menu-heading": "var(--main-title-color)",
        "main-menu-message-box-bg": "var(--primary-bg-color)",
        "main-menu-message-box-text": "var(--text-color)",
        "main-menu-link": "var(--primary-link-color)",
        "main-menu-link-visited": "var(--primary-link-color)",
    }
},
{
    name: 'Github Dark',
    colorCodes: {
        "primary-bg-color": "#21262E",
        "accent-bg-color": "#434C56",
        "toc-bg-color": "var(--accent-bg-color)",
        "toc-link-color": "var(--dark-link-color)",
        "active-toc-link-color": "#CDD9E5",
        "toc-hide-link-color": "var(--dark-link-color)",
        "expanded-toc-parent-color": "var(--active-toc-link-color)",
        "text-color": "#AFBAC5",
        "hatnote-color": "var(--text-color)",
        "main-title-color": "#CDD9E5",
        "primary-link-color": "#96D0FF",
        "dark-link-color": "var(--primary-link-color)",
        "infobox-background": "#434C56",
        "reflist-link-color": "var(--primary-link-color)",
        "navbox-background": "#21262E",
        "navbox-border": "#434C56",
        "navbox-title-background": "var(--navbox-border)",
        "navbox-group-header-color": "#2D333B",
        "navbox-subgroup-header-color": "var(--navbox-border)",
        "navbox-subgroup-background-color": "#545D68",
        "navbox-subgroup-alt-background-color": "#626E7B",
        "navbox-text": "var(--text-color)",
        "navbox-link-color": "var(--primary-link-color)",
        "main-menu-bg": "var(--accent-bg-color)",
        "main-menu-heading": "var(--main-title-color)",
        "main-menu-message-box-bg": "var(--primary-bg-color)",
        "main-menu-message-box-text": "var(--text-color)",
        "main-menu-link": "var(--primary-link-color)",
        "main-menu-link-visited": "var(--primary-link-color)",
    }   
}
]

export function getTheme(themeName) {
    let foundTheme = themes.find((theme) => theme.name == themeName);
    if (foundTheme === undefined) {
        return themes[0];
    }

    return foundTheme;
}

export function getThemeNames() {
    return themes.map(theme => theme.name);
}