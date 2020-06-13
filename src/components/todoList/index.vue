<script>
import UpdateTodoItemDialog from './components/UpdateTodoItemDialog.vue';

const fb = require('@/../firebaseConfig.js');
const moment = require('moment');

export default {
  name: 'TodoList',
  components: {
    UpdateTodoItemDialog,
  },
  data() {
    return {
      moment,
      todoItem: {},
      isFetch: false,
      showUpdateTodoItemDialog: false,
      userId: '',
      lists: [],
    };
  },
  mounted() {
    this.userId = window.localStorage.getItem('userId');
    this.fetchTodoList();
  },
  methods: {
    fetchTodoList() {
      this.isFetch = false;
      this.lists = [];
      fb.listCollection.orderByChild('userId').equalTo(this.userId).on('value', (snap) => {
        snap.forEach((element) => {
          const tempObject = {
            ...element.val(),
            id: element.key,
          };
          this.lists.push(tempObject);
        });
        this.isFetch = true;
      });
    },
    deleteTodoItem(id) {
      fb.listCollection.child(id).remove();
      this.fetchTodoList();
    },
    fetchCurrentItemData(id) {
      fb.listCollection.child(id).on('value', (snap) => {
        snap.forEach((element) => {
          this.todoItem[element.key] = element.val();
        });
        this.todoItem.id = id;
      });
    },
    refreshList() {
      this.fetchTodoList();
    },
  },
};
</script>

<template>
  <v-layout row wrap px-5>
    <v-flex md12>
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
    </v-flex>

    <v-flex md12 v-if="!isFetch">
      <v-progress-linear :indeterminate="true" />
    </v-flex>

    <v-flex md12 v-else>
      <v-data-table
        :items="lists"
        fixed-header
        :items-per-page="25"
        item-key="id"
        class="elevation-1"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.priority.key }}</td>
            <td>{{ moment(item.dateFrom).add(10, 'days').calendar() }} </td>
            <td>{{ moment(item.dateTo).add(10, 'days').calendar() }} </td>
            <td>
              <v-btn
                icon
                text
                depressed
                @click="fetchCurrentItemData(item.id) ,showUpdateTodoItemDialog = true;">
                <v-icon color="primary">mdi-pen</v-icon>
              </v-btn>
              <v-btn icon text depressed @click="deleteTodoItem(item.id)">
                <v-icon color="error">mdi-trash-can-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>

        <template v-slot:header="{ props: { } }">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Description
              </th>
              <th>
                Priority
              </th>
              <th>
                Start Date
              </th>
              <th>
                End Date
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
        </template>
      </v-data-table>
    </v-flex>

    <UpdateTodoItemDialog
      v-if="showUpdateTodoItemDialog"
      @cancel="showUpdateTodoItemDialog=false"
      :form-data="todoItem"
      @refresh="refreshList"
    />
  </v-layout>
</template>
