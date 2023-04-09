import React from 'react';
import Layout from "@/components/layout";

const CookiePolicyPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>
        <p className="mb-4">PLEASE READ THIS COOKIE POLICY CAREFULLY BEFORE USING VIORA AI. BY ACCESSING OR USING VIORA AI, YOU AGREE TO THE USE OF COOKIES AND OTHER TRACKING TECHNOLOGIES AS DESCRIBED IN THIS COOKIE POLICY. IF YOU DO NOT AGREE TO THIS COOKIE POLICY, DO NOT USE VIORA AI.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">What are Cookies?</h2>
        <p className="mb-4">Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the owners of the website.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">How We Use Cookies</h2>
        <p className="mb-4">We use cookies and other tracking technologies to improve your experience on our platform, monitor website traffic and usage patterns, and for other purposes such as:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Remembering your preferences and settings</li>
          <li>Providing personalized content and experiences</li>
          <li>Understanding how users interact with our platform</li>
          <li>Improving the performance and security of our platform</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-2">Types of Cookies We Use</h2>
        <p className="mb-4">We use the following types of cookies:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Strictly Necessary Cookies:</strong> These are cookies that are required for the operation of our platform. They include, for example, cookies that enable you to log into secure areas of our platform.</li>
          <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our platform, for instance, which pages you visit most often. These cookies do not collect information that identifies you.</li>
          <li><strong>Functionality Cookies:</strong> These cookies allow our platform to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.</li>
          <li><strong>Targeting or Advertising Cookies:</strong> These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as to measure the effectiveness of advertising campaigns.</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-2">Managing Cookies</h2>
        <p className="mb-4">You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our platform. To learn more about cookies and how to manage them, visit <a href="https://www.allaboutcookiesorg/" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Other Tracking Technologies</h2>
        <p className="mb-4">In addition to cookies, we may also use other tracking technologies, such as web beacons and pixels, to collect information about your use of our platform and services. Web beacons and pixels are small graphic images that are embedded in web pages or emails and are used to track user behavior, deliver cookies, collect information, count visits, understand usage patterns, and measure the effectiveness of advertising campaigns.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Changes to Our Cookie Policy</h2>
        <p className="mb-4">We may update our Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and other tracking technologies.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about our Cookie Policy or the way we use cookies and other tracking technologies, please don&quot;t hesitate to contact us through the contact information provided on our platform.</p>
      </div>
    </Layout>
  );
};

export default CookiePolicyPage;

