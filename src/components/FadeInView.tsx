import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInView({ children, delay = 0, className = '' }: FadeInViewProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}