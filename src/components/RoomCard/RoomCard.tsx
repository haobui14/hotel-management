import { FC } from "react";

import Image from "next/image";

import { Room } from "@/models/room";
import Link from "next/link";
import { FaStar, FaWifi, FaTv, FaCoffee, FaBed } from "react-icons/fa";

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = (props) => {
  const {
    room: { coverImage, name, price, type, description, slug, isBooked },
  } = props;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={coverImage.url}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          quality={90}
          priority
        />

        {/* Room Type Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
              type.toLowerCase() === "suite"
                ? "bg-gradient-to-r from-amber-500 to-orange-600"
                : type.toLowerCase() === "luxury"
                  ? "bg-gradient-to-r from-rose-500 to-pink-600"
                  : "bg-gradient-to-r from-emerald-500 to-teal-600"
            }`}
          >
            {type} Room
          </span>
        </div>

        {/* Booking Status */}
        {isBooked && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
              Booked
            </span>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-3 py-1">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-white text-sm font-medium">4.8</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-amber-600 transition-colors duration-300">
            {name}
          </h3>
          <div className="text-right">
            <p className="text-2xl font-bold text-amber-600">${price}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              per night
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="h-16">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 h-full overflow-hidden">
            {description.slice(0, 120)}...
          </p>
        </div>

        {/* Amenities */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="flex space-x-3 text-gray-400">
            <FaWifi className="text-sm" title="Free WiFi" />
            <FaTv className="text-sm" title="Smart TV" />
            <FaCoffee className="text-sm" title="Coffee Machine" />
            <FaBed className="text-sm" title="Premium Bedding" />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            + More amenities
          </span>
        </div>

        {/* Book Button */}
        <Link
          href={`/rooms/${slug.current}`}
          className={`block w-full text-center py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg ${
            isBooked
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 hover:shadow-xl"
          }`}
        >
          {isBooked ? "Currently Booked" : "View Details & Book"}
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
