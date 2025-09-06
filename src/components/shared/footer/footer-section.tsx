'use client'

import Link from 'next/link'

interface FooterSectionProps {
  title: string
  items: Array<{
    name: string
    href: string
  }>
}

export function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
        {title}
      </h3>
      <ul role="list" className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}