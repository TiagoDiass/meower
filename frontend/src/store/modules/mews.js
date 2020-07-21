import Vue from 'vue';

const inititalState = () => ({
  mews: [],
});

const state = inititalState();

const getters = {
  getMews(state) {
    return state.mews;
  },
};

const actions = {
  async fetchMews({ commit }) {
    const response = await Vue.prototype.$httpClient.get('/mews');

    commit('setMews', response.data.data);
  },
};

const mutations = {
  setMews(state, data) {
    state.mews = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
