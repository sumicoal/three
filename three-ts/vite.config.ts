import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    fs: {
      // プロジェクトルートから1つ上の階層にあるファイルをインポートできるようにする
      allow: ['..']
    }
  },
})
