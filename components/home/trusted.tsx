import Image from 'next/image';

export default function Integrations() {
  return (
    <div className="my-20 text-center">
      <div className="my-10 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]">
        Integrations
      </div>
      <div className="items-center bg-white bg-opacity-75 rounded-xl shadow-md flex flex-nowrap space-x-18 h-auto justify-center overflow-visible p-9 w-full">
        <ul className="my-10 grid grid-cols-3 gap-14 md:grid-cols-3 lg:grid-cols-6">

          <li className="flex justify-center">
            <Image
              src="/gmail.svg"
              alt="Transistor"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/meet.svg"
              alt="Tuple"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/docs.svg"
              alt="StaticKit"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/calendar.svg"
              alt="Mirage"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/zoom.svg"
              alt="Laravel"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/salesforce.svg"
              alt="Statamic"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

