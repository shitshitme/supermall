<template>
  <div>
    <Swiper>
      <SwiperItem>
        <a :href="item.banners"></a>
        <img :src="item.img" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>