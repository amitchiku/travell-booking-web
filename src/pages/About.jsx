import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-950 via-black to-gray-900 py-28 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg mb-6">
            <span className="text-orange-400 font-semibold tracking-widest uppercase text-sm">
              Welcome To
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
            About amitchiku <br />
            travel agency
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-9">
            Discovering the soul of India through unforgettable luxury,
            adventure, culture, and authentic travel experiences since 2006.
          </p>

        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* Text Section */}
          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 mb-6">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Our Story
            </h2>

            <p className="text-gray-400 text-lg leading-9 mb-6">
              Born from a passion for India's incredible diversity,
              amitchiku travel agency began with a simple mission:
              to make authentic Indian travel experiences accessible,
              luxurious, and unforgettable for everyone.
            </p>

            <p className="text-gray-400 text-lg leading-9 mb-8">
              Today, we’ve proudly helped over 50,000 travelers
              explore the beauty, culture, adventure, and spirituality
              of India with complete comfort and authenticity.
            </p>

            {/* Decorative Button */}
            <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:scale-105 transition-all duration-500 text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-orange-500/40">
              Explore More
            </button>

          </div>

          {/* Image Section */}
          <div className="relative group">

            {/* Glow Border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-700"></div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop"
                alt="Team"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            </div>

          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {[
            {
              icon: "fa-solid fa-users",
              value: "50K+",
              label: "Happy Travelers",
            },
            {
              icon: "fa-solid fa-trophy",
              value: "25+",
              label: "Awards Won",
            },
            {
              icon: "fa-solid fa-clock",
              value: "10+",
              label: "Years Experience",
            },
            {
              icon: "fa-solid fa-heart",
              value: "100+",
              label: "Destinations",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center hover:-translate-y-4 hover:border-orange-400/30 transition-all duration-500 shadow-xl overflow-hidden"
            >

              {/* Background Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-400/0 group-hover:from-orange-500/10 group-hover:to-yellow-400/10 transition-all duration-500"></div>

              <div className="relative">

                <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center text-4xl mb-6 group-hover:rotate-12 transition-all duration-500">

                  <i className={`${stat.icon} text-orange-400`}></i>

                </div>

                <div className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>

                <div className="text-gray-400 text-lg tracking-wide">
                  {stat.label}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default About;