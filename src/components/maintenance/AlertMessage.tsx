import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export function AlertMessage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex items-center justify-center gap-2"
    >
      <AlertTriangle className="w-6 h-6 text-yellow-500" />
      <p className="text-yellow-500">ALERT: AI System Malfunction</p>
    </motion.div>
  );
}