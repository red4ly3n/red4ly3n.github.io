import { motion } from "framer-motion";

const projects = [
  { name: "Web Scanner", desc: "Python tool to scan websites for SQLi, XSS, and misconfigurations.", link: "#" },
  { name: "HTB Writeups", desc: "CTF writeups for HackTheBox and TryHackMe machines.", link: "#" },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-gray-800 py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-[0_0_20px_#00ff99] transition"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ff99" }}
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">{p.name}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <a href={p.link} target="_blank" className="text-green-400 hover:underline">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
