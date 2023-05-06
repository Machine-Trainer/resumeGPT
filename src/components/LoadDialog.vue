<template>
    <v-dialog
      persistent
      width="auto"
    >
      <v-card>
        <v-card-text>
          Generating...
          <v-progress-linear
            indeterminate
            color="primary"
            class="mb-0"
          ></v-progress-linear>
          <!-- <v-list-item v-for="(item, index) in message" :key="index">
            {{ item }}
          </v-list-item> -->
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import testData from '@/data/test.json'
export default {
  // props: {
  //   message: String,
  // },
  data: () => ({
    message: testData,
  }),
};
</script>
