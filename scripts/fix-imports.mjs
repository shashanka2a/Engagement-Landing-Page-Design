import fs from 'fs'
import path from 'path'

const targetDir = path.resolve(process.cwd(), 'src/components/ui')

const patterns = [
  /("@radix-ui\/[^"]+)@\d+\.\d+\.\d+"/g,
  /("lucide-react)@[^\"]+"/g,
  /("class-variance-authority)@[^\"]+"/g,
  /("embla-carousel-react)@[^\"]+"/g,
  /("react-day-picker)@[^\"]+"/g,
  /("cmdk)@[^\"]+"/g,
  /("input-otp)@[^\"]+"/g,
  /("react-resizable-panels)@[^\"]+"/g,
  /("recharts)@[^\"]+"/g,
  /("vaul)@[^\"]+"/g,
  /("next-themes)@[^\"]+"/g,
  /("sonner)@[^\"]+"/g,
]

for (const file of fs.readdirSync(targetDir)) {
  if (!file.endsWith('.tsx')) continue
  const full = path.join(targetDir, file)
  let src = fs.readFileSync(full, 'utf8')
  const before = src
  for (const re of patterns) {
    src = src.replace(re, '$1"')
  }
  if (src !== before) {
    fs.writeFileSync(full, src)
    console.log('fixed', file)
  }
}

console.log('done')


