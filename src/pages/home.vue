<template>
    <div>
        <bottom_toolbar :lang="lang" :options="toolbarOptions"></bottom_toolbar>
    </div>
</template>

<script>
    import store from '../store';
    import Bottom_toolbar from "../components/bottom_toolbar";
    import { OPTIONS_LABELS } from "../usable_datas/global_variables";

    export default {
        name: 'Home',
        components: {Bottom_toolbar},
        data () {
            return {

            }
        },
        computed: {
            lang: () => {
                return store.getters.user.lang;
            },
            toolbarOptions: () => {
                let options = [];
                let user = store.getters.user;
                switch (user.type) {
                    case ('admin'):
                        options.push(OPTIONS_LABELS.users);
                    default:
                        options.push(OPTIONS_LABELS.regions);
                        options.push(OPTIONS_LABELS.cities);
                        options.push(OPTIONS_LABELS.events);

                }
                return options;
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    @import "../style/general_light.css";
</style>