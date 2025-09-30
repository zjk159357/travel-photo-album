
import fs from 'fs'
import path from 'path'

const photosDir = path.resolve('public/photos')
const output = path.resolve('public/photos.json')

const files = fs.readdirSync(photosDir)
  .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
  .map(f => `/photos/${f}`)

fs.writeFileSync(output, JSON.stringify(files, null, 2))
console.log('✅ photos.json 已生成')
