<template>
    <div>
        <div class="ma-12 pa-12">
            <v-toolbar class="blue lighten-2 mb-8">
                <v-toolbar-title>Track the Status</v-toolbar-title>
            </v-toolbar>

            <v-stepper v-model="e13" vertical>
                <v-stepper-step step="1" complete>Successfully Uploaded Documents</v-stepper-step>

                <v-stepper-content step="1"></v-stepper-content>

                <v-stepper-step step="2" complete>Fee Confirmation</v-stepper-step>
                <v-stepper-content step="2"></v-stepper-content>

                <v-stepper-step step="3">Bid Confirmation</v-stepper-step>

                <v-stepper-content step="1">
                    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                </v-stepper-content>

                <v-stepper-step step="4">Bid Evaluation Result</v-stepper-step>
            </v-stepper>
        </div>

        <div class="text-center">
            <v-btn class="red" dark small text :to="{name: 'TenderDetailsView'}">Resubmit</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            e13: 3,
        }
    },
}
</script>