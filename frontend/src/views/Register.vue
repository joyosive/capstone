<template>
    <v-container app>
        <v-app-bar>
            <img src="../assets/img/gaillogo.png" alt />
            <v-toolbar-title>
                <h1>Gail Tenders</h1>
            </v-toolbar-title>
        </v-app-bar>
        <v-card absolute flat color="#FFFFFF">
            <div>
                <h2 align="center">Welcome to e-Procurement Portal</h2>
            </div>
        </v-card>
        <div>
            <p align="center" class="font-weight-black">Supplier Self Registration For GAIL Tenders</p>
            <p align="center">*Required</p>
            <p align="center" class="font-weight-black">Company Details</p>
        </div>
        <v-card width="60%" class="mx-auto mt-12" align="center">
            <v-form>
                <h1>Add New User</h1>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            Name of Company
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>GAIL Vendor Code</v-subheader>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field outlined></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-subheader>GAIL Tender Ref</v-subheader>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            Language
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="3">
                        <v-select label="-select-" outlined></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            Email
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            Telephone
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="5">
                        <v-text-field outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            Mobile
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="5">
                        <v-text-field outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            Address
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            GST No
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="3">
                        <v-select label="-select-" outlined></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-subheader>
                            Country
                            <span class="red--text">*</span>
                        </v-subheader>
                    </v-col>
                    <v-col cols="3">
                        <v-select label="-select-" outlined></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-checkbox
                            class="mx-2"
                        >Yes I have read the data privacy statement and accept the terms</v-checkbox>
                    </v-col>
                    <v-col>
                        <v-subheader>
                            <span class="red--text">*</span>Yes, I have read the data privacy
                            statement and accept the termms
                        </v-subheader>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">Required Document:</v-col>
                </v-row>
                <v-row>
                    <v-col cols="10">
                        Scanned copy of the certificate of Incoporation / GSt Registration
                        Certificate
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <input type="file" id="myFile" name="filename" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="2">
                        <v-btn tile outlined Primary>Sumbit</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn tile outlined Primary>Reset</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Register',
}
</script>

<style lang="scss" scoped>
img {
    max-width: 50px;
    max-height: 30px;

    padding: 5px;
    width: 150px;
}
div h2 {
    color: red;
}
</style>
