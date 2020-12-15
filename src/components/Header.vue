<template>
  <div class="header-wrap dis-fl ju-sb bg222b45 pd-r10">
    <div class="clffffff fs24 pd-l30">
      后台管理系统
    </div>
    <div class="cu-pt">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link clffffff">
          <i class="el-icon-user fs26"></i>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
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
  .header-wrap {
    line-height: 58px;

    .el-icon-user {
      position: relative;
      top: 3px;
    }
  }
</style>
