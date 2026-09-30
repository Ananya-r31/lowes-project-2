import { useEffect } from 'react'
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import ProductArt from './ProductArt'
import { formatPrice } from '../data/products'

export default function Cart({ open, items, onClose, onChangeQty, onRemove, onCheckout }) {
  const count = items.reduce((n, i) => n + i.qty, 0)
  const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div className={`overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`cart ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="Shopping cart">
        <div className="cart-head">
          <h2>Your cart ({count})</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart"><FiX size={22} /></button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <span>Add a product and it will show up here.</span>
            <button className="btn btn-primary" onClick={onClose}>Continue shopping</button>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((i) => (
                <li key={i.id} className="cart-item">
                  <div className="thumb" style={{ background: i.tint }}><ProductArt name={i.art} label={i.name} /></div>
                  <div className="ci-info">
                    <strong>{i.name}</strong>
                    <span>{formatPrice(i.price)}</span>
                    <div className="qty">
                      <button onClick={() => onChangeQty(i.id, -1)} aria-label={`Decrease ${i.name} quantity`}><FiMinus /></button>
                      <span aria-live="polite">{i.qty}</span>
                      <button onClick={() => onChangeQty(i.id, 1)} aria-label={`Increase ${i.name} quantity`}><FiPlus /></button>
                    </div>
                  </div>
                  <div className="ci-side">
                    <strong>{formatPrice(i.price * i.qty)}</strong>
                    <button className="icon-btn remove" onClick={() => onRemove(i.id)} aria-label={`Remove ${i.name}`}><FiTrash2 /></button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-foot">
              <div className="row"><span>Items</span><span>{count}</span></div>
              <div className="row total"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <button className="btn btn-primary block" onClick={onCheckout}>Checkout</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
