import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == 'hotelRoom' && isFeatured == true][0]{
  _id,
  description,
  discount,
  images,
  isFeatured,
  name,
  price,
  slug,
  coverImage
}`;

export const getRoomsQuery = groq`*[_type == "hotelRoom"] {
  _id,
  coverImage,
  description,
  dimension,
  isBooked,
  isFeatured,
  name, 
  price,
  slug,
  type
}`;

export const getRoom = groq`*[_type == "hotelRoom" && slug.current == $slug][0]{
  _id,
  coverImage,
  description,
  dimension,
  discount,
  images,
  isBooked,
  isFeatured,
  name,
  numberOfBeds,
  offeredAmenities,
  price,
  slug,
  specialNote,
  type,
  "averageRating": math::avg(*[_type == 'review' && hotelRoom._ref == ^._id && isApproved == true].userRating),
  "reviewCount": count(*[_type == 'review' && hotelRoom._ref == ^._id && isApproved == true])
}`;

export const getUserBookingsQuery = groq`*[_type == 'booking' && user._ref == $userId] | order(_createdAt desc) {
  _id,
  hotelRoom -> {
    _id,
    name, 
    slug,
    price,
    coverImage
  },
  checkinDate,
  checkoutDate,
  numberOfDays,
  adults,
  children,
  totalPrice,
  discount,
  status,
  specialRequests
}`;

export const getUserDataQuery = groq`*[_type == 'user' && _id == $userId][0] {
  _id,
  name,
  email, 
  isAdmin,
  about,
  _createdAt,
  image
}`;

export const getRoomReviewsQuery = groq`*[_type == 'review' && hotelRoom._ref == $roomId && isApproved == true] | order(_createdAt desc) {
 _createdAt,
 _id,
 title,
 text,
 "user": user->{
  name,
  image
 }, 
 userRating,
 helpfulVotes
}`;

// Admin queries
export const getAllBookingsQuery = groq`*[_type == 'booking'] | order(_createdAt desc) {
  _id,
  _createdAt,
  user -> {
    _id,
    name,
    email
  },
  hotelRoom -> {
    _id,
    name,
    type,
    price
  },
  checkinDate,
  checkoutDate,
  numberOfDays,
  adults,
  children,
  totalPrice,
  status,
  specialRequests
}`;

export const getAllReviewsQuery = groq`*[_type == 'review'] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  text,
  userRating,
  isApproved,
  helpfulVotes,
  user -> {
    name,
    email
  },
  hotelRoom -> {
    name,
    type
  }
}`;

export const getDashboardStatsQuery = groq`{
  "totalRooms": count(*[_type == 'hotelRoom']),
  "totalBookings": count(*[_type == 'booking']),
  "totalReviews": count(*[_type == 'review']),
  "totalUsers": count(*[_type == 'user']),
  "featuredRooms": count(*[_type == 'hotelRoom' && isFeatured == true]),
  "pendingReviews": count(*[_type == 'review' && isApproved == false]),
  "recentBookings": *[_type == 'booking'] | order(_createdAt desc)[0...5] {
    _id,
    checkinDate,
    totalPrice,
    user -> { name },
    hotelRoom -> { name }
  }
}`;
