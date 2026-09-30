import ProductCard from './ProductCard'
import { categories } from '../data/products'

export default function ProductList({ products, category, onCategory, onAdd, onClear }) {
  return (
    <section className="container shop" id="shop">
      <div className="shop-head">
        <h2>Shop all products</h2>
        <div className="chips" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button key={c} className={`chip ${c === category ? 'active' : ''}`} onClick={() => onCategory(c)} aria-pressed={c === category}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {products.length === 0 ? (
        <div className="empty">
          <p>No products found</p>
          <button className="btn btn-outline" onClick={onClear}>Clear search and filters</button>
        </div>
      ) : (
        <div className="grid">
          {products.map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
        </div>
      )}
    </section>
  )
}
