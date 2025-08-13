"use client";

import useSWR from "swr";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LiaFireExtinguisherSolid } from "react-icons/lia";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GiSmokeBomb } from "react-icons/gi";
import {
  FaWifi,
  FaCoffee,
  FaTv,
  FaSnowflake,
  FaBed,
  FaBath,
  FaCubes,
  FaSwimmer,
  FaConciergeBell,
  FaCar,
  FaSpa,
  FaDesktop,
  FaUtensils,
  FaParking,
} from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

// Icon mapping for amenities
const getAmenityIcon = (
  iconName: string,
  size: "small" | "large" = "large"
) => {
  const iconSize = size === "small" ? "text-sm" : "text-lg";
  const iconMap: { [key: string]: React.ReactElement } = {
    // FontAwesome class mappings
    "fa-wifi": <FaWifi className={`text-white ${iconSize}`} />,
    "fa-coffee": <FaCoffee className={`text-white ${iconSize}`} />,
    "fa-tv": <FaTv className={`text-white ${iconSize}`} />,
    "fa-snowflake": <FaSnowflake className={`text-white ${iconSize}`} />,
    "fa-bed": <FaBed className={`text-white ${iconSize}`} />,
    "fa-bath": <FaBath className={`text-white ${iconSize}`} />,
    "fa-cubes": <FaCubes className={`text-white ${iconSize}`} />,
    "fa-swimmer": <FaSwimmer className={`text-white ${iconSize}`} />,
    "fa-concierge-bell": (
      <FaConciergeBell className={`text-white ${iconSize}`} />
    ),
    "fa-car": <FaCar className={`text-white ${iconSize}`} />,
    "fa-spa": <FaSpa className={`text-white ${iconSize}`} />,
    "fa-desktop": <FaDesktop className={`text-white ${iconSize}`} />,
    "fa-utensils": <FaUtensils className={`text-white ${iconSize}`} />,
    "fa-parking": <FaParking className={`text-white ${iconSize}`} />,

    // Amenity name mappings (fallback)
    wifi: <FaWifi className={`text-white ${iconSize}`} />,
    "free wifi": <FaWifi className={`text-white ${iconSize}`} />,
    coffee: <FaCoffee className={`text-white ${iconSize}`} />,
    "coffee maker": <FaCoffee className={`text-white ${iconSize}`} />,
    tv: <FaTv className={`text-white ${iconSize}`} />,
    "smart tv": <FaTv className={`text-white ${iconSize}`} />,
    "air conditioning": <FaSnowflake className={`text-white ${iconSize}`} />,
    bed: <FaBed className={`text-white ${iconSize}`} />,
    "king size bed": <FaBed className={`text-white ${iconSize}`} />,
    bathroom: <FaBath className={`text-white ${iconSize}`} />,
    "private bathroom": <FaBath className={`text-white ${iconSize}`} />,
    "mini fridge": <FaCubes className={`text-white ${iconSize}`} />,
    pool: <FaSwimmer className={`text-white ${iconSize}`} />,
    "pool access": <FaSwimmer className={`text-white ${iconSize}`} />,
    "room service": <FaConciergeBell className={`text-white ${iconSize}`} />,
    parking: <FaCar className={`text-white ${iconSize}`} />,
    "valet parking": <FaCar className={`text-white ${iconSize}`} />,
    spa: <FaSpa className={`text-white ${iconSize}`} />,
    "spa access": <FaSpa className={`text-white ${iconSize}`} />,
    "work desk": <FaDesktop className={`text-white ${iconSize}`} />,
    desk: <FaDesktop className={`text-white ${iconSize}`} />,
  };

  // First try exact match
  const exactMatch = iconMap[iconName?.toLowerCase()];
  if (exactMatch) return exactMatch;

  // If it's an emoji, return it wrapped in span
  if (
    iconName &&
    /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(
      iconName
    )
  ) {
    return (
      <span
        className={`text-white ${size === "small" ? "text-sm" : "text-xl"}`}
      >
        {iconName}
      </span>
    );
  }

  // Default fallback icon
  return <FaDesktop className={`text-white ${iconSize}`} />;
};

import { getRoom, getRoomReviews } from "@/libs/apis";
import LoadingSpinner from "../../loading";
import HotelPhotoGallery from "@/components/HotelPhotoGallery/HotelPhotoGallery";
import BookRoomCta from "@/components/BookRoomCta/BookRoomCta";
import Rating from "@/components/Rating/Rating";
import toast from "react-hot-toast";
import { getStripe } from "@/libs/stripe";
import RoomReview from "@/components/RoomReview/RoomReview";

const RoomDetailsClient = ({ slug }: { slug: string }) => {
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [numOfChildren, setNumOfChildren] = useState(0);

  const fetchRoom = async () => getRoom(slug);
  const fetchRoomReviews = async () => {
    if (room?._id) {
      return getRoomReviews(room._id);
    }
    return [];
  };

  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);
  const {
    data: reviews,
    error: reviewsError,
    isLoading: reviewsLoading,
  } = useSWR(
    room?._id ? `/api/room-reviews/${room._id}` : null,
    fetchRoomReviews
  );

  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!room) return <LoadingSpinner />;

  const calcMinCheckoutDate = () => {
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return null;
  };

  const handleBookNowClick = async () => {
    if (!checkinDate || !checkoutDate)
      return toast.error("Please provide checkin / checkout date");

    if (checkinDate > checkoutDate)
      return toast.error("Please choose a valid checkin period");

    const numberOfDays = calcNumOfDays();

    const hotelRoomSlug = room.slug.current;

    // Stripe integration
    const stripe = await getStripe();

    try {
      const { data: stripeSession } = await axios.post("/api/stripe", {
        checkinDate,
        checkoutDate,
        adults,
        children: numOfChildren,
        numberOfDays,
        hotelRoomSlug,
      });

      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: stripeSession.id,
        });

        if (result.error) {
          toast.error("Payment Failed");
        }
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const calcNumOfDays = () => {
    if (!checkinDate || !checkoutDate) return 0;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HotelPhotoGallery photos={room.images} />

      <div className="container mx-auto py-16">
        <div className="md:grid md:grid-cols-12 gap-12 px-4">
          <div className="md:col-span-8 md:w-full">
            {/* Room Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-medium rounded-full">
                  {room.type}
                </span>
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-300">
                  {room.dimension}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                {room.name}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>

            {/* Amenities Cards */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Room Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {room.offeredAmenities.map((amenity) => (
                  <div
                    key={amenity._key}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      {getAmenityIcon(amenity.icon)}
                    </div>
                    <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                      {amenity.amenity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Description Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Description
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {room.description}
                </p>
              </div>
            </div>

            {/* Detailed Amenities */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                What&apos;s Included
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {room.offeredAmenities.map((amenity) => (
                    <div key={amenity._key} className="flex items-center group">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        {getAmenityIcon(amenity.icon, "small")}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {amenity.amenity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Safety & Hygiene
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <MdOutlineCleaningServices className="text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Daily Cleaning
                    </p>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <LiaFireExtinguisherSolid className="text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Fire Extinguishers
                    </p>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <AiOutlineMedicineBox className="text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Disinfections and Sterilizations
                    </p>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-slate-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <GiSmokeBomb className="text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Smoke Detectors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Customer Reviews
                  </h2>
                  {room.reviewCount && room.averageRating && (
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Rating rating={room.averageRating} />
                        <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {room.averageRating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        ({room.reviewCount}{" "}
                        {room.reviewCount === 1 ? "review" : "reviews"})
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <RoomReview roomId={room._id} />
            </div>
          </div>

          {/* Booking CTA */}
          <div className="md:col-span-4">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <BookRoomCta
                  discount={room.discount}
                  price={room.price}
                  specialNote={room.specialNote}
                  checkinDate={checkinDate}
                  setCheckinDate={setCheckinDate}
                  checkoutDate={checkoutDate}
                  setCheckoutDate={setCheckoutDate}
                  calcMinCheckoutDate={calcMinCheckoutDate}
                  setAdults={setAdults}
                  adults={adults}
                  numOfChildren={numOfChildren}
                  setNumOfChildren={setNumOfChildren}
                  isBooked={room.isBooked}
                  handleBookNowClick={handleBookNowClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsClient;
