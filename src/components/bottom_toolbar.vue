<template>
    <v-bottom-navigation style="position: fixed; bottom: 0px;">
        <v-btn v-for="option in options" @click="updateState(option)">{{ option[lang] }}</v-btn>
    </v-bottom-navigation>
</template>

<script>
    import store from '../store';
    export default {
        name: "bottom_toolbar",
        props: {
            lang: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                required: true
            }
        },
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            updateState: (option) => {
                store.commit( 'changeState', `display_${option.ref}`);
            }
        }
    }
</script>

<style scoped>
    @import '../style/bottom_toolbar_dark.css';
    @import '../style/bottom_toolbar_light.css';
</style>