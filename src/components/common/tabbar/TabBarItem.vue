<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },

  data() {
    return {};
  },

  computed: {
    isActive() {
      // /home  ->  item1(/home) = true
      // /home  ->  item1(/category) = false
      // /home  ->  item1(/shopcar) = false
      // /home  ->  item1(/profile) = false
      return this.$route.path.indexOf(this.path) == 0;
      // return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },

  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  line-height: 49px;
  height: 49px;
  background-color: #f6f6f6;
}
</style>