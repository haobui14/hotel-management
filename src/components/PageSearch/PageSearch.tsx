"use client";

import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Book Your Dream Stay
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 max-w-md mx-auto font-medium">
            Start your luxury experience by finding the perfect room for your
            getaway
          </p>
        </div>

        <Search
          roomTypeFilter={roomTypeFilter}
          searchQuery={searchQuery}
          setRoomTypeFilter={setRoomTypeFilter}
          setSearchQuery={setSearchQuery}
          showCard={false}
        />
      </div>
    </div>
  );
};

export default PageSearch;
