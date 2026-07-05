import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Hammer,
  Ruler,
  Sparkles,
  CheckCircle2,
  Star,
  Building2,
} from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <StatsBar />
      <WhyChoose />
      <Process />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </span>
          Buildcraft
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">Why us</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#testimonials" className="hover:text-foreground transition">Reviews</a>
        </nav>
        <a
          href="#estimate"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.86_0.17_92)] hover:brightness-105 transition"
        >
          Get Estimate <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute top-40 -right-40 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Trusted by 2,400+ homeowners across India
          </div>
          <h1 className="mt-6 text-[3.25rem] md:text-[5.5rem] leading-[0.95] font-extrabold tracking-tight">
            <span className="text-primary">Buildcraft</span>
            <br />
            <span>builds it right.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            End-to-end home construction with transparent pricing, master-grade
            materials, and on-time delivery — from blueprint to key handover.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background hover:bg-foreground/90 transition"
            >
              Get a Free Construction Estimate
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+911800000000"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-sm font-semibold hover:bg-accent transition"
            >
              <Phone className="h-4 w-4" /> 1800 000 000
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[project1, project2, project3].map((s) => (
                <img key={s} src={s} alt="" className="h-9 w-9 rounded-full border-2 border-background object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="text-xs mt-0.5">4.9/5 — 1,200+ verified reviews</p>
            </div>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <div id="estimate" className="relative">
      <div className="absolute inset-0 rounded-[2rem] bg-primary/40 blur-2xl -z-10" />
      <div className="rounded-[2rem] border border-border bg-card p-6 md:p-8 shadow-[0_30px_80px_-30px_oklch(0.2_0.02_60/0.25)]">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary text-primary-foreground">
            <Ruler className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Talk to our expert</p>
            <h3 className="font-bold text-lg">Get your free estimate</h3>
          </div>
        </div>
        {sent ? (
          <div className="mt-8 rounded-2xl bg-primary/20 border border-primary/40 p-6 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
            <p className="mt-3 font-bold">Thanks — we'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required placeholder="Your name" className="w-full rounded-2xl bg-background border border-border px-5 py-4 outline-none focus:border-primary transition" />
            <input required type="email" placeholder="Email address" className="w-full rounded-2xl bg-background border border-border px-5 py-4 outline-none focus:border-primary transition" />
            <input required placeholder="Phone number" className="w-full rounded-2xl bg-background border border-border px-5 py-4 outline-none focus:border-primary transition" />
            <select required className="w-full rounded-2xl bg-background border border-border px-5 py-4 outline-none focus:border-primary transition">
              <option value="">Choose city</option>
              <option>Mumbai</option>
              <option>Delhi NCR</option>
              <option>Bengaluru</option>
              <option>Hyderabad</option>
              <option>Pune</option>
            </select>
            <textarea rows={3} placeholder="Tell us about your project" className="w-full rounded-2xl bg-background border border-border px-5 py-4 outline-none focus:border-primary transition resize-none" />
            <button className="w-full rounded-full bg-primary py-4 font-bold text-primary-foreground hover:brightness-105 transition">
              Submit
            </button>
            <p className="text-center text-xs text-muted-foreground">By submitting you agree to our terms and privacy policy.</p>
          </form>
        )}
      </div>
    </div>
  );
}

const stats = [
  { v: "440+", l: "Quality checks" },
  { v: "600K+", l: "Sqft. built" },
  { v: "100%", l: "On-time delivery" },
  { v: "10+", l: "Years warranty" },
  { v: "12+", l: "Cities served" },
];

function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 -mt-6">
      <div className="rounded-[2rem] bg-card border border-border grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
        {stats.map((s) => (
          <div key={s.l} className="px-6 py-6 md:py-8 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.v}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  { icon: ShieldCheck, title: "10-year structural warranty", desc: "Every home we build is backed by a decade-long structural guarantee — in writing." },
  { icon: Clock, title: "On-time or we pay", desc: "Delivery timelines committed upfront. Miss a milestone? You get penalty credit back." },
  { icon: Hammer, title: "Master craftsmen only", desc: "Site engineers, plumbers, and finishers vetted through our 40-point trade certification." },
  { icon: Sparkles, title: "Transparent pricing", desc: "No hidden costs. Real-time BOQ dashboard shows every rupee — materials, labour, taxes." },
  { icon: Ruler, title: "Design-led builds", desc: "In-house architects turn your brief into 3D walkthroughs before a single brick is laid." },
  { icon: CheckCircle2, title: "440 quality checks", desc: "Third-party audited checkpoints across foundation, structure, MEP, and finishing." },
];

function WhyChoose() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Why Buildcraft</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">
          The most <span className="text-primary">reliable</span> way<br className="hidden md:block" /> to build your home.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          We transform your home construction dreams into reality with expert teams and a seamless process — from design and approvals to key handover.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-3xl border border-border bg-card p-7 hover:border-primary/60 hover:-translate-y-1 transition-all duration-300">
            <div className="h-12 w-12 rounded-2xl bg-primary/20 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Share your brief", d: "Tell us the plot, budget, and vibe. Free consultation with a senior architect." },
  { n: "02", t: "Design & estimate", d: "3D walkthroughs, floor plans, and a transparent BOQ within 7 days." },
  { n: "03", t: "Approvals & materials", d: "We handle municipal approvals and lock in premium-grade materials." },
  { n: "04", t: "Build with 440 checks", d: "Weekly progress reports, live BOQ dashboard, and third-party quality audits." },
  { n: "05", t: "Handover & warranty", d: "Key handover with 10-year structural + 5-year finishing warranty." },
];

function Process() {
  return (
    <section id="process" className="bg-foreground text-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Our process</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">Five clear steps. Zero surprises.</h2>
          </div>
          <p className="max-w-md text-background/70">
            From your first call to key handover, every stage is transparent, tracked, and signed off by you.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-background/10 p-6 hover:bg-primary hover:text-primary-foreground hover:border-primary transition group">
              <div className="text-4xl font-extrabold text-primary group-hover:text-primary-foreground">{s.n}</div>
              <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm opacity-70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { img: project1, title: "Whitegate Residence", meta: "4 BHK • 4,200 sqft • Delhi NCR" },
  { img: project2, title: "Palmshade Villa", meta: "5 BHK • 6,800 sqft • Goa" },
  { img: project3, title: "Stoneline Townhouse", meta: "3 BHK • 2,900 sqft • Bengaluru" },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Recent builds</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">Homes we've handed over.</h2>
        </div>
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-sm hover:text-primary transition">
          View all projects <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a key={p.title} href="#" className="group">
            <div className="overflow-hidden rounded-3xl aspect-[4/3]">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.meta}</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-card border border-border grid place-items-center group-hover:bg-primary group-hover:border-primary transition">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const reviews = [
  { n: "Ananya & Rohan", c: "Mumbai", q: "The BOQ dashboard alone was worth it. We knew where every rupee went, every week. Delivered two days early." },
  { n: "Vikram Shetty", c: "Bengaluru", q: "Handled everything — approvals, architects, contractors. I just visited on weekends and watched my home go up." },
  { n: "Priya Menon", c: "Kochi", q: "10-year warranty in writing sold us. Two years in, zero issues. The finishing crew were true craftsmen." },
];

function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <div className="rounded-[2.5rem] bg-primary/20 border border-primary/30 p-8 md:p-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
        <p className="text-sm font-bold uppercase tracking-widest text-primary relative">Homeowner stories</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight relative max-w-2xl">Real families. Real homes. Real timelines.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-5 relative">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-3xl bg-background p-6 border border-border">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90">"{r.q}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-bold">{r.n}</p>
                <p className="text-sm text-muted-foreground">{r.c}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-16 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Ready to build? <span className="text-primary">Let's talk.</span>
          </h2>
          <p className="mt-5 text-background/70 max-w-xl">
            Book a free 30-minute consultation with a senior architect. We'll walk you through timelines, materials, and a ballpark estimate.
          </p>
        </div>
        <div className="relative flex flex-col gap-3">
          <a href="#estimate" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground hover:brightness-105 transition">
            Get Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+911800000000" className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-7 py-4 text-sm font-semibold hover:bg-background/10 transition">
            <Phone className="h-4 w-4" /> Call 1800 000 000
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary text-primary-foreground">
              <Building2 className="h-5 w-5" />
            </span>
            Buildcraft
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Modern home construction with transparent pricing, verified quality, and on-time delivery.
          </p>
        </div>
        <div>
          <p className="font-bold text-sm mb-4">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#why" className="hover:text-foreground">Why us</a></li>
            <li><a href="#process" className="hover:text-foreground">Process</a></li>
            <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@buildcraft.co</li>
            <li>1800 000 000</li>
            <li>Delhi • Mumbai • Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Buildcraft. All rights reserved.</p>
          <p>Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}

