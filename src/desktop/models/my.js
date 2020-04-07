export const my = {
    state: {
        myContent: "appointments",
    },
    reducers: {
        switchMyContent(state, key) {
            return { myContent: key };
        },
    },
    effects: {

    }
}