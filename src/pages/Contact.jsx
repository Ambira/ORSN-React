import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const response = await fetch("https://orsn.org.np/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ " + data.error);
      }
    } catch (error) {
      setStatus("❌ Server error. Please try again later.");
    }
  };

  return (
    // Inline style sets default color to black if something is overriding Tailwind
    <section className="py-16 content" style={{ color: "#000" }}>
      <div className="container mx-auto">

        {/* Heading (green) */}
        <h1 className="text-4xl font-bold mb-8 text-center pt-4 text-green-600" style={{ color: "#008236" }}>
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-black">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg"
                placeholder="Enter your name"
                required
                style={{ color: "#000" }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-black">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg"
                placeholder="Enter your email"
                required
                style={{ color: "#000" }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-black">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg"
                placeholder="Enter your message"
                rows="5"
                required
                style={{ color: "#000" }}
              />
            </div>

            <button type="submit" className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg">
              Send Message
            </button>

            {status && <p className="mt-4 text-green-600">{status}</p>}
          </form>

          {/* Contact Information */}
          <div className="space-y-4 md:pl-12 pt-6">
            <h3 className="text-l font-semibold" style={{ color: "#000" }}>Address</h3>
            <p style={{ color: "#000" }}>Maharajgunj, Kathmandu</p>

            <h3 className="text-l font-semibold" style={{ color: "#000" }}>Phone</h3>
            <p style={{ color: "#000" }}>
              (+977) 9841284716 <br />
              (+977) 9855030302
            </p>

            <h3 className="text-l font-semibold" style={{ color: "#000" }}>Email</h3>
            <p>
              <a href="mailto:orsn.nepal@gmail.com" style={{ color: "#000" }} className="hover:text-green-500">
                orsn.nepal@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
