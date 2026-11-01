"use client";

import React, { useState } from "react";
import {
  MapPin,
  Coins,
  Search,
  ChevronDown,
  Building2,
  Home,
  Building,
  Briefcase,
  Trees,
  ArrowRight,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";

interface PropertyTypeOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROPERTY_TYPES: PropertyTypeOption[] = [
  { id: "all", label: "All Properties", icon: Building2 },
  { id: "villa", label: "Villa", icon: Home },
  { id: "apartment", label: "Apartment", icon: Building },
  { id: "commercial", label: "Commercial", icon: Briefcase },
  { id: "land", label: "Land", icon: Trees },
];

const INTENT_TABS = ["Buy", "Rent", "Commercial"];

const LOCATIONS = [
  "All Locations",
  "Bole (Atlas, Medhanialem, Rwanda)",
  "Kazanchis & Kirkos",
  "Sarbet & Old Airport",
  "CMC & Ayat",
  "Megenagna & Summit",
  "Lebu & Jomo",
  "Piassa & Arat Kilo",
  "Gerji & Imperial",
];

const PRICE_RANGES = [
  "Any Price",
  "Under 5M ETB",
  "5M - 15M ETB",
  "15M - 30M ETB",
  "30M - 60M ETB",
  "60M+ ETB (Luxury)",
];

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [keywords, setKeywords] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const hasActiveFilters =
    propertyType !== "all" ||
    location !== "All Locations" ||
    priceRange !== "Any Price" ||
    keywords.trim().length > 0;

  const handleReset = () => {
    setPropertyType("all");
    setLocation("All Locations");
    setPriceRange("Any Price");
    setKeywords("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    const propertiesElement = document.getElementById("properties");
    if (propertiesElement) {
      propertiesElement.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsSearching(false);
    }, 1200);
  };

  return (
    <div className="relative z-20 w-full max-w-5xl mt-3 sm:mt-4">
      {/* Decorative Warm Ambient Glow behind card */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 rounded-[2rem] blur-xl opacity-75 pointer-events-none" />

      {/* Main Glassmorphic Card Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-white/70 shadow-2xl shadow-black/20 p-3 sm:p-4 md:p-5 transition-all">
        {/* Top Header: Intent Tabs + Reset Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-gray-100">
          {/* Buy / Rent / Commercial Tabs */}
          <div className="inline-flex p-0.5 sm:p-1 rounded-xl bg-gray-100/90 border border-gray-200/70 shadow-inner">
            {INTENT_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-orange-600 shadow-xs scale-[1.01]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Right Status Badge & Reset Action */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] sm:text-[11px] font-semibold text-emerald-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span>500+ Active Listings</span>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 hover:text-orange-600 transition-colors cursor-pointer py-0.5 px-2 rounded-md hover:bg-orange-50"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Property Type Filter Chips */}
        <div className="py-2 sm:py-2.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
            Property Type
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {PROPERTY_TYPES.map((type) => {
              const Icon = type.icon;
              const isSelected = propertyType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setPropertyType(type.id)}
                  className={`group inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm shadow-orange-500/25 scale-[1.01]"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200/70"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                      isSelected ? "text-white" : "text-orange-500"
                    }`}
                  />
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Form with 3 Columns & Search Button */}
        <form onSubmit={handleSearch} className="mt-1 space-y-2.5 sm:space-y-3">
          {/* Hidden inputs to preserve form submission semantics */}
          <input type="hidden" name="intent" value={activeTab} />
          <input type="hidden" name="property" value={propertyType} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
            {/* Field 1: Location */}
            <div className="relative group rounded-xl bg-gray-50/90 hover:bg-white border border-gray-200 hover:border-orange-300 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/10 focus-within:bg-white p-2 sm:p-2.5 px-3 transition-all shadow-xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-5 h-5 rounded-md bg-orange-100/80 flex items-center justify-center shrink-0">
                  <MapPin className="w-3 h-3 text-orange-600" />
                </div>
                <label
                  htmlFor="location"
                  className="text-[10px] font-bold text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Location
                </label>
              </div>

              <div className="relative">
                <select
                  id="location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-gray-900 font-bold text-xs sm:text-sm focus:outline-none appearance-none pr-6 cursor-pointer truncate"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc} className="text-gray-900 font-medium">
                      {loc}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 transition-colors" />
              </div>
            </div>

            {/* Field 2: Price Range */}
            <div className="relative group rounded-xl bg-gray-50/90 hover:bg-white border border-gray-200 hover:border-orange-300 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/10 focus-within:bg-white p-2 sm:p-2.5 px-3 transition-all shadow-xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-5 h-5 rounded-md bg-orange-100/80 flex items-center justify-center shrink-0">
                  <Coins className="w-3 h-3 text-orange-600" />
                </div>
                <label
                  htmlFor="price"
                  className="text-[10px] font-bold text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Price Range
                </label>
              </div>

              <div className="relative">
                <select
                  id="price"
                  name="price"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-transparent text-gray-900 font-bold text-xs sm:text-sm focus:outline-none appearance-none pr-6 cursor-pointer truncate"
                >
                  {PRICE_RANGES.map((price) => (
                    <option key={price} value={price} className="text-gray-900 font-medium">
                      {price}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 transition-colors" />
              </div>
            </div>

            {/* Field 3: Keywords */}
            <div className="relative group rounded-xl bg-gray-50/90 hover:bg-white border border-gray-200 hover:border-orange-300 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/10 focus-within:bg-white p-2 sm:p-2.5 px-3 transition-all shadow-xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-5 h-5 rounded-md bg-orange-100/80 flex items-center justify-center shrink-0">
                  <Search className="w-3 h-3 text-orange-600" />
                </div>
                <label
                  htmlFor="keywords"
                  className="text-[10px] font-bold text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Keywords
                </label>
              </div>

              <div className="relative flex items-center">
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g. Modern, Pool, Bole..."
                  className="w-full bg-transparent text-gray-900 font-bold text-xs sm:text-sm placeholder-gray-400 focus:outline-none pr-6 truncate"
                />
                {keywords.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setKeywords("")}
                    className="absolute right-0 text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-0.5">
            <button
              type="submit"
              disabled={isSearching}
              className="group relative w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-6 rounded-xl font-bold text-white text-sm sm:text-base bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.005] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-80"
            >
              {isSearching ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Filtering Addis Properties...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                  <span>Search Properties</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/80 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Micro-footer with Quick Tags / Highlights */}
        <div className="mt-2.5 pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
            <span className="font-medium text-[11px] text-gray-500">
              Popular searches:
            </span>
            <div className="flex flex-wrap gap-1">
              {["Bole Atlas Villa", "Kazanchis Penthouse", "CMC 3-Bed"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setKeywords(tag)}
                  className="px-1.5 py-0.5 rounded bg-gray-100 hover:bg-orange-50 hover:text-orange-600 transition-colors text-[10px] font-medium text-gray-600 cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <span className="text-[10px] text-gray-400 font-medium hidden md:inline-block">
            Verified Addis Ababa Real Estate • No Commission Surprises
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
