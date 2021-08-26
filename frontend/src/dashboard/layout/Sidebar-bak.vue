<template>
    <v-navigation-drawer v-model="drawer" color="blue" :mini-variant="miniVariant" app fixed dark>
        <v-list dense nav>
            <v-list-item>
                <v-text-field
                    class="my-input"
                    background-color="#AED6F1 "
                    flat
                    solo
                    append-outer-icon="mdi-menu"
                    @click:append-outer="miniVariant = !miniVariant"
                    v-if="!miniVariant"
                ></v-text-field>
                <v-app-bar-nav-icon v-if="miniVariant" @click="miniVariant = !miniVariant"></v-app-bar-nav-icon>
            </v-list-item>

            <v-divider></v-divider>

            <template v-for="item in nav">
                <v-list-item
                    :key="item.title"
                    v-if="!item.navItems"
                    :to="item.route ? item.route : undefined"
                    @click="item.route ? (miniVariant = !miniVariant) : undefined"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-group
                    v-if="item.navItems"
                    :key="item.title"
                    :prepend-icon="item.icon"
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <template v-for="navItem in item.navItems">
                        <v-list-item
                            :key="navItem.title"
                            v-if="!navItem.subItems"
                            :to="navItem.route ? navItem.route : undefined"
                            @click="navItem.route ? (miniVariant = !miniVariant) : undefined"
                        >
                            <v-list-item-content>
                                <v-list-item-title v-text="navItem.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-group
                            v-if="navItem.subItems"
                            :key="navItem.title"
                            no-action
                            sub-group
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title v-text="navItem.title"></v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <template v-for="subItem in navItem.subItems">
                                <v-list-item
                                    :key="subItem"
                                    :to="subItem.route"
                                    @click="miniVariant = !miniVariant"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title v-text="subItem.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list-group>
                    </template>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import {
    mdiHomeOutline,
    mdiAccountOutline,
    mdiTrophyOutline,
    mdiPackageVariantClosed,
    mdiLockOutline,
    mdiChartBar,
} from '@mdi/js'

export default {
    name: 'navBar',
    data() {
        return {
            drawer: true,
            miniVariant: false,
            nav: [
                {
                    title: 'Welcome',
                    icon: mdiHomeOutline,
                    route: '/dashboard/welcome',
                },
                {
                    title: 'Tender Creator',
                    icon: mdiAccountOutline,
                    navItems: [
                        {
                            title: 'Create New Tender',
                            route: '/dashboard/createtender',
                        },
                        {
                            title: 'Templates',
                            route: '/dashboard/system/partners',
                        },
                        {
                            title: 'Saved/Incomplete Tenders',
                            route: '/dashboard/system/systemAccess',
                        },
                        {
                            title: 'Republish previously published Tender',
                            route: '/dashboard/system/roles',
                        },
                    ],
                },
                {
                    title: 'Chief Vigilance Officer',
                    icon: mdiAccountOutline,
                    navItems: [
                        { title: 'Profile', route: '/dashboard/cvoProfile' },
                        { title: 'List of Tenders', route: '' },
                        { title: 'Submitted Bids', route: '' },
                        { title: 'Profile of all Bidders', route: '' },
                        { title: 'Registered Tenders', route: '' },
                        { title: 'Notifications', route: '' },
                    ],
                },
                {
                    title: 'Bidder Manager',
                    icon: mdiAccountOutline,
                    navItems: [
                        {
                            title: 'Add Bidders',
                            route: '/dashboard/AddBidder',
                        },
                        {
                            title: 'View All',
                            route: '/dashboard/ViewAll',
                        },
                        {
                            title: 'Pending for Review',
                            route: '/dashboard/PendingForReview',
                        },
                        {
                            title: 'Suspended Bidders',
                            route: '/dashboard/SuspendedBidders',
                        },
                    ],
                },

                {
                    title: 'Tender Manager',
                    icon: mdiAccountOutline,
                    navItems: [
                        {
                            title: 'Active Tenders',
                            route: '/dashboard/ActiveTenders',
                        },
                        {
                            title: 'Pending Review',
                            route: '/dashboard/PendingReview',
                        },
                        {
                            title: 'Rejected Tenders',
                            route: '/dashboard/RejectedTenders',
                        },
                        {
                            title: 'Tenders Dashboard',
                            route: '/dashboard/TendersDashboard',
                        },
                        {
                            title: 'Upcoming Tenders',
                            route: '/dashboard/UpcomingTenders',
                        },
                        {
                            title: 'View Submissions',
                            route: '/dashboard/ViewSubmissions',
                        },
                    ],
                },

                {
                    title: 'Program Management',
                    icon: mdiTrophyOutline,
                    navItems: [
                        {
                            title: 'Campaigns',
                            subItems: [
                                {
                                    title: 'Flex Campaigns',
                                    route:
                                        '/dashboard/programManagement/campaign/flex',
                                },
                                {
                                    title: 'Nomination Campaign',
                                    route:
                                        '/dashboard/programManagement/campaign/nominationCampaign',
                                },
                                {
                                    title: 'Incentives Campaigns',
                                    route:
                                        '/dashboard/programManagement/campaign/incentive',
                                },
                                {
                                    title: 'Discretionary Campaigns',
                                    route:
                                        '/dashboard/programManagement/campaign/discreate',
                                },
                                {
                                    title: 'Base Earn Campaign',
                                    route:
                                        '/dashboard/programManagement/campaign/baseEarn',
                                },
                            ],
                        },
                        {
                            title: 'Program Components',
                            subItems: [
                                {
                                    title: 'Ecards',
                                    route: '/dashboard/ecard',
                                },
                                {
                                    title: 'Shop',
                                    route: '/dashboard/shop',
                                },
                            ],
                        },
                        {
                            title: 'Program Details',
                            route:
                                '/dashboard/programManagement/programDetails',
                        },
                        {
                            title: 'Reward Management',
                            route:
                                '/dashboard/programManagement/rewardManagement',
                        },
                        {
                            title: 'Sale Channels',
                            route: '/dashboard/programManagement/salesChannel',
                        },
                        {
                            title: 'User Registration',
                            route:
                                '/dashboard/programManagement/userRegistration',
                        },
                        {
                            title: 'Bin Range Configuration',
                            route: '/dashboard/programManagement/BinRange',
                        },
                        {
                            title: 'Additional Fees',
                            route: '/dashboard/programManagement/addFees',
                        },
                        { title: 'Teams', route: '/programManagement/teams' },
                        {
                            title: 'Notifications',
                            route: '/programManagement/notifications',
                        },
                    ],
                },
                {
                    title: 'Fullfillment Management',
                    icon: mdiPackageVariantClosed,
                    navItems: [
                        {
                            title: 'Order Management',
                            subItems: [
                                {
                                    title: 'Orders',
                                    route:
                                        '/dashboard/fulfillmentManagement/orderManagement/orders',
                                },
                                {
                                    title: 'Place Order',
                                    route:
                                        '/dashboard/fulfillmentManagement/orderManagement/placeOrders',
                                },
                            ],
                        },
                        {
                            title: 'Products',
                            route: '/dashboard/fulfillmentManagement/products',
                        },
                        {
                            title: 'Suppliers',
                            route: '/dashboard/fulfillmentManagement/supplier',
                        },
                        {
                            title: 'Brands',
                            route: '/dashboard/fulfillmentManagement/brands',
                        },
                        {
                            title: 'Product Collections',
                            route:
                                '/dashboard/fulfillmentManagement/productCollections',
                        },
                    ],
                },
                {
                    title: 'Fraud Transactions',
                    icon: mdiLockOutline,
                    navItems: [
                        { title: 'Locked members', route: '/lockedMembers' },
                        { title: 'Locked Orders', route: '/lockedOrders' },
                    ],
                },
                {
                    title: 'Reports',
                    icon: mdiChartBar,
                    route: '/dashboard/reports',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.my-input.v-input .v-input__slot {
    border-radius: 100px;
    margin-bottom: 0px;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
}
</style>
