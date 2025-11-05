import { render, screen, waitFor, within } from '@testing-library/react'
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

describe('HU2', () => {
  it('agrega item al pedido', async () => {
    renderApp()

    await waitFor(() => {
      const items = screen.getAllByRole('listitem')
      expect(items.length).toBeGreaterThan(0)
    })

    const btn = screen.getByRole('button', { name: /agregar-1/i })
    await userEvent.click(btn)

    const pedidoSection = screen.getByLabelText('pedido')
    const listaPedido = within(pedidoSection).getByRole('list')

    expect(listaPedido).toBeInTheDocument()
    expect(within(pedidoSection).getByText('Cafe')).toBeInTheDocument()
  })
})
