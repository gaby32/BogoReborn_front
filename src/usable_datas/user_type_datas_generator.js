const userType = this.$store.getters.userType;
const lang = this.$stores.getters.userLang;
const optionsLabels = (lang === 'fr') ? {
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
var theme = this.$store.getters.isDarkTheme() ? 'dark' : 'light';
var iconsSrc = {
    regions: `src/assets/icons/map-marker_${theme}.png`,
    citys: `src/assets/icons/home-city_${theme}.png`,
    events: `src/assets/icons/calendar_${theme}.png`,
    users: `src/assets/icons/account-multiple_${theme}.png`
};
var options = {};

switch (userType) {
    case 'admin':
        options.userInfo = {label: optionsLabels.users, icon: };
    default :
        options.regionInfo = {label: optionsLabels.regions, icon: iconsSrc.regions};
        options.cityInfo = {label: optionsLabels.citys, icon: iconsSrc.citys};
        options.eventInfo = {label: optionsLabels.events, icon: iconsSrc.events};

}

function getOptions() {
    return options;
}