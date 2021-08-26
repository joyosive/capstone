<template>
    <div>
        <AppBar @toMiniVariant="changeMiniVariant" />
        <SideBar :navItems="bideEvalChairmanNavItems" :miniVariant="miniVariant" />
        <v-main app>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

        <Footer />
    </div>
</template>

<script>
import SideBar from '@/dashboard/layout/SideBar.vue'
import AppBar from '@/dashboard/layout/AppBar.vue'
import Footer from '@/dashboard/layout/Footer.vue'

export default {
    name: 'bidEvalChairmanIndex',
    methods: {
        changeMiniVariant() {
            this.miniVariant = !this.miniVariant
        },
    },
    components: {
        SideBar,
        AppBar,
        Footer,
    },
    data() {
        return {
            miniVariant: false,
            bideEvalChairmanNavItems: [
                {
                    title: 'Dashboard',
                    icon: 'fa-home',
                    route: { name: 'BidEvalChairmanDashboard' },
                },
                {
                    title: 'View All',
                    icon: '',
                    route: { name: 'ViewAllBids' },
                },

                {
                    title: 'Track Bid Status',
                    icon: '',
                    route: { name: 'bidEvalChairmanBidStatus' },
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
