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
    <div className="mt-4 mx-24 fixed top-0 right-0 left-0 z-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Image src="/assets/svg/logo.svg" width="64" height="64" alt="Logo" />
        </div>
        <div>
          <ul className="space-x-16 text-primary font-medium">
            {navItems.map((navItem, idx) => (
              <NavItem {...navItem} key={idx} />
            ))}
          </ul>
        </div>
        <div className="flex space-x-8">
          <div>
            <Image
              src="/assets/svg/github.svg"
              width="32"
              height="32"
              alt="Logo"
            />
          </div>
          <div>
            <Image
              src="/assets/svg/linkedin.svg"
              width="32"
              height="32"
              alt="Logo"
            />
          </div>
        </div>
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
      </div>
    </div>
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
