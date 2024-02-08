<template>
  <router-view/>
  <van-tabbar v-model="active" class="tabber" router>
  <van-tabbar-item to="/">
    <template #icon>
      <i class="toutiao toutiao-shouye"/>
    </template>
    <span class="bar-font">首页</span>
  </van-tabbar-item>
  <van-tabbar-item to="/wenda">
    <template #icon>
      <i class="toutiao toutiao-wenda"/>
    </template>
    <span class="bar-font">问答</span>
  </van-tabbar-item>
  <van-tabbar-item to="/shipin">
    <template #icon>
      <i class="toutiao toutiao-shipin"/>
    </template>
    <span class="bar-font">视频</span>
  </van-tabbar-item>
  <van-tabbar-item to="/wode">
    <template #icon>
      <i class="toutiao toutiao-wode"/>
    </template>
    <span class="bar-font">我的</span>
  </van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
  name: 'MyTabbar',
  data () {
    return {
      active: true
    }
  }
}
</script>
<style lang="less">
.tabber{
  .toutiao{
    font-size: 40px;
  }
}
</style>
