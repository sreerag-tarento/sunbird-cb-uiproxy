'use strict'
import { ROLE } from './roles'

const CHECK = {
    PARAM_EQUALITY_CHECK: 'PARAM_EQUALITY_CHECK',
    ROLE: 'ROLE_CHECK',
    SCOPE: 'SCOPE_CHECK',
}

// All api list validations
export const API_LIST = {
    URL:
    {
        // '/authApi/content/v3/create': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/authApi/content/v3/read/:do_id': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/authApi/content/v3/update/:do_id': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        '/protected/v8/internal/log-level': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/internal/log-level/reset': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/user/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileDetails/test': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        // tslint:disable-next-line: object-literal-sort-keys
        '/protected/v8/resource/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/api/user/v2/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC, 'ALL',
            ],
        },
        '/proxies/v8/api/user/v2/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC, 'ALL',
            ],
        },
        '/proxies/v8/api/user/v5/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC, 'ALL',
            ],
        },
        '/proxies/v8/user/v1/updateLogin': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC, 'ALL',
            ],
        },
        '/proxies/v8/api/user/v5/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC, 'ALL',
            ],
        },
        '/proxies/v8/event/v4/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/event/v4/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/event/v4/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/event/v4/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/event/v4/retire/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/sunbirdigot/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/sunbirdigot/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/contentsearch/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/read/content-progres/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/discussion/recent': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content-progres/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/discussion/user/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/topic/:id/:slug': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v1/user/enrollment/list/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v2/user/enrollment/list/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/certreg/v1/certs/validate': {
            checksNeeded: [],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [],
        },
        '/proxies/v8/action/content/v3/hierarchy/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/action/content/v3/reject/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/discussion/forum/v2/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/forum/v3/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/category/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/category/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/forum/tags': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/hierarchyUpdate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/action/content/v3/hierarchy/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/action/content/v3/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/dashboard/analytics/getDashboardConfig/Karmayogi/:comp': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/dashboard/analytics/getDashboardsForProfile/Karmayogi': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/dashboard/analytics/getChartV2/Karmayogi': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/wat/dashboard/getDashboardConfig/Karmayogi/overview': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/createForm': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/getFormById': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/getCollectiveAggregation': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/getAllForms': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/v1/saveFormSubmit': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/tagFormToCourse': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/untagFormToCourse': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/getAllApplications': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/searchForms': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/getCourseListForSurveys': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/upload/action/content/v3/upload/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/v1/content/retire': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/action/content/v3/copy/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/action/content/v3/updateReviewStatus/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/action/content/v3/review/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/action/content/v3/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_PUBLISHER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/action/content/v3/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/data/v1/system/settings/get/orgTypeList': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.COMMUNITY_MODERATOR,
            ],
        },
        '/proxies/v8/data/v1/system/settings/get/notificationPreference': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/v1/admin/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
                ROLE.CBP_ADMIN,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/user/private/v1/assign/role': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/user/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/v1/admin/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
                ROLE.CBP_ADMIN,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/org/v1/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/org/v1/profile/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/org/v1/profile/patch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/org/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/block': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/user/v1/unblock': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/data/v1/system/settings/get/orgTypeConfig': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/discussion/tags': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/learnervm/private/content/v3/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/learnervm/private/content/v3/review/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_REVIEWER,
            ],
        },
        '/proxies/v8/discussion/v2/topics': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/v2/topics/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/tags/:tag': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/:userKey/bookmarks': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/:userKey/bookmark': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/:userKey/upvoted': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/:userKey/downvoted': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/categories': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/mainCategories': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/autocomplete/:key': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/migrate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/private/v1/migrate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/private/v2/migrate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/private/v1/assign/role/userrole': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/v2/posts/:id/vote': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/v2/posts/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/v2/posts/:id/bookmark': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/popular': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/moderation/consumer': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/moderation/producer': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learnervm/private/content/v3/retire/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
            ],
        },
        '/proxies/v8/private/content/v3/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
            ],
        },
        '/proxies/v8/notifyContentState': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/recommended/userDepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/discussionHub/categories/:cid/:slug?/:tid?': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/discussionHub/topics/recent': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/:cohortType/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/content/like': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/telemetry': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/protected/v8/scrom/get/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/progress/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/rating/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/progress': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/history/continue': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/departmentType/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/protected/v8/portal/spv/department': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/portal/spv/deptAction/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/user/roles/getUsersV2': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/spv/mydepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/portal/mdo/mydepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/protected/v8/user/profileDetails/createUser': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.CONTENT_CREATOR,
                ROLE.STATE_ADMIN,
            ],
        },
        '/protected/v8/user/profileRegistry/getUserRegistryByUser/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/createUserRegistryV2': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/createUserRegistry': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/deptAction': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workflowhandler/historyByApplicationId/:applicationId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/protected/v8/user/autocomplete/:query': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/spv/deptAction/userrole': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/user/preference': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/applicationsSearch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/getWorkOrders': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workallocation/add/workorder': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workallocation/getWorkOrderById/:workOrderId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
            SCOPE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/protected/v8/workallocation/user/autocomplete/:searchTerm': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/getUserCompetencies/:userId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/searchNodes': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/filterByMappings': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/:type/:key': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/v2/add': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workallocation/getWorkAllocationById/:workAllocationId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workallocation/update/workorder': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workallocation/getWOPdf/:workOrderId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/portal/cbp/mydepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
            ],
        },
        '/protected/v8/user/mandatoryContent/checkStatus': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/rating/content/average-ratingInfo/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/social/post/timeline': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/history/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/protected/v8/frac/getAllNodes/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/getNodeById/:id/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/listDeptNames': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/portal/v1/admin/listDeptNames': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/protected/v8/scroing/getTemplate/:templateId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/cbc/department': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
            ],
        },
        '/protected/v8/portal/cbc/department/:deptId/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
            ],
        },
        '/protected/v8/portal/spv/department/:deptId/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/scroing/calculate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        // '/protected/v8/connections/connections/recommended': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/protected/v8/connections/connections/requests/received': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/protected/v8/connections/connections/established': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/protected/v8/connections/connections/established/:id': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/protected/v8/connections/connections/requested': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/protected/v8/connections/add/connection': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        // '/protected/v8/connections/connections/suggests': {
        //     checksNeeded: [CHECK.ROLE],
        //     // tslint:disable-next-line: object-literal-sort-keys
        //     ROLE_CHECK: [
        //         ROLE.PUBLIC,
        //     ],
        // },
        '/protected/v8/cohorts/course/getUsersForBatch/:courseId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/course/getUsersForBatch/:batchId/:deptName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/user/autoenrollment/:courseId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/protected/v8/profanity/startPdfProfanity': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/protected/v8/profanity/getPdfProfanityForContent/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.EDITOR,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/protected/v8/catalog': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.EDITOR,
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/scroing/fetch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.EDITOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/protected/v8/portal/mdo/deptAction/userrole': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/protected/v8/workallocation/v2/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/user/profileDetails/updateUser': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/addDataNodeBulk': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/roleactivity/:txt': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/update/connection': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/userWFApplicationFieldsSearch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/details/detailV1': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/getMasterNationalities': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/getMasterCountries': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/getMasterLanguages': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/protected/v8/user/profileRegistry/getProfilePageMeta': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/notifications/settings': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/searchUserRegistry': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/transition': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/nextActionSearch/:serviceName/:state': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workflowhandler/historyByApplicationIdAndWfId/:applicationId/:wfId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workflowhandler/workflowProcess/:wfId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workflowhandler/updateUserProfileWf': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/workflowhandler/userWfSearch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/protected/v8/user/profileRegistry/getUserRegistryById': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/getUserRegistryById/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/copy/workOrder': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/reset': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC, 'ALL',
            ],
        },
        '/protected/v8/user/evaluate/assessment/submit/v2': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/evaluate/assessment/submit/v3': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/v2/connections/recommended/userDepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/v2/connections/recommended': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/v2/connections/requests/received': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/v2/connections/established': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/contentprivate/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/protected/v8/contentprivate/migratepublisher/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/protected/v8/contentprivate/migratereviewer/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/protected/v8/connections/v2/connections/established/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/v2/connections/requested': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/v2/add/connection': {
            checksNeeded: [CHECK.ROLE, CHECK.PARAM_EQUALITY_CHECK],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
            PARAM_EQUALITY_CHECK: {
                checks: [
                    { entity: '__param__equality', session: 'session.userId', requestbody: 'body.userIdFrom' },
                ],
            },
        },
        '/protected/v8/connections/v2/connections/suggests': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/v2/update/connection': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileDetails/createUserWithoutInvitationEmail': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/authApi/batch/:key': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/authApi/readBatch/:batchId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/authApi/readCert/:certId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        }, '/proxies/v8/searchBy/:key': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        }, '/proxies/v8/staff/position': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        }, '/proxies/v8/staff/position/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        }, '/proxies/v8/budget/scheme': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        }, '/proxies/v8/budget/scheme/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        }, '/proxies/v8/budget/scheme/:orgId/:budgetYear': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        }, '/proxies/v8/orghistory/:orgId/:key': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBC_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/discussion/user/uid/:uid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/:username/posts': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/category/master/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/category/master/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/category/master/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/category/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/category/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/category/retire/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/framework/v3/term/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/action/content/v3/upload/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v1/batch/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v1/learner/batch/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/course/batch/cert/download/:certId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/public/v8/cohorts/course/batch/cert/download/mobile': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/course/batch/cert/issue': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/course/batch/cert/template/add': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/discussion/v2/categories': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/storage/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/storage/delete': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/v1/extPatch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/learner/course/v2/user/enrollment/admin/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.CBP_ADMIN,
            ],
        },
        '/protected/v8/frac/bookmarkDataNode': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/assessment/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/question/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/cbp/question/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/questionset/v1/create': {
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/read/:id': {
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/update/:id': {
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/review/:id': {
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/publish/:id': {
            ROLE_CHECK: [
                ROLE.CONTENT_PUBLISHER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/hierarchy/update': {
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/retire/:id': {
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/reject/:id': {
            ROLE_CHECK: [
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/v1/hierarchy/:id': {
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/ratings/v1/read/:activityId/:activityType/:userId': {
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/ratings/v1/upsert': {
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/ratings/v1/summary/:activityId/:activityType': {
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/ratings/v1/ratingLookUp': {
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/moderatoradmin/feedback/persist/text/moderated': {
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/moderatoradmin/feedback/text/fetch': {
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/moderatoradmin/profanity/type/text': {
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/moderatoradmin/feedback/flag/values': {
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/user/v1/positions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/ext/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/basicInfo': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/basicProfileUpdate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/bulkupload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/v1/bulkupload/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/otp/v1/generate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/otp/v1/verify': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/notificationPreference': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/assessment/retake/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/mdo/content/v3/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/mdo/content/v3/hierarchy/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/mdo/content/v3/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/mdo/content/v3/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/mdo/content/v4/system/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/mdo/content/v3/batch/addUser': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/mdo/content/v3/batch/removeUser': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/offensive/data/flag': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/offensive/data/flag/getFlaggedData': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/masterData/v1/upsert': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/bulkuser/download/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/position/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/org/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/domain/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/position/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/org/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/domain/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/protected/v8/user/evaluate/assessment/submit/v4': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/assessment/v4/result': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/ratings/v2/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/enrol': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/searchv2/pc': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/searchv2/mdo': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/user/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/update/pc': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/update/mdo': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/read/mdo/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/read/pc/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/v1/stats': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/storage/v1/report/:reportType/:date/:orgId/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.CBP_ADMIN,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/batchsesion/qrcode/:courseid/:batchid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/admin/enrol': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/blendedprogram/v1/update/progress': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/remove/pc': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/remove/mdo': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/course/v1/batch/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/course/v1/batch/public/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/blendedprogram/v1/getUserContentProgress': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/user/v1/feed/:userId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/feed/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/feed/v1/delete': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/feed/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/faq/v1/assistant/configs/language': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/faq/v1/assistant/available/language': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/curatedprogram/v1/enrol': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/enrol/status/count': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/unenrol': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/storage/v1/reportInfo/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.CBP_ADMIN,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/program/v1/admin/enrol': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CBP_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/user/v1/admin/extPatch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/trending/content/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/read/user/insights': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/storage/profilePhotoUpload/:cloudFolderName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/v1/admin/autocomplete/:searchTerm': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/competency/v4/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/competency/v4/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competency/v4/upsert': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/competency/v4/update/relation': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v1/publish': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/masterData/v2/deptPosition': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/masterData/v2/admin/deptPosition': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/cbplan/v1/archive': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v1/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/halloffame/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/walloffame/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/cbplan': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/karmapoints/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/karmapoints/user/course/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/data/v1/system/settings/get/defaultCertTemplate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/course/batch/cert/v1/template/add': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/claimkarmapoints': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/login/entry': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/totalkarmapoints': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cbplan/v1/admin/requestcontent': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/storage/v1/spvReport/:reportType/:date/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/storage/v1/spvReportInfo/:date': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },

        '/proxies/v8/sunbirdigot/v4/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/v1/content/recommend': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/ehrms/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/wheebox/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/program/v2/admin/bulkEnroll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/operationalreports/admin/grantaccess': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/openprogram/v1/enrol': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/operationalreports/download': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/halloffame/learnerleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/walloffame/learnerleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/otp/v3/generate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/otp/v3/verify': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/otp/v2/extPatch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/operationalreports/v1/reportInfo': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/operationalreports/leader/readaccess': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/operationalreports/admin/readaccess': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/workflow/admin/bulkupdate/getstatus': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/admin/transition/bulkupdate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/admin/bulkuploadfile/download/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/surveys/mlsurvey/v1/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/surveySubmissions/mlsurvey/v1/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cloud-services/mlcore/v1/files/preSignedUrls': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cloud-services/mlcore/v1/files/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/observations/mlsurvey/v1/assessment/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/observationSubmissions/mlsurvey/v1/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/observations/mlsurvey/v1/entities': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/course/v1/batch/getParticipants': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/course/v1/batch/admin/getParticipants': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/program/v2/batch/getParticipants': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.PROGRAM_INSTRUCTOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CBP_ADMIN,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER
            ],
        },
        '/proxies/v8/catalog/v1/sector': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/content/v2/discard/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/catalog/v1/sector/read/:sectorId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/catalog/v1/sector/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/catalog/v1/subsector/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },

        '/proxies/v8/calendar/v4/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },

        '/proxies/v8/calendar/v4/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/calendar/v4/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/calendar/v4/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/calendar/v4/retire/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/calendar/v1/bulkUpload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/careers/v4/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/careers/v4/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/careers/v4/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/careers/v4/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/ext-forms/v1/form/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/v1/form/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/ext-forms/v1/form/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
            ],
        },
        '/v1/form/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ext-forms/v1/form/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/v1/form/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/ext-forms/v1/form/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
            ],
        },
        '/v1/form/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ext-forms/v1/form/fetchAll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
            ],
        },
        '/v1/form/fetchAll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/microsite/read/insights': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/msite/content/aggregation/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/workflow/v2/userWFApplicationFieldsSearch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ratings/v1/topReviews/:orgId': {
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/storage/orgStoreUpload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/demand/content/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/demand/content/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/demand/content/delete/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/demand/content/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/playList/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/playList/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/playList/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/playList/delete/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CBP_ADMIN,
            ],
        },
        // tslint:disable-next-line: all
        '/proxies/v8/tenders/v4/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        // tslint:disable-next-line: all
        '/proxies/v8/tenders/v4/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        // tslint:disable-next-line: all
        '/proxies/v8/tenders/v4/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        // tslint:disable-next-line: all
        '/proxies/v8/tenders/v4/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/cloud-services/mlcore/v1/files/download': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/user/assessment/v5/result': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/assessment/v5/retake/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/protected/v8/user/evaluate/assessment/submit/v5': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/assessment/v5/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/question/v5/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/interest/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/interest/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/interest/v1/assign': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/interest/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/assessment/save': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/demand/content/v1/update/status': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CONTENT_CREATOR,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/orgBookmark/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/orgBookmark/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/orgBookmark/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/orgBookmark/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/orgBookmark/v1/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/playList/v2/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/playList/read/:id/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/announcements/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/announcements/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/announcements/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/announcements/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/announcements/v1/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/assessment/savepoint': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/playList/v2/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/playList/v2/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/playList/v2/read/:id/:playListId/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cios/v1/onboardContent': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/cios/v1/content/read/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cios/v1/search/content': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cios/v1/content/delete/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },

        '/proxies/v8/ciosIntegration/v1/loadContentFromExcel/:partnercode/:partnerId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/ciosIntegration/v1/readAllContentFromDb': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/user/v2/bulkupload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/admin/v2/bulkupdate/transition': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/playList/v1/search/program': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/framework/v1/publish/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/admin/pending/request': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/framework/v1/term/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/framework/v1/term/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/framework/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/v1/search/competenciesByOrg/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/mentors/share/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/mentors/createdSessions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MENTOR,
            ],
        },
        '/proxies/v8/mentoring/v1/mentors/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/mentors/details/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/form/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MENTOR,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/details/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/share/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/enroll/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/unEnroll/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/start/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MENTOR,
            ],
        },
        '/proxies/v8/mentoring/v1/mentees/joinSession/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/mentors/reports': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MENTOR,
            ],
        },
        '/proxies/v8/mentoring/v1/mentees/reports': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/mentees/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/enrolledMentees/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MENTOR,
            ],
        },
        '/proxies/v8/mentoring/v1/platform/config': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/profile/filterList': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/profile/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/mentors/upcomingSessions/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/feedback/submit/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/cloud-services/getSignedUrl': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/mentees/homeFeed': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/users/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ciosIntegration/v1/loadContentProgressFromExcel/:partnercode': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/email/approvedDomains': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/designation/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/designation/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/designation/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/designation/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/designation/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/designation/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/framework/v1/copy/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cios-enroll/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cios-enroll/v1/courselist/byuserid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/cios-enroll/v1/readby/useridcourseid/:courseid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competencyArea/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/competencyArea/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competencyTheme/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/competencyTheme/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competencySubTheme/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/competencySubTheme/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competencyArea/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencyArea/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencyArea/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencyArea/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competencyTheme/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencyTheme/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencyTheme/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencyTheme/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competencySubTheme/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencySubTheme/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencySubTheme/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/competencySubTheme/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/halloffame/top/learners/:ministryOrgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/halloffame/state/top/learners/:ministryOrgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/walloffame/top/learners/:ministryOrgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/walloffame/state/top/learners/:ministryOrgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/competencySubTheme/create/term': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/competencyTheme/create/term': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/designation/create/term': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.MDO_LEADER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/org/framework/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/v3/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/framework/v1/term/retire': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/contentpartner/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/contentpartner/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/contentpartner/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/contentpartner/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/contentpartner/v1/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/entity-type/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/profileApprovalSearch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.WAT_MEMBER,
                ROLE.CBC_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/mentoring/v1/entity/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/data/v2/system/settings/get/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/sessions/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MENTOR,
            ],
        },
        '/proxies/v8/cqfquestionset/v2/create': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/cqfquestionset/v2/review/:id': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/cqfquestionset/v2/hierarchy/update': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/halloffame/v1/mdoleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/halloffame/v1/state/mdoleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/halloffame/v1/userleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/walloffame/v1/mdoleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/walloffame/v1/state/mdoleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/walloffame/v1/userleaderboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ciosIntegration/v1/file/info/:partnerId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/protected/v8/user/evaluate/assessment/submit/v6': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },

        '/proxies/v8/ciosIntegration/v1/deleteContent': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/storage/v1/uploadCiosIcon': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/storage/v1/uploadCiosContract': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/storage/v1/downloadCiosContract/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/serviceregistry/v1/callExternalApi': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/serviceregistry/config/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/serviceregistry/config/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/serviceregistry/config/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/serviceregistry/config/fetch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/addFirst': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/addNew': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/getAll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/multipleWorkflows': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/delete/:commentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/setStatusToResolved': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/resolve/:commentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/cqfquestionset/questionset/create': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/cqfquestionset/questionset/update': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/cqfquestionset/submit': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/cqfquestionset/result': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/cqfquestionset/read/:assessmentIdentifier/:contentId/:versionKey': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/questionset/autoPublish/:id': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/searchBy/:version/:key': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cqfquestionset/question/list': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/private/mlsurvey/api/v1/surveys/createSolutionTemplate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/mlsurvey/api/v1/questions/bulkCreate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/mlsurvey/api/v1/surveys/importSurveryTemplateToSolution/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/mlsurvey/api/v1/surveys/mapSurverySolutionToProgram/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/mlsurvey/api/v1/solutions/importFromSolution': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/mlcore/api/v1/programs/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/mlcore/api/v1/solutions/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/mlsurvey/api/v1/admin/dbFind/solutions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cqfquestionset/listEntry': {
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
            checksNeeded: [CHECK.ROLE],
        },
        '/proxies/v8/template/api/v1/download/sampleTemplate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/template/api/v1/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/template/api/v1/validate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/template/api/v1/survey/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/template/api/v1/survey/getSolutions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/template/api/v1/survey/downloadSolutions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/organisation/v1/getCompetencyDesignationMappingFile/sample/:frameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/organisation/v1/competencyDesignationMappings/bulkUpload/:frameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/organisation/v1/competencyDesignationMappings/bulkUpload/progress/details/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/organisation/v1/competencyDesignationMappings/download/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/national/learning/week/insights': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/state/learning/week/insights': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/designation/v1/orgMapping/sample/:frameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/designation/v1/orgMapping/bulkUpload/:orgId/:frameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/designation/v1/orgMapping/bulkUpload/progress/details/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/designation/v1/orgMapping/download/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },

        '/proxies/v8/ciosIntegration/v1/read/content/:partnercode/:externalid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.PUBLIC,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/ciosIntegration/v1/search/content': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ciosIntegration/v1/update/content': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/contentpartner/v1/readbypartnercode/:partnercode': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v1/question/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v5/question/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v5/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v5/assessment/submit': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v4/assessment/submit': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v5/result': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/operationalreports/v2/download/:rootOrgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/storage/v1/uploadCiosLogsFile': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/storage/v1/downloadCiosLogs/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/user/events/list/:uid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],

        },
        '/proxies/v8/event/batch/enroll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/eventprogress/v1/event/state/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/event/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/event/state/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/comment/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/like': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v1/like/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/serviceregistry/v1/callexternalapibyid/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/report': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/delete/reported': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/serviceregistry/config/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/serviceregistry/config/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/bp/v1/bpreport/status': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/bp/v1/generate/report': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/bp/v1/bpreport/download/:orgId/:courseId/:batchId/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/customselfregistration': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/feedDiscussion/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/question/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.COMMUNITY_MODERATOR,
            ],
        },
        '/proxies/v8/feedDiscussion/question/like/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/ext/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/customselfregistration/listallqrs': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/comment/v1/likedComments': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/customselfregistration/upload/logo/gcpcontainer': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/customselfregistration/isregistrationqractive': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/community/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/community/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/community/v1/read/:communityId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/delete/:communityId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPosts': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/question/dislike/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/report': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/uploadFile/:communityId/:discussionId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/looker/dashboard': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/v2/transition': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/courseRecommend/v1/courses': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/join': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/unjoin': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/user/communities': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/community/listuser': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v4/user/enrollment/summary/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v4/user/enrollment/list/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v4/user/enrollment/details/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/community/v1/category/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/community/v1/category/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/community/v1/category/read/:categoryId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/category/delete/:categoryId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/community/v1/category/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/subcategory/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/serviceregistry/v1/callexternal/progressapibyid/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/comment/v2/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/interface/v1/mentors/details/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/updateAnswerPost': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/category/listAll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/courseRecommendation/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/courseRecommendation/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/courseRecommendation/feedback': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/chatbot/session/start': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/chatbot/session/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/chatbot/message/feedback': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/chatbot/message/content/feedback': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/bookmark/:communityId/:discussionId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/unbookmark/:communityId/:discussionId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/bookmarkedDiscussions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/comment/v2search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/event/v4/reject/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/mentoring/v1/reports/filterList': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/mentoring/v1/reports/reportData': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/communityFeed': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v2/event/bulkonboard/:eventId/:batchId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/event/bulkonboard/status/:eventId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/event/bulkonboard/download/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/community/v1/popular': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/report': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/fileUpload/:communityId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/nlp/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/topic/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/mdo/trending/events': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],

        },
        '/proxies/v8/user/featured/events': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/events/enroll/summary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPost/like/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPost/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPost/dislike/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/thumbnail/v1/image/variations/course/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/thumbnail/v2/image/variations/course/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/publish': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/feedDiscussion/globalFeed': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/events/v2/list/:uid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/v1/enrichData': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v5/public/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/user/communities/all': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/community/v1/mdo/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/chatbot/v3/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/fetchUserToken': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/chatbot/v3/upload/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPostReply/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPostReply/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPostReply/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPostReply/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/certificate/dynamic/v1/generate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/certreg/v2/certs/validate': {
            checksNeeded: [],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [],
        },
        '/proxies/v8/user/assessment/v7/result': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v7/result': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/public/assessment/v7/question/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/assessment/v7/retake/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/evaluate/assessment/submit/v7': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/ext/v2/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/private/content/v4/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPostReply/like/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/feedDiscussion/answerPostReply/dislike/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/private/content/v4/system/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/commentTree/v1/get': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/search/v1/recent/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/search/v1/recent/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/search/v1/recent/delete': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/search/v1/trending/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/search/v1/trending/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/comment/v3/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/youtube/duration/:videoid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/feedDiscussion/admin/activatePost': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.COMMUNITY_MODERATOR,
            ],
        },
        '/proxies/v8/feedDiscussion/admin/removePost': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.COMMUNITY_MODERATOR,
            ],
        },
        '/proxies/v8/feedDiscussion/getReportStatistics': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.COMMUNITY_MODERATOR,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/getUserApprovalDataInCsv': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/bulkApprovalDataFromCsv/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/profile/v1/extended': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/all/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/serviceHistory/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/education/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/achievement/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/delete': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/profile/v1/basic/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/extendedprofile/list/states': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/extendedprofile/list/districts': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/masterdata/list/degrees': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/masterdata/list/institutions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/readById/:notificationId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/delete': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/bulk/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/unread/count': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/reset/unread/count': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/notificationSetting/upsert': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/notificationSetting/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/masterdata/update/degree': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/masterdata/update/institution': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/locationDetails/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },

        '/proxies/v8/chatbot/v3/feedbacks/save': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/chatbot/v3/feedbacks/get': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/accessSettings/v1/upsert': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/user/v1/groups': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/accessSettings/read/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/organisation/v1/getMappingFile/sample/:frameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/organisation/v1/hierarchy/bulkUpload/:frameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/organisation/v1/hierarchy/progress/details/bulkUpload/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/organisation/v1/hierarchy/download/file/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/organisation/v1/hierarchy/download/:frameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/accessSettings/v1/delete/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_REVIEWER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/search/v1/recent/delete/timestamp/:timestamp': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/framework/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/chatbot/v3/transcoder/stats': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/chatbot/v3/global/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/customFields/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/customFields/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/customFields/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/customFields/v1/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/customFields/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/customFields/v1/masterList/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/profile/v1/extended/competencies/:userId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/connections/v1/profile/relationship/:userId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/customFields/v1/masterList/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/customFields/v1/status/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/framework/v1/category/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.STATE_ADMIN,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/profile/v1/update/additionalFields': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/profile/v1/getAdditionalFields/:userId/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content/v2/state/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/support/ai/chat/start': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/support/ai/chat/send': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/customFields/v1/popup/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/content/v2/state/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CONTENT_CREATOR,
                ROLE.SPV_PUBLISHER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/connections/v3/connections/recommended': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/connections/v3/connections/recommended/mentors': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/connections/v2/connections/requests/blocked': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/connections/block': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/connections/user/v1/network/connections/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/v2/createForm': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/v2/updateForm': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/v2/getFormById': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/forms/v2/saveFormSubmit': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/forms/v2/getApplicationsById': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/forms/v2/getAllApplications': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/v2/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/forms/v2/submissions/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content/v4/mlcreate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/user/v1/assignedcourses': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/collection/v1/hierarchy/initialize/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/collection/v1/discard/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/moderation/v1/language/detect': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content/v4/mlReview': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/content/v4/ml/update/reviewStatus': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/learner/course/v1/batch/delete': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/pipeline/content/transcode/process/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/cbplan/v2/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v2/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v2/publish': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v2/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v2/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v2/archive': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/v3/bulkupload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/user/v1/org-migration/sample-file/:orgHierarchyFrameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/org-migration/bulk-upload/:orgHierarchyFrameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/v2/org-migration/bulk-upload/:orgHierarchyFrameworkId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/org-migration/bulk-upload/progress/:orgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/org-migration/bulk-upload/result/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/assignment/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/assignment/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/assignment/v1/getAnswerById': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/assignment/v1/submitDraft': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/assignment/v1/submit': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/assignment/v1/feedback': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/storage/v1/bp/assignment/answer/:contentId/:batchId/:formId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/storage/v1/bp/assignment/answer/read/file': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/consent/v1/acknowledge': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/consent/v1/acknowledge/read/:contentId/:consentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/level/hierarchy': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifyAssignment/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/v1/notifyAssignment/submit': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifyAssignment/evaluate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_INSTRUCTOR,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/remove/approved/user': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/forms/v2/bulkGetApplicationsById': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/workflow/blendedprogram/nominate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/user/v2/assignedcourses': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/promotionalcontent/v1/assignedto/users': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/storage/v1/report/form/:reportType/:date/:formId/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CBP_ADMIN,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
            ],
        },
        '/proxies/v8/promotionalcontent/v1/metadata/upsert': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/promotionalcontent/v1/delete/:identifier': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/otp/v4/verify': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v3/extPatch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/v1/assigned/externalcourses': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content/v1/retirement/schedule': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/content/v1/retirement/validate/:identifier': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/content/v4/copy': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/content/v1/retirement/request/decide': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/content/v1/retirement/status': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/sso/create/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/sso/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/sso/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/contentpartner/register/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/contentpartner/register/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/contentpartner/register/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/event/v1/cancel/:identifier': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/masterdata/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/cios-enroll/v1/validation': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v2/password/reset': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/learningpathway/v1/enrol/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/contentpartner/register/v1/readbyid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/public/v8/chatbot/v3/mobile/transcoder/stats': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/extended/content/v1/read/:identifier': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/achievement/dynamic/v1/generate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learningpathway/v1/retire/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/learner/certreg/v2/achievement/validate': {
            checksNeeded: [],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [],
        },
        '/proxies/v8/forms/mdo/peersurvey': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/forms/spv/peersurvey': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/forms/spv/update/peersurvey/:surveyId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/forms/mdo/update/peersurvey/:surveyId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/contentpartner/v1/activate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/sso/validateSaml': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/v1/notifications/mandatory': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/mandatory/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/mandatory/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/achievement/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/learner/achievement/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/learner/achievement/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/achievement/delete': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/achievement/status/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/learner/achievement/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/achievement/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/knowledge/centre/create/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/knowledge/centre/update/:type/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/knowledge/centre/publish/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/knowledge/centre/delete/:type/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/knowledge/centre/spv/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/forms/peersurvey/archive/:surveyId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/forms/peersurvey/publish/:surveyId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/forms/mdo/peersurvey/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/forms/spv/peersurvey/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/learner/v1/competency/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/externaltraining/v4/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },

        '/proxies/v8/externaltraining/v4/publish/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/externaltraining/v4/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/externaltraining/v4/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/learner/achievement/v2/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/externaltraining/batch/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/forms/peersurvey/end/:surveyId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/forms/peersurvey/submit': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/peervalidation/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/notifications/v2/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/externaltraining/v1/batch/getParticipants': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/externaltraining/v1/bulkupload/:eventId/:batchId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/externaltraining/v1/bulkupload/status': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/externaltraining/v1/bulkupload/download/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/badge/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/storage/v1/peervalidation/report/download': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/dashboard/badgedetails/summary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/peersurvey/upload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/externaltraining/v1/bulkupload/sample': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/event/batch/cert/template/add': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/peervalidation/v1/report/initiate/:formId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/peervalidation/v1/list/report': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/badge/dynamic/v1/generate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content/v2/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.PROGRAM_INSTRUCTOR,
                ROLE.STATE_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/course/v1/hierarchy/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.PROGRAM_INSTRUCTOR,
                ROLE.STATE_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/operationalreports/v3/download/:rootOrgId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/ai/assessments/v1/generate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/ai/assessments/v1/download/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/ai/assessments/v1/status/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/ai/assessments/v1/history': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/publish': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/reject': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/items/reject': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/course/suggestions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/designation/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/items/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/course/add': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/course/remove': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/designation/approval-requests/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/designation/approval-requests/approve': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/ai/cbp/v1/designation/approval-requests/reject': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/workflow/aiAssessment/transition': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.PROGRAM_INSTRUCTOR,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/workflow/aiAssessment/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/workflow/aiAssessment/getUserWF': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.PROGRAM_INSTRUCTOR,
                ROLE.SPV_PUBLISHER,
                ROLE.CBP_ADMIN,
            ],
        },
        '/proxies/v8/contenthealth/v1/report/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/contenthealth/v1/summary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/ai/cbp/v1/mdo/approval-requests/publish/retry': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/read/content-progres/ngo/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/content-progres/ngo/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/comment/v1/ngo/addFirst': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/volunteer/ratings/v1/read/:activity_id/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/volunteer/ratings/v1/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/volunteer/user/v2/insights': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/bp/v2/generate/report': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/bp/v2/bpreport/status': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/content/v5/dictionary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/org/ngo/v1/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/api/user/volunteer/v1/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/ngo/profile/v1/basic': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/ngo/profile/v1/extended/all': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/ngo/profile/v1/getAdditionalFields': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/learner/achievement/ngo/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/v1/role/assign': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.SPV_ADMIN,
                ROLE.CBP_ADMIN,
                ROLE.STATE_ADMIN,
            ],
        },
        '/proxies/v8/learner/course/v4/user/ngo/enrollment/summary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/learner/course/v4/user/ngo/enrollment/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/bp/v2/bpreport/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/learner/course/v4/user/ngo/enrollment/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/ai/chatbot/v1/sessions/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ai/chatbot/v1/sessions/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/formsConfig/v1/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/ai/chatbot/v1/sessions/history/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ai/chatbot/v1/sessions/turn/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/formsConfig/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/user/profile/v2/extended/all': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/profile/v2/extended': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/learner/achievement/v1/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/profile/v2/basic': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/read/v5/content-progres/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v5/content-progres/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v5/user/enrollment/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v5/user/enrollment/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v5/user/enrollment/summary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/composite/v5/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/nongovt/v1/bulkupload': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.SPV_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/ratings/v1/read/:activity_id/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/org/v1/status/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/course/v2/unenroll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/course/v1/reenroll': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/content/info': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/formsConfig/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
            ],
        },
        '/proxies/v8/user/v1/learning/dictionary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content/admin/v1/durationSync/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
            ],
        },
        '/proxies/v8/content/admin/v1/replaceVideo': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
            ],
        },
        '/proxies/v8/program/coordinator/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/program/coordinator/list/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/program/coordinator/roles': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
                ROLE.CONTENT_CREATOR,
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/program/coordinator/bulk-upload/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/program/coordinator/bulk-upload/:do_id/status/:identifier': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/program/coordinator/bulk-upload/:do_id/download/:fileName': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/batch/v1/enrollment/qrcode/download/:do_id/:batch_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/batch/v1/enrollment/qrcode/status/:do_id/:batch_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/composite/v4/bp/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
            ],
        },
        '/proxies/v8/formsConfig/v2/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.IGOT_SUPPORT_ADMIN,
            ],
        },
        '/proxies/v8/formsConfig/v2/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.SPV_ADMIN,
                ROLE.IGOT_SUPPORT_ADMIN,
            ],
        },
        '/proxies/v8/cios-enroll/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/scorm/v1/validate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
            ],
        },
        '/proxies/v8/scorm/v1/status': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.CONTENT_CREATOR,
                ROLE.CONTENT_REVIEWER,
                ROLE.CONTENT_PUBLISHER,
            ],
        },
        '/proxies/v8/program/admin/coordinator/upsert/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PROGRAM_COORDINATOR,
                ROLE.BP_PROGRAM_TRAINER,
                ROLE.CONTENT_CREATOR,
                ROLE.SPV_PUBLISHER,
                ROLE.CONTENT_PUBLISHER,
            ],
        },
        '/proxies/v8/cios/v2/content/read/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.SPV_ADMIN,
                ROLE.SPV_PUBLISHER,
            ],
        },
        '/proxies/v8/cbplan/v3/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v3/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v3/publish': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v3/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v3/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v3/archive': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v3/user/dictionary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cios-enroll/v1/karmapoints/deductionrule': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/karmawallet/v1/summary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/karmawallet/v1/transactions': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/karmawallet/v1/redeem': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/karmawallet/v1/redeem/status/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cios-enroll/v2/readby/useridcourseid/:courseid': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/usergroup/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/usergroup/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/usergroup/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/usergroup/v1/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/usergroup/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v4/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v4/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v4/publish': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v4/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/cbplan/v4/admin/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v4/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v4/archive': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/action/ca/v1/publish/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/ca/questionset/v1/publish/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/cbplan/v4/user/dictionary': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v2/content/info': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
                ROLE.VOLUNTEER,
            ],
        },
        '/proxies/v8/user/profile/v2/getAdditionalFields': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/ai/assessments/v1/questions/create/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/ai/assessments/v1/questions/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/ai/assessments/v1/questions/delete/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/ai/assessments/v1/questions/order/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.AI_ASSESSMENT_CREATOR,
            ],
        },
        '/proxies/v8/v1/content/ca/retire': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_LEADER,
                ROLE.MDO_ADMIN,
            ],
        },
        '/proxies/v8/ca/questionset/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/ca/questionset/v1/update/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/ca/questionset/v1/hierarchy/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/action/content/ca/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/action/content/ca/v1/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },
        '/proxies/v8/action/content/ca/v1/hierarchy/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.MDO_ADMIN,
                ROLE.MDO_LEADER,
            ],
        },

    },
    URL_PATTERN:
        [
            // '/authApi/content/v3/create',
            // '/authApi/content/v3/read/:do_id',
            // '/authApi/content/v3/update/:do_id',
            '/authApi/readBatch/:batchId',
            '/authApi/batch/:key',
            '/authApi/readCert/:certId',
            '/proxies/v8/api/user/v2/read',
            '/proxies/v8/api/user/v2/read/:id',
            '/proxies/v8/api/user/v5/read',
            '/proxies/v8/api/user/v5/read/:id',
            '/proxies/v8/user/v1/updateLogin',
            '/proxies/v8/event/v4/read/:do_id',
            '/proxies/v8/event/v4/publish/:do_id',
            '/proxies/v8/event/v4/create',
            '/proxies/v8/event/v4/update/:do_id',
            '/proxies/v8/event/v4/retire/:do_id',
            '/proxies/v8/user/v1/read/:id',
            '/proxies/v8/contentsearch/search',
            '/proxies/v8/sunbirdigot/read',
            '/proxies/v8/sunbirdigot/search',
            '/proxies/v8/discussion/user/v1/create',
            '/proxies/v8/data/v1/system/settings/get/orgTypeList',
            '/proxies/v8/data/v1/system/settings/get/notificationPreference',
            '/proxies/v8/org/v1/search',
            '/proxies/v8/org/v1/admin/search',
            '/proxies/v8/org/v1/update',
            '/proxies/v8/notifyContentState',
            '/proxies/v8/discussion/topic/:id/:slug',
            '/proxies/v8/discussion/v2/posts/:id/vote',
            '/proxies/v8/discussion/v2/posts/:id',
            '/proxies/v8/discussion/v2/posts/:id/bookmark',
            '/proxies/v8/discussion/moderation/producer',
            '/proxies/v8/discussion/moderation/consumer',
            '/proxies/v8/learner/course/v1/user/enrollment/list/:id',
            '/proxies/v8/learner/course/v2/user/enrollment/list/:id',
            '/proxies/v8/learner/certreg/v1/certs/validate',
            '/proxies/v8/read/content-progres/:do_id',
            '/proxies/v8/content-progres/:do_id',
            '/proxies/v8/action/content/v3/hierarchy/:do_id',
            '/proxies/v8/action/content/v3/hierarchyUpdate',
            '/proxies/v8/action/content/v3/hierarchy/update',
            '/proxies/v8/action/content/v3/read/:do_id',
            '/proxies/v8/discussion/forum/v2/read',
            '/proxies/v8/discussion/category/list',
            '/proxies/v8/discussion/category/:id',
            '/proxies/v8/discussion/forum/tags',
            '/proxies/v8/action/content/v3/update/:do_id',
            '/proxies/v8/discussion/user/:id',
            '/proxies/v8/action/content/v3/create',
            '/proxies/v8/upload/action/content/v3/upload/:do_id',
            '/proxies/v8/v1/content/retire',
            '/proxies/v8/action/content/v3/copy/:do_id',
            '/proxies/v8/action/content/v3/updateReviewStatus/:do_id',
            '/proxies/v8/action/content/v3/review/:do_id',
            '/proxies/v8/discussion/recent',
            '/proxies/v8/discussion/popular',
            '/proxies/v8/action/content/v3/publish/:do_id',
            '/proxies/v8/action/content/v3/reject/:do_id',
            '/proxies/v8/user/private/v1/assign/role',
            '/proxies/v8/user/v1/search',
            '/proxies/v8/user/v1/admin/search',
            '/proxies/v8/org/v1/read',
            '/proxies/v8/org/v1/profile/read',
            '/proxies/v8/org/v1/profile/patch',
            '/proxies/v8/org/v1/create',
            '/proxies/v8/discussion/tags',
            '/proxies/v8/user/v1/block',
            '/proxies/v8/user/v1/unblock',
            '/proxies/v8/data/v1/system/settings/get/orgTypeConfig',
            '/proxies/v8/learnervm/private/content/v3/publish/:do_id',
            '/proxies/v8/learnervm/private/content/v3/review/:do_id',
            '/proxies/v8/discussion/v2/topics',
            '/proxies/v8/discussion/v2/topics/:id',
            '/proxies/v8/discussion/v2/categories',
            '/proxies/v8/discussion/tags/:tag',
            '/proxies/v8/discussion/user/:userKey/bookmarks',
            '/proxies/v8/discussion/user/:userKey/bookmark',
            '/proxies/v8/discussion/user/:userKey/upvoted',
            '/proxies/v8/discussion/user/:userKey/downvoted',
            '/proxies/v8/discussion/categories',
            '/proxies/v8/discussion/mainCategories',
            '/proxies/v8/user/v1/autocomplete/:key',
            '/proxies/v8/user/v1/migrate',
            '/proxies/v8/user/private/v1/migrate',
            '/proxies/v8/user/private/v2/migrate',
            '/proxies/v8/user/private/v1/assign/role/userrole',
            '/proxies/v8/learnervm/private/content/v3/retire/',
            '/proxies/v8/private/content/v3/update/:do_id',
            '/proxies/v8/dashboard/analytics/getDashboardConfig/Karmayogi/:comp',
            '/proxies/v8/dashboard/analytics/getDashboardsForProfile/Karmayogi',
            '/proxies/v8/dashboard/analytics/getChartV2/Karmayogi',
            '/proxies/v8/wat/dashboard/getDashboardConfig/Karmayogi/overview',
            '/proxies/v8/forms/createForm',
            '/proxies/v8/forms/getFormById',
            '/proxies/v8/forms/getCollectiveAggregation',
            '/proxies/v8/forms/getAllForms',
            '/proxies/v8/forms/v1/saveFormSubmit',
            '/proxies/v8/forms/getAllApplications',
            '/proxies/v8/forms/tagFormToCourse',
            '/proxies/v8/forms/untagFormToCourse',
            '/proxies/v8/forms/searchForms',
            '/proxies/v8/forms/getCourseListForSurveys',
            '/protected/v8/user/profileDetails/test',
            '/protected/v8/resource/',
            '/protected/v8/user/details',
            '/protected/v8/connections/connections/recommended/userDepartment',
            '/protected/v8/discussionHub/categories/:cid/:slug?/:tid?',
            '/protected/v8/discussionHub/topics/recent',
            '/protected/v8/cohorts/:cohortType/:contentId',
            '/protected/v8/user/content/like',
            '/protected/v8/user/telemetry',
            '/protected/v8/scrom/get/:id',
            '/protected/v8/user/progress/:contentId',
            '/protected/v8/user/rating/:contentId',
            '/protected/v8/user/progress',
            '/protected/v8/user/history/continue',
            '/protected/v8/portal/departmentType/',
            '/protected/v8/portal/spv/department',
            '/protected/v8/portal/spv/deptAction/',
            '/protected/v8/user/roles/getUsersV2',
            '/protected/v8/portal/spv/mydepartment',
            '/protected/v8/portal/mdo/mydepartment',
            '/protected/v8/user/profileDetails/createUser',
            '/protected/v8/user/profileRegistry/getUserRegistryByUser/:id',
            '/protected/v8/user/profileRegistry/createUserRegistryV2',
            '/protected/v8/user/profileRegistry/createUserRegistry',
            '/protected/v8/portal/deptAction',
            '/protected/v8/workflowhandler/historyByApplicationId/:applicationId',
            '/protected/v8/user/autocomplete/:query',
            '/protected/v8/portal/spv/deptAction/userrole',
            '/protected/v8/user/preference',
            '/protected/v8/workflowhandler/applicationsSearch',
            '/protected/v8/workallocation/getWorkOrders',
            '/protected/v8/workallocation/add/workorder',
            '/protected/v8/workallocation/getWorkOrderById/:workOrderId',
            '/protected/v8/workallocation/user/autocomplete/:searchTerm',
            '/protected/v8/workallocation/getUserCompetencies/:userId',
            '/protected/v8/frac/searchNodes',
            '/protected/v8/frac/filterByMappings',
            '/protected/v8/frac/:type/:key',
            '/protected/v8/workallocation/v2/add',
            '/protected/v8/workallocation/getWorkAllocationById/:workAllocationId',
            '/protected/v8/workallocation/update/workorder',
            '/protected/v8/workallocation/v2/update',
            '/protected/v8/workallocation/getWOPdf/:workOrderId',
            '/protected/v8/portal/cbp/mydepartment',
            '/protected/v8/user/mandatoryContent/checkStatus',
            '/protected/v8/contentprivate/update/:do_id',
            '/protected/v8/contentprivate/migratepublisher/:do_id',
            '/protected/v8/contentprivate/migratereviewer/:do_id',
            '/protected/v8/user/rating/content/average-ratingInfo/:do_id',
            '/protected/v8/social/post/timeline',
            '/protected/v8/user/history/:id',
            '/protected/v8/frac/getAllNodes/:type',
            '/protected/v8/frac/getNodeById/:id/:type',
            '/protected/v8/portal/listDeptNames',
            '/proxies/v8/portal/v1/admin/listDeptNames',
            '/protected/v8/scroing/getTemplate/:templateId',
            '/protected/v8/portal/cbc/department',
            '/protected/v8/portal/cbc/department/:deptId/',
            '/protected/v8/portal/spv/department/:deptId/',
            '/protected/v8/scroing/calculate',
            // '/protected/v8/connections/connections/recommended',
            // '/protected/v8/connections/connections/requests/received',
            // '/protected/v8/connections/connections/established',
            // '/protected/v8/connections/connections/established/:id',
            // '/protected/v8/connections/connections/requested',
            // '/protected/v8/connections/add/connection',
            // '/protected/v8/connections/connections/suggests',
            '/protected/v8/cohorts/course/getUsersForBatch/:courseId',
            '/protected/v8/cohorts/course/getUsersForBatch/:batchId/:deptName',
            '/protected/v8/cohorts/user/autoenrollment/:courseId',
            '/protected/v8/profanity/startPdfProfanity',
            '/protected/v8/profanity/getPdfProfanityForContent/:contentId',
            '/protected/v8/catalog',
            '/protected/v8/scroing/fetch',
            '/protected/v8/portal/mdo/deptAction/userrole',
            '/protected/v8/user/profileDetails/updateUser',
            '/protected/v8/frac/addDataNodeBulk',
            '/protected/v8/roleactivity/:txt',
            '/protected/v8/connections/update/connection',
            '/protected/v8/workflowhandler/userWFApplicationFieldsSearch',
            '/protected/v8/user/details/detailV1',
            '/protected/v8/user/profileRegistry/getMasterNationalities',
            '/protected/v8/user/profileRegistry/getMasterCountries',
            '/protected/v8/user/profileRegistry/getMasterLanguages',
            '/protected/v8/user/profileRegistry/getProfilePageMeta',
            '/protected/v8/user/notifications/settings',
            '/protected/v8/user/profileRegistry/searchUserRegistry',
            '/protected/v8/workflowhandler/transition',
            '/protected/v8/workflowhandler/nextActionSearch/:serviceName/:state',
            '/protected/v8/workflowhandler/historyByApplicationIdAndWfId/:applicationId/:wfId',
            '/protected/v8/workflowhandler/workflowProcess/:wfId',
            '/protected/v8/workflowhandler/updateUserProfileWf',
            '/protected/v8/workflowhandler/userWfSearch',
            '/protected/v8/user/profileRegistry/getUserRegistryById',
            '/protected/v8/user/profileRegistry/getUserRegistryById/:id',
            '/protected/v8/workallocation/copy/workOrder',
            '/reset',
            '/protected/v8/user/evaluate/assessment/submit/v2',
            '/protected/v8/user/evaluate/assessment/submit/v3',
            '/protected/v8/connections/v2/connections/recommended/userDepartment',
            '/protected/v8/connections/v2/connections/recommended',
            '/protected/v8/connections/v2/connections/requests/received',
            '/protected/v8/connections/v2/connections/established',
            '/protected/v8/connections/v2/connections/established/:id',
            '/protected/v8/connections/v2/connections/requested',
            '/protected/v8/connections/v2/add/connection',
            '/protected/v8/connections/v2/connections/suggests',
            '/protected/v8/connections/v2/update/connection',
            '/protected/v8/user/profileDetails/createUserWithoutInvitationEmail',
            '/proxies/v8/searchBy/:key',
            '/proxies/v8/staff/position',
            '/proxies/v8/staff/position/:orgId',
            '/proxies/v8/budget/scheme',
            '/proxies/v8/budget/scheme/:orgId',
            '/proxies/v8/budget/scheme/:orgId/:budgetYear',
            '/proxies/v8/orghistory/:orgId/:key',
            '/proxies/v8/discussion/user/uid/:uid',
            '/proxies/v8/discussion/user/:username/posts',
            '/proxies/v8/action/framework/v3/read/:id',
            '/proxies/v8/action/framework/v3/category/master/create',
            '/proxies/v8/action/framework/v3/category/master/search',
            '/proxies/v8/action/framework/v3/category/master/read/:id',
            '/proxies/v8/action/framework/v3/category/create',
            '/proxies/v8/action/framework/v3/category/read/:id',
            '/proxies/v8/action/framework/v3/category/retire/:id',
            '/proxies/v8/action/framework/v3/term/create',
            '/proxies/v8/action/content/v3/upload/:do_id',
            '/proxies/v8/learner/course/v1/batch/list',
            '/proxies/v8/learner/course/v1/learner/batch/list',
            '/protected/v8/cohorts/course/batch/cert/download/:certId',
            '/public/v8/cohorts/course/batch/cert/download/mobile',
            '/protected/v8/cohorts/course/batch/cert/issue',
            '/protected/v8/cohorts/course/batch/cert/template/add',
            '/proxies/v8/storage/upload',
            '/proxies/v8/storage/delete',
            '/proxies/v8/user/v1/extPatch',
            '/proxies/v8/learner/course/v2/user/enrollment/admin/list',
            '/protected/v8/frac/bookmarkDataNode',
            '/proxies/v8/assessment/read/:id',
            '/proxies/v8/question/read',
            '/proxies/v8/cbp/question/list',
            '/proxies/v8/questionset/v1/create',
            '/proxies/v8/questionset/v1/read/:id',
            '/proxies/v8/questionset/v1/update/:id',
            '/proxies/v8/questionset/v1/review/:id',
            '/proxies/v8/questionset/v1/publish/:id',
            '/proxies/v8/questionset/v1/hierarchy/update',
            '/proxies/v8/questionset/v1/retire/:id',
            '/proxies/v8/questionset/v1/reject/:id',
            '/proxies/v8/questionset/v1/hierarchy/:id',
            '/proxies/v8/ratings/v1/read/:activityId/:activityType/:userId',
            '/proxies/v8/ratings/v1/upsert',
            '/proxies/v8/ratings/v1/summary/:activityId/:activityType',
            '/proxies/v8/ratings/v1/ratingLookUp',
            '/proxies/v8/moderatoradmin/feedback/persist/text/moderated',
            '/proxies/v8/moderatoradmin/feedback/text/fetch',
            '/proxies/v8/moderatoradmin/profanity/type/text',
            '/proxies/v8/moderatoradmin/feedback/flag/values',
            '/proxies/v8/user/v1/positions',
            '/proxies/v8/org/ext/v1/create',
            '/proxies/v8/user/basicInfo',
            '/proxies/v8/user/basicProfileUpdate',
            '/proxies/v8/user/v1/bulkupload',
            '/proxies/v8/user/v1/bulkupload/:orgId',
            '/proxies/v8/otp/v1/generate',
            '/proxies/v8/otp/v1/otp',
            '/proxies/v8/user/v1/notificationPreference',
            '/proxies/v8/user/assessment/retake/:id',
            '/proxies/v8/mdo/content/v3/create',
            '/proxies/v8/mdo/content/v3/hierarchy/update',
            '/proxies/v8/mdo/content/v3/update/:do_id',
            '/proxies/v8/mdo/content/v3/publish/:do_id',
            '/proxies/v8/mdo/content/v4/system/update/:do_id',
            '/proxies/v8/mdo/content/v3/batch/addUser',
            '/proxies/v8/mdo/content/v3/batch/removeUser',
            '/proxies/v8/user/offensive/data/flag',
            '/proxies/v8/user/offensive/data/flag/getFlaggedData',
            '/proxies/v8/masterData/v1/upsert',
            '/proxies/v8/user/v1/bulkuser/download/:id',
            '/proxies/v8/workflow/position/update',
            '/proxies/v8/workflow/org/update',
            '/proxies/v8/workflow/domain/update',
            '/proxies/v8/workflow/position/search',
            '/proxies/v8/workflow/org/search',
            '/proxies/v8/workflow/domain/search',
            '/protected/v8/user/evaluate/assessment/submit/v4',
            '/proxies/v8/user/assessment/v4/result',
            '/proxies/v8/ratings/v2/read',
            '/proxies/v8/workflow/blendedprogram/enrol',
            '/proxies/v8/workflow/blendedprogram/search',
            '/proxies/v8/workflow/blendedprogram/searchv2/pc',
            '/proxies/v8/workflow/blendedprogram/searchv2/mdo',
            '/proxies/v8/workflow/blendedprogram/user/search',
            '/proxies/v8/workflow/blendedprogram/details',
            '/proxies/v8/workflow/blendedprogram/update/pc',
            '/proxies/v8/workflow/blendedprogram/update/mdo',
            '/proxies/v8/workflow/blendedprogram/read/mdo/:id',
            '/proxies/v8/workflow/blendedprogram/read/pc/:id',
            '/proxies/v8/workflow/blendedprogram/v1/stats',
            '/proxies/v8/storage/v1/report/:reportType/:date/:orgId/:fileName',
            '/proxies/v8/workflow/blendedprogram/admin/enrol',
            '/proxies/v8/batchsesion/qrcode/:courseid/:batchid',
            '/proxies/v8/blendedprogram/v1/update/progress',
            '/proxies/v8/workflow/blendedprogram/remove/pc',
            '/proxies/v8/workflow/blendedprogram/remove/mdo',
            '/proxies/v8/course/v1/batch/read/:id',
            '/proxies/v8/course/v1/batch/public/read/:id',
            '/proxies/v8/blendedprogram/v1/getUserContentProgress',
            '/proxies/v8/user/v1/feed/:userId',
            '/proxies/v8/user/feed/v1/create',
            '/proxies/v8/user/feed/v1/delete',
            '/proxies/v8/user/feed/v1/update',
            '/proxies/v8/faq/v1/assistant/configs/language',
            '/proxies/v8/faq/v1/assistant/available/language',
            '/proxies/v8/curatedprogram/v1/enrol',
            '/proxies/v8/workflow/blendedprogram/enrol/status/count',
            '/proxies/v8/workflow/blendedprogram/unenrol',
            '/proxies/v8/storage/v1/reportInfo/:orgId',
            '/proxies/v8/program/v1/admin/enrol',
            '/proxies/v8/user/v1/admin/extPatch',
            '/proxies/v8/trending/content/search',
            '/proxies/v8/read/user/insights',
            '/proxies/v8/storage/profilePhotoUpload/:cloudFolderName',
            '/proxies/v8/user/v1/admin/autocomplete/:searchTerm',
            '/proxies/v8/data/v1/system/settings/get/defaultCertTemplate',
            '/proxies/v8/course/batch/cert/v1/template/add',
            '/proxies/v8/competency/v4/search',
            '/proxies/v8/competency/v4/read/:id',
            '/proxies/v8/competency/v4/upsert',
            '/proxies/v8/competency/v4/update/relation',
            '/proxies/v8/cbplan/v1/create',
            '/proxies/v8/cbplan/v1/update',
            '/proxies/v8/cbplan/v1/publish',
            '/proxies/v8/masterData/v2/deptPosition',
            '/proxies/v8/masterData/v2/admin/deptPosition',
            '/proxies/v8/cbplan/v1/archive',
            '/proxies/v8/cbplan/v1/read/:id',
            '/proxies/v8/cbplan/v1/list',
            '/proxies/v8/halloffame/read',
            '/proxies/v8/walloffame/read',
            '/proxies/v8/user/v1/cbplan',
            '/proxies/v8/karmapoints/read',
            '/proxies/v8/karmapoints/user/course/read',
            '/proxies/v8/claimkarmapoints',
            '/proxies/v8/login/entry',
            '/proxies/v8/user/totalkarmapoints',
            '/proxies/v8/cbplan/v1/admin/requestcontent',
            '/proxies/v8/storage/v1/spvReport/:reportType/:date/:fileName',
            '/proxies/v8/storage/v1/spvReportInfo/:date',
            '/proxies/v8/ehrms/details',
            '/proxies/v8/wheebox/read',
            '/proxies/v8/sunbirdigot/v4/search',
            '/proxies/v8/user/v1/content/recommend',
            '/proxies/v8/program/v2/admin/bulkEnroll',
            '/proxies/v8/operationalreports/admin/grantaccess',
            '/proxies/v8/openprogram/v1/enrol',
            '/proxies/v8/operationalreports/download',
            '/proxies/v8/halloffame/learnerleaderboard',
            '/proxies/v8/walloffame/learnerleaderboard',
            '/proxies/v8/otp/v3/generate',
            '/proxies/v8/otp/v3/verify',
            '/proxies/v8/user/otp/v2/extPatch',
            '/proxies/v8/operationalreports/v1/reportInfo',
            '/proxies/v8/operationalreports/leader/readaccess',
            '/proxies/v8/operationalreports/admin/readaccess',
            '/proxies/v8/workflow/admin/bulkupdate/getstatus',
            '/proxies/v8/workflow/admin/transition/bulkupdate',
            '/proxies/v8/workflow/admin/bulkuploadfile/download/:fileName',
            '/proxies/v8/surveys/mlsurvey/v1/details',
            '/proxies/v8/surveySubmissions/mlsurvey/v1/update/:id',
            '/proxies/v8/cloud-services/mlcore/v1/files/preSignedUrls',
            '/proxies/v8/observations/mlsurvey/v1/assessment/:id',
            '/proxies/v8/observationSubmissions/mlsurvey/v1/update/:id',
            '/proxies/v8/observations/mlsurvey/v1/entities',
            '/proxies/v8/cloud-services/mlcore/v1/files/upload',
            '/proxies/v8/course/v1/batch/getParticipants',
            '/proxies/v8/course/v1/batch/admin/getParticipants',
            '/proxies/v8/program/v2/batch/getParticipants',
            '/proxies/v8/catalog/v1/sector',
            '/proxies/v8/content/v2/discard/:id',
            '/proxies/v8/catalog/v1/sector/read/:sectorId',
            '/proxies/v8/catalog/v1/sector/create',
            '/proxies/v8/catalog/v1/subsector/create',
            '/proxies/v8/calendar/v4/read/:do_id',
            '/proxies/v8/calendar/v4/publish/:do_id',
            '/proxies/v8/calendar/v4/create',
            '/proxies/v8/calendar/v4/update/:do_id',
            '/proxies/v8/calendar/v4/retire/:do_id',
            '/proxies/v8/calendar/v1/bulkUpload',
            '/proxies/v8/careers/v4/read/:do_id',
            '/proxies/v8/careers/v4/publish/:do_id',
            '/proxies/v8/careers/v4/create',
            '/proxies/v8/careers/v4/update/:do_id',
            '/proxies/v8/careers/v4/retire/:do_id',
            '/proxies/v8/ext-forms/v1/form/create',
            '/v1/form/create',
            '/proxies/v8/ext-forms/v1/form/read',
            '/v1/form/read',
            '/proxies/v8/ext-forms/v1/form/update',
            '/v1/form/update',
            '/proxies/v8/ext-forms/v1/form/list',
            '/v1/form/list',
            '/proxies/v8/ext-forms/v1/form/fetchAll',
            '/v1/form/fetchAll',
            '/proxies/v8/microsite/read/insights',
            '/proxies/v8/msite/content/aggregation/search',
            '/proxies/v8/workflow/v2/userWFApplicationFieldsSearch',
            '/proxies/v8/ratings/v1/topReviews/:orgId',
            '/proxies/v8/demand/content/create',
            '/proxies/v8/demand/content/read/:do_id',
            '/proxies/v8/demand/content/delete/:do_id',
            '/proxies/v8/demand/content/search',
            '/proxies/v8/playList/create',
            '/proxies/v8/playList/update',
            '/proxies/v8/playList/search',
            '/proxies/v8/playList/delete/:do_id',
            '/proxies/v8/tenders/v4/read/:do_id',
            '/proxies/v8/tenders/v4/publish/:do_id',
            '/proxies/v8/tenders/v4/create',
            '/proxies/v8/tenders/v4/update/:do_id',
            '/proxies/v8/cloud-services/mlcore/v1/files/download',
            '/proxies/v8/user/assessment/v5/result',
            '/proxies/v8/user/assessment/v5/retake/:id',
            '/protected/v8/user/evaluate/assessment/submit/v5',
            '/proxies/v8/assessment/v5/read/:id',
            '/proxies/v8/question/v5/read',
            '/proxies/v8/interest/v1/create',
            '/proxies/v8/interest/v1/search',
            '/proxies/v8/interest/v1/assign',
            '/proxies/v8/interest/v1/read/:id',
            '/proxies/v8/assessment/save',
            '/proxies/v8/demand/content/v1/update/status',
            '/proxies/v8/orgBookmark/v1/create',
            '/proxies/v8/orgBookmark/v1/update',
            '/proxies/v8/orgBookmark/v1/search',
            '/proxies/v8/orgBookmark/v1/read/:id',
            '/proxies/v8/orgBookmark/v1/delete/:id',
            '/proxies/v8/playList/v2/search',
            '/proxies/v8/playList/read/:id/:orgId',
            '/proxies/v8/announcements/v1/create',
            '/proxies/v8/announcements/v1/update',
            '/proxies/v8/announcements/v1/search',
            '/proxies/v8/announcements/v1/read/:id',
            '/proxies/v8/announcements/v1/delete/:id',
            '/proxies/v8/assessment/savepoint',
            '/proxies/v8/playList/v2/create',
            '/proxies/v8/playList/v2/update',
            '/proxies/v8/playList/v2/read/:id/:playListId/:orgId',
            '/proxies/v8/cios/v1/onboardContent',
            '/proxies/v8/cios/v1/content/read/:contentId',
            '/proxies/v8/cios/v1/search/content',
            '/proxies/v8/cios/v1/content/delete/:contentId',
            '/proxies/v8/ciosIntegration/v1/loadContentFromExcel/:partnercode/:partnerId',
            '/proxies/v8/ciosIntegration/v1/readAllContentFromDb',
            '/proxies/v8/user/v2/bulkupload',
            '/proxies/v8/workflow/admin/v2/bulkupdate/transition',
            '/proxies/v8/playList/v1/search/program',
            '/proxies/v8/framework/v1/publish/:id',
            '/proxies/v8/workflow/admin/pending/request',
            '/proxies/v8/framework/v1/term/create',
            '/proxies/v8/framework/v1/term/update/:id',
            '/proxies/v8/framework/v1/read/:id',
            '/proxies/v8/v1/search/competenciesByOrg/:id',
            '/proxies/v8/mentoring/v1/mentors/share/:id',
            '/proxies/v8/mentoring/v1/mentors/createdSessions',
            '/proxies/v8/mentoring/v1/mentors/list',
            '/proxies/v8/mentoring/v1/mentors/details/:id',
            '/proxies/v8/mentoring/v1/form/read',
            '/proxies/v8/mentoring/v1/sessions/update/:id',
            '/proxies/v8/mentoring/v1/sessions/list',
            '/proxies/v8/mentoring/v1/sessions/details/:id',
            '/proxies/v8/mentoring/v1/sessions/share/:id',
            '/proxies/v8/mentoring/v1/sessions/enroll/:id',
            '/proxies/v8/mentoring/v1/sessions/unEnroll/:id',
            '/proxies/v8/mentoring/v1/sessions/start/:id',
            '/proxies/v8/mentoring/v1/mentees/joinSession/:id',
            '/proxies/v8/mentoring/v1/mentors/reports',
            '/proxies/v8/mentoring/v1/mentees/reports',
            '/proxies/v8/mentoring/v1/mentees/list',
            '/proxies/v8/mentoring/v1/sessions/enrolledMentees/:id',
            '/proxies/v8/mentoring/v1/platform/config',
            '/proxies/v8/mentoring/v1/profile/filterList',
            '/proxies/v8/mentoring/v1/profile/read',
            '/proxies/v8/mentoring/v1/mentors/upcomingSessions/:id',
            '/proxies/v8/mentoring/v1/feedback/submit/:id',
            '/proxies/v8/mentoring/v1/cloud-services/getSignedUrl',
            '/proxies/v8/mentoring/v1/mentees/homeFeed',
            '/proxies/v8/mentoring/v1/users/list',
            '/proxies/v8/ciosIntegration/v1/loadContentProgressFromExcel/:partnercode',
            '/proxies/v8/cios-enroll/v1/create',
            '/proxies/v8/cios-enroll/v1/courselist/byuserid',
            '/proxies/v8/cios-enroll/v1/readby/useridcourseid/:courseid',
            '/proxies/v8/user/v1/email/approvedDomains',
            '/proxies/v8/designation/upload',
            '/proxies/v8/designation/read/:id',
            '/proxies/v8/designation/update',
            '/proxies/v8/designation/create',
            '/proxies/v8/designation/delete/:id',
            '/proxies/v8/designation/search',
            '/proxies/v8/framework/v1/copy/:id',
            '/proxies/v8/competencyArea/upload',
            '/proxies/v8/competencyArea/search',
            '/proxies/v8/competencyTheme/upload',
            '/proxies/v8/competencyTheme/search',
            '/proxies/v8/competencySubTheme/upload',
            '/proxies/v8/competencySubTheme/search',
            '/proxies/v8/competencyArea/create',
            '/proxies/v8/competencyArea/delete/:id',
            '/proxies/v8/competencyArea/update',
            '/proxies/v8/competencyArea/read/:id',
            '/proxies/v8/competencyTheme/create',
            '/proxies/v8/competencyTheme/delete/:id',
            '/proxies/v8/competencyTheme/update',
            '/proxies/v8/competencyTheme/read/:id',
            '/proxies/v8/competencySubTheme/create',
            '/proxies/v8/competencySubTheme/delete/:id',
            '/proxies/v8/competencySubTheme/update',
            '/proxies/v8/competencySubTheme/read/:id',
            '/proxies/v8/halloffame/top/learners/:ministryOrgId',
            '/proxies/v8/halloffame/state/top/learners/:ministryOrgId',
            '/proxies/v8/walloffame/top/learners/:ministryOrgId',
            '/proxies/v8/walloffame/state/top/learners/:ministryOrgId',
            '/proxies/v8/competencySubTheme/create/term',
            '/proxies/v8/competencyTheme/create/term',
            '/proxies/v8/designation/create/term',
            '/proxies/v8/org/framework/read',
            '/proxies/v8/user/v3/search',
            '/proxies/v8/framework/v1/term/retire',
            '/proxies/v8/contentpartner/v1/create',
            '/proxies/v8/contentpartner/v1/update',
            '/proxies/v8/contentpartner/v1/read/:id',
            '/proxies/v8/contentpartner/v1/search',
            '/proxies/v8/contentpartner/v1/delete/:id',
            '/proxies/v8/mentoring/v1/entity-type/read',
            '/protected/v8/workflowhandler/profileApprovalSearch',
            '/proxies/v8/mentoring/v1/entity/list',
            '/proxies/v8/data/v2/system/settings/get/:id',
            '/proxies/v8/mentoring/v1/sessions/update',
            '/proxies/v8/cqfquestionset/v2/create',
            '/proxies/v8/cqfquestionset/v2/review/:id',
            '/proxies/v8/cqfquestionset/v2/hierarchy/update',
            '/proxies/v8/halloffame/v1/mdoleaderboard',
            '/proxies/v8/halloffame/v1/state/mdoleaderboard',
            '/proxies/v8/halloffame/v1/userleaderboard',
            '/proxies/v8/walloffame/v1/mdoleaderboard',
            '/proxies/v8/walloffame/v1/state/mdoleaderboard',
            '/proxies/v8/walloffame/v1/userleaderboard',
            '/proxies/v8/ciosIntegration/v1/file/info/:partnerId',
            '/protected/v8/user/evaluate/assessment/submit/v6',
            '/proxies/v8/ciosIntegration/v1/deleteContent',
            '/proxies/v8/storage/v1/uploadCiosIcon',
            '/proxies/v8/storage/v1/uploadCiosContract',
            '/proxies/v8/storage/v1/downloadCiosContract/:fileName',
            '/proxies/v8/serviceregistry/v1/callExternalApi',
            '/proxies/v8/serviceregistry/config/create',
            '/proxies/v8/serviceregistry/config/delete/:id',
            '/proxies/v8/serviceregistry/config/search',
            '/proxies/v8/serviceregistry/config/fetch',
            '/proxies/v8/comment/v1/addFirst',
            '/proxies/v8/comment/v1/addNew',
            '/proxies/v8/comment/v1/update',
            '/proxies/v8/comment/v1/getAll',
            '/proxies/v8/comment/v1/multipleWorkflows',
            '/proxies/v8/comment/v1/delete/:commentId',
            '/proxies/v8/comment/v1/setStatusToResolved',
            '/proxies/v8/comment/v1/resolve/:commentId',
            '/proxies/v8/cqfquestionset/questionset/create',
            '/proxies/v8/cqfquestionset/submit',
            '/proxies/v8/cqfquestionset/result',
            '/proxies/v8/cqfquestionset/questionset/update',
            '/proxies/v8/cqfquestionset/read/:assessmentIdentifier/:contentId/:versionKey',
            '/proxies/v8/questionset/autoPublish/:id',
            '/proxies/v8/searchBy/:version/:key',
            '/proxies/v8/cqfquestionset/question/list',
            '/proxies/v8/private/mlsurvey/api/v1/surveys/createSolutionTemplate',
            '/proxies/v8/private/mlsurvey/api/v1/questions/bulkCreate',
            '/proxies/v8/private/mlsurvey/api/v1/surveys/importSurveryTemplateToSolution/:id',
            '/proxies/v8/private/mlsurvey/api/v1/surveys/mapSurverySolutionToProgram/:id',
            '/proxies/v8/private/mlsurvey/api/v1/solutions/importFromSolution',
            '/proxies/v8/private/mlcore/api/v1/programs/list',
            '/proxies/v8/private/mlcore/api/v1/admin/dbFind/solutions',
            '/proxies/v8/private/mlcore/api/v1/solutions/list',
            '/proxies/v8/cqfquestionset/listEntry',
            '/proxies/v8/template/api/v1/download/sampleTemplate',
            '/proxies/v8/template/api/v1/upload',
            '/proxies/v8/template/api/v1/validate',
            '/proxies/v8/template/api/v1/survey/create',
            '/proxies/v8/template/api/v1/survey/getSolutions',
            '/proxies/v8/template/api/v1/survey/downloadSolutions',
            '/proxies/v8/organisation/v1/getCompetencyDesignationMappingFile/sample/:frameworkId',
            '/proxies/v8/organisation/v1/competencyDesignationMappings/bulkUpload/:frameworkId',
            '/proxies/v8/organisation/v1/competencyDesignationMappings/bulkUpload/progress/details/:orgId',
            '/proxies/v8/organisation/v1/competencyDesignationMappings/download/:fileName',
            '/proxies/v8/national/learning/week/insights',
            '/proxies/v8/state/learning/week/insights',
            '/proxies/v8/designation/v1/orgMapping/sample/:frameworkId',
            '/proxies/v8/designation/v1/orgMapping/bulkUpload/:orgId/:frameworkId',
            '/proxies/v8/designation/v1/orgMapping/bulkUpload/progress/details/:orgId',
            '/proxies/v8/designation/v1/orgMapping/download/:fileName',
            '/proxies/v8/ciosIntegration/v1/read/content/:partnercode/:externalid',
            '/proxies/v8/ciosIntegration/v1/search/content',
            '/proxies/v8/ciosIntegration/v1/update/content',
            '/proxies/v8/contentpartner/v1/readbypartnercode/:partnercode',
            '/proxies/v8/public/assessment/v1/question/list',
            '/proxies/v8/public/assessment/v1/read/:id',
            '/proxies/v8/public/assessment/v5/question/list',
            '/proxies/v8/public/assessment/v5/read',
            '/proxies/v8/public/assessment/v5/assessment/submit',
            '/proxies/v8/public/assessment/v4/assessment/submit',
            '/proxies/v8/public/assessment/v5/result',
            '/proxies/v8/operationalreports/v2/download/:rootOrgId',
            '/proxies/v8/storage/v1/uploadCiosLogsFile',
            '/proxies/v8/storage/v1/downloadCiosLogs/:fileName',
            '/proxies/v8/serviceregistry/v1/callexternalapibyid/:id',
            '/proxies/v8/user/events/list/:uid',
            '/proxies/v8/event/batch/enroll',
            '/proxies/v8/eventprogress/v1/event/state/update',
            '/proxies/v8/user/event/read/:id',
            '/proxies/v8/user/event/state/read',
            '/proxies/v8/comment/search',
            '/proxies/v8/comment/list',
            '/proxies/v8/comment/v1/like',
            '/proxies/v8/comment/v1/like/read',
            '/proxies/v8/comment/report',
            '/proxies/v8/comment/delete/reported',
            '/proxies/v8/serviceregistry/config/update',
            '/proxies/v8/serviceregistry/config/read/:id',
            '/proxies/v8/bp/v1/bpreport/status',
            '/proxies/v8/bp/v1/generate/report',
            '/proxies/v8/bp/v1/bpreport/download/:orgId/:courseId/:batchId/:fileName',
            '/proxies/v8/customselfregistration',
            '/proxies/v8/feedDiscussion/create',
            '/proxies/v8/feedDiscussion/update',
            '/proxies/v8/feedDiscussion/read/:id',
            '/proxies/v8/feedDiscussion/question/delete/:id',
            '/proxies/v8/feedDiscussion/search',
            '/proxies/v8/feedDiscussion/question/like/:id',
            '/proxies/v8/org/ext/v1/update',
            '/proxies/v8/customselfregistration/listallqrs',
            '/proxies/v8/comment/v1/likedComments',
            '/proxies/v8/customselfregistration/upload/logo/gcpcontainer',
            '/proxies/v8/customselfregistration/isregistrationqractive',
            '/proxies/v8/community/v1/create',
            '/proxies/v8/community/v1/update',
            '/proxies/v8/community/v1/read/:communityId',
            '/proxies/v8/community/v1/delete/:communityId',
            '/proxies/v8/feedDiscussion/answerPosts',
            '/proxies/v8/feedDiscussion/question/dislike/:id',
            '/proxies/v8/feedDiscussion/report',
            '/proxies/v8/feedDiscussion/uploadFile/:communityId/:discussionId',
            '/proxies/v8/looker/dashboard',
            '/protected/v8/workflowhandler/v2/transition',
            '/proxies/v8/learner/course/v4/user/enrollment/summary/:id',
            '/proxies/v8/learner/course/v4/user/enrollment/list/:id',
            '/proxies/v8/learner/course/v4/user/enrollment/details/:id',
            '/proxies/v8/courseRecommend/v1/courses',
            '/proxies/v8/community/v1/join',
            '/proxies/v8/community/v1/unjoin',
            '/proxies/v8/community/v1/user/communities',
            '/proxies/v8/community/v1/community/listuser',
            '/proxies/v8/community/v1/search',
            '/proxies/v8/community/v1/category/create',
            '/proxies/v8/community/v1/category/update',
            '/proxies/v8/community/v1/category/read/:categoryId',
            '/proxies/v8/community/v1/category/delete/:categoryId',
            '/proxies/v8/community/v1/category/list',
            '/proxies/v8/community/v1/subcategory/list',
            '/proxies/v8/serviceregistry/v1/callexternal/progressapibyid/:id',
            '/proxies/v8/interface/v1/mentors/details/:id',
            '/proxies/v8/feedDiscussion/updateAnswerPost',
            '/proxies/v8/community/v1/category/listAll',
            '/proxies/v8/courseRecommendation/create',
            '/proxies/v8/courseRecommendation/read/:id',
            '/proxies/v8/courseRecommendation/feedback',
            '/proxies/v8/chatbot/session/start',
            '/proxies/v8/chatbot/session/:id',
            '/proxies/v8/chatbot/message/feedback',
            '/proxies/v8/chatbot/message/content/feedback',
            '/proxies/v8/feedDiscussion/bookmark/:communityId/:discussionId',
            '/proxies/v8/feedDiscussion/unbookmark/:communityId/:discussionId',
            '/proxies/v8/feedDiscussion/bookmarkedDiscussions',
            '/proxies/v8/comment/v2/search',
            '/proxies/v8/event/v4/reject/:do_id',
            '/proxies/v8/mentoring/v1/reports/filterList',
            '/proxies/v8/mentoring/v1/reports/reportData',
            '/proxies/v8/feedDiscussion/communityFeed',
            '/proxies/v8/user/v2/event/bulkonboard/:eventId/:batchId',
            '/proxies/v8/user/v1/event/bulkonboard/status/:eventId',
            '/proxies/v8/user/v1/event/bulkonboard/download/:fileName',
            '/proxies/v8/community/v1/popular',
            '/proxies/v8/community/v1/report',
            '/proxies/v8/community/v1/fileUpload/:communityId',
            '/proxies/v8/nlp/search',
            '/proxies/v8/community/v1/topic/search',
            '/proxies/v8/user/mdo/trending/events',
            '/proxies/v8/user/featured/events',
            '/proxies/v8/user/events/enroll/summary',
            '/proxies/v8/feedDiscussion/answerPost/like/:id',
            '/proxies/v8/feedDiscussion/answerPost/delete/:id',
            '/proxies/v8/feedDiscussion/answerPost/dislike/:id',
            '/proxies/v8/thumbnail/v1/image/variations/course/:id',
            '/proxies/v8/thumbnail/v2/image/variations/course/:id',
            '/proxies/v8/community/v1/publish',
            '/proxies/v8/feedDiscussion/globalFeed',
            '/proxies/v8/user/events/v2/list/:uid',
            '/proxies/v8/feedDiscussion/v1/enrichData',
            '/proxies/v8/user/v5/public/search',
            '/proxies/v8/community/v1/user/communities/all',
            '/proxies/v8/community/v1/mdo/search',
            '/proxies/v8/chatbot/v3/search',
            '/proxies/v8/fetchUserToken',
            '/proxies/v8/chatbot/v3/upload/:id',
            '/proxies/v8/feedDiscussion/answerPostReply/create',
            '/proxies/v8/feedDiscussion/answerPostReply/read/:id',
            '/proxies/v8/feedDiscussion/answerPostReply/update',
            '/proxies/v8/feedDiscussion/answerPostReply/delete/:id',
            '/proxies/v8/certificate/dynamic/v1/generate',
            '/proxies/v8/learner/certreg/v2/certs/validate',
            '/proxies/v8/user/assessment/v7/result',
            '/protected/v8/user/evaluate/assessment/submit/v7',
            '/proxies/v8/public/assessment/v7/question/list',
            '/proxies/v8/user/assessment/v7/retake/:id',
            '/proxies/v8/public/assessment/v7/result',
            '/proxies/v8/org/ext/v2/update',
            '/proxies/v8/private/content/v4/update/:do_id',
            '/proxies/v8/feedDiscussion/answerPostReply/like/:id',
            '/proxies/v8/feedDiscussion/answerPostReply/dislike/:id',
            '/proxies/v8/private/content/v4/system/update/:do_id',
            '/proxies/v8/commentTree/v1/get',
            '/proxies/v8/search/v1/recent/create',
            '/proxies/v8/search/v1/recent/read',
            '/proxies/v8/search/v1/recent/delete',
            '/proxies/v8/search/v1/trending/create',
            '/proxies/v8/search/v1/trending/read',
            '/proxies/v8/comment/v3/search',
            '/proxies/v8/youtube/duration/:videoid',
            '/proxies/v8/feedDiscussion/admin/activatePost',
            '/proxies/v8/feedDiscussion/admin/removePost',
            '/proxies/v8/feedDiscussion/getReportStatistics',
            '/proxies/v8/workflow/blendedprogram/getUserApprovalDataInCsv',
            '/proxies/v8/workflow/blendedprogram/bulkApprovalDataFromCsv/:contentId',
            '/proxies/v8/user/profile/v1/extended',
            '/proxies/v8/user/profile/v1/extended/all/:id',
            '/proxies/v8/user/profile/v1/extended/serviceHistory/:id',
            '/proxies/v8/user/profile/v1/extended/education/:id',
            '/proxies/v8/user/profile/v1/extended/achievement/:id',
            '/proxies/v8/user/profile/v1/extended/update',
            '/proxies/v8/user/profile/v1/extended/delete',
            '/proxies/v8/extendedprofile/list/states',
            '/proxies/v8/extendedprofile/list/districts',
            '/proxies/v8/masterdata/list/degrees',
            '/proxies/v8/masterdata/list/institutions',
            '/proxies/v8/user/profile/v1/basic/:id',
            '/proxies/v8/v1/notifications/create',
            '/proxies/v8/v1/notifications/readById/:notificationId',
            '/proxies/v8/v1/notifications/list',
            '/proxies/v8/v1/notifications/read',
            '/proxies/v8/v1/notifications/delete',
            '/proxies/v8/v1/notifications/bulk/create',
            '/proxies/v8/v1/notifications/unread/count',
            '/proxies/v8/v1/notifications/reset/unread/count',
            '/proxies/v8/notificationSetting/upsert',
            '/proxies/v8/notificationSetting/read',
            '/proxies/v8/masterdata/update/degree',
            '/proxies/v8/masterdata/update/institution',
            '/proxies/v8/user/profile/v1/extended/locationDetails/:id',
            '/proxies/v8/chatbot/v3/feedbacks/save',
            '/proxies/v8/chatbot/v3/feedbacks/get',
            '/proxies/v8/accessSettings/v1/upsert',
            '/proxies/v8/organisation/v1/getMappingFile/sample/:frameworkId',
            '/proxies/v8/organisation/v1/hierarchy/bulkUpload/:frameworkId',
            '/proxies/v8/organisation/v1/hierarchy/progress/details/bulkUpload/:orgId',
            '/proxies/v8/organisation/v1/hierarchy/download/file/:fileName',
            '/proxies/v8/organisation/v1/hierarchy/download/:frameworkId',
            '/proxies/v8/user/v1/groups',
            '/proxies/v8/accessSettings/read/:contentId',
            '/proxies/v8/accessSettings/v1/delete/:contentId',
            '/proxies/v8/search/v1/recent/delete/timestamp/:timestamp',
            '/proxies/v8/org/framework/v1/create',
            '/proxies/v8/chatbot/v3/transcoder/stats',
            '/proxies/v8/chatbot/v3/global/search',
            '/proxies/v8/customFields/v1/create',
            '/proxies/v8/customFields/v1/read/:id',
            '/proxies/v8/customFields/v1/update',
            '/proxies/v8/customFields/v1/delete/:id',
            '/proxies/v8/customFields/v1/search',
            '/proxies/v8/customFields/v1/masterList/create',
            '/proxies/v8/user/profile/v1/extended/competencies/:userId',
            '/proxies/v8/connections/v1/profile/relationship/:userId',
            '/proxies/v8/customFields/v1/masterList/update',
            '/proxies/v8/customFields/v1/status/update',
            '/proxies/v8/framework/v1/category/update/:id',
            '/proxies/v8/user/profile/v1/update/additionalFields',
            '/proxies/v8/user/profile/v1/getAdditionalFields/:userId/:orgId',
            '/proxies/v8/content/v2/state/read',
            '/proxies/v8/support/ai/chat/start',
            '/proxies/v8/support/ai/chat/send',
            '/proxies/v8/customFields/v1/popup/update',
            '/proxies/v8/content/v2/state/update',
            '/protected/v8/connections/v3/connections/recommended',
            '/protected/v8/connections/v3/connections/recommended/mentors',
            '/protected/v8/connections/v2/connections/requests/blocked',
            '/proxies/v8/connections/block',
            '/proxies/v8/connections/user/v1/network/connections/list',
            '/proxies/v8/forms/v2/createForm',
            '/proxies/v8/forms/v2/updateForm',
            '/proxies/v8/forms/v2/getFormById',
            '/proxies/v8/forms/v2/saveFormSubmit',
            '/proxies/v8/forms/v2/getAllApplications',
            '/proxies/v8/forms/v2/getApplicationsById',
            '/proxies/v8/forms/v2/search',
            '/proxies/v8/forms/v2/submissions/search',
            '/proxies/v8/content/v4/mlcreate',
            '/proxies/v8/user/v1/assignedcourses',
            '/proxies/v8/collection/v1/hierarchy/initialize/:do_id',
            '/proxies/v8/collection/v1/discard/:do_id',
            '/proxies/v8/moderation/v1/language/detect',
            '/proxies/v8/content/v4/mlReview',
            '/proxies/v8/content/v4/ml/update/reviewStatus',
            '/proxies/v8/learner/course/v1/batch/delete',
            '/proxies/v8/pipeline/content/transcode/process/:id',
            '/proxies/v8/cbplan/v2/create',
            '/proxies/v8/cbplan/v2/update',
            '/proxies/v8/cbplan/v2/publish',
            '/proxies/v8/cbplan/v2/read/:id',
            '/proxies/v8/cbplan/v2/search',
            '/proxies/v8/cbplan/v2/archive',
            '/proxies/v8/consent/v1/acknowledge',
            '/proxies/v8/consent/v1/acknowledge/read/:contentId/:consentId',
            '/proxies/v8/user/v3/bulkupload',
            '/proxies/v8/user/v1/org-migration/sample-file/:orgHierarchyFrameworkId',
            '/proxies/v8/user/v1/org-migration/bulk-upload/:orgHierarchyFrameworkId',
            '/proxies/v8/user/v2/org-migration/bulk-upload/:orgHierarchyFrameworkId',
            '/proxies/v8/user/v1/org-migration/bulk-upload/progress/:orgId',
            '/proxies/v8/user/v1/org-migration/bulk-upload/result/:fileName',
            '/proxies/v8/assignment/v1/create',
            '/proxies/v8/assignment/v1/search',
            '/proxies/v8/assignment/v1/getAnswerById',
            '/proxies/v8/assignment/v1/submitDraft',
            '/proxies/v8/assignment/v1/submit',
            '/proxies/v8/assignment/v1/feedback',
            '/proxies/v8/storage/v1/bp/assignment/answer/:contentId/:batchId/:formId',
            '/proxies/v8/storage/v1/bp/assignment/answer/read/file',
            '/proxies/v8/org/level/hierarchy',
            '/proxies/v8/user/v2/assignedcourses',
            '/proxies/v8/v1/notifyAssignment/upload',
            '/proxies/v8/v1/notifyAssignment/submit',
            '/proxies/v8/v1/notifyAssignment/evaluate',
            '/proxies/v8/workflow/blendedprogram/remove/approved/user',
            '/proxies/v8/forms/v2/bulkGetApplicationsById',
            '/proxies/v8/workflow/blendedprogram/nominate',
            '/proxies/v8/promotionalcontent/v1/assignedto/users',
            '/proxies/v8/storage/v1/report/form/:reportType/:date/:formId/:fileName',
            '/proxies/v8/promotionalcontent/v1/metadata/upsert',
            '/proxies/v8/promotionalcontent/v1/delete/:identifier',
            '/proxies/v8/event/v1/cancel/:identifier',
            '/proxies/v8/masterdata/v1/search',
            '/proxies/v8/cios-enroll/v1/validation',
            '/proxies/v8/user/v2/password/reset',
            '/proxies/v8/otp/v4/verify',
            '/proxies/v8/user/v3/extPatch',
            '/proxies/v8/user/v1/assigned/externalcourses',
            '/proxies/v8/content/v1/retirement/schedule',
            '/proxies/v8/content/v1/retirement/validate/:identifier',
            '/proxies/v8/content/v4/copy',
            '/proxies/v8/content/v1/retirement/request/decide',
            '/proxies/v8/content/v1/retirement/status',
            '/proxies/v8/sso/create/:id',
            '/proxies/v8/sso/update/:id',
            '/proxies/v8/sso/read/:id',
            '/proxies/v8/contentpartner/register/v1/update',
            '/proxies/v8/contentpartner/register/v1/read/:id',
            '/proxies/v8/contentpartner/register/v1/search',
            '/proxies/v8/learningpathway/v1/enrol/:id',
            '/proxies/v8/contentpartner/register/v1/readbyid',
            '/public/v8/chatbot/v3/mobile/transcoder/stats',
            '/proxies/v8/extended/content/v1/read/:identifier',
            '/proxies/v8/learningpathway/v1/retire/:id',
            '/proxies/v8/achievement/dynamic/v1/generate',
            '/proxies/v8/learner/certreg/v2/achievement/validate',
            '/proxies/v8/forms/mdo/peersurvey',
            '/proxies/v8/forms/spv/peersurvey',
            '/proxies/v8/forms/spv/update/peersurvey/:surveyId',
            '/proxies/v8/forms/mdo/update/peersurvey/:surveyId',
            '/proxies/v8/contentpartner/v1/activate',
            '/proxies/v8/sso/validateSaml',
            '/proxies/v8/v1/notifications/mandatory/read',
            '/proxies/v8/v1/notifications/mandatory/list',
            '/proxies/v8/v1/notifications/mandatory',
            '/proxies/v8/learner/achievement/create',
            '/proxies/v8/learner/achievement/update',
            '/proxies/v8/learner/achievement/read/:id',
            '/proxies/v8/learner/achievement/delete',
            '/proxies/v8/learner/achievement/status/update',
            '/proxies/v8/learner/achievement/search',
            '/proxies/v8/learner/achievement/list',
            '/proxies/v8/knowledge/centre/create/:type',
            '/proxies/v8/knowledge/centre/update/:type/:id',
            '/proxies/v8/knowledge/centre/publish/:type',
            '/proxies/v8/knowledge/centre/delete/:type/:id',
            '/proxies/v8/knowledge/centre/spv/search',
            '/proxies/v8/forms/peersurvey/archive/:surveyId',
            '/proxies/v8/forms/peersurvey/publish/:surveyId',
            '/proxies/v8/forms/mdo/peersurvey/search',
            '/proxies/v8/forms/spv/peersurvey/search',
            '/proxies/v8/learner/v1/competency/read',
            '/proxies/v8/externaltraining/v4/read/:do_id',
            '/proxies/v8/externaltraining/v4/publish/:do_id',
            '/proxies/v8/externaltraining/v4/create',
            '/proxies/v8/externaltraining/v4/update/:do_id',
            '/proxies/v8/learner/achievement/v2/list',
            '/proxies/v8/externaltraining/batch/create',
            '/proxies/v8/forms/peersurvey/end/:surveyId',
            '/proxies/v8/forms/peersurvey/submit',
            '/proxies/v8/v1/notifications/peervalidation/list',
            '/proxies/v8/v1/notifications/v2/read',
            '/proxies/v8/externaltraining/v1/batch/getParticipants',
            '/proxies/v8/externaltraining/v1/bulkupload/:eventId/:batchId',
            '/proxies/v8/externaltraining/v1/bulkupload/status',
            '/proxies/v8/externaltraining/v1/bulkupload/download/:fileName',
            '/proxies/v8/user/v1/badge/details',
            '/proxies/v8/storage/v1/peervalidation/report/download',
            '/proxies/v8/dashboard/badgedetails/summary',
            '/proxies/v8/peersurvey/upload',
            '/proxies/v8/externaltraining/v1/bulkupload/sample',
            '/proxies/v8/event/batch/cert/template/add',
            '/proxies/v8/peervalidation/v1/report/initiate/:formId',
            '/proxies/v8/peervalidation/v1/list/report',
            '/proxies/v8/badge/dynamic/v1/generate',
            '/proxies/v8/content/v2/read/:do_id',
            '/proxies/v8/course/v1/hierarchy/:do_id',
            '/proxies/v8/operationalreports/v3/download/:rootOrgId',
            '/proxies/v8/ai/assessments/v1/generate',
            '/proxies/v8/ai/assessments/v1/download/:id',
            '/proxies/v8/ai/assessments/v1/status/:id',
            '/proxies/v8/ai/assessments/v1/history',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/list',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/read/:id',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/publish',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/reject',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/items/reject',
            '/proxies/v8/ai/cbp/v1/course/suggestions',
            '/proxies/v8/ai/cbp/v1/designation/search',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/items/update',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/course/add',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/course/remove',
            '/proxies/v8/ai/cbp/v1/designation/approval-requests/list',
            '/proxies/v8/ai/cbp/v1/designation/approval-requests/approve',
            '/proxies/v8/ai/cbp/v1/designation/approval-requests/reject',
            '/proxies/v8/workflow/aiAssessment/transition',
            '/proxies/v8/workflow/aiAssessment/search',
            '/proxies/v8/workflow/aiAssessment/getUserWF',
            '/proxies/v8/contenthealth/v1/report/:id',
            '/proxies/v8/contenthealth/v1/summary',
            '/proxies/v8/ai/cbp/v1/mdo/approval-requests/publish/retry',
            '/proxies/v8/bp/v2/generate/report',
            '/proxies/v8/bp/v2/bpreport/status',
            '/proxies/v8/content/v5/dictionary',
            '/proxies/v8/user/v1/role/assign',
            '/proxies/v8/read/content-progres/ngo/:do_id',
            '/proxies/v8/content-progres/ngo/:do_id',
            '/proxies/v8/comment/v1/ngo/addFirst',
            '/proxies/v8/volunteer/ratings/v1/read/:activity_id/:type',
            '/proxies/v8/volunteer/ratings/v1/read',
            '/proxies/v8/learner/achievement/ngo/list',
            '/proxies/v8/volunteer/user/v2/insights',
            '/proxies/v8/org/ngo/v1/read',
            '/proxies/v8/api/user/volunteer/v1/read',
            '/proxies/v8/user/ngo/profile/v1/basic',
            '/proxies/v8/user/ngo/profile/v1/extended/all',
            '/proxies/v8/user/ngo/profile/v1/getAdditionalFields',
            '/proxies/v8/learner/course/v4/user/ngo/enrollment/summary',
            '/proxies/v8/learner/course/v4/user/ngo/enrollment/details',
            '/proxies/v8/bp/v2/bpreport/list',
            '/proxies/v8/learner/course/v4/user/ngo/enrollment/list',
            '/proxies/v8/ai/chatbot/v1/sessions/create',
            '/proxies/v8/ai/chatbot/v1/sessions/list',
            '/proxies/v8/ai/chatbot/v1/sessions/history/:id',
            '/proxies/v8/ai/chatbot/v1/sessions/turn/:id',
            '/proxies/v8/formsConfig/v1/create',
            '/proxies/v8/formsConfig/v1/read',
            '/proxies/v8/formsConfig/v1/update',
            '/proxies/v8/org/v1/status/update',
            '/proxies/v8/course/v2/unenroll',
            '/proxies/v8/course/v1/reenroll',
            '/proxies/v8/user/profile/v2/basic',
            '/proxies/v8/user/profile/v2/extended/all',
            '/proxies/v8/user/profile/v2/extended',
            '/proxies/v8/user/profile/v2/getAdditionalFields',
            '/proxies/v8/learner/achievement/v1/list',
            '/proxies/v8/read/v5/content-progres/:do_id',
            '/proxies/v8/v5/content-progres/:do_id',
            '/proxies/v8/learner/course/v5/user/enrollment/list',
            '/proxies/v8/learner/course/v5/user/enrollment/details',
            '/proxies/v8/learner/course/v5/user/enrollment/summary',
            '/proxies/v8/composite/v5/search',
            '/proxies/v8/user/nongovt/v1/bulkupload',
            '/proxies/v8/ratings/v1/read/:activity_id/:type',
            '/proxies/v8/user/content/info',
            '/proxies/v8/user/v1/learning/dictionary',
            '/proxies/v8/content/admin/v1/durationSync/:do_id',
            '/proxies/v8/content/admin/v1/replaceVideo',
            '/proxies/v8/program/coordinator/:do_id',
            '/proxies/v8/program/coordinator/list/:do_id',
            '/proxies/v8/program/coordinator/roles',
            '/proxies/v8/program/coordinator/bulk-upload/:do_id',
            '/proxies/v8/program/coordinator/bulk-upload/:do_id/status/:identifier',
            '/proxies/v8/program/coordinator/bulk-upload/:do_id/download/:fileName',
            '/proxies/v8/batch/v1/enrollment/qrcode/download/:do_id/:batch_id',
            '/proxies/v8/batch/v1/enrollment/qrcode/status/:do_id/:batch_id',
            '/proxies/v8/composite/v4/bp/search',
            '/proxies/v8/formsConfig/v2/create',
            '/proxies/v8/formsConfig/v2/update',
            '/proxies/v8/cios-enroll/v1/search',
            '/proxies/v8/scorm/v1/validate',
            '/proxies/v8/scorm/v1/status',
            '/proxies/v8/program/admin/coordinator/upsert/:do_id',
            '/proxies/v8/cios/v2/content/read/:contentId',
            '/proxies/v8/cbplan/v3/create',
            '/proxies/v8/cbplan/v3/update',
            '/proxies/v8/cbplan/v3/publish',
            '/proxies/v8/cbplan/v3/read/:id',
            '/proxies/v8/cbplan/v3/search',
            '/proxies/v8/cbplan/v3/archive',
            '/proxies/v8/cbplan/v3/user/dictionary',
            '/proxies/v8/cios-enroll/v1/karmapoints/deductionrule',
            '/proxies/v8/karmawallet/v1/summary',
            '/proxies/v8/karmawallet/v1/transactions',
            '/proxies/v8/karmawallet/v1/redeem',
            '/proxies/v8/karmawallet/v1/redeem/status/:id',
            '/proxies/v8/cios-enroll/v2/readby/useridcourseid/:courseid',
            '/proxies/v8/usergroup/v1/create',
            '/proxies/v8/usergroup/v1/update',
            '/proxies/v8/usergroup/v1/read/:id',
            '/proxies/v8/usergroup/v1/delete/:id',
            '/proxies/v8/usergroup/v1/search',
            '/proxies/v8/cbplan/v4/create',
            '/proxies/v8/cbplan/v4/update',
            '/proxies/v8/cbplan/v4/publish',
            '/proxies/v8/cbplan/v4/read/:id',
            '/proxies/v8/cbplan/v4/admin/read/:id',
            '/proxies/v8/cbplan/v4/search',
            '/proxies/v8/cbplan/v4/archive',
            '/proxies/v8/action/ca/v1/publish/:id',
            '/proxies/v8/ca/questionset/v1/publish/:id',
            '/proxies/v8/cbplan/v4/user/dictionary',
            '/proxies/v8/user/v2/content/info',
            '/proxies/v8/program/admin/coordinator/upsert/:do_id',
            '/proxies/v8/ai/assessments/v1/questions/create/:id',
            '/proxies/v8/ai/assessments/v1/questions/update/:id',
            '/proxies/v8/ai/assessments/v1/questions/delete/:id',
            '/proxies/v8/ai/assessments/v1/questions/order/:id',
            '/proxies/v8/v1/content/ca/retire',
            '/proxies/v8/ca/questionset/v1/update/:id',
            '/proxies/v8/ca/questionset/v1/create',
            '/proxies/v8/ca/questionset/v1/hierarchy/update',
            '/proxies/v8/action/content/ca/v1/create',
            '/proxies/v8/action/content/ca/v1/update/:do_id',
            '/proxies/v8/action/content/ca/v1/hierarchy/update',
        ],
}
