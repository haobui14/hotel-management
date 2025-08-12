"use client";

import { useState, useRef } from "react";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import {
  FaSignOutAlt,
  FaUser,
  FaCalendarAlt,
  FaCrown,
  FaStar,
  FaEdit,
  FaCamera,
  FaSpinner,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";

import { getUserBookings } from "@/libs/apis";
import { User } from "@/models/user";
import LoadingSpinner from "../../loading";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { GiMoneyStack, GiDiamondTrophy } from "react-icons/gi";
import Table from "@/components/Table/Table";
import Chart from "@/components/Chart/Chart";
import RatingModal from "@/components/RatingModal/RatingModal";
import BackDrop from "@/components/BackDrop/BackDrop";
import toast from "react-hot-toast";

const UserDetailsClient = ({ userId }: { userId: string }) => {
  const { data: session, update: updateSession } = useSession();
  const [currentNav, setCurrentNav] = useState<
    "bookings" | "amount" | "ratings"
  >("bookings");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const [ratingText, setRatingText] = useState("");

  // Profile update states
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState("");
  const [editAbout, setEditAbout] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleRatingModal = () => setIsRatingVisible((prevState) => !prevState);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    setIsUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (uploadResponse.data.success) {
        // Update user profile with new image
        const updateResponse = await axios.put("/api/users", {
          image: uploadResponse.data.imageUrl,
        });

        if (updateResponse.status === 200) {
          toast.success("Profile picture updated successfully!");
          // Mutate SWR cache to refresh user data
          mutateUserData();
          // Update NextAuth session to refresh navbar
          await updateSession({
            ...session,
            user: {
              ...session?.user,
              image: uploadResponse.data.imageUrl,
            },
          });
        }
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to update profile picture");
    } finally {
      setIsUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleProfileUpdate = async () => {
    if (!editName.trim()) {
      toast.error("Name is required");
      return;
    }

    try {
      const response = await axios.put("/api/users", {
        name: editName.trim(),
        about: editAbout.trim(),
      });

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        setIsEditingProfile(false);
        mutateUserData();
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Failed to update profile");
    }
  };

  const startEditing = () => {
    if (userData) {
      setEditName(userData.name || "");
      setEditAbout(userData.about || "");
      setIsEditingProfile(true);
    }
  };

  const reviewSubmitHandler = async () => {
    if (!ratingText.trim().length || !ratingValue) {
      return toast.error("Please provide a rating and review text!");
    }

    if (!roomId) return toast.error("Id not provided");

    setIsSubmittingReview(true);

    try {
      const { data } = await axios.post("/api/users", {
        reviewText: ratingText,
        ratingValue,
        roomId,
      });
      toast.success("Review Submitted");
    } catch (error) {
      toast.error("Review Failed");
    } finally {
      setRatingText("");
      setRatingValue(null);
      setRoomId(null);
      setIsSubmittingReview(false);
      setIsRatingVisible(false);
    }
  };

  const fetchUserBooking = async () => getUserBookings(userId);
  const fetchUserData = async () => {
    const { data } = await axios.get<User>("/api/users");
    return data;
  };

  const {
    data: userBookings,
    error,
    isLoading,
  } = useSWR("/api/userbooking", fetchUserBooking);

  const {
    data: userData,
    isLoading: loadingUserData,
    error: errorGettingUserData,
    mutate: mutateUserData,
  } = useSWR("/api/users", fetchUserData);

  if (error || errorGettingUserData) throw new Error("Cannot fetch data");
  if (typeof userBookings === "undefined" && isLoading)
    return <LoadingSpinner />;
  if (typeof userData === "undefined" && loadingUserData)
    return <LoadingSpinner />;

  if (!userData) throw new Error("Cannot fetch data");
  if (!userBookings) throw new Error("Cannot fetch data");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 relative">
      {/* Hero Section with Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 overflow-visible">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Profile Image Overlay */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30">
          <div className="relative group">
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              {userData.image && typeof userData.image === "string" ? (
                <Image
                  src={userData.image}
                  alt={userData.name || "User avatar"}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <FaUser className="text-amber-600 text-4xl md:text-5xl" />
                </div>
              )}

              {/* Upload Overlay - Only covers the circular area */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                {isUploadingImage ? (
                  <FaSpinner className="text-white text-2xl animate-spin" />
                ) : (
                  <div className="flex flex-col items-center text-white">
                    <FaCamera className="text-2xl mb-1" />
                    <span className="text-xs font-medium">Change</span>
                  </div>
                )}
              </div>
            </div>

            {/* VIP Badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-2 rounded-full shadow-lg z-30">
              <FaCrown className="text-sm" />
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={isUploadingImage}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* User Info Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              {userData.name}
            </h1>
            <button
              onClick={startEditing}
              className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 transition-colors duration-200"
              title="Edit Profile"
            >
              <FaEdit className="text-lg" />
            </button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-gray-600 mb-4">
            <div className="flex items-center space-x-2">
              <MdEmail className="text-amber-600" />
              <span className="text-sm">{userData.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-amber-600" />
              <span className="text-sm">
                Member since {userData._createdAt.split("T")[0]}
              </span>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              {userData.about ||
                "Welcome to our luxury hotel experience. Enjoy your exclusive membership benefits and personalized service."}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BsJournalBookmarkFill className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {userBookings?.length || 0}
            </h3>
            <p className="text-gray-600">Total Bookings</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GiMoneyStack className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              $
              {userBookings
                ?.reduce(
                  (total, booking) => total + (booking.totalPrice || 0),
                  0
                )
                .toLocaleString() || 0}
            </h3>
            <p className="text-gray-600">Total Spent</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GiDiamondTrophy className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">VIP</h3>
            <p className="text-gray-600">Member Status</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-2 mb-8 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-2">
            <button
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentNav === "bookings"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-amber-50"
              }`}
              onClick={() => setCurrentNav("bookings")}
            >
              <div className="flex items-center justify-center space-x-2">
                <BsJournalBookmarkFill />
                <span className="hidden sm:inline">Bookings</span>
              </div>
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentNav === "amount"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-amber-50"
              }`}
              onClick={() => setCurrentNav("amount")}
            >
              <div className="flex items-center justify-center space-x-2">
                <GiMoneyStack />
                <span className="hidden sm:inline">Analytics</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
          <div className="p-6">
            {currentNav === "bookings" ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                    <BsJournalBookmarkFill className="text-amber-600" />
                    <span>Your Bookings</span>
                  </h2>
                  <div className="text-sm text-gray-500">
                    {userBookings?.length || 0} booking
                    {(userBookings?.length || 0) !== 1 ? "s" : ""}
                  </div>
                </div>
                {userBookings && userBookings.length > 0 ? (
                  <Table
                    bookingDetails={userBookings}
                    setRoomId={setRoomId}
                    toggleRatingModal={toggleRatingModal}
                  />
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BsJournalBookmarkFill className="text-amber-600 text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      No bookings yet
                    </h3>
                    <p className="text-gray-600">
                      Start your luxury experience by booking your first room.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                    <GiMoneyStack className="text-amber-600" />
                    <span>Spending Analytics</span>
                  </h2>
                </div>
                <Chart userBookings={userBookings} />
              </div>
            )}
          </div>
        </div>

        {/* Sign Out Section */}
        <div className="text-center mt-12">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaSignOutAlt />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Edit Profile
                </h2>
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    About
                  </label>
                  <textarea
                    id="about"
                    value={editAbout}
                    onChange={(e) => setEditAbout(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProfileUpdate}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rating Modal */}
      <RatingModal
        isOpen={isRatingVisible}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        ratingText={ratingText}
        setRatingText={setRatingText}
        reviewSubmitHandler={reviewSubmitHandler}
        toggleRatingModal={toggleRatingModal}
        isSubmittingReview={isSubmittingReview}
      />
      <BackDrop isOpen={isRatingVisible} />
    </div>
  );
};

export default UserDetailsClient;
