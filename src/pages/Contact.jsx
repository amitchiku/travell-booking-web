import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name required";

    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "10-digit number";

    if (!formData.message.trim())
      newErrors.message = "Message required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      try {
        await addDoc(collection(db, "enquiries"), {
          ...formData,
          createdAt: new Date().toISOString(),
        });

        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 5000);

      } catch (error) {
        alert("Failed to send message");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-950 via-black to-gray-900 py-24 overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg mb-6">
            <span className="text-orange-400 font-semibold tracking-widest uppercase text-sm">
              Contact Us
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-9">
            We'd love to help you plan your unforgettable Indian journey
            with luxury, comfort, and adventure.
          </p>

        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 mb-6">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Contact Information
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
              Let’s Start Your
              <br />
              Journey Together
            </h2>

            <div className="space-y-6">

              <div className="group flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center text-2xl group-hover:rotate-12 transition duration-500">
                  <i className="fas fa-envelope text-orange-400"></i>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Address</p>
                  <p className="text-lg font-semibold">
                    amitchiku2006@gmail.com
                  </p>
                </div>

              </div>

              <div className="group flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center text-2xl group-hover:rotate-12 transition duration-500">
                  <i className="fas fa-phone text-orange-400"></i>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                  <p className="text-lg font-semibold">
                    +91 8984678191
                  </p>
                </div>

              </div>

              <div className="group flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-500 backdrop-blur-xl">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center text-2xl group-hover:rotate-12 transition duration-500">
                  <i className="fas fa-location-dot text-orange-400"></i>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Office Location</p>
                  <p className="text-lg font-semibold">
                    Connaught Place, Bhubaneswar
                  </p>
                </div>

              </div>

            </div>

            {/* Office Hours */}
            <div className="mt-10 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 border border-orange-400/20 rounded-3xl p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Office Hours
              </h3>

              <div className="space-y-3 text-gray-300">

                <p className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">10AM - 7PM</span>
                </p>

                <p className="flex items-center justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10AM - 2PM</span>
                </p>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 rounded-3xl blur-xl opacity-30"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8">

              {submitted && (
                <div className="bg-green-500/10 border border-green-400/20 text-green-400 p-4 rounded-2xl mb-6 text-center font-semibold">
                  Thank you! We'll contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full bg-black/30 border border-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none rounded-2xl px-5 py-4 text-white placeholder-gray-500 transition-all duration-300"
                  />

                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-black/30 border border-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none rounded-2xl px-5 py-4 text-white placeholder-gray-500 transition-all duration-300"
                  />

                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full bg-black/30 border border-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none rounded-2xl px-5 py-4 text-white placeholder-gray-500 transition-all duration-300"
                  />

                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value,
                      })
                    }
                    className="w-full bg-black/30 border border-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none rounded-2xl px-5 py-4 text-white placeholder-gray-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write Your Message..."
                    rows="5"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-black/30 border border-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none rounded-2xl px-5 py-4 text-white placeholder-gray-500 transition-all duration-300 resize-none"
                  ></textarea>

                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="relative overflow-hidden w-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:scale-[1.02] transition-all duration-500 text-black font-bold py-4 rounded-2xl shadow-lg hover:shadow-orange-500/40"
                >

                  <span className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-all duration-500"></span>

                  <span className="relative z-10">
                    Send Message
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;