import styles from './buttonEffect.module.css'; // Import the button effect styles as a CSS module and assign it to 'styles'
import React from "react";
import { useDemoModalVirtual } from "@/components/home/demo-modal-virtual";
import Image from "next/image"; // Import Image component
import PropTypes from "prop-types"; // Import PropTypes

export function TryNowButton({ category, iconPath, buttonText }) {
  const { DemoModal, setShowDemoModal } = useDemoModalVirtual(category);
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

// Define prop types using PropTypes
TryNowButton.propTypes = {
  category: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

