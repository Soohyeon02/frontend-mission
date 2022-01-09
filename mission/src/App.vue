<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <div id="app">
  <input v-model="message">
  <button @click="changeInput">제출</button>
  <button @click="noticeInputAndNumber">알림</button>
  <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: '',
      arr: [],
      count: 0,
    };
  },
  methods: {
    changeInput() {
      this.message = this.message.split('');
      this.arr = this.message.shift();
      this.message.push(this.arr);
      this.message = this.message.join('');
    },
    noticeInputAndNumber() {
      this.count += 1;
      alert(`${this.message} ${this.count}`);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
