"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    college: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");

      const text = encodeURIComponent(`
Hello Shrutika,

Name:
${formData.firstName} ${formData.lastName}

Email:
${formData.email}

Company:
${formData.company}

Role:
${formData.role}

College:
${formData.college}

Message:
${formData.message}
      `);

      window.open(
        `https://wa.me/916379901931?text=${text}`,
        "_blank"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        college: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      sm:px-6
      lg:px-10
      overflow-hidden
    "
    >
      {/* Glow */}
      <div
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-[300px]
        h-[300px]
        sm:w-[700px]
        sm:h-[700px]
        bg-red-600/20
        blur-[120px]
        sm:blur-[180px]
      "
      />

      {/* Ghost Text */}
      <h1
        className="
        absolute
        text-[22vw]
        md:text-[18vw]
        font-black
        text-white/[0.03]
        pointer-events-none
        select-none
      "
      >
        CONTACT
      </h1>

      <div
        className="
        relative
        z-10
        max-w-7xl
        w-full
        grid
        lg:grid-cols-2
        gap-12
        lg:gap-20
        items-center
      "
      >
        {/* LEFT SIDE */}
        <div>
          <p className="text-red-500 font-medium mb-4 tracking-widest">
            GET IN TOUCH
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
          "
          >
            Let's Build
            <br />
            Something Great
          </h2>

          <p className="mt-6 text-white/70 max-w-lg leading-relaxed">
            Looking for an AI/ML intern, project collaborator,
            or someone passionate about building intelligent
            systems? I'd love to hear from you.
          </p>

          <div className="mt-10 space-y-5 text-base sm:text-lg">
            <a
              href="mailto:kit28.24bcs160@gmail.com"
              className="
              block
              hover:text-red-400
              transition
            "
            >
              📧 kit28.24bcs160@gmail.com
            </a>

            <a
              href="https://wa.me/916379901931"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              hover:text-red-400
              transition
            "
            >
              📱 +91 63799 01931
            </a>

            <a
              href="https://www.linkedin.com/in/shrutika-sri-s-030a61327/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              hover:text-red-400
              transition
            "
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/Shrutikasri04"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              hover:text-red-400
              transition
            "
            >
              💻 GitHub
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          onSubmit={handleSubmit}
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-[32px]
          p-6
          sm:p-8
          lg:p-10
          space-y-4
          shadow-2xl
        "
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
            />

            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />

            <input
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              className="input"
            />

            <input
              name="college"
              placeholder="College"
              value={formData.college}
              onChange={handleChange}
              className="input"
            />
          </div>

          <textarea
            rows={6}
            name="message"
            placeholder="Tell me about your opportunity..."
            value={formData.message}
            onChange={handleChange}
            className="
            input
            resize-none
            min-h-[160px]
          "
          />

          <button
            type="submit"
            className="
            w-full
            bg-red-600
            py-4
            rounded-full
            font-semibold
            hover:bg-red-500
            hover:scale-[1.02]
            transition
          "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}