"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
  showCard?: boolean;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
  showCard = true,
}) => {
  const router = useRouter();
  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    //Navigate to the rooms page with the query
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  const containerClass = showCard
    ? "bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 border border-gray-100 dark:border-gray-700"
    : "";

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <FaSearch className="text-lg sm:text-2xl text-amber-600 mr-2 sm:mr-3" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
          Find Your Perfect Room
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-end">
        {/* Room Type Filter */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <FaFilter className="mr-2 text-amber-600 text-xs sm:text-sm" />
            Room Type
          </label>
          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 capitalize appearance-none cursor-pointer text-sm sm:text-base"
            >
              <option value="All">All Room Types</option>
              <option value="Basic">Basic Rooms</option>
              <option value="Luxury">Luxury Rooms</option>
              <option value="Suite">Premium Suites</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Search Rooms
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 text-xs sm:text-sm" />
            </div>
            <input
              type="search"
              id="search"
              placeholder="Room name, amenities..."
              className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
        </div>

        {/* Search Button */}
        <div>
          <button
            className="w-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
            type="button"
            onClick={handleFilterClick}
          >
            <FaSearch className="text-xs sm:text-sm" />
            <span>Search Rooms</span>
          </button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-600">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
          Quick Filters:
        </p>
        <div className="flex flex-wrap gap-2">
          {["All", "Basic", "Luxury", "Suite"].map((type) => (
            <button
              key={type}
              onClick={() => setRoomTypeFilter(type)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                roomTypeFilter === type ||
                (roomTypeFilter === "" && type === "All")
                  ? "bg-amber-500 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {type === "All" ? "All Rooms" : `${type} Rooms`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
