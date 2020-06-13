<script>
const fb = require('@/../firebaseConfig.js');

export default {
  name: 'UpdateTodoItemDialog',
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
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
  mounted() {
    this.dialog = true;
  },
  beforeDestroy() {
    this.dialog = false;
  },
  methods: {
    submit() {
      fb.listCollection.child(this.formData.id).update(this.formData);
      this.$emit('refresh');
      this.$emit('cancel');
    },
  },
};
</script>

<template>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title class="headline">Update Todo</v-card-title>

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
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="$emit('cancel')"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="submit"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
