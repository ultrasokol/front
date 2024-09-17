import { copyFileSync } from 'fs'

import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const source = join(__dirname, '..', '.htaccess')
const destination = join(__dirname, '..', 'public', '.htaccess')

copyFileSync(source, destination)
