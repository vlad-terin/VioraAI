import Image from 'next/image';

export default function Integrations() {
  return (
    <div className="my-20 text-center">
      <div className="my-10 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]">
        Integrations
      </div>
      <div className={`bg-gradient-to-br from-indigo-50 via-white to-cyan-100 relative overflow-hidden flowingGradient rounded-xl border border-gray-200 bg-white shadow-md items-center bg-white bg-opacity-75 rounded-xl shadow-md flex flex-nowrap space-x-18 h-auto justify-center overflow-visible p-9 w-full`}>
        <ul className="my-10 grid grid-cols-3 gap-14 md:grid-cols-3 lg:grid-cols-6">

          <li className="flex justify-center">
            <Image
              src="/gmail.svg"
              alt="Gmail"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/meet.svg"
              alt="Meet"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/docs.svg"
              alt="Docs"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/calendar.svg"
              alt="Calendar"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/zoom.svg"
              alt="Zoom"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/salesforce.svg"
              alt="Salesforce"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/intercom.png"
              alt="Salesforce"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/hubspot.png"
              alt="Salesforce"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/mailchimp.png"
              alt="Salesforce"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/servicenow.png"
              alt="Salesforce"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/marketo.png"
              alt="Salesforce"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/zendesk.png"
              alt="Salesforce"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/teams.png"
              alt="Teams"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/word.png"
              alt="Word"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/excel.png"
              alt="Excel"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/powerpoint.png"
              alt="PowerPoint"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/outlook.png"
              alt="Outlook"
              width={80}
              height={80}
              className="sm:width-100 sm:height-100"
              unoptimized
            />
          </li>
          <li className="flex justify-center">
            <Image
              src="/onenote.png"
              alt="OneNote"
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

