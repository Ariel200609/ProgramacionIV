import { usePedido } from '../state/usePedido'

export default function Total() {
  const { total } = usePedido()
  return <p className="total">Total: ${total}</p>
}
