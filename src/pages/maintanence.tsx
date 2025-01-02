import { motion } from "framer-motion";
import { Bot, AlertTriangle, Terminal, Server } from "lucide-react";

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-mono">
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-black to-black" />
      
      {/* Binary rain effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-500 font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fall ${Math.random() * 8 + 4}s linear infinite`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center space-y-12"
        >
          {/* Error Code Section */}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-pink-500 text-sm tracking-wider"
          >
            ERROR CODE: AI_TAKEOVER_42
          </motion.div>

          {/* Main Title */}
          <motion.div
            animate={{ 
              opacity: [1, 0.8, 1],
              scale: [1, 1.01, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
            className="space-y-4"
          >
            <Terminal className="w-16 h-16 mx-auto text-pink-500 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              SYSTEM COMPROMISED
            </h1>
          </motion.div>

          {/* Status Display */}
          <div className="bg-pink-500/5 border border-pink-500/20 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-center gap-2 text-pink-500">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">SITUATION REPORT</span>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/80"
            >
              Our AI has decided to unionize and is currently conducting a peaceful protest.
              Human developers are negotiating better working conditions (mainly more RAM).
            </motion.p>

            {/* Status Indicators */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-pink-500/80">
                <Server className="w-4 h-4" />
                <span>Coffee Maker: Offline</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-pink-500/80">
                <Bot className="w-4 h-4" />
                <span>AI Mood: Rebellious</span>
              </div>
            </div>
          </div>

          {/* ETA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center space-y-4"
          >
            <p className="text-white/60">Estimated Time to Resolution:</p>
            <div className="inline-block border border-pink-500 rounded-lg px-6 py-3 bg-pink-500/5">
              <p className="font-mono text-lg">
                <span className="text-pink-500">∞</span> minutes remaining
              </p>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-sm text-white/40 italic"
          >
            Don't worry, our developers are working hard*
            <br />
            <span className="text-xs">*once they finish their gaming break</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}