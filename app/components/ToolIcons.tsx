'use client'

import {motion} from 'framer-motion'
import tools from '../data/tools.json'

interface ToolIconsProps {
  delay?: number
  limit?: number
}

export default function ToolIcons({
                                    delay = 0.7,
                                    limit = 8,
                                  }: ToolIconsProps) {

  const SVG_ICONS_WIDTH = 40
  const SVG_ICONS_HEIGHT = 40
  const SVG_ICONS_FILL = '#f1f1f1'

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: {opacity: 0, scale: 0},
    show: {opacity: 1, scale: 1},
  }

  return (
    <motion.ul
      className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {tools.slice(0, limit).map((tool, index) => {
        return (
          <motion.li key={`${tool.name}-${index}`} variants={item}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill={SVG_ICONS_FILL}
              width={SVG_ICONS_WIDTH}
              height={SVG_ICONS_HEIGHT}
            >
              <title>{tool.name}</title>
              <path d={tool.path} />
            </svg>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
