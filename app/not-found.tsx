import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-forest mb-4">404</h1>
      <h2 className="text-2xl font-bold text-forest mb-4">
        Stranica nije pronađena
      </h2>
      <p className="text-charcoal-muted max-w-md mb-8">
        Stranica koju tražite ne postoji ili je premeštena.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-coral text-white font-bold hover:bg-coral-600 transition-colors shadow-coral"
      >
        Vrati se na početnu
      </Link>
    </div>
  );
}
