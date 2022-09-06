<script lang="ts" setup>
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(async (): Promise<void> => {
  const response = await axios({
    url: '/api/tutor_router_list',
    method: 'POST',
    data: { uid: 2 },
  })

  console.log(response)
})
</script>

<template>
  <h1>Hello</h1>
</template>

<style scoped></style>
