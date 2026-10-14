import Reveal from "./Reveal";
import { Icon, Stars, type IconName } from "./Icons";

const PHONE_DISPLAY = "(905) 401-6059";
const PHONE_TEL = "tel:+19054016059";
const PHONE_SMS = "sms:+19054016059";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=905%20GREENSCAPE&query_place_id=ChIJj7iSijuoI4kRszSS-zhEvzw";
const FACEBOOK = "https://www.facebook.com/61578925882729";

const services: { icon: IconName; title: string; body: string; featured?: boolean }[] = [
  {
    icon: "mower",
    title: "Weekly lawn mowing",
    body: "Regular grass cutting with trimming and edging on every visit, so the lawn looks sharp all season. Need a one-time cut instead? Jessie handles those too, including big, overgrown yards on short notice.",
    featured: true,
  },
  {
    icon: "edge",
    title: "Trimming and edging",
    body: "Clean lines along driveways, walkways and garden beds. It is the small finishing step that makes a freshly cut lawn look professionally kept.",
  },
  {
    icon: "leaf",
    title: "Weeding and garden cleanups",
    body: "Overgrown beds and stubborn weeds in hard-to-reach spots, cleared out and tidied up. Customers call this one the job they had been putting off for years.",
  },
  {
    icon: "calendar",
    title: "Spring and fall cleanups",
    body: "Seasonal yard cleanups to get the property ready for summer or put it to bed for winter. Many customers book their fall cleanup right after their first visit.",
  },
  {
    icon: "sprout",
    title: "Bush removal and new grass",
    body: "Front and back garden work: pulling out tired bushes and shrubs, clearing weeds and putting down new grass or sod so the yard gets a fresh start.",
  },
  {
    icon: "snow",
    title: "Residential and commercial snow removal",
    body: "When the season turns, 905 Greenscape keeps driveways and lots clear across the Niagara Region. Call to ask about snow service for your home or business.",
  },
];

const reviews = [
  {
    name: "Luke D.",
    job: "Front garden, then the backyard",
    quote:
      "Jessie did a great job on our front-yard garden. Hard-working, reliable and friendly. We were so impressed we booked him again for the backyard: weeds, bush removal and new grass.",
  },
  {
    name: "Brienne",
    job: "Overgrown backyard, last minute",
    quote:
      "Our backyard was badly overgrown after a neglected summer. He answered my questions right away, came out immediately and did an amazing job at a very affordable price.",
  },
  {
    name: "John S.",
    job: "Weed removal",
    quote:
      "Jessie cleared out weeds that had been in a tricky spot for a long time. Very professional, very reliable, and a great price.",
  },
  {
    name: "Heather V.",
    job: "Repeat customer",
    quote: "Showed up exactly when they said they would and did fantastic work. We have already booked them for our fall cleanup.",
  },
  {
    name: "Mike S.",
    job: "Weekly lawn care",
    quote: "Friendly and professional, and the grass looks great. We are now a weekly client.",
  },
  {
    name: "Allysa L.",
    job: "Property maintenance",
    quote:
      "The owner is hard-working, reliable and takes a lot of pride in his work. He genuinely cares about quality and happy customers. Great price too.",
  },
];

const steps = [
  { title: "Call or text", body: "Reach Jessie directly at (905) 401-6059. Tell him what the yard needs and where you are in Niagara." },
  { title: "Get a price", body: "He will look at the job and give you a straight, fair price before any work starts." },
  { title: "We do the work", body: "Jessie shows up when he says he will, does the job properly and cleans up before leaving." },
  { title: "Keep it looking good", body: "Book weekly mowing, a seasonal cleanup or snow service so you never have to think about it again." },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "905 Greenscape works across the Niagara Region. If you are not sure whether your street is covered, call or text (905) 401-6059 and Jessie will let you know right away.",
  },
  {
    q: "Can you come out on short notice?",
    a: "Often, yes. Several customers booked last-minute jobs, including a large overgrown backyard that Jessie came out to almost immediately. Call to check this week's schedule.",
  },
  {
    q: "Do you offer weekly lawn mowing?",
    a: "Yes. Weekly residential mowing with trimming and edging is one of the most popular services, and one-time cuts are available too.",
  },
  {
    q: "How much does it cost?",
    a: "Every yard is different, so Jessie prices each job after hearing what you need. Reviewers regularly describe his pricing as great or very affordable. Call or text for a quote.",
  },
  {
    q: "Do you do snow removal?",
    a: "Yes. 905 Greenscape offers residential and commercial snow removal across the Niagara Region, so you can keep one local company year-round.",
  },
  {
    q: "Who will actually do the work?",
    a: "The owner, Jessie. 905 Greenscape is owner-run, which is why reviewers keep mentioning him by name: he answers the phone, gives the price and does the job himself.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. Lawn care and snow removal are offered for both homes and businesses.",
  },
];

const towns = [
  "St. Catharines", "Niagara Falls", "Welland", "Thorold", "Fort Erie", "Grimsby",
  "Lincoln", "Pelham", "Port Colborne", "Niagara-on-the-Lake", "West Lincoln", "Wainfleet",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "905 GREENSCAPE",
  telephone: "+1-905-401-6059",
  areaServed: { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
  founder: { "@type": "Person", name: "Jessie" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "18" },
  sameAs: [FACEBOOK, MAPS_URL],
  description:
    "Owner-operated lawn care, landscaping and snow removal company serving the Niagara Region year-round.",
};

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_TEL}
      className={`btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 font-bold text-cta-ink shadow-sm hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <Icon name="phone" className="h-5 w-5" />
      Call {PHONE_DISPLAY}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-sm text-white md:block">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-2">
          <span className="inline-flex items-center gap-1.5"><Icon name="pin" className="h-4 w-4" /> Serving the Niagara Region</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="snow" className="h-4 w-4" /> Lawn care in summer, snow removal in winter</span>
          <span className="ml-auto">Owner-run by Jessie</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2" aria-label="905 Greenscape home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white"><Icon name="leaf" className="h-5 w-5" /></span>
            <span className="font-head text-xl font-extrabold tracking-tight">905 Greenscape</span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 text-[0.95rem] font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden font-bold text-ink hover:text-brand md:inline">{PHONE_DISPLAY}</a>
            <a href={PHONE_TEL} className="btn-press hidden min-h-11 items-center rounded-lg bg-cta px-5 font-bold text-cta-ink hover:bg-cta-hover md:inline-flex">
              Call Now
            </a>
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} className="btn-press grid h-11 w-11 place-items-center rounded-lg bg-cta text-cta-ink md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="bg-gradient-to-b from-brand-soft to-bg">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-sm font-semibold text-brand-deep ring-1 ring-line">
                <Icon name="user" className="h-4 w-4" /> Owner-run lawn care in Niagara
              </p>
              <h1>Lawn Care, Landscaping &amp; Snow Removal in the Niagara Region</h1>
              <p className="measure mt-5 text-lg text-muted md:text-xl">
                Weekly mowing, garden cleanups, weeding, new grass and winter snow service, done by owner Jessie himself. He picks up the phone, shows up when he says he will and leaves the yard looking its best.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <a href={PHONE_SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand px-6 py-3 font-bold text-brand-deep hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" /> Text Jessie
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] font-semibold">
                <span className="inline-flex items-center gap-2"><Stars className="h-5 w-5" /> 5.0</span>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">18 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Owner-operated</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Residential &amp; commercial</span>
              </div>
            </div>

            <figure className="rounded-2xl border border-line bg-surface p-7 shadow-[0_20px_50px_-30px_oklch(0.3_0.06_150/0.45)]">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 text-lg leading-relaxed md:text-xl">
                &ldquo;Our backyard was badly overgrown after a neglected summer. He answered my questions right away, came out immediately and did an amazing job at a very affordable price.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
                <span><strong className="text-ink">Brienne</strong> <span className="text-muted">· last-minute backyard cleanup</span></span>
                <span className="text-muted">Google review</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust us" className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, t: "5.0 on Google", s: "All 18 reviews five stars" },
              { icon: "user" as IconName, t: "Owner on every job", s: "You deal with Jessie" },
              { icon: "clock" as IconName, t: "Fast to respond", s: "Short-notice jobs welcome" },
              { icon: "snow" as IconName, t: "Year-round", s: "Lawn care and snow removal" },
            ].map((i) => (
              <div key={i.t} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-deep"><Icon name={i.icon} className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold leading-tight">{i.t}</p>
                  <p className="text-sm text-muted">{i.s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal>
              <h2>Lawn and yard services in Niagara</h2>
              <p className="measure mt-4 text-muted">
                One local company for the whole year: cutting and edging through the growing season, cleanups in spring and fall, and snow removal once winter arrives.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className={`lift flex flex-col rounded-2xl border bg-surface p-6 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand-deep"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-0.5 text-xs font-bold text-white">Most booked</span>}
                  </div>
                  <h3 className="mt-4">{s.title}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.body}</p>
                  <a href={PHONE_TEL} className="mt-4 inline-flex items-center gap-1.5 font-bold text-brand-deep hover:text-brand">
                    Call about this <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2>Rated 5.0 from 18 Google reviews</h2>
                <p className="measure mt-3 text-muted">
                  Every review is five stars. Customers mention Jessie by name, the fair prices and how quickly he shows up. Many have already booked him again.
                </p>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-line bg-surface px-5 font-bold hover:border-brand md:self-auto">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                  <Stars />
                  <blockquote className="mt-3 flex-1 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <strong className="text-ink">{r.name}</strong>
                    <span className="block text-muted">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <h2>Meet Jessie, the owner who does the work</h2>
              <div className="measure mt-5 space-y-4 text-muted">
                <p>
                  905 Greenscape is a local, owner-operated lawn care, landscaping and snow removal company serving the Niagara Region year-round. When you call, you talk to Jessie. When the work gets done, it is Jessie doing it.
                </p>
                <p>
                  That is the reason customers keep using the same words in their reviews: hard-working, reliable, quick to respond. He takes pride in a clean cut and a tidy garden bed, and he cares about leaving every customer happy enough to book again.
                </p>
                <p>
                  Whether it is a weekly cut, a one-time cleanup of a yard that got away from you, or keeping your driveway clear after a storm, you get one dependable local contact for the whole year.
                </p>
              </div>
            </Reveal>
            <Reveal className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "clock" as IconName, t: "Shows up on time", s: "Customers say he arrives exactly when he says he will." },
                { icon: "phone" as IconName, t: "Answers right away", s: "Questions get answered quickly, even for last-minute jobs." },
                { icon: "dollar" as IconName, t: "Fair, affordable prices", s: "Reviewers repeatedly call the pricing great or very reasonable." },
                { icon: "check" as IconName, t: "Pride in the details", s: "Trimmed edges, cleared weeds and a yard left tidy." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border border-line bg-surface p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand-deep"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-3 text-lg">{d.t}</h3>
                  <p className="mt-1 text-[0.95rem] text-muted">{d.s}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal>
              <h2>How it works</h2>
              <p className="measure mt-3 text-muted">Getting your yard looked after takes one phone call.</p>
            </Reveal>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-lg font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <h2>Serving the Niagara Region</h2>
              <p className="measure mt-4 text-muted">
                905 Greenscape serves homes and businesses across the Niagara Region. Communities in the region include:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {towns.map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.95rem]">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted">
                Not sure if your street is covered? <a href={PHONE_SMS} className="font-bold text-brand-deep underline underline-offset-4">Text Jessie</a> your address and he will let you know.
              </p>
            </Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map of the Niagara Region service area"
                src="https://maps.google.com/maps?q=Niagara%20Region%2C%20Ontario&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <Reveal>
              <h2>Questions customers ask</h2>
            </Reveal>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-surface">
                  <summary className="flex min-h-14 items-center justify-between gap-4 px-5 py-4 text-lg font-bold">
                    {f.q}
                    <Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="px-5 pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="text-white">Ready for a yard you don&rsquo;t have to worry about?</h2>
              <p className="mt-3 max-w-xl text-white/85">Call or text Jessie at {PHONE_DISPLAY} for mowing, cleanups, new grass or snow removal anywhere in the Niagara Region.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <a href={PHONE_SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-6 py-3 font-bold text-white hover:bg-white/10">
                <Icon name="message" className="h-5 w-5" /> Text us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-surface pb-24 pt-12 md:pb-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-head text-xl font-extrabold">905 Greenscape</p>
            <p className="mt-2 text-muted">Owner-run lawn care, landscaping and snow removal serving the Niagara Region year-round.</p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="905 Greenscape on Facebook" className="mt-4 inline-grid h-10 w-10 place-items-center rounded-lg border border-line hover:border-brand hover:text-brand">
              <Icon name="facebook" className="h-5 w-5" />
            </a>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-2 space-y-1.5 text-muted">
              <li><a href={PHONE_TEL} className="hover:text-brand">{PHONE_DISPLAY}</a></li>
              <li>Owner: Jessie</li>
              <li>Service area: Niagara Region, Ontario</li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-2 space-y-1.5 text-muted">
              {services.map((s) => <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted md:px-6">&copy; {new Date().getFullYear()} 905 Greenscape. All rights reserved.</p>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-surface p-3 md:hidden">
        <a href={PHONE_TEL} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-cta-ink">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={PHONE_SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand-deep">
          <Icon name="message" className="h-5 w-5" /> Text
        </a>
      </div>
    </>
  );
}
