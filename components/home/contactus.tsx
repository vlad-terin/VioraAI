import styles from './buttonEffect.module.css'; // Import the button effect styles as a CSS module and assign it to 'styles'
import React, { FormEvent } from 'react';
import Balancer from "react-wrap-balancer";
import axios from 'axios';

const ContactUs: React.FC = () => {
  // ...

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Get form data
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string; // Type assertion
      const email = formData.get('email') as string; // Type assertion
      const message = formData.get('message') as string; // Type assertion

      // Send POST request to server-side route
      const response = await axios.post('/api/contact', { name, email, message });

      // Handle response (e.g., show success message, clear form)
      console.log(response.data);
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };

  return (
    <section
      className={`bg-gradient-to-br from-indigo-50 via-white to-cyan-100 relative col-span-1 overflow-hidden flowingGradient rounded-xl border border-gray-200 bg-white shadow-md py-6 px-8 md:px-16 lg:px-32`}
    >
      <div className="container mx-auto px-4 max-w-5xl"> {/* Set maximum width on desktop */}
        <div className="text-center">
          <h2 className="py-6 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]">
            <span className="text-amber-400 font-bold bg-gray-200 px-1 py-0.5 rounded">Invest</span> in the Future of AI
          </h2>
          <Balancer>
            We invite you to <span className="text-amber-400 font-bold bg-gray-200 px-1 py-0.5 rounded">invest</span> in our mission, <span className="text-cyan-400 font-bold bg-gray-200 px-1 py-0.5 rounded">fuel our growth</span>, and unlock <span className="text-orange-500 font-bold bg-gray-200 px-1 py-0.5 rounded">limitless opportunities</span>—join us in leading the <span className="font-bold text-emerald-500">AI revolution</span> and shaping the future of technology today. To see the full demo of our innovative AI solution, <span className="text-amber-400 font-bold bg-gray-200 px-1 py-0.5 rounded">get in touch</span> with us and experience the power of Viora AI firsthand.
          </Balancer>
        </div>
        <div className="flex justify-center">
          {/* Corrected "onSubmit" attribute value */}
          <form className="w-full lg:w-3/4" onSubmit={handleSubmit}> {/* Set width on desktop */}
            <div className="mb-4 pt-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full items-center space-x-2 rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full items-center space-x-2 rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full items-center space-x-2 rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
                placeholder="Share your interest or inquiries about investing in Viora AI"
                rows={4}
              ></textarea>
            </div>
            <div className="flex justify-center py-6">
              <button
                type="submit"
                className={`${styles['glow-on-hover']} flex items-center justify-center w-full md:w-auto px-4 py-3 md:px-6 md:py-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline`}
              >
                Join the Revolution
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
