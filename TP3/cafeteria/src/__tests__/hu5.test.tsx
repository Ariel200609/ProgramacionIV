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

describe('HU5', () => {
  it('envia pedido, confirma y limpia', async () => {
    renderApp()
    await waitFor(() => {
      const items = screen.getAllByRole('listitem')
      expect(items.length).toBeGreaterThan(0)
    })
    const add1 = screen.getByRole('button', { name: /agregar-1/i })
    const add3 = screen.getByRole('button', { name: /agregar-3/i })
    await userEvent.click(add1)
    await userEvent.click(add3)
    const enviar = screen.getByRole('button', { name: 'Enviar pedido' })
    await userEvent.click(enviar)
    await waitFor(() => {
      expect(screen.getByText('Pedido confirmado')).toBeInTheDocument()
    })
    expect(screen.getByText('Total: $0')).toBeInTheDocument()
  })
})
