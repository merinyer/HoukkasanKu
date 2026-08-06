import type { MenuItem } from '@/lib/menu-data'

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col justify-between gap-2 rounded-lg border border-accent/25 border-l-4 border-l-accent bg-gradient-to-br from-card to-accent/[0.06] p-4 shadow-lg transition-colors hover:border-accent/60 hover:from-muted hover:to-accent/10">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-bold leading-snug text-card-foreground text-balance">
          {item.name}
        </h3>
        <span className="shrink-0 rounded-md border border-border bg-gold/10 px-2 py-0.5 font-display text-sm font-bold text-gold">
          {item.price}
        </span>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
        {item.description}
      </p>
    </article>
  )
}
