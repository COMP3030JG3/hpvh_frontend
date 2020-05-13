//import { request } from '../utils/request'
export default {
    state: {
        myContent: "appointments",
        tracksData: {},
        firstLoading: true
    },
    reducers: {
        switchMyContent(state, key) {
            return { ...state, myContent: key };
        },
        getTracksReducer(state, key) {
            return { ...state, tracksData: key };
        },
        setFirstLoading(state, key) {
            return { ...state, firstLoading: key };
        }
    },

    effects: {
        async getTracks(payload, rootState) {

        }
    }
}