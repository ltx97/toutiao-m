<template>
  <div id="app">
    <router-view />
    <h1>黑马头条</h1>
    <div>
      <i class="toutiao toutiao-shipin"></i>
    </div>
    <van-button>默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-cell-group>
      <van-cell title="标题" value="内容" />
      <van-cell title="标题" value="内容" label="详细信息" />
      <van-cell title="标题" label="详细信息" is-link center />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
