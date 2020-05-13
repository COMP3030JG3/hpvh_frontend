//import { request } from '../utils/request'
export default {
    state: {
        dashBoardContent: "appointments",
        firstLoading: true
    },
    reducers: {
        switchDashBoardContent(state, key) {
            return { ...state, dashBoardContent: key };
        },
    },

    effects: {

    }
}