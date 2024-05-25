import path from 'path'
import { fileURLToPath } from 'url'

// ES 모듈에서 __filename 및 __dirname을 사용할 수 있도록 설정
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  }
}

export default nextConfig
