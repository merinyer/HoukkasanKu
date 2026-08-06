import { MenuHeader } from '@/components/menu-header'
import { MenuView } from '@/components/menu-view'
import { QrShare } from '@/components/qr-share'

export default function Page() {
  return (
    <div className="min-h-screen bg-background pb-16">
      <MenuHeader />
      <MenuView />
      <footer className="mx-auto max-w-4xl border-t border-border px-4 pt-8 text-center text-xs text-muted-foreground">
        <p>Restaurant Villaprebo Houkkasan Ku — Gastronomía Oriental</p>
        <p className="mt-1">Los precios pueden variar sin previo aviso. Consulte con su mesero.</p>
      </footer>
      <QrShare />
    </div>
  )
}
