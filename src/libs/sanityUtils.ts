import sanityClient from "./sanity";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Image URL builder helper
export const getImageUrl = (image: any) => {
  if (!image) return null;

  if (image.url) {
    return image.url;
  }

  if (image.file) {
    // For Sanity file references, build the URL
    return builder.image(image.file).url();
  }

  return null;
};

// Optimized image URL with dimensions and quality
export const getOptimizedImageUrl = (
  image: any,
  width?: number,
  height?: number,
  quality = 80
) => {
  if (!image) return null;

  if (image.url) {
    return image.url;
  }

  if (image.file) {
    let imageBuilder = builder.image(image.file);

    if (width) imageBuilder = imageBuilder.width(width);
    if (height) imageBuilder = imageBuilder.height(height);

    return imageBuilder.quality(quality).format("webp").url();
  }

  return null;
};

// Helper to create booking
export const createBooking = async (bookingData: any) => {
  try {
    const result = await sanityClient.create({
      _type: "booking",
      ...bookingData,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Error creating booking:", error);
    return { success: false, error };
  }
};

// Helper to create review
export const createReview = async (reviewData: any) => {
  try {
    const result = await sanityClient.create({
      _type: "review",
      ...reviewData,
      isApproved: false, // Reviews need admin approval
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Error creating review:", error);
    return { success: false, error };
  }
};

// Helper to update booking status
export const updateBookingStatus = async (
  bookingId: string,
  status: string
) => {
  try {
    const result = await sanityClient.patch(bookingId).set({ status }).commit();
    return { success: true, data: result };
  } catch (error) {
    console.error("Error updating booking status:", error);
    return { success: false, error };
  }
};

// Helper to approve/reject review
export const updateReviewApproval = async (
  reviewId: string,
  isApproved: boolean
) => {
  try {
    const result = await sanityClient
      .patch(reviewId)
      .set({ isApproved })
      .commit();
    return { success: true, data: result };
  } catch (error) {
    console.error("Error updating review approval:", error);
    return { success: false, error };
  }
};

// Helper to increment helpful votes
export const incrementHelpfulVotes = async (reviewId: string) => {
  try {
    const result = await sanityClient
      .patch(reviewId)
      .inc({ helpfulVotes: 1 })
      .commit();
    return { success: true, data: result };
  } catch (error) {
    console.error("Error incrementing helpful votes:", error);
    return { success: false, error };
  }
};

// Validation helpers
export const validateRoomAvailability = async (
  roomId: string,
  checkinDate: string,
  checkoutDate: string
) => {
  try {
    const overlappingBookings = await sanityClient.fetch(
      groq`*[_type == 'booking' && 
            hotelRoom._ref == $roomId && 
            status in ['confirmed', 'checked_in'] &&
            (
              (checkinDate <= $checkinDate && checkoutDate > $checkinDate) ||
              (checkinDate < $checkoutDate && checkoutDate >= $checkoutDate) ||
              (checkinDate >= $checkinDate && checkoutDate <= $checkoutDate)
            )
           ]`,
      { roomId, checkinDate, checkoutDate }
    );

    return {
      isAvailable: overlappingBookings.length === 0,
      conflictingBookings: overlappingBookings,
    };
  } catch (error) {
    console.error("Error checking room availability:", error);
    return { isAvailable: false, error };
  }
};

// Search and filter helpers
export const searchRooms = async (
  searchQuery: string,
  roomType: string = "All",
  limit = 20
) => {
  try {
    let query = `*[_type == 'hotelRoom'`;
    const params: any = {};

    if (searchQuery) {
      query += ` && (name match $searchQuery || description match $searchQuery)`;
      params.searchQuery = `*${searchQuery}*`;
    }

    if (roomType && roomType !== "All") {
      query += ` && type == $roomType`;
      params.roomType = roomType.toLowerCase();
    }

    query += `] | order(_createdAt desc)[0...$limit] {
      _id,
      name,
      slug,
      description,
      price,
      discount,
      coverImage,
      type,
      isBooked,
      isFeatured,
      "averageRating": math::avg(*[_type == 'review' && hotelRoom._ref == ^._id && isApproved == true].userRating),
      "reviewCount": count(*[_type == 'review' && hotelRoom._ref == ^._id && isApproved == true])
    }`;

    params.limit = limit;

    const rooms = await sanityClient.fetch(groq`${query}`, params);
    return { success: true, data: rooms };
  } catch (error) {
    console.error("Error searching rooms:", error);
    return { success: false, error };
  }
};

const sanityUtils = {
  getImageUrl,
  getOptimizedImageUrl,
  createBooking,
  createReview,
  updateBookingStatus,
  updateReviewApproval,
  incrementHelpfulVotes,
  validateRoomAvailability,
  searchRooms,
};

export default sanityUtils;
