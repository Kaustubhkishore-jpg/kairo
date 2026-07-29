import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/kairo-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="w-full px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="KAIRO"
            className="h-25 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/features#features"
            className="text-slate-600 hover:text-indigo-600 transition"
          >
            Features
          </Link>

          <Link
  to="/features#how-it-works"
  className="text-slate-600 hover:text-indigo-600 transition"
>
  How it Works
</Link>

<Link
  to="/features#faq"
  className="text-slate-600 hover:text-indigo-600 transition"
>
  FAQ
</Link>

         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              to="/features#features"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 hover:text-indigo-600 transition"
            >
              Features
            </Link>

            <a
              href="/features#how-it-works"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 hover:text-indigo-600 transition"
            >
              How it Works
            </a>

            <a
              href="/features#faq"
              onClick={() => setIsOpen(false)}
              className="text-slate-600 hover:text-indigo-600 transition"
            >
              FAQ
            </a>

           
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;