"use client";

import RoomCard from "@/components/RoomCard/RoomCard";
import Search from "@/components/Search/Search";
import { getRooms } from "@/libs/apis";
import { Room } from "@/models/room";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const roomType = searchParams.get("roomType");

    if (roomType) {
      setRoomTypeFilter(roomType);
    }
    if (searchQuery) {
      setSearchQuery(searchQuery);
    }
  }, [searchParams]);

  const fetchData = async () => {
    return getRooms();
  };

  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);

  if (error) {
    throw new Error("Cannot fetch data");
  }

  if (typeof data === "undefined" && !isLoading) {
    throw new Error("Cannot fetch data");
  }

  const filterRooms = (rooms: Room[]) => {
    return rooms.filter((room) => {
      //Apply room type filter
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== "all" &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      //Apply search query filter
      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  };

  const filteredRooms = filterRooms(data || []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 dark:from-gray-800 dark:to-gray-900 py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-amber-200 dark:bg-amber-800 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent mb-6">
            Our Luxury Rooms
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our collection of elegantly designed rooms and suites, each
            offering unparalleled comfort and luxury for an unforgettable stay.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <Search
            roomTypeFilter={roomTypeFilter}
            searchQuery={searchQuery}
            setRoomTypeFilter={setRoomTypeFilter}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-20">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-600 mb-4"></div>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Loading luxury rooms...
            </span>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Preparing your perfect getaway
            </p>
          </div>
        ) : (
          <>
            {/* Results Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                  Available Rooms
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {filteredRooms.length} premium room
                  {filteredRooms.length !== 1 ? "s" : ""} available for your
                  stay
                </p>
              </div>

              {/* Enhanced Sort Options */}
              <div className="mt-4 md:mt-0 flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Sort by:
                </span>
                <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 shadow-sm">
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                  <option>Room Type</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {/* Enhanced Rooms Grid */}
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRooms.map((room) => (
                  <RoomCard key={room._id} room={room} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="text-8xl mb-6 opacity-50">🏨</div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  No rooms match your criteria
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                  We couldn&apos;t find any rooms that match your current
                  search. Try adjusting your filters or browse our complete
                  collection.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setRoomTypeFilter("");
                      setSearchQuery("");
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Clear All Filters
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or browse our{" "}
                    <span className="text-amber-600 font-medium cursor-pointer hover:underline">
                      featured rooms
                    </span>
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Rooms;
