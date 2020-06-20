// states
export const state = () => ({
    loggedIn: false
})

// mutations
export const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_LOGGED_IN(state, status) {
        state.loggedIn = status;
    }
}

// actions
export const actions = {
    login({ commit }, user) {
        commit('SET_LOGGED_IN', true);
        commit('SET_USER', user);
    },
    logout({ commit }) {
        commit('SET_LOGGED_IN', false);
        commit('SET_USER', {});
    }
}

// Getters
export const getters = {
    isLoggedIn: state => state.loggedIn,
    authenticated: state => state.user,
}
