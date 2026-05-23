import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&h=600&fit=crop",
    title: "Incredible India",
    subtitle: "Discover the land of diversity",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&h=600&fit=crop",
    title: "Himalayan Adventures",
    subtitle: "Experience the majesty of mountains",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1564362494483-9d7d4437361b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    title: "Golden Beaches",
    subtitle: "Sun, sand, and memories",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Amazing experience! Kerala trip was magical.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },

  {
    id: 2,
    name: "Rajiv Mehta",
    location: "Delhi",
    text: "Golden Triangle tour was perfectly organized!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  {
    id: 3,
    name: "Anjali Nair",
    location: "Bangalore",
    text: "Goa beach vacation was exactly what we needed!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative h-[90vh] overflow-hidden">

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current
                ? "opacity-100"
                : "opacity-0"
            }`}
          >

            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 animate-[pulse_10s_linear_infinite]"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

            </div>

            {/* Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-4">

              <div className="max-w-5xl">

                <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
                  <span className="text-orange-400 font-semibold tracking-widest uppercase text-sm">
                    Luxury Travel Experience
                  </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                  {slide.title}
                </h1>

                <p className="text-xl md:text-3xl text-gray-300 mb-12 leading-10">
                  {slide.subtitle}
                </p>

                <button
                  onClick={() => navigate("/packages")}
                  className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:scale-105 transition-all duration-500 text-black font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-orange-500/40"
                >

                  <span className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-all duration-500"></span>

                  <span className="relative z-10">
                    Explore Now
                  </span>

                </button>

              </div>

            </div>

          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={() =>
            setCurrent(
              (prev) =>
                (prev - 1 + slides.length) %
                slides.length
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-orange-400/30 hover:bg-orange-500/20 transition-all duration-500 flex items-center justify-center text-xl"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setCurrent(
              (prev) => (prev + 1) % slides.length
            )
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-orange-400/30 hover:bg-orange-500/20 transition-all duration-500 flex items-center justify-center text-xl"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">

          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition-all duration-500 ${
                idx === current
                  ? "w-10 h-3 bg-gradient-to-r from-orange-400 to-yellow-300"
                  : "w-3 h-3 bg-white/40"
              }`}
            />
          ))}

        </div>

      </div>

      {/* FEATURES */}
      <section className="py-24 relative">

        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: "fa-solid fa-globe",
                title: "Pan India Coverage",
                desc: "100+ destinations",
              },

              {
                icon: "fa-solid fa-hotel",
                title: "Handpicked Stays",
                desc: "Premium hotels",
              },

              {
                icon: "fa-solid fa-shield-halved",
                title: "Safe Travels",
                desc: "24/7 support",
              },

              {
                icon: "fa-solid fa-thumbs-up",
                title: "Best Price",
                desc: "INR transparency",
              },
            ].map((feat, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 text-center hover:-translate-y-4 hover:border-orange-400/30 transition-all duration-700 shadow-2xl overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-300/0 group-hover:from-orange-500/10 group-hover:to-yellow-300/10 transition-all duration-700"></div>

                <div className="relative">

                  <div className="w-24 h-24 mx-auto rounded-3xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center text-5xl mb-8 group-hover:rotate-12 transition duration-500">

                    <i className={`${feat.icon} text-orange-400`}></i>

                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {feat.title}
                  </h3>

                  <p className="text-gray-400 text-lg">
                    {feat.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-orange-500/10 to-yellow-300/10 border-y border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,165,0,0.15),transparent_40%)]"></div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
            <span className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
              Adventure Awaits
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Ready for Your Next
            <br />
            World Adventure?
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-9">
            Get exclusive deals on international tour packages
            and unforgettable travel experiences.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:scale-105 transition-all duration-500 text-black font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-orange-500/40"
          >

            <span className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-all duration-500"></span>

            <span className="relative z-10">
              Enquire Now →
            </span>

          </button>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-950">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-6">
              <span className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
                Testimonials
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              What Our Travelers Say
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-9">
              Real experiences from happy travelers across
              the world.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {testimonials.map((t) => (
              <div
                key={t.id}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 hover:-translate-y-4 hover:border-orange-400/30 transition-all duration-700 shadow-2xl overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-300/0 group-hover:from-orange-500/10 group-hover:to-yellow-300/10 transition-all duration-700"></div>

                <div className="relative">

                  {/* User */}
                  <div className="flex items-center gap-5 mb-6">

                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-400"
                    />

                    <div>

                      <h3 className="text-xl font-bold">
                        {t.name}
                      </h3>

                      <p className="text-gray-400">
                        {t.location}
                      </p>

                    </div>

                  </div>

                  {/* Rating */}
                  <div className="text-yellow-400 text-2xl mb-6">
                    {"★".repeat(t.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 italic leading-8 text-lg">
                    "{t.text}"
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;