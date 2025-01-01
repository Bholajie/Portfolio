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

    console.log(email,message, "asdasd")

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
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
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
        <form
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear BolajiX Dev,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            required
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            required
          />
          <span>Regards</span>
          <button 
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;