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
      "Virtual AI Employee streamlines administrative tasks, automates routine processes, and assists with data analysis to enhance productivity.",
    phoneNumber: "tel:507-629-0695",
    icon: "/icons/cart.png"
  },
  "Financial Advisor": {
    text: "Call AI Financial Advisor",
    description:
      "Virtual AI Financial Advisor provides personalized financial advice, analyzes investment opportunities, and assists with financial planning and goal-setting.",
    phoneNumber: "tel:507-565-6052",
    icon: "/icons/cart.png"
  },
  Sales: {
    text: "Call AI Sales Agent",
    description:
      "AI-powered Virtual Sales Agent automates lead generation, provides personalized product recommendations, and enhances customer engagement to boost sales.",
    phoneNumber: "tel:507-604-5814",
    icon: "/icons/bank.png"
  },
  Legal: {
    text: "Call AI Legal Advisor",
    description:
      "AI-powered Virtual Legal Advisor offers assistance with legal document review, contract analysis, and regulatory compliance, enabling efficient legal operations.",
    phoneNumber: "tel:507-629-0648",
    icon: "/icons/wifi.png"
  },
  HR: {
    text: "Call AI HR Assistant",
    description:
      "AI-powered Virtual HR Assistant facilitates talent acquisition, automates employee onboarding, and provides support for HR policies and queries.",
    phoneNumber: "tel:507-678-3826",
    icon: "/icons/people.png"
  },
  "Project Management": {
    text: "Call AI Project Manager",
    description:
      "AI-powered Virtual Project Manager assists with project planning, resource allocation, and progress tracking, ensuring timely project completion and stakeholder satisfaction.",
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
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href={phoneNumber}>
            <Image
              src="/call.png"
              alt="Viora call Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">
            <a href={phoneNumber}>{categoryData[category].text}</a>
          </h3>
          <p className="text-sm text-gray-500">
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

