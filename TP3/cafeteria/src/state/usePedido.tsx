import { createContext, useContext, useState, useMemo, type ReactNode } from 'react'
import type { Product } from '../types/product'

type PedidoRealizado = {
  id: number
  items: Product[]
  total: number
  ts: number
}

type PedidoContextType = {
  items: Product[]
  agregar: (p: Product) => void
  eliminar: (id: string) => void
  limpiar: () => void
  total: number
  historial: PedidoRealizado[]
  registrar: (items: Product[]) => void
  limpiarHistorial: () => void
}

const PedidoContext = createContext<PedidoContextType | null>(null)

export function PedidoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([])
  const [historial, setHistorial] = useState<PedidoRealizado[]>([])
  const [nextId, setNextId] = useState(1)

  const agregar = (p: Product) => setItems(prev => [...prev, p])

  const eliminar = (id: string) => {
    setItems(prev => {
      const idx = prev.findIndex(it => it.id === id)
      if (idx === -1) return prev
      const copia = prev.slice()
      copia.splice(idx, 1)
      return copia
    })
  }

  const limpiar = () => setItems([])

  const total = useMemo(() => items.reduce((acc, it) => acc + it.price, 0), [items])

  const registrar = (lista: Product[]) => {
    const suma = lista.reduce((acc, it) => acc + it.price, 0)
    const registro: PedidoRealizado = { id: nextId, items: lista, total: suma, ts: Date.now() }
    setHistorial(prev => [...prev, registro])
    setNextId(v => v + 1)
  }

  const limpiarHistorial = () => setHistorial([])

  const value = { items, agregar, eliminar, limpiar, total, historial, registrar, limpiarHistorial }
  return <PedidoContext.Provider value={value}>{children}</PedidoContext.Provider>
}

export function usePedido() {
  const ctx = useContext(PedidoContext)
  if (!ctx) throw new Error('pedido_contexto')
  return ctx
}

