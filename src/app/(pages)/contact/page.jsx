"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const text = "Say Hello";
  
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setIsLoading(true);

    const formElement = e.target;
    const email = formElement.user_email.value;
    const message = formElement.user_message.value;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) throw new Error('Failed to send email');
      
      setSuccess(true);
      formElement.reset();
    } catch (err) {
      setError(true);
      console.error('Error sending email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="max-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 lg:py-0">
        {/* TEXT CONTAINER */}
        <div className="lg:w-1/2 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 lg:mb-0">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <form
            onSubmit={sendEmail}
            className="w-full bg-red-50 rounded-xl text-base sm:text-lg md:text-xl flex flex-col gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16"
          >
            <span>Dear BolajiX Dev,</span>
            <textarea
              rows={4}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none w-full text-sm sm:text-base md:text-lg"
              name="user_message"
              required
            />
            <span>My mail address is:</span>
            <input
              name="user_email"
              type="email"
              className="bg-transparent border-b-2 border-b-black outline-none w-full text-sm sm:text-base md:text-lg"
              required
            />
            <span>Regards</span>
            <button 
              className="bg-purple-200 rounded font-semibold text-gray-600 p-3 sm:p-4 disabled:opacity-50 w-full text-sm sm:text-base md:text-lg hover:bg-purple-300 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
            {success && (
              <span className="text-green-600 font-semibold text-center text-sm sm:text-base md:text-lg">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold text-center text-sm sm:text-base md:text-lg">
                Something went wrong!
              </span>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;