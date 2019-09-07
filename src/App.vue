<template>
    <div>
        <v-app-bar
                color="deep-purple accent-4"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>

                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
  import test from './components/test'
export default {
  name: 'app',
  components: {
    test
  }
}
</script>

<style>

</style>
