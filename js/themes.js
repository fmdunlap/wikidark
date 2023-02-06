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
        "navbox-link-color": "#d3c4a9",
    }
},
{
    name: 'Solarized',
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
        "navbox-link-color": "#d3c4a9",
    }
},
{
    name: 'github dark',
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
        "navbox-link-color": "var(--primary-link-color)",
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