import { useState } from 'react'
import Menu from './components/Menu'
import Pedido from './components/Pedido'
import Total from './components/Total'
import Historial from './components/Historial'
import { PedidoProvider, usePedido } from './state/usePedido'
import { enviarPedido } from './api/pedidos'

function AppInterna() {
  const { items, limpiar, registrar } = usePedido()
  const [estado, setEstado] = useState<'idle'|'ok'|'error'|'enviando'>('idle')

  async function onEnviar() {
    try {
      setEstado('enviando')
      const copia = [...items]
      await enviarPedido(copia)
      registrar(copia)
      limpiar()
      setEstado('ok')
    } catch {
      setEstado('error')
    }
  }

  return (
    <main>
      <h1>Cafetería</h1>
      <div className="grid">
        <Menu />
        <section className="card">
          <Pedido />
          <div className="actions" style={{ marginTop: 12 }}>
            <Total />
            <button onClick={onEnviar} disabled={items.length === 0 || estado === 'enviando'}>
              Enviar pedido
            </button>
          </div>
          {estado === 'ok' && <p className="status">Pedido confirmado</p>}
          {estado === 'error' && <p className="status">Error al enviar el pedido</p>}
        </section>
      </div>

      <div style={{ marginTop: 16 }}>
        <Historial />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <PedidoProvider>
      <AppInterna />
    </PedidoProvider>
  )
}
