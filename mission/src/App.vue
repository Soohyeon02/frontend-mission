<template>
  <router-view />
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
      this.message = this.message.slice(1) + this.message.slice(0, 1);
    },
    noticeInputAndNumber() {
      this.count += 1;
      // eslint-disable-next-line
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
</style>
