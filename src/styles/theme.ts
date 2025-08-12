// Hotel Management App Theme Configuration
export const theme = {
  // Color Palette
  colors: {
    primary: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316", // Main orange
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
    },
    secondary: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308", // Main amber
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
    },
    accent: {
      rose: {
        500: "#f43f5e",
        600: "#e11d48",
      },
      emerald: {
        500: "#10b981",
        600: "#059669",
      },
      blue: {
        500: "#3b82f6",
        600: "#2563eb",
      },
      indigo: {
        500: "#6366f1",
        600: "#4f46e5",
      },
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    semantic: {
      success: {
        50: "#f0fdf4",
        500: "#22c55e",
        600: "#16a34a",
      },
      warning: {
        50: "#fffbeb",
        500: "#f59e0b",
        600: "#d97706",
      },
      error: {
        50: "#fef2f2",
        500: "#ef4444",
        600: "#dc2626",
      },
      info: {
        50: "#eff6ff",
        500: "#3b82f6",
        600: "#2563eb",
      },
    },
  },

  // Typography
  typography: {
    fontFamily: {
      primary: ["Poppins", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "Fira Code", "monospace"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },

  // Spacing
  spacing: {
    xs: "0.5rem", // 8px
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
    "5xl": "8rem", // 128px
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-Index
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070,
  },

  // Component Styles
  components: {
    button: {
      primary:
        "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
      secondary:
        "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700",
      outline:
        "border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300",
      ghost:
        "text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    card: {
      default:
        "bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6",
      elevated:
        "bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8",
      interactive:
        "bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 p-6 transition-all duration-300 transform hover:-translate-y-1",
    },
    input: {
      default:
        "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300",
      error:
        "w-full px-4 py-3 border border-red-300 dark:border-red-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300",
    },
    badge: {
      primary:
        "px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-medium rounded-full",
      secondary:
        "px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full",
      success:
        "px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full",
      warning:
        "px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full",
      error:
        "px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm font-medium rounded-full",
    },
  },

  // Animation
  animation: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "700ms",
    },
    timing: {
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // Layout
  layout: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    header: {
      height: "4rem", // 64px
      heightMobile: "3.5rem", // 56px
    },
    sidebar: {
      width: "16rem", // 256px
      widthCollapsed: "4rem", // 64px
    },
  },

  // Gradients
  gradients: {
    primary: "bg-gradient-to-r from-amber-500 to-orange-600",
    secondary: "bg-gradient-to-r from-orange-400 to-red-500",
    accent: "bg-gradient-to-r from-rose-500 to-pink-600",
    neutral: "bg-gradient-to-r from-gray-500 to-slate-600",
    success: "bg-gradient-to-r from-emerald-500 to-teal-600",
    warning: "bg-gradient-to-r from-yellow-500 to-orange-500",
    error: "bg-gradient-to-r from-red-500 to-rose-600",
    info: "bg-gradient-to-r from-blue-500 to-cyan-600",
  },
};

// Helper functions for consistent styling
export const getButtonStyle = (
  variant: keyof typeof theme.components.button = "primary"
) => {
  return theme.components.button[variant];
};

export const getCardStyle = (
  variant: keyof typeof theme.components.card = "default"
) => {
  return theme.components.card[variant];
};

export const getInputStyle = (
  variant: keyof typeof theme.components.input = "default"
) => {
  return theme.components.input[variant];
};

export const getBadgeStyle = (
  variant: keyof typeof theme.components.badge = "primary"
) => {
  return theme.components.badge[variant];
};

export const getGradient = (
  variant: keyof typeof theme.gradients = "primary"
) => {
  return theme.gradients[variant];
};

// Responsive utilities
export const responsive = {
  // Mobile-first breakpoints
  mobile: "(max-width: 640px)",
  tablet: "(min-width: 641px) and (max-width: 1024px)",
  desktop: "(min-width: 1025px)",

  // Specific device targeting
  phone: "(max-width: 480px)",
  smallTablet: "(min-width: 481px) and (max-width: 768px)",
  largeTablet: "(min-width: 769px) and (max-width: 1024px)",
  smallDesktop: "(min-width: 1025px) and (max-width: 1280px)",
  largeDesktop: "(min-width: 1281px)",
};

export default theme;
