<template>
  <div class="mew-form">
    <form>
      <label for="username">Your username</label>
      <input type="text" id="username" placeholder="Mr. Potato" />

      <label for="mew">Mew</label>
      <input type="text" id="mew" placeholder="Hello world!" />
    </form>

    <button class="button">Send your mew 😸</button>
  </div>
</template>

<script>
export default {
  name: 'mew-form',
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

.mew-form form input {
  display: block;
  width: 100%;
  padding: 10px 6px;
  outline: none;
  margin-top: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.95rem;
  border-radius: 8px;

  transition: box-shadow 0.15s;
}

.mew-form form input:focus {
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
}

.button:hover {
  filter: brightness(0.92);
  box-shadow: 0 0 4px #3498db;
}

.button:active {
  filter: brightness(0.88);
}
</style>
