import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html,body": {
        scrollBehavior: "smooth",
      },
    },
  },

  fonts: {
    body: `'Merriweather Sans', 'sans-serif'`,
    heading: `'Merriweather Sans', 'sans-serif'`,
  },
  config: {
    cssVarPrefix: "nonD",
  },
});
