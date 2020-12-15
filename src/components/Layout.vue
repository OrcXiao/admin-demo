<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Nav></Nav>
      </el-aside>
      <el-main>
        <transition name="pageswitching">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Nav from '@/components/Nav'
  import Header from './Header'

  export default {
    name: 'Layout',
    data () {
      return {}
    },
    watch: {},
    components: {
      Nav,
      Header,
    },
    mounted () {},
    methods: {},
    filters: {},
    directives: {},
    destroyed () {},
  }
</script>

<style scoped lang="scss">
  .el-container{
    height: 100%;
  }
  .el-header{
    padding: 0;
    border-bottom: 1px solid #151a30;

  }
  .pageswitching-enter-active,
  .pageswitching-leave-active {
    transition: all .3s;
  }

  .pageswitching-enter,
  .pageswitching-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .pageswitching-move {
    transition: all .3s;
  }

  .pageswitching-leave-active {
    position: absolute;
  }
</style>
