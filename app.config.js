/**
 * Dynamic app config file of expo app
 * This configuration file is loaded build time of JS code
 * More info: https://docs.expo.io/workflow/configuration/#app-config
 */

//import "dotenv/config";

export default {
  name: "flow-launcher",
  slug: "flow-launcher",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#0FA858",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    //usesAppleSignIn: true,
    bundleIdentifier: "com.koelkast.flowlauncher",
  },
  android: {
    package: "com.koelkast.flowlauncher",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#0FA858",
    },
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
};
