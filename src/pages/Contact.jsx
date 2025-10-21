import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Title from "../components/Title";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    // If all fields are filled
    toast.success("Message sent successfully!");

    // Optionally, reset the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="border-t pt-16 px-4 sm:px-10 min-h-[80vh]">
      <Toaster /> {/* Required for react-hot-toast */}
      <div className="text-2xl mb-6">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="flex flex-col gap-6 max-w-xl">
        <p className="text-gray-700">
          We'd love to hear from you! Fill out the form below or reach us
          directly through the provided contact details.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-3 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-all w-fit"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            <strong>Email:</strong> support@yourstore.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p>
            <strong>Address:</strong> 123 Street Name, City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
