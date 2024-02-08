<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar"
    title="登录"
    >
    <template #left>
      <van-icon name="cross" class="left-cross" @click="closeLogin"></van-icon>
    </template>
    </van-nav-bar>

    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="myLogin">
      <van-field v-model="user.mobile"
      name="mobile"
      placeholder="请输入手机号"
      :rules="userLoginRules.mobile"
      >
        <template #left-icon>
          <i class="toutiao toutiao-shouji"></i>
        </template>
      </van-field>
      <van-field
      v-model="user.code"
      name="code"
      placeholder="请输入验证码"
      :rules="userLoginRules.code"
      >
        <template #left-icon>
          <i class="toutiao toutiao-yanzhengma"></i>
        </template>
        <template #button>
          <van-button
          class="send-sms-btn"
          @click=onSendSms
          round
          type="default"
          size="small"
          plain
          ref="myCountDown"
          >
            <p v-if="countDown.isShow">获取验证码</p>
            <van-count-down v-else :time="countDown.time" @finish="countDown.isShow = true">
              <template #default="timeData">
                <span class="block">重新发送 {{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, code } from '@/api/user'
import { showLoadingToast, showSuccessToast, showFailToast } from 'vant'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userLoginRules: {
        mobile: [{
          required: true,
          message: '手机号必须填',
          trigger: 'onBlur'
        },
        {
          pattern: /\d{11}/,
          message: '手机号必须11位'
        }
        ],
        code: [{ required: true, message: '验证码不能为空' }]
      },
      countDown: {
        isShow: true,
        time: 1000 * 5
      }
    }
  },
  mounted () {
  },
  methods: {
    async onSubmit (v) {
      // 1.获取表单数据
      const user = this.user
      // 2.表单验证
      showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        duration: 0 // 持续时间
      })
      // 3.提交表单请求登录
      try {
        const { data: myData } = await login(user)
        if (myData.code === '200') {
          // 保存token
          this.$store.commit('setUser', myData.data)
          showSuccessToast('登录成功')
          this.$router.push('/wode')
        } else {
          showFailToast(myData.data)
        }
      } catch (error) {
        if (error.response.status === 400) {
          showFailToast('手机号或者验证码错误')
        } else {
          showFailToast('登录失败')
        }
      }
      // 4.根据请求响应结果处理后续操作
    },
    async onSendSms () {
      try {
        // 校验手机信息
        await this.$refs.myLogin.validate(['mobile'])
        // 没问题 发送验证码
        this.countDown.isShow = false
        const response = await code(this.user.mobile)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    closeLogin () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
.login-container {
  .left-cross{
    color:white
  }
  .toutiao {
    font-size: 37px;
  }
}

.send-sms-btn {
  background-color: #ededed;
  width: 152px;
  height: 46px;
  line-height: 46px;
  .van-button__text {
    font-size: 22px;
    color: #666
  }
}

.van-field__button {
  border-left: 1px solid #666;
}

.login-btn-wrap {
  padding: 53px 33px;
  .login-btn {
    background-color: #64b4fb;
    border: none;
    color: white;
  }
}

.send-sms-btn {
  .block {
    font-size: 20px;
  }
}
</style>
