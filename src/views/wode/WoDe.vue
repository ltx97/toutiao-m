<template>
  <div class="wode-container">
    <div v-if=user class="login-container">
      <div class="login-user">
        <div class="userInfo">
          <van-image
          class="user-img"
          round
           src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <span class="username">黑马头条号</span>
        </div>
        <div>
          <van-button type="default" round size="mini">
            <span class="edit">编辑资料</span>
          </van-button>
        </div>
      </div>
      <div class="count-data">
        <div class="count-item">
          <span class="count-number">8</span>
          <span class="count-name">头条</span>
        </div>
        <div class="count-item">
          <span class="count-number">8</span>
          <span class="count-name">关注</span>
        </div>
        <div class="count-item">
          <span class="count-number">8</span>
          <span class="count-name">粉丝</span>
        </div>
        <div class="count-item">
          <span class="count-number">8</span>
          <span class="count-name">获赞</span>
        </div>
      </div>
    </div>
    <div v-else class="nologin-container">
        <div class="loginbtn" @click=toLogin>
          <img
          class="loginbtn-img"
          src="~@/assets/mobile.png"
          alt
        />
        <span class="login-font">登录 / 注册</span>
      </div>
    </div>
    <div class="mygrid">
      <van-grid :column-num="2" clickable>
        <van-grid-item>
          <template #text>
            <span class="fz28">收藏</span>
          </template>
          <template #icon>
            <i class="toutiao toutiao-shoucang"></i>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #text>
            <span class="fz28">历史</span>
          </template>
           <template #icon>
            <i class="toutiao toutiao-lishi"></i>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="usercell">
      <van-cell title="消息通知" is-link/>
      <van-cell title="小智同学" is-link/>
      <van-cell v-if=user class="logout" @click="logout">
        <template #title>
          <div class="custom-title">退出登录</div>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WoDe',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    logout () {
      this.$store.commit('setUser', null)
    }
  }
}
</script>
<style lang="less" scoped>
.login-container{
  height: 361px;
  background: url('~@/assets/banner.png');
  background-size: cover;
  .login-user{
    height: 231px;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    padding: 0 32px;
    .edit{
          color: grey;
          font-size: 20px;
        }
    .userInfo{
      display: flex;
      align-items: center;
      .user-img{
        width: 135px;
        height: 135px;
        padding-right: 25px;
      }
      .username{
        color: white;
        font-size: 30px;
      }
    }
  }
  .count-data{
    padding: 0 32px;
    height: 130px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    color: white;
    .count-item{
      display: flex;
      flex-direction:column;
      align-items: center;
      .count-number{
        font-size: 36px;
      }
      .count-name{
        font-size: 22px;
      }
    }
  }
}
.nologin-container{
  height: 361px;
  background: url('~@/assets/banner.png');
  background-size: cover;
  display: flex;
  flex-direction:row;
  justify-content:center;
  .loginbtn{
    display: flex;
    flex-direction:column;
    justify-content:center;
    .loginbtn-img{
      width: 135px;
      height: 135px;
      margin-bottom: 5px;
    }
    .login-font{
      font-size: 28px;
      color: white;
    }
  }
}
.mygrid{
  margin-bottom: 10px;
    .fz28{
      font-size: 28px;
    }
    .toutiao{
      font-size: 40px;
    }
    .toutiao-shoucang{
      color: #eb5253;
    }
    .toutiao-lishi{
      color: #ff9d1d;
    }
  }
.usercell{
  .logout{
    margin-top: 10px;
    text-align: center;
    color: #d86262;
  }
}
</style>
