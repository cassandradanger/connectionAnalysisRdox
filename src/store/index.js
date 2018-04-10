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
        editConnection(state, payload) {
            state.connections.map((item) => {
                if(item.id === payload.id){
                    item.connectionName = payload.connectionName;
                    item.communicationMethod = payload.communicationMethod;
                    item.httpsURL = payload.httpsURL;
                    item.httpsRequest = payload.httpsRequest;
                    item.tcpIP = payload.tcpIP;
                    item.tcpPort = payload.tcpPort;
                    item.status = payload.status;
                    item.id = payload.id;
                    return state.connections;
                }
            });
        },
    },
});