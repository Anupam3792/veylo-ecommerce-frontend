import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, TrendingUp, Clock } from 'lucide-react';
import api from '../../services/api';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.get('/api/products'), api.get('/api/orders')])
      .then(([p, o]) => {
        setProducts(p.data);
        setOrders(o.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const revenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
  const pending = orders.filter((o) => o.status === 'PENDING').length;

  const stats = [
    { label: 'Products', value: products.length, icon: Package },
    { label: 'Orders', value: orders.length, icon: ShoppingCart },
    { label: 'Revenue', value: `₹${revenue.toFixed(2)}`, icon: TrendingUp },
    { label: 'Pending orders', value: pending, icon: Clock },
  ];

  return (
    <div>
      <h1 className="font-display text-4xl mb-8">Dashboard</h1>
      {loading ? (
        <p className="text-ink/40 font-mono text-sm">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white/60 border border-stone rounded-2xl p-5"
            >
              <s.icon size={18} strokeWidth={1.75} className="text-verdant mb-3" />
              <p className="font-mono text-2xl">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-ink/40 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}