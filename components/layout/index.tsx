import Image from "next/image";
import { Header } from './header'
import { Link as ScrollLink } from 'react-scroll';
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
  const contentClass = isMobileNavOpen ? 'transition-opacity duration-300' : '';


  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <div
        className={` fixed top-0 w-full ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        <Header />
      </div>
      <main className={`w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 flex w-full flex-col items-center justify-center py-32 ${contentClass}`}>
        {children}
      </main>
    </>
  )
}
