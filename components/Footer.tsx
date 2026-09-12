export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite-950 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between gap-6 text-sm">
        <div>
          <p className="font-display font-bold text-white">sutryva</p>
          <p className="font-body text-graphite-500 text-xs mt-1">
            Sutryva Technologies Pvt Ltd &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="font-body text-graphite-500 text-xs space-y-1 sm:text-right">
          <p>hello@sutryva.com</p>
          <p>Bihar, India</p>
        </div>
      </div>
    </footer>
  );
}
