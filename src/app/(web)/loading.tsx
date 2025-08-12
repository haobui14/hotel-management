const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
    <div className="text-center">
      {/* Hotel Logo Animation */}
      <div className="relative mb-8">
        <div className="mx-auto h-20 w-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
          <span className="text-3xl font-bold text-white">🏨</span>
        </div>
        {/* Animated Ring */}
        <div className="absolute inset-0 h-20 w-20 mx-auto border-4 border-amber-200 dark:border-amber-800 rounded-3xl animate-ping"></div>
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Loading Luxury Experience
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Preparing your premium hotel management dashboard...
      </p>

      {/* Animated Dots */}
      <div className="flex items-center justify-center space-x-2">
        <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>

      {/* Progress Bar */}
      <div className="mt-8 w-64 mx-auto">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
