<template>
  <v-div class="ml-12 pl-12">


    <v-toolbar class="blue lighten-2 mb-8">
      <v-toolbar-title >Bidder Profile</v-toolbar-title>
    </v-toolbar>


    <v-row justify="center">
      <v-avatar color="blue" size="100">
        <v-icon dark size="70">mdi-account-circle</v-icon>
      </v-avatar>
      <h2 class="mt-8 ml-12">Username</h2>
      <v-btn icon small class="mt-8 ml-6"><v-icon> fa-pen </v-icon> </v-btn>
    </v-row>

    <v-row >
      

      <v-col class="ml-12 pl-12">
        <v-col >
          <header>Bidder Status</header>
        </v-col>
        <v-radio-group>
          <v-radio label="Active"></v-radio>

          <v-radio label="Inactive"></v-radio>
        </v-radio-group>
      </v-col>


<v-col >
        <v-col >
          <header>Bidder Type</header>
        </v-col>
        <v-radio-group>
          <v-radio label="Business"></v-radio>

          <v-radio label="Individual"></v-radio>
        </v-radio-group>
      </v-col>
     
    </v-row>




    <v-btn text class="mx-12 px-12" > Digital Signature Certificate</v-btn>
<v-col class="mx-12 px-12">
 <v-col class="d-flex" cols="6" sm="3">
        <v-select
          :items="items"
          label="Company Details"
          dense
          outlined
        ></v-select>
      </v-col>


      <v-col class="d-flex" cols="6" sm="3">
        <v-select
          :items="items"
          label="Address Details"
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="6" sm="3">
        <v-select
          :items="items"
          label="List of Submitted Bids"
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="6" sm="3">
        <v-select
          :items="items"
          label="Additional Information"
          dense
          outlined
        ></v-select>
      </v-col>


</v-col >
<v-row class="text-center"><v-btn class="primary ml-auto mr-12" >Save </v-btn> <v-btn class="secondary mr-12">Cancel </v-btn></v-row>
  </v-div>
</template>