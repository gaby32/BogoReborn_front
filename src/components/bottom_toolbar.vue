<template>
    <v-bottom-navigation>
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
                //TODO Arranger ici pour chager le state du store avec une mutation
                store.state.status = `display_${option.ref}`;
                console.log(store.state.status);
            }
        }
    }
</script>

<style scoped>
    @import '../style/bottom_toolbar_dark.css';
    @import '../style/bottom_toolbar_light.css';
</style>