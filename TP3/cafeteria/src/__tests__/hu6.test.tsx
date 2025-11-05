import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { PedidoProvider } from '../state/usePedido'
import { server } from '../mocks/server'
import { http, HttpResponse } from 'msw'

function renderApp() {
  return render(
    <PedidoProvider>
      <App />
    </PedidoProvider>
  )
}

describe('HU6', () => {
  it('muestra lista vacia', async () => {
    server.use(http.get('/api/menu', () => HttpResponse.json([], { status: 200 })))
    renderApp()
    await waitFor(() => {
      expect(screen.getByText('No hay productos disponibles')).toBeInTheDocument()
    })
  })

  it('muestra error al fallar menu', async () => {
    server.use(http.get('/api/menu', () => HttpResponse.json({ msg: 'fail' }, { status: 500 })))
    renderApp()
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Error al cargar el menu')
    })
  })
})
