import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { PedidoProvider } from '../state/usePedido'

function renderApp() {
  return render(
    <PedidoProvider>
      <App />
    </PedidoProvider>
  )
}

describe('HU3', () => {
  it('actualiza total al agregar productos', async () => {
    renderApp()
    await waitFor(() => {
      const items = screen.getAllByRole('listitem')
      expect(items.length).toBeGreaterThan(0)
    })
    const add1 = screen.getByRole('button', { name: /agregar-1/i })
    const add2 = screen.getByRole('button', { name: /agregar-2/i })
    await userEvent.click(add1)
    await userEvent.click(add2)
    expect(screen.getByText(/Total: \$\d+/i)).toBeInTheDocument()
  })
})
