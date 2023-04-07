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
  Employee: {
    text: "Call Virtual AI Employee",
    description:
      "In this call Vioa AI will be assigned to help you, as her manager, with any administrative tasks you will ask.",
    phoneNumber: "tel:507-629-0695",
    icon: "/icons/cart.png"
  },
  "Finance": {
    text: "Call AI Financial Advisor",
    description:
      "In this call Viora AI is assigned to advice the client about building a retirement portfolio.",
    phoneNumber: "tel:507-565-6052",
    icon: "/icons/cart.png"
  },
  Sales: {
    text: "Call AI Sales Agent",
    description:
      "In this call Viora AI is speaking with a person who has expressed interest in purchasing an electric vehicle",
    phoneNumber: "tel:507-604-5814",
    icon: "/icons/bank.png"
  },
  Legal: {
    text: "Call AI Legal Advisor",
    description:
      "In this call Viora AI will be reviewing a contract between the firm's client, a software company, and a vendor to ensure compliance with relevant laws and regulations.",
    phoneNumber: "tel:507-629-0648",
    icon: "/icons/wifi.png"
  },
  HR: {
    text: "Call AI HR Assistant",
    description:
      "In this call Viora AI will be addressing an employee concern regarding the company's health benefits and providing assistance with the open enrollment process.",
    phoneNumber: "tel:507-678-3826",
    icon: "/icons/people.png"
  },
  "Management": {
    text: "Call AI Project Manager",
    description:
      "In this call Viora AI will be overseeing the progress of a commercial building project and providing updates to the project stakeholders.",
    phoneNumber: "tel:507-678-3830",
    icon: "/icons/wifi.png"
  },
};

export type CategoryTypeVirtual = keyof typeof categoryData;

const DemoModal = ({
  category,
  showDemoModal,
  setShowDemoModal,
}: {
  category: CategoryTypeVirtual;
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

export function useDemoModalVirtual(category: CategoryTypeVirtual) {
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

