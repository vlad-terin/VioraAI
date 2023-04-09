import React from 'react';
import Layout from "@/components/layout";
import ContactUs from "@/components/home/contactus";


const AccessibilityPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Accessibility Statement</h1>
        <p className="mb-4">At Viora AI, we are committed to ensuring that our platform is accessible to all users, including those with disabilities. Our goal is to provide an inclusive and user-friendly experience for everyone, regardless of ability or technology.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Our Commitment to Accessibility</h2>
        <p className="mb-4">We believe that everyone should have equal access to information and services. To achieve this, we strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1, which provide standards for making web content more accessible to individuals with disabilities. These guidelines address a range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Accessibility Features</h2>
        <p className="mb-4">We have implemented a variety of features on our platform to enhance accessibility, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Alternative text for images and other non-text content</li>
          <li>Keyboard navigation for users who are unable to use a mouse</li>
          <li>Text scaling and adjustable font sizes for users with visual impairments</li>
          <li>High contrast mode for users with visual sensitivities</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">Feedback and Contact Information</h2>
        <p className="mb-4">We are continually working to improve the accessibility of our platform, and we value feedback from our users. If you encounter any accessibility barriers while using our platform or if you have suggestions for how we can improve accessibility, please contact us using the contact information provided on our platform.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Ongoing Efforts</h2>
        <p className="mb-4">We recognize that accessibility is an ongoing effort, and we are committed to continually updating and improving our platform to meet the needs of all users. As part of this commitment, we regularly review our platform for accessibility issues and work to address any challenges that arise.</p>
      </div>
    </Layout>
  );
};


export default AccessibilityPage;

