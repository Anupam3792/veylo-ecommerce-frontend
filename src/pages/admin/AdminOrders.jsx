import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../../services/api';

const STATUSES = ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED'];

const statusColor = {
  PENDING: 'text-ember bg-ember/10',
  CONFIRMED: 'text-verdant bg-verdant/10',
  SHIPPED: 'text-verdant bg-verdant/10',
  DELIVERED: 'text-verdant bg-verdant/10',
};

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const loadOrders = () => {
    setLoading(true);
    api.get('/api/orders').then((res) => setOrders(res.data)).finally(() => setLoading(false));
  };

  useEffect(() => { loadOrders(); }, []);

  const handleStatusChange = async (orderId, status) => {
    setUpdatingId(orderId);
    try {
      await api.put(`/api/orders/${orderId}/status`, {}, { params: { status } });
      setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status } : o)));
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div>
      <h1 className="font-display text-4xl mb-8">Orders</h1>

      {loading ? (
        <p className="text-ink/40 font-mono text-sm">Loading...</p>
      ) : orders.length === 0 ? (
        <p className="text-ink/40 font-mono text-sm">No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order, i) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="bg-white/60 border border-stone rounded-2xl p-5"
            >
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="font-mono text-sm text-ink/50">Order #{order.id}</span>
                  <span className="text-sm text-ink/60 ml-3">{order.shippingName || 'No shipping name'}</span>
                </div>
                <select
                  value={order.status}
                  disabled={updatingId === order.id}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-verdant/40 ${statusColor[order.status] || 'text-ink/50 bg-stone'}`}
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mt-3 flex justify-between text-sm text-ink/60">
                <span>{order.items.length} item{order.items.length !== 1 ? 's' : ''}</span>
                <span className="font-mono">₹{order.totalAmount.toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}