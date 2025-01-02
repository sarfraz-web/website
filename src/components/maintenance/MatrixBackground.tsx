import { motion } from "framer-motion";

export function MatrixBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xs"
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{ 
            y: window.innerHeight + 100,
            transition: { 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {Array.from({ length: 20 }).map(() => 
            Math.random().toString(2).substring(2, 3)
          )}
        </motion.div>
      ))}
    </div>
  );
}