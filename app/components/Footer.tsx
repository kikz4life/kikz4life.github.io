import styles from './footer.module.scss'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {year} All Rights Reserved By Dean Francis Casili</p>
    </footer>
  )
}