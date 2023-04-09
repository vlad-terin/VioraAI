import styles from './buttonEffect.module.css'; // Import the button effect styles as a CSS module and assign it to 'styles'
import React from "react";
import { useDemoModalVirtual, CategoryTypeVirtual } from "@/components/home/demo-modal-virtual"; // Import the useDemoModalVirtual hook and CategoryType from the demo-modal module
import Image from "next/image"; // Import Image component

// Define TypeScript types for props
type TryNowButtonProps = {
  category: CategoryTypeVirtual; // Use the correct type for 'category'
  iconPath: string;
  buttonText: string;
};

// Use TypeScript types for props
export function TryNowButton({ category, iconPath, buttonText }: TryNowButtonProps) {
  const { DemoModal, setShowDemoModal } = useDemoModalVirtual(category); // Use the useDemoModalVirtual hook
  return (
    <React.Fragment>
      <DemoModal />
      <button
        onClick={() => setShowDemoModal(true)}
        className={`${styles['glow-on-hover']} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      >
        {buttonText}
        {/* Optionally, you can render the icon here */}
        {/* <Image src={iconPath} alt={category} width={20} height={20} /> */}
      </button>
    </React.Fragment>
  );
}
