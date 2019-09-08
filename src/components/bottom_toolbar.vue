<template onload="this.generateOptionsForStore()">
    <v-bottom-navigation>
        <v-btn v-for="option in options">{{ option }}</v-btn>
    </v-bottom-navigation>
</template>

<script>
    import { options } from '../usable_datas/global_variables';
    export default {
        name: "bottom_toolbar",
        props: {
            options: {}
        },
        computed: {
            options: function() {
                return this.$store.getters.toolBarOptions;
            }
        },
        methods: {
            generateOptionsForStore() {
                var newOptions = {}
                switch(this.$store.getters.userType){
                    case ('admin') :
                        newOptions.users = options.users;
                    default :
                        newOptions.regions = options.regions;
                        newOptions.cities = options.cities;
                        newOptions.events = options.events;
                }
                //mutation pour mettre mes options
            }
        },
        data() {
            return {
                isDark: this.$store.dispatch("isDarkTheme")
            }
        }
    }
</script>

<style scoped>
    @import '../style/bottom_toolbar_dark.css';
    @import '../style/bottom_toolbar_light.css';
</style>