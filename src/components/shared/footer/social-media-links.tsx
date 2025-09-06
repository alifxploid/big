'use client'

import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const socialMedia = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
  },
]

export function SocialMediaLinks() {
  return (
    <div className="flex space-x-6">
      {socialMedia.map((item) => {
        const IconComponent = item.icon
        return (
          <a
            key={item.name}
            href={item.href}
            className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 transition-colors"
          >
            <span className="sr-only">{item.name}</span>
            <IconComponent className="h-6 w-6" />
          </a>
        )
      })}
    </div>
  )
}