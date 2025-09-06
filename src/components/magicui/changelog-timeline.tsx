'use client'

import { Calendar, Tag, Zap, Bug, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChangelogEntry {
  version: string
  date: string
  changes: {
    type: 'feature' | 'bugfix' | 'improvement' | 'breaking'
    description: string
  }[]
}

const changelogData: ChangelogEntry[] = [
  {
    version: 'v2.1.0',
    date: '2025-09-07',
    changes: [
      {
        type: 'feature',
        description: 'Menambahkan fitur dark mode toggle dengan animasi smooth'
      },
      {
        type: 'feature', 
        description: 'Implementasi Magic UI components untuk landing page'
      },
      {
        type: 'improvement',
        description: 'Optimasi performa animasi di mobile devices'
      }
    ]
  },
  {
    version: 'v2.0.0',
    date: '2025-09-06',
    changes: [
      {
        type: 'breaking',
        description: 'Upgrade ke Next.js 15 dan Tailwind CSS v4'
      },
      {
        type: 'feature',
        description: 'Redesign complete landing page dengan Magic UI'
      },
      {
        type: 'improvement',
        description: 'Peningkatan aksesibilitas dan SEO optimization'
      }
    ]
  },
  {
    version: 'v1.5.2',
    date: '2025-09-05',
    changes: [
      {
        type: 'bugfix',
        description: 'Perbaikan scroll horizontal issue di landing page'
      },
      {
        type: 'bugfix',
        description: 'Fix responsive layout pada mobile devices'
      },
      {
        type: 'improvement',
        description: 'Optimasi loading speed dan bundle size'
      }
    ]
  },
  {
    version: 'v1.5.1',
    date: '2025-09-04',
    changes: [
      {
        type: 'feature',
        description: 'Menambahkan payment gateway integration'
      },
      {
        type: 'improvement',
        description: 'Enhanced security untuk transaksi rekber'
      },
      {
        type: 'bugfix',
        description: 'Perbaikan bug pada SMM panel dashboard'
      }
    ]
  }
]

const getChangeTypeIcon = (type: string) => {
  switch (type) {
    case 'feature':
      return <Sparkles className="h-4 w-4 text-green-500" />
    case 'bugfix':
      return <Bug className="h-4 w-4 text-red-500" />
    case 'improvement':
      return <Zap className="h-4 w-4 text-blue-500" />
    case 'breaking':
      return <Tag className="h-4 w-4 text-orange-500" />
    default:
      return <Tag className="h-4 w-4 text-neutral-500" />
  }
}

const getChangeTypeLabel = (type: string) => {
  switch (type) {
    case 'feature':
      return 'Fitur Baru'
    case 'bugfix':
      return 'Perbaikan Bug'
    case 'improvement':
      return 'Peningkatan'
    case 'breaking':
      return 'Breaking Change'
    default:
      return 'Perubahan'
  }
}

const getChangeTypeBadgeClass = (type: string) => {
  switch (type) {
    case 'feature':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    case 'bugfix':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    case 'improvement':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    case 'breaking':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
    default:
      return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-900/20 dark:text-neutral-400'
  }
}

export default function ChangelogTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-200 via-neutral-300 to-transparent dark:from-neutral-700 dark:via-neutral-600" />
        
        <div className="space-y-12">
          {changelogData.map((entry, entryIndex) => (
            <div
              key={entry.version}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-white dark:bg-neutral-950 border-2 border-neutral-300 dark:border-neutral-600 rounded-full group-hover:border-black dark:group-hover:border-white transition-colors duration-300" />
              
              {/* Content */}
              <div className="ml-16 pb-8">
                {/* Version header */}
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                    {entry.version}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={entry.date}>
                      {new Date(entry.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
                
                {/* Changes list */}
                <div className="space-y-3">
                  {entry.changes.map((change, changeIndex) => (
                    <div
                      key={changeIndex}
                      className="flex items-start gap-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 group/change"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {getChangeTypeIcon(change.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn(
                            'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                            getChangeTypeBadgeClass(change.type)
                          )}>
                            {getChangeTypeLabel(change.type)}
                          </span>
                        </div>
                        
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 group-hover/change:text-neutral-900 dark:group-hover/change:text-white transition-colors">
                          {change.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}