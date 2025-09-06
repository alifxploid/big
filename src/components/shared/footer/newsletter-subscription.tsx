'use client'

import { useState } from 'react'

export function NewsletterSubscription() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <div className="mt-16 border-t border-neutral-200 dark:border-neutral-700 pt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white mb-2">
            Berlangganan Newsletter
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Dapatkan update terbaru tentang fitur dan promo menarik.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email Anda"
            required
            className="min-w-0 flex-auto rounded-l-md border-0 bg-neutral-100 dark:bg-white/5 px-3.5 py-2 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="flex-none rounded-r-md bg-black dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}