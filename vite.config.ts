import {fileURLToPath, URL} from 'node:url'
import {visualizer} from 'rollup-plugin-visualizer';

import {defineConfig, type PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        visualizer({
            emitFile: false,
            filename: "stats.html", //分析图生成的文件名
            open: true, //如果存在本地服务端口，将在打包后自动展示
        }) as PluginOption,
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks(id, {getModuleInfo}) {
                    if (id.includes('node_modules')) {
                        const suffix = id.toString().split('node_modules/')[1];
                        const name = suffix.split('/')[0].toString();
                        const moduleInfo = getModuleInfo(id);
                        if (moduleInfo !== null && !moduleInfo.isIncluded) {
                            return
                        }
                        switch (name) {
                            case '@element-plus':
                            case 'lodash-es':
                            case 'index':
                            case '@vueuse':
                            case 'element-plus':
                            case '@vue':
                                return name;
                            default:
                                return '__vendor'
                        }
                    }
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            }
        }
    }
})
