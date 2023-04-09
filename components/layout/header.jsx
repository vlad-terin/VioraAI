import { Fragment } from 'react'
import { Link as ScrollLink } from 'react-scroll';

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
// import { Search } from '@/components/Search'

// import { ButtonLink } from '@/components/home/button'
import { Container } from '@/components/home/container'
import { Logo } from '@/components/home/logo'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" strokeWidth={2} strokeLinecap="round">
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-150 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel as="ul" className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
                <ScrollLink to="products-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={() => close()}>
                  Products
                </ScrollLink>
                <ScrollLink to="integrations-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={() => close()}>
                  Integrations
                </ScrollLink>
                <ScrollLink to="usecases-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={() => close()}>
                  Use Cases
                </ScrollLink>
                <ScrollLink to="vision-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={() => close()}>
                  Vision
                </ScrollLink>
              </Popover.Panel>

              {/* <SignedOut> */}
              {/*   <li className="border-t border-slate-300/40 pt-4"> */}
              {/*     <Link href="/sign-in"> */}
              {/*       <a className="block w-full">Sign in</a> */}
              {/*     </Link> */}
              {/*   </li> */}
              {/* </SignedOut> */}
              {/* <SignedIn> */}
              {/*   <UserButton userProfileURL="/user" afterSignOutAll="/" afterSignOutOneUrl="/" /> */}
              {/* </SignedIn> */}
            </Transition.Child>
          </Transition.Root>
        </>
      )
      }
    </Popover >
  )
}

export function Header() {
  return (
    <header className="py-5">
      <Container>
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center justify-between">
            <li>
              <div className="justify-between hidden md:flex space-x-2">
                <Logo />
                <ScrollLink to="home-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" >
                  Home
                </ScrollLink>
                <ScrollLink to="integrations-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" >
                  Integrations
                </ScrollLink>
                <ScrollLink to="usecases-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" >
                  Use Cases
                </ScrollLink>
                <ScrollLink to="vision-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" >
                  Vision
                </ScrollLink>
                <ScrollLink to="Contact-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" >
                  Investors
                </ScrollLink>
              </div>
            </li>
          </ul>
          <ul className="flex items-center justify-between">
            {/* <SignedOut> */}
            {/*   <li className="border-t border-slate-300/40 pt-4"> */}
            {/*     <Link href="/sign-in"> */}
            {/*       <a className="block w-full">Sign in</a> */}
            {/*     </Link> */}
            {/*   </li> */}
            {/* </SignedOut> */}
            {/* <SignedIn> */}
            {/*   <UserButton userProfileURL="/user" afterSignOutAll="/" afterSignOutOneUrl="/" /> */}
            {/* </SignedIn> */}
            {/* <li className="ml-auto md:ml-8"> */}
            {/*   <ButtonLink href="/register" color="blue"> */}
            {/*     <span> */}
            {/*       Get started<span className="hidden lg:inline"> today</span> */}
            {/*     </span> */}
            {/*   </ButtonLink> */}
            {/* </li> */}
            <li className="md:hidden">
              <Logo />
            </li>
            <li className="md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

