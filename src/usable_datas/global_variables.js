import store from '../store';

//let theme = store.dispatch(isDarkTheme()) ? 'dark' : 'light';
let theme = 'dark';
//let lang = store.getters.userLang;
let lang = 'fr';

export const APP_ICONS_SRC = {
    regionIcon: `src/assets/icons/map-marker_${theme}.png`,
    cityIcon: `src/assets/icons/home-city_${theme}.png`,
    userIcon: `src/assets/icons/account-multiple_${theme}.png`,
    eventIcon: `src/assets/icons/calendar_${theme}.png`
};

export const OPTIONS_LABELS = (lang === 'fr') ? {
    regions: 'Régions',
    cities: 'Villes',
    events: 'Événements',
    users: 'Usagers'
} : {
    regions: 'Regions',
    citys: 'Cities',
    events: 'Events',
    users: 'Users'
};