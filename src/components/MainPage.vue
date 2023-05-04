<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="rules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="rules"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Generate</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      jobTitle: '',
      rules: [
        value => {
          if (value) return true
          return 'You must enter this field.'
        },
      ],
    }),
  }
</script>
