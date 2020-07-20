<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  font-family: 'Source Sans Pro', sans-serif;
  width: 80%;
}
</style>
