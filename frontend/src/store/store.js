import Vue from 'vue';
import Vuex from 'vuex';

import mews from './modules/mews';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mews,
  },
});
