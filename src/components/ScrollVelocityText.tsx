import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

interface ScrollVelocityTextProps {
  text: string;
  baseVelocity?: number;
}

export default function ScrollVelocityText({ text, baseVelocity = 1 }: ScrollVelocityTextProps) {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [x, setX] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    
    const updatePosition = () => {
      const velocity = velocityFactor.get() * baseVelocity;
      baseX.current = baseX.current - velocity;
      
      // Loop the position
      if (baseX.current < -50) {
        baseX.current = 0;
      }
      
      setX(baseX.current);
      animationFrame = requestAnimationFrame(updatePosition);
    };

    animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [baseVelocity, velocityFactor]);

  return (
    <div className="w-full overflow-hidden bg-[#521D07] dark:bg-[#A47A2D] py-12 border-y-4 border-[#A47A2D] dark:border-[#521D07]">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x: `${x}%` }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            style={{ fontFamily: 'Michroma, sans-serif' }}
            className="text-[80px] md:text-[120px] font-black text-[#A47A2D] dark:text-[#521D07] uppercase px-8"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
