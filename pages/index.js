import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Star Technologies</h1>
        <p className="text-lg mt-4 text-gray-400">Innovating the Future with Technology</p>
      </motion.header>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-6 flex space-x-6"
      >
        <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
        <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
      </motion.nav>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl"
      >
        <Card className="bg-gray-800 p-6 rounded-2xl shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-semibold">Orbis Renting</h2>
            <p className="text-gray-400 mt-2">Revolutionizing property rentals with a seamless, secure, and transparent experience. Launching July 2024.</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-700">Learn More</Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 p-6 rounded-2xl shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-semibold">Health Star</h2>
            <p className="text-gray-400 mt-2">A digital healthcare ecosystem integrating emergency services, telemedicine, and AI-powered health insights. Launching May 2024.</p>
            <Button className="mt-4 bg-green-500 hover:bg-green-700">Learn More</Button>
          </CardContent>
        </Card>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-16 text-gray-400"
      >
        <p>&copy; 2024 Star Technologies. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}