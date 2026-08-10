import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, TrendingUp, Clock } from 'lucide-react';
import api from '../../services/api';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadDashboard = async () => {
      setLoading(true);
      setError('');

      try {
        const [productsRes, ordersRes] = await Promise.all([
          api.get('/api/products'),
          api.get('/api/orders'),
        ]);

        setProducts(Array.isArray(productsRes.data) ? productsRes.data : []);
        setOrders(Array.isArray(ordersRes.data) ? ordersRes.data : []);
      } catch (err) {
        console.error('Admin dashboard loading error:', err);
        setError('Could not load dashboard data.');
        setProducts([]);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const revenue = orders.reduce(
    (sum, order) => sum + Number(order.totalAmount || 0),
    0
  );

  const pending = orders.filter(
    (order) => order.status === 'PENDING'
  ).length;

  const stats = [
    {
      label: 'Products',
      value: products.length,
      icon: Package,
    },
    {
      label: 'Orders',
      value: orders.length,
      icon: ShoppingCart,
    },
    {
      label: 'Revenue',
      value: `₹${revenue.toFixed(2)}`,
      icon: TrendingUp,
    },
    {
      label: 'Pending orders',
      value: pending,
      icon: Clock,
    },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl mb-8">
        Dashboard
      </h1>

      {error && (
        <p className="mb-6 text-ember font-mono text-sm">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-ink/40 font-mono text-sm">
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                className="bg-white/60 border border-stone rounded-2xl p-5"
              >
                <Icon
                  size={18}
                  strokeWidth={1.75}
                  className="text-verdant mb-3"
                />

                <div className="font-display text-2xl">
                  {s.value}
                </div>

                <div className="text-xs font-mono text-ink/40 mt-1">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}