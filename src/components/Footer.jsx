import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

// lucide-react removed brand/logo icons (Facebook, Instagram, Twitter, YouTube)
// from its exports, so these are small inline SVGs instead, sized to match
// the rest of the icon set (17px, matching stroke weight visually).
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M15 8h-2a2 2 0 0 0-2 2v10M9 13h6" />
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="2" y="6" width="20" height="12" rx="4" />
      <path d="M10 9.5l5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const shopLinks = [
  { label: 'Full Catalog', to: '/catalog' },
  { label: 'Categories', to: '/categories' },
  { label: 'Deals & Offers', to: '/deals' },
  { label: 'New Arrivals', to: '/new-arrivals' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Orders', to: '/orders' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Shipping Policy', to: '/shipping' },
  { label: 'Return & Refund Policy', to: '/returns' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'YouTube', href: 'https://youtube.com', Icon: YoutubeIcon },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-sans text-xs uppercase tracking-widest text-paper/50 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-sm text-paper/70 hover:text-verdant-light transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address');
      return;
    }
    setError('');
    // TODO: wire up to a real /api/newsletter/subscribe endpoint once it exists on the backend
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div>
      <h3 className="font-sans text-xs uppercase tracking-widest text-paper/50 mb-4">Newsletter</h3>
      <p className="text-sm text-paper/70 mb-4 max-w-xs">
        Get early access to new arrivals and subscriber-only deals.
      </p>
      <form onSubmit={handleSubmit} className="flex items-stretch gap-2 max-w-xs">
        <div className="relative flex-1">
          <Mail size={15} strokeWidth={1.75} className="absolute left-3 top-1/2 -translate-y-1/2 text-paper/30" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-label="Email address"
            className="w-full bg-ink-light border border-paper/10 rounded-full pl-9 pr-3 py-2 text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-verdant-light transition-colors"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Subscribe"
          className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-colors ${
            subscribed ? 'bg-verdant' : 'bg-paper text-ink hover:bg-verdant-light hover:text-paper'
          }`}
        >
          {subscribed ? <Check size={15} strokeWidth={2} className="text-paper" /> : <ArrowRight size={15} strokeWidth={1.75} />}
        </motion.button>
      </form>
      {error && <p className="mt-2 text-xs font-mono text-ember">{error}</p>}
      {subscribed && <p className="mt-2 text-xs font-mono text-verdant-light">Subscribed — welcome aboard.</p>}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper border-t border-ink-light mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
          <div className="col-span-2 md:col-span-1 md:pr-6">
            <Link to="/">
              <span className="font-display italic text-2xl tracking-tight inline-block">Veylo</span>
            </Link>
            <p className="mt-4 text-sm text-paper/60 max-w-[220px]">
              Everything in stock, nothing overpriced. Live inventory, straight from the source.
            </p>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
          <div className="col-span-2 md:col-span-1">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-paper/40">© {year} Veylo. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-paper/50 hover:text-verdant-light transition-colors"
              >
                <Icon width={17} height={17} className="block" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
