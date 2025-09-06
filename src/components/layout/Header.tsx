"use client";
import { useState } from "react";
import Link from "next/link";
// Components
import { Logo } from "../";
import Button from "../ui/Button";
// Data
import { navData } from "@/data/navData";
// Icons
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo showText={false} className="sm:hidden" />
            <Logo showText={true} className="hidden sm:flex" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navData.mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-normal text-sm relative group tracking-wide ${
                  item.highlight
                    ? "text-accent hover:text-accent/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                    item.highlight ? "bg-accent/50" : "bg-accent"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-lg transition-all duration-200 transform hover:scale-105"
              aria-label="Shopping cart"
            >
              <ShoppingBagIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                2
              </span>
            </Link>

            {/* Login Button - Using Button Component */}
            <Link href="/login" className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                className="rounded-full px-4 py-1.5"
              >
                Login
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-lg transition-all duration-200 transform hover:scale-105"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5 transform transition-transform duration-200 rotate-180" />
              ) : (
                <Bars3Icon className="w-5 h-5 transform transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 border-t border-neutral-200/50"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl">
            <div className="px-2 pt-4 pb-6 space-y-1">
              {navData.mobileNavigation
                .filter((item) => !item.isAuth)
                .map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-3 font-normal rounded-xl transition-all duration-200 transform hover:translate-x-1 tracking-wide ${
                      item.highlight
                        ? "text-accent hover:bg-accent/5"
                        : "text-foreground hover:bg-neutral-100"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}

              {/* Login Button in Mobile Menu - Using Button Component */}
              <div className="pt-4 mt-4 border-t border-neutral-200/50">
                <Link href="/login" onClick={toggleMobileMenu}>
                  <Button variant="primary" className="w-full rounded-full">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
