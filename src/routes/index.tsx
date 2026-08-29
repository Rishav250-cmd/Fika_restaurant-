import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { ReserveModal } from "@/components/ReserveModal";
import {
  IconAccess,
  IconArrow,
  IconArrowDown,
  IconBowl,
  IconCar,
  IconClock,
  IconCup,
  IconGoogle,
  IconInstagram,
  IconLaptop,
  IconLeaf,
  IconPause,
  IconPhone,
  IconPin,
  IconStar,
} from "@/components/icons";

import heroImg from "@/assets/Gemini_Generated_Image_7a1hyi7a1hyi7a1h.jpg";
import cocktailImg from "@/assets/Gemini_Generated_Image_m1jsscm1jsscm1js.jpg";
import barImg from "@/assets/Gemini_Generated_Image_ypw5ncypw5ncypw5.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import asianImg from "@/assets/asian.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import smallPlatesImg from "@/assets/smallplates.jpg";
import interiorA from "@/assets/interior-a.jpg";
import interiorB from "@/assets/interior-b.jpg";

const PHONE = "+919918901681";
const PHONE_DISPLAY = "+91 99189 01681";
const ADDRESS = "P Square Mall, MG Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001";
const MAPS = "https://www.google.com/maps/search/?api=1&query=FIKA+P+Square+Mall+Civil+Lines+Prayagraj";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fika - Premium Cafe" },
      {
        name: "description",
        content:
          "FIKA is Civil Lines' cafe for slow mornings and long evenings — Pan-Asian, Japanese, Italian plates, cocktails and specialty coffee at P Square Mall, Prayagraj.",
      },
      { property: "og:title", content: "FIKA — Pause the day. Savour the moment." },
      {
        property: "og:description",
        content:
          "Plates to share. Coffee to savour. Culture to belong. A designed, plant-lit cafe & coffee bar in Civil Lines, Prayagraj.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "FIKA",
          servesCuisine: ["Pan-Asian", "Japanese", "Italian", "Coffee"],
          telephone: PHONE,
          address: {
            "@type": "PostalAddress",
            streetAddress: "P Square Mall, MG Marg, Civil Lines",
            addressLocality: "Prayagraj",
            addressRegion: "Uttar Pradesh",
            postalCode: "211001",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.2", bestRating: "5" },
        }),
      },
    ],
  }),
  component: Home,
});

const navLinks = [
  { href: "#story", label: "story" },
  { href: "#menu", label: "menu" },
  { href: "#gallery", label: "gallery" },
  { href: "#visit", label: "visit" },
];

const menu = [
  {
    id: "asian",
    label: "pan-asian, dim sum & sushi",
    image: asianImg,
    note: "Rolled, steamed, tossed in the wok — handled with patience.",
    items: [
      { name: "Sichuan Chili Chicken Gyoza", price: "₹475" },
      { name: "Truffle Cream Cheese Dumplings", price: "₹475" },
      { name: "Prawn Butter & Garlic Dumplings", price: "₹495" },
      { name: "Spicy Prawn Tempura Roll With Ponzu", price: "₹545" },
      { name: "Crispy Chicken Katsu Roll", price: "₹525" },
      { name: "Jade Dragon Tofu Dim Sum", price: "₹455" },
      { name: "Calamari Dragon Roll", price: "₹575" },
      { name: "Shiitake & Truffle Oil Roll", price: "₹475" },
      { name: "Sushi Boat", price: "₹1,925" },
    ],
  },
  {
    id: "italian",
    label: "pizzas, pastas & risottos",
    image: pizzaImg,
    note: "Slow-proved dough, blistered edges, sauces built the long way.",
    items: [
      { name: "Margherita", price: "₹625" },
      { name: "Farm Fresh Seasonal Vegetable", price: "₹645" },
      { name: "Classic Chicken Pepperoni", price: "₹775" },
      { name: "Four Cheese Pizza", price: "₹675" },
      { name: "Lamb Meatball Pizza", price: "₹775" },
      { name: "Mushroom & Truffle Oil Bianco", price: "₹675" },
      { name: "Basil Arrabbiata", price: "₹425" },
      { name: "Saffron & Roast Chicken Risotto", price: "₹575" },
      { name: "Wild Mushroom Risotto", price: "₹545" },
    ],
  },
  {
    id: "small",
    label: "appetizers & small plates",
    image: smallPlatesImg,
    note: "Made for the middle of the table, and for lingering.",
    items: [
      { name: "Truffle Parmesan Fries", price: "₹355" },
      { name: "Honey Chili Lotus Stem", price: "₹425" },
      { name: "Crispy Falafel With Smoked Chili Hummus", price: "₹425" },
      { name: "Avocado Galouti", price: "₹475" },
      { name: "Lehsuni Chicken Tikka", price: "₹525" },
      { name: "Jeju's Fried Chicken", price: "₹555" },
      { name: "Beer-Battered Fish Fingers", price: "₹655" },
      { name: "Moroccan Meatballs", price: "₹625" },
      { name: "Malabar Coconut Prawns", price: "₹655" },
    ],
  },
  {
    id: "indian",
    label: "indian mains",
    image: interiorA,
    note: "Slow-cooked gravies and tandoor classics, made the traditional way.",
    items: [
      { name: "Kadhai Sabzi", price: "₹415" },
      { name: "Dilliwala Dal Fry", price: "₹395" },
      { name: "Lucknowi Kesari Kofta", price: "₹475" },
      { name: "Paneer Makhani", price: "₹495" },
      { name: "Pind Di Dal Makhani", price: "₹475" },
      { name: "Dilliwala Butter Chicken", price: "₹595" },
      { name: "Chicken Ghee Roast", price: "₹595" },
      { name: "Bihari Chicken Champaran", price: "₹595" },
      { name: "Malvani Fish Curry", price: "₹745" },
    ],
  },
  {
    id: "bar",
    label: "coolers & mocktails",
    image: cocktailImg,
    note: "Handcrafted, citrus-forward, poured for the golden hour.",
    items: [
      { name: "Clear Pina Colada", price: "₹355" },
      { name: "Hibiscus Sour", price: "₹355" },
      { name: "Passion Fruit Lemonade", price: "₹355" },
      { name: "Lychee & Himalayan Flower Fizz", price: "₹355" },
      { name: "Pomegranate & Orange Mint Cooler", price: "₹355" },
      { name: "Berry Bliss Bubbler", price: "₹355" },
      { name: "Mint Mojito", price: "₹215" },
      { name: "Non-Alcoholic Mojito", price: "₹235" },
      { name: "Fresh Lime Soda", price: "₹175" },
    ],
  },
  {
    id: "coffee",
    label: "coffee & desserts",
    image: coffeeImg,
    note: "The heart of fika — a cup, something sweet, no hurry.",
    items: [
      { name: "Cappuccino", price: "₹225" },
      { name: "Flat White", price: "₹235" },
      { name: "Caramel Affogato", price: "₹245" },
      { name: "Vietnamese Iced Coffee", price: "₹245" },
      { name: "Swiss Hot Chocolate", price: "₹325" },
      { name: "Tiramisu", price: "₹375" },
      { name: "Lotus Biscoff Cheesecake", price: "₹395" },
      { name: "Churros", price: "₹375" },
      { name: "Almond Chocolate Ganache", price: "₹495" },
    ],
  },
];

const usps = [
  {
    icon: IconPause,
    title: "A space built to slow you down",
    body: "Terrazzo underfoot, cane and wood at the table, plants lit low. Designed, not decorated.",
  },
  {
    icon: IconBowl,
    title: "Truly multi-cuisine",
    body: "Japanese, Pan-Asian and Italian kitchens run side by side — each one taken seriously.",
  },
  {
    icon: IconCup,
    title: "Coffee and cocktails, both done right",
    body: "Specialty brews through the afternoon, handcrafted drinks once the light drops.",
  },
  {
    icon: IconLaptop,
    title: "Work, meet, celebrate",
    body: "Air-conditioned, laptop-friendly, and comfortable for a table of two or ten.",
  },
  {
    icon: IconCar,
    title: "Easy to reach, easy to park",
    body: "Inside P Square Mall on MG Marg, with free and paid parking at hand.",
  },
  {
    icon: IconStar,
    title: "Loved locally",
    body: "Rated 4.2 on Google, with guests returning for the flavour, the plating and the room.",
  },
];

const testimonials = [
  {
    quote:
      "The sushi arrived plated like a painting, and nobody rushed us. We sat with our coffee long after the plates were cleared.",
    name: "Ananya",
    context: "evening with friends",
  },
  {
    quote:
      "Warm light, plants everywhere, terrazzo floors. It doesn't feel like anywhere else in Prayagraj.",
    name: "Rohit",
    context: "first visit",
  },
  {
    quote:
      "Pizza with a proper charred crust and a tiramisu worth ordering twice. Service was quiet and attentive.",
    name: "Meher",
    context: "birthday dinner",
  },
  {
    quote: "I came to work for an hour and stayed for three. The cappuccino helped.",
    name: "Saurabh",
    context: "afternoon session",
  },
];

const gallery = [
  { src: barImg, alt: "FIKA bar counter with rattan pendant lights and terrazzo", tall: false },
  { src: interiorB, alt: "Curved banquette seating with botanical plates at FIKA", tall: true },
  { src: coffeeImg, alt: "Cappuccino and tiramisu on a wooden table", tall: false },
  { src: interiorA, alt: "Terrazzo counter beside a lit bamboo plant wall", tall: false },
  { src: cocktailImg, alt: "Signature FIKA cocktail with citrus and rosemary", tall: true },
  { src: asianImg, alt: "Sushi and dumplings plated on botanical ceramic", tall: false },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [tab, setTab] = useState(menu[0]!.id);
  const [reserveOpen, setReserveOpen] = useState(false);
  const active = menu.find((m) => m.id === tab) ?? menu[0]!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/70 bg-background/92 py-3 backdrop-blur-md"
            : "border-b border-transparent py-5"
        }`}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-8">
          <a
            href="#top"
            className={`font-display text-2xl tracking-[0.3em] transition-colors ${
              scrolled ? "text-espresso" : "text-[oklch(0.98_0.01_84.6)]"
            }`}
          >
            fika
          </a>
          <div className="flex items-center gap-6">
            <ul
              className={`hidden items-center gap-7 text-sm md:flex ${
                scrolled ? "text-muted-foreground" : "text-[oklch(0.94_0.02_84.6)]"
              }`}
            >
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-opacity hover:opacity-60">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${PHONE}`}
              className={`hidden text-sm transition-opacity hover:opacity-60 sm:inline ${
                scrolled ? "text-espresso" : "text-[oklch(0.94_0.02_84.6)]"
              }`}
            >
              call now
            </a>
            <button
              type="button"
              onClick={() => setReserveOpen(true)}
              className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              Reserve a Table
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
          <img
            src={heroImg}
            alt="Candlelit FIKA dining room with lit plant wall and cane chairs"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.18_0.02_44/0.92),oklch(0.18_0.02_44/0.45)_45%,oklch(0.18_0.02_44/0.55))]" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-36 md:px-8 md:pb-20">
            <Reveal>
              <p className="label-eyebrow text-[oklch(0.88_0.03_84.6)]">civil lines · prayagraj</p>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.75rem,7vw,4.75rem)] text-[oklch(0.98_0.012_84.6)]">
                Pause the day.
                <br />
                Savour the moment.
              </h1>
              <p className="mt-6 max-w-xl text-[oklch(0.9_0.02_84.6)]">
                A Swedish ritual, kept in Prayagraj. Plates to share, coffee to savour, culture to
                belong — under warm light and quiet greenery.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setReserveOpen(true)}
                  className="rounded-full bg-primary px-7 py-3.5 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Reserve a Table
                </button>
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.9_0.02_84.6/0.5)] px-7 py-3.5 text-[oklch(0.95_0.015_84.6)] transition-colors duration-300 hover:bg-[oklch(0.95_0.015_84.6/0.12)]"
                >
                  View Menu <IconArrow className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative border-t border-[oklch(0.9_0.02_84.6/0.22)] bg-[oklch(0.18_0.02_44/0.55)] backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 text-sm text-[oklch(0.9_0.02_84.6)] md:px-8">
              <span className="inline-flex items-center gap-2">
                <IconStar className="h-4 w-4 text-primary" /> 4.2 on Google
              </span>
              <span>Dine-in · Takeaway · Delivery</span>
              <span className="inline-flex items-center gap-2">
                <IconPin className="h-4 w-4" /> Civil Lines, Prayagraj
              </span>
              <a href="#story" className="ml-auto hidden items-center gap-2 opacity-70 md:inline-flex">
                scroll <IconArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <figure className="overflow-hidden rounded-2xl">
                <img
                  src={interiorA}
                  alt="Terrazzo counter and lit bamboo wall inside FIKA"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <p className="label-eyebrow">the ritual</p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)]">
                In Sweden, they stop for fika.
              </h2>
              <div className="mt-6 space-y-5 text-[1.0625rem] text-muted-foreground">
                <p>
                  Not a coffee break. A pause — taken on purpose, shared with someone, allowed to
                  run long.
                </p>
                <p>
                  We built a room for it on MG Marg. Terrazzo floors, curved wooden tables, cane
                  chairs that hold you, and a wall of green lit from below. The light stays low.
                  The music stays under the conversation.
                </p>
                <p>
                  Plates to share. Coffee to savour. Culture to belong. Come for an hour of work, a
                  first date, a birthday, or nothing in particular.
                </p>
              </div>
              <a
                href="#menu"
                className="mt-8 inline-flex items-center gap-2 border-b border-primary/40 pb-1 text-primary transition-colors hover:border-primary"
              >
                See what's on the table <IconArrow className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="scroll-mt-24 bg-sand py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="label-eyebrow">the menu</p>
              <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
                Six kitchens, one long table.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10 flex flex-wrap gap-2">
                {menu.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setTab(cat.id)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition-colors duration-300 ${
                      tab === cat.id
                        ? "border-espresso bg-espresso text-[oklch(0.96_0.014_84.6)]"
                        : "border-border bg-background/60 text-muted-foreground hover:border-espresso/40"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div
                key={active.id}
                className="mt-10 grid gap-8 overflow-hidden rounded-2xl bg-card md:grid-cols-2"
              >
                <img
                  src={active.image}
                  alt={active.label}
                  loading="lazy"
                  className="h-72 w-full object-cover md:h-full"
                />
                <div className="px-7 pb-9 md:py-12 md:pr-12">
                  <h3 className="text-[clamp(1.6rem,3vw,2.25rem)]">{active.label}</h3>
                  <p className="mt-3 text-muted-foreground">{active.note}</p>
                  <ul className="mt-7 space-y-3 max-h-[26rem] overflow-y-auto pr-1">
                    {active.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between gap-4 border-b border-border/70 pb-3 text-[1.0625rem]"
                      >
                        <span className="flex items-center gap-3">
                          <IconLeaf className="h-4 w-4 shrink-0 text-forest" />
                          {item.name}
                        </span>
                        <span className="shrink-0 text-muted-foreground">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setReserveOpen(true)}
                  className="rounded-full bg-primary px-7 py-3.5 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Reserve Now
                </button>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-espresso/30 pb-1 transition-colors hover:border-espresso"
                >
                  View full menu in-store <IconArrow className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why FIKA */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="label-eyebrow">why fika</p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)]">
              Reasons to stay a little longer.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {usps.map((u, i) => (
              <Reveal as="li" key={u.title} delay={i * 70}>
                <u.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 font-display text-xl">{u.title}</h3>
                <p className="mt-2.5 text-muted-foreground">{u.body}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-24 bg-espresso py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="label-eyebrow text-[oklch(0.78_0.02_84.6)]">the room</p>
              <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] text-[oklch(0.96_0.014_84.6)]">
                Come see it in low light.
              </h2>
            </Reveal>
            <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
              {gallery.map((g, i) => (
                <Reveal as="figure" key={g.src} delay={(i % 3) * 90} className="break-inside-avoid">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className={`w-full rounded-2xl object-cover ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="label-eyebrow">guests</p>
                <h2 className="mt-5 max-w-xl text-[clamp(2rem,4.5vw,3.25rem)]">
                  What people take home.
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-sand px-5 py-4">
                <IconGoogle className="h-6 w-6 text-forest" />
                <div>
                  <p className="font-display text-2xl leading-none">4.2 / 5</p>
                  <p className="text-sm text-muted-foreground">Google rating</p>
                </div>
              </div>
            </div>
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 80}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8">
                  <blockquote className="font-display text-xl leading-snug">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    {t.name} · {t.context}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Visit */}
        <section id="visit" className="scroll-mt-24 bg-sand py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
            <Reveal>
              <p className="label-eyebrow">visit</p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)]">Find us on MG Marg.</h2>

              <div className="mt-9 space-y-7">
                <div className="flex gap-4">
                  <IconPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-[1.0625rem]">{ADDRESS}</p>
                </div>
                <div className="flex gap-4">
                  <IconPhone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${PHONE}`} className="text-[1.0625rem] underline-offset-4 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex gap-4">
                  <IconClock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="text-[1.0625rem]">
                    <p>Mon–Thu · 1:00 PM – 11:30 PM</p>
                    <p className="mt-1">Fri–Sun · 1:00 PM – 12:00 AM</p>
                  </div>
                </div>
              </div>

              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
                <li className="inline-flex items-center gap-2">
                  <IconCar className="h-4 w-4" /> Free & paid parking
                </li>
                <li className="inline-flex items-center gap-2">
                  <IconLeaf className="h-4 w-4" /> Air-conditioned seating
                </li>
                <li className="inline-flex items-center gap-2">
                  <IconAccess className="h-4 w-4" /> Ground-floor access
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-espresso px-7 py-3.5 text-[oklch(0.96_0.014_84.6)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-full border border-espresso/30 px-7 py-3.5 transition-colors hover:bg-background"
                >
                  Call to Reserve
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full min-h-80 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Map to FIKA, P Square Mall, Civil Lines, Prayagraj"
                  src="https://www.google.com/maps?q=P%20Square%20Mall%2C%20MG%20Marg%2C%20Civil%20Lines%2C%20Prayagraj&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-80 w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Reserve band */}
        <section id="reserve" className="relative scroll-mt-24 overflow-hidden">
          <img
            src={interiorB}
            alt="Curved banquette set for dinner at FIKA"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[oklch(0.24_0.021_44/0.82)]" />
          <div className="relative mx-auto max-w-3xl px-5 py-28 text-center md:px-8 md:py-36">
            <Reveal>
              <p className="label-eyebrow text-[oklch(0.8_0.02_84.6)]">a table is waiting</p>
              <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] text-[oklch(0.98_0.012_84.6)]">
                Come pause with us.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[oklch(0.9_0.02_84.6)]">
                Reserve for two, or for the whole table. We'll keep the light low and the coffee
                coming.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setReserveOpen(true)}
                  className="rounded-full bg-primary px-8 py-4 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Reserve Your Table
                </button>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.9_0.02_84.6/0.45)] px-8 py-4 text-[oklch(0.95_0.015_84.6)] transition-colors hover:bg-[oklch(0.95_0.015_84.6/0.12)]"
                >
                  <IconPhone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-3xl tracking-[0.3em]">fika</p>
              <p className="mt-4 max-w-xs text-muted-foreground">
                Pause the day. Savour the moment. A multi-cuisine cafe & coffee bar in Civil Lines,
                Prayagraj.
              </p>
              <a
                href="https://www.instagram.com/fika.ixd/"
                target="_blank"
                rel="noreferrer"
                aria-label="FIKA on Instagram"
                className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-espresso/50"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
            </div>
            <nav aria-label="Footer">
              <p className="label-eyebrow">explore</p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#reserve" className="transition-colors hover:text-foreground">
                    reservations
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <p className="label-eyebrow">find us</p>
              <address className="mt-5 space-y-3 not-italic text-muted-foreground">
                <p>{ADDRESS}</p>
                <p>
                  <a href={`tel:${PHONE}`} className="hover:text-foreground">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>Mon–Thu 1:00 PM – 11:30 PM</p>
                <p>Fri–Sun 1:00 PM – 12:00 AM</p>
              </address>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7 text-sm text-muted-foreground">
            <p>Dine-in · Takeaway · Home Delivery</p>
            <p>© {new Date().getFullYear()} FIKA, Prayagraj</p>
          </div>
        </div>
      </footer>

      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  );
}
