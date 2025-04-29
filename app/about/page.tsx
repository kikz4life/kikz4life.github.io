'use client'

import Head from 'next/head'
import styles from './about.module.scss'
import Container from '../components/Container'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import projectList from '../data/about.json'

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
      <div className={styles.about}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          My Work
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          Professional
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          These projects are privately owned, so I can’t share them
          publicly—but I’d be happy to talk about the work I did if you’re curious!
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          Playground Projects
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          I&#39;m always experimenting with new technologies. While setting up projects with
          a PHP backend can be resource-intensive, here are a few front-end stack demos
          I’ve built to explore and showcase ideas.
        </motion.p>

        <motion.div
          className={styles.list}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {abouts.map((about) => (
            <motion.div
              variants={item}
              key={about.name}
              className={`${!about.active ? styles.broken : ''}`}
            >
              <div className={styles.top}>
                <a href={about.link} className={styles.title} target="_blank">
                  {about.name}
                </a>
                <a href={about.link} className={styles.icon} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M41.28 10.323h178.774l73.052 82.466H115.194c-17.61 0-32.02 14.41-32.02 32.02v401.403c0 17.598 14.41 32.02 32.02 32.02h406.328c17.61 0 32.02-14.422 32.02-32.02v-181.62l83.174 69.19v185.624c0 22.7-18.567 41.28-41.28 41.28H41.28c-22.712 0-41.28-18.58-41.28-41.28V51.604c0-22.702 18.568-41.28 41.28-41.28zM640-.685L311.378 13.843l104.801 104.8-230.755 230.744 101.21 101.21 230.755-230.755 106.82 106.82L640-.685z" />
                  </svg>
                </a>
              </div>
              <span className={styles.desc}>{about.desc}</span>
              <span className={styles.built}>
                {about.uses.map((u, key) => (
                  <span key={`${u}-${key}`}>{u}</span>
                ))}
              </span>
              {!about.active ? (
                <span className={styles.brokenAPI}>Deprecated API</span>
              ) : null}
            </motion.div>
          ))}

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
          >
            Please checkout my{' '}
            <a target="_blank" href="https://github.com/kikz4life">github account</a>.
          </motion.p>
        </motion.div>
      </div>
    </Container>
  )
}