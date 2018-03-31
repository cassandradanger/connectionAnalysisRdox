import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        connections: [],
        connection: {},
    },
    actions: {
    },
    mutations: {
        addConnection(state, payload) {
            state.connections.push(payload);
        },
    },
});