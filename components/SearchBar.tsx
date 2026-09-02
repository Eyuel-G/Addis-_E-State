import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-white/60 relative z-10 p-4 sm:p-6 rounded-3xl mt-5 w-full max-w-5xl lg:w-[80%]">
      <form action="#" method="POST">
        <div className="flex flex-col lg:flex-row lg:items-center justify-around gap-4 lg:gap-2">
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="location" className="font-medium text-sm sm:text-base">Location</label>
            <select
              id="location"
              name="location"
              className="border border-black px-4 py-2 rounded-2xl bg-gray-400 text-center w-full lg:ml-2 lg:min-w-[18vw] mt-1"
              defaultValue="#"
            >
              <option value="#" disabled>
                All Locations
              </option>
              <option value="Bole">Bole</option>
              <option value="Kazanchis">Kazanchis</option>
              <option value="Sarbet">Sarbet</option>
              <option value="CMC">CMC</option>
              <option value="Ayat">Ayat</option>
              <option value="Megenagna">Megenagna</option>
            </select>
          </div>

          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="price" className="font-medium text-sm sm:text-base">Price Range</label>
            <select
              id="price"
              name="price"
              className="border border-black px-4 py-2 rounded-2xl bg-gray-400 text-center w-full lg:ml-2 lg:min-w-[18vw] mt-1"
              defaultValue="#"
            >
              <option value="#" disabled>
                Any Price
              </option>
              <option value="">Under 2M ETB</option>
              <option value="">2M-5M ETB</option>
              <option value="">5M-10M ETB</option>
              <option value="">10M-20M ETB</option>
              <option value="">20M+ ETB</option>
            </select>
          </div>

          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="keywords" className="font-medium text-sm sm:text-base">Keywords</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              className="border border-black rounded-md p-2 w-full lg:ml-2 lg:min-w-[18vw] bg-gray-400 hover:bg-white focus:bg-white focus:border-b-gray-400 mt-1"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-start w-full lg:ml-5 mt-4 sm:mt-5">
          <div className="flex items-center gap-1.5">
            <input type="radio" id="property-all" name="property" value="all" />
            <label htmlFor="property-all">All</label>
          </div>

          <div className="flex items-center gap-1.5">
            <input type="radio" id="property-villa" name="property" value="villa" />
            <label htmlFor="property-villa">Villa</label>
          </div>

          <div className="flex items-center gap-1.5">
            <input
              type="radio"
              id="property-apartment"
              name="property"
              value="apartment"
            />
            <label htmlFor="property-apartment">Apartment</label>
          </div>

          <div className="flex items-center gap-1.5">
            <input
              type="radio"
              id="property-commercial"
              name="property"
              value="commercial"
            />
            <label htmlFor="property-commercial">Commercial</label>
          </div>

          <div className="flex items-center gap-1.5">
            <input type="radio" id="property-land" name="property" value="land" />
            <label htmlFor="property-land">Land</label>
          </div>
        </div>

        <input
          type="submit"
          value="Search"
          className="border border-orange-700 rounded-3xl w-full p-2 mt-4 bg-orange-400 text-white font-semibold hover:bg-orange-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SearchBar;
