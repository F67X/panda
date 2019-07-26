<template>
  <div :class="states?'open':''">
    <div v-show="cover" class="page-cover" @click="toggleMenu"></div>
    <div style="padding:0 15px;">
      <el-row :gutter="30">
        <el-col class="position-line" :span="24">
          <el-col :span="24" style="padding:0 25px;">
            <el-col :span="12" class="logo-con">
              <span>
                <router-link to="/">
                  <img :src="logo" />
                  <span>
                    <a class="logo-txt" href="#">
                      <span>PAN</span>
                      <span>da</span>
                    </a>
                  </span>
                </router-link>
              </span>
            </el-col>
            <el-col :span="12" class="menu-btn">
              <div id="menu-sandwich">
                <span class="menu-icon" @click="toggleMenu">
                  <span class="menu-icon-top">
                    <span class="menu-icon-inner"></span>
                  </span>
                  <span class="menu-icon-bottom">
                    <span class="menu-icon-inner"></span>
                  </span>
                </span>
              </div>
            </el-col>
          </el-col>
        </el-col>

        <el-row class="change">
          <div class="pull-top">
            <video id="video" ref="videoSrc" :poster="posterBg" autoplay muted loop playsinline></video>
          </div>
        </el-row>
      </el-row>
    </div>
    <slideNav :switchs="slideSwitch" />
  </div>
</template>
<script>
import slideNav from "@/components/SecondEditon/SlideNav.vue";
export default {
  name: "home-v2",
  components: {
    slideNav
  },
  data() {
    return {
      states: false,
      cover: true,
      posterBg: require("../../assets/images/top-bg.png"),
      logo: require("../../assets/images/panda2.png"),
      videoSrc: require("../../assets/videos/home_video.mp4"),
      slideSwitch: false
    };
  },
  mounted() {
    this.$refs.videoSrc.src = this.videoSrc;
  },
  methods: {
    toggleMenu() {
      let video = document.querySelector("#video");
      this.states = !this.states;
      this.slideSwitch = !this.slideSwitch;
      if (this.states === true) {
        video.pause();
      } else {
        video.play();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.logo-txt {
  outline: none;
  text-decoration: none;
  position: relative;
  font-size: 3em;
  color: #9e9ba4;
  display: inline-block;
}

.logo-txt {
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.2;
  overflow: hidden;
  color: #adaa88;
}

.logo-txt span {
  position: relative;
  display: inline-block;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}

.logo-txt:hover span:first-of-type {
  color: #fff;
}

.logo-txt:hover span:last-of-type {
  color: #1e1a1b;
}

.logo-txt span::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  line-height: 0.8;
  -webkit-transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
}

.logo-txt span:last-of-type::before {
  background: #1e1a1b;
}

.logo-txt:hover span:last-of-type::before,
.logo-txt span:first-of-type::before {
  -webkit-transform: translate3d(0, -150%, 0);
  transform: translate3d(0, -150%, 0);
}

.logo-txt:hover span:first-of-type::before,
.logo-txt span:last-of-type::before {
  -webkit-transform: translate3d(0, 150%, 0);
  transform: translate3d(0, 150%, 0);
}

.change {
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.2, 1, 0.23, 1) 0s;
}
.position-line {
  position: absolute;
  top: 5%;
  z-index: 3;
}
.logo-con {
  text-align: left;
}
.menu-btn {
  text-align: right;
}
.pull-top {
  height: 80vh;
  video {
    width: 100%;
  }
}
.page-cover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  background: #000;
  cursor: pointer;
  z-index: 1;
}

.menu-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  z-index: 66;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1),
    -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
}
.menu-icon-top,
.menu-icon-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
}
.menu-icon-top .menu-icon-inner,
.menu-icon-bottom .menu-icon-inner {
  -webkit-transition: background 0.8s cubic-bezier(0.2, 1, 0.23, 1),
    -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  transition: background 0.8s cubic-bezier(0.2, 1, 0.23, 1),
    -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1),
    background 0.8s cubic-bezier(0.2, 1, 0.23, 1);
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1),
    background 0.8s cubic-bezier(0.2, 1, 0.23, 1),
    -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  display: block;
  height: 2px;
  width: 24px;
  background: #fff;
  position: absolute;
  left: 0;
}
.menu-icon-top .menu-icon-inner {
  top: 12px;
  background: #000;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  transform: translateY(-5px);
}
.menu-icon-bottom .menu-icon-inner {
  bottom: 12px;
  background: #000;
  transform: translateY(5px);
}
.open {
  .change {
    transform: translate3d(-30%, 0, 0);
  }
  .page-cover {
    opacity: 0.5;
    visibility: visible;
    -webkit-transition: opacity 0.6s cubic-bezier(0.2, 1, 0.23, 1),
      visibility 0.6s steps(1, start);
    transition: opacity 0.6s cubic-bezier(0.2, 1, 0.23, 1),
      visibility 0.6s steps(1, start);
  }
  .menu-icon {
    transform: rotate(-90deg);
  }
  .menu-icon .menu-icon-top {
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1),
      -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .menu-icon .menu-icon-top .menu-icon-inner {
    -webkit-transform: translateY(-0.5px);
    transform: translateY(-0.5px);
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1),
      -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  }
  .menu-icon .menu-icon-bottom {
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1),
      -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .menu-icon .menu-icon-bottom .menu-icon-inner {
    -webkit-transform: translateY(0.5px);
    transform: translateY(0.5px);
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.23, 1),
      -webkit-transform 0.3s cubic-bezier(0.2, 1, 0.23, 1);
  }
}
</style>