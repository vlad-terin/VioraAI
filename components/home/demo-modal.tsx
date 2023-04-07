import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const categoryData = {
  eCommerce: {
    text: "Call eCommerce Sales Agent",
    description:
      "Boost your eCommerce sales with Viora AI-powered Virtual SDR...",
    phoneNumber: "tel:855-223-4791", // Phone number for eCommerce
  },
  Banking: {
    text: "Call Banking Sales Agent",
    description:
      "Enhance your banking services with Viora AI-powered Virtual SDR...",
    phoneNumber: "tel:855-247-2892", // Phone number for Banking
  },
  Insurance: {
    text: "Call Insurance Sales Agent",
    description:
      "Streamline your insurance services with Viora AI-powered Virtual SDR—automating policy inquiries, claims management, and more.",
    phoneNumber: "tel:585-539-8496", // Phone number for Insurance
  },
  Telecom: {
    text: "Call Telecom Sales Agent",
    description:
      "Enhance your telecom customer experience with Viora AI-powered Virtual SDR—providing support, managing subscriptions, and handling network issues.",
    phoneNumber: "tel:252-591-5672", // Phone number for Telecom
  },
  Healthcare: {
    text: "Call Healthcare Sales Agent",
    description:
      "Improve patient care with Viora AI-powered Virtual SDR—facilitating appointment scheduling, medication reminders, and healthcare inquiries.",
    phoneNumber: "tel:585-496-2881", // Phone number for Healthcare
  },
  Therapy: {
    text: "Call Therapy AI",
    description:
      "Empower your therapy practice with Viora's AI-powered Virtual SDR. Our innovative AI agent streamlines patient engagement by seamlessly scheduling therapy appointments.",
    phoneNumber: "tel:585-539-8503", // Phone number for Healthcare
  },
};

export type CategoryType = keyof typeof categoryData;

const DemoModal = ({
  category,
  showDemoModal,
  setShowDemoModal,
}: {
  category: CategoryType;
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const phoneNumber = categoryData[category].phoneNumber;


  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full h-[50vh] overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center space-y-4 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold text-center py-6">
            <a href={phoneNumber}>{categoryData[category].text}</a>
          </h3>
          <a href={phoneNumber} className="animate-clickable py-6">
            <Image
              src="/phone.png"
              alt="Viora call Logo"
              className="h-20 w-20 rounded-full"
              width={40}
              height={40}
            />
          </a>
          <p className="text-lg text-gray-500 text-center py-6">
            {categoryData[category].description}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal(category: CategoryType) {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        category={category} // Pass 'category' as a prop to DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [category, showDemoModal, setShowDemoModal]); // Include 'category' in the dependencies list

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
