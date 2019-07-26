<template>
  <div class="home-bg">
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  name: "canvasbg",
  data() {
    return {
      canvas: null,
      points: [],
      color: [0, 0, 0],
      colorChange: 2,
      timer: 30
    };
  },
  created() {},
  mounted() {
    this.init({
      selector: "#canvas"
    });
  },
  methods: {
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.points = [];
      this.createPoints();
      this.draw();
    },
    init: function(info) {
      this.canvas = document.querySelectorAll(info.selector)[0];
      this.canvas.width = window.innerWidth * 2;
      this.canvas.height = window.innerHeight * 2;
      this.ctx = this.canvas.getContext("2d");
      this.createPoints();
      this.draw();
    },
    createPoints: function() {
      let x = -100;
      while (x < this.canvas.width + 200) {
        this.createPoint(x);
        x += 100;
      }
    },
    createPoint: function(x) {
      this.color[this.colorChange] += 10;
      for (let i = 0; i < 3; i++) {
        if (this.color[i] > 100) {
          this.color[i] = Math.floor(Math.random() * 100);
          this.colorChange = Math.floor(Math.random() * 3);
        }
      }
      this.points.push({
        x: x,
        y: this.canvas.height * 0.8 * Math.random() + this.canvas.height * 0.1,
        xspeed: Math.random() * 5 + 3,
        yspeed: Math.random() * 6 - 3,
        color: [this.color[0], this.color[1], this.color[2]]
      });
    },
    draw: function() {
      //   let that = this;
      //   window.requestAnimationFrame(function() {
      //     that.draw();
      //   });
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.timer -= 1;
      if (this.timer < 0) {
        console.log("new");
        this.createPoint(this.canvas.width + 500);
        this.timer = 30;
        this.points.shift();
      }
      for (let o = 1; o < this.points.length; o++) {
        this.points[o].x -= this.points[o].xspeed;
        this.points[o].y += this.points[o].yspeed;

        let p1 = this.points[o];
        let p2 = this.points[o - 1];
        let p3 = this.points[o - 2] || this.points[o - 1];

        let dir1 = {
          x: p2.x - p1.x,
          y: p2.y - p1.y
        };
        let dir2 = {
          x: p3.x - p2.x,
          y: p3.y - p2.y
        };
        let per1 = {
          x: -dir1.y,
          y: dir1.x
        };
        let per2 = {
          x: -dir2.y,
          y: dir2.x
        };

        let spread = 15;
        this.ctx.strokeStyle = `rgb(
            ${p1.color[0]}, 
            ${p1.color[1]}, 
            ${p1.color[2]}
        )`;
        for (let i = -5; i <= 5; i++) {
          this.drawLine({
            p1: this.offxy(p1, per1, i * spread),
            p2: this.offxy(p2, per2 || per1, i * spread)
          });
        }
      }
    },
    offxy: function(cur, per, length) {
      let len = Math.sqrt(per.x * per.x + per.y * per.y);
      return {
        x: cur.x + (per.x / len) * length,
        y: cur.y + (per.y / len) * length
      };
    },
    drawRect: function(x, y, width, height) {
      this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
    },
    drawLine: function(points) {
      this.ctx.beginPath();
      this.ctx.moveTo(points.p1.x, points.p1.y);
      this.ctx.lineTo(points.p2.x, points.p2.y);
      this.ctx.stroke();
    }
  }
};
</script>
<style lang="scss">
.home-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: 0;
  z-index: 1
}
#canvas {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
</style>

