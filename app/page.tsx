'use client'

import Container from "@/app/components/Container";
import ToolIcons from "@/app/components/ToolIcons";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import {Code, Mountain, Briefcase, Sparkles} from "lucide-react";

export default function Home() {
  return (
    <Container>
      <Header active="home" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 px-4 lg:px-16 pt-24 flex-grow">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          >
            It Works!
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
          >
            I&#39;m Dean, a Senior Fullstack Engineer with more than a decade of experience in crafting
            reliable and scalable web solutions. <strong>&#34;It works&#34;</strong> is more than a catchphrase
            — it’s my promise. Outside of tech, I advocate for financial literacy as a licensed
            financial advisor.
          </motion.p>

          <motion.p
            className="mt-4 text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.35 } }}
          >
            <Code className="inline-block w-5 h-5 text-green-400 mr-1" />
            On the front end, I work with React, Angular, and Vue.js. On the back end, my expertise
            is in PHP, particularly with Laravel.
          </motion.p>

          <motion.p
            className="mt-4 text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
          >
            <Mountain className="inline-block w-5 h-5 text-green-400 mr-1" />
            Outside of work, I enjoy hiking, trail running, and I’m a retired casual basketball player.
            {/*<Basketball className="inline-block w-5 h-5 text-green-400 ml-1" />*/}
          </motion.p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center">
          <motion.figure
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.3 } }}
            className="relative w-[410px] h-[410px] rounded-full overflow-hidden group hidden sm:flex animate-[glow_5s_linear_infinite]"
          >
            {/* Optional Lucide icon overlay */}
            <div className="absolute top-3 right-3 z-30 text-green-400">
              <Sparkles className="w-6 h-6 opacity-80" />
            </div>

            {/* Glowing circle hover effect */}
            <div className="absolute w-[405px] h-[405px] rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[colorchange_10s_infinite] border border-white/10 pointer-events-none" />

            {/* Profile image */}
            <Image
              src="/me-400x400.png"
              alt="Dean Francis Picture"
              width={400}
              height={400}
              className="relative rounded-full z-20 transition-transform duration-500 group-hover:scale-90"
            />
          </motion.figure>
        </div>

        {/* Experience Section (Full Width) */}
        <div className="col-span-full mt-12">
          <motion.h2
            className="text-3xl font-bold text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
          >
            Latest Professional Experience
          </motion.h2>

          <motion.div
            className="mt-6 text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
          >
            <motion.h4 className="text-xl font-semibold">
              <Briefcase className="inline-block w-5 h-5 text-green-400 mr-2" />
              Senior Full-stack Developer
            </motion.h4>
            <motion.h5 className="text-sm text-gray-400">June 2018 – Mar 2025</motion.h5>
            <motion.p className="font-medium text-white mt-1">Deltek Inc</motion.p>
            <motion.p className="mt-2">
              Led a cross-functional team of three developers and three QA engineers in the
              development of the Learning and Development module, employing Test-Driven
              Development (TDD), conducting rigorous code reviews, and overseeing the
              implementation of new features. Maintained close collaboration with the Project
              Development Manager and System Architect to ensure architectural consistency and
              project alignment.
            </motion.p>
          </motion.div>
        </div>

        {/* Tools Section */}
        <div className="col-span-full mt-10">
          <ToolIcons limit={1000} />
        </div>
      </div>
    </Container>
  )
}