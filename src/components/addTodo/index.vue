<script>
const fb = require('@/../firebaseConfig.js');

export default {
  name: 'AddTodo',
  data() {
    return {
      formData: {
        dateFrom: new Date().toISOString().substr(0, 10),
        dateTo: new Date().toISOString().substr(0, 10),
      },
      modal: false,
      menu2: false,
      menu3: false,
      priorityies: [
        { key: 'Low', value: '0' },
        { key: 'Normal', value: '1' },
        { key: 'High', value: '2' },
      ],
    };
  },
  methods: {
    saveTodo() {
      this.formData.userId = window.localStorage.getItem('userId');
      fb.listCollection.push(this.formData)
        .then(() => {
          this.$router.push('/todoList');
        });
    },
  },
};
</script>

<template>
  <v-app id="inspire">
    <v-content>
      <v-col cols="12" sm="12" md="12">
        <v-card
          dark
          tile
        >
          <v-toolbar dense>
            <v-btn text depressed @click="$router.push('/')">
              <v-icon color="white">mdi-menu-left</v-icon>
              back
            </v-btn>
            <v-spacer />
            <v-btn text depressed color="white" @click="$router.push('/login')">
              Exit
              <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-col>

      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="light-blue lighten-1" dark flat>
                <v-toolbar-title>Create New Todo</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="formData.title"
                    label="Title"
                  />

                  <v-text-field
                    v-model="formData.description"
                    label="Description"
                  />

                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formData.dateFrom"
                        label="Start Date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="formData.dateFrom" @input="menu2 = false" />
                  </v-menu>

                  <v-menu
                    v-model="menu3"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formData.dateTo"
                        label="End Date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="formData.dateTo" @input="menu3 = false"></v-date-picker>
                  </v-menu>

                  <v-combobox
                    v-model="formData.priority"
                    :items="priorityies"
                    label="Priority"
                    item-text="key"
                    item-value="value"
                    dense
                  />
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  @click.native="$router.push('/')"
                  dark
                  color="orange lighten-1"
                >
                  Back
                </v-btn>

                <v-spacer />

                <v-btn
                  @click.native="saveTodo"
                  dark
                  color="light-blue lighten-1"
                >
                  Save Todo
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
