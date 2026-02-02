import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-bold text-amber">Pitbull</span>
            <p className="mt-2 text-sm text-muted">
              AI-powered construction management.
              <br />
              Cloud or self-hosted.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/features"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <a
                  href="/#waitlist"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  Join the Waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-light text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Pitbull Construction Solutions. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
