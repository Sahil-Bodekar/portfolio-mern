import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0b1220]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-[#1e293b] border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-[#1e293b] border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 bg-[#1e293b] border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
