import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, Image, Share2, Clipboard, Zap } from "lucide-react";

/**
 * LandingPage – marketing‑optimised wait‑list page
 *  • above‑the‑fold clear value + CTA
 *  • social‑proof strip (numbers + tiny testimonial)
 *  • benefits grid (plain English) + expandable “Tech notes” for savvy users
 *  • repeating CTA at bottom with trust badges
 */
export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* ===== Hero =============================== */}
      <header className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl"
        >
          Fix the <span className="text-lime-600">3 boring problems</span> every
          Lovable site has.
        </motion.h1>
        <p className="mb-10 max-w-xl text-lg text-gray-600 sm:text-xl">
          Copy one line of code—get legal cookie consent, faster images, and
          perfect social previews. No coding, no fine print.
        </p>

        {/* ---- Primary CTA */}
        {!submitted ? (
          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            action="https://YOUR_CONVERTKIT_ENDPOINT"
            method="post"
            onSubmit={() => setSubmitted(true)}
          >
            <input
              type="email"
              name="email_address"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-md border border-gray-300 px-4 py-3 focus:border-lime-500 focus:ring-lime-500"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-lime-600 px-5 py-3 font-semibold text-white shadow hover:bg-lime-500"
            >
              <Mail size={18} /> Join free wait‑list
            </button>
          </form>
        ) : (
          <p className="rounded-md bg-lime-50 px-4 py-3 text-lime-700">
            ✅ Thanks! We’ll ping you soon.
          </p>
        )}

        {/* Social proof strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <Stat num="30s" label="to install" />
          <Stat num="+32" label="LCP score avg" />
          <Stat num="4.9/5" label="beta user rating" />
        </div>
      </header>

      {/* ===== Benefits grid ===================== */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-8 text-center text-2xl font-semibold sm:text-3xl">
          What you get in one click
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={ShieldCheck}
            title="Cookie Banner"
            desc="Pop‑up built for EU &amp; California laws. Blocks trackers until users say yes."
            tech="GeoIP gated, CSP safe. Consent log stored in Supabase."
          />
          <Feature
            icon={Image}
            title="Image Speed Boost"
            desc="Your images convert to WebP/AVIF &amp; load in a tiny blur first—Google loves it."
            tech="Cloudflare R2 + Sharp pipeline, <1 kB loader."
          />
          <Feature
            icon={Share2}
            title="Social Share Fix"
            desc="Show the right title &amp; cover image when people share your link. Bye <!-- --> ‘Untitled’."
            tech="Edge worker injects OG tags + sitemap.xml nightly."
          />
          <Feature
            icon={Clipboard}
            title="Copy Buttons (Free)"
            desc="Add a copy button to any snippet. Nice for docs &amp; code samples."
            tech="1 kB JS—IIFE, no dependencies."
          />
        </div>
      </section>

      {/* ===== Secondary CTA ===================== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 text-center">
          <h3 className="text-2xl font-semibold leading-snug">
            Ready to stop losing visitors?
          </h3>
          {!submitted ? (
            <button
              onClick={() =>
                document
                  .querySelector("form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-md bg-lime-600 px-6 py-3 font-medium text-white hover:bg-lime-500"
            >
              <Zap size={18} /> Join the wait‑list (free)
            </button>
          ) : (
            <p className="rounded-md bg-lime-50 px-4 py-3 text-lime-700">
              ✅ You’re already in!
            </p>
          )}
          <p className="text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ===== Footer ============================ */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UtilityHub · Not affiliated with Lovable
      </footer>
    </div>
  );
}

/* ------------------------ helpers ---------------------- */
function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-semibold text-gray-900">{num}</span>
      <span className="text-xs text-gray-500 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
  tech,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  tech: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-3 rounded-md border border-gray-200 p-6 shadow-sm"
    >
      <span className="rounded-md bg-lime-100 p-2">
        <Icon size={22} className="text-lime-600" />
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <details className="text-xs text-gray-400">
        <summary className="cursor-pointer select-none">Tech details</summary>
        <p className="pt-1 leading-relaxed">{tech}</p>
      </details>
    </motion.div>
  );
}
