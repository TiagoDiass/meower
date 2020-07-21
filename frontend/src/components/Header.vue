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
.header {
  margin-top: 16px;
}

.header h1 {
  font-weight: 400;
  font-size: 3rem;
  display: flex;
  justify-content: center;
}

@media (max-width: 940px) {
  .header h1 {
    font-size: 2rem;
  }
}

@media (max-width: 625px) {
  .header h1 {
    font-size: 1.5rem;
  }
}
</style>
