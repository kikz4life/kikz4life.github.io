'use client'

import Head from 'next/head'
import styles from './contact.module.scss'
import Container from '../components/Container'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import socials from '../data/social_link.json'

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
          content="I’m always open to hearing about excitingopportunities"
        />
        <title>Let&#39;s Connect | Dean Francis Casili</title>
      </Head>
      <Header active="contact" />
      <div className={styles.contact}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          Got a question, a project idea, or just want to say hi? I’m always up for a good
          conversation — whether it’s about web development, design, tech trends, or anything in between.
          You can reach me at{' '}
          <a href={`mailto:${email}?subject=It worked Dean!`}>
            {email}
          </a> or find me across social media. Don’t be a stranger!
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          Open to Opportunities
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          I’m job hunting at the moment, I’m always open to hearing about exciting
          opportunities. If you’ve got something interesting in mind, I’d love to hear it.
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          Look me up!
        </motion.h2>

        <motion.div
          className={styles.icons}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              rel="noopener noreferrer"
              variants={item}
              aria-label={social.name}
              target="_blank"
            >
              <svg
                width="75"
                height="75"
                role="img"
                viewBox={social.viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{social.name}</title>
                <path
                  d={social.svg}
                  fill="#fff"
                />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Container>
  )
}