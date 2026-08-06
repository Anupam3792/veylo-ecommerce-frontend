import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import ScrollReveal from '../components/ScrollReveal';
import OrderTimeline from '../components/OrderTimeline';

const statusColor = {
  PENDING: 'text-ember bg-ember/10',
  CONFIRMED: 'text-verdant bg-verdant/10',
  SHIPPED: 'text-verdant bg-verdant/10',
  DELIVERED: 'text-verdant bg-verdant/10',
};

export default function Orders() {
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setLoading(false);
      return;
    }
    api.get(`/api/orders/user/${user.id}`)
      .then((res) => setOrders(res.data))
      .catch(() => setError('Could not load your orders.'))
      .finally(() => setLoading(false));
  }, [user, authLoading]);

  if (!authLoading && !user) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 text-center">
        <h1 className="font-display text-3xl">Sign in to see your orders</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h1 className="font-display text-5xl">Order history</h1>
      </ScrollReveal>

      {loading && <p className="mt-10 text-ink/40 font-mono text-sm">Loading orders...</p>}
      {error && <p className="mt-10 text-ember font-mono text-sm">{error}</p>}
      {!loading && !error && orders.length === 0 && (
        <p className="mt-10 text-ink/40 font-mono text-sm">No orders yet.</p>
      )}

      <div className="mt-10 space-y-4">
        {orders.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white/60 border border-stone rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Package size={18} strokeWidth={1.75} className="text-ink/40" />
                <span className="font-mono text-sm text-ink/50">Order #{order.id}</span>
              </div>
              <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full ${statusColor[order.status] || 'text-ink/50 bg-stone'}`}>
                {order.status}
              </span>
              <div className="mt-5 mb-1 px-1">
              <OrderTimeline status={order.status} />
            </div>
            </div>

            <div className="mt-4 space-y-2">
              {order.items.map((item) => (
                <div key={item.productId} className="flex justify-between text-sm text-ink/70">
                  <span>{item.productName} × {item.quantity}</span>
                  <span className="font-mono">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-stone flex justify-between font-display text-lg">
              <span>Total</span>
              <span className="font-mono">₹{order.totalAmount.toFixed(2)}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}