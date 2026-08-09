import { Link } from 'react-router-dom';
import {  ShieldCheck, Truck, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 sm:gap-10">
        <div className="col-span-2">
          <span className="font-display italic text-xl sm:text-2xl">Veylo</span>
          <p className="mt-2.5 text-xs sm:text-sm text-paper/50 max-w-xs">
            Live inventory, honest prices.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="GitHub" className="text-paper/50 hover:text-verdant-light transition-colors">
              <Github size={17} strokeWidth={1.75} />
            </a>
            <a href="#" aria-label="Twitter" className="text-paper/50 hover:text-verdant-light transition-colors">
              <Twitter size={17} strokeWidth={1.75} />
            </a>
            <a href="#" aria-label="Instagram" className="text-paper/50 hover:text-verdant-light transition-colors">
              <Instagram size={17} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] sm:text-xs uppercase tracking-widest text-paper/40 mb-3">Shop</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-paper/70">
            <li><Link to="/catalog" className="hover:text-verdant-light transition-colors">Catalog</Link></li>
            <li><Link to="/cart" className="hover:text-verdant-light transition-colors">Cart</Link></li>
            <li><Link to="/orders" className="hover:text-verdant-light transition-colors">Orders</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] sm:text-xs uppercase tracking-widest text-paper/40 mb-3">Account</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-paper/70">
            <li><Link to="/login" className="hover:text-verdant-light transition-colors">Sign in</Link></li>
            <li><Link to="/register" className="hover:text-verdant-light transition-colors">Register</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-[10px] sm:text-xs text-paper/40 font-mono text-center">
          <span>© {new Date().getFullYear()} Veylo</span>
          <span className="hidden sm:inline">React, Spring Boot & MySQL</span>
        </div>
      </div>
    </footer>
  );
}