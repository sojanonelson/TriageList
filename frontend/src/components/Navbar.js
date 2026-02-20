"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between mb-16">
      <div className="flex items-center gap-4">
        <Image
          src="/icon.png"
          alt="TriageList"
          width={48}
          height={48}
        />
        <h1 className="text-2xl font-semibold text-[#0284C7]">
          TriageList
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <motion.a
          href="https://github.com/raze0017/TriageList"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="text-[#334155] hover:text-[#0284C7] transition"
        >
          <Github size={22} />
        </motion.a>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/login")}
          className="text-sm px-4 py-2 rounded-lg bg-[#0284C7] text-white"
        >
          Admin Login
        </motion.button>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] font-medium"
        >
          Development in Progress
        </motion.span>
      </div>
    </div>
  )
}