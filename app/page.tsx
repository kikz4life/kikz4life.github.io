'use client'

import styles from './main.module.scss'
import Container from "@/app/components/Container";
import ToolIcons from "@/app/components/ToolIcons";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import { Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Header active="home" />

      {/* Main Text and Image Row */}
      <Row className={`${styles.home} ${styles.homeContent}`}>
        {/* Text Column (Left Side) */}
        <Col md={5} lg={6} className="d-flex flex-column justify-content-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          >
            It Works!
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
          >
            I&#39;m Dean, a Senior Fullstack Engineer with more than a decade of experience in
            crafting reliable and scalable web solutions. &#34;It works&#34; is more than a
            catchphrase — it’s my promise. Outside of tech, I advocate for financial
            literacy as a licensed financial advisor.
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
          >
            On the front end, I work with React, Angular, and Vue.js. On the back end, my expertise
            is in PHP, particularly with Laravel.
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
          >
            Outside of work, I enjoy hiking, trail running, and I’m a retired casual basketball player.
          </motion.p>
        </Col>

        {/* Image Column (Right Side) */}
        <Col md={7} lg={6} className="d-flex justify-content-center align-items-center">
          <motion.figure
            className={styles.image}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <img src="/me-400x400.png" alt="Dean Francis Casili Picture" />
          </motion.figure>
        </Col>
        <Col md={12} lg={12} className="d-flex flex-column justify-content-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          >
            Latest Professional Experience
          </motion.h2>
          <motion.div>
            <motion.h4>Senior Full-stack Developer</motion.h4>
            <motion.h5>June 2018 – Mar 2025</motion.h5>
            <motion.p>Deltek Inc</motion.p>
            <motion.p>
              Led a cross-functional team of three developers and three QA engineers in the
              development of the Learning and Development module, employing Test-Driven
              Development (TDD), conducting rigorous code reviews, and overseeing the
              implementation of new features. Maintained close collaboration with the Project
              Development Manager and System Architect to ensure architectural consistency and
              project alignment
            </motion.p>
          </motion.div>
        </Col>
      </Row>

      {/* ToolIcons Separate Row at the Bottom */}
      <Row className="mt-5">
        <Col>
          <ToolIcons limit={1000}/>
        </Col>
      </Row>
    </Container>
  )
}