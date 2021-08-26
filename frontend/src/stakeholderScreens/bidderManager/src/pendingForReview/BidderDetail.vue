<template>
    <v-container>
        <v-card class="mx-auto mb-0 pb-0">
            <v-tabs background-color="blue" centered dark text>
                <v-tabs-slider></v-tabs-slider>

                <v-tab>Basic Details</v-tab>
                <v-tab>Cover Details</v-tab>

                <v-tab-item :key="tab1">
                    <v-card flat>
                        <v-div class="text-center">
                            <h1>Bidder Details</h1>
                        </v-div>
                        <br />
                        <br />

                        <v-container class="pl-16 ml-16">
                            <pre>Company Name                       :      AMC Networks PTE Limited<br />Company Registration Number        :      SG808332 <br />Company Contact Person             :      Rajesh Kumar <br />Company Contact Person Number      :      9865667521 <br />Tender Category                    :      Services <br />Main E-Mail Address                :      rajesh@amc.co.in <br />Telephone(Office)                  :      0116774755 <br />Mobile Number                      :      9867545723 <br />Main Company Address               :      F3/277, Mogli Building, Noida, UP
          
          </pre>
                        </v-container>

                        <br />
                        <br />
                    </v-card>
                </v-tab-item>

                <v-tab-item :key="tab2">
                    <v-card flat>
                        <br />
                        <br />
                        <pre class="text-center"> Tender Registration Number              :               GEUF353G</pre>
                        <br />
                        <br />
                        <v-container>
                            <v-data-table :headers="headers" :items="covers" item-key="name">
                                <template v-slot:item.ViewDoc="{ item }">
                                    <v-btn small v-model="item.ViewDoc" icon>
                                        <v-icon>fa-folder-open</v-icon>
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-container>
                    </v-card>
                </v-tab-item>
            </v-tabs>
            <div class="text-center">
                <v-btn small class="primary mr-12 mb-12" :to="{name: 'BidderRegistered'}">Verify</v-btn>
                <v-btn small :to="{name: 'SuspendedBidders'}" class="mb-12">Suspend</v-btn>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'BidderDetail',

    data() {
        return {
            covers: [
                {
                    id: '121',
                    CoverName: 'ABCTechltd.pdf',
                    DocType: 'GST /Registration Certification',
                },
            ],
            headers: [
                {
                    text: '#',
                    value: 'id',
                },
                {
                    text: 'Cover Name',
                    value: 'CoverName',
                },
                {
                    text: 'Document Type',
                    value: 'DocType',
                },

                {
                    text: 'View Document',
                    value: 'ViewDoc',
                },
            ],
        }
    },
}
</script>
