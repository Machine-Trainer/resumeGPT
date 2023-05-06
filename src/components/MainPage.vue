<template>
  <v-sheet width="30%" class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <v-row dense>
        <v-col >
          <v-text-field
            v-model="jobTitle"
            label="Job Title"
            hint="e.g. Software Engineer"
            autocomplete="on"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="company"
            label="Company"
            hint="e.g. Google"
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
            autocomplete="on"
          ></v-text-field>
        </v-col>
        <v-col >
          <v-text-field
            v-model="state"
            label="State"
            hint="e.g. California"
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
        v-model="description"
        label="Experience Description"
        hint="e.g. I worked as a software engineer on the Google Maps team."
      ></v-textarea>
      <v-btn type="submit"
            block
            class="mt-2"
            :disabled="!jobTitle || !company || !description"
            :loading="isLoading"
      >Generate</v-btn>
    </v-form>

    <LoadDialog v-model="isLoading" :message="generatedData" @dialogConfirmed="handleDialog"/>
  </v-sheet>
</template>
<script>
  import monthData from '@/data/month.json'
  import yearData from '@/data/year.json'
  import LoadDialog from '@/components/LoadDialog.vue'
  import generate from '@/services/chatGPTservice.ts'
  export default {
    components: {
      LoadDialog,
    },
    methods: {
      handleDialog(){
        this.isLoading=false;
        this.generatedData=undefined;
      },
      submitForm(){
        this.isLoading=true;
        generate(
          this.jobTitle,
          this.company,
          this.city+" , "+this.state,
          this.startMonth+" "+this.startYear,
          this.endMonth+" "+this.endYear,
          this.description,
        ).then((res) => {
          if(res=="")return;
          this.generatedData = res.split("\n");
        })
      }
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
      description: '',
      generatedData: undefined,
    }),
  }
</script>
