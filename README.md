# Vue 路由权限

教程：[【前端开发】Vue3『路由权限』前后端全解析（1）【Vue基本功】](https://www.bilibili.com/video/BV1Re411g7Ma)

## 客户端

### 客户端依赖

- vite
- pinia
- vue-router
- axios

### 配置 src alias

```typescript
// client\vite.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 需要安装 `@type/node`
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
})
```

### 配置代理（处理开发时的跨域）

```typescript
// client\vite.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const PORT = 9491

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },

  server: {
    proxy: {
      '/api': {
        target: `http://localhost${PORT}`,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})

```

## 服务端

### 服务端依赖

- express
- typescript
- ts-node-dev
