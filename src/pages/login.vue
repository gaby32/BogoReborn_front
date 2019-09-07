<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12"
                        >
                            <v-toolbar
                                    dark color="#ffe21c"
                            >
                                <v-toolbar-title>Login</v-toolbar-title>

                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="login">
                                    <v-text-field v-model="username32"
                                                  prepend-icon="person"
                                                  color="#ffe21c"
                                                  :rules="[rules.required, rules.counter]"
                                                  name="Username"
                                                  :error-messages="error"
                                                  @change="error ='' "
                                                  label="Username"
                                                  type="text"></v-text-field>
                                    <v-text-field v-model="password32"
                                                  prepend-icon="lock"
                                                  color="#ffe21c"
                                                  :rules="[rules.required, rules.counter]"
                                                  name="password"
                                                  label="Password"
                                                  id="password"
                                                  type="password"></v-text-field>

                                    <router-link to="/Register">register</router-link>
                                    <v-card-actions>

                                        <v-spacer></v-spacer>
                                        <v-btn dark color="#ffe21c"
                                               type="submit">Login
                                        </v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
    export default {
        name: "Login",
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


</style>