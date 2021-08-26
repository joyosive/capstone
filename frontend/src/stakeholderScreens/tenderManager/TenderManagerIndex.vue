<template>
    <div>
        <AppBar @toMiniVariant="changeMiniVariant" />
        <SideBar :navItems="TenderManagerNavItems" :miniVariant="miniVariant" />
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
    name: 'TenderManagerIndex',
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
            TenderManagerNavItems: [
                {
                    title: 'Dashboard',
                    icon: 'fa-home',
                    route: { name: 'Dashboard' },
                },
                {
                    title: 'Active Tenders',
                    icon: '',
                    route: { name: 'ActiveTenders' },
                },
                {
                    title: 'Pending Review',
                    icon: '',
                    route: { name: 'PendingReview' },
                },
                {
                    title: 'Rejected Tenders ',
                    icon: '',
                    route: { name: 'RejectedTenders' },
                },
                {
                    title: 'Tender DashBoard ',
                    icon: '',
                    route: { name: 'TenderDashboard' },
                },
                {
                    title: 'Upcoming Tenders ',
                    icon: ' fa-box-open',
                    route: { name: 'UpcomingTenders' },
                },
                {
                    title: 'View Submissions ',
                    icon: ' fa-fill-drip',
                    route: { name: 'ViewSubmissions' },
                },
                {
                    title: 'Track Status ',
                    icon: 'fa-truck-moving',
                    route: { name: 'TrackStatus' },
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
