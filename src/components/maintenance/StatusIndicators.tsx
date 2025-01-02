import { Shield, Wifi } from "lucide-react";
import { motion } from "framer-motion";

export function StatusIndicators() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="flex justify-center gap-4 text-sm"
    >
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4" />
        <span>Firewall: Active</span>
      </div>
      <div className="flex items-center gap-2">
        <Wifi className="w-4 h-4" />
        <span>Neural Network: Unstable</span>
      </div>
    </motion.div>
  );
}