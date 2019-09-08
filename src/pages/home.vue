<template>
    <div>
        <bottom_toolbar :options="toolbarOptions"></bottom_toolbar>
    </div>
</template>

<script>
    import store from '../store';
    import Bottom_toolbar from "../components/bottom_toolbar";
    export default {
        name: 'Home',
        components: {Bottom_toolbar},
        data () {
            return {
                toolbarOptions: {
                    opt1: 'opt1',
                    opt2: 'opt2'
                }
            }
        },
        computed: {

        },
        methods: {
            /*generateToolbarOptions: () => {
                let computedOptions = {}
                switch(this.$store.getters.user.type){
                    case ('admin') :
                        computedOptions.users = OPTIONS_LABELS.users;
                    default :
                        computedOptions.regions = OPTIONS_LABELS.regions;
                        computedOptions.cities = OPTIONS_LABELS.cities;
                        computedOptions.events = OPTIONS_LABELS.events;
                }
                return computedOptions
            }*/
        }
    }
</script>

<style scoped>
    @import "../style/general_light.css";
</style>