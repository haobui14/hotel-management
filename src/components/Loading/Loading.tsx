interface LoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  variant?: "spinner" | "dots" | "pulse";
  fullScreen?: boolean;
}

const Loading = ({
  size = "md",
  text,
  variant = "spinner",
  fullScreen = false,
}: LoadingProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const containerClasses = fullScreen
    ? "min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center"
    : "flex items-center justify-center p-4";

  const renderSpinner = () => (
    <div
      className={`${sizeClasses[size]} border-4 border-amber-200 dark:border-amber-800 border-t-amber-500 border-r-orange-600 rounded-full animate-spin`}
    ></div>
  );

  const renderDots = () => (
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-bounce"></div>
      <div
        className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
  );

  const renderPulse = () => (
    <div
      className={`${sizeClasses[size]} bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl animate-pulse`}
    ></div>
  );

  const renderVariant = () => {
    switch (variant) {
      case "dots":
        return renderDots();
      case "pulse":
        return renderPulse();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {fullScreen && (
          <div className="mb-6">
            <div className="mx-auto h-16 w-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-2xl font-bold text-white">🏨</span>
            </div>
          </div>
        )}

        <div className="mb-4">{renderVariant()}</div>

        {text && (
          <p
            className={`text-gray-600 dark:text-gray-400 ${textSizeClasses[size]} font-medium`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

// Export individual loading components for specific use cases
export const PageLoading = () => (
  <Loading
    size="xl"
    text="Loading luxury experience..."
    variant="spinner"
    fullScreen
  />
);

export const CardLoading = () => (
  <Loading size="md" text="Loading..." variant="spinner" />
);

export const ButtonLoading = () => <Loading size="sm" variant="spinner" />;

export const DotsLoading = () => <Loading size="md" variant="dots" />;

export default Loading;
