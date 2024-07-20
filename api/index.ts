import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})
app.get('/auth', (c) => {
  return c.json({ message: 'Hello auth' })
})

export default handle(app)
