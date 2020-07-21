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

    let mewsArrayOrderedByTimestamp = [];

    for (let i = response.data.data.length - 1; i >= 0; i--) {
      mewsArrayOrderedByTimestamp.push(response.data.data[i]);
    }

    commit('setMews', mewsArrayOrderedByTimestamp);
  },

  async postMew(_, { username, mewBody }) {
    const response = await Vue.prototype.$httpClient.post('/mews/create', {
      username,
      mewBody,
    });

    if (response.data.status == 201) {
      return {
        status: response.data.status,
        message: 'Mew posted succesfully',
      };
    } else {
      return {
        status: response.data.status,
        message: response.data.message,
      };
    }
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
