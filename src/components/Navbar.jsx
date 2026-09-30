import { useState } from 'react'
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar({ search, onSearch, cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={close}>Shop<span>Ease</span></a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          <a href="#home" onClick={close}>Home</a>
          <a href="#shop" onClick={close}>Shop</a>
        </nav>

        <label className="search">
          <FiSearch aria-hidden="true" />
          <input
            type="search"
            placeholder="Search products"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search products"
          />
        </label>

        <button className="icon-btn cart-btn" onClick={onOpenCart} aria-label={`Open cart, ${cartCount} items`}>
          <FiShoppingCart size={22} />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>

        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  )
}
