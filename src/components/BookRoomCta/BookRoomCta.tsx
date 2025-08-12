"use client";

import { Dispatch, FC, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  setAdults: Dispatch<SetStateAction<number>>;
  setNumOfChildren: Dispatch<SetStateAction<number>>;
  calcMinCheckoutDate: () => Date | null;
  specialNote: string;
  price: number;
  discount: number;
  checkinDate: Date | null;
  checkoutDate: Date | null;
  adults: number;
  numOfChildren: number;
  isBooked: boolean;
  handleBookNowClick: () => void;
};

const BookRoomCta: FC<Props> = (props) => {
  const {
    price,
    discount,
    specialNote,
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    calcMinCheckoutDate,
    adults,
    numOfChildren,
    setAdults,
    setNumOfChildren,
    isBooked,
    handleBookNowClick,
  } = props;

  const discountPrice = price - (price / 100) * discount;

  const calcNumOfDays = () => {
    if (!checkinDate || !checkoutDate) {
      return 0;
    }
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const numOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return numOfDays;
  };

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Reserve Your Stay
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
      </div>

      {/* Pricing Section */}
      <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-700">
        <div className="flex items-baseline gap-3 mb-2">
          {discount > 0 ? (
            <>
              <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                ${discountPrice}
              </span>
              <span className="text-lg text-gray-400 line-through">
                ${price}
              </span>
              <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-semibold rounded-full">
                {discount}% OFF
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              ${price}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">per night</p>
      </div>

      {/* Special Note */}
      {specialNote && (
        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
            💡 {specialNote}
          </p>
        </div>
      )}

      {/* Date Selection */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Select Dates
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="check-in-date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Check In
            </label>
            <DatePicker
              selected={checkinDate}
              onChange={(date) => setCheckinDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              id="check-in-date"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
              popperProps={{ strategy: "fixed" }}
              placeholderText="Select date"
            />
          </div>
          <div>
            <label
              htmlFor="check-out-date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Check Out
            </label>
            <DatePicker
              selected={checkoutDate}
              onChange={(date) => setCheckoutDate(date)}
              dateFormat="dd/MM/yyyy"
              disabled={!checkinDate}
              minDate={calcMinCheckoutDate() || undefined}
              id="check-out-date"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              popperProps={{ strategy: "fixed" }}
              placeholderText="Select date"
            />
          </div>
        </div>
      </div>

      {/* Guest Selection */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Guests
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="adults"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Adults
            </label>
            <input
              type="number"
              id="adults"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              min={1}
              max={5}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="children"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Children
            </label>
            <input
              type="number"
              id="children"
              value={numOfChildren}
              onChange={(e) => setNumOfChildren(Number(e.target.value))}
              min={0}
              max={3}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Total Calculation */}
      {calcNumOfDays() > 0 && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 dark:text-gray-300">
              {calcNumOfDays()} night{calcNumOfDays() > 1 ? "s" : ""}
            </span>
            <span className="font-semibold text-gray-800 dark:text-white">
              ${(calcNumOfDays() * discountPrice).toLocaleString()}
            </span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800 dark:text-white">
                Total
              </span>
              <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                ${(calcNumOfDays() * discountPrice).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Book Now Button */}
      <button
        disabled={isBooked}
        onClick={handleBookNowClick}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
          isBooked
            ? "bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
        }`}
      >
        {isBooked ? "Room Unavailable" : "Book Now"}
      </button>

      {!isBooked && (
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
          Free cancellation • No prepayment needed
        </p>
      )}
    </div>
  );
};

export default BookRoomCta;
