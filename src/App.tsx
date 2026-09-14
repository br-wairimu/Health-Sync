export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--color-teal-deep)" }}
      >
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-teal-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-teal-light) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-8 md:px-16 py-24 md:py-36">
          {/* Label */}
          <div className="flex items-center gap-3 mb-10">
            <span
              className="inline-block w-8 h-px"
              style={{ backgroundColor: "var(--color-teal-light)" }}
            />
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: "var(--color-teal-light)" }}
            >
              Logistics Systems Audit
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl leading-[1.05] mb-8 max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-primary-foreground)",
            }}
          >
            Health-Sync:<br />
            <span style={{ color: "var(--color-teal-light)" }}>Supply Chain</span>
            {" "}Analysis
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-xl"
            style={{ color: "rgba(247,248,246,0.72)" }}
          >
            Mapping the friction points between suppliers, distributors, and vendors.
          </p>

          {/* Divider */}
          <div
            className="mt-16 h-px max-w-xs"
            style={{ backgroundColor: "rgba(90,173,173,0.3)" }}
          />
        </div>
      </section>

      {/* ── The Gap ── */}
      <section
        className="max-w-6xl mx-auto px-8 md:px-16 py-20 md:py-28"
      >
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">

          {/* Left — label + heading */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: "var(--color-teal-mid)" }}
              >
                01 — The Gap
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}
            >
              Where visibility breaks down
            </h2>
          </div>

          {/* Right — content */}
          <div className="md:col-span-8">
            <p
              className="text-base md:text-lg font-light leading-[1.85] mb-10"
              style={{ color: "var(--color-secondary-foreground)" }}
            >
              Across local health and commerce networks, sourcing operates through
              fragmented, informal channels. Suppliers manage inventory with no
              downstream signal. Distributors hold stock without knowing what vendors
              actually need. Vendors replenish reactively — too late, too much, or
              not at all.
            </p>

            {/* Gap cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  stat: "~60%",
                  label: "of stockouts go unreported up the chain",
                },
                {
                  stat: "3–5 days",
                  label: "avg. lag between demand signal and replenishment",
                },
                {
                  stat: "No shared",
                  label: "data standard between health suppliers and distributors",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5 border"
                  style={{
                    backgroundColor: "var(--color-card)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="text-2xl font-semibold mb-2 tracking-tight"
                    style={{ color: "var(--color-teal-deep)" }}
                  >
                    {item.stat}
                  </div>
                  <div
                    className="text-sm leading-snug"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hairline rule */}
      <div
        className="max-w-6xl mx-auto px-8 md:px-16"
        style={{ borderTop: "1px solid var(--color-border)" }}
      />

      {/* ── The Bridge ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--color-muted)" }}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start mb-16">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-teal-mid)" }}
                >
                  02 — The Bridge
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}
              >
                A system blueprint for connected flow
              </h2>
            </div>

            <div className="md:col-span-8">
              <p
                className="text-base md:text-lg font-light leading-[1.85]"
                style={{ color: "var(--color-secondary-foreground)" }}
              >
                Health-Sync defines the minimum viable data layer needed to connect
                each node in the supply chain — translating siloed operations into
                a shared signal. Below: the identified friction points and the data
                requirements that resolve them.
              </p>
            </div>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {[
              {
                node: "Suppliers",
                friction: "No visibility into distributor inventory levels",
                data: "SKU catalog · Batch availability · Lead time per region",
                color: "var(--color-teal-deep)",
              },
              {
                node: "Distributors",
                friction: "Manual order reconciliation; no demand forecasting",
                data: "Order frequency · Inventory turns · Vendor tier classification",
                color: "var(--color-teal-mid)",
              },
              {
                node: "Vendors",
                friction: "Reactive restocking; no standard product identifiers",
                data: "Stock-on-hand · Sales velocity · Reorder threshold",
                color: "var(--color-teal-light)",
              },
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col md:flex-row items-stretch">
                <div
                  className="rounded-xl p-6 flex-1 flex flex-col justify-between"
                  style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                >
                  {/* Node label */}
                  <div>
                    <div
                      className="inline-flex items-center gap-2 mb-4"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase"
                        style={{ color: item.color }}
                      >
                        {item.node}
                      </span>
                    </div>
                    <p
                      className="text-sm font-medium leading-snug mb-4"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      ↯ {item.friction}
                    </p>
                  </div>
                  {/* Data requirements */}
                  <div
                    className="mt-auto pt-4 text-xs leading-relaxed"
                    style={{
                      color: "var(--color-muted-foreground)",
                      borderTop: "1px solid var(--color-border)",
                    }}
                  >
                    <span
                      className="block text-[10px] font-semibold tracking-widest uppercase mb-2"
                      style={{ color: "var(--color-teal-mid)" }}
                    >
                      Required data
                    </span>
                    {item.data}
                  </div>
                </div>

                {/* Arrow connector */}
                {i < 2 && (
                  <div className="hidden md:flex items-center justify-center px-2 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10h12M12 6l4 4-4 4"
                        stroke="var(--color-teal-mid)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Downstream Impact ── */}
      <section
        className="max-w-6xl mx-auto px-8 md:px-16 py-20 md:py-28"
      >
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">

          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: "var(--color-teal-mid)" }}
              >
                03 — Downstream Impact
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-foreground)" }}
            >
              Why this matters at the last mile
            </h2>
          </div>

          <div className="md:col-span-8">
            <div
              className="rounded-xl p-8 relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-teal-deep)",
                color: "var(--color-primary-foreground)",
              }}
            >
              {/* Subtle teal tint shape */}
              <div
                className="absolute -right-8 -top-8 w-48 h-48 rounded-full opacity-10"
                style={{ backgroundColor: "var(--color-teal-light)" }}
              />
              <div
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 relative"
                style={{ color: "var(--color-teal-light)" }}
              >
                Connected to → Mama Mboga
              </div>
              <p
                className="text-lg md:text-xl font-light leading-[1.75] relative"
                style={{ color: "rgba(247,248,246,0.9)" }}
              >
                The friction points identified here — fragmented sourcing, absent
                inventory signals, non-standard product identifiers — are the exact
                structural barriers preventing small-scale vendors like Mama Mboga
                from accessing reliable, affordable health and consumer goods at
                the neighbourhood level.
              </p>
              <div
                className="mt-6 pt-6 text-sm font-light relative"
                style={{
                  color: "rgba(247,248,246,0.55)",
                  borderTop: "1px solid rgba(90,173,173,0.25)",
                }}
              >
                Resolving the supply chain layer is prerequisite infrastructure for Mama Mboga.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="border-t"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-card)",
        }}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-foreground)" }}
            >
              Foundational research for Mama Mboga.
            </span>
            <span
              className="text-sm ml-1"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              More on GitHub.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--color-teal-mid)" }}
            />
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Health-Sync · 2026
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
