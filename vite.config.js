import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import Unocss from 'unocss/vite';
import { ViteCodeInspectorPlugin } from 'vite-code-inspector-plugin';
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
    Unocss({
      configFile: './uno.config.js',
    }),
    ViteCodeInspectorPlugin({
      showSwitch: true,
      hotKeys: ['altKey', 'shiftKey'],
      autoToggle: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`, // 全局变量
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 8082,
    https: false,
    open: true, //在服务器启动时自动在浏览器中打开应用程序
  },
});
