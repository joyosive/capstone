<template>

<div class="pre-formatted">
<v-toolbar class="blue lighten-2"> <v-toolbar-title> Bids</v-toolbar-title></v-toolbar>
<v-alert>All proposed bids can be seen here. </v-alert>
    <v-container mx-auto>
<v-data-table :headers="headers"
      :items="covers"
      item-key="name"
      >



      <template v-slot:item.assign="{ item }">
        <v-btn small v-model="item.assign" dark class="blue darken-2" to="AssignExperts">Assign an Expert</v-btn>
      </template>

</v-data-table>
    </v-container>
</div>
</template>

<script>

export default {
  name: "ViewAll",

  data() {
    return {
      
       covers: [
        {
          id:"121",
          description:"Hello! \n At vero eos et accusamus et iusto odio dignissimos ducimus \n qui blanditiis praesentium  deleniti atque corrupti quos \n doloreset quas molestias excepturi occai cupiditate non provident, \n similique sunt in culpa qui officia animi, id estlaborum et dolorum fuga. \n Et harum quidem rerum facilis est et expedita distinctio. \n Name libero tempore, cum soluta nobis est  cumque nihil impedit quo.",
          amount:" 50 Cr.",
          date: "4-12-2011"
        },
         {
          id:"122",
          description:"Hello, deleniti atque corrupti quos dolores et quas molestias excepturi \n sint occaecati cupiditate non in culpa quiofficia deserunt mollitia animi, \n id est fuga. Et harum quidem rerum facilis est et expedita distinctio. \n Nam nobis est eligendi optio cumquenihil impedit quo minus id quod \n maxime placeat. International Ltd.",
         amount:" 45 Cr.",
           date: "9-12-2001"
        },
         {
          id:"123",
          description:"Hello! Sed ut perspiciatis unde omnis iste natus error sit voluptatem \n accusantium doloremque laudantium, totam rem aperiam, eaque \n ipsaquae ab illo inventore veritatis et quasi architecto be explicabo. \n Nemo enim ipsam voluptatem quia voluptas sitaspernatur aut odit \n aut fugit, sed quia consequuntur magni  dolores eos ratione voluptatem \n sequi nesciunt. Neque porro quisquam est,qui dolorem ipsum quia dolor \n sit amet, consectetur, adipisci velit, sed quia non numquam eius modi \n tempora incidunt ut labore et doloremagnam aliquam quaerat voluptarem.",
         amount:" 60 Cr.",
           date: "29-12-2001"
        },
        
  ],
  headers: [
        {                                                                                                                                                                                                    

          text: 'Bid id',
          value: 'id',
        },
        {
          text: 'Bid Description',
          value: 'description',
        },
         {
          text: 'Closing Dates',
          value: 'date',
        },
        {
          text: 'Bid Amount',
          value: 'amount',
        },
        {
          text: ' ',
          value: 'assign',
        },


      ]

    }
  }
};
</script>

<style>
.pre-formatted {
  white-space: pre;
}
</style>