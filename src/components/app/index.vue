<script>
export default {
  name: 'App',
};
</script>

<template>
  <v-app>
    <v-content>
      <v-col cols="12" sm="12" md="12">
        <v-card
          dark
          tile
        >
          <v-toolbar dense>
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

          <v-col cols="12" sm="8" md="8">
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="6" class="todo-card">
                <v-card
                  class="elevation-12"
                  height="500"
                  width="600"
                  color="success"
                  @click="$router.push('/addTodo')"
                >
                  <v-card-text>
                    <v-row align="center" justify="center" class="fill-height">
                      <span
                        class="todo-card-text"
                      >
                        ADD TODO
                      </span>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="8" md="6" class="todo-card">
                <v-card
                  @click="$router.push('/todoList')"
                  class="elevation-12"
                  height="500"
                  width="600"
                  color="orange lighten-2"
                >
                  <v-card-text>
                    <v-row align="center" justify="center">
                      <span
                        class="todo-card-text"
                      >
                        Show Todo List
                      </span>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
  .todo-card-text {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    line-height: 45vh;
    color: white;
  }

  .todo-card {
    cursor: pointer;
    transition: transform 1s; /* Animation */
  }

  .todo-card:hover {
    transform: scale(1.2);
  }
</style>
