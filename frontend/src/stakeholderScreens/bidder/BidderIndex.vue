<template>
    <div>
        <AppBar @toMiniVariant="changeMiniVariant" />
        <SideBar :navItems="bidderNavItems" :miniVariant="miniVariant" />
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
    name: 'BidderManagerIndex',
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
            bidderNavItems: [
                {
                    title: 'Dashboard',
                    icon: 'fa-home',
                    route: { name: 'BidderDashboard' },
                },

                {
                    title: 'Profile',
                    icon: 'fa-users ',
                    route: { name: 'BidderProfile' },
                },
                {
                    title: 'Track Status',
                    icon: ' ',
                    route: { name: 'BidTrackStatus' },
                },
                {
                    title: 'Notifications',
                    icon: '',
                    route: { name: 'Notifications' },
                },
                {
                    title: 'tenderList',
                    icon: '',
                    route: { name: 'TendersList' },
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
