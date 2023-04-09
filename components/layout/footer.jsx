import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="absolute w-full border-t col-span-2 border-gray-200 bg-white py-5 text-center">
      {/* First section */}
      <div className="content-around max-w-md py-6 px-12 grid grid-cols-2 justify-items-center mx-auto md:grid-cols-2 sm:grid-cols-1">
        <div className="space-y-2">
          <h3 className="font-medium text-gray-800">Explore</h3>
          <ul className="text-gray-500 space-y-1">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/markets">Markets</Link></li>
            <li><Link href="/media-center">Media Center</Link></li>
          </ul>
        </div>

        {/* Second section */}
        <div className="space-y-2">
          <h3 className="font-medium text-gray-800">Legal</h3>
          <ul className="text-gray-500 space-y-1">
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media links */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <Link href="https://www.linkedin.com">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </div>
        </Link>
        <Link href="https://www.facebook.com">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
          </div>
        </Link>
        <Link href="https://www.twitter.com">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
          </div>
        </Link>
        <Link href="https://www.instagram.com">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
          </div>
        </Link>
      </div>
      {/* Credit */}
      <div className="mt-6">
        <p className="text-gray-500">
          Terms of Use and Privacy and Disclaimer policies may apply {" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/steventey"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2023 Viora AI
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
