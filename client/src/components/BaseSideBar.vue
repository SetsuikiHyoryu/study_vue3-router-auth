<script lang="ts" setup>
import BaseMenu from './BaseMenu.vue'

import { useMainStore } from '@/store'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { routeTree } = storeToRefs(mainStore)
</script>

<template>
  <div class="base-side-bar">
    <ul>
      <li><RouterLink to="/">首页</RouterLink></li>
    </ul>

    <template v-for="(item, index) in routeTree" :key="index">
      <BaseMenu :item="item" />
    </template>
  </div>
</template>

<style scoped>
.base-side-bar {
  background: #ededed;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  padding: 90px 30px;
  position: fixed;
  top: 0;
  width: 250px;
  z-index: 1;
}
</style>
