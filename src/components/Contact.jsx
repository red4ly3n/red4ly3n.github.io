import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-800 py-20 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Contact</h2>
        <p className="text-gray-300 mb-6">Let’s connect! You can find me here:</p>
        <div className="space-x-6">
          <a href="mailto:tuemail@example.com" className="text-green-400 hover:underline">Email</a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" className="text-green-400 hover:underline">LinkedIn</a>
          <a href="https://github.com/tuusuario" target="_blank" className="text-green-400 hover:underline">GitHub</a>
        </div>
      </div>
    </motion.section>
  );
}
