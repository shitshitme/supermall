<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="tomato">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="tomato">
        <div slot="item-text">推介</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar" activeColor="tomato">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="tomato">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>