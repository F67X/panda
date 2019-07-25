<template>
  <div class="home" @click="changeBg">
    <Top />
    <Nav />
    <BGCanvas ref="CBG"/>
    <footer>
      <span>©2018-2100 Torbjorn. All rights reserved.</span>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/home/HomeTop";
import Nav from "@/components/home/HomeNav";
import BGCanvas from "@/components/home/HomeBG";
export default {
  name: "home",
  components: {
    Nav,
    Top,
    BGCanvas
  },
  data() {
    return {
      
    };
  },
  mounted() {},
  methods:{
    changeBg(){
      this.$refs.CBG.clearCanvas();
    }
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position:relative;
  footer {
    height: 45px;
    line-height: 45px;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    span {
      font-size: 12px;
      color: rgba($color: #fff, $alpha: 0.7);
    }
  }
}
</style>

