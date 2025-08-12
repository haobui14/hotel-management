import { MdSearchOff, MdHome } from "react-icons/md";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="mx-auto mb-8">
          <div className="h-24 w-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <MdSearchOff className="text-4xl text-white" />
          </div>
        </div>

        {/* 404 Content */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We couldn&apos;t find the luxury suite you&apos;re looking for. It
            might have been moved or doesn&apos;t exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MdHome className="mr-2 text-lg" />
              Back to Home
            </Link>

            <Link
              href="/rooms"
              className="flex items-center px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-xl font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Browse Rooms
            </Link>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looking for something specific? Try these popular destinations:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/rooms"
              className="px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-amber-300 hover:text-amber-600 transition-colors duration-300"
            >
              Browse Rooms
            </Link>
            <Link
              href="/auth"
              className="px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-amber-300 hover:text-amber-600 transition-colors duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/studio"
              className="px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-amber-300 hover:text-amber-600 transition-colors duration-300"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
