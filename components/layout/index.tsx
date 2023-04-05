import Image from "next/image";
import MobileNavMenu from "./MobileNavMenu";
import Link from "next/link";
import { useState } from "react";
import Meta from "./meta";
import UserDropdown from "./user-dropdown";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  // Conditionally apply the 'hidden' class based on the isMobileNavOpen state
  const contentClass = isMobileNavOpen ? 'opacity-0 transition-opacity duration-300' : '';


  const mobileNavLinks = (
    <div
      className={`${isMobileNavOpen ? "block" : "hidden"} md:hidden text-center text-2xl mt-16`}
    >
      <Link href="/page1">
        <h1 className="block py-2 px-4 text-gray-700 hover:text-blue-500">Products</h1>
      </Link>
      <Link href="/page2">
        <h1 className="block py-2 px-4 text-gray-700 hover:text-blue-500">Use Cases</h1>
      </Link>
      <Link href="/page3">
        <h1 className="block py-2 px-4 text-gray-700 hover:text-blue-500">Vision</h1>
      </Link>
      <Link href="/page4">
        <h1 className="block py-2 px-4 text-gray-700 hover:text-blue-500">Our Team</h1>
      </Link>
    </div>
  );

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <div
        className={`fixed top-0 w-full ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          {!isMobileNavOpen && (
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center font-display text-2xl">
                <Image
                  src="/logo.png"
                  alt="Viora AI"
                  width="30"
                  height="30"
                  className="mr-2 rounded-sm"
                ></Image>
                <p className="font-bold text-xl text-gray-700 tracking-wider">
                  [ V
                  <span className="text-amber-400">I</span>
                  <span className="text-orange-500">O</span>
                  RA ]
                  <span className="text-cyan-400"> A</span>
                  <span className="text-emerald-500">I</span>
                </p>
              </Link>

              <div className="hidden md:flex space-x-4">
                <Link href="/products">
                  <h2 className="nav-link text-gray-700 hover:text-blue-500 cursor-pointer font-display text-l">Products</h2>
                </Link>
                <Link href="/usecases">
                  <h2 className="nav-link text-gray-700 hover:text-blue-500 cursor-pointer font-display text-l">Use Cases</h2>
                </Link>
                <Link href="/vision">
                  <h2 className="nav-link text-gray-700 hover:text-blue-500 cursor-pointer font-display text-l">Vision</h2>
                </Link>
                <Link href="/team">
                  <h2 className="nav-link text-gray-700 hover:text-blue-500 cursor-pointer font-display text-l">Our Team</h2>
                </Link>
              </div>
            </div>
          )}

          <MobileNavMenu
          />
          {!isMobileNavOpen && (
            <div className="hidden md:flex space-x-4">
              <AnimatePresence>
                {!session && status !== "loading" ? (
                  <motion.button
                    className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                    onClick={() => setShowSignInModal(true)}
                    {...FADE_IN_ANIMATION_SETTINGS}
                  >
                    Sign In
                  </motion.button>
                ) : (
                  <UserDropdown />
                )}
              </AnimatePresence>
            </div>
          )}

          {mobileNavLinks}

          {/* Hamburger menu icon (visible on small screens) */}
        </div>
      </div>
      <main className={`flex w-full flex-col items-center justify-center py-32 ${contentClass}`}>
        {children}
      </main>
    </>
  )
}
