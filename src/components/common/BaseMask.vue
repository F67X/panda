<template>
  <div class="base-mask">
    <div class="mask" v-show="mask"></div>
    <div class="preloader" v-show="mask">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
      <span class="line line-4"></span>
      <span class="line line-5"></span>
      <span class="line line-6"></span>
      <span class="line line-7"></span>
      <span class="line line-8"></span>
      <span class="line line-9"></span>
      <div>Loading</div>
    </div>
  </div>
</template>
<script>
export default {
    name:'base-mask',
    data(){
        return{
            mask:true
        }
    }
}
</script>
<style lang="scss" scoped>
.mask {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 1);
}
.preloader {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  margin-left: -35px;
}
div {
  color: #fff; // margin: 5px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 10px;
  letter-spacing: 2px;
}
.preloader .line {
  width: 1px;
  height: 12px;
  background: #fff;
  margin: 0 1px;
  display: inline-block;
  animation: opacity-2 1000ms infinite ease-in-out;
}
.preloader .line-1 {
  animation-delay: 800ms;
}
.preloader .line-2 {
  animation-delay: 600ms;
}
.preloader .line-3 {
  animation-delay: 400ms;
}
.preloader .line-4 {
  animation-delay: 200ms;
}
.preloader .line-6 {
  animation-delay: 200ms;
}
.preloader .line-7 {
  animation-delay: 400ms;
}
.preloader .line-8 {
  animation-delay: 600ms;
}
.preloader .line-9 {
  animation-delay: 800ms;
}
@keyframes opacity-1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacity-2 {
  0% {
    opacity: 1;
    height: 15px;
  }
  50% {
    opacity: 0;
    height: 12px;
  }
  100% {
    opacity: 1;
    height: 15px;
  }
}
</style>
