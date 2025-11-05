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

describe('HU4', () => {
  it('elimina solo el item clickeado', async () => {
    renderApp()

    await waitFor(() => {
      const items = screen.getAllByRole('listitem')
      expect(items.length).toBeGreaterThan(0)
    })

    const addCafe = screen.getByRole('button', { name: /agregar-1/i })
    const addCapu = screen.getByRole('button', { name: /agregar-2/i })
    await userEvent.click(addCafe)
    await userEvent.click(addCapu)

    const pedidoSection = screen.getByLabelText('pedido')

    expect(within(pedidoSection).getByText('Cafe')).toBeInTheDocument()
    expect(within(pedidoSection).getByText('Capuchino')).toBeInTheDocument()

    const delCapu = within(pedidoSection).getByRole('button', { name: /eliminar-2-1/i })
    await userEvent.click(delCapu)

    expect(within(pedidoSection).queryByText('Capuchino')).toBeNull()
    expect(within(pedidoSection).getByText('Cafe')).toBeInTheDocument()
  })
})
