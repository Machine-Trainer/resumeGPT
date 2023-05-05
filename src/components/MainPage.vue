<template>
  <v-sheet width="30%" class="mx-auto">
    <v-form @submit.prevent>
      <v-row dense>
        <v-col >
          <v-text-field
            v-model="jobTitle"
            label="Job Title"
            :rules="rules"
            autocomplete="jobTitle"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="company"
            label="Company"
            :rules="rules"
            autocomplete="company"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col >
          <v-text-field
            v-model="city"
            label="City"
            :rules="rules"
            autocomplete="City"
          ></v-text-field>
        </v-col>
        <v-col >
          <v-text-field
            v-model="state"
            label="State"
            :rules="rules"
            autocomplete="state"
          ></v-text-field>
        </v-col >
      </v-row>
      <p class="font-weight-medium">Start Date</p>
      <v-row dense>
        <v-col >
          <v-autocomplete
            v-model="startMonth"
            label="Month"
            :items="monthData"
          ></v-autocomplete>
        </v-col>
        <v-col >
          <v-autocomplete
            v-model="startYear"
            label="Year"
            :items="yearData"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <p class="font-weight-medium">End Date</p>
      <v-row dense>
        <v-col >
          <v-autocomplete
            v-model="endMonth"
            label="Month"
            :items="monthData"
          ></v-autocomplete>
        </v-col>
        <v-col >
          <v-autocomplete
            v-model="endYear"
            label="Year"
            :items="yearData"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-textarea label="Experience Description"></v-textarea>
      <v-btn type="submit"
            block
            class="mt-2"
            :disabled="isLoading"
            :loading="isLoading"
            @click="isLoading = true"
      >Generate</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
  import monthData from '@/data/month.json'
  import yearData from '@/data/year.json'
  export default {
    data: () => ({
      jobTitle: '',
      company: '',
      city: '',
      state: '',
      isLoading: false,
      monthData:monthData,
      yearData:yearData,
      rules: [
        value => {
          if (value) return true
          return 'You must enter this field.'
        },
      ],
    }),
  }
</script>
