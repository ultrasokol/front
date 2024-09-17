import { copyFileSync } from 'fs'
import pkg from 'fs-extra'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const { copySync } = pkg
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const source = join(__dirname, '..', '.htaccess')
const destination = join(__dirname, '..', 'public', '.htaccess')

const mail = join(__dirname, '..', 'mail.php')
const mail2 = join(__dirname, '..', 'public', 'mail.php')

const phpmailer = join(__dirname, '..', 'phpmailer')
const phpmailerPublic = join(__dirname, '..', 'public', 'phpmailer')

copyFileSync(source, destination)
copyFileSync(mail, mail2)
copySync(phpmailer, phpmailerPublic)
