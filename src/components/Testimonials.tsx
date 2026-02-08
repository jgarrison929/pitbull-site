interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  isPlaceholder?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote: "Finally, software built by someone who actually gets construction. I've been waiting 15 years for something like this.",
    name: "Alpha Tester",
    title: "Project Manager",
    company: "Commercial GC",
    isPlaceholder: true,
  },
  {
    quote: "The AI caught a spec mismatch on concrete PSI that would have cost us $40K. Paid for itself before we even paid for it.",
    name: "Alpha Tester",
    title: "Senior Estimator",
    company: "Mid-Size GC",
    isPlaceholder: true,
  },
  {
    quote: "We went from 5 different logins to 1. Our PMs spend time managing projects now instead of managing software.",
    name: "Alpha Tester",
    title: "Operations Director",
    company: "Regional GC",
    isPlaceholder: true,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-background rounded-xl p-6 border border-surface-light relative">
      {/* Quote Mark */}
      <div className="absolute -top-3 left-6 text-5xl text-amber/30 font-serif">"</div>
      
      <blockquote className="text-lg text-foreground pt-4">
        {testimonial.quote}
      </blockquote>
      
      <div className="mt-6 flex items-center gap-4">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center">
          <span className="text-amber text-lg font-semibold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold">
            {testimonial.isPlaceholder ? (
              <span className="text-muted italic">{testimonial.name}</span>
            ) : (
              testimonial.name
            )}
          </div>
          <div className="text-sm text-muted">
            {testimonial.title} • {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            What GCs are <span className="text-amber">saying.</span>
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Early feedback from construction professionals testing Pitbull.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-surface rounded-full px-5 py-2.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted">
              Real testimonials coming as we onboard alpha users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
