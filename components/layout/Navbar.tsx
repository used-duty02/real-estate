"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Home className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">
                LuxeHomes
              </span>
            </Link>
          </div>

          <DesktopNav />
          <MobileNavButton
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>

        <MobileNav isOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link
        href="/"
        className="text-gray-700 hover:text-primary transition-colors"
      >
        Home
      </Link>
      <Link
        href="/properties"
        className="text-gray-700 hover:text-primary transition-colors"
      >
        Properties
      </Link>
      <Link
        href="#"
        className="text-gray-700 hover:text-primary transition-colors"
      >
        About
      </Link>
      <Link
        href="/#contact"
        className="text-gray-700 hover:text-primary transition-colors"
      >
        Contact
      </Link>
      <Button variant="outline" className="flex items-center">
        <Phone className="mr-2 h-4 w-4" /> (555) 123-4567
      </Button>
    </div>
  );
}

function MobileNavButton({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}) {
  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}

function MobileNav({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link
          href="/"
          className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Link
          href="/properties"
          className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
        >
          Properties
        </Link>
        <Link
          href="#"
          className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link
          href="/#contact"
          className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
        >
          Contact
        </Link>
        <Button variant="outline" className="w-full justify-center mt-4">
          <Phone className="mr-2 h-4 w-4" /> (555) 123-4567
        </Button>
      </div>
    </div>
  );
}
