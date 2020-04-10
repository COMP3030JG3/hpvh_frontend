import requests from '../utils/requests'
export const my = {
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
            await requests.get('/tracks/' + payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(
                    (response) => {

                        this.getTracksReducer(JSON.parse(JSON.stringify(response.data.data)))
                        this.setFirstLoading(false);
                    }
                )
        }
    }
}