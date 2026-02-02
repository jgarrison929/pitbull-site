import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features | Pitbull Construction Solutions",
  description:
    "AI document intelligence, submittal review, bid leveling, contract ops, and more. Built for general contractors.",
};

const features = [
  {
    title: "AI Document Intelligence",
    what: "OCR every document that enters your system. Build a searchable, semantic index across your entire project library. Upload a plan set and ask questions in plain English.",
    why: "Construction generates mountains of paper. Specs, submittals, RFIs, contracts, COIs, daily logs. Finding what you need means digging through folders, emails, and filing cabinets. That search time adds up to hours per week per PM.",
    how: "Documents are processed through OCR (optical character recognition) and indexed with AI embeddings. Search by meaning, not just keywords. Ask \"what does the spec say about concrete mix design\" and get the exact section.",
    icon: "📄",
  },
  {
    title: "Submittal vs Spec Review",
    what: "Upload a submittal and the AI checks it against the relevant spec section. Flags mismatches, missing data, and potential issues before your PE ever sees it.",
    why: "Submittal review is tedious, error-prone, and a bottleneck on every project. A missed mismatch between a submittal and the spec can mean rejected materials, delays, and change orders.",
    how: "AI reads both documents, extracts requirements and submitted values, then compares them line by line. \"Concrete mix shows 3500 PSI, spec requires 4000 PSI. Flag.\" Review time drops from hours to minutes.",
    icon: "🔍",
  },
  {
    title: "Contract Ops Assistant",
    what: "Ask a plain-English question about your contract and get actionable answers. WHO needs to send notice, WHAT it must say, WHEN it is due, and a TEMPLATE generated from your actual contract language.",
    why: "PMs are not lawyers, but they need to make contract-driven decisions every day. Weather delays, change order procedures, notice requirements. Getting it wrong costs real money.",
    how: "Your contracts are indexed by the AI. When you ask a question, it finds the relevant clauses, interprets the requirements, and generates step-by-step guidance with templates. At 6am, no lawyer needed.",
    icon: "📋",
  },
  {
    title: "Bid Leveling",
    what: "OCR sub bids, extract line items automatically, and compare them side by side. Spot scope gaps, outliers, and missing items across all bidders.",
    why: "Leveling bids manually means hours in spreadsheets, re-typing numbers from PDFs, and hoping you did not miss a scope gap that becomes a change order later.",
    how: "Upload bid documents. AI extracts line items, quantities, and pricing. Auto-generates a comparison matrix. \"Electrical sub #3 is 40% below average on conduit. Verify scope.\" Catch problems before you award.",
    icon: "📊",
  },
  {
    title: "Sub Compliance Dashboard",
    what: "Every subcontractor, every requirement, one view. Insurance certificates, licenses, safety records, prevailing wage compliance, bonding, and certifications. All tracked automatically.",
    why: "Tracking sub compliance is a full-time job that nobody signed up for. Expired insurance, lapsed licenses, missing safety certs. One missed item can shut down a job site or void your coverage.",
    how: "OCR every COI, cross-reference against contract requirements. \"Sub CGL is occurrence-based but contract requires claims-made.\" Auto-track expirations and send alerts before anything lapses.",
    icon: "✅",
  },
  {
    title: "Preconstruction Intelligence",
    what: "Ingest a full plan set. AI identifies scope gaps, coordination issues, and ambiguities before they become RFIs in the field.",
    why: "The earlier you catch a problem, the cheaper it is to fix. Issues found in preconstruction cost a fraction of what they cost during construction. But plan review is time-intensive and easy to rush.",
    how: "AI analyzes drawings and specs together, cross-referencing trades and scopes. Flags areas where details are missing, specs conflict, or coordination between trades is unclear.",
    icon: "🏗️",
  },
  {
    title: "Redline Detection",
    what: "Upload two versions of any document. AI tells you exactly what changed and what it means for your project. No more buried scope changes in revision 3.",
    why: "Document revisions happen constantly. Owners, architects, and engineers update specs, drawings, and contracts. Changes buried in a revision can mean unpriced scope, missed requirements, or liability.",
    how: "Side-by-side AI comparison that highlights every change, categorizes the impact (cost, schedule, scope), and flags anything that needs attention. Catches what humans miss.",
    icon: "📝",
  },
  {
    title: "Self-Hosted Deployment",
    what: "Run the entire platform on your own servers. Full data ownership, air-gapped capability, and no dependency on our cloud infrastructure.",
    why: "Government contractors, DOD work, and contractors in regulated environments need their data on their own infrastructure. Others just want the peace of mind of owning their data.",
    how: "docker compose up and you are running. Same platform, same features, your hardware. We provide the software and updates. You control the data.",
    icon: "🏠",
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Features built for{" "}
            <span className="text-amber">real work.</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-3xl">
            Every feature exists because someone needed it on a real job site.
            No bloat. No gimmicks. Tools that make PMs faster, not busier.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {feature.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-1">
                      What it does
                    </h3>
                    <p className="text-muted">{feature.what}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-1">
                      Why it matters
                    </h3>
                    <p className="text-muted">{feature.why}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-1">
                      How it works
                    </h3>
                    <p className="text-muted">{feature.how}</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-xl border border-surface-light aspect-video flex items-center justify-center">
                <span className="text-6xl">{feature.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to ditch the{" "}
            <span className="text-amber">duct tape?</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Currently in alpha. Join the waitlist to get early access.
          </p>
          <Link href="/#waitlist" className="mt-8 inline-flex items-center justify-center bg-amber hover:bg-amber-dark text-background font-semibold px-8 py-3 rounded-lg transition-colors text-lg">Join the Waitlist</Link>
        </div>
      </section>
    </div>
  );
}
