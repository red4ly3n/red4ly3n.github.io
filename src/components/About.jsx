import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-green-400 mb-6">About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        I’m a cybersecurity enthusiast with a focus on penetration testing, web application security, and OSINT.
        I enjoy building security tools, analyzing vulnerabilities, and participating in Capture the Flag challenges.
      </p>
    </motion.section>
  );
}
