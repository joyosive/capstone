<template>
    <div class="text-center">
        <h1 class="blue lighten-2">Assigned Bids</h1>

        <v-container mx-12>
            <v-data-table :headers="headers" :items="covers" item-key="name"></v-data-table>
        </v-container>
        <v-btn class="primary" :to="{name: 'AdministrativeEval'}">Next</v-btn>
    </div>
    </template>

<script>
export default {
    name: 'AssignedBids',

    data() {
        return {
            covers: [
                {
                    name: 'Steel Pipes',

                    id: '132435',
                    date: '7-1-2012',
                },
                {
                    name: 'Gas Chambers',

                    id: '44565',
                    date: '8-12-2017',
                },
                {
                    name: 'Water Chambers',

                    id: ' 78579',
                    date: '6-7-2021',
                },

                {
                    name: 'Machinery',

                    id: '76566',
                    date: '4-5-2016',
                },
            ],
            headers: [
                {
                    text: 'Bid ID',
                    value: 'id',
                },
                {
                    text: 'Bid Name',
                    value: 'name',
                },

                {
                    text: 'Closing Date',
                    value: 'date',
                },
            ],
        }
    },
}
</script>

<style>
.pre-formatted {
    white-space: pre;
}
</style>