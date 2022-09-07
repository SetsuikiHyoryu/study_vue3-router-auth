<script lang="ts" setup>
import { IRoute } from '@/services'

interface Props {
  item: IRoute
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <ul v-if="item.children?.length">
      <li>
        <RouterLink :to="item.link ?? item.path">{{ item.title }}</RouterLink>

        <template v-for="(child, index) in item.children" :key="index">
          <BaseMenu :item="child" />
        </template>
      </li>
    </ul>

    <ul v-else>
      <RouterLink :to="item.link ?? item.path">{{ item.title }}</RouterLink>
    </ul>
  </div>
</template>
