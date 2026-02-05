import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Pitbull Construction Solutions",
  description:
    "Built by a construction technology veteran with 20 years in the industry. Powered by AI agents that work around the clock.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Built by someone who has{" "}
            <span className="text-amber">been there.</span>
          </h1>

          <div className="mt-10 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Pitbull is built by a construction technology veteran with 20 years
              in the industry. Not a Silicon Valley team guessing what
              contractors need. Someone who has lived it. Someone who has watched
              PMs drown in disconnected tools and wondered why nobody fixed it.
            </p>
            <p>
              The answer is simple: the software industry does not build for
              contractors. It builds for investors. Per-user pricing. Feature
              gates. Cloud-only lock-in. Annual contracts with price hikes built
              in. Construction is the least digitized major industry on the
              planet, and it is not because contractors are behind. It is because
              the software has failed them.
            </p>
            <p>
              Pitbull is the alternative. One platform that replaces the
              disconnected toolchain. AI that reads documents and catches
              problems before they cost money. Pricing you can understand. Built
              cloud-native for the future of construction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Powered by <span className="text-amber">AI agents</span> that work
            around the clock.
          </h2>

          <div className="mt-8 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Pitbull is not just a web app with a database. It is a platform
              with AI agents running in the background, processing documents,
              flagging compliance issues, comparing bids, and analyzing contracts
              while your team sleeps.
            </p>
            <p>
              These are not chatbots. They are specialized workers that
              understand construction documents, contract language, and
              compliance requirements. They work 24/7, they do not make typos,
              and they never miss a deadline because they forgot to check the
              calendar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            The <span className="text-amber">cloud-first</span> approach.
          </h2>

          <div className="mt-8 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              The future of construction runs in the cloud. With data centers in space 
              within the next decade and edge computing everywhere, local infrastructure 
              is becoming obsolete except for unique edge cases.
            </p>
            <p>
              Pitbull is built cloud-native from day one. This means your team can access 
              projects from anywhere, your data is automatically backed up across multiple 
              regions, and you get updates without IT headaches. We handle the infrastructure 
              so you can focus on building.
            </p>
            <p>
              Modern cloud architecture provides reliability and scalability that local 
              servers simply cannot match. Your construction projects deserve infrastructure 
              that is as robust as the buildings you create.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Where we are <span className="text-amber">today.</span>
          </h2>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-amber font-bold text-sm mt-1 shrink-0">
                ALPHA
              </span>
              <div>
                <h3 className="font-semibold">Current</h3>
                <p className="text-muted">
                  Multi-tenant architecture, project management, bid management,
                  JWT auth with tenant isolation. Deployed and running.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-muted font-bold text-sm mt-1 shrink-0">
                BETA
              </span>
              <div>
                <h3 className="font-semibold">Next</h3>
                <p className="text-muted">
                  Contracts module, mobile-responsive UI, CI/CD pipeline.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-muted font-bold text-sm mt-1 shrink-0">
                v0.5
              </span>
              <div>
                <h3 className="font-semibold">Early Access</h3>
                <p className="text-muted">
                  Document management with AI OCR pipeline, RFIs, submittals,
                  daily logs, client portal, billing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-muted font-bold text-sm mt-1 shrink-0">
                v1.0
              </span>
              <div>
                <h3 className="font-semibold">The Future</h3>
                <p className="text-muted">
                  Full AI document intelligence, insurance and sub compliance
                  automation, accounting integration, advanced analytics and
                  reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Construction software should work{" "}
            <span className="text-amber">for contractors</span>, not against
            them.
          </h2>
          <p className="mt-4 text-lg text-muted">
            That is Pitbull. Join the waitlist.
          </p>
          <Link href="/#waitlist" className="mt-8 inline-flex items-center justify-center bg-amber hover:bg-amber-dark text-background font-semibold px-8 py-3 rounded-lg transition-colors text-lg">Join the Waitlist</Link>
        </div>
      </section>
    </div>
  );
}
