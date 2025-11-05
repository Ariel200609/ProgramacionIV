import { usePedido } from '../state/usePedido'

export default function Pedido() {
  const { items, eliminar } = usePedido()
  return (
    <section aria-label="pedido" className="card">
      <h2>Mi pedido</h2>
      <ul role="list" className="pedido-list">
        {items.map((it, idx) => (
          <li key={`${it.id}-${idx}`} className="item">
            <span>{it.name}</span>
            <button
              aria-label={`eliminar-${it.id}-${idx}`}
              onClick={e => {
                e.stopPropagation()
                eliminar(it.id)
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
