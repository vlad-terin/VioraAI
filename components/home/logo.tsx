import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center font-display text-2xl">
      <Image
        src="/logo.png"
        alt="Viora AI"
        width={30}
        height={30}
        className="mr-2 rounded-sm"
      />
      <span className="font-bold text-xl text-gray-700 tracking-wider">
        [ V
        <span className="text-amber-400">I</span>
        <span className="text-orange-500">O</span>
        RA ]
        <span className="text-cyan-400"> A</span>
        <span className="text-emerald-500">I</span>
      </span>
    </Link>
  );
}
