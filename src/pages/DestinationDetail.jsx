import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import destinationsData from '../data/destinationsData.json';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destinations } = destinationsData;

  const destination = destinations.find(
    (d) => d.id === parseInt(id)
  );

  if (!destination) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">

          <h2 className="text-4xl font-extrabold text-white mb-6">
            Destination not found
          </h2>

          <button
            onClick={() => navigate('/destinations')}
            className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:scale-105 transition-all duration-500 text-black font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-orange-500/40"
          >
            Go Back
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-10">

        {/* Back Button */}
        <button
          onClick={() => navigate('/destinations')}
          className="group mb-8 inline-flex items-center gap-3 text-orange-400 font-semibold hover:text-yellow-300 transition-all duration-300"
        >

          <span className="group-hover:-translate-x-2 transition-transform duration-300">
            ←
          </span>

          Back to Destinations

        </button>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-2">

            {/* Image */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-yellow-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>

              <img
                src={destination.image}
                alt={destination.name}
                className="relative w-full h-[500px] object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Floating Info */}
              <div className="absolute bottom-8 left-8">

                <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  {destination.name}
                </h1>

                <div className="flex flex-wrap items-center gap-5">

                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <span>{destination.rating}</span>
                  </div>

                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10">
                    <i className="fas fa-location-dot text-orange-400"></i>
                    <span>{destination.region} India</span>
                  </div>

                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10">
                    <i className="fa-solid fa-calendar-days text-orange-400"></i>
                    <span>Best: {destination.bestTime}</span>
                  </div>

                </div>

              </div>

            </div>

            {/* Description Card */}
            <div className="mt-8 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 mb-6">
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  About Destination
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-9">
                {destination.description}
              </p>

              {/* Highlights */}
              <h3 className="text-3xl font-bold mt-12 mb-8">
                Destination Highlights
              </h3>

              <ul className="grid sm:grid-cols-2 gap-5">

                {destination.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="group flex items-center gap-4 bg-black/30 border border-white/10 rounded-2xl p-5 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-500"
                  >

                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center group-hover:rotate-12 transition duration-500">
                      <i className="fa-solid fa-check text-orange-400"></i>
                    </div>

                    <span className="text-gray-300 font-medium">
                      {h}
                    </span>

                  </li>
                ))}

              </ul>

            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">

            <div className="sticky top-28">

              {/* Booking Card */}
              <div className="relative">

                {/* Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 rounded-3xl blur-xl opacity-30"></div>

                <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8">

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-white/10">

                    <div className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                      ₹{destination.price.toLocaleString()}
                    </div>

                    <p className="text-gray-400 mt-2">
                      Package starting price / person
                    </p>

                  </div>

                  {/* Info */}
                  <div className="space-y-5 mb-8">

                    <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-2xl px-5 py-4">
                      <span className="text-gray-400">
                        Duration
                      </span>

                      <span className="font-semibold text-white">
                        {destination.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-2xl px-5 py-4">
                      <span className="text-gray-400">
                        Best Time
                      </span>

                      <span className="font-semibold text-white">
                        {destination.bestTime}
                      </span>
                    </div>

                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      navigate(`/package/${destination.packageId}`)
                    }
                    className="relative overflow-hidden w-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:scale-[1.03] transition-all duration-500 text-black font-bold py-4 rounded-2xl shadow-lg hover:shadow-orange-500/40"
                  >

                    <span className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-all duration-500"></span>

                    <span className="relative z-10">
                      Book Now
                    </span>

                  </button>

                  {/* Contact */}
                  <div className="mt-8 pt-6 border-t border-white/10 space-y-4 text-sm">

                    <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition duration-300">

                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                        <i className="fas fa-phone text-orange-400"></i>
                      </div>

                      <span>
                        +91 8984678191
                      </span>

                    </div>

                    <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition duration-300">

                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                        <i className="fas fa-envelope text-orange-400"></i>
                      </div>

                      <span>
                        amitchiku2006@gmail.com
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DestinationDetail;