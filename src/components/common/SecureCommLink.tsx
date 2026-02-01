import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Send,
  Radio,
  Lock,
  Shield,
  Zap,
  MessageSquare,
} from "lucide-react";
import type { MessagePayload } from "../../types";
import { phone, QUICK_PAYLOADS } from "../../data/portfolio.data";

export const SecureCommLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showNudge, setShowNudge] = useState(false);
  const [nudgePhase, setNudgePhase] = useState(0);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [signalStrength, setSignalStrength] = useState(100);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [randId] = useState(() =>
    Math.random().toString(36).substring(2, 9).toUpperCase(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength((prev) => {
        const change = Math.random() > 0.5 ? 2 : -2;
        const newVal = prev + change;
        return Math.max(85, Math.min(100, newVal));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const playNudgeSequence = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        setNudgePhase(1);

        await new Promise((r) => setTimeout(r, 1500));
        setNudgePhase(2);

        await new Promise((r) => setTimeout(r, 2000));
        setNudgePhase(3);
      };
      if (!isOpen) {
        setShowNudge(true);
        playNudgeSequence();
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowNudge(false);
    setTimeout(() => inputRef.current?.focus(), 400);
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    setIsEncrypting(true);
    await new Promise((r) => setTimeout(r, 1200));

    const encoded = encodeURIComponent(message);
    const phoneNumber = phone;

    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");

    setIsEncrypting(false);
    setIsOpen(false);
    setMessage("");
  };

  const handleQuickSelect = (payload: MessagePayload) => {
    setMessage(payload.text);
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="fixed bottom-12 md:bottom-20 right-8 md:right-12 z-50 flex flex-col items-end gap-4 pointer-events-none">
        <AnimatePresence mode="wait">
          {showNudge && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="pointer-events-auto"
            >
              <div
                className="relative group cursor-pointer"
                onClick={handleOpen}
              >
                <div className="backdrop-blur-md p-4 rounded-lg card-glow max-w-[280px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,212,0.02)_50%)] bg-size-[100%_4px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Radio
                        className={`w-3 h-3 ${nudgePhase >= 1 ? "text-terminal-green animate-pulse" : "text-secondary"}`}
                      />
                      <span className="text-[10px] font-tech-mono text-primary/50 uppercase tracking-[0.2em]">
                        {nudgePhase === 0 && "SCANNING..."}
                        {nudgePhase === 1 && "SIGNAL_DETECTED"}
                        {nudgePhase === 2 && "DECODING..."}
                        {nudgePhase === 3 && "INCOMING_TRANSMISSION"}
                      </span>
                    </div>

                    <div className="font-tech-mono text-sm text-accent-foreground min-h-10 flex items-center">
                      {nudgePhase < 2 && (
                        <span className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <motion.span
                              key={i}
                              animate={{ opacity: [0.2, 1, 0.2] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                              className="w-1.5 h-1.5 bg-primary rounded-full"
                            />
                          ))}
                        </span>
                      )}

                      {nudgePhase === 2 && (
                        <div className="flex gap-1 text-primary font-bold tracking-widest">
                          {".... ..".split("").map((char, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.15 }}
                            >
                              {char === " " ? "\u00A0" : char}
                            </motion.span>
                          ))}
                        </div>
                      )}

                      {nudgePhase === 3 && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="leading-relaxed"
                        >
                          <span className="text-primary">[</span>
                          Ready to connect? Establish secure line.
                          <span className="text-primary">]</span>
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>
                </div>

                <div className="absolute -bottom-2 right-8 w-3 h-3 card-glow transform rotate-45"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={
            showNudge && !isOpen
              ? {
                  boxShadow: [
                    "0 0 0 0 rgba(6,182,212,0)",
                    "0 0 0 15px rgba(6,182,212,0.1)",
                    "0 0 0 30px rgba(6,182,212,0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
          className={`
            pointer-events-auto relative w-16 h-16 rounded-2xl bg-background/90 
            border ${showNudge ? "border-primary shadow-[0_0_30px_rgba(6,182,212,0.4)]" : "border-primary/30"} 
            hover:border-primary/80 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]
            transition-all duration-300 group overflow-hidden
          `}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-full h-full border border-primary/30 rounded-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute w-full h-full border border-primary/20 rounded-2xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <MessageSquare className="w-6 h-6 text-primary group-hover:text-accent-foreground transition-colors" />
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1 h-1 bg-terminal-green rounded-full animate-pulse"></div>
              <span className="text-[8px] font-tech-mono text-primary/60 group-hover:text-primary/40">
                LIVE
              </span>
            </div>
          </div>

          <div className="absolute top-1 left-2 text-[6px] font-tech-mono text-primary/50">
            TX
          </div>
          <div className="absolute bottom-1 right-2 text-[6px] font-tech-mono text-primary/50">
            {signalStrength}%
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => !isEncrypting && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-background border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.2)] relative"
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRleHQgeD0iMCIgeT0iMTUiIGZpbGw9IiMwMGZmZDQiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiPjE8L3RleHQ+PC9zdmc+')]"></div>

              <div className="bg-background/80 border-b border-border/80 p-4 flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-3 h-3 rounded-full bg-destructive/80 hover:bg-destructive transition-colors"
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-terminal-green/70"></div>
                  </div>
                  <div className="h-4 w-px bg-primary/20 mx-2"></div>
                  <div className="flex items-center gap-2 text-primary font-tech-mono text-xs tracking-wider">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>COMMLINK_v2.0.exe</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1.5 px-2 py-1 rounded bg-terminal-green/10 border border-terminal-green/30"
                  >
                    <div className="w-1.5 h-1.5 bg-terminal-green rounded-full"></div>
                    <span className="text-[10px] font-tech-mono text-terminal-green uppercase">
                      Secure
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="bg-primary/5 px-4 py-2 flex items-center justify-between text-[10px] font-tech-mono border-b border-border/50">
                <div className="flex items-center gap-3 text-primary/50">
                  <span className="flex items-center gap-1">
                    <Radio className="w-3 h-3" />
                    FREQ: 2.4GHz
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    TLS 1.3
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    E2E_ENCRYPTED
                  </span>
                </div>
                <div className="text-primary/70 font-tech-mono">
                  ID: {randId}
                </div>
              </div>

              <div className="p-6 space-y-5 relative">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-linear-to-r from-card-foreground/5 to-transparent border border-border/30">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-linear-to-br from-glow-cyan to-blue-600 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                      M
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-primary"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-terminal-green border-2 border-primary-foreground rounded-full flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-accent-foreground font-tech-mono font-bold text-lg tracking-tight">
                      Mercy Chelangat
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-tech-mono text-primary/70">
                        Full Stack Engineer
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs font-tech-mono text-terminal-green/50 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Usually responds in 10m
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-tech-mono text-primary/40 uppercase tracking-[0.15em] flex items-center gap-2">
                    <span className="w-2 h-px bg-muted-foreground/30"></span>
                    Select Protocol
                    <span className="w-2 h-px bg-muted-foreground/30"></span>
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {QUICK_PAYLOADS.map((payload) => (
                      <button
                        key={payload.id}
                        onClick={() => handleQuickSelect(payload)}
                        className={`
                          text-left px-3 py-2.5 rounded border font-tech-mono text-xs transition-all duration-200 group
                          ${
                            message === payload.text
                              ? "bg-primary/10 border-border text-primary"
                              : "bg-background/20 border-border/30 text-foreground/70 hover:border-border/80 hover:bg-primary/5"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span className="uppercase tracking-wider text-[10px] opacity-70 group-hover:text-primary/80">
                            {payload.label}
                          </span>
                          {message === payload.text && (
                            <motion.div
                              layoutId="selected-indicator"
                              className="w-1.5 h-1.5 bg-primary rounded-full"
                            />
                          )}
                        </div>
                        <p className="mt-1 line-clamp-1 opacity-80">
                          {payload.text}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-tech-mono text-primary/40 uppercase tracking-[0.15em]">
                      Custom Payload
                    </label>
                    <span
                      className={`text-[10px] font-tech-mono ${message.length > 0 ? "text-primary/80" : "text-foreground/70"}`}
                    >
                      {message.length} chars
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      ref={inputRef}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && e.metaKey) {
                          handleSend();
                        }
                      }}
                      placeholder="> Enter transmission data..."
                      className="w-full bg-background/50 border border-border/50 rounded-lg p-4 text-foreground placeholder-primary/15 font-tech-mono text-sm focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-ring/20 resize-none h-28 transition-all placeholder:font-light"
                      spellCheck="false"
                    />
                    <div className="absolute bottom-3 right-3 text-[10px] text-primary/40 font-tech-mono pointer-events-none">
                      [⌘ + ENTER] to transmit
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={handleSend}
                  disabled={!message.trim() || isEncrypting}
                  whileHover={
                    message.trim() && !isEncrypting ? { scale: 1.01 } : {}
                  }
                  whileTap={
                    message.trim() && !isEncrypting ? { scale: 0.99 } : {}
                  }
                  className={`
                    w-full py-3.5 px-6 rounded-lg font-tech-mono font-bold text-sm flex items-center justify-center gap-3 transition-all relative overflow-hidden
                    ${
                      message.trim() && !isEncrypting
                        ? "bg-glow-cyan text-primary-foreground hover:bg-glow-cyan/90 shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                        : "bg-muted text-foreground/40 cursor-not-allowed border border-muted"
                    }
                  `}
                >
                  {isEncrypting ? (
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Lock className="w-4 h-4" />
                      </motion.div>
                      <span>ENCRYPTING_PAYLOAD...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>INITIATE_TRANSMISSION</span>
                    </>
                  )}

                  {message.trim() && !isEncrypting && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  )}
                </motion.button>

                <div className="text-center space-y-1">
                  <div className="text-[10px] text-foreground/30 font-tech-mono flex items-center justify-center gap-2">
                    <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                    END-TO-END ENCRYPTED VIA WHATSAPP PROTOCOL
                    <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isEncrypting && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center z-20"
                  >
                    <div className="relative w-24 h-24 mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 border-2 border-primary/30 border-t-primary rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-2 border-2 border-primary/20 border-b-primary/80 rounded-full"
                      />
                      <Lock className="absolute inset-0 m-auto w-8 h-8 text-primary/80" />
                    </div>
                    <div className="font-tech-mono text-primary/80 text-sm animate-pulse">
                      SECURE HANDSHAKE
                    </div>
                    <div className="font-tech-mono text-primary text-xs mt-2">
                      Establishing quantum channel...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
