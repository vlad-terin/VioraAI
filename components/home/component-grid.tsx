import React, { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
// import Popover from "@/components/shared/popover";
// import Tooltip from "@/components/shared/tooltip";
// import { ChevronDown } from "lucide-react";
import Image from "next/image"; // Import Image component
import { CategoryType } from "@/components/home/demo-modal"; // Import the CategoryType from the demo-modal module

type CategoryButtonProps = {
  category: CategoryType;
  iconPath: string;
};



function CategoryButton({ category, iconPath }: CategoryButtonProps) {
  const { DemoModal, setShowDemoModal } = useDemoModal(category);
  return (
    <React.Fragment>
      <DemoModal />
      <button
        onClick={() => setShowDemoModal(true)}
        className="flex w-30 items-center justify-center space-x-2 rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
      >
        <Image src={iconPath} alt={category} width={20} height={20} />
        <p className="text-gray-600">{category}</p>
      </button>
    </React.Fragment>
  );
}


export default function ComponentGrid() {
  const categories: CategoryType[] = ["eCommerce", "Banking", "Insurance", "Telecom", "Healthcare"];
  const categoriesWithIcons: Record<CategoryType, string> = {
    eCommerce: "/icons/cart.png",
    Banking: "/icons/bank.png",
    Insurance: "/icons/people.png",
    Telecom: "/icons/wifi.png",
    Healthcare: "/icons/heart.png",
    Therapy: "/icons/therapy.png",
  };
  // const { DemoModal, setShowDemoModal } = useDemoModal();
  // const [openPopover, setOpenPopover] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {Object.entries(categoriesWithIcons).map(([category, iconPath]) => (
        <CategoryButton key={category} category={category as CategoryType} iconPath={iconPath} />
      ))}
    </div>
  );
}
//   return (
//     <div className="grid grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1">
//       {Object.entries(categoriesWithIcons).map(([category, iconPath]) => {
//         const { DemoModal, setShowDemoModal } = useDemoModal(category as CategoryType);
//         return (
//           <React.Fragment key={category}>
//             <DemoModal />
//             <button
//               onClick={() => setShowDemoModal(true)}
//               className="flex w-40 items-center justify-center space-x-2 rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
//             >
//               <Image src={iconPath} alt={category} width={20} height={20} />
//               <p className="text-gray-600">{category}</p>
//             </button>
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// }
