import Image from 'next/image';

export default function Integrations() {
  return (
    <div className="py-6 text-center">
      <div className="py-6 text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
        <span className="text-amber-400 font-bold bg-gray-200 px-1 py-0.5 rounded">Integrations</span>
      </div>
      <div className={`bg-gradient-to-br from-indigo-50 via-white to-cyan-100 relative col-span-1  overflow-hidden flowingGradient rounded-xl border border-gray-200 bg-white shadow-md py-6 px-4`}>
        <ul className="py-6 grid grid-cols-3 gap-14 md:grid-cols-3 lg:grid-cols-6">

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

