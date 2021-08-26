<template>
    <div>
        <AppBar @toMiniVariant="changeMiniVariant" />
        <SideBar :navItems="dashboardNavItems" :miniVariant="miniVariant" />
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
    name: 'Dashboard',
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
            dashboardNavItems: [
                {
                    title: 'Dashboard',
                    icon: 'fa-home',
                    route: { name: 'Dashboard' },
                },

                {
                    title: 'Bidder',
                    icon: 'fa-home',
                    route: { name: 'BidderIndex' },
                },

                {
                    title: 'Bidder Manager',
                    icon: 'fa-home',
                    route: { name: 'BidderManagerIndex' },
                },

                {
                    title: 'CVO ',
                    icon: 'fa-users ',
                    route: { name: 'CVOIndex' },
                },
                {
                    title: 'OnBoarding',
                    icon: ' ',
                    route: { name: 'OnBoardingIndex' },
                },
                {
                    title: 'Tender Manager',
                    icon: '',
                    route: { name: 'TenderManagerIndex' },
                },
                {
                    title: 'Tender Creator',
                    icon: '',
                    route: { name: 'TenderCreatorIndex' },
                },

                {
                    title: 'Bid Evaluation Expert',
                    icon: '',
                    route: { name: 'BidEvalExpert' },
                },
                {
                    title: 'Bid Evaluation Chairman',
                    icon: '',
                    route: { name: 'BidEvalChairman' },
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>

