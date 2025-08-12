"use client";

import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { MdClose, MdRateReview } from "react-icons/md";

type Props = {
  isOpen: boolean;
  ratingValue: number | null;
  setRatingValue: Dispatch<SetStateAction<number | null>>;
  ratingText: string;
  setRatingText: Dispatch<SetStateAction<string>>;
  reviewSubmitHandler: () => Promise<string | undefined>;
  isSubmittingReview: boolean;
  toggleRatingModal: () => void;
};

const RatingModal: FC<Props> = (props) => {
  const {
    isOpen,
    ratingValue,
    setRatingValue,
    ratingText,
    setRatingText,
    reviewSubmitHandler,
    isSubmittingReview,
    toggleRatingModal,
  } = props;

  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const starValues = [1, 2, 3, 4, 5];

  const ratingLabels = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggleRatingModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, toggleRatingModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleRatingModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
              <MdRateReview className="text-white text-lg" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Rate Your Experience
            </h2>
          </div>
          <button
            onClick={toggleRatingModal}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            disabled={isSubmittingReview}
          >
            <MdClose className="text-gray-500 dark:text-gray-400 text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating Stars */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              How would you rate your stay?
            </label>
            <div className="flex items-center justify-center gap-2 mb-2">
              {starValues.map((value) => {
                const isActive = (hoveredStar || ratingValue || 0) >= value;
                return (
                  <button
                    key={value}
                    className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                      isActive
                        ? "text-amber-400 drop-shadow-sm"
                        : "text-gray-300 dark:text-gray-600 hover:text-amber-300"
                    }`}
                    onClick={() => setRatingValue(value)}
                    onMouseEnter={() => setHoveredStar(value)}
                    onMouseLeave={() => setHoveredStar(null)}
                    disabled={isSubmittingReview}
                  >
                    {isActive ? (
                      <BsStarFill className="text-2xl" />
                    ) : (
                      <BsStar className="text-2xl" />
                    )}
                  </button>
                );
              })}
            </div>
            {(hoveredStar || ratingValue) && (
              <p className="text-center text-sm font-medium text-amber-600 dark:text-amber-400 transition-all duration-200">
                {
                  ratingLabels[
                    (hoveredStar || ratingValue) as keyof typeof ratingLabels
                  ]
                }
              </p>
            )}
          </div>

          {/* Review Text */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Share your experience (optional)
            </label>
            <textarea
              value={ratingText}
              onChange={(e) => setRatingText(e.target.value)}
              rows={4}
              placeholder="Tell us about your stay at our luxury hotel..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200 resize-none"
              disabled={isSubmittingReview}
              maxLength={500}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
              {ratingText.length}/500 characters
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleRatingModal}
            className="px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
            disabled={isSubmittingReview}
          >
            Cancel
          </button>
          <button
            onClick={reviewSubmitHandler}
            className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
              ratingValue
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 focus:ring-4 focus:ring-amber-500/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
            } ${isSubmittingReview ? "opacity-75 cursor-wait" : ""}`}
            disabled={!ratingValue || isSubmittingReview}
          >
            {isSubmittingReview ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Submitting...
              </div>
            ) : (
              "Submit Review"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
