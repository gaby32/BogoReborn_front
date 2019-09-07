import { OPTIONS_LABELS, APP_ICONS_SRC } from "./global_variables";

const userType = this.$store.getters.userType;

let options = {};

switch (userType) {
    case 'admin':
        options.userInfo = {label: OPTIONS_LABELS.users, icon: APP_ICONS_SRC.userIcon};
    default :
        options.regionInfo = {label: OPTIONS_LABELS.regions, icon: APP_ICONS_SRC.regions};
        options.cityInfo = {label: OPTIONS_LABELS.citys, icon: APP_ICONS_SRC.citys};
        options.eventInfo = {label: OPTIONS_LABELS.events, icon: APP_ICONS_SRC.events};

}

export function getOptions() {
    return options;
}