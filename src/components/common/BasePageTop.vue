<template>
  <div class="home-header">
    <header>
      <el-button v-if="hasBack" icon="el-icon-d-arrow-left" @click="backPrevUrl">首页</el-button>
      <h1 class="titles">P A N D A</h1>
    </header>
  </div>
</template>
<script>
export default {
  name: "pageTop",
  props: {
    hasBack: Boolean
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    backPrevUrl() {
      console.log(this);
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
.home-header {
  width: 100%;
  position: relative;
  top: 0;
  z-index: 22;
  .el-button {
    position: absolute;
    left: 10px;
    top: 10px;
    background: transparent;
    color: #fff;
    border: none;
  }
  .titles {
    width: 100%;
    height: 60px;
    font-size: 28px;
    line-height: 60px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    color: #fff;
    font-family: "微软雅黑";
  }
}
</style>