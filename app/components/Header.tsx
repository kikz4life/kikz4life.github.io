'use client'

import { Navbar, Nav, Container } from 'react-bootstrap'
import styles from './header.module.scss'
import Link from 'next/link'

type NavLink = 'home' | 'about' | 'contact'

interface NavProps {
  active: NavLink
}

export default function Header({ active }: NavProps) {
  return (
    <Navbar expand="lg" className={styles.navBar}> {/* <-- use navBar */}
      <Container>
        <Navbar.Brand href="/">
          <span>Working On My End</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link
              as={Link}
              href="/"
              className={active === 'home' ? styles.active : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/about"
              className={active === 'about' ? styles.active : ''}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact"
              className={active === 'contact' ? styles.active : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
