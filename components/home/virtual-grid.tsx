import React, { useState } from "react";
import { useDemoModalVirtual } from "@/components/home/demo-modal-virtual";
// import Popover from "@/components/shared/popover";
// import Tooltip from "@/components/shared/tooltip";
// import { ChevronDown } from "lucide-react";
import Image from "next/image"; // Import Image component
import { CategoryTypeVirtual } from "@/components/home/demo-modal-virtual"; // Import the CategoryType from the demo-modal module

type CategoryButtonProps = {
  category: CategoryTypeVirtual;
  iconPath: string;
};





function CategoryButton({ category, iconPath }: CategoryButtonProps) {
  const { DemoModal, setShowDemoModal } = useDemoModalVirtual(category);
  return (
    <React.Fragment>
      <DemoModal />
      <button
        onClick={() => setShowDemoModal(true)}
        className="flex flex-col items-center justify-center space-y-1 rounded-md border border-gray-300 p-3 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 w-full h-full text-center" // Keep the button styles the same
      >
        <Image src={iconPath} alt={category} width={20} height={20} />
        <p className="text-gray-600 text-xs md:text-sm">{category}</p> {/* Adjust font size for mobile and large screens */}
      </button>
    </React.Fragment>
  );
}

export default function VirtualGrid() {
  const categories: CategoryTypeVirtual[] = ["Employee", "Financial Advisor", "Sales", "HR", "Legal", "Project Management"];
  const categoriesWithIcons: Record<CategoryTypeVirtual, string> = {
    Employee: "/icons/cart.png",
    "Financial Advisor": "/icons/cart.png",
    Sales: "/icons/bank.png",
    HR: "/icons/people.png",
    Legal: "/icons/wifi.png",
    "Project Management": "/icons/wifi.png",
  };

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:auto-rows-[6rem]"> {/* Use 3 columns on mobile and 6 columns on large screens */}
      {Object.entries(categoriesWithIcons).map(([category, iconPath]) => (
        <CategoryButton key={category} category={category as CategoryTypeVirtual} iconPath={iconPath} />
      ))}
    </div>
  );
}

