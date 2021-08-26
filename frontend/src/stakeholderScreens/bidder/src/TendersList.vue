<template>
    <v-div class="text-center">
        <v-row>
            <v-col cols="4">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    outlined
                    hide-details
                    class="ml-12 pl-12"
                ></v-text-field>
            </v-col>

            <v-btn
                small
                class="mt-6 ml-6 blue lighten-4"
                :to="{name: 'ActiveTendersView'}"
            >Show Active Tenders</v-btn>
        </v-row>

        <h1>Tenders</h1>
        <br />

        <v-data-table :headers="headers" :items="covers" item-key="name" :search="search">
            <template v-slot:item.View="{ item }">
                <v-btn
                    class="blue"
                    dark
                    small
                    v-model="item.View"
                    text
                    :to="{name: 'TenderDetailsForBidder'}"
                >View</v-btn>
            </template>
        </v-data-table>
    </v-div>
</template>


<script>
export default {
    data() {
        return {
            search: '',
            items: ['Active Tenders', 'Inactive Tenders'],

            covers: [
                {
                    title: 'Notice for tender supply Moulded grating ',
                    odate: '4-12-2011',
                    cdate: '9-12-2001',
                },
                {
                    title: 'Notice for tender supply for d1, d2 and d3 ',

                    odate: '9-12-2001',
                    cdate: '29-1-2002',
                },
                {
                    title: 'Notice for tender supply  CWEk-31/2019-20',
                    odate: '29-12-2001',
                    cdate: '9-2-2002',
                },

                {
                    title: 'Notice for tender supply Moulded grating ',
                    odate: '4-12-2011',
                    cdate: '9-12-2001',
                },
                {
                    title: 'Notice for tender supply for d1, d2 and d3 ',

                    odate: '9-12-2001',
                    cdate: '29-1-2002',
                },
                {
                    title: 'Notice for tender supply  CWEk-31/2019-20',
                    odate: '29-12-2001',
                    cdate: '9-2-2002',
                },
            ],
            headers: [
                {
                    text: 'title',
                    value: 'title',
                },

                {
                    text: 'Bid Opening Date',
                    value: 'odate',
                },
                {
                    text: 'Technical and Financial details',
                    value: 'View',
                },
                {
                    text: 'Bid Closing Date',
                    value: 'cdate',
                },
            ],
        }
    },
}
</script>