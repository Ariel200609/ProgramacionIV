import { http, HttpResponse } from 'msw'
import { mockMenu } from './data'

export const handlers = [
  http.get('/api/menu', async () => {
    return HttpResponse.json(mockMenu, { status: 200 })
  }),
  http.post('/api/pedidos', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json({ ok: true, recibido: body }, { status: 201 })
  })
]

