import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-7 w-auto"
            />

            <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">
              Build, compare, and manage your ideal development technology
              stack with ease.
            </p>

            <div className="mt-4 flex gap-4 text-xs font-medium text-slate-500">
              <a href="#" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="#" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase text-slate-900">
              Product
            </h3>

            <div className="mt-4 space-y-2 text-xs text-slate-400">
              <a href="#" className="block hover:text-slate-900">
                Home
              </a>
              <a href="#technologies" className="block hover:text-slate-900">
                Technologies
              </a>
              <a href="#" className="block hover:text-slate-900">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase text-slate-900">
              Company
            </h3>

            <div className="mt-4 space-y-2 text-xs text-slate-400">
              <a href="#" className="block hover:text-slate-900">
                About
              </a>
              <a href="#" className="block hover:text-slate-900">
                Contact
              </a>
              <a href="#" className="block hover:text-slate-900">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase text-slate-900">
              Legal
            </h3>

            <div className="mt-4 space-y-2 text-xs text-slate-400">
              <a href="#" className="block hover:text-slate-900">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-slate-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-100 pt-5 text-[10px] text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;