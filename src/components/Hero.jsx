import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900">
      <motion.h1
        className="text-6xl font-extrabold text-green-400 mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 10 }}
      >
        4ly3nzz
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      CSE Student | Cybersecurity | Penetration Tester |
      CRTP | eWPTv2 | eCPPTv3 | eJPTv2 | ASIR
      </motion.p>
    </section>
  );
}
