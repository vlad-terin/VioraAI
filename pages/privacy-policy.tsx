import React from 'react';
import Layout from "@/components/layout";
import ContactUs from "@/components/home/contactus";


const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING VIORA AI. BY ACCESSING OR USING VIORA AI, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS DESCRIBED HEREIN AND ALL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THESE TERMS AND CONDITIONS, DO NOT USE VIORA AI.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Introduction</h2>
        <p className="mb-4">Welcome to Viora AI, an online platform that leverages artificial intelligence to deliver cutting-edge solutions. This privacy policy (the &quot;Privacy Policy&quot;) governs your access to and use of viora.ai, including any content, functionality, and services offered on or through viora.ai (the &quot;Services&quot;).</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Scope of the Services</h2>
        <p className="mb-4">Viora AI provides a range of AI-driven solutions, including predictive analytics, data analysis, and automation, to help organizations make informed and effective decisions. The Services are intended for use by businesses and professionals. By accessing or using the Services, you represent and warrant that you have the necessary knowledge and experience to use the Services.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Privacy Policy</h2>
        <p className="mb-4">Viora AI is an AI-driven technology company that provides solutions to organizations. It is important to us that our users understand how we collect, use, and share information about them when they use our platform and services. This Privacy Policy applies to all of the products, services, and websites offered by Viora AI, unless specified otherwise. By using our platform, you are accepting the practices described in this Privacy Policy. If you do not agree with our policies and practices, do not use our platform. We may change our Privacy Policy from time to time. We encourage you to review the Privacy Policy whenever you access our platform to stay informed about our information practices and the choices available to you.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">We collect information about you when you use our platform, register for an account, or interact with us in other ways. This may include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal information, such as your name, email address, and phone number</li>
          <li>Usage information, such as details of your interactions with our platform and services</li>
          <li>Information about your device, such as your IP address and browser type</li>
        </ul>
        <p className="mb-4">We may also collect information about you from third-party sources, such as social media platforms.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to provide, maintain, and improve our platform and services, as well as to communicate with you. This may include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Verifying your identity and account information</li>
          <li>Providing customer support and responding to your inquiries</li>
          <li>Sending you updates and newsletters</li>
          <li>Analyzing trends and usage patterns to improve our platform and services</li>
        </ul>
        <p className="mb-4">We may also use your information to detect and prevent fraud or other illegal activities, as well as to comply with legal requirements.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Sharing Your Information</h2>
        <p className="mb-4">We may share your information with third parties in certain circumstances, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>With service providers, such as hosting companies, who help us operate our platform and services</li>
          <li>With law enforcement or other government agencies, if required by law or to protect our rights</li>
          <li>With other companies in the event of a corporate transaction, such as a merger or acquisition</li>
        </ul>
        <p className="mb-4">We will not sell or rent your personal information to third parties for their marketing purposes.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Your Rights and Choices</h2>
        <p className="mb-4">We respect your privacy and give you control over your personal information. You may have the following rights with respect to your personal information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Access: You have the right to request access to your personal information that we hold. You may also request a copy of this information.</li>
          <li>Correction: You have the right to request that we correct any personal information that is inaccurate or incomplete.</li>
          <li>Deletion: You have the right to request that we delete your personal information in certain circumstances, such as when it is no longer needed for the purposes for which it was collected.</li>
          <li>Objection: You have the right to object to the processing of your personal information in certain circumstances, such as for direct marketing purposes.</li>
          <li>Restriction: You have the right to request that we restrict the processing of your personal information in certain circumstances, such as when you contest the accuracy of the information or the legality of the processing.</li>
          <li>Transfer: You have the right to request that we transfer your personal information to another party in certain circumstances.</li>
        </ul>
        <p className="mb-4">You may exercise these rights by contacting us using the contact information provided on our platform.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Cookies and Other Tracking Technologies</h2>
        <p className="mb-4">We use cookies and other tracking technologies to improve your experience on our platform and to monitor website traffic and usage patterns. A cookie is a small data file that is placed on your device when you visit a website. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our platform. We may also use other tracking technologies, such as web beacons and pixels, to collect information about your use of our platform and services.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Security</h2>
        <p className="mb-4">We take appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee the absolute security of your personal information.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Data Retention</h2>
        <p className="mb-4">We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about our Privacy Policy or the way we handle your personal information, please don&quot;t hesitate to contact us through the contact information provided on our platform.</p>
      </div>
      <ContactUs />
    </Layout>

  );
};

export default PrivacyPage;
