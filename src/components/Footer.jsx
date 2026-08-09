import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Mail,
  ArrowRight,
  Instagram,
  Github,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-12 sm:mt-16 lg:mt-24">

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-paper/10 py-8 sm:py-10 lg:py-12">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">

            <div className="text-center lg:text-left">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-verdant-light mb-2">
                Stay updated
              </p>

              <h2 className="font-display italic text-xl sm:text-2xl lg:text-3xl">
                Get the latest from Veylo
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-paper/45 max-w-md mx-auto lg:mx-0">
                New products, offers and updates delivered to your inbox.
              </p>
            </div>

            <div className="w-full lg:w-[400px]">
              <div className="flex w-full h-11 sm:h-12 rounded-lg overflow-hidden border border-paper/10 bg-paper/[0.03]">

                <div className="flex items-center flex-1 min-w-0 px-3">
                  <Mail
                    size={15}
                    className="text-paper/35 mr-2 flex-shrink-0"
                  />

                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full min-w-0 bg-transparent outline-none text-xs sm:text-sm text-paper placeholder:text-paper/30"
                  />
                </div>

                <button
                  type="button"
                  className="px-3 sm:px-5 flex-shrink-0 bg-verdant text-ink text-xs sm:text-sm font-medium hover:bg-verdant-light transition-colors flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-14">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-9 sm:gap-x-8 sm:gap-y-10 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 text-center lg:text-left">

            <span className="font-display italic text-2xl sm:text-3xl">
              Veylo
            </span>

            <p className="mt-2.5 text-xs sm:text-sm leading-5 sm:leading-6 text-paper/45 max-w-xs mx-auto lg:mx-0">
              Live inventory, honest prices.
              Quality products with a simple and reliable shopping experience.
            </p>

            <div className="flex justify-center lg:justify-start gap-2 mt-4">

              <a
                href="#"
                aria-label="GitHub"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-paper/10 flex items-center justify-center text-paper/45 hover:text-verdant-light hover:border-verdant/40 transition-all"
              >
                <Github size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-paper/10 flex items-center justify-center text-paper/45 hover:text-verdant-light hover:border-verdant/40 transition-all"
              >
                <Instagram size={15} />
              </a>

            </div>
          </div>


          {/* Shop */}
          <div>
            <h3 className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-paper/35 mb-3 sm:mb-4">
              Shop
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-paper/60">

              <li>
                <Link to="/" className="hover:text-verdant-light transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/catalog" className="hover:text-verdant-light transition-colors">
                  Catalog
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-verdant-light transition-colors">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/wishlist" className="hover:text-verdant-light transition-colors">
                  Wishlist
                </Link>
              </li>

              <li>
                <Link to="/orders" className="hover:text-verdant-light transition-colors">
                  Orders
                </Link>
              </li>

            </ul>
          </div>


          {/* Support */}
          <div>
            <h3 className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-paper/35 mb-3 sm:mb-4">
              Support
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-paper/60">

              <li>
                <a href="#" className="hover:text-verdant-light transition-colors">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-verdant-light transition-colors">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-verdant-light transition-colors">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-verdant-light transition-colors">
                  Returns
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-verdant-light transition-colors">
                  Help Center
                </a>
              </li>

            </ul>
          </div>


          {/* Account */}
          <div>
            <h3 className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-paper/35 mb-3 sm:mb-4">
              Account
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-paper/60">

              <li>
                <Link to="/login" className="hover:text-verdant-light transition-colors">
                  Sign in
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-verdant-light transition-colors">
                  Register
                </Link>
              </li>

              <li>
                <Link to="/orders" className="hover:text-verdant-light transition-colors">
                  My Orders
                </Link>
              </li>

              <li>
                <Link to="/wishlist" className="hover:text-verdant-light transition-colors">
                  Wishlist
                </Link>
              </li>

            </ul>
          </div>


          {/* About */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">

            <h3 className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-paper/35 mb-3 sm:mb-4">
              About Veylo
            </h3>

            <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-paper/45 max-w-sm">
              Everyday essentials and premium products with transparent
              pricing and dependable service.
            </p>

          </div>

        </div>


        {/* Trust Features */}
        <div className="mt-9 sm:mt-12 pt-7 sm:pt-9 border-t border-paper/10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">

            {/* Secure */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-verdant/10 text-verdant-light flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} />
              </div>

              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs font-medium truncate">
                  Secure Payments
                </h4>
                <p className="hidden sm:block text-[10px] text-paper/35 mt-0.5">
                  Safe checkout
                </p>
              </div>

            </div>


            {/* Delivery */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-verdant/10 text-verdant-light flex items-center justify-center flex-shrink-0">
                <Truck size={16} />
              </div>

              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs font-medium truncate">
                  Fast Delivery
                </h4>
                <p className="hidden sm:block text-[10px] text-paper/35 mt-0.5">
                  Quick shipping
                </p>
              </div>

            </div>


            {/* Returns */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-verdant/10 text-verdant-light flex items-center justify-center flex-shrink-0">
                <RotateCcw size={16} />
              </div>

              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs font-medium truncate">
                  Easy Returns
                </h4>
                <p className="hidden sm:block text-[10px] text-paper/35 mt-0.5">
                  Hassle-free
                </p>
              </div>

            </div>


            {/* Support */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-verdant/10 text-verdant-light flex items-center justify-center flex-shrink-0">
                <Headphones size={16} />
              </div>

              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs font-medium truncate">
                  Customer Support
                </h4>
                <p className="hidden sm:block text-[10px] text-paper/35 mt-0.5">
                  We're here to help
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-paper/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center">

            <p className="text-[9px] sm:text-xs text-paper/30 font-mono">
              © {new Date().getFullYear()} Veylo. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 gap-y-1 text-[9px] sm:text-xs text-paper/30">

              <a href="#" className="hover:text-paper/70 transition-colors">
                Privacy
              </a>

              <a href="#" className="hover:text-paper/70 transition-colors">
                Terms
              </a>

              <span className="hidden sm:inline text-paper/15">|</span>

              <span className="font-mono">
                React • Spring Boot • MySQL
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}