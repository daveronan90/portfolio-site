import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const navItems = [
  { pageName: "Home", url: "/" },
  { pageName: "About", url: "/about" },
  { pageName: "Projects", url: "/projects" },
  { pageName: "Contact", url: "/contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="relative z-40">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10 container mx-auto">
          <div className="scale-75 md:scale-100 flex lg:w-0 lg:flex-1">
            <Image
              src="/assets/svg/logo.svg"
              alt="Logo"
              width={60}
              height={60}
            />
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex text-primary">
            {navItems.map((item, idx) => (
              <NavItem key={idx} {...item} />
            ))}
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <div className="fill-cta">
              <Image
                src="/assets/svg/github.svg"
                width="40"
                height="40"
                alt="Github"
              />
            </div>
            <div className="fill-cta">
              <Image
                src="/assets/svg/linkedin.svg"
                width="40"
                height="40"
                alt="linkedin"
              />
            </div>
          </div>

          <div className="flex items-center">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 p-3 rounded focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </button>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-600 bg-gray-100 rounded-lg"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ pageName, url }) {
  const router = useRouter();

  return (
    <Link href={url}>
      {url === "/about" ? (
        <a
          className={
            router.asPath === url
              ? "text-bwhite border-b-2 border-bwhite px-2"
              : "px-2"
          }
        >
          {pageName}
        </a>
      ) : (
        <a
          className={
            router.asPath === url
              ? "text-cta border-b-2 border-cta px-2"
              : "px-2"
          }
        >
          {pageName}
        </a>
      )}
    </Link>
  );
}
