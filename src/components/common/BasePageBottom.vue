<template>
  <div class="footer">
    <footer>
      <span>©2018-2100 L7X. All rights reserved. </span>
      <br/>
      <span>联系方式：</span>
      <a href="tel:+17795217177">17795217177</a> |
      <a href="mailto:l-7x@qq.com">l-7x@qq.com</a>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 22;
  footer {
    height: 65px;
    line-height: 26px;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    padding-top:10px;
    a,span {
      font-size: 12px;
      color: rgba($color: #fff, $alpha: 0.7);
    }
  }
}
</style>
