<template>
  <div class="home-nav">
    <nav class="menu">
      <li>
        <router-link to="/user/">User</router-link>
      </li>
      <li>
        <router-link to="/case/">CODING</router-link>
      </li>
      <li>
        <router-link to="/news/">微博</router-link>
      </li>
      <li>
        <router-link to="/about/">知乎</router-link>
      </li>
    </nav>
  </div>
</template>
<script>
export default {
  name: "homenav",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.home-nav {
    width: 200px;
    position: absolute;
    top: 41%;
    left: 50%;
    margin-left: -100px;
    z-index: 10;
  nav {
    li {
      width: 200px;
      text-align: center;
    }
  }
}

.menu a {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  color: #000;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;
  padding: 3px 0;
  margin-bottom: 10px;
  cursor: pointer;
}
.menu a:hover {
  color: rgba($color: #000, $alpha: 0.7);
}
.menu a:hover:after,
.menu a:hover:before {
  width: 100%;
  left: 0;
}
.menu a:after,
.menu a:before {
  content: "";
  position: absolute;
  top: calc(100% + 5px);
  width: 0;
  right: 0;
  height: 3px;
}
.menu a:before {
  -webkit-transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
  transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
  background: #2196f3;
}
.menu a:after {
  -webkit-transition: width 0.3s cubic-bezier(0.29, 0.18, 0.26, 0.83);
  transition: width 0.3s cubic-bezier(0.29, 0.18, 0.26, 0.83);
  background: #7d7d7d;
}
</style>