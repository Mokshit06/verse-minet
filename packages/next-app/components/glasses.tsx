import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisible } from './app-store';

export function Glasses() {
  const state = useVisible();

  return (
    <AnimatePresence>
      {state.visible === 'glasses' ? (
        <motion.img
          src="/glasses.png"
          initial={{ translateY: -1000, opacity: 0.3 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: -1000, opacity: 0.3 }}
          transition={{
            duration: 0.15,
            type: 'spring',
            bounce: 0.05,
            stiffness: 90,
          }}
          style={{
            position: 'absolute',
            width: '100%',
            pointerEvents: 'painted',
            filter: 'drop-shadow(2px -10px 10px #5b5b5b)',
          }}
        />
      ) : null}
    </AnimatePresence>
  );
}
