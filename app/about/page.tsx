'use client'

import Head from 'next/head'
import Container from '../components/Container'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import projectList from '../data/about.json'
import {Drill, ExternalLink, SearchSlash} from "lucide-react";
import GithubProjects from "@/app/components/GithubProjects";

interface About {
  name: string
  link: string
  desc: string
  uses: string[]
  active: boolean
}

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const abouts: About[] = projectList

  return (
    <Container>
      <Head>
        <meta
          name="description"
          content="Here are a few front-end stack demos I’ve built to explore and showcase ideas"
        />
        <title>Abouts | Dean Francis Casili</title>
      </Head>
      <Header active="about" />
      <div className="grid grid-cols-1 gap-8 py-16 px-4 lg:px-16 pt-24 flex-grow">
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          My Work
        </motion.h1>

        <motion.h4  className="text-xl font-semibold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          <SearchSlash className="inline-block w-5 h-5 text-green-400 mr-2" />
          Professional
        </motion.h4>

        <motion.p className="mt-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          These projects are privately owned, so I can’t share them
          publicly—but I’d be happy to talk about the work I did if you’re curious!
        </motion.p>

        <motion.h4  className="text-xl font-semibold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          <Drill className="inline-block w-5 h-5 text-green-400 mr-2" />
          Playground Projects
        </motion.h4>

        <motion.p className="mt-4 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          I&#39;m always experimenting with new technologies. While setting up projects with
          a PHP backend can be resource-intensive, here are a few front-end stack demos
          I’ve built to explore and showcase ideas.
        </motion.p>
        <GithubProjects />

        <motion.div
          className="flex flex-wrap justify-start min-h-[80vh] pt-[50px]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {abouts.map((about) => (
            <motion.div
              key={about.name}
              variants={item}
              className={`w-[32%] mx-[0.5%] mb-2.5 p-4 rounded bg-[#273146] shadow-[0px_2px_2px_#0b152b] hover:bg-[#2e3c58] ${
                !about.active ? 'opacity-40' : ''
              } 
          max-[900px]:w-[49%] 
          max-[600px]:w-full`}
            >
              <div className="flex justify-between items-center mb-2">
                <a
                  href={about.link}
                  target="_blank"
                  className="text-white font-bold text-xl hover:underline"
                >
                  {about.name}
                </a>
                <a href={about.link} target="_blank" className="mt-1">
                  <ExternalLink className="w-[13px] text-white" />
                </a>
              </div>

              <span className="block mb-1 text-sm italic leading-[1.4rem] text-white/90">
            {about.desc}
          </span>

              <span className="flex flex-wrap">
            {about.uses.map((u, key) => (
              <span
                key={`${u}-${key}`}
                className="mr-1 mb-1 px-2 py-[3px] text-xs uppercase bg-[#a2a2a2] text-black rounded"
              >
                {u}
              </span>
            ))}
          </span>

              {!about.active && (
                <span className="inline-block px-2 py-[3px] mt-1 text-[10px] uppercase font-bold text-[#ff0d0d] bg-black rounded">
              Deprecated API
            </span>
              )}
            </motion.div>
          ))}

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
            className="mt-1 text-white"
          >
            Please checkout my{' '}
            <a
              target="_blank"
              href="https://github.com/kikz4life"
              className="text-primary underline"
            >
              GitHub account
            </a>
            .
          </motion.p>
        </motion.div>
      </div>
    </Container>
  )
}