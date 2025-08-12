import { FC } from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

type Props = {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

const Rating: FC<Props> = ({
  rating,
  maxRating = 5,
  size = "md",
  showText = false,
  className = "",
}) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;
  const emptyStars = maxRating - Math.ceil(rating);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const renderStars = () => {
    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-amber-400 drop-shadow-sm" />
      );
    }

    // Render half star if needed
    if (decimalPart >= 0.5) {
      stars.push(
        <FaStarHalf key="half" className="text-amber-400 drop-shadow-sm" />
      );
    } else if (decimalPart > 0) {
      stars.push(
        <div key="partial" className="relative inline-block">
          <FaRegStar className="text-amber-400" />
          <FaStar
            className="absolute top-0 left-0 text-amber-400 opacity-50"
            style={{ clipPath: `inset(0 ${100 - decimalPart * 100}% 0 0)` }}
          />
        </div>
      );
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-${i}`}
          className="text-gray-300 dark:text-gray-600"
        />
      );
    }

    return stars;
  };

  return (
    <div
      className={`flex items-center gap-1 ${sizeClasses[size]} ${className}`}
    >
      <div className="flex items-center">{renderStars()}</div>
      {showText && (
        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {rating.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default Rating;
