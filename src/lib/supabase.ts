import { createClient } from '@supabase/supabase-js'

// Supabase environment variables (works with both VITE_ and NEXT_PUBLIC_ prefixes)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('[v0] Supabase URL:', supabaseUrl)
console.log('[v0] Supabase Anon Key exists:', !!supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('[v0] Missing Supabase environment variables. Please check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  is_new: boolean
  category: string | null
  created_at: string
}

// Helper function to fetch all products
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  return data || []
}

// Helper function to fetch a single product by ID
export async function getProductById(id: number): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return null
  }

  return data
}
