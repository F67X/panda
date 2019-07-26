<template>
  <div class="home">
    <Nav />
    <div class="homebg"  @click="changeBg">
      <BGCanvas ref="CBG" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/FrontPage/home/HomeNav";
import BGCanvas from "@/components/FrontPage/home/HomeBG";
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
  .homebg{
    width:100%;
    height:100%;
  }
}
</style>

