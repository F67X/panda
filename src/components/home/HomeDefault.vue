<template>
  <div class="home">
    <Nav />
    <BGCanvas ref="CBG"  @click="changeBg" />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/home/HomeNav";
import BGCanvas from "@/components/home/HomeBG";
export default {
  name: "home",
  components: {
    Nav,
    BGCanvas
  },
  data() {
    return {};
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
  position: absolute;
  top: 0;
}
</style>

