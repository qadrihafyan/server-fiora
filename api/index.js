import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

export default server
