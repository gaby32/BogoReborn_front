import store from '../store';

let theme = store.getters.theme;
let lang = store.getters.user.lang;

export const APP_ICONS_SRC = {
    regionIcon: `src/assets/icons/map-marker_${theme}.png`,
    cityIcon: `src/assets/icons/home-city_${theme}.png`,
    userIcon: `src/assets/icons/account-multiple_${theme}.png`,
    eventIcon: `src/assets/icons/calendar_${theme}.png`
};

export const OPTIONS_LABELS =  {
    regions: {
        'ref': 'regions',
        'fr': 'Régions',
        'en': 'Regions'
    },
    cities: {
        'ref': 'cities',
        'fr': 'Villes',
        'en': 'Cities'
    },
    events: {
        'ref': 'events',
        'fr': 'Événements',
        'en': 'Events'
    },
    users: {
        'ref': 'users',
        'fr': 'Usagers',
        'en': 'Users'
    }
};