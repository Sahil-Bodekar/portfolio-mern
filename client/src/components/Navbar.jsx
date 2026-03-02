import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold text-cyan-400">
          &lt;Sahil.dev /&gt;
        </h1>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          {open ? (
            <X
              className="text-cyan-400 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Menu
              className="text-cyan-400 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800 px-4 py-4 space-y-4">
          <a href="#about" onClick={() => setOpen(false)} className="block">
            About
          </a>
          <a href="#projects" onClick={() => setOpen(false)} className="block">
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
