<template>
  <div class="mew">
    <h3>{{ mew.username }}</h3>
    <p>{{ mew.mewBody }}</p>
    <small>{{ postDate }}</small>
  </div>
</template>

<script>
export default {
  name: 'mew',

  props: {
    mew: {
      type: Object,
      required: true,
    },
  },

  computed: {
    postDate() {
      return new Date(this.mew.posted_at).toLocaleString();
    },
  },
};
</script>

<style>
.mew {
  padding: 16px 20px;
  background-color: #eee;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  transition: box-shadow 0.15s ease;
}

.mew:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.mew h3 {
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.mew p {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.mew small {
  align-self: flex-end;
}
</style>
