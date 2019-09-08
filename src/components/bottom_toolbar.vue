<template>
    <v-bottom-navigation>
        <v-btn v-for="option in options">{{ option }}</v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "bottom_toolbar",
        props: [
            'options'
        ],
        computed: {

        },
        methods: {

        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    @import '../style/bottom_toolbar_dark.css';
    @import '../style/bottom_toolbar_light.css';
</style>