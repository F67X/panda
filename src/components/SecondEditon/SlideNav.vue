<template>
  <div class="slide-nav" :class="{'open':switchs} ">
    <div class="menu-con">
      <el-row>
        <el-col :xs="24" :lg="10" :xl="10">
          <nav>
            <ul class="nav mb-2 h2">
              <li class="link-active first">
                <a href="http://tombiskup.com/" class="link-thick" title="Work">首页</a>
              </li>

              <li>
                <a href="http://tombiskup.com/about" class="link-thick" title="About">关于熊猫</a>
              </li>

              <li>
                <a href="http://tombiskup.com/contact" class="link-thick" title="Contact">联系方式</a>
              </li>
            </ul>
            <ul class="nav h5">
              <li class="first">
                <a href="https://blog.csdn.net/lqx930619" class="link-thick" title="Blog">博客</a>
              </li>
            </ul>
          </nav>
        </el-col>
        <el-col :xs="24" :lg="14" :xl="24">
          <p class="small a-5">
            <a href="http://behance.net/tombiskup" target="_blank">Behance</a>
            <br />
            <a href="http://instagram.com/tom.biskup" target="_blank">Instagram</a>
            <br />
            <a href="http://facebook.com/tomaszbiskupvisuals"></a>
            <a href="http://facebook.com/tombiskup" target="_blank">Facebook</a>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "slide-nav",
  data() {
    return {
      activeClass: "open"
    };
  },
  props: {
    switchs: Boolean
  }
};
</script>
<style lang="scss" scoped>
.slide-nav {
  width: 52%;
  background: #fff;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  visibility: hidden;
  transform: translateX(100%);
  transition: all 0.8s cubic-bezier(0.2, 1, 0.23, 1) 0s;
  overflow-y: auto;
  padding: 4.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.open.slide-nav {
  visibility: visible;
  transform: translateX(0);
  transition: transform 0.8s cubic-bezier(0.2, 1, 0.23, 1);
}
.menu-con {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
}
.menu-con ul.nav {
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: left;
}
.mb-2 {
  margin-bottom: 1.5rem !important;
}
.h2 {
  font-size: 1.55rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  color: inherit;
  line-height: 1.8;
}
.h5 {
  font-size: 1.25rem;
  line-height: 1.3;
}
small,
.small {
  font-size: 80%;
  font-weight: normal;
  line-height: 1.5rem;
  text-align: left;
}
.a-5 {
  opacity: 0.5;
}
p:last-child {
  margin-bottom: 0;
}

@keyframes link-hover {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
  }
  50% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
  }
  50.01% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
}
.menu-con a:not(.link-active) {
  display: inline-block;
}
.menu-con a:not(.link-active):after {
  content: "";
  display: block;
  position: relative;
  font-weight: 300;
  height: 1px;
  bottom: 1px;
  background: #000;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.menu-con a:not(.link-active):hover:not(.link-active):not(.hover):after {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.menu-con a.link-active,
.menu-con .link-active a {
  display: inline-block;
}
.menu-con a.link-active:after,
.menu-con .link-active a:after {
  content: "";
  display: block;
  position: relative;
  height: 1px;
  bottom: 1px;
  background: #000;
  -webkit-transform: scaleX(1) !important;
  transform: scaleX(1) !important;
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.menu-con a.link-thick:after,
.menu-con .link-active a:after {
  height: 2px;
  bottom: 3px;
}

a:not(.link-thick):hover:after {
  -webkit-animation: "link-hover" 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  animation: "link-hover" 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0s;
}
</style>
