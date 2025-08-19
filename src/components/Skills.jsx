import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python / Bash",
    "SQL / NoSQL",
    "Web Security (XSS, SQLi, LFI/RFI)",
    "Nmap / BurpSuite / Metasploit",
    "OSINT & Recon",
    "Linux & Docker",
  ];

  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-green-400 mb-6">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
        {skills.map((s, i) => <li key={i}>🔹 {s}</li>)}
      </ul>
    </motion.section>
  );
}
