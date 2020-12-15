<template>
    <el-menu
      class="bg222b45"
      text-color="#fff"
      active-text-color="#36f">
      <el-menu-item index="2">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {}
    },
    watch: {},
    comments: {},
    mounted () {},
    methods: {},
    filters: {},
    directives: {},
    destroyed () {},
  }
</script>

<style scoped lang="scss">
  .el-menu {
    height: 100%;
    border-right: none;

    .el-menu-item:hover,
    .el-menu-item:focus {
      background: transparent;
      color: #3366ff;
    }
  }
</style>
