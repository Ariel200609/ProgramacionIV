import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { PedidoProvider } from '../state/usePedido'

function renderApp() {
  return render(
    <PedidoProvider>
      <App />
    </PedidoProvider>
  )
}

describe('HU1', () => {
  it('muestra menu inicial con items', async () => {
    renderApp()
    await waitFor(() => {
      const items = screen.getAllByRole('listitem')
      expect(items.length).toBeGreaterThan(0)
    })
    expect(screen.getByText('Cafe')).toBeInTheDocument()
  })
})
