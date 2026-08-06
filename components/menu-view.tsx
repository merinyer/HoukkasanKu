'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { menu } from '@/lib/menu-data'
import { MenuItemCard } from '@/components/menu-item-card'

export function MenuView() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const normalizedQuery = query.trim().toLowerCase()

  const filteredMenu = useMemo(() => {
    return menu
      .filter((category) => activeCategory === 'all' || category.id === activeCategory)
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          if (!normalizedQuery) return true
          return (
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery) ||
            category.label.toLowerCase().includes(normalizedQuery)
          )
        }),
      }))
      .filter((category) => category.items.length > 0)
  }, [activeCategory, normalizedQuery])

  const hasResults = filteredMenu.length > 0

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-border/60 bg-background/95 py-4 backdrop-blur-md">
        <div className="mx-auto mb-4 max-w-2xl px-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar plato, bebida o ingrediente..."
              aria-label="Buscar en el menú"
              className="w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
          </div>
        </div>
        <nav aria-label="Categorías del menú" className="mx-auto max-w-4xl">
          <ul className="flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[{ id: 'all', label: 'Todos' }, ...menu.map((c) => ({ id: c.id, label: c.label }))].map(
              (cat) => {
                const isActive = activeCategory === cat.id
                return (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      aria-pressed={isActive}
                      className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'border-accent bg-accent text-accent-foreground shadow-[0_2px_10px] shadow-accent/40'
                          : 'border-accent/30 bg-accent/[0.07] text-muted-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                )
              },
            )}
          </ul>
        </nav>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-6">
        {hasResults ? (
          filteredMenu.map((category) => (
            <section key={category.id} aria-labelledby={`heading-${category.id}`} className="mb-10">
              <h2
                id={`heading-${category.id}`}
                className="mb-4 flex items-center gap-3 border-l-4 border-accent bg-gradient-to-r from-accent/15 to-transparent py-2 pl-3 pr-2 font-display text-xl text-gold-light"
              >
                <span aria-hidden="true" className="text-accent">
                  ❖
                </span>
                {category.title}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="py-16 text-center text-muted-foreground">
            No se encontraron platos para{' '}
            <span className="font-semibold text-foreground">{`"${query}"`}</span>.
          </p>
        )}
      </main>
    </>
  )
}
