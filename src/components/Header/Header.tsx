"use client";

import { useContext, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import ThemeContext from "@/context/themeContext";
import { FaSignOutAlt, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { user, isAuthenticated, isLoading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex-shrink-0"
          >
            <span className="hidden sm:inline">Luxury Hotel</span>
            <span className="sm:hidden">LH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-300 relative group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/rooms"
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-300 relative group py-2"
            >
              Rooms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-300 relative group py-2"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-300 relative group py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => {
                setDarkTheme(!darkTheme);
                if (darkTheme) {
                  localStorage.removeItem("hotel-theme");
                } else {
                  localStorage.setItem("hotel-theme", "true");
                }
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkTheme ? (
                <MdOutlineLightMode className="text-yellow-500 text-lg sm:text-xl" />
              ) : (
                <MdDarkMode className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <FaTimes className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />
              ) : (
                <FaBars className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />
              )}
            </button>

            {/* User Account - Desktop Only */}
            <div className="relative hidden lg:block">
              {isAuthenticated && user ? (
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <Link
                    href={`/users/${user.id}`}
                    className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
                  >
                    {user.image && typeof user.image === "string" ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-amber-400">
                        <Image
                          src={user.image}
                          alt={user.name || "User avatar"}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <FaUserCircle className="text-xl sm:text-2xl text-amber-600" />
                    )}
                    <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200 max-w-24 lg:max-w-none truncate">
                      {user.name}
                    </span>
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="hidden lg:flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                  >
                    <FaSignOutAlt className="text-sm" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth"
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-full hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  <FaUserCircle className="text-base sm:text-lg" />
                  <span className="hidden sm:block">Sign In</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle - only show on mobile/tablet */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <FaTimes className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />
              ) : (
                <FaBars className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex flex-col space-y-1 py-4 px-4">
              {/* Navigation Links */}
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/rooms"
                className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300"
                onClick={closeMenu}
              >
                Rooms
              </Link>
              <Link
                href="/gallery"
                className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300"
                onClick={closeMenu}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300"
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* User Account Section for Mobile */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                {isAuthenticated && user ? (
                  <div className="space-y-2">
                    <Link
                      href={`/users/${user.id}`}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      {user.image && typeof user.image === "string" ? (
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400">
                          <Image
                            src={user.image}
                            alt={user.name || "User avatar"}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <FaUserCircle className="text-2xl text-amber-600" />
                      )}
                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                        {user.name}
                      </span>
                    </Link>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                        closeMenu();
                      }}
                      className="flex items-center space-x-3 px-4 py-3 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                    >
                      <FaSignOutAlt className="text-red-500" />
                      <span className="text-red-600 dark:text-red-400 font-medium">
                        Logout
                      </span>
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/auth"
                    className="flex items-center justify-center space-x-2 mx-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    <FaUserCircle className="text-lg" />
                    <span>Sign In</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
