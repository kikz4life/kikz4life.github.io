'use client'

import Head from 'next/head'
import Container from '../components/Container'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import socials from '../data/social_link.json'
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Globe,
} from 'lucide-react'

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Globe,
}


export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const email = 'dean.casili@gmail.com'

  return (
    <Container>
      <Head>
        <meta
          name="description"
          content="I’m always open to hearing about exciting opportunities"
        />
        <title>Let&#39;s Connect | Dean Francis Casili</title>
      </Head>

      <Header active="contact" />

      <div className="grid grid-cols-1 gap-8 py-16 px-4 lg:px-16 pt-24 flex-grow">
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          Got a question, a project idea, or just want to say hi? I’m always up for a good
          conversation — whether it’s about web development, design, tech trends, or anything in between.
          You can reach me at{' '}
          <a href={`mailto:${email}?subject=It worked Dean!`} className="underline text-primary">
            {email}
          </a>{' '}
          or find me across social media. Don’t be a stranger!
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-white mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          Open to Opportunities
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          I’m job hunting at the moment, and always open to hearing about exciting
          opportunities. If you’ve got something interesting in mind, I’d love to hear it.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-white mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          Look me up!
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {socials.map((social, index) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap] || Globe // fallback
            return (
              <motion.a
                key={index}
                href={social.url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={social.name}
                className="text-white hover:text-primary transition-colors"
                variants={item}
              >
                <Icon size={75} />
              </motion.a>
            )
          })}

        </motion.div>
      </div>
    </Container>
  )
}