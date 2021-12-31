import path from 'path'
import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport,{AntdResolve} from 'vite-plugin-style-import'

const env = loadEnv('','./','SYS_');

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      host:env.SYS_HOST,
      proxy:{
        '/sysware': {
            target: env.SYS_PROXY,
            changeOrigin: true,
          },
      }
  },
  plugins: [
      react(),
      styleImport({
        resolves:[AntdResolve()],
      })
  ],
  css:{
    preprocessorOptions:{
        less:{
            javascriptEnabled:true
        }
    }
  },
  resolve:{
    alias:{
        '@':path.resolve(__dirname,'src'),
        'pages':path.resolve(__dirname,'src/pages'),
        'domain':path.resolve(__dirname,'src/domain'),
        'common':path.resolve(__dirname,'src/common'),
    }
  }
})
