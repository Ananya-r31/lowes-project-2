import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { products } from './data/products'

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase()
    return products.filter(
      (p) => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(q)
    )
  }, [search, category])

  const cartCount = cart.reduce((n, i) => n + i.qty, 0)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2200)
  }

  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((i) => i.id === product.id)
        ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...product, qty: 1 }]
    )
    showToast(`${product.name} added to cart`)
  }

  const changeQty = (id, delta) =>
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0))

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const checkout = () => {
    setCart([])
    setCartOpen(false)
    showToast('Order placed. Thank you for shopping with ShopEase!')
  }

  return (
    <>
      <Navbar search={search} onSearch={setSearch} cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ProductList
          products={visible}
          category={category}
          onCategory={setCategory}
          onAdd={addToCart}
          onClear={() => { setSearch(''); setCategory('All') }}
        />
      </main>
      <Footer />
      <Cart
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeItem}
        onCheckout={checkout}
      />
      <div className={`toast ${toast ? 'show' : ''}`} role="status">{toast}</div>
    </>
  )
}
