<template>
  <div class="home-nav">
    <nav class="menu">
      <li>
        <span>Blog</span>
      </li>
      <li>
        <span>CODING</span>
      </li>
      <li>
        <span>微博</span>
      </li>
      <li>
        <span>知乎</span>
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
  height: calc(100% - 105px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  nav {
    li {
      width: 200px;
      text-align: center;
    }
  }
}

.menu span {
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
.menu span:hover {
  color: rgba($color: #000, $alpha: 0.7);
}
.menu span:hover:after,
.menu span:hover:before {
  width: 100%;
  left: 0;
}
.menu span:after,
.menu span:before {
  content: "";
  position: absolute;
  top: calc(100% + 5px);
  width: 0;
  right: 0;
  height: 3px;
}
.menu span:before {
  -webkit-transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
  transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
  background: #2196f3;
}
.menu span:after {
  -webkit-transition: width 0.3s cubic-bezier(0.29, 0.18, 0.26, 0.83);
  transition: width 0.3s cubic-bezier(0.29, 0.18, 0.26, 0.83);
  background: #7d7d7d;
}
</style>