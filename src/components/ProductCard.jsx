import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import ProductArt from './ProductArt'
import { formatPrice } from '../data/products'

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) =>
        rating >= i ? <FaStar key={i} /> : rating >= i - 0.5 ? <FaStarHalfAlt key={i} /> : <FaRegStar key={i} />
      )}
    </span>
  )
}

export default function ProductCard({ product, onAdd }) {
  const { name, description, price, rating, reviews, art, tint } = product
  return (
    <article className="card">
      <div className="card-media" style={{ background: tint }}>
        <ProductArt name={art} label={name} />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p className="desc">{description}</p>
        <div className="rating">
          <Stars rating={rating} />
          <span>{rating} ({reviews.toLocaleString('en-IN')})</span>
        </div>
        <div className="card-foot">
          <span className="price">{formatPrice(price)}</span>
          <button className="btn btn-primary" onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
      </div>
    </article>
  )
}
