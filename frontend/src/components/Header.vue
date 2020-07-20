<template>
  <header class="header">
    <h1>Meower · The Twitter for Cats 😸</h1>
  </header>
</template>

<script>
export default {
  name: 'header',
};
</script>

<style>
.header h1 {
  font-weight: 400;
  font-size: 3rem;
  display: flex;
  justify-content: center;
}

@media (max-width: 820px) {
  .header h1 {
    font-size: 2rem;
  }
}
</style>
