export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <div>
          <a href="#home" className="logo">Shop<span>Ease</span></a>
          <p>Everyday electronics and home essentials.</p>
        </div>
        <nav aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
        </nav>
        <p className="copy">© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  )
}
