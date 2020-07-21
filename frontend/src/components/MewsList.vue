<template>
  <div id="mewList">
    <Mew v-for="mew in mews" :mew="mew" :key="mew.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Mew from './Mew';

export default {
  name: 'mew-list',

  data: () => ({
    mewsCopy: [],
  }),

  components: {
    Mew,
  },

  computed: {
    ...mapGetters({
      mews: 'mews/getMews',
    }),
  },
};
</script>

<style>
#mewList {
  margin-top: 20px;
  width: 75%;
}

@media (max-width: 800px) {
  #mewList {
    width: 100%;
  }
}

@media (max-width: 566px) {
  #mewList {
    width: 90%;
  }
}
</style>
