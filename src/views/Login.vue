<template>
  <div class="login-wrap wd100 hg100 dis-fl ju-ct al-ct">
    <div class="login-box pd20 bo-r8">
      <el-form :model="login" :rules="loginRules" ref="login">
        <p class="te-ct pd-b20 clffffff">后台管理系统</p>
        <el-form-item prop="user">
          <el-input
            placeholder="请输入账号"
            type="text"
            v-model="login.user"
            autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="login.password"
            autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item class="mg-b5">
          <el-button class="wd100" type="primary" @click="submitLogin('login')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import validate from '../validate'

  export default {
    name: 'Login',
    props: {},
    data () {
      return {
        login: {
          user: '',
          password: '',
        },
        loginRules: {
          user: validate.NotNull('账号'),
          password: validate.NotNull('密码'),
        }
      }
    },
    watch: {},
    comments: {},
    mounted () {},
    methods: {
      //登录
      submitLogin (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/home')
          } else {
            return false
          }
        })
      }
    },
    filters: {},
    directives: {},
    destroyed () {},
  }
</script>

<style scoped lang="scss">
  .login-wrap {
    .login-box {
      width: 300px;
      background-color: #222b45;
      box-shadow: 0 5px 15px 0;
    }
  }
</style>
