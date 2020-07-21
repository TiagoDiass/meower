<template>
  <div id="app">
    <Header />
    <MewForm />
    <MewList />
  </div>
</template>

<script>
import Header from './components/Header';
import MewForm from './components/MewForm';
import MewList from './components/MewsList';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    MewForm,
    MewList,
  },

  mounted() {
    this.fetchMews();
  },

  methods: {
    ...mapActions({
      fetchMews: 'mews/fetchMews',
    }),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}

html,
body {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fdfdfd;
}

#app {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

@media (max-width: 566px) {
  #app {
    width: 100%;
  }
}
</style>
