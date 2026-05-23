import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import destinationsData from "../data/destinationsData.json";

const Destinations = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");

  const { destinations } = destinationsData;

  const filtered = destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterRegion === "All" || dest.region === filterRegion)
  );

  const regions = ["All", "North", "South", "East", "West"];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-950 via-black to-gray-900 py-24 overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg mb-6">
            <span className="text-orange-400 font-semibold tracking-widest uppercase text-sm">
              Explore The World
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Explore All <br />
            World Destinations
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-9">
            Discover luxury travel experiences, adventure destinations,
            and unforgettable journeys across the world.
          </p>

        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">

        {/* Search + Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center justify-between">

          {/* Search Box */}
          <div className="relative w-full lg:w-[450px] group">

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative">

              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-400 text-lg">
                <i className="fas fa-search"></i>
              </span>

              <input
                type="text"
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 backdrop-blur-xl text-white placeholder-gray-500 pl-14 pr-5 py-4 rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
              />

            </div>

          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap gap-3 justify-center">

            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setFilterRegion(region)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-500 border backdrop-blur-xl ${
                  filterRegion === region
                    ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 text-black border-orange-400 shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-orange-400/30 hover:text-orange-400 hover:-translate-y-1"
                }`}
              >
                {region}
              </button>
            ))}

          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filtered.map((dest) => (

            <div
              key={dest.id}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:-translate-y-4 hover:border-orange-400/30 transition-all duration-700 shadow-2xl"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-300/0 group-hover:from-orange-500/10 group-hover:to-yellow-300/10 transition-all duration-700"></div>

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Region */}
                <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full text-sm text-orange-400 font-semibold">
                  {dest.region} World
                </div>

              </div>

              {/* Content */}
              <div className="relative p-6">

                {/* Top Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">

                  <div className="flex items-center gap-2">
                    <i className="fas fa-location-dot text-orange-400"></i>
                    <span>{dest.region} World</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <i className="fas fa-calendar-days text-orange-400"></i>
                    <span>{dest.duration}</span>
                  </div>

                </div>

                {/* Name */}
                <h3 className="text-3xl font-extrabold mb-4 group-hover:text-orange-400 transition duration-500">
                  {dest.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8 text-sm mb-6">
                  {dest.description.substring(0, 100)}...
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">

                  {/* Price */}
                  <div>

                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      Starting From
                    </span>

                    <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                      ₹{dest.price.toLocaleString()}

                      <span className="text-sm text-gray-500 ml-1">
                        /person
                      </span>
                    </div>

                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      navigate(`/destination/${dest.id}`)
                    }
                    className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:scale-105 transition-all duration-500 text-black font-bold py-3 px-5 rounded-2xl shadow-lg hover:shadow-orange-500/40"
                  >

                    <span className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-all duration-500"></span>

                    <span className="relative z-10">
                      View Details
                    </span>

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Empty State */}
        {filtered.length === 0 && (

          <div className="text-center py-24">

            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-500/10 border border-orange-400/20 mb-6">
              <i className="fas fa-search text-4xl text-orange-400"></i>
            </div>

            <h2 className="text-4xl font-bold mb-4">
              No Destinations Found
            </h2>

            <p className="text-gray-400 text-lg">
              Try searching with another destination or region.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default Destinations;