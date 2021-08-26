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
                            <br />
                            <h1>Tender Details</h1>
                        </v-div>
                        <br />
                        <br />

                        <v-container class="pl-16 ml-16">
                            <pre>Tender Registration Number   :      SG808332 <br />Inviting Officer             :      Deepak Kumar <br />Tender Type                  :      Service Contract <br />Tender Category              :      Services <br />No. of cover(s)              :      80<br />Product Category             :      Machineries<br />Tender Recieving Location    :      Mayapur<br />Form Contract                :      Works<br />Submission Date              :      October 23, 2019</pre>
                        </v-container>

                        <br />
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
                <v-btn class="mx-4" small to="PendingReview">Cancel</v-btn>
                <v-btn class="mx-4" small @click.stop="Corregendum = true">Corregendum</v-btn>
                <v-btn class="mx-4" small :to="{ name: 'AcceptTender'}">Submit and Next</v-btn>
                <v-btn class="mx-4" small @click.stop="Reject= true">Reject Tender</v-btn>

                <v-dialog v-model="Corregendum" max-width="490">
                    <v-card>
                        <v-toolbar class="blue lighten-4">
                            <v-toolbar-title class="headline">Specify the corrections to be made</v-toolbar-title>
                        </v-toolbar>
                        <br />
                        <v-col cols="8" class="mx-auto">
                            <v-text-field single-line label="Reference Number" outlined></v-text-field>
                        </v-col>
                        <v-col cols="8" class="mx-auto">
                            <v-text-field single-line label="Reason" outlined></v-text-field>
                        </v-col>

                        <br />
                        <v-row justify="center" class="ma-0">
                            <v-btn color="blue darken-1" text @click="Corregendum = false">Cancel</v-btn>

                            <v-btn
                                color="blue darken-1"
                                text
                                to="MarkedCorregendum"
                                @click="Corregendum = false"
                            >Submit</v-btn>
                        </v-row>
                        <br />
                    </v-card>
                </v-dialog>

                <v-dialog v-model="Reject" max-width="490">
                    <v-card>
                        <v-toolbar class="blue lighten-4">
                            <v-toolbar-title class="headline">Rejection Reason</v-toolbar-title>
                        </v-toolbar>
                        <br />
                        <v-col cols="8" class="mx-auto">
                            <v-text-field single-line label="Reference Number" outlined></v-text-field>
                        </v-col>
                        <v-col cols="8" class="mx-auto">
                            <v-text-field single-line label="Reason" outlined></v-text-field>
                        </v-col>

                        <br />
                        <v-row justify="center" class="ma-0">
                            <v-btn color="blue darken-1" text @click="Reject = false">Cancel</v-btn>

                            <v-btn
                                color="blue darken-1"
                                text
                                :to="{name : 'RejectTender'}"
                                @click="Reject = false"
                            >Submit</v-btn>
                        </v-row>
                        <br />
                    </v-card>
                </v-dialog>
            </div>

            <br />
            <br />
            <br />
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'BidderDetail',

    data() {
        return {
            Corregendum: false,
            Reject: false,
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
