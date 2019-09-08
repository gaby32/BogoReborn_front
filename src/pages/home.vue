<template>
    <div>
        <bottom_toolbar></bottom_toolbar>
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
                options: store.getters.toolBarOptions
            }
        },
        computed: {

        }
    }
</script>

<style scoped>
    @import "../style/general_light.css";
</style>