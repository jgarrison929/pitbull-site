import Link from "next/link";

import { FeatureCard } from "@/components/FeatureCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { DemoVideo } from "@/components/DemoVideo";
import { ProductScreenshots } from "@/components/ProductScreenshots";
import { Testimonials } from "@/components/Testimonials";

const features = [
  {
    title: "AI Document Intelligence",
    description:
      "OCR every document. Semantic search across your entire project library. Find what you need in seconds, not hours.",
    icon: "📄",
  },
  {
    title: "Submittal vs Spec Review",
    description:
      'Upload a submittal, AI checks it against the spec. "Concrete mix shows 3500 PSI, spec requires 4000. Flag."',
    icon: "🔍",
  },
  {
    title: "Contract Ops Assistant",
    description:
      "Ask about a weather delay and get WHO needs notice, WHAT it must say, WHEN it is due, and a TEMPLATE from your actual contract language. At 6am. No lawyer needed.",
    icon: "📋",
  },
  {
    title: "Bid Leveling",
    description:
      'OCR sub bids, extract line items, auto-compare. "Electrical sub #3 is 40% below average on conduit. Verify scope."',
    icon: "📊",
  },
  {
    title: "Sub Compliance Dashboard",
    description:
      "Every sub, every requirement, one view. Insurance, licenses, safety records, certifications. Auto-flag before anyone steps on site with a lapsed cert.",
    icon: "✅",
  },
  {
    title: "Cloud-Native. Built for Tomorrow.",
    description:
      "Built cloud-first for the future of construction. Global accessibility, automatic backups, no IT headaches. Your team can work from anywhere.",
    icon: "☁️",
  },
];

const problems = [
  "PM software ($50K+/year)",
  "Plan review tools",
  "Payment portals",
  "Markup software",
  "Three different spreadsheets",
  "Email chains nobody can find",
  "A filing cabinet of insurance certs",
  "A lawyer on speed dial",
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Stop running projects on <span className="text-amber">duct tape</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl">
            Pitbull replaces siloed tools with one GC-first platform that actually talks to itself. AI reads your docs and flags issues before they turn into change orders. Built for the cloud.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center bg-amber hover:bg-amber-dark text-background font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              Join the Waitlist
            </a>
            <Link
              href="/features"
              className="inline-flex items-center justify-center border border-surface-light hover:border-amber text-foreground font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              See Features
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            Alpha access is limited. We’ll reach out when a spot opens.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Your stack is expensive. Your data is <span className="text-amber">trapped</span>.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-3xl">
            Most GCs pay for a pile of tools that do not share data. PMs waste hours re-keying the same info across docs, emails, spreadsheets, and portals. That is where mistakes hide.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-center gap-3 bg-background rounded-lg px-4 py-3"
              >
                <span className="text-red-400 text-lg">✕</span>
                <span className="text-muted">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-semibold">
            Pitbull replaces the disconnected toolchain with <span className="text-amber">one platform</span>.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            AI that actually{" "}
            <span className="text-amber">does work.</span>
          </h2>
          <p className="mt-4 text-lg text-muted max-w-3xl">
            Not a chatbot bolted onto a project list. Pitbull reads your
            documents, understands your contracts, and catches problems before
            they cost you money.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <ProductScreenshots />

      {/* Demo Video */}
      <DemoVideo />

      {/* Built Different */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Built <span className="text-amber">different.</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Cloud-Native. Built for Tomorrow.</h3>
              <p className="text-muted">
                The future of construction runs in the cloud. With data centers in space within the next decade, 
                local infrastructure is becoming obsolete. Pitbull leverages modern cloud infrastructure for 
                scalability, reliability, and global accessibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-muted">
                No &quot;contact sales for a quote.&quot; No per-user pricing
                that punishes you for growing. No feature gates that force you
                into enterprise tier. You know what you are paying before you
                sign.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Built for GCs</h3>
              <p className="text-muted">
                Not residential remodelers. Not architects. General contractors
                building commercial projects. Every feature is designed for how
                GCs actually work: managing subs, tracking costs, moving paper,
                keeping projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Waitlist */}
      <section id="waitlist" className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get <span className="text-amber">early access.</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Currently in alpha. Join the waitlist to be first in line when we
            open up access.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}
