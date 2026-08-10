import { motion } from 'framer-motion';
import { Check, Package, Truck, Home } from 'lucide-react';

const STEPS = [
  { key: 'PENDING', label: 'Placed', icon: Package },
  { key: 'CONFIRMED', label: 'Confirmed', icon: Check },
  { key: 'SHIPPED', label: 'Shipped', icon: Truck },
  { key: 'DELIVERED', label: 'Delivered', icon: Home },
];

export default function OrderTimeline({ status }) {
  const currentIndex = STEPS.findIndex((s) => s.key === status);
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;

  return (
    <div className="flex items-center w-full min-w-0">
      {STEPS.map((step, i) => {
        const isDone = i < activeIndex;
        const isActive = i === activeIndex;
        const Icon = step.icon;

        return (
          <div key={step.key} className="flex items-center flex-1 last:flex-none min-w-0">
            <div className="flex flex-col items-center min-w-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isDone || isActive ? 'bg-verdant text-paper' : 'bg-stone text-ink/30'
                }`}
              >
                {isDone ? <Check size={14} strokeWidth={2.5} /> : <Icon size={13} strokeWidth={1.75} />}
              </motion.div>
              <span
                className={`text-[9px] sm:text-[11px] font-mono mt-1 sm:mt-1.5 truncate max-w-[48px] sm:max-w-none text-center ${
                  isActive ? 'text-verdant' : isDone ? 'text-ink/60' : 'text-ink/30'
                }`}
              >
                {step.label}
              </span>
            </div>

            {i < STEPS.length - 1 && (
              <div className="flex-1 h-0.5 mx-1 sm:mx-2 -mt-4 sm:-mt-5 bg-stone relative overflow-hidden rounded-full min-w-[8px]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isDone ? '100%' : '0%' }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
                  className="absolute inset-y-0 left-0 bg-verdant rounded-full"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}