import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export function AnimatedBot() {
  return (
    <div className="flex justify-center mb-8">
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity
        }}
      >
        <Bot className="w-24 h-24 text-green-400" />
      </motion.div>
    </div>
  );
}