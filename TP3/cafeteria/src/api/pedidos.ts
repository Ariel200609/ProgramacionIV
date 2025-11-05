import type { Product } from '../types/product'

export async function enviarPedido(items: Product[]): Promise<void> {
  const res = await fetch('/api/pedidos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items })
  })
  if (!res.ok) throw new Error('error_envio')
}
