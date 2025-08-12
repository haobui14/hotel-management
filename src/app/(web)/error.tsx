"use client";

import { MdErrorOutline, MdRefresh, MdHome } from "react-icons/md";
import { useRouter } from "next/navigation";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mx-auto mb-8">
          <div className="h-24 w-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <MdErrorOutline className="text-4xl text-white" />
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Something Went Wrong
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            We apologize for the inconvenience. Our luxury service encountered
            an unexpected issue.
          </p>

          {/* Error Details */}
          {error.message && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                Error Details:
              </h3>
              <p className="text-red-700 dark:text-red-300 text-sm font-mono break-words">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-red-600 dark:text-red-400 text-xs mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => reset()}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MdRefresh className="mr-2 text-lg" />
              Try Again
            </button>

            <button
              onClick={() => router.push("/")}
              className="flex items-center px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-xl font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <MdHome className="mr-2 text-lg" />
              Back to Home
            </button>
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-8 text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            If this issue persists, please contact our support team.
          </p>
          <p className="text-sm">
            We&apos;re committed to providing you with the best luxury hotel
            management experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
