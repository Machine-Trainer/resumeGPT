<template>
  <v-sheet width="30%" class="mx-auto">
    <v-form @submit.prevent="isLoading=true">
      <v-row dense>
        <v-col >
          <v-text-field
            v-model="jobTitle"
            label="Job Title"
            hint="e.g. Software Engineer"
            :rules="rules"
            autocomplete="on"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="company"
            label="Company"
            hint="e.g. Google"
            :rules="rules"
            autocomplete="on"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col >
          <v-text-field
            v-model="city"
            label="City"
            hint="e.g. San Francisco"
            :rules="rules"
            autocomplete="on"
          ></v-text-field>
        </v-col>
        <v-col >
          <v-text-field
            v-model="state"
            label="State"
            hint="e.g. California"
            :rules="rules"
            autocomplete="on"
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
      <v-textarea
        label="Experience Description"
        hint="e.g. I worked as a software engineer on the Google Maps team."
      ></v-textarea>
      <v-btn type="submit"
            block
            class="mt-2"
            :disabled="isLoading"
            :loading="isLoading"
      >Generate</v-btn>
    </v-form>

    <LoadDialog v-model="isLoading" :message="generatedData"/>
  </v-sheet>
</template>
<script>
  import monthData from '@/data/month.json'
  import yearData from '@/data/year.json'
  import LoadDialog from '@/components/LoadDialog.vue'
  import TypeWriter from '@/components/TypeWriter.vue'
  import generate from '@/services/chatGPTservice.ts'
  export default {
    components: {
      TypeWriter,
      LoadDialog,
    },
    methods: {
      handleClick () {
        this.isLoading = true
        generate()
      },
    },
    data: () => ({
      jobTitle: '',
      company: '',
      city: '',
      state: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      isLoading: false,
      monthData:monthData,
      yearData:yearData,
      generatedData: "",
      rules: [
        value => {
          return true
          return 'You must enter this field.'
        },
      ],
    }),
    watch: {
      isLoading (val) {
        if (!val) return
        generate().then((res) => {
          this.generatedData = res
          this.isLoading = false
        })
      },
    },
  }
</script>
