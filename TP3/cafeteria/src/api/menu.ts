import { z } from 'zod'
import { ProductSchema, type Product } from '../types/product'

const MenuSchema = z.array(ProductSchema)

export async function fetchMenu(): Promise<Product[]> {
  const res = await fetch('/api/menu')
  if (!res.ok) throw new Error('error_menu')
  const data = await res.json()
  const parsed = MenuSchema.parse(data)
  return parsed
}
