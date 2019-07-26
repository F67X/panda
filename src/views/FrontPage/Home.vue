<template>
  <div class="home">
    <BasePageTop :hasBack="hasBack" />
    <transition>
      <router-view></router-view>
    </transition>
    <BasePageBottom />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      hasBack:false
    };
  },
  mounted() {},
  methods: {
    changeBg() {
      this.$refs.CBG.clearCanvas();
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

