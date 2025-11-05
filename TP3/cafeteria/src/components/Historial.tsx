import { usePedido } from '../state/usePedido'

function fmtHora(n: number) {
  return new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(n)
}

function detalle(items: { name: string }[]) {
  const m = new Map<string, number>()
  for (const it of items) m.set(it.name, (m.get(it.name) ?? 0) + 1)
  return Array.from(m.entries())
    .map(([name, q]) => (q > 1 ? `${name} x${q}` : name))
    .join(', ')
}

export default function Historial() {
  const { historial, limpiarHistorial } = usePedido()

  return (
    <section className="card" aria-label="historial">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <h2>Historial de pedidos</h2>
        {historial.length > 0 && (
          <button onClick={limpiarHistorial}>Borrar historial</button>
        )}
      </div>

      {historial.length === 0 ? (
        <p>Sin pedidos enviados</p>
      ) : (
        <ul className="pedido-list" role="list">
          {historial.map(h => (
            <li key={h.id} className="item">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="chip">#{h.id}</span>
                  <strong>Pedido</strong>
                </div>
                <div className="subtitle">{detalle(h.items)}</div>
                <div className="price">{fmtHora(h.ts)}</div>
              </div>
              <div className="actions">
                <strong>Total: ${h.total}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
