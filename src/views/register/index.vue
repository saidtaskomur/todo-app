<script>
import { mapActions } from 'vuex';
// import snackbar from "../../mixins/snackbar";
export default {
  //   mixins: [snackbar],
  data() {
    return {
      formData: {},
    };
  },
  mounted() {
    const self = this;
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        self.register();
      }
    });
  },
  methods: {
    ...mapActions('register', ['registerSystem']),
    register() {
      this.formData.returnSecureToken = true;
      this.registerSystem(this.formData)
        .then(() => {
          this.$router.push('/login');
        })
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(err.response.data.error.message);
        });
    },
    goLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="light-blue lighten-1" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="formData.email"
                    label="Email"
                    name="register"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="formData.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                    @click.native="goLogin"
                    dark
                    color="orange lighten-1">
                    Login
                  </v-btn>
                <v-spacer />
                <v-btn
                  @click.native="register"
                  dark
                  color="light-blue lighten-1"
                >
                  Register
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
