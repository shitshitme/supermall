<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in title"
      :key="index"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 10px;
  line-height: 40px;
  font-size: 15px;
}

.tab-control-item {
  flex: 1;
}
</style>