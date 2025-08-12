"use client";

import axios from "axios";
import { FC } from "react";
import useSWR from "swr";
import { formatDistanceToNow } from "date-fns";
import { MdPerson, MdRateReview, MdVerified } from "react-icons/md";

import { Review } from "@/models/review";
import Rating from "../Rating/Rating";

type Props = {
  roomId: string;
};

const RoomReview: FC<Props> = ({ roomId }) => {
  const fetchRoomReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/room-reviews/${roomId}`);
    return data;
  };

  const {
    data: roomReviews,
    error,
    isLoading,
  } = useSWR(`/api/room-reviews/${roomId}`, fetchRoomReviews, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // Cache for 1 minute
  });

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
        <div className="text-red-600 dark:text-red-400 mb-2">
          <MdRateReview className="text-2xl mx-auto mb-2" />
          <p className="font-semibold">Unable to load reviews</p>
          <p className="text-sm">Please try again later</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 animate-pulse"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="ml-3 flex-1">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!roomReviews || roomReviews.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center">
        <MdRateReview className="text-4xl text-gray-400 dark:text-gray-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
          No reviews yet
        </h3>
        <p className="text-gray-500 dark:text-gray-500">
          Be the first to share your experience with this room
        </p>
      </div>
    );
  }

  // Calculate average rating
  const averageRating =
    roomReviews.reduce((acc, review) => acc + review.userRating, 0) /
    roomReviews.length;

  return (
    <div className="space-y-6">
      {/* Reviews Summary */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Guest Reviews
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {roomReviews.length} review{roomReviews.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end mb-1">
              <Rating rating={averageRating} size="lg" />
            </div>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {averageRating.toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {roomReviews.map((review) => (
          <div
            key={review._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <MdPerson className="text-white text-lg" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {review.user?.name || "Anonymous Guest"}
                    </h4>
                    <MdVerified className="text-green-500 text-sm" />
                  </div>
                  <div className="flex items-center mt-1">
                    <Rating rating={review.userRating} size="sm" />
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {formatDistanceToNow(
                        new Date(review._createdAt || Date.now()),
                        {
                          addSuffix: true,
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Content */}
            {review.text && (
              <div className="ml-13">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            )}

            {/* Review Tags (if rating is high) */}
            {review.userRating >= 4 && (
              <div className="ml-13 mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  Recommended Stay
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomReview;
