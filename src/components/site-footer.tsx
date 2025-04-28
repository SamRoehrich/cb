import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-base font-semibold mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:underline">All Products</Link></li>
              <li><Link href="#" className="hover:underline">T-Shirts</Link></li>
              <li><Link href="#" className="hover:underline">Glassware</Link></li>
              <li><Link href="#" className="hover:underline">Accessories</Link></li>
              <li><Link href="#" className="hover:underline">Sale Items</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@chasingbourbon.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>
                <div className="flex space-x-3 mt-3">
                  <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3">Newsletter</h3>
            <p className="text-sm mb-3">Sign up for updates on new products, promotions, and bourbon insights.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md border border-input px-3 py-2 text-sm"
                required
              />
              <button type="submit" className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Chasing Bourbon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}