import styles from './container.module.scss'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={styles.outer}>
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  )
}