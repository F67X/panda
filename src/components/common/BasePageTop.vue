<template>
  <div>
    <header class="headers">
      <el-row>
        <el-col :span="12" :offset="7">
          <el-col :span="4"><router-link to="/">首页</router-link></el-col>
          <el-col :span="4"><router-link to="product">产品</router-link></el-col>
          <el-col :span="4"><router-link to="case">案例</router-link></el-col>
          <el-col :span="4"><router-link to="news">新闻</router-link></el-col>
          <el-col :span="4"><router-link to="about">关于</router-link></el-col>
        </el-col>
      </el-row>
    </header>
  </div>
</template>
<style>
header.headers {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
}
</style>

