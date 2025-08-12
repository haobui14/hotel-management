"use client";

import {
  theme,
  getButtonStyle,
  getCardStyle,
  getInputStyle,
  getBadgeStyle,
  getGradient,
  responsive,
} from "@/styles/theme";

export const useTheme = () => {
  return {
    theme,
    colors: theme.colors,
    components: theme.components,
    breakpoints: theme.breakpoints,
    gradients: theme.gradients,
    helpers: {
      getButtonStyle,
      getCardStyle,
      getInputStyle,
      getBadgeStyle,
      getGradient,
    },
    responsive,
  };
};

export default useTheme;
