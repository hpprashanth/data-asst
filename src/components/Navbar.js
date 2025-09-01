import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">DataVinci</h1>
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <Menu />
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4 md:hidden">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
