import { useEffect, useState } from 'react'
import { fetchMenu } from '../api/menu'
import type { Product } from '../types/product'
import { usePedido } from '../state/usePedido'

export default function Menu() {
  const [data, setData] = useState<Product[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { agregar } = usePedido()

  useEffect(() => {
    let activo = true
    fetchMenu()
      .then(lista => {
        if (!activo) return
        if (lista.length === 0) setData([])
        else setData(lista)
      })
      .catch(() => setError('Error al cargar el menu'))
    return () => { activo = false }
  }, [])

  if (error) return <p role="alert" className="alert">Error al cargar el menu</p>
  if (data && data.length === 0) return <p>No hay productos disponibles</p>
  if (!data) return <p>Cargando...</p>

  return (
    <section aria-label="menu" className="card">
      <h2>Menú</h2>
      <ul className="menu-list">
        {data.map(p => (
          <li key={p.id} className="item">
            <div>
              <span>{p.name}</span>
              <span className="price">${p.price}</span>
            </div>
            <div className="actions">
              <button
                aria-label={`agregar-${p.id}`}
                onClick={() => agregar(p)}
              >
                Agregar al pedido
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
