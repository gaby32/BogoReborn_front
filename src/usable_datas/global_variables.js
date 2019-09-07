import { getOptions } from "./user_options_generator";

let theme = this.$store.getters.isDarkTheme() ? 'dark' : 'light';
let lang = this.$store.getters.userLang;

export const APP_ICONS_SRC = {
    regionIcon: `src/assets/icons/map-marker_${theme}.png`,
    cityIcon: `src/assets/icons/home-city_${theme}.png`,
    userIcon: `src/assets/icons/account-multiple_${theme}.png`,
    eventIcon: `src/assets/icons/calendar_${theme}.png`
};

export const OPTIONS_LABELS = (lang === 'fr') ? {
    regions: 'Régions',
    citys: 'Villes',
    events: 'Événements',
    users: 'Usagers'
} : {
    regions: 'Regions',
    citys: 'Cities',
    events: 'Events',
    users: 'Users'
};

export const USER_OPTIONS = getOptions();