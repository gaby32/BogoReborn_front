<template>
    <div v-bottom-navigation
        :value="activeOption">
        <v-btn v-for="option in options">{{ option.label }}</v-btn>
    </div>
</template>
<link rel="component_specific_stylesheet" href="{{ componentCssLink }}">
<script>
    export default {
        name: "bottom_toolbar",
        computed: {
            componentCssLink: function() {
                return this.isDark ? 'src/style/bottom_toolbar_dark.css' : 'src/style/bottom_toolbar_light.css'
            },
            options: function() {
                return this.$store.getters.toolBarOptions;
            }
        },
        methods: {
        },
        data() {
            return {
                isDark: this.$store.dispatch("isDarkTheme")
            }
        }
    }

</script>

<style scoped>
</style>