import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="">
      <div className="fixed inset-0 -z-1">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
        <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}