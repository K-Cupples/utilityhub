// apps/marketing/src/pages/index.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        UtilityHub – add-ons for Lovable/Bolt
      </h1>
      <ul className="space-y-2 mb-6">
        <li>✅ GDPR/CCPA banner in 30 s</li>
        <li>✅ WebP + LQIP CDN</li>
        <li>✅ OG/Sitemap generator</li>
      </ul>
      <form
        action="https://YOUR_CONVERTKIT_FORM_ENDPOINT"
        method="post"
        className="flex"
      >
        <input
          name="email_address"
          type="email"
          placeholder="you@example.com"
          className="rounded-l-md p-2 text-black"
          required
        />
        <button className="bg-lime-500 px-4 rounded-r-md">
          Get early access
        </button>
      </form>
    </main>
  );
}
