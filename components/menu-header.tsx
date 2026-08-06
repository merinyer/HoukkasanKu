export function MenuHeader() {
  return (
    <header className="relative overflow-hidden border-b-2 border-accent bg-accent/90 px-4 py-8 text-center">
      {/* subtle woven-mat texture using layered gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)), repeating-linear-gradient(0deg, transparent 0 9px, rgba(0,0,0,0.4) 9px 10px), repeating-linear-gradient(90deg, transparent 0 19px, rgba(0,0,0,0.4) 19px 20px)',
        }}
      />
      <div className="relative mx-auto max-w-xl">
        <p
          lang="zh"
          className="mb-4 font-display text-4xl tracking-[0.5em] text-gold-light drop-shadow"
        >
          肥文小食
        </p>
        <div className="relative mx-auto max-w-md rounded-lg border-2 border-accent bg-card px-6 py-4 pb-6 shadow-2xl">
          <h1 className="bg-gradient-to-br from-gold-light to-gold bg-clip-text font-display text-2xl font-black uppercase tracking-widest text-transparent sm:text-3xl">
            Restaurant Villaprebo
          </h1>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Houkkasan
          </p>
          {/* Sello KU tradicional en la esquina inferior derecha */}
          <div
            className="absolute -bottom-3 right-4 flex size-11 items-center justify-center rounded-md border-2 border-gold bg-accent font-display text-lg font-black tracking-tight text-gold-light shadow-lg"
            aria-label="Sello KU"
          >
            KU
          </div>
        </div>
      </div>
    </header>
  )
}
