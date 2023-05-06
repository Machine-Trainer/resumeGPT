<template>
    <v-dialog
      persistent
      width="auto"
    >
      <v-card>
        <v-card-text v-if="!message">
          Generating...
          <v-progress-linear
            indeterminate
            color="primary"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
        <v-card-text v-else>
          <v-list-item v-for="(item, index) in message" :key="index">
              {{ item }}
          </v-list-item>
        </v-card-text>
        <v-card-actions v-if="message" class="justify-center">
          <v-btn color="primary" @click="this.$emit('dialogConfirmed')">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import testData from '@/data/test.json'
export default {
  props: {
    message: Array,
  },
};
</script>
