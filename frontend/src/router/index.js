import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import BidderManagerIndex from '@/stakeholderScreens/bidderManager/BidderManagerIndex.vue'
import OnBoardingIndex from '@/stakeholderScreens/onBoarding/OnBoardingIndex.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/dashboard/Dashboard.vue'),
    },
    {
        path: '/bidderManager',
        name: 'BidderManagerIndex',
        component: BidderManagerIndex,
        children: [
            {
                path: 'dashboard',
                name: 'BidderManagerDashboard',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/BidderManagerDashboard.vue'
                    ),
            },
            {
                path: 'addBidder',
                name: 'AddBidder',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/src/addBidder/AddBidder.vue'
                    ),
            },
            {
                path: 'bidderadded',
                name: 'BidderAdded',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/src/addBidder/BidderAdded.vue'
                    ),
            },
            {
                path: 'viewAll',
                name: 'ViewAll',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/src/ViewAll.vue'
                    ),
            },
            {
                path: 'bidderDetails',
                name: 'BidderDetails',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/src/pendingForReview/BidderDetail.vue'
                    ),
            },
            {
                path: 'pendingForReview',
                name: 'PendingForReview',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/src/pendingForReview/PendingForReview.vue'
                    ),
            },
            {
                path: 'bidderRegistered',
                name: 'BidderRegisteredConfirmation',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/src/pendingForReview/BidderRegistered.vue'
                    ),
            },
            {
                path: 'suspendedBidder',
                name: 'SuspendedBidder',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidderManager/src/SuspendedBidders.vue'
                    ),
            },
        ],
    },
    //CVO
    {
        path: '/cvo',
        name: 'CVOIndex',
        component: () =>
            import('@/stakeholderScreens/chiefVigilanceOfficer/CVOIndex.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'CVODashboard',
                component: () =>
                    import(
                        '@/stakeholderScreens/chiefVigilanceOfficer/CVODashboard.vue'
                    ),
            },
            {
                path: 'cvoProfile',
                name: 'CVOProfile',
                component: () =>
                    import(
                        '@/stakeholderScreens/chiefVigilanceOfficer/src/CVOProfile.vue'
                    ),
            },
        ],
    },
    // Tender Creator
    {
        path: '/tenderCreator',
        name: 'TenderCreatorIndex',
        component: () =>
            import('@/stakeholderScreens/tenderCreator/TenderCreatorIndex.vue'),
        children: [
            {
                path: 'createTender',
                name: 'CreateTender',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderCreator/src/CreateTender.vue'
                    ),
            },
        ],
    },

    // Tender manager
    {
        path: '/tenderManager',
        name: 'TenderManagerIndex',
        component: () =>
            import('@/stakeholderScreens/tenderManager/TenderManagerIndex.vue'),
        children: [
            {
                path: 'activeTenders',
                name: 'ActiveTenders',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/ActiveTenders.vue'
                    ),
            },
            {
                path: 'pendingReview',
                name: 'PendingReview',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/pendingReview/PendingReviewMain.vue'
                    ),
            },
            {
                name: 'TenderDetails',
                path: 'tenderDetails',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/pendingReview/TenderDetails.vue'
                    ),
            },
            {
                name: 'RejectedTenderDetails',
                path: 'RejectedTenderDetails',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/RejectedTenderDetails.vue'
                    ),
            },

            {
                path: 'markedCorregendum',
                name: 'MarkedCorregendum',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/pendingReview/Corregendum.vue'
                    ),
            },
            {
                path: 'acceptTenders',
                name: 'AcceptTender',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/pendingReview/AcceptTender.vue'
                    ),
            },
            {
                name: 'RejectTender',
                path: 'rejectTender',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/pendingReview/RejectTender.vue'
                    ),
            },
            {
                path: 'rejectedTenders',
                name: 'RejectedTenders',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/RejectedTenders.vue'
                    ),
            },
            {
                path: 'tenderDashboard',
                name: 'TenderDashboard',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/TendersDashboard.vue'
                    ),
            },
            {
                path: 'upcomingTenders',
                name: 'UpcomingTenders',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/upcoming/UpcomingTenders.vue'
                    ),
            },
            {
                path: 'inviteBidder',
                name: 'InviteBidder',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/upcoming/InviteBidder.vue'
                    ),
            },
            {
                path: 'tenderManagers',
                name: 'ViewSubmissions',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/ViewSubmissions.vue'
                    ),
            },
            {
                path: 'trackStatus',
                name: 'TrackStatus',
                component: () =>
                    import(
                        '@/stakeholderScreens/tenderManager/src/TrackStatus.vue'
                    ),
            },
        ],
    },
    // register screen part of onboarding screen
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue'),
    },
    // onBoarding
    {
        path: '/onboarding',
        name: 'OnBoardingIndex',
        component: OnBoardingIndex,
        children: [
            {
                path: 'addUser',
                name: 'AddUser',
                component: () =>
                    import('@/stakeholderScreens/onBoarding/user/AddUser.vue'),
            },
            {
                path: 'viewAll',
                name: 'ViewAll',
                component: () =>
                    import('@/stakeholderScreens/onBoarding/user/ViewAll.vue'),
            },
            {
                path: 'allUserRoles',
                name: 'AllUserRoles',
                component: () =>
                    import(
                        '@/stakeholderScreens/onBoarding/user/AllUserRoles.vue'
                    ),
            },
        ],
    },

    // Bid Evaluation Expert

    {
        path: '/bidEvalExpert',
        name: 'BidEvalExpert',
        component: () =>
            import('@/stakeholderScreens/bidEvalExpert/bidEvalExpertIndex.vue'),
        children: [
            {
                path: 'assignedBids',
                name: 'AssignedBids',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidEvalExpert/src/AssignedBids.vue'
                    ),
            },
            {
                path: 'reviewBid',
                name: 'ReviewBid',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidEvalExpert/src/ReviewBid.vue'
                    ),
                children: [
                    {
                        path: 'administrativeEval',
                        name: 'AdministrativeEval',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvalExpert/src/reviewBid/AdministrativeEval.vue'
                            ),
                    },
                    {
                        path: 'technicalEval',
                        name: 'TechnicalEval',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvalExpert/src/reviewBid/TechnicalEval.vue'
                            ),
                    },
                    {
                        path: 'financialEval',
                        name: 'FinalcialEval',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvalExpert/src/reviewBid/FinancialEval.vue'
                            ),
                    },
                    {
                        path: 'performance',
                        name: 'PerformanceBidEval',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvalExpert/src/reviewBid/Performance.vue'
                            ),
                    },
                    {
                        path: 'awardCertificate',
                        name: 'AwardCertificate',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvalExpert/src/reviewBid/AwardCertificate.vue'
                            ),
                    },
                ],
            },
        ],
    },
    // Bid Evaluation Chairman

    {
        path: '/bidEvalChairman',
        name: 'BidEvalChairman',
        component: () =>
            import(
                '@/stakeholderScreens/bidEvaluationChairman/BidEvalChairmanIndex.vue'
            ),
        children: [
            {
                path: 'dashboard',
                name: 'BidEvalChairmanDashboard',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidEvaluationChairman/BidEvalChairmanDashboard.vue'
                    ),
            },
            {
                path: 'viewAll',
                name: 'ViewAllBids',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidEvaluationChairman/src/ViewAllBids.vue'
                    ),
            },
            {
                path: 'assignExpert',
                name: 'AssignExpert',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidEvaluationChairman/src/assignExpert/AssignExperts.vue'
                    ),
            },
            {
                path: 'trackBidStatus',
                name: 'TrackBidStatus',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidEvaluationChairman/src/trackBidStatusMain.vue'
                    ),
                children: [
                    {
                        path: 'status',
                        name: 'bidEvalChairmanBidStatus',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvaluationChairman/src/trackbidStatus/TrackBidStatus.vue'
                            ),
                    },
                    {
                        path: 'scoredResponses',
                        name: 'ScoredResponses',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvaluationChairman/src/trackbidStatus/ScoredResponses.vue'
                            ),
                    },
                    {
                        path: 'resultSummary',
                        name: 'ResultSummary',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvaluationChairman/src/trackbidStatus/ResultSummary.vue'
                            ),
                    },
                    {
                        path: 'evaluationReport',
                        name: 'EvaluationReport',
                        component: () =>
                            import(
                                '@/stakeholderScreens/bidEvaluationChairman/src/trackbidStatus/EvaluationReport.vue'
                            ),
                    },
                ],
            },
        ],
    },
    {
        path: '/bidder',
        name: 'BidderIndex',
        component: () => import('@/stakeholderScreens/bidder/BidderIndex.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'BidderDashboard',
                component: () =>
                    import('@/stakeholderScreens/bidder/BidderDashboard.vue'),
            },
            {
                path: 'profile',
                name: 'BidderProfile',
                component: () =>
                    import('@/stakeholderScreens/bidder/src/BidderProfile.vue'),
            },
            {
                path: 'trackStatus',
                name: 'BidTrackStatus',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidder/src/BidTrackStatus.vue'
                    ),
            },
            {
                path: 'trackStatus/bid',
                name: 'BidTrackStatus',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidder/src/BidTrackStatus.vue'
                    ),
            },
            {
                path: 'notifications',
                name: 'Notifications',
                component: () =>
                    import('@/stakeholderScreens/bidder/src/Notifications.vue'),
            },
            {
                path: 'tendersList',
                name: 'TendersList',
                component: () =>
                    import('@/stakeholderScreens/bidder/src/TendersList.vue'),
            },
            {
                path: 'activeTenders',
                name: 'ActiveTendersView',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidder/src/ActiveTendersView.vue'
                    ),
            },
            {
                path: 'tenders/detail',
                name: 'TenderDetailsView',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidder/src/TenderDetailsView.vue'
                    ),
            },
            {
                path: 'tenderDetailsForBidder',
                name: 'TenderDetailsForBidder',
                component: () =>
                    import(
                        '@/stakeholderScreens/bidder/src/TenderDetailsForBidder.vue'
                    ),
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
