<template>
  <div>
    <BasePageHeader :current="pageHeader" />
    <h2>User</h2>
    <BasePageBottom />
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      pageHeader: "作品展示"
    };
  },
  mounted() {
    this.$notify({
      title: "提示",
      type:'warning',
      message: 
        "这是演示数据",
        offset:100
    });
  },
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
