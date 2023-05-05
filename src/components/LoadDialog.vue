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
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>
