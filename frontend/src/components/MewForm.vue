<template>
  <div class="mew-form">
    <form>
      <label for="username">Your username</label>
      <input type="text" id="username" placeholder="Mr. Potato" v-model="form.username" />

      <label for="mew">Mew</label>
      <textarea
        id="mew"
        cols="30"
        rows="5"
        placeholder="Hello World!"
        v-model="form.mewBody"
      ></textarea>
    </form>

    <button class="button" @click="postMew">Send your mew 😸</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'mew-form',

  data: () => ({
    form: {
      username: '',
      mewBody: '',
    },
  }),

  methods: {
    ...mapActions({
      postMewAction: 'mews/postMew',
      fetchMews: 'mews/fetchMews',
    }),

    async postMew() {
      const response = await this.postMewAction(this.form);

      if (response.status == 201) {
        this.$swal({
          icon: 'success',
          title: 'Good job',
          text: response.message,
        });
        this.fetchMews();
      } else {
        this.$swal({
          icon: 'error',
          title: 'Ops...',
          text: response.message,
        });
      }
    },
  },
};
</script>

<style>
.mew-form {
  margin-top: 14px;
  padding: 16px 28px;
  width: 60%;
  border: 1px solid #0004;
  font-size: 1.1rem;
  border-radius: 14px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.2);
}

.mew-form form label {
  display: block;
  margin-top: 12px;
  font-weight: 700;
}

.mew-form form input,
.mew-form form textarea {
  display: block;
  width: 100%;
  padding: 10px 6px;
  outline: none;
  margin-top: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.95rem;
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 8px;

  transition: box-shadow 0.2s;
}

.mew-form form textarea {
  resize: none;
}

.mew-form form input:focus,
.mew-form form textarea:focus {
  box-shadow: 0 0 4px #3498db;
}

.button {
  margin-top: 14px;
  padding: 12px 6px;
  width: 100%;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  outline: none;
  background-color: #3498db;
  color: white;
  border-radius: 9px;
  cursor: pointer;

  transition: box-shadow 0.2s, filter 0.2s;
  font-family: 'Source Sans Pro', sans-serif;
}

.button:hover {
  filter: brightness(0.92);
  box-shadow: 0 0 4px #3498db;
}

.button:active {
  filter: brightness(0.88);
}

@media (max-width: 825px) {
  .mew-form {
    width: 90%;
  }
}
</style>
