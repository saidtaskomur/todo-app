<script>
import { mapActions } from 'vuex';
// import snackbar from "../../mixins/snackbar";
export default {
//   mixins: [snackbar],
  data() {
    return {
      formData: {},
      passwordShow: false,
    };
  },
  created() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  mounted() {
    const self = this;
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        self.login();
      }
    });
  },
  methods: {
    ...mapActions('login', ['loginSystem']),
    login() {
      this.formData.returnSecureToken = true;
      this.loginSystem(this.formData)
        .then((response) => {
          window.localStorage.setItem('userId', response.user.uid);
          this.$router.push('/');
        });
    },
    goRegister() {
      this.$router.push('/register');
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
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="formData.email"
                    label="E-Mail"
                    name="login"
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
                  @click.native="goRegister"
                  dark
                  color="orange lighten-1"
                >
                  Register
                </v-btn>

                <v-spacer />

                <v-btn
                  @click.native="login"
                  dark
                  color="light-blue lighten-1"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
